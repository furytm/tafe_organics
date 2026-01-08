"use client"

import { useState } from "react"
import { useCart } from "@/contexts/cart-context"
import { Country, State } from "country-state-city"
import Link from "next/link"
import emailjs from "@emailjs/browser";

interface DeliveryRegion {
  region: string
  cost: number | null
  costLabel?: string
  areas: string[]
}


const DELIVERY_REGIONS: DeliveryRegion[] = [
  {
    region: "Lagos Mainland and Island",
    cost: 3000,
    areas: ["Ikeja", "Lekki", "VI", "Yaba", "Surulere", "Ikoyi"],
  },
  
  // {
  //   region: "Lagos West",
  //   cost: 4500,
  //   areas: [
  //     "Agege",
  //     "Ajeromi-Ifelodun",
  //     "Alimosho",
  //     "Ifako-Ijaiye",
  //     "Mushin",
  //     "Oshodi-Isolo",
  //     "Ojo",
  //     "Shomolu",
  //   ],
  // },
  // {
  //   region: "Lagos East",
  //   cost: 4500,
  //   areas: [
  //     "Apapa",
  //     "Amuwo-Odofin",
  //     "Kosofe",
  //     "Ikorodu",
  //     "Ibeju-Lekki",
  //     "Epe",
  //     "Lagos Island",
  //   ],
  // },
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
  },{
  region: "International",
  cost: null,
  costLabel: "To be discussed",
  areas: ["Outside Nigeria"],
},

];
const countries = Country.getAllCountries()
const nigeriaStates = State.getStatesOfCountry("NG")


