"use client"

import { Instagram, Mail } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-black text-white py-20 px-6 ">
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-16">
        
        {/* LEFT — Brand & Social */}
        <div className="text-center lg:text-left">
          {/* Replace Text With Logo Image */}
          <div className="flex justify-center lg:justify-start mb-6">
            <Image src="/images/logo.png" alt="Táfe Organics Logo" width={160} height={80} className="object-contain" />
          </div>

          <p className="text-gray-300 text-sm max-w-sm mx-auto lg:mx-0 mb-6">
            Pure. Organic. Beautiful. Experience nature’s finest skincare made with love.
          </p>

          {/* Social Icons */}
          <div className="flex justify-center lg:justify-start gap-4 mt-4">
            {/* Instagram */}
            <a
              href="https://www.instagram.com/tafeorganics"
              target="_blank"
              className="bg-[#E4405F] p-3 rounded-full hover:opacity-80 transition"
              rel="noreferrer"
            >
              <Instagram size={22} />
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/2348108400962"
              target="_blank"
              className="bg-[#25D366] p-3 rounded-full hover:opacity-80 transition flex items-center justify-center"
              rel="noreferrer"
            >
              <img src="/images/whatsapp3.webp" alt="WhatsApp" className="w-5 h-5 object-contain" />
            </a>
          </div>
        </div>

        {/* MIDDLE — Contact Form */}
        <div>
          <h3 className="text-2xl font-semibold mb-6 text-center lg:text-left">Send Us a Message</h3>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your name"
              className="w-full bg-white/10 border border-white/20 rounded-lg py-3 px-4 text-white placeholder-gray-300 focus:outline-none focus:border-[#6BBE49]"
            />
            <input
              type="email"
              placeholder="Your email"
              className="w-full bg-white/10 border border-white/20 rounded-lg py-3 px-4 text-white placeholder-gray-300 focus:outline-none focus:border-[#6BBE49]"
            />
            <textarea
              rows={4}
              placeholder="Your message"
              className="w-full bg-white/10 border border-white/20 rounded-lg py-3 px-4 text-white placeholder-gray-300 focus:outline-none focus:border-[#6BBE49]"
            ></textarea>

            <button
              type="submit"
              className="w-full bg-[#6BBE49] hover:bg-[#5aaa3f] transition py-3 rounded-lg font-semibold"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* RIGHT — Contact Info */}
        <div className="text-center lg:text-left">
          <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>

          <p className="text-gray-300 mb-3">📞 +2348108400962</p>
          <p className="text-gray-300 mb-3">📞 +2348024558959</p>

          <p className="text-gray-300 mb-6">📍 House 2, C Close, Gowon Estate, Ipaja, Lagos.</p>

          <p className="flex items-center justify-center lg:justify-start gap-2 text-gray-300">
            <Mail size={18} className="text-[#6BBE49]" />
            support@tafeorganics.com
          </p>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-16 pt-8 text-center text-gray-500 text-sm">
        <div className="mb-4 flex justify-center gap-6 text-xl">
          <Link href="/terms-and-conditions" className="hover:text-[#6BBE49] transition">
            Terms & Conditions
          </Link>
      
        </div>
        © 2025 Táfe Organics. Developed and Designed by{" "}
        <span className="inline-flex items-center justify-center mx-1">
          <Image src="/images/suwebatu.png" alt="Suwebatu" width={90} height={40} className="object-contain" />
        </span>
      </div>
    </footer>
  )
}
