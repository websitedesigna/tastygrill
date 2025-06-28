import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Clock, Phone, MapPin, Star, Truck, Shield, ChefHat } from 'lucide-react'

export default function Home() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="min-h-screen overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-red-600 via-red-700 to-red-800 text-white py-20 overflow-hidden animate-gradient">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-float"></div>
          <div className="absolute top-32 right-20 w-16 h-16 bg-white/5 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-white/10 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
          <div className="absolute bottom-32 right-1/3 w-24 h-24 bg-white/5 rounded-full animate-float" style={{animationDelay: '0.5s'}}></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="text-center">
            <h1 className={`text-4xl md:text-6xl font-bold mb-6 transition-all duration-1000 ${
              isVisible ? 'animate-slide-up opacity-100' : 'opacity-0 translate-y-10'
            }`}>
              Welcome to <span className="text-yellow-300 animate-pulse-soft">Tasty Grill</span>
            </h1>
            <p className={`text-xl md:text-2xl mb-8 max-w-3xl mx-auto transition-all duration-1000 delay-300 ${
              isVisible ? 'animate-slide-up opacity-100' : 'opacity-0 translate-y-10'
            }`}>
              Experience the finest takeaway cuisine in Parkgate. From authentic pizzas to delicious kebabs, 
              we serve quality food made with fresh ingredients.
            </p>
            <div className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 delay-500 ${
              isVisible ? 'animate-slide-up opacity-100' : 'opacity-0 translate-y-10'
            }`}>
              <Link
                to="/menu"
                className="btn-secondary text-lg px-8 py-4 animate-bounce-in"
              >
                View Our Menu
              </Link>
              <a
                href="tel:01489880123"
                className="btn-primary text-lg px-8 py-4 animate-bounce-in"
                style={{animationDelay: '0.2s'}}
              >
                Call to Order
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Info Bar */}
      <section className="bg-gradient-to-r from-gray-50 to-gray-100 py-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-50/50 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            {[
              { icon: Clock, title: 'Open Daily', subtitle: '3:00 PM - 11:00 PM', delay: '0.1s' },
              { icon: Phone, title: 'Call Us', subtitle: '01489 880123', delay: '0.3s' },
              { icon: MapPin, title: 'Location', subtitle: '12 Middle Road, Southampton', delay: '0.5s' }
            ].map((item, index) => (
              <div 
                key={index}
                className="flex items-center justify-center space-x-3 p-4 rounded-xl hover:bg-white/50 transition-all duration-500 hover:scale-105 animate-fade-in group"
                style={{animationDelay: item.delay}}
              >
                <div className="bg-gradient-to-br from-red-600 to-red-700 p-3 rounded-full group-hover:scale-110 transition-transform duration-300">
                  <item.icon className="h-6 w-6 text-white" />
                </div>
                <div className="text-left">
                  <p className="font-bold text-gray-900 group-hover:text-red-600 transition-colors duration-300">{item.title}</p>
                  <p className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300">{item.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-red-50/30 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 animate-fade-in">
              Why Choose <span className="gradient-text">Tasty Grill</span>?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto animate-fade-in" style={{animationDelay: '0.2s'}}>
              We're committed to providing the best takeaway experience with quality food, 
              fast service, and exceptional value.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                icon: ChefHat, 
                title: 'Fresh Ingredients', 
                description: 'We use only the freshest ingredients to ensure every meal is delicious and satisfying.',
                delay: '0.1s'
              },
              { 
                icon: Truck, 
                title: 'Fast Delivery', 
                description: 'Quick and reliable delivery service to get your food to you hot and fresh.',
                delay: '0.3s'
              },
              { 
                icon: Shield, 
                title: 'Secure Ordering', 
                description: 'Safe and secure online ordering with multiple payment options including PayPal.',
                delay: '0.5s'
              }
            ].map((feature, index) => (
              <div 
                key={index}
                className="text-center p-8 card-premium animate-fade-in group"
                style={{animationDelay: feature.delay}}
              >
                <div className="bg-gradient-to-br from-red-100 to-red-200 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-500 animate-float">
                  <feature.icon className="h-10 w-10 text-red-600 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="text-xl font-bold mb-4 group-hover:text-red-600 transition-colors duration-300">{feature.title}</h3>
                <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Items Preview */}
      <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-50/20 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 animate-fade-in">
              Popular <span className="gradient-text">Items</span>
            </h2>
            <p className="text-gray-600 animate-fade-in" style={{animationDelay: '0.2s'}}>Try our customer favorites</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { emoji: '🍕', title: 'Margherita Pizza', description: 'Classic cheese and tomato pizza', price: '£7.00', delay: '0.1s' },
              { emoji: '🥙', title: 'Lamb Doner', description: 'Specially prepared lamb, roasted on an oven spit', price: '£7.90', delay: '0.3s' },
              { emoji: '🍔', title: 'Special Burger', description: 'Our signature burger with all the trimmings', price: '£6.70', delay: '0.5s' }
            ].map((item, index) => (
              <div 
                key={index}
                className="card-premium overflow-hidden animate-fade-in group"
                style={{animationDelay: item.delay}}
              >
                <div className="h-48 bg-gradient-to-br from-red-100 via-red-50 to-red-100 flex items-center justify-center relative overflow-hidden animate-gradient">
                  <span className="text-6xl animate-float group-hover:scale-125 transition-transform duration-500">
                    {item.emoji}
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-red-600 transition-colors duration-300">{item.title}</h3>
                  <p className="text-gray-600 mb-4 group-hover:text-gray-700 transition-colors duration-300">{item.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-red-600 font-bold text-lg">From {item.price}</span>
                    <Link
                      to="/menu"
                      className="btn-primary transform hover:scale-105 transition-all duration-300"
                    >
                      Order Now
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-16 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-red-50/30 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 animate-fade-in">
              What Our <span className="gradient-text">Customers Say</span>
            </h2>
            <div className="flex items-center justify-center space-x-1 mb-4 animate-fade-in" style={{animationDelay: '0.2s'}}>
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  className="h-6 w-6 text-yellow-400 fill-current animate-bounce-in" 
                  style={{animationDelay: `${i * 0.1}s`}}
                />
              ))}
              <span className="ml-2 text-gray-600 font-semibold">4.7 out of 5 stars</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                text: "Amazing food quality and fast delivery! The pizza was perfect and the kebab was delicious. Will definitely order again.",
                author: "Sarah M.",
                delay: '0.1s'
              },
              {
                text: "Best takeaway in the area! Great variety on the menu and everything we've tried has been excellent. Highly recommended!",
                author: "John D.",
                delay: '0.3s'
              },
              {
                text: "Fantastic service and delicious food. The online ordering system is so easy to use. Our go-to place for takeaway!",
                author: "Emma L.",
                delay: '0.5s'
              }
            ].map((review, index) => (
              <div 
                key={index}
                className="card-premium p-6 animate-fade-in group hover:scale-105 transition-all duration-500"
                style={{animationDelay: review.delay}}
              >
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic group-hover:text-gray-700 transition-colors duration-300">
                  "{review.text}"
                </p>
                <p className="font-bold text-red-600">- {review.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}