'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'

export default function CTABanner() {
  return (
    <section id="cta" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-mono opacity-90 dark:bg-gradient-dark" />
      
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-primary-white dark:bg-primary-black rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 1, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Floating Elements */}
      <motion.div
        className="absolute top-10 left-10 text-primary-black dark:text-primary-white opacity-20"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
      >
        <Sparkles size={64} />
      </motion.div>
      <motion.div
        className="absolute bottom-10 right-10 text-primary-black dark:text-primary-white opacity-20"
        animate={{ rotate: -360 }}
        transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
      >
        <Sparkles size={80} />
      </motion.div>

      {/* Content */}
      <div className="max-w-5xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Badge */}
          <motion.div
            className="inline-block mb-6"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, type: 'spring' }}
          >
            <span className="px-6 py-2 bg-primary-white/80 dark:bg-primary-black/80 backdrop-blur-sm rounded-full text-primary-black dark:text-primary-white font-semibold text-sm border-2 border-primary-black dark:border-primary-white">
              ✨ Join 50,000+ Students & Teachers
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h2
            className="text-4xl md:text-6xl font-bold text-primary-black dark:text-primary-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Ready to Start Learning?
          </motion.h2>

          {/* Subtext */}
          <motion.p
            className="text-xl md:text-2xl text-primary-text dark:text-primary-text-dark mb-12 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Join thousands of students and teachers today. Start your personalized learning journey in minutes.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <motion.button
              className="group relative px-12 py-5 bg-primary-white text-primary-black border-2 border-primary-black dark:bg-primary-black dark:text-primary-white dark:border-primary-white hover:opacity-90 rounded-full font-bold text-lg shadow-2xl overflow-hidden transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Pulse Ring Effect */}
              <motion.div
                className="absolute inset-0 rounded-full bg-gray-200 dark:bg-gray-800"
                animate={{
                  scale: [1, 1.2, 1.4],
                  opacity: [0.5, 0.3, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: 'easeOut',
                }}
              />
              
              <span className="relative flex items-center space-x-3">
                <span>Get Started Now</span>
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1, repeat: Infinity }}
                >
                  <ArrowRight className="w-6 h-6" />
                </motion.div>
              </span>

              {/* Matte Glow on Hover */}
              <motion.div
                className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
                }}
              />
            </motion.button>

            <motion.button
              className="px-12 py-5 bg-transparent border-2 border-primary-black dark:border-primary-white text-primary-black dark:text-primary-white rounded-full font-bold text-lg hover:bg-primary-black hover:text-primary-white dark:hover:bg-primary-white dark:hover:text-primary-black transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More
            </motion.button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            className="mt-12 flex flex-wrap justify-center items-center gap-8 text-primary-text-secondary dark:text-primary-text-secondary-dark text-sm"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <div className="flex items-center space-x-2">
              <span className="text-2xl">✓</span>
              <span>No Hidden Fees</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-2xl">✓</span>
              <span>Cancel Anytime</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-2xl">✓</span>
              <span>100% Verified Teachers</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-2xl">✓</span>
              <span>24/7 Support</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
