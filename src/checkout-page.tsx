"use client"

import { useState } from "react"
import { useCart } from "@/contexts/cart-context"
import { ChevronDown } from "lucide-react"
import Link from "next/link"
import emailjs from "@emailjs/browser";

interface DeliveryRegion {
  region: string
  cost: number
  areas: string[]
}

const DELIVERY_REGIONS: DeliveryRegion[] = [
  {
    region: "Lagos Mainland and Island",
    cost: 3000,
    areas: ["Ikeja", "Lekki", "VI", "Yaba", "Surulere", "Ikoyi"],
  },
  {
    region: "Lagos West",
    cost: 4500,
    areas: [
      "Agege",
      "Ajeromi-Ifelodun",
      "Alimosho",
      "Ifako-Ijaiye",
      "Mushin",
      "Oshodi-Isolo",
      "Ojo",
      "Shomolu",
    ],
  },
  {
    region: "Lagos East",
    cost: 4500,
    areas: [
      "Apapa",
      "Amuwo-Odofin",
      "Kosofe",
      "Ikorodu",
      "Ibeju-Lekki",
      "Epe",
      "Lagos Island",
    ],
  },
  {
    region: "Lagos Borders (Ajah, Ikorodu, Badagry)",
    cost: 4500,
    areas: ["Ajah", "Ikorodu", "Badagry"],
  },
  {
    region: "Ekiti, Ogun, Ondo, Osun, Oyo",
    cost: 4500,
    areas: ["Ekiti", "Ogun", "Ondo", "Osun", "Oyo"],
  },
  {
    region:
      "Abia, Anambra, Bayelsa, Delta, Ebonyi, Edo, Enugu, Imo, Kwara, Rivers",
    cost: 5500,
    areas: [
      "Abia",
      "Anambra",
      "Bayelsa",
      "Delta",
      "Ebonyi",
      "Edo",
      "Enugu",
      "Imo",
      "Kwara",
      "Rivers",
    ],
  },
  {
    region: "FCT",
    cost: 6000,
    areas: ["Abuja"],
  },
  {
    region:
      "Adamawa, Bauchi, Benue, Borno, Gombe, Jigawa, Kaduna, Kano, Katsina, Kebbi, Kogi, Nasarawa, Niger, Plateau, Sokoto, Taraba, Yobe, Zamfara",
    cost: 6000,
    areas: [
      "Adamawa",
      "Bauchi",
      "Benue",
      "Borno",
      "Gombe",
      "Jigawa",
      "Kaduna",
      "Kano",
      "Katsina",
      "Kebbi",
      "Kogi",
      "Nasarawa",
      "Niger",
      "Plateau",
      "Sokoto",
      "Taraba",
      "Yobe",
      "Zamfara",
    ],
  },
  {
    region: "Akwa Ibom, Cross River",
    cost: 6500,
    areas: ["Akwa Ibom", "Cross River"],
  },
];


