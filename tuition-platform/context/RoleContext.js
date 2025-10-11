'use client'

import { createContext, useContext } from 'react'
import { useAuth } from './AuthContext'

const RoleContext = createContext()

export const USER_ROLES = {
  ADMIN: 'admin',
  TEACHER: 'teacher',
  STUDENT: 'student'
}

export function RoleProvider({ children }) {
  const { userRole } = useAuth()

  const hasRole = (role) => {
    return userRole === role
  }

  const hasAnyRole = (roles) => {
    return roles.includes(userRole)
  }

  const isAdmin = () => hasRole(USER_ROLES.ADMIN)
  const isTeacher = () => hasRole(USER_ROLES.TEACHER)
  const isStudent = () => hasRole(USER_ROLES.STUDENT)

  const value = {
    role: userRole,
    hasRole,
    hasAnyRole,
    isAdmin,
    isTeacher,
    isStudent,
    USER_ROLES
  }

  return (
    <RoleContext.Provider value={value}>
      {children}
    </RoleContext.Provider>
  )
}

export function useRole() {
  const context = useContext(RoleContext)
  if (context === undefined) {
    throw new Error('useRole must be used within a RoleProvider')
  }
  return context
}
