"use client"

import { useState } from "react"
import { Eye } from 'lucide-react'
import { productsData } from "@/lib/products-data"
import Link from 'next/link'

export default function ShopPageContent() {
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null)
  const [sortBy, setSortBy] = useState("popularity")

  return (
    <main>
     

      {/* Shop Header with Title and Sort */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 border-b border-gray-200">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-2">Shop</h1>
            <p className="text-gray-600">Showing all {productsData.length} results</p>
          </div>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded bg-white text-gray-900 font-medium hover:border-gray-400 transition cursor-pointer"
          >
            <option value="popularity">Sort by popularity</option>
            <option value="price-low">Sort by price: Low to High</option>
            <option value="price-high">Sort by price: High to Low</option>
            <option value="newest">Sort by newest</option>
          </select>
        </div>
      </div>

      {/* Products Grid - Updated to 2 columns on mobile for consistency */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {productsData.map((product, index) => (
            <Link
              key={product.id} 
              href={`/products/${product.slug}`} 
              className="group"
            >
              <div
                className="relative overflow-hidden rounded-lg bg-gray-100 aspect-square mb-3 cursor-pointer"
                onMouseEnter={() => setHoveredProduct(product.id)}
                onMouseLeave={() => setHoveredProduct(null)}
              >
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {/* Quick View overlay */}
                {hoveredProduct === product.id && (
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center transition">
                    <div className="text-white text-center">
                      <Eye className="w-6 h-6 mx-auto mb-2" />
                      <span className="text-xs font-semibold">Quick View</span>
                    </div>
                  </div>
                )}
              </div>

              <div className="px-1">
                <h3 className="text-sm font-bold text-gray-900 uppercase mb-2 line-clamp-2">{product.name}</h3>
                
                {product.variants && product.variants.length > 0 ? (
                  <>
                    <p className="text-[#E89B3C] font-bold text-sm">₦{product.variants[0].price.toLocaleString()}.00</p>
                    <p className="text-xs text-gray-600 mb-3">{product.variants[0].weight}</p>
                  </>
                ) : (
                  <p className="text-[#E89B3C] font-bold text-sm mb-3">Price on request</p>
                )}

                <button className="w-full bg-gray-200 text-gray-700 font-semibold py-2 rounded hover:bg-gray-300 transition text-xs">
                  Add to cart
                </button>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  )
}
