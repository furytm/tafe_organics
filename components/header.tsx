"use client"

import Link from "next/link"
import Image from "next/image";
import { useState } from "react"
import { Menu, X, Search } from 'lucide-react'
import { usePathname } from 'next/navigation'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  return (
    <>
      <header className="sticky top-0 z-50 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-3 md:py-4 flex items-center justify-between">
            {/* Logo */}
                  
         <Link href="/" className="flex items-center gap-2 flex-shrink-0">
      <Image
        src="/images/logo.png" // your image path in the public folder
        alt="Tafe Organics Logo"
        width={120}
        height={40}
        priority
      />
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

         <Link
  href="/contact"
  className="inline-block bg-[#6BBE49] text-white px-5 py-3 md:px-8 md:py-4 
             text-sm md:text-lg playfairbold font-semibold rounded-full 
             hover:bg-[#5aaa3f] transition-all duration-300 hover:translate-y-[-2px]"
>
  Contact Táfe
</Link>


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
