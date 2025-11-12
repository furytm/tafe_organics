"use client"

import { useEffect, useState } from "react"

export default function BrandIntro() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <section className="w-full bg-white py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p
          className={`text-3xl md:text-4xl lg:text-5xl font-serif text-gray-900 transition-all duration-1000 ${
            isLoaded ? "opacity-100" : "opacity-0"
          }`}
        >
          <span className="text-[#752E2E] font-bold mr-2">"Tafe</span>
          <span>Organics was established by a mom in her desperation to help her</span>
          <br />
          <span>son's skin get better."</span>
        </p>
      </div>
    </section>
  )
}
