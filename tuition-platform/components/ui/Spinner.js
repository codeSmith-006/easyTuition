import clsx from 'clsx'

export default function Spinner({ size = 'md', className = '' }) {
  const sizes = {
    sm: 'w-4 h-4 border-2',
    md: 'w-8 h-8 border-3',
    lg: 'w-12 h-12 border-4',
  }

  const classes = clsx(
    'spinner border-gray-300 border-t-primary-teal rounded-full animate-spin',
    sizes[size],
    className
  )

  return <div className={classes} />
}
