import { USER_ROLES } from './constants'

// Define role-based access control
export const roleAccess = {
  // Public routes - accessible to all
  public: [
    '/',
    '/about',
    '/contact',
    '/faq',
    '/courses',
    '/teachers',
  ],

  // Auth routes - accessible to non-authenticated users
  auth: [
    '/login',
    '/register',
  ],

  // Student routes
  student: [
    '/student',
    '/student/my-courses',
    '/student/analytics',
    '/student/payments',
    '/student/profile',
    '/student/settings',
  ],

  // Teacher routes
  teacher: [
    '/teacher',
    '/teacher/add-course',
    '/teacher/manage-students',
    '/teacher/analytics',
    '/teacher/profile',
    '/teacher/settings',
  ],

  // Admin routes
  admin: [
    '/admin',
    '/admin/manage-users',
    '/admin/manage-courses',
    '/admin/reports',
    '/admin/settings',
  ],
}

// Check if user has access to a specific route
export function hasRouteAccess(route, userRole) {
  if (!userRole) {
    return roleAccess.public.includes(route) || roleAccess.auth.includes(route)
  }

  // Check if route is in public routes
  if (roleAccess.public.includes(route)) {
    return true
  }

  // Check role-specific routes
  const roleRoutes = roleAccess[userRole] || []
  return roleRoutes.some((r) => route.startsWith(r))
}

// Get default route for a user role
export function getDefaultRouteForRole(role) {
  switch (role) {
    case USER_ROLES.ADMIN:
      return '/admin'
    case USER_ROLES.TEACHER:
      return '/teacher'
    case USER_ROLES.STUDENT:
      return '/student'
    default:
      return '/'
  }
}

// Check if user can perform an action
export function canPerformAction(action, userRole) {
  const permissions = {
    [USER_ROLES.ADMIN]: [
      'manage_users',
      'manage_courses',
      'view_reports',
      'manage_payments',
      'manage_settings',
    ],
    [USER_ROLES.TEACHER]: [
      'create_course',
      'edit_own_course',
      'view_own_students',
      'view_own_analytics',
      'manage_own_profile',
    ],
    [USER_ROLES.STUDENT]: [
      'enroll_course',
      'view_own_courses',
      'make_payment',
      'view_own_analytics',
      'manage_own_profile',
    ],
  }

  const userPermissions = permissions[userRole] || []
  return userPermissions.includes(action)
}

export default {
  roleAccess,
  hasRouteAccess,
  getDefaultRouteForRole,
  canPerformAction,
}
