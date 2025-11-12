"use client"

import { useState } from "react"
import Link from "next/link"

const categories = [
  {
    id: 1,
    name: "Soaps",
    image: "/organic-bar-soap.jpg",
    link: "/bar-soap",
  },
  {
    id: 2,
    name: "Scrubs",
    image: "/natural-body-scrub.jpg",
    link: "/shop",
  },
  {
    id: 3,
    name: "Moisturizers",
    image: "/organic-moisturizer-cream.jpg",
    link: "/shea-butter",
  },
  {
    id: 4,
    name: "Gifts",
    image: "/organic-beauty-gift-set.jpg",
    link: "/shop",
  },
]

export default function ShopByCategory() {
  const [hovered, setHovered] = useState<number | null>(null)

  return (
    <section className="w-full bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12 uppercase tracking-wide">
          Shop By Category
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Link key={category.id} href={category.link}>
              <div
                className={`group cursor-pointer transition-all duration-300 ${
                  hovered === category.id ? "scale-105" : ""
                }`}
                onMouseEnter={() => setHovered(category.id)}
                onMouseLeave={() => setHovered(null)}
              >
                <div className="relative overflow-hidden rounded-lg h-64 bg-gray-100 mb-4 shadow-md group-hover:shadow-lg transition">
                  <img
                    src={category.image || "/placeholder.svg"}
                    alt={category.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-gray-900">{category.name}</h3>
                  <span className="text-2xl text-gray-600 group-hover:text-[#752E2E] transition">›</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
