import { NextResponse } from 'next/server'
import { createPaymentIntent } from '@/lib/stripe'

export async function POST(request) {
  try {
    const { amount, currency = 'usd', metadata } = await request.json()

    if (!amount || amount <= 0) {
      return NextResponse.json(
        { error: 'Invalid amount' },
        { status: 400 }
      )
    }

    const paymentIntent = await createPaymentIntent(amount, currency, metadata)

    return NextResponse.json({
      clientSecret: paymentIntent.client_secret,
      paymentIntentId: paymentIntent.id,
    })
  } catch (error) {
    console.error('Create payment intent error:', error)
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    )
  }
}
