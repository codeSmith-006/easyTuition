import { NextResponse } from 'next/server'
import { getDatabase, Collections } from '@/lib/mongodb'

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url)
    const page = parseInt(searchParams.get('page') || '1')
    const limit = parseInt(searchParams.get('limit') || '10')
    const skip = (page - 1) * limit

    const db = await getDatabase()
    const courses = await db
      .collection(Collections.COURSES)
      .find({ status: 'published' })
      .skip(skip)
      .limit(limit)
      .toArray()

    const total = await db.collection(Collections.COURSES).countDocuments({ status: 'published' })

    return NextResponse.json({
      courses,
      pagination: {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit),
      },
    })
  } catch (error) {
    console.error('Get courses error:', error)
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    )
  }
}

export async function POST(request) {
  try {
    const token = request.headers.get('Authorization')?.split('Bearer ')[1]

    if (!token) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      )
    }

    const courseData = await request.json()
    const uid = 'mock-uid' // Get from decoded token

    const db = await getDatabase()
    const course = {
      ...courseData,
      teacherId: uid,
      status: 'draft',
      createdAt: new Date(),
      updatedAt: new Date(),
    }

    const result = await db.collection(Collections.COURSES).insertOne(course)

    return NextResponse.json({
      success: true,
      course: { ...course, _id: result.insertedId },
    })
  } catch (error) {
    console.error('Create course error:', error)
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    )
  }
}
