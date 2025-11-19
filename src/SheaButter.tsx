import Header from "@/components/header"
import Footer from "@/components/footer"
import WhatsAppButton from "@/components/whatsapp-button"

export default function SheaButter() {
  const sheaProducts = [
    {
      id: 1,
      name: "UNREFINED SHEA BUTTER",
      price: "₦2,500.00",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/UNREFINED%20SHEA%20BUTTER-HWHWBJOLKN79zhkQpigpcXzsi9FLsB.jpg",
    },
    {
      id: 2,
      name: "SHEA COCOA BALM",
      price: "₦7,000.00",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/SHEA%20COCOA%20BALM-NPPV5p0XqOXJD9p1hTjfig3WfHQVR3.jpg",
    },
  ]

  return (
    <main>
      <Header />
      <WhatsAppButton />
      <div className="py-12 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Breadcrumb */}
          <p className="text-gray-600 mb-6">Home / Shea Butter</p>

          {/* Title and Results */}
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-5xl font-bold mb-2">Shea Butter</h1>
              <p className="text-gray-600">Showing all 2 results</p>
            </div>

            {/* Sort Dropdown */}
            <select className="border border-gray-300 px-4 py-2 rounded">
              <option>Sort by popularity</option>
              <option>Sort by price: low to high</option>
              <option>Sort by price: high to low</option>
              <option>Sort by newest</option>
            </select>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {sheaProducts.map((product) => (
              <div key={product.id} className="border rounded-lg overflow-hidden hover:shadow-lg transition">
                <div className="aspect-square overflow-hidden bg-gray-100">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-full object-cover hover:scale-105 transition"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-pink-600 font-bold text-sm mb-2">{product.name}</h3>
                  <p className="text-amber-700 font-semibold mb-4">{product.price}</p>
                  <button className="w-full bg-gray-200 text-gray-700 py-2 rounded hover:bg-gray-300 transition text-sm font-semibold">
                    {product.id === 2 ? "Read more" : "Add to cart"}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
