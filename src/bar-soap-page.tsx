"use client"

import { useState } from "react"
import { Eye } from 'lucide-react'
import Link from 'next/link'
import { productsData } from "@/lib/products-data"

export default function BarSoapPageContent() {
  const soaps = productsData.filter(p => p.category === "Soaps")
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null)

  return (
    <main>
      <div className="py-12 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Breadcrumb */}
          <p className="text-gray-600 mb-6 text-sm">Home / Soaps</p>

          {/* Title and Results */}
          <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-8 gap-4">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-2">Soaps</h1>
              <p className="text-gray-600">Showing all {soaps.length} results</p>
            </div>

            {/* Sort Dropdown */}
            <select className="border border-gray-300 px-4 py-2 rounded bg-white text-gray-900 font-medium">
              <option>Sort by popularity</option>
              <option>Sort by price: low to high</option>
              <option>Sort by price: high to low</option>
              <option>Sort by newest</option>
            </select>
          </div>

          {/* Product Grid - Updated to match shop styling with 2 columns on mobile */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
            {soaps.map((product) => (
              <Link key={product.id} href={`/products/${product.slug}`} className="group">
                <div 
                  className="rounded-lg overflow-hidden bg-gray-100 aspect-square mb-3 relative hover:shadow-lg transition"
                  onMouseEnter={() => setHoveredProduct(product.id)}
                  onMouseLeave={() => setHoveredProduct(null)}
                >
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
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
                  <button className="w-full bg-gray-200 text-gray-700 py-2 rounded hover:bg-gray-300 transition text-xs font-semibold">
                    Add to cart
                  </button>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}
