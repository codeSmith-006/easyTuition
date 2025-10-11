import { NextResponse } from 'next/server'
import { createPaymentIntent } from '@/lib/stripe'
import { getDatabase, Collections } from '@/lib/mongodb'

export async function POST(request) {
  try {
    const { action, ...data } = await request.json()

    if (action === 'create-intent') {
      const { amount, currency, courseId, userId } = data

      // Create payment intent
      const paymentIntent = await createPaymentIntent(amount, currency, {
        courseId,
        userId,
      })

      // Store payment record in database
      const db = await getDatabase()
      const paymentsCollection = db.collection(Collections.PAYMENTS)

      await paymentsCollection.insertOne({
        paymentIntentId: paymentIntent.id,
        userId,
        courseId,
        amount,
        currency,
        status: 'pending',
        createdAt: new Date(),
      })

      return NextResponse.json({
        clientSecret: paymentIntent.client_secret,
        paymentIntentId: paymentIntent.id,
      })
    }

    if (action === 'confirm') {
      const { paymentIntentId } = data

      // Update payment status in database
      const db = await getDatabase()
      const paymentsCollection = db.collection(Collections.PAYMENTS)

      await paymentsCollection.updateOne(
        { paymentIntentId },
        {
          $set: {
            status: 'completed',
            completedAt: new Date(),
          },
        }
      )

      return NextResponse.json({ success: true })
    }

    return NextResponse.json(
      { error: 'Invalid action' },
      { status: 400 }
    )
  } catch (error) {
    console.error('Payment error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

export async function GET(request) {
  try {
    // Get payment history for a user
    const { searchParams } = new URL(request.url)
    const userId = searchParams.get('userId')

    if (!userId) {
      return NextResponse.json(
        { error: 'User ID required' },
        { status: 400 }
      )
    }

    const db = await getDatabase()
    const paymentsCollection = db.collection(Collections.PAYMENTS)

    const payments = await paymentsCollection
      .find({ userId })
      .sort({ createdAt: -1 })
      .toArray()

    return NextResponse.json({ payments })
  } catch (error) {
    console.error('Get payments error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
