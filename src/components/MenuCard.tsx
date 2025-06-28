import React, { useState } from 'react'
import { Plus } from 'lucide-react'
import { useCart } from '../contexts/CartContext'
import toast from 'react-hot-toast'

interface MenuCardProps {
  id: string
  name: string
  description?: string
  priceSmall?: number
  priceMedium?: number
  priceLarge?: number
  image?: string
  category: string
}

// Get emoji based on menu item name and category
const getEmojiForItem = (name: string, category: string): string => {
  const itemName = name.toLowerCase()
  
  // Pizza emojis
  if (category === 'Pizza' || itemName.includes('pizza')) {
    return '🍕'
  }
  
  // Kebab emojis
  if (category === 'Kebabs' || itemName.includes('kebab') || itemName.includes('doner')) {
    return '🥙'
  }
  
  // Burger emojis
  if (category === 'Burgers' || itemName.includes('burger')) {
    return '🍔'
  }
  
  // Chicken dishes
  if (category === 'Chicken' || itemName.includes('chicken')) {
    if (itemName.includes('wings')) return '🍗'
    if (itemName.includes('nuggets')) return '🍗'
    return '🍗'
  }
  
  // Fish dishes
  if (category === 'Fish' || itemName.includes('fish') || itemName.includes('cod')) {
    return '🐟'
  }
  
  // Sides
  if (category === 'Sides') {
    if (itemName.includes('chips') || itemName.includes('fries')) return '🍟'
    if (itemName.includes('onion rings')) return '🧅'
    if (itemName.includes('salad')) return '🥗'
    if (itemName.includes('rice')) return '🍚'
    if (itemName.includes('bread') || itemName.includes('naan')) return '🍞'
    return '🍟'
  }
  
  // Drinks
  if (category === 'Drinks' || itemName.includes('drink') || itemName.includes('cola') || itemName.includes('water')) {
    if (itemName.includes('water')) return '💧'
    if (itemName.includes('juice')) return '🧃'
    return '🥤'
  }
  
  // Desserts
  if (category === 'Desserts' || itemName.includes('ice cream') || itemName.includes('cake')) {
    if (itemName.includes('ice cream')) return '🍦'
    if (itemName.includes('cake')) return '🍰'
    return '🍰'
  }
  
  // Wraps/Sandwiches
  if (itemName.includes('wrap') || itemName.includes('sandwich')) {
    return '🌯'
  }
  
  // Default food emoji
  return '🍽️'
}

