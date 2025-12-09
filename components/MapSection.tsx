"use client"

export default function MapSection() {
  return (
    <section className="py-16 px-4 bg-[#F8F8F8]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl playfairbold font-bold text-center mb-10">
          Visit Our Location
        </h2>

        <div className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-200">
          <div className="w-full h-[300px] md:h-[450px]">
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
        </div>
            {/* Map Info Section */}
            <div className="p-6 text-center">
              <h3 className="text-xl  playfairreg font-semibold mb-2">Our Location</h3>

              <p className="mb-4 playfairreg ">House 2, C Close, Gowon Estate, Ipaja, Lagos.</p>

              <a
                href="https://maps.google.com/?q=House 2, C Close, Gowon Estate, Ipaja, Lagos"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block  bg-[#6BBE49] text-secondary hover:bg-primary/90 
                     font-medium px-6 py-2 rounded-full transition-all duration-300 
                     hover:scale-105"
              >
                Get Directions
              </a>
            </div>
      </div>
    </section>
  );
}
