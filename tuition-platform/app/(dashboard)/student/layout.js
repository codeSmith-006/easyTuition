'use client'

import { useState } from 'react'
import ProtectedRoute from '@/components/common/ProtectedRoute'
import { Layout, Menu } from 'antd'
import { Home, BookOpen, BarChart3, CreditCard, Settings, Menu as MenuIcon, X } from 'lucide-react'
import { usePathname, useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { USER_ROLES } from '@/utils/constants'

const { Header, Sider, Content } = Layout

export default function StudentLayout({ children }) {
  const [collapsed, setCollapsed] = useState(false)
  const pathname = usePathname()
  const router = useRouter()

  const menuItems = [
    {
      key: '/student',
      icon: <Home className="w-5 h-5" />,
      label: 'Dashboard',
    },
    {
      key: '/student/my-courses',
      icon: <BookOpen className="w-5 h-5" />,
      label: 'My Courses',
    },
    {
      key: '/student/analytics',
      icon: <BarChart3 className="w-5 h-5" />,
      label: 'Analytics',
    },
    {
      key: '/student/payments',
      icon: <CreditCard className="w-5 h-5" />,
      label: 'Payments',
    },
    {
      key: '/student/settings',
      icon: <Settings className="w-5 h-5" />,
      label: 'Settings',
    },
  ]

  return (
    <ProtectedRoute allowedRoles={[USER_ROLES.STUDENT]}>
      <Layout className="min-h-screen">
        <Sider
          collapsible
          collapsed={collapsed}
          onCollapse={setCollapsed}
          className="glass-effect border-r border-primary-teal/30"
          breakpoint="lg"
        >
          <div className="h-16 flex items-center justify-center border-b border-primary-teal/30">
            <h1 className="text-xl font-bold gradient-text">
              {collapsed ? 'TC' : 'TuitionConnect'}
            </h1>
          </div>
          <Menu
            mode="inline"
            selectedKeys={[pathname]}
            items={menuItems}
            onClick={({ key }) => router.push(key)}
            className="bg-transparent"
          />
        </Sider>

        <Layout>
          <Header className="bg-white dark:bg-primary-black border-b border-primary-teal/30 px-6 flex items-center justify-between">
            <button
              onClick={() => setCollapsed(!collapsed)}
              className="lg:hidden p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg"
            >
              {collapsed ? <MenuIcon className="w-6 h-6" /> : <X className="w-6 h-6" />}
            </button>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Student Dashboard
            </h2>
          </Header>

          <Content className="p-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              {children}
            </motion.div>
          </Content>
        </Layout>
      </Layout>
    </ProtectedRoute>
  )
}
