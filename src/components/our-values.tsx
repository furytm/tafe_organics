"use client"

import { useState } from "react"

const values = [
  {
    title: "Love",
    description:
      "The brand was established from the drive of a mother's love and it reflects in our every process and the quality of every product we make.",
  },
  {
    title: "Originality",
    description:
      "We are committed to creating authentic, original products that stay true to our core values and mission.",
  },
  {
    title: "Eco Consciousness",
    description: "We are dedicated to sustainable practices and environmental responsibility in all our operations.",
  },
  {
    title: "Friendship",
    description: "We believe in building strong relationships with our customers and community members.",
  },
  {
    title: "Gender Equality",
    description:
      "We offer scholarships to some of our staff and their children and we are committed to equal opportunities for all.",
  },
]

export default function OurValues() {
  const [expandedIndex, setExpandedIndex] = useState(0)

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 font-serif">Our Values</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left - Product Image */}
          <div className="flex justify-center">
            <div className="w-full max-w-sm">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/SHEA%20COCOA%20BALM-NPPV5p0XqOXJD9p1hTjfig3WfHQVR3.jpg"
                alt="Shea Cocoa Balm"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* Right - Accordion Values */}
          <div className="space-y-4">
            {values.map((value, index) => (
              <div key={index} className="border border-gray-300 rounded-lg overflow-hidden">
                <button
                  onClick={() => setExpandedIndex(expandedIndex === index ? -1 : index)}
                  className="w-full px-6 py-4 flex items-center justify-between bg-white hover:bg-gray-100 transition"
                >
                  <h3 className="text-lg font-semibold text-amber-900">{value.title}</h3>
                  <span
                    className={`text-amber-900 text-xl transition transform ${expandedIndex === index ? "rotate-180" : ""}`}
                  >
                    +
                  </span>
                </button>

                {expandedIndex === index && (
                  <div className="px-6 py-4 bg-gray-50 border-t border-gray-300">
                    <p className="text-gray-700 leading-relaxed">{value.description}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
