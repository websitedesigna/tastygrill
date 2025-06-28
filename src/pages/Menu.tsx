import React, { useState, useEffect } from 'react'
import MenuCard from '../components/MenuCard'
import { supabase } from '../lib/supabase'

interface MenuItem {
  id: string
  name: string
  description: string | null
  price_small: number | null
  price_medium: number | null
  price_large: number | null
  image_url: string | null
  category_name: string
}

interface MenuCategory {
  id: string
  name: string
  description: string | null
}

export default function Menu() {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([])
  const [categories, setCategories] = useState<MenuCategory[]>([])
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [loading, setLoading] = useState(true)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    loadMenuData()
    setIsVisible(true)
  }, [])

  const loadMenuData = async () => {
    try {
      // Load categories
      const { data: categoriesData, error: categoriesError } = await supabase
        .from('menu_categories')
        .select('*')
        .order('display_order')

      if (categoriesError) throw categoriesError

      // Load menu items with category names
      const { data: itemsData, error: itemsError } = await supabase
        .from('menu_items')
        .select(`
          *,
          menu_categories!inner(name)
        `)
        .eq('available', true)

      if (itemsError) throw itemsError

      const formattedItems = itemsData?.map(item => ({
        ...item,
        category_name: item.menu_categories.name
      })) || []

      setCategories(categoriesData || [])
      setMenuItems(formattedItems)
    } catch (error) {
      console.error('Error loading menu data:', error)
    } finally {
      setLoading(false)
    }
  }

  const filteredItems = selectedCategory === 'all' 
    ? menuItems 
    : menuItems.filter(item => item.category_name === selectedCategory)

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-50 to-gray-50">
        <div className="text-center">
          <div className="spinner mx-auto mb-4"></div>
          <p className="text-gray-700 text-lg animate-pulse-soft">Loading delicious menu...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-red-50/30 py-8 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-red-100/30 rounded-full animate-float"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-red-200/20 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-32 left-1/4 w-20 h-20 bg-red-100/40 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className={`text-4xl font-bold text-gray-900 mb-4 transition-all duration-1000 ${
            isVisible ? 'animate-slide-up opacity-100' : 'opacity-0 translate-y-10'
          }`}>
            Our <span className="gradient-text">Menu</span>
          </h1>
          <p className={`text-gray-700 max-w-2xl mx-auto transition-all duration-1000 delay-300 ${
            isVisible ? 'animate-slide-up opacity-100' : 'opacity-0 translate-y-10'
          }`}>
            Discover our delicious selection of pizzas, kebabs, burgers, and more. 
            All made with fresh ingredients and served hot.
          </p>
        </div>

        {/* Category Filter */}
        <div className={`flex flex-wrap justify-center gap-4 mb-8 transition-all duration-1000 delay-500 ${
          isVisible ? 'animate-slide-up opacity-100' : 'opacity-0 translate-y-10'
        }`}>
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
              selectedCategory === 'all'
                ? 'bg-gradient-to-r from-red-600 to-red-700 text-white shadow-lg'
                : 'bg-white text-gray-800 hover:bg-red-50 hover:text-red-600 shadow-md hover:shadow-lg'
            }`}
          >
            All Items
          </button>
          {categories.map((category, index) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.name)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 animate-fade-in ${
                selectedCategory === category.name
                  ? 'bg-gradient-to-r from-red-600 to-red-700 text-white shadow-lg'
                  : 'bg-white text-gray-800 hover:bg-red-50 hover:text-red-600 shadow-md hover:shadow-lg'
              }`}
              style={{animationDelay: `${(index + 1) * 0.1}s`}}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Menu Items Grid */}
        {filteredItems.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item, index) => (
              <div
                key={item.id}
                className="animate-fade-in"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <MenuCard
                  id={item.id}
                  name={item.name}
                  description={item.description || undefined}
                  priceSmall={item.price_small || undefined}
                  priceMedium={item.price_medium || undefined}
                  priceLarge={item.price_large || undefined}
                  image={item.image_url || undefined}
                  category={item.category_name}
                />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="animate-bounce-in">
              <span className="text-6xl mb-4 block">🍽️</span>
              <p className="text-gray-600 text-lg">No items found in this category.</p>
              <button
                onClick={() => setSelectedCategory('all')}
                className="btn-primary mt-4"
              >
                View All Items
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}