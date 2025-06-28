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
  // Default fallback
  return '🍽️'
}