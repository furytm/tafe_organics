"use client"

import { useState } from "react"
import { Eye } from "lucide-react"

const products = [
  {
    id: 1,
    name: "Unrefined Shea Butter",
    price: 2500,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/UNREFINED%20SHEA%20BUTTER-HWHWBJOLKN79zhkQpigpcXzsi9FLsB.jpg",
  },
  {
    id: 2,
    name: "Shea Cocoa Balm",
    price: 7000,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/SHEA%20COCOA%20BALM-NPPV5p0XqOXJD9p1hTjfig3WfHQVR3.jpg",
    outOfStock: true,
  },
  {
    id: 3,
    name: "Raw African Black Soap",
    price: 3500,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/RAW%20AFRICAN%20BLACK-l1yDXQDdg3pgCmpKhqaqakBuvNvZdH.jpg",
  },
  {
    id: 4,
    name: "Oats + Honey Soap",
    price: 3500,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/OATS%20%2B%20HONEY%20SOAP-IJEmXycASGmCpCBwPOJCebkcf5XVLD.jpg",
  },
  {
    id: 5,
    name: "Coffee + Tea Tree Soap",
    price: 3500,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/COFFEE%20%2B%20TEA%20TREE-WV12E3zZuSb7W063uV5xHwU0LotWti.jpg",
  },
  {
    id: 6,
    name: "Carrot Soap",
    price: 3000,
    image: "/carrot-soap-organic.jpg",
  },
  {
    id: 7,
    name: "Shea Butter Soap",
    price: 3500,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/SHEA%20BUTTER%20SOAP-xOsiQUfAtjMW6Q0HYEUqNDKsWqut70.jpg",
  },
]

export default function ProductsShowcase() {
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null)

  return (
    <section className="w-full bg-gray-50 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 uppercase tracking-wide mb-2">
            Achieve Your Skin Goals, Faster.
          </h2>
          <p className="text-gray-600 text-lg">I'd like to browse for...</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {products.map((product) => (
            <div key={product.id} className="group">
              <div
                className="relative overflow-hidden rounded-lg bg-white h-64 mb-4 shadow-sm hover:shadow-md transition cursor-pointer"
                onMouseEnter={() => setHoveredProduct(product.id)}
                onMouseLeave={() => setHoveredProduct(null)}
              >
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                {product.outOfStock && (
                  <div className="absolute top-2 left-2 bg-red-700 text-white px-3 py-1 text-xs font-semibold rounded">
                    Out Of Stock
                  </div>
                )}
                {hoveredProduct === product.id && (
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center transition">
                    <div className="text-white text-center">
                      <Eye className="w-8 h-8 mx-auto mb-2" />
                      <span className="text-sm font-semibold">Quick View</span>
                    </div>
                  </div>
                )}
              </div>
              <h3 className="text-sm font-bold text-gray-900 uppercase mb-2">{product.name}</h3>
              <p className="text-gray-700 font-semibold mb-3">₦{product.price.toLocaleString()}.00</p>
              <button className="w-full bg-[#CDE72D] text-black font-bold py-2 rounded hover:bg-[#b5d023] transition">
                Add to cart
              </button>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center gap-4">
          <button className="bg-black text-white font-bold px-8 py-3 rounded hover:bg-gray-800 transition uppercase tracking-wide">
            Shop All Our Skincare Products
          </button>
          <p className="text-gray-600 text-sm">Free Standard Shipping On Orders Over ₦100k</p>
        </div>
      </div>
    </section>
  )
}