export default function CheckoutPage() {
  const { items, getTotalPrice, clearCart } = useCart()
  const [selectedRegion, setSelectedRegion] = useState<DeliveryRegion | null>(null)
  const [isProcessing, setIsProcessing] = useState(false)

  const [customerInfo, setCustomerInfo] = useState({
    name: "",
    phone: "",
  })
  const [expandedRegion, setExpandedRegion] = useState<string | null>(null)

  const subtotal = getTotalPrice()
  const shippingCost = selectedRegion?.cost || 0
  const total = subtotal + shippingCost

 const generateInvoice = () => {
  // REQUIRED CHECKS
  if (
    !selectedRegion ||
    !shippingAddress.name ||
    !shippingAddress.surname ||
    !shippingAddress.email ||
    !shippingAddress.address1
  ) {
    alert("Please complete all required shipping details and select a delivery region.")
    return
  }

  if (
    billingDifferent &&
    (
      !billingAddress.name ||
      !billingAddress.surname ||
      !billingAddress.email ||
      !billingAddress.address1
    )
  ) {
    alert("Please complete all required billing details.")
    return
  }

  const itemsList = items
    .map(
      (item) =>
        `${item.name} (${item.weight}) x${item.quantity}: ₦${(item.price * item.quantity).toLocaleString()}.00`
    )
    .join("\n")

  const shippingBlock = `
*SHIPPING ADDRESS*
${shippingAddress.name} ${shippingAddress.surname}
${shippingAddress.email}
${shippingAddress.address1}
${shippingAddress.address2 ? shippingAddress.address2 : ""}
`

  const billingBlock = billingDifferent
    ? `
*BILLING ADDRESS*
${billingAddress.name} ${billingAddress.surname}
${billingAddress.email}
${billingAddress.address1}
${billingAddress.address2 ? billingAddress.address2 : ""}
`
    : `
*BILLING ADDRESS*
Same as shipping address
`

  const message = `*TAFE ORGANICS ORDER INVOICE*

${shippingBlock}
${billingBlock}

*ORDER ITEMS*
${itemsList}

*ORDER SUMMARY*
Subtotal: ₦${subtotal.toLocaleString()}.00
Delivery Region: ${selectedRegion.region}
Shipping Cost: ₦${shippingCost.toLocaleString()}.00
*TOTAL: ₦${total.toLocaleString()}.00*

Thank you for shopping with Táfe Organics 🌿`

 const encodedMessage = encodeURIComponent(message)

  return `https://wa.me/2348108400962?text=${encodedMessage}`
}
const handleCheckout = async () => {
  if (isProcessing) return
  setIsProcessing(true)

  // 1. Validate required fields
  if (
    !shippingAddress.name ||
    !shippingAddress.email ||
    !shippingAddress.address1
  ) {
    alert("Please fill all required shipping details")
    setIsProcessing(false)
    return
  }

  // 2. Generate WhatsApp invoice link
  const whatsappLink = generateInvoice()
  if (!whatsappLink) {
    setIsProcessing(false)
    return
  }

  // 3. Send reminder email (non-blocking)
  try {
    const result = await emailjs.send(
      "service_unlpgvc",
      "template_2w6cdlf",
      {
       customer_name: billingDifferent
      ? billingAddress.name
      : shippingAddress.name,

    customer_email: billingDifferent
      ? billingAddress.email
      : shippingAddress.email,
        whatsapp_link: whatsappLink,
      } ,"dZs6oorAk8XQui-Jp"
    )
   
    console.log("EmailJS success:", result)
  } catch (error: any) {
    console.error("EmailJS failed:", {
      name: error?.name,
      message: error?.message,
      text: error?.text,
    })
    // Do NOT block checkout
  }

  // 4. Open WhatsApp in new tab
  window.open(whatsappLink, "_blank", "noopener,noreferrer")

  // 5. Clear cart AFTER redirect intent
  setTimeout(() => {
    clearCart()
  }, 800)

  setIsProcessing(false)
}


  const [billingDifferent, setBillingDifferent] = useState(false)

const [shippingAddress, setShippingAddress] = useState({
  name: "",
  surname: "",
  email: "",
  address1: "",
  address2: "",
})

const [billingAddress, setBillingAddress] = useState({
  name: "",
  surname: "",
  email: "",
  address1: "",
  address2: "",
})


  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 py-12 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Your cart is empty</h1>
          <p className="text-gray-600 mb-8">Add items to your cart before proceeding to checkout</p>
          <Link
            href="/shop"
            className="inline-block bg-[#6BBE49] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#5aaa3f] transition"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 playfairbold mb-2">Checkout</h1>
          <p className="text-gray-600">Review your order and select delivery details</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          
          {/* Order Items */}
          <div className="md:col-span-2 space-y-6">
            {/* Shipping Policy */}
<div className="bg-[#F7FCEB] border-l-4 border-[#6BBE49] rounded-lg p-5 shadow-sm mt-6">
  <h3 className="text-sm font-semibold text-[#3E6B2C] mb-2">
    TAFE ORGANICS – Shipping Policy
  </h3>

  <p className="text-xs text-gray-700 mb-2 leading-relaxed">
    Orders are processed within <strong>1–2 business days</strong>. Orders placed
    on weekends or public holidays will be processed the next business day.
  </p>

  <p className="text-xs text-gray-700 mb-2 leading-relaxed">
    <strong className="text-gray-800">Delivery Timeline:</strong><br />
    • Within Lagos: 1–3 business days<br />
    • Outside Lagos: 2–5 business days<br />
    • International: 7–14 business days
  </p>

  <p className="text-[11px] text-gray-500 italic">
    Delivery times are estimates and may vary due to courier delays or unforeseen
    circumstances.
  </p>
</div>

            {/* Order Items Section */}
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Order Items</h2>
              <div className="space-y-4">
                {items.map((item) => (
                  <div key={`${item.id}-${item.weight}`} className="flex gap-4 pb-4 border-b border-gray-100">
                    <img
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded bg-gray-100"
                    />
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900">{item.name}</h3>
                      <p className="text-sm text-gray-600">{item.weight}</p>
                      <p className="text-sm text-gray-600">Qty: {item.quantity}</p>
                      <p className="font-bold text-[#E89B3C]">₦{(item.price * item.quantity).toLocaleString()}.00</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

  {/* Shipping Address */}
<div className="bg-white rounded-lg p-6 shadow-sm">
  <h2 className="text-xl font-bold text-gray-900 mb-4">
    Shipping Address
  </h2>

  <div className="grid md:grid-cols-2 gap-4">
    <input
      type="text"
      placeholder="Name *"
      value={shippingAddress.name}
      onChange={(e) =>
        setShippingAddress({ ...shippingAddress, name: e.target.value })
      }
      className="w-full px-4 py-3 border border-gray-300 rounded-lg
      focus:outline-none focus:border-[#6BBE49]
      focus:ring-2 focus:ring-[#6BBE49]/20 transition"
    />

    <input
      type="text"
      placeholder="Surname *"
      value={shippingAddress.surname}
      onChange={(e) =>
        setShippingAddress({ ...shippingAddress, surname: e.target.value })
      }
      className="w-full px-4 py-3 border border-gray-300 rounded-lg
      focus:outline-none focus:border-[#6BBE49]
      focus:ring-2 focus:ring-[#6BBE49]/20 transition"
    />

    <input
      type="email"
      placeholder="Email *"
      value={shippingAddress.email}
      onChange={(e) =>
        setShippingAddress({ ...shippingAddress, email: e.target.value })
      }
      className="w-full px-4 py-3 border border-gray-300 rounded-lg
      focus:outline-none focus:border-[#6BBE49]
      focus:ring-2 focus:ring-[#6BBE49]/20 transition md:col-span-2"
    />

    <input
      type="text"
      placeholder="Address Line 1 *"
      value={shippingAddress.address1}
      onChange={(e) =>
        setShippingAddress({ ...shippingAddress, address1: e.target.value })
      }
      className="w-full px-4 py-3 border border-gray-300 rounded-lg
      focus:outline-none focus:border-[#6BBE49]
      focus:ring-2 focus:ring-[#6BBE49]/20 transition md:col-span-2"
    />

    <input
      type="text"
      placeholder="Address Line 2 (optional)"
      value={shippingAddress.address2}
      onChange={(e) =>
        setShippingAddress({ ...shippingAddress, address2: e.target.value })
      }
      className="w-full px-4 py-3 border border-gray-300 rounded-lg
      focus:outline-none focus:border-[#6BBE49]
      focus:ring-2 focus:ring-[#6BBE49]/20 transition md:col-span-2"
    />
  </div>

  {/* Toggle */}
  <label className="flex items-center gap-3 mt-6 cursor-pointer">
    <input
      type="checkbox"
      checked={billingDifferent}
      onChange={() => setBillingDifferent(!billingDifferent)}
      className="w-4 h-4 accent-[#6BBE49]"
    />
    <span className="text-sm text-gray-700">
      Billing address is different from shipping address
    </span>
  </label>
</div>

{billingDifferent && (
  <div className="bg-white rounded-lg p-6 shadow-sm mt-6">
    <h2 className="text-xl font-bold text-gray-900 mb-4">
      Billing Address
    </h2>

    <div className="grid md:grid-cols-2 gap-4">
      <input
        type="text"
        placeholder="Name *"
        value={billingAddress.name}
        onChange={(e) =>
          setBillingAddress({ ...billingAddress, name: e.target.value })
        }
        className="w-full px-4 py-3 border border-gray-300 rounded-lg
        focus:outline-none focus:border-[#6BBE49]
        focus:ring-2 focus:ring-[#6BBE49]/20 transition"
      />

      <input
        type="text"
        placeholder="Surname *"
        value={billingAddress.surname}
        onChange={(e) =>
          setBillingAddress({ ...billingAddress, surname: e.target.value })
        }
        className="w-full px-4 py-3 border border-gray-300 rounded-lg
        focus:outline-none focus:border-[#6BBE49]
        focus:ring-2 focus:ring-[#6BBE49]/20 transition"
      />

      <input
        type="email"
        placeholder="Email *"
        value={billingAddress.email}
        onChange={(e) =>
          setBillingAddress({ ...billingAddress, email: e.target.value })
        }
        className="w-full px-4 py-3 border border-gray-300 rounded-lg
        focus:outline-none focus:border-[#6BBE49]
        focus:ring-2 focus:ring-[#6BBE49]/20 transition md:col-span-2"
      />

      <input
        type="text"
        placeholder="Address Line 1 *"
        value={billingAddress.address1}
        onChange={(e) =>
          setBillingAddress({ ...billingAddress, address1: e.target.value })
        }
        className="w-full px-4 py-3 border border-gray-300 rounded-lg
        focus:outline-none focus:border-[#6BBE49]
        focus:ring-2 focus:ring-[#6BBE49]/20 transition md:col-span-2"
      />

      <input
        type="text"
        placeholder="Address Line 2 (optional)"
        value={billingAddress.address2}
        onChange={(e) =>
          setBillingAddress({ ...billingAddress, address2: e.target.value })
        }
        className="w-full px-4 py-3 border border-gray-300 rounded-lg
        focus:outline-none focus:border-[#6BBE49]
        focus:ring-2 focus:ring-[#6BBE49]/20 transition md:col-span-2"
      />
    </div>
  </div>
)}



 {/* Delivery Region Selection */}
<div className="bg-white rounded-lg p-6 shadow-sm">
  <h2 className="text-xl font-bold text-gray-900 mb-4">
    Delivery Region *
  </h2>

  <div className="space-y-3">
    {DELIVERY_REGIONS.map((region) => (
      <div
        key={region.region}
        className="border border-gray-200 rounded-lg overflow-hidden"
      >
        {/* Region Header */}
        <button
          type="button"
          onClick={() => setSelectedRegion(region)}
          className={`w-full px-4 py-3 flex items-center justify-between transition ${
            selectedRegion?.region === region.region
              ? "bg-[#6BBE49] text-white"
              : "bg-gray-50 hover:bg-gray-100"
          }`}
        >
          <div className="flex items-center gap-3 text-left">
            <input
              type="radio"
              name="delivery-region"
              checked={selectedRegion?.region === region.region}
              onChange={() => setSelectedRegion(region)}
              className="w-4 h-4"
            />
            <div>
              <p className="font-semibold">{region.region}</p>
              <p
                className={`text-sm ${
                  selectedRegion?.region === region.region
                    ? "text-white/90"
                    : "text-gray-600"
                }`}
              >
                Shipping: ₦{region.cost.toLocaleString()}
              </p>
            </div>
          </div>
        </button>

        {/* Areas — ALWAYS VISIBLE */}
        <div
          className={`px-4 py-3 border-t ${
            selectedRegion?.region === region.region
              ? "border-[#5aaa3f] bg-[#5aaa3f]/10"
              : "border-gray-200 bg-gray-50"
          }`}
        >
          <p className="text-sm font-semibold text-gray-700 mb-2">
            Included Areas:
          </p>

          <div className="flex flex-wrap gap-2">
            {region.areas.map((area) => (
              <span
                key={area}
                className="bg-gray-200 text-gray-800 text-xs px-3 py-1 rounded-full"
              >
                {area}
              </span>
            ))}
          </div>
        </div>
      </div>
    ))}
  </div>
</div>


          </div>

          {/* Order Summary Sidebar */}
          <div className="md:col-span-1">
            <div className="bg-white rounded-lg p-6 shadow-sm sticky top-4 space-y-4">
              <h2 className="text-xl font-bold text-gray-900">Order Summary</h2>

              <div className="space-y-3 pb-4 border-b border-gray-200">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal:</span>
                  <span>₦{subtotal.toLocaleString()}.00</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Shipping:</span>
                  <span>{shippingCost > 0 ? `₦${shippingCost.toLocaleString()}.00` : "Select region"}</span>
                </div>
              </div>

              <div className="flex justify-between text-xl font-bold text-gray-900">
                <span>Total:</span>
                <span className="text-[#6BBE49]">₦{total.toLocaleString()}.00</span>
              </div>

              <button
                onClick={handleCheckout}
               className="w-full bg-[#6BBE49] text-white py-3 rounded-lg font-semibold hover:bg-[#5aaa3f] transition disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                disabled={!selectedRegion || isProcessing}
              >
              
  {isProcessing ? (
    <>
      <svg
        className="animate-spin h-5 w-5 text-white"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        />
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
        />
      </svg>
      Processing order…
    </>
  ) : (
    "Complete Order via WhatsApp"
  )}
              </button>

              <button
                onClick={() => window.history.back()}
                className="w-full border border-gray-300 text-gray-900 py-2 rounded-lg font-semibold hover:bg-gray-50 transition"
              >
                Continue Shopping
              </button>
   

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
