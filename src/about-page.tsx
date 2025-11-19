"use client"

import { useState } from "react"

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
      <div className="relative w-full h-96 bg-gradient-to-r from-teal-400 to-teal-500 flex items-center justify-center overflow-hidden">
        <img
          src="/organic-skincare-product-with-natural-ingredients.jpg"
          alt="About Us Hero"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div className="relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white">About Us</h1>
        </div>
      </div>

      {/* Brand History */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Tafe Organic Brand History</h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              Tafe Organics was established by a mom in her desperation to help her son's skin better. With a love for
              enterprise, Ifeoluwa Folawiyo helped enhanced the beauty of her university friends with makeup for
              birthdays and special events. She made friends with cosmetics store owners and recommended skincare
              products for her friends which she sold for a small token.
            </p>
            <p>
              Fast forward 3 years after college, she came across a newspaper advert in 2011, on training about how to
              make soaps and lotions. Her interest in cosmetics motivated her to attend the training. Though she never
              got the time to practice what she learnt because she had a full time job. Four years later, she had a son
              who suddenly developed skin allergies making his skin often dry itchy and scaly leading to bouts of
              sleepless nights.
            </p>
            <p>
              After countless visits to doctors and using different over the counter medications, she had little success
              with healing her son's skin. Ifeoluwa's mom, concerned about her grandson gifted her African black soap,
              Shea-butter and black palm kernel oil at Ekiti state, Nigeria. Her son's skin greatly improved and she
              remembered she could make more with these gifts as raw materials for making other skincare products.
            </p>
            <p>
              On this journey, she realized that there are many people like her son, both young and old who have
              sensitive and allergy prone skin and that she could help them find a solution while making a business out
              of it.
            </p>
            <p>
              Ifeoluwa's desire to reach more people like her son birthed Tafe Organics, an eco conscious beauty brand
              for dry and sensitive skin. Tafe Organics rock ltd was established in August 2021.
            </p>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="flex items-center justify-center">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/SHEA%20COCOA%20BALM-NPPV5p0XqOXJD9p1hTjfig3WfHQVR3.jpg"
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

    </main>
  )
}
