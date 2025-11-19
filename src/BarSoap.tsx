import Header from "@/components/header"
import Footer from "@/components/footer"
import WhatsAppButton from "@/components/whatsapp-button"

export default function BarSoap() {
  const soaps = [
    {
      id: 1,
      name: "OATS + HONEY SOAP",
      price: "₦3,500.00",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/OATS%20%2B%20HONEY%20SOAP-IJEmXycASGmCpCBwPOJCebkcf5XVLD.jpg",
    },
    {
      id: 2,
      name: "CARROT SOAP",
      price: "₦3,000.00",
      image: "/carrot-soap-product.jpg",
    },
    {
      id: 3,
      name: "SHEA BUTTER SOAP",
      price: "₦3,500.00",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/SHEA%20BUTTER%20SOAP-xOsiQUfAtjMW6Q0HYEUqNDKsWqut70.jpg",
    },
    {
      id: 4,
      name: "COFFEE + TEA TREE...",
      price: "₦3,500.00",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/COFFEE%20%2B%20TEA%20TREE-WV12E3zZuSb7W063uV5xHwU0LotWti.jpg",
    },
    {
      id: 5,
      name: "RAW AFRICAN BLACK...",
      price: "₦3,500.00",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/RAW%20AFRICAN%20BLACK-l1yDXQDdg3pgCmpKhqaqakBuvNvZdH.jpg",
    },
  ]

  return (
    <main>
      <Header />
      <WhatsAppButton />
      <div className="py-12 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Breadcrumb */}
          <p className="text-gray-600 mb-6">Home / Soaps</p>

          {/* Title and Results */}
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-5xl font-bold mb-2">Soaps</h1>
              <p className="text-gray-600">Showing all 5 results</p>
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
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {soaps.map((soap) => (
              <div key={soap.id} className="border rounded-lg overflow-hidden hover:shadow-lg transition">
                <div className="aspect-square overflow-hidden bg-gray-100">
                  <img
                    src={soap.image || "/placeholder.svg"}
                    alt={soap.name}
                    className="w-full h-full object-cover hover:scale-105 transition"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-pink-600 font-bold text-sm mb-2">{soap.name}</h3>
                  <p className="text-amber-700 font-semibold mb-4">{soap.price}</p>
                  <button className="w-full bg-gray-200 text-gray-700 py-2 rounded hover:bg-gray-300 transition text-sm font-semibold">
                    Add to cart
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
