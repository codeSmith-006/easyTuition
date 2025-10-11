import { MongoClient } from 'mongodb'

if (!process.env.MONGODB_URI) {
  throw new Error('Please add your MongoDB URI to .env.local')
}

const uri = process.env.MONGODB_URI
const options = {}

let client
let clientPromise

if (process.env.NODE_ENV === 'development') {
  // In development mode, use a global variable to preserve the client across module reloads
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, options)
    global._mongoClientPromise = client.connect()
  }
  clientPromise = global._mongoClientPromise
} else {
  // In production mode, create a new client
  client = new MongoClient(uri, options)
  clientPromise = client.connect()
}

export default clientPromise

// Helper function to get database
export async function getDatabase() {
  const client = await clientPromise
  return client.db(process.env.MONGODB_DB || 'tuition-platform')
}

// Collection helpers
export async function getCollection(collectionName) {
  const db = await getDatabase()
  return db.collection(collectionName)
}

// Common collections
export const Collections = {
  USERS: 'users',
  COURSES: 'courses',
  ENROLLMENTS: 'enrollments',
  PAYMENTS: 'payments',
  MESSAGES: 'messages',
  NOTIFICATIONS: 'notifications',
  REVIEWS: 'reviews'
}
