import { NextResponse } from 'next/server'
import { getDatabase, Collections } from '@/lib/mongodb'
import { auth } from 'firebase-admin'

export async function POST(request) {
  try {
    const { action, ...data } = await request.json()

    switch (action) {
      case 'register':
        return await handleRegister(data)
      case 'login':
        return await handleLogin(data)
      default:
        return NextResponse.json(
          { error: 'Invalid action' },
          { status: 400 }
        )
    }
  } catch (error) {
    console.error('Auth error:', error)
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    )
  }
}

async function handleRegister(data) {
  const { uid, email, role = 'student', name } = data
  const db = await getDatabase()

  // Create user profile in MongoDB
  const user = {
    uid,
    email,
    name,
    role,
    createdAt: new Date(),
    updatedAt: new Date(),
  }

  await db.collection(Collections.USERS).insertOne(user)

  return NextResponse.json({ 
    success: true, 
    user 
  })
}

async function handleLogin(data) {
  const { uid } = data
  const db = await getDatabase()

  // Get user from MongoDB
  const user = await db.collection(Collections.USERS).findOne({ uid })

  if (!user) {
    return NextResponse.json(
      { error: 'User not found' },
      { status: 404 }
    )
  }

  return NextResponse.json({ 
    success: true, 
    user 
  })
}
