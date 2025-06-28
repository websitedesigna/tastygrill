import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Minus, Plus, Trash2, ShoppingBag } from 'lucide-react'
import { useCart } from '../contexts/CartContext'
import { useAuth } from '../contexts/AuthContext'

export default function Cart() {
  const { items, total, updateQuantity, removeItem, itemCount } = useCart()
  const { user } = useAuth()
  const navigate = useNavigate()

  const handleQuantityChange = (id: string, newQuantity: number) => {
    if (newQuantity <= 0) {
      removeItem(id)
    } else {
      updateQuantity(id, newQuantity)
    }
  }

  const handleCheckout = () => {
    if (!user) {
      navigate('/auth?redirect=checkout')
    } else {
      navigate('/checkout')
    }
  }

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-red-50/30 py-8 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-32 h-32 bg-red-100/20 rounded-full animate-float"></div>
          <div className="absolute bottom-32 right-20 w-24 h-24 bg-red-200/15 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
        </div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center py-16">
            <div className="animate-bounce-in">
              <ShoppingBag className="h-32 w-32 text-gray-500 mx-auto mb-6 animate-float" />
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Your cart is empty</h2>
              <p className="text-gray-700 mb-8 text-lg">Add some delicious items from our menu to get started!</p>
              <Link
                to="/menu"
                className="btn-primary text-lg px-8 py-4"
              >
                Browse Menu
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-red-50/30 py-8 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-10 w-28 h-28 bg-red-100/20 rounded-full animate-float"></div>
        <div className="absolute bottom-40 left-20 w-20 h-20 bg-red-200/15 rounded-full animate-float" style={{animationDelay: '1.5s'}}></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h1 className="text-3xl font-bold text-gray-900 mb-8 animate-fade-in">
          Your <span className="gradient-text">Cart</span>
        </h1>

        <div className="card-premium overflow-hidden animate-slide-up">
          {/* Cart Items */}
          <div className="divide-y divide-gray-100">
            {items.map((item, index) => (
              <div 
                key={item.id} 
                className="p-6 hover:bg-red-50/50 transition-all duration-300 animate-fade-in group"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="flex items-center space-x-4">
                  {/* Item Image */}
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-red-100 to-red-200 rounded-xl overflow-hidden group-hover:scale-110 transition-transform duration-300">
                    {item.image ? (
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <span className="text-red-600 font-bold text-lg animate-pulse-soft">
                          {item.name.charAt(0)}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Item Details */}
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 group-hover:text-red-600 transition-colors duration-300">{item.name}</h3>
                    <p className="text-red-600 font-semibold">£{item.price.toFixed(2)}</p>
                  </div>

                  {/* Quantity Controls */}
                  <div className="flex items-center space-x-3 bg-gray-50 rounded-xl p-2 group-hover:bg-white transition-colors duration-300">
                    <button
                      onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                      className="p-2 rounded-full bg-white hover:bg-red-50 hover:text-red-600 transition-all duration-300 hover:scale-110 shadow-sm text-gray-700"
                    >
                      <Minus className="h-4 w-4" />
                    </button>
                    <span className="w-8 text-center font-bold text-lg text-gray-900">{item.quantity}</span>
                    <button
                      onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                      className="p-2 rounded-full bg-white hover:bg-red-50 hover:text-red-600 transition-all duration-300 hover:scale-110 shadow-sm text-gray-700"
                    >
                      <Plus className="h-4 w-4" />
                    </button>
                  </div>

                  {/* Item Total */}
                  <div className="text-right">
                    <p className="text-xl font-bold text-gray-900 group-hover:text-red-600 transition-colors duration-300">
                      £{(item.price * item.quantity).toFixed(2)}
                    </p>
                  </div>

                  {/* Remove Button */}
                  <button
                    onClick={() => removeItem(item.id)}
                    className="p-3 text-red-600 hover:bg-red-50 rounded-xl transition-all duration-300 hover:scale-110 group/delete"
                  >
                    <Trash2 className="h-5 w-5 group-hover/delete:animate-bounce" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Cart Summary */}
          <div className="bg-gradient-to-r from-red-50 to-red-100/50 p-6">
            <div className="flex justify-between items-center mb-6">
              <span className="text-xl font-semibold text-gray-900">
                Subtotal ({itemCount} items)
              </span>
              <span className="text-3xl font-bold gradient-text animate-pulse-soft">
                £{total.toFixed(2)}
              </span>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/menu"
                className="btn-secondary flex-1 text-center py-4 text-lg"
              >
                Continue Shopping
              </Link>
              <button
                onClick={handleCheckout}
                className="btn-primary flex-1 py-4 text-lg"
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}