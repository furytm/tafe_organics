import { Facebook, Twitter, Instagram } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-black text-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Social Section */}
        <div className="text-center mb-12">
          <h3 className="text-4xl font-serif font-bold mb-8">Follow Us</h3>
          <div className="flex justify-center gap-4">
            <a href="#" className="bg-[#4267B2] p-4 rounded hover:opacity-80 transition">
              <Facebook size={24} />
            </a>
            <a href="#" className="bg-[#1DA1F2] p-4 rounded hover:opacity-80 transition">
              <Twitter size={24} />
            </a>
            <a href="#" className="bg-[#E4405F] p-4 rounded hover:opacity-80 transition">
              <Instagram size={24} />
            </a>
          </div>
        </div>

        {/* Contact Info */}
        <div className="text-center mb-8">
          <p className="text-lg mb-2">📞 +2348108400962 | +2348024558959</p>
          <p className="text-lg">📍 House 2, C Close, Gowon Estate, Ipaja, Lagos.</p>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-600 my-8"></div>

        {/* Copyright */}
        <div className="text-center text-gray-400">
          <p>
            Copyright © 2025 Táfe Organics. Developed and designed by Suwebatu <span className="text-[#6BBE49]">Suwebatu</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
