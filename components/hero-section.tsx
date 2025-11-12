"use client"

import Link from "next/link"
import { useEffect, useState } from "react"

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="bg-[#752E2E] text-white">
      <div className="max-w-7xl mx-auto px-4 py-16 md:py-24 flex items-center gap-8 md:gap-12">
        {/* Left Content */}
        <div
          className={`flex-1 transition-all duration-1000 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
        >
          <h1 className="text-4xl md:text-5xl font-serif font-bold leading-tight mb-6">
            Elevate Your Skincare With Pure Radiance
          </h1>
          <p className="text-lg mb-8 text-gray-100">Indulge in Nature's Luxury for a Naturally Beautiful You</p>
          <Link
            href="/shop"
            className="inline-block bg-[#6BBE49] text-white px-8 py-4 font-semibold rounded hover:bg-[#5aaa3f] transition text-lg"
          >
            SHOP OUR BEST-SELLING PRODUCTS
          </Link>
          <p className="text-sm mt-6 text-gray-200">Join over our 500 happy customers!</p>
        </div>

        {/* Right Product Image */}
        <div
          className={`flex-1 transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"}`}
        >
          <img src="/shea-butter-unrefined-product-packages-black-pouch.jpg" alt="Unrefined Shea Butter Products" className="w-full max-w-sm" />
        </div>
      </div>
    </section>
  )
}
