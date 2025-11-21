"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import Link from "next/link"
import { Eye, ShoppingCart, ChevronRight } from 'lucide-react'
import { productsData } from "@/lib/products-data"
import ProductCard from "@/components/product-card" 

// Promo Banner Component
function PromoBanner() {
  return (
    <div className="bg-[#FFF4B0] text-center py-3 text-sm font-semibold text-gray-800">
      ★ ★ ★ ★ ★ 100% Pure, Organic and Natural Skin Beautifying Products.
    </div>
  )
}

// Hero Section Component
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
   <section className="relative w-full h-[50vh] md:h-[70vh] lg:h-screen overflow-hidden">

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
          className="text-3xl md:text-6xl lg:text-7xl font-serif font-bold mb-4 md:mb-6 leading-tight"
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

// Brand Intro Component
function BrandIntro() {
  return (
    <section className="py-20 md:py-24 px-4 text-center bg-white">
      <p className="text-2xl md:text-3xl font-serif text-gray-800 max-w-4xl mx-auto leading-relaxed">
        <span className="bg-[#752E2E] text-white px-3 py-1 inline-block mr-2">"Táfe</span>
        Organics was established by a mom in her desperation to help her son's skin get better."
      </p>
    </section>
  )
}

// Shop By Category Component
function ShopByCategory() {
  const categories = [
    {
      name: "Soaps",
      image: "/images/stack.jpg",
      href: "/bar-soap",
    },
    {
      name: "Scrubs",
      image: "/images/legs.jpg",
      href: "/shop",
    },
    {
      name: "Moisturizers",
      image: "/images/dip.jpg",
      href: "/shea-butter",
    },
    {
      name: "Gifts",
      image: "/images/gifts.webp",
      href: "/shop",
    },
  ]

  return (
    <section className="py-20 px-4 bg-white -mt-8 md:-mt-16 relative z-10">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 md:mb-16 tracking-widest">SHOP BY CATEGORY</h2>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Link key={category.name} href={category.href}>
              <div className="group cursor-pointer overflow-hidden rounded-lg">
                <div className="relative overflow-hidden h-48 md:h-64 bg-gray-200">
                  <img
                    src={category.image || "/placeholder.svg"}
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
                  />
                </div>
                <div className="bg-white p-4 flex items-center justify-between hover:bg-gray-50 border">
                  <h3 className="font-bold text-sm md:text-lg text-gray-800">{category.name}</h3>
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

// Products Showcase Component
function ProductsShowcase() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  const displayProducts = productsData

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-2 tracking-widest">ACHIEVE YOUR SKIN GOALS, FASTER.</h2>
          <p className="text-gray-600">I'd like to browse for...</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {displayProducts.map((product) => (
            <div key={product.id} onMouseEnter={() => setHoveredId(product.id)} onMouseLeave={() => setHoveredId(null)}>
              <ProductCard product={product} showVariantSelector={true} />
            </div>
          ))}
        </div>

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

// Main Home Content Component
export default function HomeContent() {
  return (
    <main>
      <PromoBanner />
      <HeroSection />
      <BrandIntro />
      <ShopByCategory />
      <ProductsShowcase />
    </main>
  )
}
