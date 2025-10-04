'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Search, GraduationCap, BookOpen, Pencil, Sparkles } from 'lucide-react'

export default function Hero() {
  const [typedText, setTypedText] = useState('')
  const fullText = 'Find the Right Teacher, Every Time'
  const [showCursor, setShowCursor] = useState(true)

  useEffect(() => {
    let currentIndex = 0
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setTypedText(fullText.slice(0, currentIndex))
        currentIndex++
      } else {
        clearInterval(typingInterval)
        setShowCursor(false)
      }
    }, 100)

    return () => clearInterval(typingInterval)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: 'spring', stiffness: 100 },
    },
  }

  const buttonVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 100 },
    },
  }

  const floatingIcons = [
    { Icon: BookOpen, delay: 0, position: 'top-20 left-10' },
    { Icon: Pencil, delay: 0.5, position: 'top-40 right-20' },
    { Icon: Sparkles, delay: 1, position: 'bottom-40 left-20' },
    { Icon: GraduationCap, delay: 1.5, position: 'bottom-20 right-40' },
  ]

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {floatingIcons.map(({ Icon, delay, position }, index) => (
          <motion.div
            key={index}
            className={`absolute ${position} text-primary-blue dark:text-primary-green opacity-10`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 0.1, y: 0 }}
            transition={{
              delay,
              repeat: Infinity,
              repeatType: 'reverse',
              duration: 3,
            }}
          >
            <Icon size={64} className="float-gentle" />
          </motion.div>
        ))}
        
        {/* Gradient Orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-green-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
        />
      </div>

      {/* Main Content */}
      <motion.div
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Headline with Typing Effect */}
        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl font-bold mb-6"
        >
          <span className="gradient-text">
            {typedText}
            {showCursor && <span className="typing-cursor">|</span>}
          </span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          variants={itemVariants}
          className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto"
        >
          Connecting students with trusted teachers for personalized learning
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          variants={containerVariants}
        >
          <motion.button
            variants={buttonVariants}
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
            className="group relative px-8 py-4 bg-primary-green text-white rounded-lg font-semibold text-lg shadow-lg hover:shadow-2xl transition-all duration-300 flex items-center space-x-3 overflow-hidden"
          >
            <motion.div
              animate={{ y: [0, -3, 0] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <Search className="w-6 h-6" />
            </motion.div>
            <span>Find a Teacher</span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-green-400 to-green-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{ zIndex: -1 }}
            />
          </motion.button>

          <motion.button
            variants={buttonVariants}
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
            className="group relative px-8 py-4 bg-primary-blue text-white rounded-lg font-semibold text-lg shadow-lg hover:shadow-2xl transition-all duration-300 flex items-center space-x-3 overflow-hidden"
          >
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              <GraduationCap className="w-6 h-6" />
            </motion.div>
            <span>Join as Teacher</span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{ zIndex: -1 }}
            />
          </motion.button>
        </motion.div>

        {/* Floating Illustration */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <motion.div
            animate={{
              y: [0, -20, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
            className="relative w-full max-w-2xl mx-auto"
          >
            <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-8 backdrop-blur-sm bg-opacity-80">
              <div className="flex items-center justify-around">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="text-center"
                >
                  <div className="w-20 h-20 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mb-2">
                    <BookOpen className="w-10 h-10 text-primary-blue" />
                  </div>
                  <p className="text-sm font-medium text-gray-700 dark:text-gray-300">Student</p>
                </motion.div>
                
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="text-4xl"
                >
                  🤝
                </motion.div>
                
                <motion.div
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  className="text-center"
                >
                  <div className="w-20 h-20 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mb-2">
                    <GraduationCap className="w-10 h-10 text-primary-green" />
                  </div>
                  <p className="text-sm font-medium text-gray-700 dark:text-gray-300">Teacher</p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}
