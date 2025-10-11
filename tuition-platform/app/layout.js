import { Inter } from 'next/font/google'
import './globals.css'
import Providers from '@/components/common/Providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'TuitionConnect - Connect Students & Teachers',
  description: 'Premium online tutoring platform connecting students with expert teachers',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
