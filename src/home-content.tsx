"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { productsData } from "@/lib/products-data"
import ProductCard from "@/components/product-card"

export default function HomeContent() {
  // HERO LOGIC
  const [currentSlide, setCurrentSlide] = useState(0)

   const slides = [
    {
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/home%20hero-T33ahnNY3KN0K2j2NlU6zun5ONHPsC.jpg",
      title: "Natural Skincare for Healthy, Conscious Living",
      subtitle: "Fragrance-free. Eco-friendly.",
      description: "Made with love for you and the planet",
    },
    {
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Unrefined%20Shea-Butter-N7jiY8NLvk84TQYl2IbS5QXUK5O4b5.jpg",
      title: "Nourish Your Skin Deeply",
      subtitle: "Pure. Organic. Beautiful.",
      description: "Discover shea-rich products crafted with love and purity.",
    },
    {
      image:
         "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Shea-Cocoa-Balm-SlxJQTQF1E8RNGps5SDdpgDfguAejB.jpg",
      // uses slide 1 text (as requested)
      title: "Elevate Your Skincare",
      subtitle: "With Pure Radiance",
      description: "Indulge in nature's luxury for a naturally beautiful you.",
    },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [])
  
  const categories = [
    { name: "Soaps", image: "/images/stack.jpg", href: "/bar-soap" },
    { name: "Scrubs", image: "/images/legs.jpg", href: "/shop" },
    { name: "Moisturizers", image: "/images/dip.jpg", href: "/shea-butter" },
    { name: "Gifts", image: "/images/gifts.webp", href: "/shop" },
  ]

  return (
    <main>

      {/* PROMO BANNER */}
      <div className=" bg-[#6BBE49] text-center py-3 text-sm playfairreg font-semibold text-gray-800">
        ★ ★ ★ ★ ★ 100% Pure, Organic and Natural Skin Beautifying Products.
      </div>

      {/* HERO SECTION */}
    <section className="relative w-full h-[40vh] md:h-[75vh] lg:h-screen overflow-hidden flex items-center">

      {/* Background Crossfade */}
      {slides.map((slide, index) => (
        <motion.div
          key={index}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: currentSlide === index ? 1 : 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        >
          <img src={slide.image} className="w-full h-full object-cover" alt="Hero slide" />
          <div className="absolute inset-0 bg-black/50" />
        </motion.div>
      ))}

      {/* Text Section */}
      <div className="relative z-10 max-w-4xl px-6 md:px-12 lg:px-20 text-left text-white">
        <motion.h1
          key={slides[currentSlide].title + currentSlide}
          initial={{ opacity: 0, x: -25 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          className="text-2xl sm:text-3x1 md:text-6xl lg:text-7xl playfairbold mb-4 leading-tight"
        >
          {slides[currentSlide].title}
        </motion.h1>

        <motion.p
          key={slides[currentSlide].subtitle + currentSlide}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.0, delay: 0.2 }}
          className="text-base sm:text-lg md:text-2xl playfairreg font-light mb-4"
        >
          {slides[currentSlide].subtitle}
        </motion.p>

        <motion.p
          key={slides[currentSlide].description + currentSlide}
          initial={{ opacity: 0, x: -15 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.0, delay: 0.35 }}
          className="text-base md:text-lg  playfairreg max-w-md font-light mb-6"
        >
          {slides[currentSlide].description}
        </motion.p>

   
<motion.div
  key={currentSlide + "-buttons"}
  initial={{ opacity: 0, x: -10 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 1.0, delay: 0.45 }}
  className="flex items-center gap-4 mt-4"
>
  {/* Shop Now - Primary Button */}
  <Link
    href="/shop"
className="inline-block bg-[#6BBE49] text-white px-6 py-3 md:px-8 md:py-4 text-sm md:text-lg playfairreg font-semibold rounded-lg hover:bg-[#5aaa3f] transition-all duration-300 hover:translate-y-[-2px]"

  >
    Shop Now
  </Link>

  {/* Explore Our Story - Transparent Secondary Button */}
  <Link
    href="/about-us"
  className="inline-block border border-white/80 text-white px-6 py-3 md:px-8 md:py-4 text-sm md:text-lg  playfairreg font-semibold rounded-lg backdrop-blur-sm hover:bg-white/10 transition-all duration-300 hover:translate-y-[-2px]"

  >
    Explore Our Story
  </Link>
</motion.div>

      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 left-10 flex gap-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              currentSlide === index ? "bg-white w-8" : "bg-white/50 w-2"
            }`}
          />
        ))}
      </div>
    </section>
      {/* BRAND INTRO */}
   
    <section className="py-20 md:py-24 px-4 text-center bg-white">
      <p className="text-2xl md:text-3xl font-serif text-gray-800 max-w-4xl mx-auto leading-relaxed">
        <span className="bg-[#752E2E] playfairreg text-white px-3 py-1 inline-block mr-2">"Táfe</span>
        Organics was established by a mom in her desperation to help her son's skin get better."
      </p>
    </section>


      {/* SHOP BY CATEGORY */}

    <section className="py-20 px-4 bg-white -mt-8 md:-mt-16 relative z-10">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl playfairbold font-bold text-center mb-12 md:mb-16 tracking-widest">SHOP BY CATEGORY</h2>

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
  

      {/* PRODUCT GRID */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl playfairbold font-bold tracking-widest">ACHIEVE YOUR SKIN GOALS, FASTER.</h2>
            <p className="text-gray-600">I'd like to browse for...</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {productsData.map((p) => (
              <ProductCard key={p.id} product={p} showVariantSelector />
            ))}
          </div>

          <div className="text-center">
            <Link href="/shop" className="bg-black text-white px-8 py-4 rounded text-lg font-semibold">
              SHOP ALL OUR SKINCARE PRODUCTS
            </Link>
            <p className="mt-4 text-sm text-gray-600">
              Free Standard Shipping on Orders Over ₦100k
            </p>
          </div>
        </div>
      </section>

    </main>
  )
}
