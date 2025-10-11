export default function AuthLayout({ children }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-light dark:bg-gradient-dark px-4">
      {children}
    </div>
  )
}
