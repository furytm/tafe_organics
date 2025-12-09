"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"

const testimonials = [
  {
    quote:
      "Tafe Organics transformed my skin completely. The products are pure, effective, and I love that they're made right here in Africa.",
    name: "Chioma Okafor",
  },
  {
    quote:
      "I've tried so many brands, but nothing compares to the quality and care in Tafe products. My skin has never looked better!",
    name: "Zainab Ibrahim",
  },
  {
    quote:
      "As someone with sensitive skin, I finally found products that work without irritation. Tafe is my go-to now.",
    name: "Amara Adeyemi",
  },
  {
    quote:
      "The natural ingredients and sustainable packaging convinced me to try it, but the results made me a customer for life.",
    name: "Tola Oluwaseun",
  },
  {
    quote:
      "Every product feels luxurious yet affordable. Tafe truly celebrates African beauty and heritage beautifully.",
    name: "Ngozi Ikechi",
  },
  {
    quote: "My whole family uses Tafe now. The shea butter balm is simply magical for our skin!",
    name: "Jumoke Patel",
  },
]

export default function TestimonialsSection({ backgroundImage }: { backgroundImage: string }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [autoPlay, setAutoPlay] = useState(true)

  // Auto-slide every 5 seconds
  useEffect(() => {
    if (!autoPlay) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [autoPlay])

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    setAutoPlay(false)
  }

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    setAutoPlay(false)
  }

  return (
    <section
      className="relative bg-fixed bg-center bg-cover bg-no-repeat py-20 px-6 md:py-32"
      style={{ backgroundImage: "url('/images/neemoil.jpg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl playfairbold font-bold text-center text-white mb-16 tracking-widest">
          WHAT OUR CUSTOMERS SAY
        </h2>

        <div className="flex items-center justify-center gap-4">
          {/* Left Arrow */}
          <button
            onClick={goToPrev}
            onMouseEnter={() => setAutoPlay(false)}
            onMouseLeave={() => setAutoPlay(true)}
            className="hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-white/20 hover:bg-white/40 transition-colors z-20"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={24} className="text-white" />
          </button>

          {/* Testimonial Card */}
          <div className="flex-1 min-h-[280px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="w-full"
              >
                <div className="bg-white/95 backdrop-blur-sm rounded-lg p-8 md:p-12 shadow-xl">
                  {/* Quote Icon */}
                  <div className="text-5xl text-[#6BBE49] mb-4">"</div>

                  {/* Quote Text */}
                  <p className="text-lg md:text-xl text-gray-800 font-light leading-relaxed mb-6 italic">
                    {testimonials[currentIndex].quote}
                  </p>

                  {/* Author Name */}
                  <div className="flex items-center justify-between">
                    <p className="text-sm md:text-base font-semibold text-gray-700 playfairbold">
                      — {testimonials[currentIndex].name}
                    </p>
                    {/* Dots Indicator */}
                    <div className="flex gap-2">
                      {testimonials.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => {
                            setCurrentIndex(index)
                            setAutoPlay(false)
                          }}
                          className={`h-2 rounded-full transition-all ${
                            index === currentIndex ? "bg-[#6BBE49] w-6" : "bg-gray-300 w-2"
                          }`}
                          aria-label={`Go to testimonial ${index + 1}`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Arrow */}
          <button
            onClick={goToNext}
            onMouseEnter={() => setAutoPlay(false)}
            onMouseLeave={() => setAutoPlay(true)}
            className="hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-white/20 hover:bg-white/40 transition-colors z-20"
            aria-label="Next testimonial"
          >
            <ChevronRight size={24} className="text-white" />
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center justify-center gap-4 mt-8">
          <button
            onClick={goToPrev}
            className="flex items-center justify-center w-10 h-10 rounded-full bg-white/20 hover:bg-white/40 transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={20} className="text-white" />
          </button>

          <div className="flex gap-1">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentIndex(index)
                  setAutoPlay(false)
                }}
                className={`h-2 rounded-full transition-all ${
                  index === currentIndex ? "bg-white w-6" : "bg-white/40 w-2"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={goToNext}
            className="flex items-center justify-center w-10 h-10 rounded-full bg-white/20 hover:bg-white/40 transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight size={20} className="text-white" />
          </button>
        </div>
      </div>
    </section>
  )
}
