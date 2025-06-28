import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import { AuthProvider } from './contexts/AuthContext'
import { CartProvider } from './contexts/CartContext'
import Header from './components/Header'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import Menu from './pages/Menu'
import Cart from './pages/Cart'
import Checkout from './pages/Checkout'
import Auth from './pages/Auth'
import About from './pages/About'
import Contact from './pages/Contact'
import Profile from './pages/profile'
import OrdersDashboard from './pages/OrdersDashboard'

function App() {
  // GitHub Pages routing fix
  React.useEffect(() => {
    // Check if we need to redirect from GitHub Pages 404 hack
    if (window.location.search.includes('/?/')) {
      const redirect = window.location.search
        .slice(1)
        .split('&')
        .find(param => param.startsWith('/'))
        ?.replace(/~and~/g, '&');
      
      if (redirect) {
        window.history.replaceState(null, '', redirect);
      }
    }
  }, []);

  return (
    <AuthProvider>
      <CartProvider>
        <Router basename="/tastygrill">
          <div className="min-h-screen flex flex-col safe-area-inset">
            <Header />
            <main className="flex-1">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/menu" element={<Menu />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/auth" element={<Auth />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/orders-dashboard" element={<OrdersDashboard />} />
              </Routes>
            </main>
            <Footer />
            <ScrollToTop />
            <Toaster
              position="top-right"
              toastOptions={{
                duration: 4000,
                style: {
                  background: '#363636',
                  color: '#fff',
                  borderRadius: '12px',
                  boxShadow: '0 10px 25px rgba(0,0,0,0.2)',
                  fontSize: '14px',
                  fontWeight: '500',
                },
                success: {
                  style: {
                    background: 'linear-gradient(135deg, #10B981 0%, #059669 100%)',
                  },
                },
                error: {
                  style: {
                    background: 'linear-gradient(135deg, #EF4444 0%, #DC2626 100%)',
                  },
                },
              }}
            />
          </div>
        </Router>
      </CartProvider>
    </AuthProvider>
  )
}

export default App