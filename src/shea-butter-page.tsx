"use client"
import { productsData } from "@/lib/products-data"
import ProductCard from "@/components/product-card" 

export default function SheaButterPageContent() {
  const balmsAndOils = productsData.filter((p) => p.category === "Balms & Oils")

  return (
    <main>  
       {/* PROMO BANNER */}
      <div className=" bg-[#6BBE49] text-center py-3 text-sm playfairreg font-semibold text-gray-800">
        ★ ★ ★ ★ ★ 100% Pure, Organic and Natural Skin Beautifying Products.
      </div>
      <div className="py-12 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
     

          {/* Title and Results */}
          <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-8 gap-4">
            <div>
              <h1 className="text-4xl md:text-5xl  playfairbold font-bold mb-2">Balms & Oils</h1>
              <p className="text-gray-600">Showing all {balmsAndOils.length} results</p>
            </div>

            {/* Sort Dropdown */}
            <select className="border border-gray-300 px-4 py-2 rounded bg-white text-gray-900 font-medium">
              <option>Sort by popularity</option>
              <option>Sort by price: low to high</option>
              <option>Sort by price: high to low</option>
              <option>Sort by newest</option>
            </select>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
            {balmsAndOils.map((product) => (
              <div key={product.id}>
                <ProductCard product={product} showVariantSelector={true} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}
