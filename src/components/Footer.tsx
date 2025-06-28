import React from 'react'
import { Phone, MapPin, Clock, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-20 h-20 bg-red-600/10 rounded-full animate-float"></div>
        <div className="absolute bottom-20 right-20 w-16 h-16 bg-red-600/5 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-32 right-1/4 w-12 h-12 bg-red-600/10 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Restaurant Info */}
          <div className="col-span-1 md:col-span-2 animate-fade-in">
            <div className="flex items-center space-x-3 mb-6 group">
              <div className="bg-gradient-to-br from-red-600 to-red-700 text-white p-3 rounded-xl group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <span className="text-xl font-bold">TG</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold group-hover:text-red-400 transition-colors duration-300 text-white">Tasty Grill</h3>
                <p className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300">Parkgate</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed hover:text-gray-200 transition-colors duration-300">
              Experience the finest takeaway cuisine in Parkgate. From authentic pizzas to delicious kebabs, 
              we serve quality food made with fresh ingredients.
            </p>
          </div>

          {/* Contact Info */}
          <div className="animate-fade-in" style={{animationDelay: '0.2s'}}>
            <h4 className="text-lg font-bold mb-6 text-red-400">Contact Info</h4>
            <div className="space-y-4">
              {[
                { icon: Phone, text: '01489 880123', href: 'tel:01489880123' },
                { icon: MapPin, text: '12 Middle Road, Southampton SO31 7GH', href: null },
                { icon: Mail, text: 'info@tastygrill.co.uk', href: 'mailto:info@tastygrill.co.uk' }
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-3 group hover:translate-x-2 transition-transform duration-300">
                  <div className="bg-red-600/20 p-2 rounded-lg group-hover:bg-red-600/30 transition-colors duration-300">
                    <item.icon className="h-4 w-4 text-red-400 group-hover:text-red-300 transition-colors duration-300" />
                  </div>
                  {item.href ? (
                    <a 
                      href={item.href}
                      className="text-gray-300 hover:text-white transition-colors duration-300 flex-1"
                    >
                      {item.text}
                    </a>
                  ) : (
                    <span className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300 flex-1">
                      {item.text}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Opening Hours */}
          <div className="animate-fade-in" style={{animationDelay: '0.4s'}}>
            <h4 className="text-lg font-bold mb-6 text-red-400">Opening Hours</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 group hover:translate-x-2 transition-transform duration-300">
                <div className="bg-red-600/20 p-2 rounded-lg group-hover:bg-red-600/30 transition-colors duration-300">
                  <Clock className="h-4 w-4 text-red-400 group-hover:text-red-300 transition-colors duration-300" />
                </div>
                <span className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300">Daily</span>
              </div>
              <p className="text-gray-300 ml-11 hover:text-gray-200 transition-colors duration-300">3:00 PM - 11:00 PM</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center animate-fade-in" style={{animationDelay: '0.6s'}}>
          <p className="text-gray-300 hover:text-gray-200 transition-colors duration-300 mb-2">
            © 2025 Tasty Grill Parkgate. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm hover:text-gray-300 transition-colors duration-300">
            Website made by Riley Oliver
          </p>
        </div>
      </div>
    </footer>
  )
}