'use client'

import { motion } from 'framer-motion'
import { Search, Shield, Laptop, Wallet } from 'lucide-react'

export default function Features() {
  const features = [
    {
      icon: Search,
      title: 'Easy Search',
      description: 'Find qualified teachers in your area with our advanced search filters. Browse by subject, location, and availability.',
      color: 'blue',
      animation: 'flip-left',
    },
    {
      icon: Shield,
      title: 'Verified Teachers',
      description: 'All teachers are verified with background checks and credentials. Learn with confidence and peace of mind.',
      color: 'green',
      animation: 'fade-up',
    },
    {
      icon: Laptop,
      title: 'Flexible Learning',
      description: 'Choose between online or in-person sessions. Learn at your own pace with personalized teaching methods.',
      color: 'blue',
      animation: 'slide-right',
    },
    {
      icon: Wallet,
      title: 'Affordable & Transparent',
      description: 'Clear pricing with no hidden fees. Compare rates and find teachers that fit your budget.',
      color: 'green',
      animation: 'pop-up',
    },
  ]

  const getAnimationVariant = (type) => {
    switch (type) {
      case 'flip-left':
        return {
          hidden: { opacity: 0, rotateY: -90, x: -50 },
          visible: { opacity: 1, rotateY: 0, x: 0 },
        }
      case 'fade-up':
        return {
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0 },
        }
      case 'slide-right':
        return {
          hidden: { opacity: 0, x: 100 },
          visible: { opacity: 1, x: 0 },
        }
      case 'pop-up':
        return {
          hidden: { opacity: 0, scale: 0.5 },
          visible: { opacity: 1, scale: 1 },
        }
      default:
        return {
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        }
    }
  }

  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background alternating colors */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary-yellow/5 to-primary-yellow-light/5 dark:via-primary-charcoal-dark/50 dark:to-primary-charcoal opacity-50" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold gradient-text mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Why Choose TuitionConnect?
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Everything you need to find the perfect teacher and start your learning journey
          </motion.p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            const variants = getAnimationVariant(feature.animation)
            
            return (
              <motion.div
                key={index}
                className="group"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-100px' }}
                variants={variants}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  type: 'spring',
                  stiffness: 100,
                }}
              >
                <motion.div
                  className={`card-tilt relative h-full p-8 rounded-2xl backdrop-blur-sm border transition-all duration-300 bg-white dark:bg-primary-charcoal border-slate-300 dark:border-slate-600 hover:border-primary-yellow dark:hover:border-primary-yellow-light hover:shadow-[0_0_20px_rgba(250,204,21,0.3)] dark:hover:shadow-[0_0_20px_rgba(253,224,71,0.4)]`}
                  whileHover={{
                    scale: 1.05,
                    boxShadow: '0 20px 40px rgba(250, 204, 21, 0.3)',
                  }}
                >
                  {/* Icon */}
                  <motion.div
                    className={`inline-flex p-4 rounded-xl mb-6 bg-primary-yellow text-primary-charcoal border border-primary-charcoal dark:bg-primary-yellow-light/20 dark:border-primary-yellow-light dark:text-primary-yellow-light`}
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Icon size={32} />
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold mb-3 text-gray-800 dark:text-white">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Decorative corner element */}
                  <motion.div
                    className={`absolute top-4 right-4 w-2 h-2 rounded-full bg-primary-yellow dark:bg-primary-yellow-light`}
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.5, 1, 0.5],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      repeatType: 'reverse',
                    }}
                  />
                </motion.div>
              </motion.div>
            )
          })}
        </div>

        {/* Stats Section */}
        <motion.div
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {[
            { number: '10,000+', label: 'Active Teachers' },
            { number: '50,000+', label: 'Happy Students' },
            { number: '4.9/5', label: 'Average Rating' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="text-center p-6 rounded-xl bg-white/50 dark:bg-primary-charcoal/50 backdrop-blur-sm border border-slate-300 dark:border-slate-600"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <motion.h4
                className="text-4xl font-bold gradient-text mb-2"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + index * 0.1, type: 'spring' }}
              >
                {stat.number}
              </motion.h4>
              <p className="text-gray-600 dark:text-gray-300 font-medium">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
