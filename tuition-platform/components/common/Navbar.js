'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useAuth } from '@/context/AuthContext'
import { useTheme } from '@/context/ThemeContext'
import { GraduationCap, Menu, X, Sun, Moon, User, LogOut } from 'lucide-react'
import { Drawer, Dropdown } from 'antd'
import Link from 'next/link'

export default function Navbar() {
  const { user, userRole, signOut } = useAuth()
  const { isDarkMode, toggleTheme } = useTheme()
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = user
    ? [
        { name: 'Dashboard', href: `/${userRole}` },
        { name: 'Courses', href: '/courses' },
        { name: 'Messages', href: '/messages' },
      ]
    : [
        { name: 'Home', href: '/' },
        { name: 'About', href: '/about' },
        { name: 'Contact', href: '/contact' },
        { name: 'FAQ', href: '/faq' },
      ]

  const userMenuItems = [
    {
      key: 'profile',
      label: <Link href={`/${userRole}/profile`}>Profile</Link>,
      icon: <User className="w-4 h-4" />,
    },
    {
      key: 'settings',
      label: <Link href={`/${userRole}/settings`}>Settings</Link>,
      icon: <User className="w-4 h-4" />,
    },
    {
      type: 'divider',
    },
    {
      key: 'logout',
      label: 'Logout',
      icon: <LogOut className="w-4 h-4" />,
      onClick: signOut,
      danger: true,
    },
  ]

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'glass-effect shadow-lg' : 'bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', stiffness: 100, damping: 20 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20">
          <div className="flex items-center justify-between h-full">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2 cursor-pointer">
              <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.6 }}>
                <GraduationCap className="w-8 h-8 text-primary-yellow dark:text-primary-teal" />
              </motion.div>
              <span className="text-2xl font-bold gradient-text">TuitionConnect</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-800 dark:text-gray-200 hover:text-primary-yellow dark:hover:text-primary-teal font-medium transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Right Side Actions */}
            <div className="flex items-center space-x-4">
              {/* Theme Toggle */}
              <motion.button
                onClick={toggleTheme}
                className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                {isDarkMode ? (
                  <Sun className="w-5 h-5 text-primary-yellow" />
                ) : (
                  <Moon className="w-5 h-5 text-primary-teal" />
                )}
              </motion.button>

              {/* User Menu or Auth Buttons */}
              {user ? (
                <Dropdown menu={{ items: userMenuItems }} placement="bottomRight" trigger={['click']}>
                  <motion.div
                    className="flex items-center space-x-2 cursor-pointer px-4 py-2 rounded-full bg-primary-yellow/10 hover:bg-primary-yellow/20 transition-colors"
                    whileHover={{ scale: 1.05 }}
                  >
                    <User className="w-5 h-5 text-primary-yellow dark:text-primary-teal" />
                    <span className="text-sm font-medium text-gray-800 dark:text-gray-200">
                      {user.email?.split('@')[0]}
                    </span>
                  </motion.div>
                </Dropdown>
              ) : (
                <div className="hidden md:flex items-center space-x-4">
                  <Link href="/login">
                    <motion.button
                      className="px-6 py-2 text-gray-800 dark:text-gray-200 font-medium hover:text-primary-yellow transition-colors"
                      whileHover={{ scale: 1.05 }}
                    >
                      Login
                    </motion.button>
                  </Link>
                  <Link href="/register">
                    <motion.button
                      className="px-6 py-2 bg-primary-yellow text-primary-black border border-primary-teal rounded-full font-semibold hover:bg-primary-teal hover:text-primary-yellow transition-all duration-300"
                      whileHover={{ scale: 1.05 }}
                    >
                      Get Started
                    </motion.button>
                  </Link>
                </div>
              )}

              {/* Mobile Menu Button */}
              <motion.button
                className="md:hidden p-2 rounded-lg border border-primary-teal"
                onClick={() => setMobileMenuOpen(true)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Menu className="w-6 h-6 text-gray-800 dark:text-gray-200" />
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <Drawer
        placement="right"
        open={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        closable={false}
        width={280}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between mb-8">
            <span className="text-xl font-bold gradient-text">Menu</span>
            <button onClick={() => setMobileMenuOpen(false)}>
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-3 rounded-lg hover:bg-primary-yellow/10 transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {!user && (
            <div className="mt-auto space-y-4">
              <Link href="/login" onClick={() => setMobileMenuOpen(false)}>
                <button className="w-full px-6 py-3 border border-primary-teal rounded-full font-semibold">
                  Login
                </button>
              </Link>
              <Link href="/register" onClick={() => setMobileMenuOpen(false)}>
                <button className="w-full px-6 py-3 bg-primary-yellow text-primary-black rounded-full font-semibold">
                  Get Started
                </button>
              </Link>
            </div>
          )}
        </div>
      </Drawer>
    </>
  )
}
