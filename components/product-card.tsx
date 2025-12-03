"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Eye, ShoppingCart, Check } from "lucide-react"
import type { Product } from "@/lib/products-data"
import { useCart } from "@/contexts/cart-context"

interface ProductCardProps {
  product: Product
  showVariantSelector?: boolean
}

export default function ProductCard({ product, showVariantSelector = true }: ProductCardProps) {
  const [selectedVariantIdx, setSelectedVariantIdx] = useState(0)
  const [hoveredProduct, setHoveredProduct] = useState(false)
  const [addedToCart, setAddedToCart] = useState(false)
  const { addToCart } = useCart()

  const currentVariant = product.variants?.[selectedVariantIdx]
  const currentPrice = currentVariant?.price || 0

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    addToCart(product, selectedVariantIdx, 1)
    setAddedToCart(true)
    setTimeout(() => setAddedToCart(false), 2000)
  }

  return (
    <div className="group">
      <Link href={`/products/${product.slug}`}>
        <div
          className="relative overflow-hidden rounded-lg bg-gray-100 aspect-square mb-3 cursor-pointer"
          onMouseEnter={() => setHoveredProduct(true)}
          onMouseLeave={() => setHoveredProduct(false)}
        >
          <img
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          {/* Quick View overlay */}
          {hoveredProduct && (
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center transition">
              <div className="text-white text-center">
                <Eye className="w-6 h-6 mx-auto mb-2" />
                <span className="text-xs font-semibold">View Details</span>
              </div>
            </div>
          )}
        </div>
      </Link>

      <div className="px-1">
        <h3 className="text-sm font-bold playfairreg text-gray-900 uppercase mb-2 line-clamp-2">{product.name}</h3>

        {showVariantSelector && product.variants && product.variants.length > 1 && (
          <div className="mb-2 flex flex-wrap gap-1">
            {product.variants.map((variant, idx) => (
              <button
                key={idx}
                onClick={(e) => {
                  e.preventDefault()
                  setSelectedVariantIdx(idx)
                }}
                className={`px-2 py-1 text-xs rounded border transition ${
                  selectedVariantIdx === idx
                    ? "border-[#E89B3C] bg-[#E89B3C] text-white"
                    : "border-gray-300 bg-white text-gray-600 hover:border-[#E89B3C]"
                }`}
              >
                {variant.weight}
              </button>
            ))}
          </div>
        )}

        {currentPrice > 0 ? (
          <>
            <p className="text-[#E89B3C] font-bold text-sm">₦{currentPrice.toLocaleString()}.00</p>
            <p className="text-xs text-gray-600 mb-3">{currentVariant?.weight}</p>
          </>
        ) : (
          <p className="text-[#E89B3C] font-bold text-sm mb-3">Price on request</p>
        )}

        <button
          onClick={handleAddToCart}
          className={`w-full text-white py-2 rounded transition text-xs font-semibold flex items-center justify-center gap-2 ${
            addedToCart ? "bg-green-600 hover:bg-green-700" : "bg-[#6BBE49] hover:bg-[#5aaa3f]"
          }`}
        >
          {addedToCart ? (
            <>
              <Check size={14} />
              Added to cart
            </>
          ) : (
            <>
              <ShoppingCart size={14} />
              Add to cart
            </>
          )}
        </button>
      </div>
    </div>
  )
}
