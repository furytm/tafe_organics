"use client"

import { useState } from "react"

const faqs = [
  {
    question: "Why doesn't your soaps small like flowers or candy?",
    answer: "We are a fragrance-free beauty brand and our products carry the natural scents of our rich ingredients.",
  },
  {
    question: "Can someone with dry skin use your bar soap?",
    answer:
      "We exist for the community of people who have dry skin and every product we make is suited towards our target audience.",
  },
  {
    question: "My bar soap melts quickly. How can I make my soap last longer?",
    answer:
      "Keep them dry in between uses by placing it in an aerated soap dish or take it out of the bathroom to dry on a shelf.",
  },
  {
    question: "How big are your bar soaps?",
    answer: "Our soaps are huge at a 245G size.",
  },
  {
    question: "How do I keep my balms & butters fresh?",
    answer:
      "Remember to keep wet hands out of your balms and butters. It's best to use clean spatulas or wooden spoons.",
  },
  {
    question: "Do you ship to other countries?",
    answer: "Yes, we ship worldwide.",
  },
  {
    question: "How do I pay in foreign currency?",
    answer:
      "Kindly reach out to our customer care line or email us at info@tafeorganics.com for suitable payment options.",
  },
  {
    question: "What are your Shipping Terms?",
    answer: "Local Shipping 2-3 Days\n\nInter State Shipping 3-5 Days\n\nInternational Shipping 2-3 Weeks",
  },
]

export default function FaqSection() {
  const [expandedIndex, setExpandedIndex] = useState(null)

  return (
    <section className="relative py-16 px-4 bg-gray-900">
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/section%20before%20staff%20images.PNG-vYmxg44Qht2VecWnO9i8y3Bz4jpTJu.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div className="relative z-10 max-w-2xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-white mb-4 font-serif">Become A Stockist</h2>
        <h3 className="text-2xl font-semibold text-center text-white mb-12">Frequently Asked Questions</h3>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md">
              <button
                onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition"
              >
                <h3 className="text-left font-semibold text-gray-800 underline">{faq.question}</h3>
                <span
                  className={`text-red-500 text-2xl transition transform flex-shrink-0 ml-4 ${expandedIndex === index ? "rotate-180" : ""}`}
                >
                  ▼
                </span>
              </button>

              {expandedIndex === index && (
                <div className="px-6 py-4 bg-gray-50 border-t border-gray-300">
                  <p className="text-gray-700 leading-relaxed whitespace-pre-line">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
