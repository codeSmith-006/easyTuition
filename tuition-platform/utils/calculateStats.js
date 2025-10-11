// Calculate average rating from reviews
export function calculateAverageRating(reviews) {
  if (!reviews || reviews.length === 0) return 0
  const sum = reviews.reduce((acc, review) => acc + review.rating, 0)
  return (sum / reviews.length).toFixed(1)
}

// Calculate completion percentage
export function calculateCompletionPercentage(completed, total) {
  if (!total || total === 0) return 0
  return Math.round((completed / total) * 100)
}

// Calculate growth rate
export function calculateGrowthRate(current, previous) {
  if (!previous || previous === 0) return 0
  return (((current - previous) / previous) * 100).toFixed(1)
}

// Group data by period (day, week, month)
export function groupByPeriod(data, period = 'day') {
  const grouped = {}

  data.forEach((item) => {
    const date = new Date(item.createdAt)
    let key

    switch (period) {
      case 'day':
        key = date.toISOString().split('T')[0]
        break
      case 'week':
        const weekStart = new Date(date.setDate(date.getDate() - date.getDay()))
        key = weekStart.toISOString().split('T')[0]
        break
      case 'month':
        key = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`
        break
      default:
        key = date.toISOString().split('T')[0]
    }

    if (!grouped[key]) {
      grouped[key] = []
    }
    grouped[key].push(item)
  })

  return grouped
}

// Calculate total revenue
export function calculateTotalRevenue(payments) {
  if (!payments || payments.length === 0) return 0
  return payments.reduce((acc, payment) => acc + payment.amount, 0)
}

// Calculate average session duration
export function calculateAverageSessionDuration(sessions) {
  if (!sessions || sessions.length === 0) return 0
  const totalDuration = sessions.reduce((acc, session) => acc + session.duration, 0)
  return Math.round(totalDuration / sessions.length)
}

// Get top performing items
export function getTopPerformers(items, metric, limit = 5) {
  return items
    .sort((a, b) => b[metric] - a[metric])
    .slice(0, limit)
}

// Calculate retention rate
export function calculateRetentionRate(activeUsers, totalUsers) {
  if (!totalUsers || totalUsers === 0) return 0
  return ((activeUsers / totalUsers) * 100).toFixed(1)
}

// Format large numbers
export function formatLargeNumber(num) {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + 'M'
  } else if (num >= 1000) {
    return (num / 1000).toFixed(1) + 'K'
  }
  return num.toString()
}

export default {
  calculateAverageRating,
  calculateCompletionPercentage,
  calculateGrowthRate,
  groupByPeriod,
  calculateTotalRevenue,
  calculateAverageSessionDuration,
  getTopPerformers,
  calculateRetentionRate,
  formatLargeNumber,
}
