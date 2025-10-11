import axios from 'axios'
import { auth } from './firebase'

const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
})

// Request interceptor to add auth token
apiClient.interceptors.request.use(
  async (config) => {
    try {
      const user = auth.currentUser
      if (user) {
        const token = await user.getIdToken()
        config.headers.Authorization = `Bearer ${token}`
      }
    } catch (error) {
      console.error('Error getting auth token:', error)
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

// Response interceptor for error handling
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      // Server responded with error status
      const { status, data } = error.response
      
      if (status === 401) {
        // Unauthorized - redirect to login
        if (typeof window !== 'undefined') {
          window.location.href = '/login'
        }
      } else if (status === 403) {
        // Forbidden - no permission
        console.error('Access forbidden:', data.message)
      } else if (status === 404) {
        // Not found
        console.error('Resource not found:', data.message)
      } else if (status >= 500) {
        // Server error
        console.error('Server error:', data.message)
      }
    } else if (error.request) {
      // Request was made but no response received
      console.error('No response from server')
    } else {
      // Error in setting up request
      console.error('Request error:', error.message)
    }
    
    return Promise.reject(error)
  }
)

export default apiClient

// API endpoint helpers
export const api = {
  // Auth endpoints
  auth: {
    login: (data) => apiClient.post('/api/auth/login', data),
    register: (data) => apiClient.post('/api/auth/register', data),
    logout: () => apiClient.post('/api/auth/logout'),
  },

  // User endpoints
  users: {
    me: () => apiClient.get('/api/users/me'),
    update: (data) => apiClient.patch('/api/users/me', data),
    getById: (id) => apiClient.get(`/api/users/${id}`),
  },

  // Course endpoints
  courses: {
    list: (params) => apiClient.get('/api/courses', { params }),
    getById: (id) => apiClient.get(`/api/courses/${id}`),
    create: (data) => apiClient.post('/api/courses', data),
    update: (id, data) => apiClient.patch(`/api/courses/${id}`, data),
    delete: (id) => apiClient.delete(`/api/courses/${id}`),
  },

  // Payment endpoints
  payments: {
    createIntent: (data) => apiClient.post('/api/payments/create-intent', data),
    confirm: (data) => apiClient.post('/api/payments/confirm', data),
    history: () => apiClient.get('/api/payments/history'),
  },

  // Chat endpoints
  chat: {
    getConversations: () => apiClient.get('/api/chat/conversations'),
    getMessages: (conversationId) => apiClient.get(`/api/chat/${conversationId}`),
    sendMessage: (conversationId, data) => apiClient.post(`/api/chat/${conversationId}`, data),
  },
}
