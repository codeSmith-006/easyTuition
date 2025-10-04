'use client'

import { motion } from 'framer-motion'
import { Facebook, Linkedin, MessageCircle, Twitter, Mail, Phone, MapPin, Heart } from 'lucide-react'

export default function Footer() {
  const footerLinks = {
    company: [
      { name: 'About Us', href: '#about' },
      { name: 'How It Works', href: '#how-it-works' },
      { name: 'Careers', href: '#' },
      { name: 'Press', href: '#' },
    ],
    forStudents: [
      { name: 'Find a Teacher', href: '#features' },
      { name: 'How to Choose', href: '#' },
      { name: 'Student Success', href: '#' },
      { name: 'Pricing', href: '#' },
    ],
    forTeachers: [
      { name: 'Become a Teacher', href: '#cta' },
      { name: 'Teacher Resources', href: '#' },
      { name: 'Teaching Tips', href: '#' },
      { name: 'Verify Account', href: '#' },
    ],
    support: [
      { name: 'Help Center', href: '#' },
      { name: 'FAQ', href: '#' },
      { name: 'Contact Us', href: '#footer' },
      { name: 'Terms of Service', href: '#' },
      { name: 'Privacy Policy', href: '#' },
    ],
  }

  const socialLinks = [
    { icon: Facebook, href: '#', color: 'hover:text-blue-500' },
    { icon: Linkedin, href: '#', color: 'hover:text-blue-600' },
    { icon: MessageCircle, href: '#', color: 'hover:text-green-500' },
    { icon: Twitter, href: '#', color: 'hover:text-blue-400' },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <footer id="footer" className="relative bg-gray-900 text-white overflow-hidden">
      {/* Gradient Background Lines */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-green-500" />
        <motion.div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'linear-gradient(to bottom, transparent 95%, rgba(37, 99, 235, 0.3) 95%)',
            backgroundSize: '100% 50px',
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12"
        >
          {/* Company Info */}
          <motion.div variants={itemVariants} className="lg:col-span-1">
            <h3 className="text-2xl font-bold gradient-text mb-4">
              TuitionConnect
            </h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Connecting students with trusted teachers for personalized learning experiences.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-400">
                <Mail size={16} />
                <span className="text-sm">hello@tuitionconnect.com</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <Phone size={16} />
                <span className="text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <MapPin size={16} />
                <span className="text-sm">Sydney, Australia</span>
              </div>
            </div>
          </motion.div>

          {/* Quick Links - Company */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-bold mb-4 text-primary-blue-light">
              Company
            </h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <motion.a
                    href={link.href}
                    className="text-gray-400 hover:text-primary-green transition-colors duration-300 hover-underline"
                    whileHover={{ x: 5 }}
                  >
                    {link.name}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Quick Links - For Students */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-bold mb-4 text-primary-blue-light">
              For Students
            </h4>
            <ul className="space-y-2">
              {footerLinks.forStudents.map((link, index) => (
                <li key={index}>
                  <motion.a
                    href={link.href}
                    className="text-gray-400 hover:text-primary-green transition-colors duration-300 hover-underline"
                    whileHover={{ x: 5 }}
                  >
                    {link.name}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Quick Links - For Teachers */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-bold mb-4 text-primary-blue-light">
              For Teachers
            </h4>
            <ul className="space-y-2">
              {footerLinks.forTeachers.map((link, index) => (
                <li key={index}>
                  <motion.a
                    href={link.href}
                    className="text-gray-400 hover:text-primary-green transition-colors duration-300 hover-underline"
                    whileHover={{ x: 5 }}
                  >
                    {link.name}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Quick Links - Support */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-bold mb-4 text-primary-blue-light">
              Support
            </h4>
            <ul className="space-y-2">
              {footerLinks.support.map((link, index) => (
                <li key={index}>
                  <motion.a
                    href={link.href}
                    className="text-gray-400 hover:text-primary-green transition-colors duration-300 hover-underline"
                    whileHover={{ x: 5 }}
                  >
                    {link.name}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <motion.div
          className="border-t border-gray-800 my-8"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        />

        {/* Bottom Section */}
        <motion.div
          className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Copyright */}
          <div className="text-gray-400 text-sm flex items-center space-x-2">
            <span>© 2024 TuitionConnect. All rights reserved.</span>
            <span>Made with</span>
            <motion.div
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <Heart size={16} className="text-red-500 fill-current" />
            </motion.div>
          </div>

          {/* Social Links */}
          <div className="flex items-center space-x-6">
            {socialLinks.map((social, index) => {
              const Icon = social.icon
              return (
                <motion.a
                  key={index}
                  href={social.href}
                  className={`text-gray-400 ${social.color} transition-colors duration-300`}
                  whileHover={{ scale: 1.2, rotate: 5, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Icon size={24} />
                </motion.a>
              )
            })}
          </div>
        </motion.div>

        {/* Newsletter Signup (Optional) */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h4 className="text-xl font-bold mb-4 gradient-text">
            Stay Updated
          </h4>
          <p className="text-gray-400 mb-4">
            Subscribe to our newsletter for tips, updates, and special offers
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-3 rounded-full bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-primary-blue transition-colors"
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-gradient-to-r from-blue-500 to-green-500 text-white rounded-full font-semibold hover:shadow-lg transition-shadow"
            >
              Subscribe
            </motion.button>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
