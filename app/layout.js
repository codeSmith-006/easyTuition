'use client'

import { ConfigProvider, theme } from 'antd'
import { useState, useEffect } from 'react'
import './globals.css'

export default function RootLayout({ children }) {
  const [isDarkMode, setIsDarkMode] = useState(false)

  useEffect(() => {
    // Check for saved theme preference or default to light mode
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme === 'dark') {
      setIsDarkMode(true)
      document.documentElement.classList.add('dark')
    }
  }, [])

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode)
    if (!isDarkMode) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }

  return (
    <html lang="en">
      <head>
        <title>TuitionConnect - Find the Right Teacher, Every Time</title>
        <meta name="description" content="Connecting students with trusted teachers for personalized learning" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={isDarkMode ? 'dark bg-gradient-dark' : 'bg-gradient-light'}>
        <ConfigProvider
          theme={{
            algorithm: isDarkMode ? theme.darkAlgorithm : theme.defaultAlgorithm,
            token: {
              colorPrimary: '#2563EB',
              borderRadius: 8,
            },
          }}
        >
          <div data-theme-toggle={toggleTheme}>
            {children}
          </div>
        </ConfigProvider>
      </body>
    </html>
  )
}
