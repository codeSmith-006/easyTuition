import { motion } from 'framer-motion'
import clsx from 'clsx'

export default function Card({
  children,
  className = '',
  hoverable = false,
  bordered = true,
  ...props
}) {
  const classes = clsx(
    'bg-white dark:bg-primary-black rounded-lg p-6',
    bordered && 'border border-gray-300 dark:border-gray-700',
    hoverable && 'card-hover cursor-pointer',
    className
  )

  return (
    <motion.div
      className={classes}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      {...props}
    >
      {children}
    </motion.div>
  )
}
