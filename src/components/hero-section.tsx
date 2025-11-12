"use client"

import { useEffect, useState } from "react"

export default function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <section className="w-full bg-[#752E2E] py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Content */}
          <div
            className={`transition-all duration-1000 ${
              isLoaded ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6 leading-tight">
              Elevate Your Skincare With Pure Radiance
            </h1>
            <p className="text-lg md:text-xl text-white mb-8">
              Indulge in Nature's Luxury for a Naturally Beautiful You
            </p>
            <button className="bg-[#CDE72D] text-black font-bold px-8 py-3 rounded-lg hover:bg-[#b5d023] transition mb-8 w-full sm:w-auto">
              SHOP OUR BEST-SELLING PRODUCTS
            </button>
            <p className="text-white text-lg font-semibold">Join over our 500 happy customers!</p>
          </div>

          {/* Right Image */}
          <div
            className={`transition-all duration-1000 delay-200 ${
              isLoaded ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            <img src="/shea-butter-product-package.jpg" alt="Shea Butter Products" className="w-full max-w-md mx-auto" />
          </div>
        </div>
      </div>
    </section>
  )
}
