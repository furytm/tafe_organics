"use client"


import { useState } from "react"
import { Send, Mail, Phone, MapPin } from "lucide-react"
import Swal from "sweetalert2";


export default function ContactPageContent() {
 
 const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const data = new FormData(form);

    // Add Web3Forms access key
    data.append("access_key", "8052b73a-6693-49a5-983d-d2ecffc16fee");
      data.append("from_name", "Tafe Organics Website");
  data.append("subject", "New Contactpage Form Message");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data,
      });

      const result = await res.json();

      if (result.success) {
        Swal.fire({
          icon: "success",
          title: "Message sent!",
          text: "We'll get back to you soon.",
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
        });

        form.reset();
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Failed!",
          text: "Please try again.",
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 3000,
        });
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Network Error",
        text: "Check your connection and try again.",
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
      });
    }

    setLoading(false);
  };
  return (
    <main>
      {/* Hero Section with Image */}
      <section className="relative w-full h-96 flex items-center justify-center bg-cover bg-center overflow-hidden">
        <img
          src="/two-friends-using-organic-soap-and-balm-smiling-ha.jpg"
          alt="Friends enjoying Tafe Organics products"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 text-center animate-slideUp">
          <h1 className="text-5xl md:text-6xl playfairbold font-bold text-white mb-4">Get In Touch</h1>
          <p className="text-xl text-white/90">We'd love to hear from you. Connect with us today.</p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Phone */}
            <div className="bg-white p-8 rounded-lg shadow-md text-center animate-scaleIn hover:shadow-lg transition-shadow">
              <Phone className="w-12 h-12 text-[#6BBE49] mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Phone</h3>
              <p className="text-gray-600 mb-2">+2348108400962</p>
              <p className="text-gray-600">+2348024558959</p>
            </div>

            {/* Email */}
            <div
              className="bg-white p-8 rounded-lg shadow-md text-center animate-scaleIn hover:shadow-lg transition-shadow"
              style={{ animationDelay: "0.1s" }}
            >
              <Mail className="w-12 h-12 text-[#6BBE49] mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Email</h3>
              <p className="text-gray-600">support@tafeorganics.com</p>
            </div>

            {/* Address */}
            <div
              className="bg-white p-8 rounded-lg shadow-md text-center animate-scaleIn hover:shadow-lg transition-shadow"
              style={{ animationDelay: "0.2s" }}
            >
              <MapPin className="w-12 h-12 text-[#6BBE49] mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Address</h3>
              <p className="text-gray-600">House 2, C Close, Gowon Estate, Ipaja, Lagos.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
        <section className="py-16 px-4 bg-white">
      <div className="max-w-3xl mx-auto">
        <div className="mb-12 text-center">
          <h2 className="text-4xl playfairbold font-bold mb-4">Send Us a Message</h2>
          <p className="text-gray-600 text-lg">
            Got questions about our products? Let us know how we can help.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6 animate-fadeIn">

          <div className="grid md:grid-cols-2 gap-6">
            <input
              type="text"
              name="name"
              placeholder="Your Full Name *"
              required
              onChange={handleChange}
              className="w-full bg-gray-50 border border-gray-300 rounded-lg py-3 px-4 text-gray-900"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email *"
              required
              onChange={handleChange}
              className="w-full bg-gray-50 border border-gray-300 rounded-lg py-3 px-4 text-gray-900"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              onChange={handleChange}
              className="w-full bg-gray-50 border border-gray-300 rounded-lg py-3 px-4 text-gray-900"
            />

            <select
              name="subject"
              required
              onChange={handleChange}
              className="w-full bg-gray-50 border border-gray-300 rounded-lg py-3 px-4 text-gray-900"
            >
              <option value="">Select a Subject *</option>
              <option value="product-inquiry">Product Inquiry</option>
              <option value="bulk-order">Bulk Order</option>
              <option value="wholesale">Wholesale</option>
              <option value="partnership">Partnership</option>
              <option value="feedback">International orders</option>
              <option value="other">Other</option>
            </select>
          </div>

          <textarea
            name="message"
            required
            rows={6}
            placeholder="Your Message *"
            onChange={handleChange}
            className="w-full bg-gray-50 border border-gray-300 rounded-lg py-3 px-4 text-gray-900 resize-none"
          ></textarea>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#6BBE49] hover:bg-[#5aaa3f] text-white font-semibold py-4 rounded-lg transition-all"
          >
            {loading ? "Sending..." : <span className="flex items-center justify-center gap-2"><Send size={20} /> Send Message</span>}
          </button>
        </form>
      </div>
    </section>


      {/* Map Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl playfairbold font-bold text-center mb-12">Visit Our Location</h2>
          <div className="bg-white rounded-lg overflow-hidden shadow-lg animate-scaleIn">
            <div className="w-full h-96">
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
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl playfairbold font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {[
              {
                q: "How long does it take to respond to inquiries?",
                a: "We aim to respond to all inquiries within 24-48 business hours. For urgent matters, call us directly.",
              },
              {
                q: "Can I place a wholesale order?",
                a: "Yes! We offer wholesale and bulk pricing. Please contact us with your requirements.",
              },
              {
                q: "Do you offer custom product orders?",
                a: "We can discuss custom orders for bulk purchases. Contact us to learn more.",
              },
              {
                q: "What are your business hours?",
                a: "Monday - Friday: 9:00 AM - 5:00 PM (WAT). Saturdays: 10:00 AM - 3:00 PM.",
              },
              {
                q: "Can I schedule a product demonstration?",
                a: "Contact us to arrange a time that works for you.",
              },
            ].map((faq, idx) => (
              <details key={idx} className="border-b pb-4 cursor-pointer group">
                <summary className="font-bold text-amber-900 text-lg group-open:text-amber-700 transition flex items-center gap-2">
                  <span className="text-[#6BBE49]">+</span>
                  {faq.q}
                </summary>
                <p className="text-gray-700 mt-3 text-base ml-6">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
