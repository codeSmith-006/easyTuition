import { useContext } from 'react'
import { RoleContext } from '@/context/RoleContext'

export function useUserRole() {
  const context = useContext(RoleContext)
  if (context === undefined) {
    throw new Error('useUserRole must be used within a RoleProvider')
  }
  return context
}

export default useUserRole
