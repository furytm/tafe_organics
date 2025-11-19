export default function TeamMembers() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 font-serif">Meet Our Team Members</h2>

        {/* Main Staff Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left - Main Staff Image */}
          <div className="flex justify-center">
            <div className="w-full max-w-sm">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/main%20staff%20image-RAq7rqYooPDdwom1lUGg7owSKnnsW5.jpg"
                alt="Ifeoluwa Folawiyo - Managing Director"
                className="w-full h-auto rounded-lg shadow-lg object-cover"
              />
              <div className="mt-4 text-center">
                <h3 className="text-xl font-bold text-gray-800">Ifeoluwa Folawiyo</h3>
                <p className="text-orange-500 font-semibold">Managing Director</p>
              </div>
            </div>
          </div>

          {/* Right - Team Group Images */}
          <div className="col-span-1 lg:col-span-2 space-y-6">
            {/* Top Group Image */}
            <div className="w-full">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/staff%20images.PNG-BeocVIQNLoDnYCMdoCiuqURoHyW8oJ.png"
                alt="Team Members Group 1"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>

            {/* Bottom Group Image */}
            <div className="w-full">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/staff%20images.PNG-BeocVIQNLoDnYCMdoCiuqURoHyW8oJ.png"
                alt="Team Members Group 2"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
