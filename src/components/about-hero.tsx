export default function AboutHero() {
  return (
    <div className="relative w-full h-96 bg-teal-600 flex items-center justify-center overflow-hidden">
      {/* Background image overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{
          backgroundImage:
            "url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/about%20hero.PNG-Qd86vNeNgDwSGM3mLTng5SAWk2yGtf.png')",
        }}
      />
      {/* Content */}
      <div className="relative z-10 text-center">
        <h1 className="text-5xl font-bold text-white font-serif">About Us</h1>
      </div>
    </div>
  )
}
