"use client"

import { useState } from "react"
import { productsData } from "@/lib/products-data"



export default function ProductPageContent({ params }: { params: { slug: string } }) {
  
  console.log("Slug from URL:", params.slug)
  console.log("Available slugs:", productsData.map(p => p.slug))

  const product = productsData.find((p) => {
    console.log(
      " Looking for slug:",
      params.slug,
      "Available slugs:",
      productsData.map((p) => p.slug),
    )
    return p.slug === params.slug
  })
    console.log("Matched product:", product);
  const [quantity, setQuantity] = useState(1)
  const [selectedVariant, setSelectedVariant] = useState(0)
  const [activeTab, setActiveTab] = useState("description")

  if (!product) {
    return (
      <main>
        <div className="max-w-7xl mx-auto px-4 py-12 text-center">
          <h1 className="text-2xl font-bold">Product not found</h1>
        </div>
      </main>
    )
  }

  const relatedProducts = productsData.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4)
  const currentVariant = product.variants?.[selectedVariant]
  const currentPrice = currentVariant?.price || 0

  return (
    <main>
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <p className="text-gray-600 text-sm">
          <a href="/" className="hover:text-gray-900">Home</a> / <a href="/shop" className="hover:text-gray-900">Shop</a> / {product.name}
        </p>
      </div>

      {/* Product Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Product Image */}
          <div className="flex items-center justify-center bg-gray-100 rounded-lg overflow-hidden h-96">
            <img src={product.image || "/placeholder.svg"} alt={product.name} className="w-full h-full object-cover" />
          </div>

          {/* Product Details */}
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>
            <p className="text-2xl font-bold text-[#E89B3C] mb-4">₦{currentPrice.toLocaleString()}.00</p>

            <p className="text-gray-700 mb-6">{product.description}</p>

            {/* Variant Selection */}
            {product.variants && product.variants.length > 0 && (
              <div className="mb-6">
                <h3 className="font-semibold text-gray-900 mb-3">Select Weight:</h3>
                <div className="flex flex-wrap gap-2">
                  {product.variants.map((variant, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedVariant(idx)}
                      className={`px-4 py-2 border rounded transition ${
                        selectedVariant === idx
                          ? "border-[#E89B3C] bg-[#E89B3C] text-white"
                          : "border-gray-300 hover:border-gray-400"
                      }`}
                    >
                      {variant.weight}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity and Add to Cart */}
            <div className="flex gap-4 mb-6">
              <div className="flex items-center border border-gray-300 rounded">
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="px-4 py-2 text-gray-600">−</button>
                <input type="text" value={quantity} readOnly className="w-12 text-center border-l border-r border-gray-300" />
                <button onClick={() => setQuantity(quantity + 1)} className="px-4 py-2 text-gray-600">+</button>
              </div>
              <button className="flex-1 bg-[#6B4C8A] text-white font-bold py-2 rounded hover:bg-[#5a3f73] transition">
                Add to cart
              </button>
            </div>

            <div className="pt-6 border-t border-gray-200">
              <p className="text-gray-700"><span className="font-semibold">Category:</span> <span className="text-[#C4752B]">{product.category}</span></p>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="border-b border-gray-200 mb-8">
          <div className="flex gap-8">
            {["description", "additional", "reviews"].map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-4 px-2 font-semibold capitalize border-b-2 transition ${
                  activeTab === tab ? "border-[#C4752B] text-gray-900" : "border-transparent text-gray-600 hover:text-gray-900"
                }`}
              >
                {tab === "description" ? "Description" : tab === "additional" ? "Additional Information" : "Reviews (0)"}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <div className="mb-12">
          {activeTab === "description" && (
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-4">Description</h2>
              <h3 className="font-semibold text-gray-900 mb-3">How to use</h3>
              <p className="text-gray-700 mb-4">{product.howToUse}</p>
              <h3 className="font-semibold text-gray-900 mb-3">Ingredients:</h3>
              <p className="text-gray-700 mb-4">{product.ingredients}</p>
              <h3 className="font-semibold text-gray-900 mb-3">Related categories:</h3>
              <p className="text-gray-700">{product.relatedCategories}</p>
            </div>
          )}
          {activeTab === "additional" && (
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-4">Additional Information</h2>
              <div className="space-y-3">
                {currentVariant && (
                  <>
                    <p><span className="font-semibold">Size:</span> {currentVariant.weight}</p>
                    <p><span className="font-semibold">Price:</span> ₦{currentPrice.toLocaleString()}.00</p>
                  </>
                )}
                <p><span className="font-semibold">Category:</span> {product.category}</p>
              </div>
            </div>
          )}
          {activeTab === "reviews" && (
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-4">Reviews</h2>
              <p className="text-gray-600">No reviews yet. Be the first to review this product!</p>
            </div>
          )}
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Related products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map(relatedProduct => (
                <a key={relatedProduct.id} href={`/products/${relatedProduct.slug}`} className="group">
                  <div className="bg-gray-100 rounded-lg overflow-hidden h-48 mb-3">
                    <img src={relatedProduct.image || "/placeholder.svg"} alt={relatedProduct.name} className="w-full h-full object-cover group-hover:scale-105 transition" />
                  </div>
                  <h3 className="font-bold text-gray-900 text-sm mb-2">{relatedProduct.name}</h3>
                  {relatedProduct.variants && relatedProduct.variants.length > 0 ? (
                    <p className="text-[#E89B3C] font-bold">₦{relatedProduct.variants[0].price.toLocaleString()}.00</p>
                  ) : (
                    <p className="text-[#E89B3C] font-bold">Price on request</p>
                  )}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  )
}
