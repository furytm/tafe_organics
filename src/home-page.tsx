"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { useEffect, useState } from "react"

function PromoBanner() {
  return (
    <div className="bg-[#FFF4B0] text-center py-3 text-sm font-semibold text-gray-800">
      ★ ★ ★ ★ ★ 100% Pure, Organic and Natural Skin Beautifying Products.
    </div>
  )
}

function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  
  const slides = [
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/home%20hero-T33ahnNY3KN0K2j2NlU6zun5ONHPsC.jpg",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Unrefined%20Shea-Butter-N7jiY8NLvk84TQYl2IbS5QXUK5O4b5.jpg",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Shea-Cocoa-Balm-SlxJQTQF1E8RNGps5SDdpgDfguAejB.jpg",
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [slides.length])

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {slides.map((slide, index) => (
        <motion.div
          key={index}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: currentSlide === index ? 1 : 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        >
          <img
            src={slide || "/placeholder.svg"}
            alt={`Hero slide ${index + 1}`}
            className="w-full h-full object-cover"
          />
        </motion.div>
      ))}

      <div className="absolute inset-0 bg-black/45" />

      <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-white text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold mb-4 md:mb-6 leading-tight"
        >
          Elevate Your Skincare
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-2xl mb-8 md:mb-12 font-light max-w-2xl"
        >
          With Pure Radiance
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-base md:text-lg mb-8 max-w-xl font-light"
        >
          Indulge in Nature's Luxury for a Naturally Beautiful You
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <Link
            href="/shop"
            className="inline-block bg-[#6BBE49] text-white px-8 md:px-12 py-4 md:py-5 font-semibold rounded hover:bg-[#5aaa3f] transition text-base md:text-lg"
          >
            SHOP OUR BEST-SELLING PRODUCTS
          </Link>
        </motion.div>
      </div>

      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition ${
              currentSlide === index ? "bg-white w-8" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </section>
  )
}

function LoadingState() {
  return (
    <div className="min-h-screen bg-white">
      <div className="animate-pulse space-y-8 p-4">
        <div className="h-96 bg-gray-200 rounded-lg" />
        <div className="space-y-4">
          <div className="h-8 bg-gray-200 rounded w-1/4" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="space-y-2">
                <div className="aspect-square bg-gray-200 rounded-lg" />
                <div className="h-4 bg-gray-200 rounded" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default function HomeContent() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1500)
    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return <LoadingState />
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <PromoBanner />
      <HeroSection />
      {/* ... rest of home content ... */}
    </motion.div>
  )
}
