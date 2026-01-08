import { kv } from "@vercel/kv"
import { NextResponse } from "next/server"

export async function POST() {
  const current = (await kv.get<number>("tafe_order_id")) ?? 0
  const next = current + 1

  await kv.set("tafe_order_id", next)

  return NextResponse.json({
    orderId: next.toString().padStart(4, "0"),
  })
}
