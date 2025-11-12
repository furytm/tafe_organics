"use client"

import { Eye, ShoppingCart } from "lucide-react"
import { useState } from "react"

const products = [
  {
    id: 1,
    name: "UNREFINED SHEA BUTTER",
    price: "₦2,800.00",
    image: "/unrefined-shea-butter-product-black-pouch.jpg",
    outOfStock: false,
  },
  {
    id: 2,
    name: "SHEA COCOA BALM",
    price: "₦7,000.00",
    image: "/shea-cocoa-balm-jar-organic-skincare.jpg",
    outOfStock: true,
  },
  {
    id: 3,
    name: "RAW AFRICAN BLACK SOAP",
    price: "₦1,500.00",
    image: "/raw-african-black-soap-bar-natural.jpg",
    outOfStock: false,
  },
  {
    id: 4,
    name: "OATS + HONEY SOAP",
    price: "₦3,500.00",
    image: "/oats-honey-soap-bar-natural-ingredients.jpg",
    outOfStock: false,
  },
  {
    id: 5,
    name: "COFFEE + TEA TREE SOAP",
    price: "₦3,500.00",
    image: "/coffee-tea-tree-soap-natural-exfoliating.jpg",
    outOfStock: false,
  },
  {
    id: 6,
    name: "CARROT SOAP",
    price: "₦3,000.00",
    image: "/carrot-soap-bar-natural-organic.jpg",
    outOfStock: false,
  },
  {
    id: 7,
    name: "SHEA BUTTER SOAP",
    price: "₦3,500.00",
    image: "/shea-butter-soap-bar-luxury-skincare.jpg",
    outOfStock: false,
  },
]

export default function ProductsShowcase() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-2 tracking-widest">ACHIEVE YOUR SKIN GOALS, FASTER.</h2>
          <p className="text-gray-600">I'd like to browse for...</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {products.map((product) => (
            <div
              key={product.id}
              onMouseEnter={() => setHoveredId(product.id)}
              onMouseLeave={() => setHoveredId(null)}
              className="flex flex-col"
            >
              {/* Product Image Container */}
              <div className="relative bg-gray-100 h-80 mb-4 overflow-hidden rounded">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />

                {/* Out of Stock Badge */}
                {product.outOfStock && (
                  <div className="absolute top-2 right-2 bg-[#752E2E] text-white px-3 py-1 text-sm font-semibold">
                    Out Of Stock
                  </div>
                )}

                {/* Hover Overlay */}
                {hoveredId === product.id && !product.outOfStock && (
                  <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center gap-3">
                    <button className="bg-white text-gray-800 px-6 py-2 rounded font-semibold flex items-center gap-2 hover:bg-gray-100">
                      <Eye size={18} /> Quick View
                    </button>
                  </div>
                )}
              </div>

              {/* Product Info */}
              <h3 className="font-bold text-center text-gray-800 text-sm mb-2 uppercase">{product.name}</h3>
              <p className="text-center text-[#752E2E] font-semibold mb-4">{product.price}</p>

              {/* Action Button */}
              <button
                disabled={product.outOfStock}
                className={`w-full py-2 rounded font-semibold flex items-center justify-center gap-2 transition ${
                  product.outOfStock
                    ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                    : "bg-[#6BBE49] text-white hover:bg-[#5aaa3f]"
                }`}
              >
                <ShoppingCart size={18} />
                {product.outOfStock ? "Out of Stock" : "Add to cart"}
              </button>
            </div>
          ))}
        </div>

        {/* Shop All Button */}
        <div className="text-center">
          <button className="bg-black text-white px-8 py-4 rounded font-semibold text-lg hover:bg-gray-800 transition">
            SHOP ALL OUR SKINCARE PRODUCTS
          </button>
          <p className="text-sm text-gray-600 mt-4">Free Standard Shipping on Orders Over ₦100k</p>
        </div>
      </div>
    </section>
  )
}
