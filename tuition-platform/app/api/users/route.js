import { NextResponse } from 'next/server'
import { getDatabase, Collections } from '@/lib/mongodb'

// Middleware to verify token
async function verifyAuth(request) {
  const authHeader = request.headers.get('authorization')
  if (!authHeader?.startsWith('Bearer ')) {
    return null
  }

  const token = authHeader.substring(7)
  // In production, verify JWT token here
  // For now, we'll assume it's valid
  return { userId: 'user-id', role: 'student' }
}

export async function GET(request) {
  try {
    const auth = await verifyAuth(request)
    if (!auth) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      )
    }

    const db = await getDatabase()
    const usersCollection = db.collection(Collections.USERS)

    // Get user profile
    const user = await usersCollection.findOne(
      { _id: auth.userId },
      { projection: { password: 0 } } // Exclude password
    )

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
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

export async function POST(request) {
  try {
    const data = await request.json()
    const { uid, email, role } = data

    const db = await getDatabase()
    const usersCollection = db.collection(Collections.USERS)

    // Create user profile
    const newUser = {
      uid,
      email,
      role: role || 'student',
      createdAt: new Date(),
      updatedAt: new Date(),
      profile: {
        name: '',
        avatar: '',
        bio: '',
      },
    }

    const result = await usersCollection.insertOne(newUser)

    return NextResponse.json({
      success: true,
      userId: result.insertedId,
    })
  } catch (error) {
    console.error('Create user error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

export async function PATCH(request) {
  try {
    const auth = await verifyAuth(request)
    if (!auth) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      )
    }

    const data = await request.json()
    const db = await getDatabase()
    const usersCollection = db.collection(Collections.USERS)

    // Update user profile
    const result = await usersCollection.updateOne(
      { _id: auth.userId },
      { 
        $set: { 
          ...data,
          updatedAt: new Date()
        }
      }
    )

    if (result.matchedCount === 0) {
      return NextResponse.json(
        { error: 'User not found' },
        { status: 404 }
      )
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Update user error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
