import { motion } from 'framer-motion'
import clsx from 'clsx'

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  disabled = false,
  loading = false,
  className = '',
  onClick,
  type = 'button',
  ...props
}) {
  const baseClasses = 'font-semibold rounded-lg transition-all duration-300 flex items-center justify-center gap-2'

  const variants = {
    primary: 'bg-primary-yellow text-primary-black border border-primary-teal hover:bg-primary-teal hover:text-primary-yellow',
    secondary: 'bg-transparent border border-primary-teal text-gray-800 dark:text-gray-200 hover:bg-primary-teal hover:text-white',
    outline: 'bg-transparent border-2 border-primary-yellow text-primary-yellow hover:bg-primary-yellow hover:text-primary-black',
    danger: 'bg-red-500 text-white hover:bg-red-600',
    ghost: 'bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800',
  }

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  }

  const classes = clsx(
    baseClasses,
    variants[variant],
    sizes[size],
    disabled && 'opacity-50 cursor-not-allowed',
    loading && 'opacity-75',
    className
  )

  return (
    <motion.button
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled || loading}
      whileHover={!disabled && !loading ? { scale: 1.05 } : {}}
      whileTap={!disabled && !loading ? { scale: 0.95 } : {}}
      {...props}
    >
      {loading ? (
        <>
          <div className="spinner w-4 h-4 border-2" />
          <span>Loading...</span>
        </>
      ) : (
        children
      )}
    </motion.button>
  )
}
