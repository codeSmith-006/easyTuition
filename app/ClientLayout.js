'use client'

import { ConfigProvider, theme } from 'antd'
import { useTheme } from '@/contexts/ThemeContext'
import { useEffect } from 'react'

export default function ClientLayout({ children }) {
  const { isDarkMode } = useTheme()

  useEffect(() => {
    // Apply theme class to html element
    if (isDarkMode) {
      document.documentElement.classList.add('dark')
      document.body.classList.remove('bg-gradient-light')
      document.body.classList.add('dark', 'bg-gradient-dark')
    } else {
      document.documentElement.classList.remove('dark')
      document.body.classList.remove('dark', 'bg-gradient-dark')
      document.body.classList.add('bg-gradient-light')
    }
  }, [isDarkMode])

  return (
    <ConfigProvider
      theme={{
        algorithm: isDarkMode ? theme.darkAlgorithm : theme.defaultAlgorithm,
        token: {
          colorPrimary: '#2563EB',
          borderRadius: 8,
        },
      }}
    >
      {children}
    </ConfigProvider>
  )
}
