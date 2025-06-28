import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ShoppingCart, User, Menu, X, Phone, Clock } from 'lucide-react'
import { useAuth } from '../contexts/AuthContext'
import { useCart } from '../contexts/CartContext'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { user, signOut } = useAuth()
  const { itemCount } = useCart()
  const navigate = useNavigate()

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleSignOut = async () => {
    try {
      await signOut()
      navigate('/')
    } catch (error) {
      console.error('Error signing out:', error)
    }
  }

  return (
    <header className={`sticky top-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-xl' 
        : 'bg-white shadow-lg'
    }`}>
      {/* Top bar with contact info */}
      <div className="bg-gradient-to-r from-red-600 to-red-700 text-white py-2 animate-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-4 animate-slide-in-left">
              <div className="flex items-center space-x-1 hover:scale-105 transition-transform duration-300">
                <Phone className="h-4 w-4 animate-pulse-soft" />
                <span className="text-white">01489 880123</span>
              </div>
              <div className="flex items-center space-x-1 hover:scale-105 transition-transform duration-300">
                <Clock className="h-4 w-4 animate-pulse-soft" />
                <span className="text-white">Open: 3:00 PM - 11:00 PM Daily</span>
              </div>
            </div>
            <div className="hidden sm:block animate-slide-in-right">
              <span className="hover:scale-105 transition-transform duration-300 inline-block text-white">
                12 Middle Road, Southampton SO31 7GH
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group animate-fade-in">
            <div className="relative overflow-hidden rounded-xl transform group-hover:scale-110 transition-all duration-500">
              <img 
                src="https://i.postimg.cc/wjTb4hRZ/Capture.jpg" 
                alt="Tasty Grill Parkgate Logo" 
                className="h-12 w-auto transition-all duration-500 group-hover:brightness-110"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 animate-shimmer"></div>
            </div>
            <div className="transform group-hover:translate-x-1 transition-transform duration-300">
              <h1 className="text-2xl font-bold text-gray-900 gradient-text">Tasty Grill</h1>
              <p className="text-sm text-gray-700 group-hover:text-red-600 transition-colors duration-300">Parkgate</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 animate-fade-in">
            {[
              { to: '/', label: 'Home' },
              { to: '/menu', label: 'Menu' },
              { to: '/about', label: 'About' },
              { to: '/contact', label: 'Contact' }
            ].map((item, index) => (
              <Link
                key={item.to}
                to={item.to}
                className={`relative text-gray-800 hover:text-red-600 font-medium transition-all duration-300 hover:scale-110 animate-fade-in stagger-${index + 1} group`}
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-red-600 to-red-700 group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
          </nav>

          {/* Right side buttons */}
          <div className="flex items-center space-x-4 animate-fade-in">
            {/* Cart */}
            <Link
              to="/cart"
              className="relative p-3 text-gray-800 hover:text-red-600 transition-all duration-300 hover:scale-110 hover:bg-red-50 rounded-xl group"
            >
              <ShoppingCart className="h-6 w-6 group-hover:animate-bounce" />
              {itemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-gradient-to-r from-red-600 to-red-700 text-white text-xs rounded-full h-6 w-6 flex items-center justify-center animate-bounce-in font-bold shadow-lg">
                  {itemCount}
                </span>
              )}
            </Link>

            {/* User menu */}
            {user ? (
              <div className="relative group">
                <button className="flex items-center space-x-1 text-gray-800 hover:text-red-600 transition-all duration-300 hover:scale-110 p-2 hover:bg-red-50 rounded-xl">
                  <User className="h-6 w-6" />
                  <span className="hidden sm:block">Account</span>
                </button>
                <div className="absolute right-0 mt-2 w-48 bg-white/95 backdrop-blur-md rounded-xl shadow-2xl py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 border border-gray-100">
                  <Link
                    to="/orders"
                    className="block px-4 py-3 text-sm text-gray-800 hover:bg-red-50 hover:text-red-600 transition-all duration-200 hover:translate-x-1"
                  >
                    My Orders
                  </Link>
                  <Link
                    to="/profile"
                    className="block px-4 py-3 text-sm text-gray-800 hover:bg-red-50 hover:text-red-600 transition-all duration-200 hover:translate-x-1"
                  >
                    Profile
                  </Link>
                  <button
                    onClick={handleSignOut}
                    className="block w-full text-left px-4 py-3 text-sm text-gray-800 hover:bg-red-50 hover:text-red-600 transition-all duration-200 hover:translate-x-1"
                  >
                    Sign Out
                  </button>
                </div>
              </div>
            ) : (
              <Link
                to="/auth"
                className="btn-primary animate-scale-in"
              >
                Sign In
              </Link>
            )}

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-gray-800 hover:text-red-600 transition-all duration-300 hover:scale-110 hover:bg-red-50 rounded-xl"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6 animate-spin" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden transition-all duration-500 ease-out ${
          isMenuOpen 
            ? 'max-h-64 opacity-100 translate-y-0' 
            : 'max-h-0 opacity-0 -translate-y-4'
        } overflow-hidden`}>
          <div className="border-t border-gray-200 py-4">
            <nav className="flex flex-col space-y-4">
              {[
                { to: '/', label: 'Home' },
                { to: '/menu', label: 'Menu' },
                { to: '/about', label: 'About' },
                { to: '/contact', label: 'Contact' }
              ].map((item, index) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className={`text-gray-800 hover:text-red-600 font-medium transition-all duration-300 hover:translate-x-2 hover:bg-red-50 p-3 rounded-lg animate-slide-in-left stagger-${index + 1}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}