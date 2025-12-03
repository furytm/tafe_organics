"use client"

import { useState } from "react"
import { ChevronDown, Shield, Truck, RotateCcw, FileText, Lock, HelpCircle, Mail, Phone } from "lucide-react"

export default function TermsConditionsPageContent() {
  const [expandedSection, setExpandedSection] = useState<string | null>("general")

  const sections = [
    {
      id: "general",
      icon: FileText,
      title: "General",
      subtitle: "Terms Overview",
      content: `This website is operated by Tafe Organics. These Terms & Conditions apply to all users of the site including customers, browsers, and contributors. We reserve the right to update or modify these terms at any time. Continued use of our website signifies acceptance of any changes.`,
    },
    {
      id: "products",
      icon: Shield,
      title: "Product Information",
      subtitle: "Quality & Safety",
      content: `We aim to provide accurate descriptions, ingredient lists, and usage instructions. Colours, textures, or packaging may vary slightly due to natural ingredients and batch variations. All product results vary from person to person. Information on this website is not medical advice. Please perform a patch test before using any new skincare product.`,
    },
    {
      id: "orders",
      icon: FileText,
      title: "Orders & Payments",
      subtitle: "Checkout Process",
      content: `By placing an order, you confirm that all information provided is accurate and you are authorized to use the payment method provided. You understand that orders may be cancelled if information is incomplete or suspicious. Prices may change at any time without prior notice.`,
    },
    {
      id: "shipping",
      icon: Truck,
      title: "Shipping & Delivery",
      subtitle: "Delivery Timeline",
      content: `Shipping timelines are estimates. Tafe Organics is not liable for delays caused by courier companies, weather conditions, or incorrect shipping details provided by the customer. Ownership of the product transfers to the buyer once shipped.`,
    },
    {
      id: "returns",
      icon: RotateCcw,
      title: "Returns & Refunds",
      subtitle: "Our Policy",
      content: `Due to the personal nature of our skincare products, we do not accept returns once an item has been opened or used. We only accept returns for: The wrong product was delivered, The product arrived damaged, The product is unopened, unused, and in its original packaging, The return request is made within 48 hours of delivery.`,
    },
    {
      id: "ip",
      icon: Lock,
      title: "Intellectual Property",
      subtitle: "Copyright & Trademark",
      content: `All content on this website — including text, images, logos, product names, graphics, and videos — belongs to Tafe Organics and may not be copied or reproduced without permission.`,
    },
    {
      id: "liability",
      icon: Shield,
      title: "Limitation of Liability",
      subtitle: "Responsibility",
      content: `Tafe Organics is not responsible for allergic reactions, misuse of products, or any damages arising from website usage. Customers are responsible for reading ingredient lists and usage instructions.`,
    },
    {
      id: "privacy",
      icon: Lock,
      title: "Privacy & Data Protection",
      subtitle: "Your Information",
      content: `Your personal information is handled according to our Privacy Policy. We do not share or sell your data to third parties. We use secure servers, encryption, and industry-standard security measures to protect your information. However, no online transmission is 100% secure.`,
    },
  ]

  const returnPolicyDetails = [
    {
      title: "Returns",
      items: [
        "Wrong product delivered",
        "Product arrived damaged",
        "Product unopened, unused, and in original packaging",
        "Return request made within 48 hours of delivery",
      ],
    },
    {
      title: "Refunds",
      items: [
        "Product unavailable/out of stock",
        "Unable to fulfill order",
        "Returned item approved and verified",
        "3-7 business days to reflect in account",
      ],
    },
    {
      title: "Exchanges",
      items: [
        "Damaged or incorrect items eligible",
        "Free replacement once verified",
        "Must be requested within 48 hours of delivery",
      ],
    },
    {
      title: "Non-Returnable Items",
      items: [
        "Opened or used products",
        "Products damaged after delivery",
        "Items bought on sale/promo/clearance",
        "Gift cards or digital products",
        "Allergic reactions (patch test advised)",
      ],
    },
  ]

  const shippingDetails = [
    {
      title: "Order Processing",
      items: ["Processed within 1-2 business days", "Weekend/public holiday orders processed next business day"],
    },
    {
      title: "Delivery Timeline",
      items: [
        "Within Lagos: 1-3 business days",
        "Outside Lagos: 2-5 business days",
        "International: 7-14 business days",
      ],
    },
    {
      title: "Shipping Responsibilities",
      items: [
        "Calculated at checkout based on location",
        "Not liable for courier delays",
        "Not responsible for incorrect addresses",
        "Will assist in resolving delivery issues",
      ],
    },
  ]

  const privacyDetails = [
    {
      title: "Information Collected",
      items: [
        "Personal: Name, email, phone, address",
        "Payment: Processed via secure third-party providers",
        "Technical: IP address, device type, browser, cookies",
      ],
    },
    {
      title: "How We Use Data",
      items: [
        "Process and fulfill orders",
        "Provide customer support",
        "Improve website performance",
        "Send updates and optional newsletters",
        "Detect and prevent fraud",
      ],
    },
    {
      title: "Your Rights",
      items: [
        "Access your personal data",
        "Update or correct information",
        "Delete your information",
        "Opt out of marketing emails",
      ],
    },
  ]

  const faqItems = [
    {
      q: "What makes Tafe Organics different?",
      a: "Our products are handcrafted with clean, natural, African-sourced ingredients. We focus on gentle, effective, and sustainable skincare free from harsh chemicals.",
    },
    {
      q: "Are your products safe for sensitive skin?",
      a: "Yes! Our formulations are made with gentle, skin-loving ingredients. However, we always recommend a patch test before first use.",
    },
    {
      q: "Are your products natural?",
      a: "Yes — all Tafe Organics products are made with natural, plant-based, ethically sourced ingredients.",
    },
    {
      q: "Do your products contain synthetic fragrances or parabens?",
      a: "No. All products are paraben-free, sulfate-free, synthetic preservative-free (where applicable), and free from artificial fragrances.",
    },
    {
      q: "How long does shipping take?",
      a: "Lagos: 1-3 business days, Other states: 2-5 business days, International: 7-14 business days",
    },
    {
      q: "Do you offer wholesale?",
      a: "Yes, we offer wholesale and bulk pricing for select products. Contact us directly at support@tafeorganics.com",
    },
    {
      q: "How do I track my order?",
      a: "Once your order ships, you'll receive a tracking number via email/SMS.",
    },
    {
      q: "What payment methods do you accept?",
      a: "We accept debit/credit cards, bank transfers, and mobile money payments.",
    },
  ]

  return (
    <main>
      {/* Hero Section */}
      <section className="relative w-full h-80 flex items-center justify-center bg-gradient-to-br from-[#752E2E] to-[#5a2424]">
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#grid)" />
          </svg>
        </div>
        <div className="relative z-10 text-center animate-slideUp">
          <h1 className="text-5xl md:text-6xl playfairbold font-bold text-white mb-4">Terms & Conditions</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Please read these terms carefully before using our website and purchasing our products.
          </p>
        </div>
      </section>

      {/* Quick Navigation Cards */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-4">
            {sections.slice(0, 4).map((section) => {
              const Icon = section.icon
              return (
                <button
                  key={section.id}
                  onClick={() => setExpandedSection(expandedSection === section.id ? null : section.id)}
                  className="p-4 bg-white rounded-lg shadow hover:shadow-lg transition-all hover:translate-y-[-2px] text-center group"
                >
                  <Icon className="w-8 h-8 text-[#6BBE49] mx-auto mb-2 group-hover:scale-110 transition-transform" />
                  <h3 className="font-bold text-sm text-gray-900">{section.title}</h3>
                  <p className="text-xs text-gray-600 mt-1">{section.subtitle}</p>
                </button>
              )
            })}
          </div>
        </div>
      </section>

      {/* Expandable Sections */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {sections.map((section, idx) => {
              const Icon = section.icon
              const isExpanded = expandedSection === section.id
              return (
                <div
                  key={section.id}
                  className={`border-2 rounded-lg overflow-hidden transition-all ${
                    isExpanded ? "border-[#6BBE49] bg-green-50" : "border-gray-200 bg-white"
                  }`}
                  style={{ animationDelay: `${idx * 0.05}s` }}
                >
                  <button
                    onClick={() => setExpandedSection(isExpanded ? null : section.id)}
                    className="w-full px-6 py-5 flex items-center justify-between hover:bg-gray-50 transition group"
                  >
                    <div className="flex items-center gap-4 text-left">
                      <Icon
                        className={`w-6 h-6 transition-colors ${isExpanded ? "text-[#6BBE49]" : "text-gray-600"}`}
                      />
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 group-hover:text-[#6BBE49] transition">
                          {section.title}
                        </h3>
                        <p className="text-sm text-gray-600">{section.subtitle}</p>
                      </div>
                    </div>
                    <ChevronDown
                      className={`w-5 h-5 text-[#6BBE49] transition-transform ${isExpanded ? "rotate-180" : ""}`}
                    />
                  </button>

                  {isExpanded && (
                    <div className="px-6 py-5 border-t-2 border-[#6BBE49] animate-slideUp">
                      <p className="text-gray-700 leading-relaxed mb-4">{section.content}</p>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Additional Policies Section - Returns */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl playfairbold font-bold text-center mb-12">Return & Refund Policy</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {returnPolicyDetails.map((policy, idx) => (
              <div
                key={idx}
                className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow animate-fadeIn"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <RotateCcw className="w-8 h-8 text-[#6BBE49]" />
                  <h3 className="text-2xl font-bold">{policy.title}</h3>
                </div>
                <ul className="space-y-3">
                  {policy.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                      <span className="text-[#6BBE49] font-bold mt-1">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Shipping Policy Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl playfairbold font-bold text-center mb-12">Shipping Policy</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {shippingDetails.map((policy, idx) => (
              <div
                key={idx}
                className="bg-gray-50 p-8 rounded-lg border-l-4 border-[#6BBE49] hover:shadow-lg transition-shadow animate-fadeIn"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <Truck className="w-8 h-8 text-[#6BBE49]" />
                  <h3 className="text-xl font-bold">{policy.title}</h3>
                </div>
                <ul className="space-y-2">
                  {policy.items.map((item, i) => (
                    <li key={i} className="text-sm text-gray-700 flex items-start gap-2">
                      <span className="text-[#6BBE49]">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Privacy Policy Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl playfairbold font-bold text-center mb-12">Privacy Policy</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {privacyDetails.map((policy, idx) => (
              <div
                key={idx}
                className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow animate-fadeIn"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <Lock className="w-8 h-8 text-[#6BBE49]" />
                  <h3 className="text-xl font-bold">{policy.title}</h3>
                </div>
                <ul className="space-y-2">
                  {policy.items.map((item, i) => (
                    <li key={i} className="text-sm text-gray-700 flex items-start gap-2">
                      <span className="text-[#6BBE49]">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl playfairbold font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqItems.map((faq, idx) => (
              <details
                key={idx}
                className="border-b pb-4 cursor-pointer group animate-fadeIn"
                style={{ animationDelay: `${idx * 0.05}s` }}
              >
                <summary className="font-bold text-amber-900 text-lg group-open:text-[#6BBE49] transition flex items-center gap-2 hover:text-[#6BBE49]">
                  <HelpCircle className="w-5 h-5 text-[#6BBE49]" />
                  {faq.q}
                </summary>
                <p className="text-gray-700 mt-3 text-base ml-7">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Governing Law & Contact */}
      <section className="py-12 px-4 bg-gradient-to-r from-[#752E2E]/10 to-[#6BBE49]/10">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4">Governing Law</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            These Terms & Conditions are governed by the Business Act Laws of Nigeria, including the Companies and
            Allied Matters Act (CAMA), the Companies Income Tax Act, and the Value Added Tax Act.
          </p>
          <div className="bg-white p-8 rounded-lg border-l-4 border-[#6BBE49] animate-slideUp">
            <h4 className="text-xl font-bold mb-4">Contact & Support</h4>
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-gray-700">
              <div className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-[#6BBE49]" />
                <span>support@tafeorganics.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-[#6BBE49]" />
                <span>+2348108400962</span>
              </div>
            </div>
            <p className="text-sm text-gray-600 mt-6">Last Updated: November 2025</p>
          </div>
        </div>
      </section>
    </main>
  )
}
