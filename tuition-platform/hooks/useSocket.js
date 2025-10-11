import { useEffect, useState } from 'react'
import { initSocket, getSocket, disconnectSocket } from '@/lib/socket'
import { useAuth } from './useAuth'

export function useSocket() {
  const { user } = useAuth()
  const [isConnected, setIsConnected] = useState(false)
  const [socket, setSocket] = useState(null)

  useEffect(() => {
    if (user) {
      const socketInstance = initSocket(user.uid)
      setSocket(socketInstance)

      socketInstance.on('connect', () => {
        setIsConnected(true)
      })

      socketInstance.on('disconnect', () => {
        setIsConnected(false)
      })

      return () => {
        disconnectSocket()
        setIsConnected(false)
        setSocket(null)
      }
    }
  }, [user])

  return { socket, isConnected }
}

export default useSocket
