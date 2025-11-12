import { Star } from "lucide-react"

export default function PromoBanner() {
  return (
    <div className="w-full bg-[#FFF4B0] py-3">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center gap-2">
        <div className="flex gap-1">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={16} className="fill-black text-black" />
          ))}
        </div>
        <span className="text-sm font-semibold text-black text-center">
          100% Pure, Organic and Natural Skin Beautifying Products.
        </span>
      </div>
    </div>
  )
}
