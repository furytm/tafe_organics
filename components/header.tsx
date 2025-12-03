"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Menu, X, ShoppingBag } from "lucide-react"
import { usePathname } from "next/navigation"
import { useCart } from "@/contexts/cart-context"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()
  const { openCart, getTotalItems } = useCart()
  const totalItems = getTotalItems()

  return (
    <>
      <header className="sticky top-0 z-50 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-3 md:py-4 flex items-center justify-between">
          {/* Logo */}

          <Link href="/" className="flex items-center gap-2 flex-shrink-0">
            <Image src="/images/logo.png" alt="Tafe Organics Logo" width={120} height={40} priority />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex  playfairreg items-center gap-8">
            <Link href="/" className="text-gray-800 hover:text-[#752E2E] transition">
              Home
            </Link>
            <Link href="/shop" className="text-gray-800 hover:text-[#752E2E] transition">
              Shop
            </Link>
            <Link href="/shea-butter" className="text-gray-800 hover:text-[#752E2E] transition">
              Oils/Balms
            </Link>
            <Link href="/bar-soap" className="text-gray-800 hover:text-[#752E2E] transition">
              Soaps
            </Link>
            <Link href="/about-us" className="text-gray-800 hover:text-[#752E2E] transition">
              About Us
            </Link>
          </nav>

          <div className="flex items-center gap-4">
            {/* Cart Icon Button */}
            <button
              onClick={openCart}
              className="relative p-2 hover:bg-gray-100 rounded-full transition"
              aria-label="Open cart"
            >
              <ShoppingBag className="w-6 h-6 text-[#6BBE49]" />
              {totalItems > 0 && (
                <span className="absolute top-0 right-0 bg-[#E89B3C] text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </button>

            {/* Contact Button */}
            <Link
              href="/contact"
              className="inline-block bg-[#6BBE49] text-white px-5 py-3 md:px-8 md:py-4 
                         text-sm md:text-lg playfairbold font-semibold rounded-full 
                         hover:bg-[#5aaa3f] transition-all duration-300 hover:translate-y-[-2px]"
            >
              Contact Táfe
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-[#752E2E]">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden bg-gray-50 border-t playfairreg px-4 py-4 flex flex-col gap-4">
            <Link href="/" className="text-gray-800 hover:text-[#752E2E]" onClick={() => setIsMenuOpen(false)}>
              Home
            </Link>
            <Link href="/shop" className="text-gray-800 hover:text-[#752E2E]" onClick={() => setIsMenuOpen(false)}>
              Shop
            </Link>
            <Link
              href="/shea-butter"
              className="text-gray-800 hover:text-[#752E2E]"
              onClick={() => setIsMenuOpen(false)}
            >
              Oils/Balms
            </Link>
            <Link href="/bar-soap" className="text-gray-800 hover:text-[#752E2E]" onClick={() => setIsMenuOpen(false)}>
              Soaps
            </Link>
            <Link href="/about-us" className="text-gray-800 hover:text-[#752E2E]" onClick={() => setIsMenuOpen(false)}>
              About Us
            </Link>
          </nav>
        )}
      </header>
    </>
  )
}
