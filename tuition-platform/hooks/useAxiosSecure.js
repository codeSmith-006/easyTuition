import { useEffect } from 'react'
import axios from 'axios'
import { useAuth } from './useAuth'
import { useRouter } from 'next/navigation'

const axiosSecure = axios.create({
  baseURL: process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000',
})

export function useAxiosSecure() {
  const { user, signOut } = useAuth()
  const router = useRouter()

  useEffect(() => {
    // Request interceptor
    const requestInterceptor = axiosSecure.interceptors.request.use(
      async (config) => {
        if (user) {
          const token = await user.getIdToken()
          config.headers.Authorization = `Bearer ${token}`
        }
        return config
      },
      (error) => {
        return Promise.reject(error)
      }
    )

    // Response interceptor
    const responseInterceptor = axiosSecure.interceptors.response.use(
      (response) => response,
      async (error) => {
        if (error.response?.status === 401 || error.response?.status === 403) {
          await signOut()
          router.push('/login')
        }
        return Promise.reject(error)
      }
    )

    return () => {
      axiosSecure.interceptors.request.eject(requestInterceptor)
      axiosSecure.interceptors.response.eject(responseInterceptor)
    }
  }, [user, signOut, router])

  return axiosSecure
}

export default useAxiosSecure
