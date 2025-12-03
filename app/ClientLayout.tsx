"use client"

import type React from "react"
import { Analytics } from "@vercel/analytics/next"
import Header from "@/components/header"
import Footer from "@/components/footer"
import WhatsAppButton from "@/components/whatsapp-button"
import { CartProvider } from "@/contexts/cart-context"
import CartPopup from "@/components/cart-popup"
import { usePathname } from "next/navigation"

export default function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <CartProvider>
        <Header />
        <WhatsAppButtonWrapper />
        {children}
        <CartPopup />
        <Footer />
        <Analytics />
      </CartProvider>
    </>
  )
}

function WhatsAppButtonWrapper() {
  const pathname = usePathname()

  // Hide WhatsApp button on shop, bar-soap, and shea-butter pages
  const hideWhatsAppPaths = ["/shop", "/bar-soap", "/shea-butter"]
  const shouldHide = hideWhatsAppPaths.some((path) => pathname.includes(path))

  if (shouldHide) return null

  return <WhatsAppButton />
}
