export default function TeamMembers() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold text-center playfairbold text-[#6BBE49] mb-4">Meet Our Team</h2>
        <div className="h-1 w-24 bg-[#6BBE49] mx-auto rounded-full mb-16"></div>

        {/* Ifeoluwa Section - Featured Member with Bio */}
        <div className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            {/* Left: Image */}
            <div className="group">
              <div className="relative overflow-hidden rounded-xl shadow-lg transform transition-all duration-300 group-hover:shadow-2xl group-hover:scale-105">
                <img
                  src="/images/main-20staff-20image.jpg"
                  alt="Ifeoluwa Folawiyo"
                  className="w-full h-[500px] object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <div className="text-white">
                    <p className="text-lg font-semibold">Founder & Managing Director</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Bio and Details */}
            <div className="flex flex-col justify-start space-y-4">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 playfairbold mb-2">Ifeoluwa Mary Folawiyo</h3>
                <p className="text-[#6BBE49] font-semibold text-lg mb-4">Founder & Managing Director</p>
              </div>

              <div className="space-y-4 text-gray-700 leading-relaxed text-base">
                <p>
                  Ifeoluwa Mary Folawiyo is an Aesthetician and a cosmetics formulator with over 10 years of experience
                  in the skincare industry. She is passionate about telling the stories of African traditional beauty
                  practices, showcasing the raw, wholesome, and sustainable ingredients from Africa, and exploring their
                  synergy with science to formulate effective and luxurious skincare products.
                </p>

                <p>
                  She is committed to empowering women and currently employs only women and young girls to help bridge
                  the inequality gap. A dedicated environmentalist, she is passionate about climate change and
                  sustainability. The Tafe Organics brand prioritizes WHO-friendly, eco-friendly packaging that is
                  recyclable and safe for the environment.
                </p>

                <p>
                  When she isn't working in a lab coat, she is out networking and learning new things. She actively
                  collaborates with and volunteers for organizations focused on human impact projects and programs. She
                  is also a loving mother of two beautiful children.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Other Team Members - Grid below */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Team Member 1 */}
          <div className="group text-center">
            <div className="relative overflow-hidden rounded-xl mb-6 shadow-lg transform transition-all duration-300 group-hover:shadow-2xl group-hover:scale-105">
              <img
                src="/images/2nd-20staff-20image.jpg"
                alt="Team Member"
                className="w-full h-96 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <h3 className="text-xl font-bold text-gray-900 playfairbold">Our Team</h3>
            <p className="text-[#6BBE49] font-semibold mt-2">Dedicated Professionals</p>
            <p className="text-gray-600 text-sm mt-2">
              Committed to excellence in product quality and customer service
            </p>
          </div>

          {/* Team Member 2 */}
          <div className="group text-center">
            <div className="relative overflow-hidden rounded-xl mb-6 shadow-lg transform transition-all duration-300 group-hover:shadow-2xl group-hover:scale-105">
              <img
                src="/images/3rd-20staff-20image.jpg"
                alt="Team Member"
                className="w-full h-96 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <h3 className="text-xl font-bold text-gray-900 playfairbold">Growing Together</h3>
            <p className="text-[#6BBE49] font-semibold mt-2">Team Collaboration</p>
            <p className="text-gray-600 text-sm mt-2">Building a community dedicated to organic beauty and wellness</p>
          </div>
        </div>
      </div>
    </section>
  )
}
