"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export default function AboutBrandSection() {
  return (
    <section className="py-16 md:py-24 px-4 bg-white">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          {/* Section Title */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl playfairbold font-bold text-[#752E2E] mb-4">Rooted in Nature's Care</h2>
            <div className="h-1 w-20 bg-[#6BBE49] mx-auto rounded-full"></div>
          </div>

          {/* Main Text Content */}
          <div className="space-y-6 text-gray-700 leading-relaxed text-lg">
            <p className="text-justify">
              At Tafe Organics, we believe skincare is more than a routine — it's a return to nature, to roots, and to
              the timeless wisdom of Africa. Born from the rich soils and ancient traditions of the continent, our
              products harness the power of indigenous botanicals — like Shea butter, Baobab, Neem and sustainably
              sourced Palm and special hand-picked herbs — ingredients that have nurtured African skin for generations.
            </p>

            <p className="text-justify">
              Each formulation is thoughtfully crafted to nourish, protect, and reveal your skin's natural radiance,
              blending ancestral knowledge with modern science. We are deeply committed to clean, conscious beauty —
              free from harmful chemicals, rooted in sustainability, and proudly made in Africa.
            </p>

            <p className="text-justify italic text-gray-600 border-l-4 border-[#6BBE49] pl-6">
              More than a skincare brand, Tafe Organics is a celebration of culture, heritage, and the healing gifts of
              our land.
            </p>
          </div>

          {/* Subtext and CTA */}
          <div className="bg-gradient-to-r from-[#FFF4B0]/30 to-transparent p-6 rounded-lg">
            <p className="text-gray-800 font-semibold mb-4">
              Tafe Organics is more than soap. It's a movement toward health-conscious, sustainable skincare inspired by
              nature, community, and ancestral knowledge.
            </p>
            <Link
              href="/about-us"
              className="inline-flex items-center text-[#6BBE49] font-semibold hover:text-[#5aaa3f] transition-colors duration-300 group"
            >
              <span className="underline underline-offset-4">Read Our Story</span>
              <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>

          {/* Closing Statement */}
          <div className="text-center pt-6 border-t border-gray-200">
            <p className="text-xl playfairreg font-medium text-[#752E2E]">
              With every product, we invite you to embrace your glow — naturally, beautifully, and unapologetically.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
