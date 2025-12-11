"use client"

import React, { createContext, useState, useCallback, useEffect } from "react"
import type { Product } from "@/lib/products-data"

export interface CartItem {
  id: number
  name: string
  price: number
  weight: string
  quantity: number
  image: string
  slug: string
}

interface CartContextType {
  items: CartItem[]
  isOpen: boolean
  openCart: () => void
  closeCart: () => void
  addToCart: (product: Product, variantIndex: number, quantity: number) => void
  removeFromCart: (id: string) => void
  updateQuantity: (id: string, quantity: number) => void
  getTotalItems: () => number
  getTotalPrice: () => number
  clearCart: () => void
}

export const CartContext = createContext<CartContextType | undefined>(undefined)

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([])
  const [isOpen, setIsOpen] = useState(false)
  const [isHydrated, setIsHydrated] = useState(false)

  useEffect(() => {
    const savedCart = localStorage.getItem("tafe-cart")
    if (savedCart) {
      try {
        setItems(JSON.parse(savedCart))
      } catch (error) {
        console.error("Failed to load cart from localStorage:", error)
      }
    }
    setIsHydrated(true)
  }, [])

  useEffect(() => {
    if (isHydrated) {
      localStorage.setItem("tafe-cart", JSON.stringify(items))
    }
  }, [items, isHydrated])

  const openCart = useCallback(() => setIsOpen(true), [])
  const closeCart = useCallback(() => setIsOpen(false), [])

  const addToCart = useCallback((product: Product, variantIndex: number, quantity: number) => {
    const variant = product.variants?.[variantIndex]
    if (!variant) return

    setItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id && item.weight === variant.weight)

      if (existingItem) {
        return prevItems.map((item) =>
          item.id === product.id && item.weight === variant.weight
            ? { ...item, quantity: item.quantity + quantity }
            : item,
        )
      }

      return [
        ...prevItems,
        {
          id: product.id,
          name: product.name,
          price: variant.price,
          weight: variant.weight,
          quantity,
          image: product.image,
          slug: product.slug,
        },
      ]
    })
  }, [])

  const removeFromCart = useCallback((id: string) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== Number.parseInt(id)))
  }, [])

  const updateQuantity = useCallback(
    (id: string, quantity: number) => {
      if (quantity <= 0) {
        removeFromCart(id)
        return
      }
      setItems((prevItems) => prevItems.map((item) => (item.id === Number.parseInt(id) ? { ...item, quantity } : item)))
    },
    [removeFromCart],
  )

  const clearCart = useCallback(() => {
    setItems([])
    localStorage.removeItem("tafe-cart")
  }, [])

  const getTotalItems = useCallback(() => {
    return items.reduce((total, item) => total + item.quantity, 0)
  }, [items])

  const getTotalPrice = useCallback(() => {
    return items.reduce((total, item) => total + item.price * item.quantity, 0)
  }, [items])

  return (
    <CartContext.Provider
      value={{
        items,
        isOpen,
        openCart,
        closeCart,
        addToCart,
        removeFromCart,
        updateQuantity,
        getTotalItems,
        getTotalPrice,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = React.useContext(CartContext)
  if (!context) {
    throw new Error("useCart must be used within CartProvider")
  }
  return context
}
