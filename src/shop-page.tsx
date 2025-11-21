"use client"

import { useState } from "react"
import { productsData } from "@/lib/products-data"
import ProductCard from "@/components/product-card" // Import ProductCard component

export default function ShopPageContent() {
  const [sortBy, setSortBy] = useState("popularity")

  return (
    <main>
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <p className="text-gray-600 text-sm">
          <a href="/" className="hover:text-gray-900">
            Home
          </a>{" "}
          / Shop
        </p>
      </div>

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

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {productsData.map((product) => (
            <div key={product.id}>
              <ProductCard product={product} showVariantSelector={true} />
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
