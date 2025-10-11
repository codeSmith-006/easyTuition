import { io } from 'socket.io-client'

let socket = null

export const initSocket = (userId) => {
  if (!socket) {
    socket = io(process.env.NEXT_PUBLIC_SOCKET_URL || 'http://localhost:3001', {
      auth: {
        userId
      },
      transports: ['websocket', 'polling'],
    })

    socket.on('connect', () => {
      console.log('Socket connected:', socket.id)
    })

    socket.on('disconnect', () => {
      console.log('Socket disconnected')
    })

    socket.on('connect_error', (error) => {
      console.error('Socket connection error:', error)
    })
  }

  return socket
}

export const getSocket = () => {
  if (!socket) {
    throw new Error('Socket not initialized. Call initSocket first.')
  }
  return socket
}

export const disconnectSocket = () => {
  if (socket) {
    socket.disconnect()
    socket = null
  }
}

// Event emitters
export const socketEmitters = {
  joinRoom: (roomId) => {
    socket?.emit('join-room', roomId)
  },
  
  leaveRoom: (roomId) => {
    socket?.emit('leave-room', roomId)
  },
  
  sendMessage: (data) => {
    socket?.emit('send-message', data)
  },
  
  typing: (roomId) => {
    socket?.emit('typing', roomId)
  },
  
  stopTyping: (roomId) => {
    socket?.emit('stop-typing', roomId)
  }
}

// Event listeners
export const socketListeners = {
  onMessage: (callback) => {
    socket?.on('new-message', callback)
  },
  
  onTyping: (callback) => {
    socket?.on('user-typing', callback)
  },
  
  onStopTyping: (callback) => {
    socket?.on('user-stop-typing', callback)
  },
  
  onUserOnline: (callback) => {
    socket?.on('user-online', callback)
  },
  
  onUserOffline: (callback) => {
    socket?.on('user-offline', callback)
  }
}

export default { initSocket, getSocket, disconnectSocket, socketEmitters, socketListeners }
