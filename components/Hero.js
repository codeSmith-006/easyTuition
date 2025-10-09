'use client'

import { useState, useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { Search, GraduationCap, BookOpen, Calculator, Award, Users, CheckCircle, DollarSign, Clock, MapPin, ChevronDown } from 'lucide-react'
import { Select, Input, Button } from 'antd'

const { Option } = Select

export default function Hero() {
  const [typedText, setTypedText] = useState('')
  const fullText = 'Find the Right Teacher, Every Time'
  const [showCursor, setShowCursor] = useState(true)
  const [searchFocused, setSearchFocused] = useState(false)

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
    }, 80)

    return () => clearInterval(typingInterval)
  }, [])

  // Floating particles data
  const floatingParticles = [
    { Icon: BookOpen, delay: 0, x: '10%', y: '20%', size: 40 },
    { Icon: Calculator, delay: 0.5, x: '85%', y: '15%', size: 35 },
    { Icon: GraduationCap, delay: 1, x: '15%', y: '70%', size: 45 },
    { Icon: Award, delay: 1.5, x: '80%', y: '75%', size: 38 },
    { Icon: Users, delay: 2, x: '50%', y: '10%', size: 32 },
  ]

  // Statistics data with animation
  const statistics = [
    { value: '500+', label: 'Verified Tutors', icon: GraduationCap, delay: 0.5 },
    { value: '1,200+', label: 'Happy Students', icon: Users, delay: 0.7 },
    { value: 'Live', label: 'Classes Available', icon: Award, delay: 0.9 },
  ]

  // Trust badges
  const trustBadges = [
    { icon: CheckCircle, text: 'Verified Teachers', color: 'text-primary-yellow dark:text-primary-yellow-light' },
    { icon: DollarSign, text: 'Affordable Tuitions', color: 'text-primary-yellow dark:text-primary-yellow-light' },
    { icon: Clock, text: 'Flexible Scheduling', color: 'text-primary-yellow dark:text-primary-yellow-light' },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  }

  const slideInLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: 'spring', stiffness: 80, damping: 15 },
    },
  }

  const slideInRight = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: 'spring', stiffness: 80, damping: 15 },
    },
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-gradient-to-br from-[#FFFDF5] via-[#FEF9E7] to-[#FEF3C7] dark:from-[#0A0A0A] dark:via-[#1A1A1A] dark:to-[#0A0A0A]">
      {/* Animated Background Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {floatingParticles.map(({ Icon, delay, x, y, size }, index) => (
          <motion.div
            key={index}
            className="absolute text-primary-yellow dark:text-primary-yellow-light opacity-10"
            style={{ left: x, top: y }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0.05, 0.15, 0.05],
              scale: [1, 1.2, 1],
              y: [0, -30, 0],
              rotate: [0, 180, 360],
            }}
            transition={{
              delay,
              duration: 6,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: 'easeInOut',
            }}
          >
            <Icon size={size} />
          </motion.div>
        ))}
        
        {/* Gradient Orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-yellow dark:bg-primary-yellow-light rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-20 dark:opacity-10"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary-yellow-light dark:bg-primary-yellow rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-20 dark:opacity-10"
          animate={{
            scale: [1, 1.4, 1],
            x: [0, -100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
        />
      </div>

      {/* Main Content - Split Screen Layout */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          
          {/* Left Side - Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center lg:text-left"
          >
            {/* Headline with Typing Effect */}
            <motion.h1
              variants={slideInLeft}
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-gray-900 dark:text-white"
            >
              <span className="bg-gradient-to-r from-primary-yellow to-primary-yellow-light dark:from-primary-yellow-light dark:to-primary-yellow bg-clip-text text-transparent"
                {typedText}
                {showCursor && <span className="typing-cursor">|</span>}
              </span>
            </motion.h1>

            {/* Subheading */}
            <motion.p
              variants={slideInLeft}
              className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed"
            >
              Discover qualified tutors, book personalized sessions, and achieve your learning goals with expert guidance tailored just for you.
            </motion.p>

            {/* Search Bar Widget */}
            <motion.div
              variants={slideInLeft}
              className={`bg-white dark:bg-[#0A0A0A] rounded-2xl shadow-2xl p-6 mb-8 border-2 ${
                searchFocused ? 'border-black dark:border-white' : 'border-black/20 dark:border-white/20'
              } transition-all duration-300`}
              whileHover={{ scale: 1.02, y: -2 }}
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Select
                  placeholder="Subject"
                  size="large"
                  suffixIcon={<ChevronDown className="w-4 h-4" />}
                  className="w-full"
                  onFocus={() => setSearchFocused(true)}
                  onBlur={() => setSearchFocused(false)}
                >
                  <Option value="math">Mathematics</Option>
                  <Option value="science">Science</Option>
                  <Option value="english">English</Option>
                  <Option value="physics">Physics</Option>
                  <Option value="chemistry">Chemistry</Option>
                </Select>
                
                <Select
                  placeholder="Class Level"
                  size="large"
                  suffixIcon={<ChevronDown className="w-4 h-4" />}
                  className="w-full"
                  onFocus={() => setSearchFocused(true)}
                  onBlur={() => setSearchFocused(false)}
                >
                  <Option value="1-5">Class 1-5</Option>
                  <Option value="6-8">Class 6-8</Option>
                  <Option value="9-10">Class 9-10</Option>
                  <Option value="11-12">Class 11-12</Option>
                  <Option value="college">College</Option>
                </Select>
                
                <Input
                  placeholder="Location"
                  size="large"
                  prefix={<MapPin className="w-4 h-4 text-gray-400" />}
                  onFocus={() => setSearchFocused(true)}
                  onBlur={() => setSearchFocused(false)}
                />
              </div>
              
              <motion.button
                className="w-full mt-4 bg-primary-yellow text-black border-2 border-black dark:bg-primary-yellow-light dark:border-white font-semibold py-3 px-6 rounded-xl flex items-center justify-center space-x-2 hover:shadow-lg transition-all dark:shadow-[0_0_20px_rgba(253,224,71,0.5)]"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Search className="w-5 h-5" />
                <span>Search Tutors</span>
              </motion.button>
            </motion.div>

            {/* Trust Badges */}
            <motion.div
              variants={slideInLeft}
              className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8"
            >
              {trustBadges.map((badge, index) => {
                const Icon = badge.icon
                return (
                  <motion.div
                    key={index}
                    className="flex items-center space-x-2 bg-white/50 dark:bg-black/50 backdrop-blur-sm px-4 py-2 rounded-full border-2 border-black dark:border-white"
                    whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(250, 204, 21, 0.3)' }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.5 + index * 0.1 }}
                  >
                    <Icon className={`w-5 h-5 ${badge.color}`} />
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      {badge.text}
                    </span>
                  </motion.div>
                )
              })}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              variants={slideInLeft}
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-8 py-4 bg-primary-yellow text-black border-2 border-black dark:bg-primary-yellow-light dark:border-white rounded-xl font-semibold text-lg shadow-lg overflow-hidden"
              >
                <span className="relative z-10 flex items-center justify-center space-x-2">
                  <Search className="w-5 h-5" />
                  <span>Find Tuition</span>
                </span>
                <motion.div
                  className="absolute inset-0 bg-primary-yellow-light dark:bg-primary-yellow"
                  initial={{ scale: 0, opacity: 0 }}
                  whileHover={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05, x: 5 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-black dark:border-white text-black dark:text-white rounded-xl font-semibold text-lg hover:bg-primary-yellow/10 dark:hover:bg-primary-yellow-light/10 transition-all flex items-center justify-center space-x-2"
              >
                <GraduationCap className="w-5 h-5" />
                <span>Become a Teacher</span>
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Side - Illustration & Statistics */}
          <motion.div
            variants={slideInRight}
            initial="hidden"
            animate="visible"
            className="relative flex items-center justify-center"
          >
            {/* Main Illustration */}
            <motion.div
              animate={{
                y: [0, -20, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                repeatType: 'reverse',
                ease: 'easeInOut',
              }}
              className="relative w-full max-w-lg"
            >
              {/* Student with Laptop Illustration */}
              <div className="bg-gradient-to-br from-white/80 to-white/60 dark:from-black/80 dark:to-black/60 backdrop-blur-xl rounded-3xl shadow-2xl p-12 border-2 border-black dark:border-white">
                <div className="text-center space-y-6">
                  <motion.div
                    animate={{ rotate: [0, 5, -5, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="text-9xl mb-4"
                  >
                    👨‍💻
                  </motion.div>
                  <div className="flex items-center justify-center space-x-4">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 10 }}
                      className="text-6xl"
                    >
                      📚
                    </motion.div>
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="text-4xl"
                    >
                      ✨
                    </motion.div>
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: -10 }}
                      className="text-6xl"
                    >
                      👨‍🏫
                    </motion.div>
                  </div>
                  <p className="text-lg font-semibold text-gray-700 dark:text-gray-300">
                    Connect & Learn
                  </p>
                </div>
              </div>

              {/* Floating Statistics Bubbles */}
              {statistics.map((stat, index) => {
                const Icon = stat.icon
                return (
                  <motion.div
                    key={index}
                    className="absolute bg-white dark:bg-black rounded-2xl shadow-xl p-4 border-2 border-black dark:border-white"
                    initial={{ opacity: 0, scale: 0, rotate: -180 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{
                      type: 'spring',
                      stiffness: 200,
                      damping: 15,
                      delay: stat.delay,
                    }}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    style={{
                      top: index === 0 ? '10%' : index === 1 ? '45%' : '80%',
                      [index % 2 === 0 ? 'left' : 'right']: '-15%',
                    }}
                  >
                    <div className="flex items-center space-x-3">
                      <div className="bg-primary-yellow/20 dark:bg-primary-yellow-light/20 p-2 rounded-lg border border-black dark:border-white">
                        <Icon className="w-6 h-6 text-primary-yellow dark:text-primary-yellow-light" />
                      </div>
                      <div>
                        <p className="text-2xl font-bold text-gray-800 dark:text-white">
                          {stat.value}
                        </p>
                        <p className="text-xs text-gray-600 dark:text-gray-400">
                          {stat.label}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
