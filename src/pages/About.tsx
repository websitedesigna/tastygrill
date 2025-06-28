import React from 'react'
import { Clock, Phone, MapPin, Star, Award, Users, Heart } from 'lucide-react'

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-600 to-red-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Tasty Grill</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Serving the finest takeaway cuisine in Parkgate since our establishment. 
              We're passionate about delivering exceptional food and service to our community.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Tasty Grill was born from a passion for bringing authentic, delicious food to the 
                  Parkgate community. Located at 12 Middle Road in Southampton, we've become a 
                  beloved local destination for quality takeaway cuisine.
                </p>
                <p>
                  Our menu features an extensive selection of freshly made pizzas, authentic kebabs, 
                  juicy burgers, and much more. Every dish is prepared with care using the finest 
                  ingredients, ensuring that each bite delivers exceptional flavor and satisfaction.
                </p>
                <p>
                  We believe that great food brings people together, and we're proud to serve our 
                  community with meals that create lasting memories and satisfy every craving.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-red-100 to-red-200 rounded-lg p-8 text-center">
              <div className="text-6xl mb-4">🍕</div>
              <h3 className="text-2xl font-bold text-red-600 mb-2">Quality First</h3>
              <p className="text-gray-700">
                Every meal is crafted with premium ingredients and attention to detail
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              These core values guide everything we do, from food preparation to customer service.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Passion</h3>
              <p className="text-gray-600">
                We're passionate about food and dedicated to creating exceptional dining experiences 
                for every customer.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Quality</h3>
              <p className="text-gray-600">
                We never compromise on quality, using only the freshest ingredients and proven 
                cooking techniques.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Community</h3>
              <p className="text-gray-600">
                We're proud to be part of the Parkgate community and committed to serving our 
                neighbors with excellence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Visit Us Today</h2>
              <p className="text-gray-600">
                Experience the Tasty Grill difference. We're open daily and ready to serve you!
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="h-8 w-8 text-red-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Location</h3>
                <p className="text-gray-600">
                  12 Middle Road<br />
                  Southampton SO31 7GH
                </p>
              </div>

              <div className="text-center">
                <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="h-8 w-8 text-red-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Phone</h3>
                <p className="text-gray-600">
                  <a href="tel:01489880123" className="hover:text-red-600 transition-colors">
                    01489 880123
                  </a>
                </p>
              </div>

              <div className="text-center">
                <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-red-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Hours</h3>
                <p className="text-gray-600">
                  Daily<br />
                  3:00 PM - 11:00 PM
                </p>
              </div>
            </div>

            <div className="text-center mt-8">
              <div className="flex items-center justify-center space-x-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
                <span className="ml-2 text-gray-600">4.7 out of 5 stars</span>
              </div>
              <p className="text-gray-600">Rated by our satisfied customers</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}