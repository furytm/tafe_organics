import { Facebook, Twitter, Instagram, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="w-full bg-black text-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Follow Us */}
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-6">Follow Us</h3>
            <div className="flex justify-center gap-4">
              <a href="#" className="bg-blue-600 p-3 rounded hover:bg-blue-700 transition">
                <Facebook size={24} className="text-white" />
              </a>
              <a href="#" className="bg-sky-500 p-3 rounded hover:bg-sky-600 transition">
                <Twitter size={24} className="text-white" />
              </a>
              <a href="#" className="bg-pink-600 p-3 rounded hover:bg-pink-700 transition">
                <Instagram size={24} className="text-white" />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Phone size={20} />
              <div className="flex flex-col gap-2">
                <a href="tel:+2348108400962" className="hover:text-gray-300 transition">
                  +2348108400962
                </a>
                <span>|</span>
                <a href="tel:+2348024558959" className="hover:text-gray-300 transition">
                  +2348024558959
                </a>
              </div>
            </div>
          </div>

          {/* Address */}
          <div className="text-center">
            <div className="flex items-start justify-center gap-2">
              <MapPin size={20} className="mt-1 flex-shrink-0" />
              <p>House 2, C Close, Gowon Estate, Ipaja, Lagos.</p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-8"></div>

        {/* Copyright */}
        <div className="text-center text-gray-400 text-sm">
          <p>
            Copyright © 2025 Tafe Organics. Website Developed by <span className="text-[#CDE72D]">CDS</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
