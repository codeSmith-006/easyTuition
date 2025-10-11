import { format, formatDistance, formatRelative } from 'date-fns'

export function formatDate(date, formatString = 'PPP') {
  if (!date) return ''
  return format(new Date(date), formatString)
}

export function formatDateTime(date) {
  if (!date) return ''
  return format(new Date(date), 'PPP p')
}

export function formatRelativeDate(date) {
  if (!date) return ''
  return formatRelative(new Date(date), new Date())
}

export function formatDistanceToNow(date) {
  if (!date) return ''
  return formatDistance(new Date(date), new Date(), { addSuffix: true })
}

export function formatTime(date) {
  if (!date) return ''
  return format(new Date(date), 'p')
}

export function formatCurrency(amount, currency = 'USD') {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
  }).format(amount)
}

export default {
  formatDate,
  formatDateTime,
  formatRelativeDate,
  formatDistanceToNow,
  formatTime,
  formatCurrency,
}
