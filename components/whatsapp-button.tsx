"use client"

import { useState } from "react"

export default function WhatsAppButton() {
  const phoneNumber = "234810840962"
  const [isOpen, setIsOpen] = useState(false)

  const questions = [
    { id: 1, text: "What are your products made from?" },
    { id: 2, text: "Do you offer international shipping?" },
    { id: 3, text: "What is your return policy?" },
    { id: 4, text: "Are your products organic?" },
    { id: 5, text: "How do I place an order?" },
    { id: 6, text: "Do you have gift wrapping options?" },
  ]

  const generateWhatsAppUrl = (question: string) => {
    const message = encodeURIComponent(question)
    return `https://wa.me/${phoneNumber}?text=${message}`
  }

  return (
    <>
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 bg-white rounded-lg shadow-2xl p-4 w-72 animate-in fade-in zoom-in-95 duration-200">
          <h3 className="text-sm font-semibold text-gray-800 mb-3">How can we help?</h3>
          <div className="space-y-2 max-h-64 overflow-y-auto">
            {questions.map((question) => (
              <a
                key={question.id}
                href={generateWhatsAppUrl(question.text)}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="block p-2 text-sm text-gray-700 hover:bg-green-50 rounded transition-colors cursor-pointer"
              >
                {question.text}
              </a>
            ))}
          </div>
        </div>
      )}

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 bg-white hover:bg-green-50 text-green-500 rounded-full p-4 shadow-lg transition-all hover:scale-110 flex items-center justify-center border-2 border-green-500"
        title="Chat with us on WhatsApp"
      >
        <img src="/images/whatsapp3.webp" alt="WhatsApp" className="w-6 h-6" />
      </button>
    </>
  )
}
