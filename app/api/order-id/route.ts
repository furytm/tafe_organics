import Redis from "ioredis"
import { NextResponse } from "next/server"

const redis = new Redis(process.env.REDIS_URL!)

export async function POST() {
  const current = await redis.get("tafe_order_id")
  const next = current ? parseInt(current, 10) + 1 : 1

  await redis.set("tafe_order_id", next.toString())

  return NextResponse.json({
    orderId: next.toString().padStart(4, "0"),
  })
}
