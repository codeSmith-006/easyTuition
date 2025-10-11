import { NextResponse } from 'next/server'
import { getDatabase, Collections } from '@/lib/mongodb'

export async function GET(request) {
  try {
    // Get token from Authorization header
    const token = request.headers.get('Authorization')?.split('Bearer ')[1]

    if (!token) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      )
    }

    // Verify token and get uid (you would implement this with Firebase Admin SDK)
    // For now, we'll skip verification
    // const decodedToken = await admin.auth().verifyIdToken(token)
    // const uid = decodedToken.uid

    // Mock uid for example
    const uid = 'mock-uid'

    const db = await getDatabase()
    const user = await db.collection(Collections.USERS).findOne({ uid })

    if (!user) {
      return NextResponse.json(
        { error: 'User not found' },
        { status: 404 }
      )
    }

    return NextResponse.json(user)
  } catch (error) {
    console.error('Get user error:', error)
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    )
  }
}

export async function PATCH(request) {
  try {
    const token = request.headers.get('Authorization')?.split('Bearer ')[1]

    if (!token) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      )
    }

    const updates = await request.json()
    const uid = 'mock-uid' // Get from decoded token

    const db = await getDatabase()
    await db.collection(Collections.USERS).updateOne(
      { uid },
      { $set: { ...updates, updatedAt: new Date() } }
    )

    const updatedUser = await db.collection(Collections.USERS).findOne({ uid })

    return NextResponse.json(updatedUser)
  } catch (error) {
    console.error('Update user error:', error)
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    )
  }
}
