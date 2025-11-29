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
<div
  className="relative w-full h-96 flex items-center justify-center bg-cover bg-center"
  style={{
    backgroundImage: "url('/images/abouthero.jpeg')",
  }}
>


  <div className="relative z-10 text-center">
    <h1 className="text-5xl md:text-6xl playfairbold font-bold text-white">About Us</h1>
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
  {/* Team Members */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Meet Our Team Members</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/main%20staff%20image-RAq7rqYooPDdwom1lUGg7owSKnnsW5.jpg"
                alt="Ifeoluwa Folawiyo"
                className="w-full h-96 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold">Ifeoluwa Folawiyo</h3>
              <p className="text-amber-700 font-semibold">Managing Director</p>
            </div>
            <div className="text-center">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2ND%20Staff%20image-Wp0REw0IWsUw7o61CXxddaYY7LWfKa.jpg"
                alt="Team Group 1"
                className="w-full h-96 object-cover rounded-lg mb-4"
              />
            </div>
            <div className="text-center">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3rd%20staff%20image-kLi0p2B1kIJEUM7V7xWtP6Wr2Xezr5.jpg"
                alt="Team Group 2"
                className="w-full h-96 object-cover rounded-lg mb-4"
              />
            </div>
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
  {/* MAP SECTION */}
<section className="py-20 bg-secondary">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    
    <h2 className="font-serif text-4xl font-bold text-primary mb-12 text-center animate-fade-in-up">
      Find Us
    </h2>

    <div className="bg-background rounded-lg overflow-hidden shadow-lg animate-scale-in">

      {/* Google Map */}
      <div className="w-full h-[300px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.356500024856!2d3.2869646735048237!3d6.602543222242809!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b90508df8195b%3A0xedd4d8a831e92efc!2s2%20C%20%26%20I%20Cl%2C%20Idimu%2C%20Lagos%20102213%2C%20Lagos!5e0!3m2!1sen!2sng!4v1764437313918!5m2!1sen!2sng"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

      {/* Map Info Section */}
      <div className="p-6 text-center">
        <h3 className="text-xl font-semibold mb-2">Our Location</h3>

        <p className="mb-4">
          House 2, C Close, Gowon Estate, Ipaja, Lagos.
        </p>

        <a
          href="https://maps.google.com/?q=House 2, C Close, Gowon Estate, Ipaja, Lagos"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-primary text-secondary hover:bg-primary/90 
                     font-medium px-6 py-2 rounded-full transition-all duration-300 
                     hover:scale-105"
        >
          Get Directions
        </a>
      </div>

    </div>
  </div>
</section>


    
    </main>
  )
}