export default function MenuCard({
  id,
  name,
  description,
  priceSmall,
  priceMedium,
  priceLarge,
  image,
  category
}: MenuCardProps) {
  const { addItem } = useCart()
  const [isAdding, setIsAdding] = useState<string | null>(null)

  const handleAddToCart = async (size?: string, price?: number) => {
    if (!price) return

    const itemId = size ? `${id}-${size}` : id
    const sizeKey = size || 'default'
    
    setIsAdding(sizeKey)
    
    // Add a small delay for visual feedback
    await new Promise(resolve => setTimeout(resolve, 300))
    
    addItem({
      id: itemId,
      name: size ? `${name} (${size})` : name,
      price,
      size,
      image
    })

    toast.success(`${name} added to cart!`, {
      icon: getEmojiForItem(name, category),
      style: {
        background: 'linear-gradient(135deg, #dc2626 0%, #b91c1c 100%)',
        color: 'white',
        borderRadius: '12px',
        boxShadow: '0 10px 25px rgba(220, 38, 38, 0.3)'
      }
    })
    
    setIsAdding(null)
  }

  const hasMultipleSizes = !!(priceSmall || priceMedium || priceLarge)
  const singlePrice = priceSmall || priceMedium || priceLarge
  const emoji = getEmojiForItem(name, category)

  return (
    <div className="card-premium relative group animate-fade-in hover-lift">
      {/* Emoji Display */}
      <div className="h-48 bg-gradient-to-br from-red-100 via-red-50 to-red-100 flex items-center justify-center relative overflow-hidden animate-gradient">
        <span className="text-6xl animate-float group-hover:scale-110 transition-transform duration-500 z-10">
          {emoji}
        </span>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
      </div>

      {/* Content */}
      <div className="p-6 relative">
        <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-red-600 transition-colors duration-300">
          {name}
        </h3>
        {description && (
          <p className="text-gray-700 text-sm mb-4 line-clamp-2 group-hover:text-gray-800 transition-colors duration-300">
            {description}
          </p>
        )}

        {/* Pricing */}
        <div className="space-y-3">
          {hasMultipleSizes ? (
            <div className="space-y-3">
              {priceSmall && (
                <div className="flex items-center justify-between p-2 rounded-lg hover:bg-red-50 transition-all duration-300 group/size">
                  <span className="text-sm font-medium text-gray-800 group-hover/size:text-red-600 transition-colors duration-300">
                    {category === 'Pizza' ? '9"' : 'Small'}
                  </span>
                  <div className="flex items-center space-x-3">
                    <span className="font-bold text-red-600 text-lg">£{priceSmall.toFixed(2)}</span>
                    <button
                      onClick={() => handleAddToCart('Small', priceSmall)}
                      disabled={isAdding === 'Small'}
                      className="bg-gradient-to-r from-red-600 to-red-700 text-white p-2 rounded-full hover:shadow-lg transform hover:scale-110 transition-all duration-300 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden"
                    >
                      {isAdding === 'Small' ? (
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      ) : (
                        <Plus className="h-4 w-4" />
                      )}
                      <div className="absolute inset-0 bg-white/20 -translate-x-full hover:translate-x-full transition-transform duration-500"></div>
                    </button>
                  </div>
                </div>
              )}
              {priceMedium && (
                <div className="flex items-center justify-between p-2 rounded-lg hover:bg-red-50 transition-all duration-300 group/size">
                  <span className="text-sm font-medium text-gray-800 group-hover/size:text-red-600 transition-colors duration-300">
                    {category === 'Pizza' ? '12"' : 'Medium'}
                  </span>
                  <div className="flex items-center space-x-3">
                    <span className="font-bold text-red-600 text-lg">£{priceMedium.toFixed(2)}</span>
                    <button
                      onClick={() => handleAddToCart('Medium', priceMedium)}
                      disabled={isAdding === 'Medium'}
                      className="bg-gradient-to-r from-red-600 to-red-700 text-white p-2 rounded-full hover:shadow-lg transform hover:scale-110 transition-all duration-300 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden"
                    >
                      {isAdding === 'Medium' ? (
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      ) : (
                        <Plus className="h-4 w-4" />
                      )}
                      <div className="absolute inset-0 bg-white/20 -translate-x-full hover:translate-x-full transition-transform duration-500"></div>
                    </button>
                  </div>
                </div>
              )}
              {priceLarge && (
                <div className="flex items-center justify-between p-2 rounded-lg hover:bg-red-50 transition-all duration-300 group/size">
                  <span className="text-sm font-medium text-gray-800 group-hover/size:text-red-600 transition-colors duration-300">
                    Large
                  </span>
                  <div className="flex items-center space-x-3">
                    <span className="font-bold text-red-600 text-lg">£{priceLarge.toFixed(2)}</span>
                    <button
                      onClick={() => handleAddToCart('Large', priceLarge)}
                      disabled={isAdding === 'Large'}
                      className="bg-gradient-to-r from-red-600 to-red-700 text-white p-2 rounded-full hover:shadow-lg transform hover:scale-110 transition-all duration-300 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden"
                    >
                      {isAdding === 'Large' ? (
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      ) : (
                        <Plus className="h-4 w-4" />
                      )}
                      <div className="absolute inset-0 bg-white/20 -translate-x-full hover:translate-x-full transition-transform duration-500"></div>
                    </button>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div className="flex items-center justify-between p-2 rounded-lg hover:bg-red-50 transition-all duration-300">
              <span className="text-xl font-bold text-red-600">
                £{singlePrice?.toFixed(2)}
              </span>
              <button
                onClick={() => handleAddToCart(undefined, singlePrice)}
                disabled={isAdding === 'default'}
                className="btn-primary flex items-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isAdding === 'default' ? (
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                ) : (
                  <Plus className="h-4 w-4" />
                )}
                <span>Add to Cart</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
