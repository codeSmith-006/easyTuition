import { ThemeProvider } from '@/contexts/ThemeContext'
import ClientLayout from './ClientLayout'
import './globals.css'

export const metadata = {
  title: 'TuitionConnect - Find the Right Teacher, Every Time',
  description: 'Connecting students with trusted teachers for personalized learning',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <ThemeProvider>
          <ClientLayout>{children}</ClientLayout>
        </ThemeProvider>
      </body>
    </html>
  )
}