export default function CheckoutPage() {
  const { items, getTotalPrice, clearCart } = useCart()
  const [selectedRegion, setSelectedRegion] = useState<DeliveryRegion | null>(null)
  const [isProcessing, setIsProcessing] = useState(false)
  const [pickupContact, setPickupContact] = useState({
    fullName: "",
    phone: "",
  })



  const [customerInfo, setCustomerInfo] = useState({
    name: "",
    phone: "",
  })
  const [expandedRegion, setExpandedRegion] = useState<string | null>(null)

  const subtotal = getTotalPrice()
  const shippingCost = selectedRegion?.cost || 0
  const total = subtotal + shippingCost
  const [errors, setErrors] = useState<{
  shipping?: {
    fullName?: string
    email?: string
    country?: string
    state?: string
  }
  billing?: {
    fullName?: string
    email?: string
    country?: string
    state?: string
  }
}>({})


  const [deliveryMethod, setDeliveryMethod] = useState<"delivery" | "pickup">(
    "delivery"
  )
  const canCheckout =
    deliveryMethod === "pickup"
      ? pickupContact.fullName.trim() !== "" &&
      pickupContact.phone.trim() !== ""
      : !!selectedRegion && !isProcessing


  const generateInvoice = (orderId: string) => {

    // =========================
    // REQUIRED CHECKS
    // =========================

    if (deliveryMethod === "pickup") {
      if (!pickupContact.fullName || !pickupContact.phone) {
        alert("Please provide full name and phone number for pickup.")
        return
      }
    } else {
      if (
        !selectedRegion ||
        !shippingAddress.fullName ||
        !shippingAddress.phone ||
          !shippingAddress.country ||
            !shippingAddress.state ||
        !shippingAddress.address1
      ) {
        alert(
          "Please complete all required shipping details and select a delivery region."
        )
        return
      }

      if (
        billingDifferent &&
        (
          !billingAddress.fullName ||
          !billingAddress.phone ||
           !billingAddress.country ||
            !billingAddress.state ||
          !billingAddress.address1
        )
      ) {
        alert("Please complete all required billing details.")
        return
      }
    }

    const billing = billingDifferent ? billingAddress : shippingAddress

    const itemsList = items
      .map(
        (item) =>
          `${item.name} (${item.weight}) x${item.quantity}: ₦${(
            item.price * item.quantity
          ).toLocaleString()}.00`
      )
      .join("\n")

    // =========================
    // ADDRESS BLOCKS (DELIVERY ONLY)
    // =========================

    const shippingBlock =
      deliveryMethod === "delivery"
        ? `
*SHIPPING ADDRESS*
${shippingAddress.fullName}
${shippingAddress.phone}
${shippingAddress.email}
${shippingAddress.address1}
${shippingAddress.address2 ? shippingAddress.address2 : ""}
`
        : ""

    const billingBlock =
      deliveryMethod === "delivery"
        ? billingDifferent
          ? `
*BILLING ADDRESS*
${billingAddress.fullName}
${billingAddress.phone}
${billingAddress.email}
${billingAddress.address1}
${billingAddress.address2 ? billingAddress.address2 : ""}
`
          : `
*BILLING ADDRESS*
Same as shipping address
`
        : ""

    // =========================
    // CUSTOMER DETAILS
    // =========================

    const customerName =
      deliveryMethod === "pickup"
        ? pickupContact.fullName
        : shippingAddress.fullName

    const customerPhone =
      deliveryMethod === "pickup"
        ? pickupContact.phone
        : shippingAddress.phone

    // =========================
    // MESSAGE
    // =========================

    const message = `*ORDER SUMMARY*

*WE RECEIVED YOUR ORDER*

*TAFE ORGANICS ORDER INVOICE*
*Order ID:* #${orderId}

*CUSTOMER DETAILS*
Name: ${customerName}
Phone: ${customerPhone}

${shippingBlock}
${billingBlock}

*ORDER ITEMS*
${itemsList}

*ORDER SUMMARY*
Subtotal: ₦${subtotal.toLocaleString()}.00

 Delivery Method: ${
  deliveryMethod === "pickup"
    ? "Pickup"
    : selectedRegion?.region || "Not selected"
}

Shipping Cost: ${
  deliveryMethod === "pickup"
    ? "₦0.00"
    : selectedRegion && selectedRegion.cost !== null
        ? `₦${shippingCost.toLocaleString()}.00`
        : "To be discussed (International)"
}

*TOTAL: ₦${total.toLocaleString()}.00*

Thank you for your order! 🌿

We will process your goodies once payment is confirmed.

*IMPORTANT*
Please use your *Order ID* as the payment reference.

*BANK DETAILS*
Tafe Organic Rack LTD
Bank: Zenith Bank
Account Number: 1221883236
`

    return `https://wa.me/2348108400962?text=${encodeURIComponent(message)}`
  }

  const fetchOrderId = async () => {
    const res = await fetch("/api/order-id", {
      method: "POST",
    })

    if (!res.ok) {
      throw new Error("Failed to generate order ID")
    }

    const data = await res.json()
    return data.orderId
  }

  const handleCheckout = async () => {
    if (isProcessing) return
    setIsProcessing(true)

   // 1. Validate required fields
if (deliveryMethod === "delivery") {
  if (
    !shippingAddress.fullName ||
    !shippingAddress.email ||
    !shippingAddress.address1 ||
    !selectedRegion
  ) {
    alert("Please fill all required delivery details")
    setIsProcessing(false)
    return
  }
}

if (deliveryMethod === "pickup") {
  if (!pickupContact.fullName || !pickupContact.phone) {
    alert("Please provide name and phone number for pickup")
    setIsProcessing(false)
    return
  }
}


    // 🔑 Get global order ID
    const orderId = await fetchOrderId()

    // 🧾 Generate WhatsApp invoice
    const whatsappLink = generateInvoice(orderId)
    if (!whatsappLink) {
      setIsProcessing(false)
      return
    }
   
// 3. Send reminder email (DELIVERY ONLY)
if (deliveryMethod === "delivery") {
  try {
    const result = await emailjs.send(
      "service_unlpgvc",
      "template_2w6cdlf",
      {
        customer_name: billingDifferent
          ? billingAddress.fullName
          : shippingAddress.fullName,

        customer_email: billingDifferent
          ? billingAddress.email
          : shippingAddress.email,

        whatsapp_link: whatsappLink,
      },
      "dZs6oorAk8XQui-Jp"
    )

    console.log("EmailJS success:", result)
  } catch (error: any) {
    console.error("EmailJS failed:",  {
        name: error?.name,
        message: error?.message,
        text: error?.text,
      })
    // Do NOT block checkout
  }
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
    fullName: "",
    phone: "",
    email: "",
    country: "NG", // Nigeria ISO code
    state: "",
    lga: "",
    address1: "",
    address2: "",
  })


  const [billingAddress, setBillingAddress] = useState({
    fullName: "",
    phone: "",
    email: "",
    country: "NG",
    state: "",
    lga: "",
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
  const isValidEmail = (email: string) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)


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
            {/* Delivery Method */}
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h2 className="text-xl font-bold text-gray-900 mb-4">
                Delivery Method *
              </h2>

              <div className="space-y-4">
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="radio"
                    name="deliveryMethod"
                    value="delivery"
                    checked={deliveryMethod === "delivery"}
                    onChange={() => setDeliveryMethod("delivery")}
                    className="w-4 h-4 accent-[#6BBE49]"
                  />
                  <span className="text-gray-800 font-medium">
                    Home Delivery
                  </span>
                </label>

                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="radio"
                    name="deliveryMethod"
                    value="pickup"
                    checked={deliveryMethod === "pickup"}
                    onChange={() => {
                      setDeliveryMethod("pickup")
                      setSelectedRegion(null)
                    }}
                    className="w-4 h-4 accent-[#6BBE49]"
                  />
                  <span className="text-gray-800 font-medium">
                    Direct Pickup (No Delivery Fee)
                  </span>
                </label>

                {deliveryMethod === "pickup" && (
                  <div className="mt-3 text-sm text-gray-600 bg-gray-50 p-3 rounded">
                    Pickup address will be shared after payment confirmation.
                  </div>
                )}
              </div>
            </div>

            {deliveryMethod === "pickup" && (
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h2 className="text-xl font-bold text-gray-900 mb-4">
                  Pickup Contact Details
                </h2>

                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Full Name *"
                    value={pickupContact.fullName}
                    onChange={(e) =>
                      setPickupContact({
                        ...pickupContact,
                        fullName: e.target.value,
                      })
                    }
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg
        focus:outline-none focus:border-[#6BBE49]
        focus:ring-2 focus:ring-[#6BBE49]/20 transition"
                  />

                  <input
                    type="tel"
                    placeholder="Phone Number *"
                    value={pickupContact.phone}
                    onChange={(e) =>
                      setPickupContact({
                        ...pickupContact,
                        phone: e.target.value,
                      })
                    }
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg
        focus:outline-none focus:border-[#6BBE49]
        focus:ring-2 focus:ring-[#6BBE49]/20 transition"
                  />
                </div>
              </div>
            )}


            {/* Shipping Address */}
            {deliveryMethod === "delivery" && (
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h2 className="text-xl font-bold text-gray-900 mb-4">
                  Shipping Address
                </h2>

                <div className="grid md:grid-cols-2 gap-4">
                <div className="md:col-span-1">
<div className="md:col-span-2">
  <input
    type="text"
    placeholder="Full Name *"
    value={shippingAddress.fullName}
    onChange={(e) => {
      const value = e.target.value
      setShippingAddress({ ...shippingAddress, fullName: value })

      setErrors((prev) => ({
        ...prev,
        shipping: {
          ...prev.shipping,
          fullName: !value ? "Full name is required" : undefined,
        },
      }))
    }}
    className={`w-full px-4 py-3 border rounded-lg transition
      focus:outline-none focus:ring-2 focus:ring-[#6BBE49]/20
      ${
        errors.shipping?.fullName
          ? "border-red-500"
          : "border-gray-300 focus:border-[#6BBE49]"
      }`}
  />

  {errors.shipping?.fullName && (
    <p className="mt-1 text-sm text-red-600">
      {errors.shipping.fullName}
    </p>
  )}
</div>

 
</div>


                  <input
                    type="tel"
                    placeholder="Phone Number *"
                    value={shippingAddress.phone}
                    onChange={(e) =>
                      setShippingAddress({
                        ...shippingAddress,
                        phone: e.target.value,
                      })
                    }
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg
        focus:outline-none focus:border-[#6BBE49]
        focus:ring-2 focus:ring-[#6BBE49]/20 transition"
                  />

                  <div className="md:col-span-1">
  <input
    type="email"
    placeholder="Email *"
    value={shippingAddress.email}
    onChange={(e) => {
      const value = e.target.value
      setShippingAddress({ ...shippingAddress, email: value })

      setErrors((prev) => ({
        ...prev,
        shipping: {
          ...prev.shipping,
          email:
            !value
              ? "Email is required"
              : !isValidEmail(value)
              ? "Enter a valid email address"
              : undefined,
        },
      }))
    }}
    className={`w-full px-4 py-3 border rounded-lg transition
      focus:outline-none focus:ring-2 focus:ring-[#6BBE49]/20
      ${
        errors.shipping?.email
          ? "border-red-500"
          : "border-gray-300 focus:border-[#6BBE49]"
      }`}
  />

  {errors.shipping?.email && (
    <p className="mt-1 text-sm text-red-600">
      {errors.shipping.email}
    </p>
  )}
</div>
<select
  value={shippingAddress.country}
  onChange={(e) => {
    const value = e.target.value

    setShippingAddress({
      ...shippingAddress,
      country: value,
      state: "",
      lga: "",
    })

    setErrors((prev) => ({
      ...prev,
      shipping: {
        ...prev.shipping,
        country: !value ? "Country is required" : undefined,
      },
    }))
  }}
  className="w-full px-4 py-3 border border-gray-300 rounded-lg
  focus:outline-none focus:border-[#6BBE49]
  focus:ring-2 focus:ring-[#6BBE49]/20 transition"
>
  <option value="">Select Country</option>
  {countries.map((country) => (
    <option key={country.isoCode} value={country.isoCode}>
      {country.name}
    </option>
  ))}
</select>

{errors.shipping?.country && (
  <p className="mt-1 text-sm text-red-600">
    {errors.shipping.country}
  </p>
)}


                 {shippingAddress.country === "NG" ? (
  <>
    <select
      value={shippingAddress.state}
      onChange={(e) => {
        const value = e.target.value

        setShippingAddress({
          ...shippingAddress,
          state: value,
        })

        setErrors((prev) => ({
          ...prev,
          shipping: {
            ...prev.shipping,
            state: !value ? "State is required" : undefined,
          },
        }))
      }}
      className="w-full px-4 py-3 border border-gray-300 rounded-lg
      focus:outline-none focus:border-[#6BBE49]
      focus:ring-2 focus:ring-[#6BBE49]/20 transition"
    >
      <option value="">Select State</option>
      {nigeriaStates.map((state) => (
        <option key={state.isoCode} value={state.name}>
          {state.name}
        </option>
      ))}
    </select>

    {errors.shipping?.state && (
      <p className="mt-1 text-sm text-red-600">
        {errors.shipping.state}
      </p>
    )}
  </>
) : (

                    <>
    <input
      type="text"
      placeholder="State / Province *"
      value={shippingAddress.state}
      onChange={(e) => {
        const value = e.target.value

        setShippingAddress({
          ...shippingAddress,
          state: value,
        })

        setErrors((prev) => ({
          ...prev,
          shipping: {
            ...prev.shipping,
            state: !value ? "State is required" : undefined,
          },
        }))
      }}
      className="w-full px-4 py-3 border border-gray-300 rounded-lg
      focus:outline-none focus:border-[#6BBE49]
      focus:ring-2 focus:ring-[#6BBE49]/20 transition"
    />

    {errors.shipping?.state && (
      <p className="mt-1 text-sm text-red-600">
        {errors.shipping.state}
      </p>
    )}
  </>
)}



                  <input
                    type="text"
                    placeholder="LGA / Area *"
                    value={shippingAddress.lga}
                    onChange={(e) =>
                      setShippingAddress({
                        ...shippingAddress,
                        lga: e.target.value,
                      })
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
                      setShippingAddress({
                        ...shippingAddress,
                        address1: e.target.value,
                      })
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
                      setShippingAddress({
                        ...shippingAddress,
                        address2: e.target.value,
                      })
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
            )}


            {billingDifferent && (
              <div className="bg-white rounded-lg p-6 shadow-sm mt-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4">
                  Billing Address
                </h2>

                <div className="grid md:grid-cols-2 gap-4">
                <div className="md:col-span-2">
  <input
    type="text"
    placeholder="Full Name *"
    value={billingAddress.fullName}
    onChange={(e) => {
      const value = e.target.value
      setShippingAddress({ ...shippingAddress, fullName: value })

      setErrors((prev) => ({
        ...prev,
        shipping: {
          ...prev.shipping,
          fullName: !value ? "Full name is required" : undefined,
        },
      }))
    }}
    className={`w-full px-4 py-3 border rounded-lg transition
      focus:outline-none focus:ring-2 focus:ring-[#6BBE49]/20
      ${
        errors.shipping?.fullName
          ? "border-red-500"
          : "border-gray-300 focus:border-[#6BBE49]"
      }`}
  />

  {errors.shipping?.fullName && (
    <p className="mt-1 text-sm text-red-600">
      {errors.shipping.fullName}
    </p>
  )}
</div>


                  <input
                    type="tel"
                    placeholder="Phone Number *"
                    value={billingAddress.phone}
                    onChange={(e) =>
                      setBillingAddress({
                        ...billingAddress,
                        phone: e.target.value,
                      })
                    }
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg
        focus:outline-none focus:border-[#6BBE49]
        focus:ring-2 focus:ring-[#6BBE49]/20 transition"
                  />

                 <div className="md:col-span-1">
  <input
    type="email"
    placeholder="Email *"
    value={billingAddress.email}
    onChange={(e) => {
      const value = e.target.value
      setShippingAddress({ ...shippingAddress, email: value })

      setErrors((prev) => ({
        ...prev,
        shipping: {
          ...prev.shipping,
          email:
            !value
              ? "Email is required"
              : !isValidEmail(value)
              ? "Enter a valid email address"
              : undefined,
        },
      }))
    }}
    className={`w-full px-4 py-3 border rounded-lg transition
      focus:outline-none focus:ring-2 focus:ring-[#6BBE49]/20
      ${
        errors.shipping?.email
          ? "border-red-500"
          : "border-gray-300 focus:border-[#6BBE49]"
      }`}
  />

  {errors.shipping?.email && (
    <p className="mt-1 text-sm text-red-600">
      {errors.shipping.email}
    </p>
  )}
</div>

                  {/* Country */}
                 <select
  value={billingAddress.country}
  onChange={(e) => {
    const value = e.target.value

    setBillingAddress({
      ...billingAddress,
      country: value,
      state: "",
      lga: "",
    })

    setErrors((prev) => ({
      ...prev,
      billing: {
        ...prev.billing,
        country: !value ? "Country is required" : undefined,
      },
    }))
  }}
  className="w-full px-4 py-3 border border-gray-300 rounded-lg
  focus:outline-none focus:border-[#6BBE49]
  focus:ring-2 focus:ring-[#6BBE49]/20 transition"
>
  <option value="">Select Country</option>
  {countries.map((country) => (
    <option key={country.isoCode} value={country.isoCode}>
      {country.name}
    </option>
  ))}
</select>

{errors.billing?.country && (
  <p className="mt-1 text-sm text-red-600">
    {errors.billing.country}
  </p>
)}


                  {/* State */}
                {billingAddress.country === "NG" ? (
  <>
    <select
      value={billingAddress.state}
      onChange={(e) => {
        const value = e.target.value

        setBillingAddress({
          ...billingAddress,
          state: value,
        })

        setErrors((prev) => ({
          ...prev,
          billing: {
            ...prev.billing,
            state: !value ? "State is required" : undefined,
          },
        }))
      }}
      className="w-full px-4 py-3 border border-gray-300 rounded-lg
      focus:outline-none focus:border-[#6BBE49]
      focus:ring-2 focus:ring-[#6BBE49]/20 transition"
    >
      <option value="">Select State</option>
      {nigeriaStates.map((state) => (
        <option key={state.isoCode} value={state.name}>
          {state.name}
        </option>
      ))}
    </select>

    {errors.billing?.state && (
      <p className="mt-1 text-sm text-red-600">
        {errors.billing.state}
      </p>
    )}
  </>
) : (

                    <>
    <input
      type="text"
      placeholder="State / Province *"
      value={billingAddress.state}
      onChange={(e) => {
        const value = e.target.value

        setBillingAddress({
          ...billingAddress,
          state: value,
        })

        setErrors((prev) => ({
          ...prev,
          billing: {
            ...prev.billing,
            state: !value ? "State is required" : undefined,
          },
        }))
      }}
      className="w-full px-4 py-3 border border-gray-300 rounded-lg
      focus:outline-none focus:border-[#6BBE49]
      focus:ring-2 focus:ring-[#6BBE49]/20 transition"
    />

    {errors.billing?.state && (
      <p className="mt-1 text-sm text-red-600">
        {errors.billing.state}
      </p>
    )}
  </>
)}


                  {/* LGA */}
                  <input
                    type="text"
                    placeholder="LGA / Area *"
                    value={billingAddress.lga}
                    onChange={(e) =>
                      setBillingAddress({ ...billingAddress, lga: e.target.value })
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
                      setBillingAddress({
                        ...billingAddress,
                        address1: e.target.value,
                      })
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
                      setBillingAddress({
                        ...billingAddress,
                        address2: e.target.value,
                      })
                    }
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg
        focus:outline-none focus:border-[#6BBE49]
        focus:ring-2 focus:ring-[#6BBE49]/20 transition md:col-span-2"
                  />
                </div>
              </div>
            )}




           {deliveryMethod === "delivery" && (
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
  Shipping:{" "}
  {region.cost !== null
    ? `₦${region.cost.toLocaleString()}`
    : region.costLabel}
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
    {selectedRegion?.region === "International" && (
  <p className="text-sm text-gray-600 mt-2">
    International shipping cost will be confirmed after order review.
  </p>
)}

  </div>
)}





          </div>

          {/* Order Summary Sidebar */}
          <div className="md:col-span-1">
            <div className="bg-white rounded-lg p-6 shadow-sm sticky top-4 space-y-4">
              <h2 className="text-xl font-bold text-gray-900">Order Summary</h2>

              <div className="space-y-3 pb-4 border-b border-gray-200">
                <div className="flex justify-between text-gray-600">
                 <span>
  {selectedRegion?.cost !== null
    ? `₦${shippingCost.toLocaleString()}.00`
    : "To be discussed"}
</span>

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
                disabled={!canCheckout || isProcessing}
                className={`w-full py-3 rounded-lg font-semibold transition flex items-center justify-center gap-2
    ${canCheckout && !isProcessing
                    ? "bg-[#6BBE49] text-white hover:bg-[#5aaa3f]"
                    : "bg-gray-400 text-white cursor-not-allowed"
                  }
  `}
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
