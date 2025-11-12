"use client"

import Link from "next/link"
import Image from "next/image";
import { useState } from "react"
import { Menu, X, Search } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <>
      <header className="sticky top-0 z-50 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          {/* Logo */}
                  
         <Link href="/" className="flex items-center gap-2 flex-shrink-0">
      <Image
        src="/logo.png" // your image path in the public folder
        alt="Tafe Organics Logo"
        width={120}
        height={40}
        priority
      />
    </Link>


          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-gray-800 hover:text-[#752E2E] transition">
              Home
            </Link>
            <Link href="/shop" className="text-gray-800 hover:text-[#752E2E] transition">
              Shop
            </Link>
            <Link href="/shea-butter" className="text-gray-800 hover:text-[#752E2E] transition">
              Shea Butter
            </Link>
            <Link href="/bar-soap" className="text-gray-800 hover:text-[#752E2E] transition">
              Bar Soap
            </Link>
            <Link href="/about-us" className="text-gray-800 hover:text-[#752E2E] transition">
              About Us
            </Link>
          </nav>

          {/* Search Bar */}
          <div className="hidden md:flex items-center gap-2 bg-gray-100 px-4 py-2 rounded">
            <input type="text" placeholder="What Product?" className="bg-transparent outline-none text-sm w-32" />
            <button className="bg-[#752E2E] text-white p-2 rounded hover:bg-[#5a2222] transition">
              <Search size={16} />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-[#752E2E]">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden bg-gray-50 border-t px-4 py-4 flex flex-col gap-4">
            <Link href="/" className="text-gray-800 hover:text-[#752E2E]">
              Home
            </Link>
            <Link href="/shop" className="text-gray-800 hover:text-[#752E2E]">
              Shop
            </Link>
            <Link href="/shea-butter" className="text-gray-800 hover:text-[#752E2E]">
              Shea Butter
            </Link>
            <Link href="/bar-soap" className="text-gray-800 hover:text-[#752E2E]">
              Bar Soap
            </Link>
            <Link href="/about-us" className="text-gray-800 hover:text-[#752E2E]">
              About Us
            </Link>
          </nav>
        )}
      </header>
    </>
  )
}
