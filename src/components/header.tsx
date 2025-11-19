"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X, Search } from "lucide-react"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 flex-shrink-0">
            <div className="text-2xl font-bold text-[#752E2E]">Tafe</div>
            <div className="text-sm text-green-600 font-semibold">ORGANICS</div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-sm font-medium text-gray-900 hover:text-[#752E2E] transition">
              Home
            </Link>
            <Link href="/shop" className="text-sm font-medium text-gray-900 hover:text-[#752E2E] transition">
              Shop
            </Link>
            <Link href="/shea-butter" className="text-sm font-medium text-gray-900 hover:text-[#752E2E] transition">
              Shea Butter
            </Link>
            <Link href="/bar-soap" className="text-sm font-medium text-gray-900 hover:text-[#752E2E] transition">
              Bar Soap
            </Link>
            <Link href="/about-us" className="text-sm font-medium text-gray-900 hover:text-[#752E2E] transition">
              About Us
            </Link>
          </nav>

          {/* Search Bar and Mobile Menu */}
          <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center bg-gray-100 rounded-full px-4 py-2">
              <input
                type="text"
                placeholder="What Product?"
                className="bg-transparent text-sm placeholder-gray-500 outline-none w-32"
              />
              <button className="ml-2 bg-[#752E2E] text-white rounded-full p-2 hover:bg-[#6a2626] transition">
                <Search size={16} />
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden pb-4 space-y-3">
            <Link href="/" className="block text-sm font-medium text-gray-900 hover:text-[#752E2E]">
              Home
            </Link>
            <Link href="/shop" className="block text-sm font-medium text-gray-900 hover:text-[#752E2E]">
              Shop
            </Link>
            <Link href="/shea-butter" className="block text-sm font-medium text-gray-900 hover:text-[#752E2E]">
              Shea Butter
            </Link>
            <Link href="/bar-soap" className="block text-sm font-medium text-gray-900 hover:text-[#752E2E]">
              Bar Soap
            </Link>
            <Link href="/about-us" className="block text-sm font-medium text-gray-900 hover:text-[#752E2E]">
              About Us
            </Link>
          </nav>
        )}
      </div>
    </header>
  )
}
