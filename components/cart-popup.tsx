"use client"

import { useCart } from "@/contexts/cart-context"
import { X, Minus, Plus, ShoppingBag } from "lucide-react"
import Link from "next/link"

export default function CartPopup() {
  const { items, isOpen, closeCart, removeFromCart, updateQuantity, getTotalItems, getTotalPrice } = useCart()

  if (!isOpen) return null

  return (
    <>
      {/* Overlay */}
      <div className="fixed inset-0 bg-black/40 z-50 transition-opacity" onClick={closeCart} />

      {/* Cart Popup - slides in from right */}
      <div
        className={`fixed right-0 top-0 h-screen w-full max-w-md bg-white z-50 flex flex-col shadow-2xl transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-[#6BBE49]" />
            <h2 className="text-lg font-bold playfairbold">Your Cart</h2>
          </div>
          <button onClick={closeCart} className="p-1 hover:bg-gray-100 rounded transition">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Items List */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBag className="w-12 h-12 text-gray-300 mb-4" />
              <p className="text-gray-600">Your cart is empty</p>
              <p className="text-sm text-gray-500 mt-2">Start shopping to add items!</p>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map((item) => (
                <div key={`${item.id}-${item.weight}`} className="flex gap-4 pb-4 border-b border-gray-100">
                  <img
                    src={item.image || "/placeholder.svg"}
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded bg-gray-100"
                  />
                  <div className="flex-1">
                    <Link href={`/products/${item.slug}`} onClick={closeCart}>
                      <h3 className="font-semibold text-sm hover:text-[#6BBE49] transition">{item.name}</h3>
                    </Link>
                    <p className="text-xs text-gray-600 mt-1">Weight: {item.weight}</p>
                    <p className="text-[#E89B3C] font-bold text-sm mt-1">₦{item.price.toLocaleString()}.00</p>

                    {/* Quantity Controls */}
                    <div className="flex items-center gap-2 mt-2">
                      <button
                        onClick={() => updateQuantity(item.id.toString(), item.quantity - 1)}
                        className="p-1 hover:bg-gray-100 rounded transition"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="w-6 text-center font-semibold">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id.toString(), item.quantity + 1)}
                        className="p-1 hover:bg-gray-100 rounded transition"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  {/* Remove Button */}
                  <button
                    onClick={() => removeFromCart(item.id.toString())}
                    className="text-red-500 hover:text-red-700 transition"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer - Summary and Checkout */}
        {items.length > 0 && (
          <div className="border-t border-gray-200 px-6 py-4 space-y-4">
            {/* Summary */}
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Subtotal ({getTotalItems()} items):</span>
                <span className="font-semibold">₦{getTotalPrice().toLocaleString()}.00</span>
              </div>
              <div className="text-xs text-gray-500">Shipping calculated at checkout</div>
            </div>

            {/* Buttons */}
            <div className="space-y-2">
              <Link
                href="/checkout"
                onClick={closeCart}
                className="block text-center w-full bg-[#6BBE49] text-white py-3 rounded font-semibold hover:bg-[#5aaa3f] transition"
              >
                Proceed to Checkout
              </Link>
              <button
                onClick={closeCart}
                className="w-full border border-gray-300 text-gray-900 py-2 rounded font-semibold hover:bg-gray-50 transition"
              >
                Continue Shopping
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  )
}
