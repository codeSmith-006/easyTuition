'use client'

import { motion } from 'framer-motion'
import { Carousel, Rate } from 'antd'
import { Quote, Star } from 'lucide-react'
import { useRef } from 'react'

export default function Testimonials() {
  const carouselRef = useRef(null)

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'HSC Student',
      avatar: '👧',
      rating: 5,
      text: 'I found my HSC Physics teacher within 2 days! The teacher was incredibly knowledgeable and helped me improve my grades from a C to an A. Highly recommend!',
      subject: 'Physics',
    },
    {
      name: 'Michael Chen',
      role: 'University Student',
      avatar: '👨',
      rating: 5,
      text: 'Amazing platform! Connected with a calculus tutor who made complex topics easy to understand. My exam scores improved by 30%.',
      subject: 'Mathematics',
    },
    {
      name: 'Emily Rodriguez',
      role: 'Parent',
      avatar: '👩',
      rating: 5,
      text: 'As a parent, I appreciate the verification process for teachers. My daughter loves her English tutor and has shown remarkable progress in writing.',
      subject: 'English',
    },
    {
      name: 'David Kumar',
      role: 'Teacher',
      avatar: '🧑‍🏫',
      rating: 5,
      text: 'Joining as a teacher was seamless. I now teach 15 students and love the flexibility to set my own schedule. Great earning opportunity!',
      subject: 'Chemistry',
    },
    {
      name: 'Jessica Lee',
      role: 'High School Student',
      avatar: '👧',
      rating: 5,
      text: 'Found an incredible Spanish tutor who makes learning fun! The online sessions are convenient and I can learn from home.',
      subject: 'Spanish',
    },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-gradient-light dark:bg-gradient-dark">
      {/* Floating Stars Background */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 0.5, 0.2],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          >
            <Star size={16} className="text-primary-black dark:text-primary-white" fill="currentColor" />
          </motion.div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            Success Stories
          </h2>
          <p className="text-xl text-primary-text-secondary dark:text-primary-text-secondary-dark max-w-2xl mx-auto">
            Hear from our community of students, parents, and teachers
          </p>
        </motion.div>

        {/* Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <Carousel
            ref={carouselRef}
            autoplay
            autoplaySpeed={5000}
            pauseOnHover
            dots={{ className: 'custom-dots' }}
            effect="fade"
          >
            {testimonials.map((testimonial, index) => (
              <div key={index}>
                <motion.div
                  className="px-4"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="bg-primary-card dark:bg-primary-card-dark rounded-3xl shadow-2xl p-8 md:p-12 backdrop-blur-sm border border-primary-border dark:border-primary-border-dark relative overflow-hidden">
                    {/* Quote Icon */}
                    <motion.div
                      className="absolute top-4 right-4 text-primary-yellow dark:text-primary-yellow-light opacity-50"
                      animate={{ rotate: [0, 5, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <Quote size={80} />
                    </motion.div>

                    {/* Content */}
                    <div className="relative z-10">
                      {/* Avatar and Info */}
                      <div className="flex items-center mb-6">
                        <motion.div
                          className="text-6xl mr-6"
                          whileHover={{ scale: 1.2, rotate: 10 }}
                          transition={{ type: 'spring', stiffness: 300 }}
                        >
                          {testimonial.avatar}
                        </motion.div>
                        <div>
                          <h3 className="text-2xl font-bold text-primary-text dark:text-primary-text-dark mb-1">
                            {testimonial.name}
                          </h3>
                          <p className="text-primary-text-secondary dark:text-primary-text-secondary-dark mb-2">
                            {testimonial.role}
                          </p>
                          <div className="flex items-center space-x-2">
                            <Rate
                              disabled
                              defaultValue={testimonial.rating}
                              className="text-sm"
                            />
                            <span className="text-sm font-semibold text-primary-black dark:text-primary-white">
                              {testimonial.subject}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Testimonial Text */}
                      <motion.p
                        className="text-lg italic text-gray-700 dark:text-gray-300 leading-relaxed"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                      >
                        "{testimonial.text}"
                      </motion.p>

                      {/* Decorative Stars */}
                      <div className="flex justify-center mt-6 space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.3 + i * 0.1 }}
                          >
                            <Star
                              size={20}
                              className="text-yellow-400"
                              fill="currentColor"
                            />
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            ))}
          </Carousel>
        </motion.div>

        {/* Stats Bar */}
        <motion.div
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {[
            { icon: '⭐', value: '4.9/5', label: 'Average Rating' },
            { icon: '🎓', value: '98%', label: 'Success Rate' },
            { icon: '💬', value: '24/7', label: 'Support Available' },
            { icon: '🏆', value: '50k+', label: 'Success Stories' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="text-center p-6 rounded-xl bg-white/50 dark:bg-primary-charcoal/50 backdrop-blur-sm border border-slate-300 dark:border-slate-600"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <motion.div
                className="text-4xl mb-2"
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
              >
                {stat.icon}
              </motion.div>
              <h4 className="text-2xl font-bold text-primary-yellow dark:text-primary-yellow-light mb-1">
                {stat.value}
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
