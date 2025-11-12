"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import { useState } from "react"
import { Eye } from "lucide-react"

const products = [
  {
    id: 1,
    name: "Oats + Honey Soap",
    price: 3500,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/OATS%20%2B%20HONEY%20SOAP-IJEmXycASGmCpCBwPOJCebkcf5XVLD.jpg",
  },
  {
    id: 2,
    name: "Carrot Soap",
    price: 3000,
    image: "/carrot-soap-natural.jpg",
  },
  {
    id: 3,
    name: "Shea Butter Soap",
    price: 3500,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/SHEA%20BUTTER%20SOAP-xOsiQUfAtjMW6Q0HYEUqNDKsWqut70.jpg",
  },
  {
    id: 4,
    name: "Coffee + Tea Tree Soap",
    price: 3500,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/COFFEE%20%2B%20TEA%20TREE-WV12E3zZuSb7W063uV5xHwU0LotWti.jpg",
  },
  {
    id: 5,
    name: "Unrefined Shea Butter",
    price: 2500,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/UNREFINED%20SHEA%20BUTTER-HWHWBJOLKN79zhkQpigpcXzsi9FLsB.jpg",
  },
  {
    id: 6,
    name: "Raw African Black Soap",
    price: 3500,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/RAW%20AFRICAN%20BLACK-l1yDXQDdg3pgCmpKhqaqakBuvNvZdH.jpg",
  },
  {
    id: 7,
    name: "Shea Cocoa Balm",
    price: 7000,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/SHEA%20COCOA%20BALM-NPPV5p0XqOXJD9p1hTjfig3WfHQVR3.jpg",
  },
]

export default function Shop() {
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null)
  const [sortBy, setSortBy] = useState("popularity")

  return (
    <main>
      <Header />
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
            <p className="text-gray-600">Showing all {products.length} results</p>
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {products.map((product) => (
            <div key={product.id} className="group">
              <div
                className="relative overflow-hidden rounded-lg bg-gray-100 h-64 mb-4 cursor-pointer"
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

              <h3 className="text-sm font-bold text-gray-900 uppercase mb-2 line-clamp-2">{product.name}</h3>
              <p className="text-[#E89B3C] font-bold mb-3">₦{product.price.toLocaleString()}.00</p>

              <button className="w-full bg-gray-200 text-gray-700 font-semibold py-2 rounded hover:bg-gray-300 transition">
                Add to cart
              </button>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </main>
  )
}
