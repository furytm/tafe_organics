"use client"

import Link from "next/link"
import { ChevronRight } from "lucide-react"

const categories = [
  {
    name: "Soaps",
    image: "/organic-bar-soap-with-natural-ingredients.jpg",
    href: "/bar-soap",
  },
  {
    name: "Scrubs",
    image: "/skin-scrub-product-natural-exfoliant.jpg",
    href: "/shop",
  },
  {
    name: "Moisturizers",
    image: "/organic-moisturizer-balm-natural-skincare.jpg",
    href: "/shea-butter",
  },
  {
    name: "Gifts",
    image: "/luxury-gift-set-organic-skincare-products.jpg",
    href: "/shop",
  },
]

export default function ShopByCategory() {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 tracking-widest">SHOP BY CATEGORY</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Link key={category.name} href={category.href}>
              <div className="group cursor-pointer overflow-hidden rounded-lg">
                <div className="relative overflow-hidden h-64 bg-gray-200">
                  <img
                    src={category.image || "/placeholder.svg"}
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
                  />
                </div>
                <div className="bg-white p-4 flex items-center justify-between hover:bg-gray-50">
                  <h3 className="font-bold text-lg text-gray-800">{category.name}</h3>
                  <ChevronRight size={20} className="text-[#752E2E]" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
