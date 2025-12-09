"use client"

import { useState } from "react"
import TeamMembers from "@/src/components/team-members"

export default function AboutPageContent() {
  const [expandedValue, setExpandedValue] = useState<string | null>("love")

  const values = [
    {
      id: "love",
      icon: "💖",
      title: "Love",
      description:
        "The brand was established from the drive of a mother's love and it reflects in our every process and the quality of every product we make.",
    },
    {
      id: "originality",
      icon: "✨",
      title: "Originality",
      description: "We create authentic, original formulations using premium natural ingredients.",
    },
    {
      id: "eco",
      icon: "🌍",
      title: "Eco Consciousness",
      description: "We are committed to sustainable practices and environmentally responsible production.",
    },
    {
      id: "friendship",
      icon: "👫",
      title: "Friendship",
      description: "Our community is built on genuine connections and mutual support.",
    },
    {
      id: "equality",
      icon: "⚖️",
      title: "Gender Equality",
      description: "We believe in equal opportunities and representation for all.",
    },
  ]

  return (
    <main>
      {/* Hero Section */}
      <div
        className="relative w-full h-96 flex items-center justify-center bg-cover bg-center animate-fadeIn"
        style={{
          backgroundImage: "url('/images/abouthero.jpeg')",
        }}
      >
        <div className="relative z-10 text-center animate-slideDown">
          <h1 className="text-5xl md:text-6xl playfairbold font-bold text-white">About Us</h1>
        </div>
      </div>

      {/* Brand History */}
      <section className="py-20 px-4 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12 animate-slideUp">
            <h2 className="text-5xl font-bold mb-4 text-center playfairbold text-[#6BBE49]">
              Tafe Organic Brand Story
            </h2>
            <div className="h-1 w-24 bg-[#6BBE49] mx-auto rounded-full"></div>
          </div>

          <div className="space-y-6 text-gray-700 leading-relaxed">
            {[
              {
                para: "Tafe Organics was born from a deeply personal journey — one that began not in a boardroom or a laboratory, but in the heart of a mother’s everyday struggles with her child’s extra sensitive skin, due to allergies, For years, I watched my son — and often others — battle with skin challenges such as dry skin, eczema and dermatitis that seemed to strip away comfort and confidence. We tried everything we could find on store shelves, yet so many of those products were filled with harsh chemicals, disconnected from our environment, and indifferent to the unique beauty of African skin. I knew there had to be a better way — one that worked, honored both our bodies and our heritage.",
                delay: "100ms",
              },
              {
                para: "That’s when I began exploring the ancient secrets of African botanicals — the same ingredients our grandmothers trusted for healing, a glowing skin, and nourishment. I was captivated by the power of Shea, Palm, Baobab, Neem and African black soap — simple, potent gifts from our soil that have stood the test of time. I realized these weren’t just ingredients; they were a connection to our roots, our culture, and the natural wisdom that has always been part of who we are.Tafe Organics was created to reclaim that wisdom and share it with the world.",
                delay: "200ms",
              },
              {
                para: "It is more than a skincare brand — it’s a celebration of Africa’s rich botanical heritage and a bridge between tradition and modern science. Every formula we create is designed with care: clean, gentle, and effective, especially for sensitive skin. But more than that, each product carries a piece of our story — a reminder that beauty is not something we chase; it’s something we nurture.Today, Tafe Organics stands as a love letter to our roots and a promise to our future — to offer skincare that heals, nourishes, and empowers, while honoring the land and legacy that inspire us.",
                delay: "300ms",
              },
              {
                para: "This is why Tafe Organics exists as a family-centric brand : to help you and your loved ones glow naturally, beautifully, and unapologetically — just as nature intended.",
                delay: "400ms",
              },
              {
                para: "Ifeoluwa's desire to reach more people like her son birthed Tafe Organics, an eco conscious beauty brand for dry and sensitive skin. Tafe Organics rock ltd was established in August 2021.",
                delay: "500ms",
              },
            ].map((item, idx) => (
              <p
                key={idx}
                style={{
                  animation: `slideUp 0.8s ease-out ${item.delay} forwards`,
                  opacity: 0,
                }}
                className="text-lg leading-8 text-gray-800 border-l-4 border-[#6BBE49] pl-6 py-2 hover:bg-green-50 transition-all duration-300 rounded-r-lg"
              >
                {item.para}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Team Members */}
      <TeamMembers />

      {/* Our Values */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="flex items-center justify-center">
              <img
                src="/images/shea-20cocoa-20balm.jpg"
                alt="Shea Cocoa Balm"
                className="w-full rounded-lg shadow-lg"
              />
            </div>
            <div className="space-y-4">
              {values.map((value) => (
                <div key={value.id} className="border border-gray-200 rounded-lg overflow-hidden">
                  <button
                    onClick={() => setExpandedValue(expandedValue === value.id ? null : value.id)}
                    className="w-full px-6 py-4 flex items-center justify-between bg-white hover:bg-gray-50 transition"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{value.icon}</span>
                      <h3 className="text-lg font-bold text-amber-900">{value.title}</h3>
                    </div>
                    <span className="text-xl text-amber-900 transition-transform">
                      {expandedValue === value.id ? "−" : "+"}
                    </span>
                  </button>
                  {expandedValue === value.id && (
                    <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                      <p className="text-gray-700">{value.description}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-800 text-white p-12 rounded-lg mb-8">
            <h2 className="text-3xl font-bold mb-2">BECOME A STOCKIST</h2>
            <p className="text-lg">Frequently Asked Questions</p>
          </div>
          <div className="space-y-4">
            {[
              {
                q: "Why doesn't your soaps small like flowers or candy?",
                a: "We are a fragrance-free beauty brand and our products carry the natural scents of our rich ingredients.",
              },
              {
                q: "Can someone with dry skin use your bar soap?",
                a: "Yes, our soaps are specially formulated for dry and sensitive skin types.",
              },
              {
                q: "My bar soap melts quickly. How can I make my soap last longer?",
                a: "Store your soap in a cool, dry place and use a soap dish that allows proper drainage.",
              },
              {
                q: "How big are your bar soaps?",
                a: "Each bar is 245g net weight, perfect for extended use.",
              },
              {
                q: "How do I keep my balms & butters fresh?",
                a: "Keep them in a cool place away from direct sunlight for maximum shelf life.",
              },
              {
                q: "Do you ship to other countries?",
                a: "Yes, we ship internationally. Contact us for shipping rates.",
              },
              {
                q: "How do I pay in foreign currency?",
                a: "We accept international payments through multiple payment methods.",
              },
              {
                q: "What are your Shipping Terms?",
                a: "We offer free standard shipping on orders over ₦100k.",
              },
            ].map((faq, idx) => (
              <details key={idx} className="border-b pb-4 cursor-pointer group">
                <summary className="font-bold text-amber-900 text-lg group-open:text-amber-700 transition">
                  {faq.q}
                </summary>
                <p className="text-gray-700 mt-2 text-base">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

     
    </main>
  )
}
