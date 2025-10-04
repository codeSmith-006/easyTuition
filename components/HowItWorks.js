'use client'

import { motion } from 'framer-motion'
import { Search, MessageCircle, BookOpen, ArrowRight } from 'lucide-react'

export default function HowItWorks() {
  const steps = [
    {
      icon: Search,
      title: 'Search for a Teacher',
      description: 'Browse our database of verified teachers. Filter by subject, location, price, and availability to find your perfect match.',
      image: '🔍',
    },
    {
      icon: MessageCircle,
      title: 'Connect & Chat',
      description: 'Message teachers directly through our platform. Discuss your learning goals, schedule, and teaching approach.',
      image: '💬',
    },
    {
      icon: BookOpen,
      title: 'Start Learning',
      description: 'Begin your personalized learning journey. Track progress, book sessions, and achieve your academic goals.',
      image: '📚',
    },
  ]

  return (
    <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Getting started is easy! Follow these simple steps to find your ideal teacher
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line for desktop */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-green-500 transform -translate-x-1/2" />

          {/* Steps */}
          <div className="space-y-16 md:space-y-24">
            {steps.map((step, index) => {
              const Icon = step.icon
              const isEven = index % 2 === 0

              return (
                <motion.div
                  key={index}
                  className={`relative flex flex-col md:flex-row items-center ${
                    isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  {/* Content Card */}
                  <motion.div
                    className={`w-full md:w-5/12 ${isEven ? 'md:text-right' : 'md:text-left'}`}
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <div
                      className={`p-8 rounded-2xl backdrop-blur-sm border-2 ${
                        index === 0
                          ? 'bg-blue-50 dark:bg-blue-900/20 border-blue-300 dark:border-blue-700'
                          : index === 1
                          ? 'bg-purple-50 dark:bg-purple-900/20 border-purple-300 dark:border-purple-700'
                          : 'bg-green-50 dark:bg-green-900/20 border-green-300 dark:border-green-700'
                      }`}
                    >
                      <motion.div
                        className={`inline-flex p-4 rounded-xl mb-4 ${
                          index === 0
                            ? 'bg-blue-500'
                            : index === 1
                            ? 'bg-purple-500'
                            : 'bg-green-500'
                        }`}
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        <Icon size={32} className="text-white" />
                      </motion.div>
                      
                      <h3 className="text-2xl font-bold mb-3 text-gray-800 dark:text-white">
                        {step.title}
                      </h3>
                      
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </motion.div>

                  {/* Center Circle with Number */}
                  <motion.div
                    className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-20 h-20 rounded-full bg-gradient-to-br from-blue-500 to-green-500 items-center justify-center z-10 shadow-lg"
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.6,
                      delay: index * 0.2 + 0.3,
                      type: 'spring',
                    }}
                    whileHover={{ scale: 1.2, rotate: 360 }}
                  >
                    <span className="text-3xl font-bold text-white">{index + 1}</span>
                  </motion.div>

                  {/* Visual/Emoji */}
                  <motion.div
                    className="w-full md:w-5/12 flex justify-center items-center mt-6 md:mt-0"
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.2 + 0.2 }}
                  >
                    <motion.div
                      className="text-8xl md:text-9xl"
                      animate={{
                        y: [0, -10, 0],
                        rotate: [-5, 5, -5],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        repeatType: 'reverse',
                      }}
                    >
                      {step.image}
                    </motion.div>
                  </motion.div>

                  {/* Arrow for mobile */}
                  {index < steps.length - 1 && (
                    <motion.div
                      className="md:hidden mt-8 text-primary-blue dark:text-primary-green"
                      animate={{ y: [0, 10, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <ArrowRight size={40} className="transform rotate-90" />
                    </motion.div>
                  )}
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-4 bg-gradient-to-r from-blue-500 to-green-500 text-white rounded-full font-bold text-lg shadow-lg hover:shadow-2xl transition-all duration-300"
          >
            Get Started Now
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
