'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'

export default function CTABanner() {
  return (
    <section id="cta" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary-yellow via-primary-yellow-light to-primary-yellow" />
      
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white rounded-full"
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
        className="absolute top-10 left-10 text-black dark:text-white opacity-30"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
      >
        <Sparkles size={64} />
      </motion.div>
      <motion.div
        className="absolute bottom-10 right-10 text-black dark:text-white opacity-30"
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
            <span className="px-6 py-2 bg-black/20 backdrop-blur-sm rounded-full text-black dark:text-white font-semibold text-sm border-2 border-black dark:border-white">
              ✨ Join 50,000+ Students & Teachers
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h2
            className="text-4xl md:text-6xl font-bold text-black dark:text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Ready to Start Learning?
          </motion.h2>

          {/* Subtext */}
          <motion.p
            className="text-xl md:text-2xl text-black/90 dark:text-white/90 mb-12 max-w-3xl mx-auto"
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
              className="group relative px-12 py-5 bg-black text-primary-yellow border-2 border-black dark:bg-white dark:text-black dark:border-white rounded-full font-bold text-lg shadow-2xl overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Pulse Ring Effect */}
              <motion.div
                className="absolute inset-0 rounded-full bg-black dark:bg-white"
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

              {/* Neon Glow on Hover */}
              <motion.div
                className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  boxShadow: '0 0 30px rgba(255, 255, 255, 0.8), 0 0 60px rgba(255, 255, 255, 0.5)',
                }}
              />
            </motion.button>

            <motion.button
              className="px-12 py-5 bg-transparent border-2 border-black dark:border-white text-black dark:text-white rounded-full font-bold text-lg hover:bg-black hover:text-primary-yellow dark:hover:bg-white dark:hover:text-black transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More
            </motion.button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            className="mt-12 flex flex-wrap justify-center items-center gap-8 text-black/80 dark:text-white/80 text-sm"
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
