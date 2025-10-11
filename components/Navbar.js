"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, AnimatePresence } from "framer-motion";
import { Switch, Drawer, Button } from "antd";
import { Sun, Moon, GraduationCap, Menu, X, Sparkles } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import { FaArrowRight } from "react-icons/fa";

export default function Navbar() {
  const { isDarkMode, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showScrollFlash, setShowScrollFlash] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const { scrollY } = useScroll();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 20);

      // Scroll flash effect - trigger when scrolling down
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setShowScrollFlash(true);
        setTimeout(() => setShowScrollFlash(false), 300);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "Find Teacher", href: "#features" },
    { name: "Join as Teacher", href: "#cta" },
    { name: "About", href: "#how-it-works" },
    { name: "Contact", href: "#footer" },
  ];

  const handleNavClick = (href) => {
    setMobileMenuOpen(false);
    // Smooth scroll to section
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "glass-effect shadow-lg" : "bg-transparent"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
      >
        {/* Scroll Flash Border Effect */}
        <AnimatePresence>
          {showScrollFlash && (
            <motion.div
              className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-white to-transparent"
              initial={{ opacity: 0, scaleX: 0.5 }}
              animate={{ opacity: 1, scaleX: 1 }}
              exit={{ opacity: 0, scaleX: 0.5 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              style={{
                boxShadow: "0 0 20px rgba(255, 255, 255, 0.8)",
              }}
            />
          )}
        </AnimatePresence>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20">
          <div className="flex items-center justify-between h-full">
            {/* Logo with Click Animation */}
            <motion.div
              className="flex items-center space-x-2 cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{
                scale: 0.95,
                rotate: [0, -10, 10, -10, 0],
              }}
              transition={{
                rotate: { duration: 0.5, type: "spring", stiffness: 300 },
              }}
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
              >
                <GraduationCap className="w-8 h-8 text-primary-black dark:text-primary-white" />
              </motion.div>
              <span className="text-2xl font-bold gradient-text">
                TuitionConnect
              </span>
            </motion.div>

            {/* Desktop Navigation Items */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => {
                const showArrow =
                  item.name === "Find Teacher" ||
                  item.name === "Join as Teacher";

                return (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    className="relative group flex items-center space-x-1 text-primary-text dark:text-primary-text-dark 
             hover:text-primary-text-secondary dark:hover:text-primary-text-secondary-dark font-medium cursor-pointer"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    whileHover={{ x: 2 }}
                  >
                    <span>{item.name}</span>

                    {showArrow && (
                      <motion.span
                        className="inline-flex items-center opacity-0 -translate-x-2 
                 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300"
                        animate={{ rotate: 0 }}
                        whileInView={{ rotate: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        {/* Rotate 45° only when parent is hovered */}
                        <FaArrowRight className="text-sm text-primary-black dark:text-primary-white group-hover:-rotate-45 transition-transform duration-300" />
                      </motion.span>
                    )}

                    {/* underline animation */}
                    <motion.span
                      className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-primary-black to-primary-text-secondary dark:from-primary-white dark:to-primary-text-secondary-dark"
                      initial={{ width: 0 }}
                      whileHover={{ width: "100%" }}
                      transition={{ duration: 0.3 }}
                    />

                    {/* subtle hover background */}
                    <motion.span
                      className="absolute inset-0 bg-primary-black/5 dark:bg-primary-white/5 rounded-lg -z-10"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileHover={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.2 }}
                    />
                  </motion.a>
                );
              })}
            </div>

            {/* Right Side - Theme Toggle & CTA & Mobile Menu */}
            <div className="flex items-center space-x-4">
              {/* Theme Toggle with Icon Transition */}
              <motion.div
                className="hidden sm:flex items-center space-x-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <motion.div
                  animate={{
                    rotate: isDarkMode ? 180 : 0,
                    scale: isDarkMode ? 0.8 : 1,
                  }}
                  transition={{ duration: 0.3, type: "spring" }}
                >
                  <Sun className="w-4 h-4 text-gray-700 dark:text-gray-300" />
                </motion.div>
                <Switch
                  checked={isDarkMode}
                  onChange={toggleTheme}
                  className="bg-gray-300"
                />
                <motion.div
                  animate={{
                    rotate: isDarkMode ? 0 : -180,
                    scale: isDarkMode ? 1 : 0.8,
                  }}
                  transition={{ duration: 0.3, type: "spring" }}
                >
                  <Moon className="w-4 h-4 text-gray-700 dark:text-gray-300" />
                </motion.div>
              </motion.div>

              {/* CTA Button (Desktop) */}
              <motion.button
                className="hidden md:flex items-center space-x-2 px-6 py-2 bg-primary-white text-primary-black border-2 border-primary-black rounded-full font-semibold relative overflow-hidden group dark:bg-primary-black dark:border-primary-white dark:text-primary-white hover:opacity-90"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">Get Started</span>
                <Sparkles className="w-4 h-4 relative z-10" />

                {/* Glow Effect on Hover */}
                <motion.div
                  className="absolute inset-0 bg-gray-100 opacity-0 group-hover:opacity-20 dark:bg-gray-800"
                  transition={{ duration: 0.3 }}
                />
                <motion.div
                  className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 dark:bg-white dark:opacity-0 dark:group-hover:opacity-10"
                  initial={{ scale: 0, borderRadius: "50%" }}
                  whileHover={{ scale: 1, borderRadius: "0%" }}
                  transition={{ duration: 0.4 }}
                />
              </motion.button>

              {/* Mobile Menu Button */}
              <motion.button
                className="md:hidden p-2 rounded-lg bg-primary-white dark:bg-primary-card-dark backdrop-blur-sm border border-primary-border dark:border-primary-border-dark"
                onClick={() => setMobileMenuOpen(true)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Menu className="w-6 h-6 text-primary-text dark:text-primary-text-dark" />
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Drawer */}
      <Drawer
        placement="left"
        open={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        closable={false}
        width={280}
        styles={{
          body: {
            padding: 0,
            background: isDarkMode
              ? "linear-gradient(to bottom, #0D0D0D, #1E1E1E)"
              : "linear-gradient(to bottom, #F5F5F5, #FFFFFF)",
          },
        }}
      >
        <motion.div
          className="flex flex-col h-full"
          initial={{ x: -280 }}
          animate={{ x: 0 }}
          exit={{ x: -280 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          {/* Drawer Header */}
          <div className="flex items-center justify-between p-6 border-b border-primary-border dark:border-primary-border-dark">
            <div className="flex items-center space-x-2">
              <GraduationCap className="w-6 h-6 text-primary-black dark:text-primary-white" />
              <span className="text-xl font-bold gradient-text">
                TuitionConnect
              </span>
            </div>
            <motion.button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 rounded-lg hover:bg-primary-background dark:hover:bg-primary-background-dark"
              whileHover={{ rotate: 90, scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <X className="w-5 h-5 text-primary-text dark:text-primary-text-dark" />
            </motion.button>
          </div>

          {/* Navigation Links */}
          <div className="flex-1 py-6 px-4 space-y-2">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                onClick={() => handleNavClick(item.href)}
                className="block relative px-4 py-3 rounded-lg text-primary-text dark:text-primary-text-dark font-medium cursor-pointer group overflow-hidden border-2 border-transparent hover:border-primary-black dark:hover:border-primary-white"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ x: 10 }}
              >
                {item.name}

                {/* Hover Glow Effect */}
                <motion.div
                  className="absolute inset-0 bg-primary-black/10 dark:bg-primary-white/10 opacity-0 group-hover:opacity-100 -z-10 rounded-lg"
                  transition={{ duration: 0.3 }}
                />
                <motion.div
                  className="absolute inset-0 border-2 border-transparent group-hover:border-primary-black dark:group-hover:border-primary-white rounded-lg opacity-0 group-hover:opacity-50"
                  initial={{ scale: 0.8 }}
                  whileHover={{ scale: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
            ))}
          </div>

          {/* Bottom Section - Theme Toggle & CTA */}
          <div className="border-t border-primary-border dark:border-primary-border-dark p-6 space-y-4">
            {/* Theme Toggle */}
            <div className="flex items-center justify-between px-4 py-3 rounded-lg bg-primary-white/50 dark:bg-primary-black/50 border-2 border-primary-black dark:border-primary-white">
              <span className="text-sm font-medium text-primary-text dark:text-primary-text-dark">
                Dark Mode
              </span>
              <div className="flex items-center space-x-2">
                <motion.div
                  animate={{
                    rotate: isDarkMode ? 180 : 0,
                    scale: isDarkMode ? 0.8 : 1,
                  }}
                  transition={{ duration: 0.3, type: "spring" }}
                >
                  <Sun className="w-4 h-4 text-gray-700 dark:text-gray-300" />
                </motion.div>
                <Switch
                  checked={isDarkMode}
                  onChange={toggleTheme}
                  size="small"
                />
                <motion.div
                  animate={{
                    rotate: isDarkMode ? 0 : -180,
                    scale: isDarkMode ? 1 : 0.8,
                  }}
                  transition={{ duration: 0.3, type: "spring" }}
                >
                  <Moon className="w-4 h-4 text-gray-700 dark:text-gray-300" />
                </motion.div>
              </div>
            </div>

            {/* CTA Button */}
            <motion.button
              className="w-full flex items-center justify-center space-x-2 px-6 py-3 bg-primary-white text-primary-black border-2 border-primary-black rounded-full font-semibold relative overflow-hidden group dark:bg-primary-black dark:border-primary-white dark:text-primary-white"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => handleNavClick("#cta")}
            >
              <span className="relative z-10">Get Started</span>
              <Sparkles className="w-4 h-4 relative z-10" />

              {/* Glow Effect */}
              <motion.div
                className="absolute inset-0 bg-primary-black opacity-0 group-hover:opacity-10 dark:bg-primary-white dark:opacity-0 dark:group-hover:opacity-10"
                initial={{ scale: 0 }}
                whileHover={{ scale: 1 }}
                transition={{ duration: 0.4 }}
              />
            </motion.button>
          </div>
        </motion.div>
      </Drawer>
    </>
  );
}
