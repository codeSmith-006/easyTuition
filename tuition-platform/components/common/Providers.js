'use client'

import { ThemeProvider } from '@/context/ThemeContext'
import { AuthProvider } from '@/context/AuthContext'
import { RoleProvider } from '@/context/RoleContext'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ConfigProvider, theme } from 'antd'
import { useTheme } from '@/context/ThemeContext'
import { Toaster } from 'react-hot-toast'

// Create a QueryClient instance
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1,
      staleTime: 60000, // 1 minute
    },
  },
})

function AntdConfigProvider({ children }) {
  const { isDarkMode } = useTheme()

  return (
    <ConfigProvider
      theme={{
        algorithm: isDarkMode ? theme.darkAlgorithm : theme.defaultAlgorithm,
        token: {
          colorPrimary: '#FACC15',
          colorSuccess: '#0D9488',
          colorWarning: '#EAB308',
          colorError: '#EF4444',
          borderRadius: 8,
        },
      }}
    >
      {children}
    </ConfigProvider>
  )
}

export default function Providers({ children }) {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <AuthProvider>
          <RoleProvider>
            <AntdConfigProvider>
              <Toaster
                position="top-right"
                toastOptions={{
                  duration: 3000,
                  style: {
                    background: '#363636',
                    color: '#fff',
                  },
                  success: {
                    iconTheme: {
                      primary: '#0D9488',
                      secondary: '#fff',
                    },
                  },
                }}
              />
              {children}
            </AntdConfigProvider>
          </RoleProvider>
        </AuthProvider>
      </ThemeProvider>
    </QueryClientProvider>
  )
}
