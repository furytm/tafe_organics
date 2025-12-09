"use client"
import { productsData } from "@/lib/products-data"
import ProductCard from "@/components/product-card"

export default function SheaButterPageContent() {
  const balmsAndOils = productsData.filter((p) => p.category === "Balms & Oils")

  return (
    <main>
      {/* PROMO BANNER */}
      <div className=" bg-[#6BBE49] text-center py-3 text-sm playfairreg font-semibold text-gray-800">
        ★ ★ ★ ★ ★ Free Standard Shipping on Orders Over ₦100k.
      </div>
      <div className="py-12 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-8 gap-4 animate-fadeIn">
            <div>
              <h1 className="text-4xl md:text-5xl  playfairbold font-bold mb-2 animate-slideDown">Balms & Oils</h1>
              <p className="text-gray-600 animate-slideUp">Showing all {balmsAndOils.length} results</p>
            </div>

            {/* Sort Dropdown */}
            <select className="border border-gray-300 px-4 py-2 rounded bg-white text-gray-900 font-medium animate-slideUp">
              <option>Sort by popularity</option>
              <option>Sort by price: low to high</option>
              <option>Sort by price: high to low</option>
              <option>Sort by newest</option>
            </select>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
            {balmsAndOils.map((product, idx) => (
              <div
                key={product.id}
                style={{ animation: `slideUp 0.6s ease-out ${idx * 50}ms forwards`, opacity: 0 }}
                className="animate-slideUp"
              >
                <ProductCard product={product} showVariantSelector={true} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}
