"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import {
  Search,
  MessageCircle,
  BookOpen,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  TrendingUp,
} from "lucide-react";
import { useRef } from "react";

export default function HowItWorks() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  // Smooth spring animation for progress
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const steps = [
    {
      icon: Search,
      number: "01",
      title: "Search & Discover",
      description:
        "Browse our extensive database of verified teachers. Use smart filters to find tutors by subject, experience level, location, ratings, and availability that match your learning needs.",
      features: [
        "Advanced search filters",
        "Verified teacher profiles",
        "Real-time availability",
        "Student reviews & ratings",
      ],
      color: "from-primary-yellow to-primary-yellow-light",
      accentColor: "text-primary-yellow dark:text-primary-yellow-light",
      bgColor: "bg-primary-yellow/10 dark:bg-primary-yellow-light/10",
      iconBg:
        "bg-primary-yellow border border-primary-charcoal dark:border-slate-600",
      stats: { value: "500+", label: "Teachers" },
    },
    {
      icon: MessageCircle,
      number: "02",
      title: "Connect & Chat",
      description:
        "Message teachers directly through our secure platform. Discuss your learning goals, curriculum requirements, teaching approach, schedule preferences, and pricing before making a commitment.",
      features: [
        "Instant messaging",
        "Video call support",
        "Schedule booking",
        "Price negotiation",
      ],
      color: "from-primary-yellow to-primary-yellow-light",
      accentColor: "text-primary-yellow dark:text-primary-yellow-light",
      bgColor: "bg-primary-yellow/10 dark:bg-primary-yellow-light/10",
      iconBg:
        "bg-primary-yellow-light border border-primary-charcoal dark:border-slate-600",
      stats: { value: "24/7", label: "Support" },
    },
    {
      icon: BookOpen,
      number: "03",
      title: "Start Learning",
      description:
        "Begin your personalized learning journey with expert guidance. Attend live classes, track your progress, complete assignments, receive feedback, and achieve your academic goals.",
      features: [
        "Live interactive classes",
        "Progress tracking",
        "Assignment management",
        "Performance reports",
      ],
      color: "from-primary-yellow to-primary-yellow-light",
      accentColor: "text-primary-yellow dark:text-primary-yellow-light",
      bgColor: "bg-primary-yellow/10 dark:bg-primary-yellow-light/10",
      iconBg: "bg-primary-yellow border-2 border-black dark:border-white",
      stats: { value: "98%", label: "Success Rate" },
    },
  ];

  return (
    <section
      id="how-it-works"
      ref={containerRef}
      className="relative py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary-gray-light via-white to-primary-gray-light dark:from-primary-charcoal-dark dark:via-primary-charcoal dark:to-primary-charcoal-dark overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-primary-yellow dark:bg-primary-yellow-light rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-20 dark:opacity-10"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-72 h-72 bg-primary-yellow-light dark:bg-primary-yellow rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-20 dark:opacity-10"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-flex items-center space-x-2 px-4 py-2 bg-primary-yellow/10 dark:bg-primary-yellow-light/10 border border-slate-300 dark:border-slate-600 rounded-full mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <Sparkles className="w-4 h-4 text-primary-yellow dark:text-primary-yellow-light" />
            <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
              Simple Process
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary-yellow via-primary-yellow-light to-primary-yellow bg-clip-text text-transparent">
              How It Works
            </span>
          </h2>

          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Get started in three simple steps. From finding the perfect tutor to
            achieving your goals, we've made the process seamless and efficient.
          </p>
        </motion.div>

        {/* Roadmap Timeline */}
        <div className="relative">
          {/* Vertical Progress Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gray-200 dark:bg-gray-700 transform md:-translate-x-1/2">
            <motion.div
              className="absolute top-0 left-0 right-0 bg-gradient-to-b from-primary-yellow via-primary-yellow-light to-primary-yellow origin-top"
              style={{ scaleY: smoothProgress }}
            />
          </div>

          {/* Steps */}
          <div className="space-y-24 md:space-y-32">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={index}
                  className="relative"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  <div
                    className={`flex flex-col md:flex-row items-center gap-8 ${
                      isEven ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                  >
                    {/* Content Card */}
                    <motion.div
                      className={`w-full md:w-5/12 ${
                        isEven
                          ? "md:text-right md:pr-8"
                          : "md:text-left md:pl-8"
                      }`}
                      whileHover={{ scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <div
                        className={`relative p-8 rounded-3xl backdrop-blur-xl border ${step.bgColor} border-slate-300 dark:border-slate-600 hover:border-primary-yellow dark:hover:border-primary-yellow-light shadow-xl hover:shadow-2xl transition-all duration-300`}
                      >
                        {/* Decorative corner */}
                        <motion.div
                          className={`absolute top-4 ${
                            isEven ? "right-4" : "left-4"
                          } w-12 h-12 bg-gradient-to-br ${
                            step.color
                          } rounded-2xl opacity-20`}
                          animate={{
                            rotate: [0, 90, 0],
                            scale: [1, 1.1, 1],
                          }}
                          transition={{
                            duration: 4,
                            repeat: Infinity,
                            repeatType: "reverse",
                          }}
                        />

                        {/* Number Badge */}
                        <motion.div
                          className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} text-white font-bold text-xl mb-6 shadow-lg`}
                          whileHover={{ rotate: 360, scale: 1.1 }}
                          transition={{ duration: 0.6 }}
                        >
                          {step.number}
                        </motion.div>

                        <h3 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
                          {step.title}
                        </h3>

                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                          {step.description}
                        </p>

                        {/* Features List */}
                        <div
                          className={`grid grid-cols-1 gap-3 ${
                            isEven
                              ? "md:justify-items-end"
                              : "md:justify-items-start"
                          }`}
                        >
                          {step.features.map((feature, fIndex) => (
                            <motion.div
                              key={fIndex}
                              className="flex items-center space-x-2"
                              initial={{ opacity: 0, x: isEven ? 20 : -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: 0.3 + fIndex * 0.1 }}
                            >
                              <CheckCircle2
                                className={`w-5 h-5 ${step.accentColor}`}
                              />
                              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                                {feature}
                              </span>
                            </motion.div>
                          ))}
                        </div>

                        {/* Stats Badge */}
                        <motion.div
                          className={`inline-flex items-center space-x-2 mt-6 px-4 py-2 rounded-full bg-white dark:bg-primary-charcoal border border-slate-300 dark:border-slate-600`}
                          whileHover={{ scale: 1.05 }}
                        >
                          <TrendingUp
                            className={`w-4 h-4 ${step.accentColor}`}
                          />
                          <span className="font-bold text-gray-900 dark:text-white">
                            {step.stats.value}
                          </span>
                          <span className="text-xs text-gray-600 dark:text-gray-400">
                            {step.stats.label}
                          </span>
                        </motion.div>
                      </div>
                    </motion.div>

                    {/* Center Circle with Icon */}
                    <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 z-20">
                      <motion.div
                        className={`relative w-24 h-24 rounded-3xl ${step.iconBg} shadow-2xl flex items-center justify-center text-primary-charcoal dark:text-primary-charcoal`}
                        initial={{ scale: 0, rotate: -180 }}
                        whileInView={{ scale: 1, rotate: 0 }}
                        viewport={{ once: true }}
                        transition={{
                          type: "spring",
                          stiffness: 200,
                          damping: 15,
                          delay: index * 0.2 + 0.3,
                        }}
                        whileHover={{ scale: 1.15, rotate: 360 }}
                      >
                        <Icon
                          className="w-12 h-12 text-white"
                          strokeWidth={2.5}
                        />

                        {/* Glowing ring */}
                        <motion.div
                          className={`absolute inset-0 rounded-3xl ${step.iconBg} opacity-50`}
                          animate={{
                            scale: [1, 1.3, 1],
                            opacity: [0.5, 0, 0.5],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            repeatType: "reverse",
                          }}
                        />
                      </motion.div>
                    </div>

                    {/* Visual/Emoji Side */}
                    <motion.div
                      className="w-full md:w-5/12 flex justify-center items-center"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.2 + 0.2 }}
                    >
                      <motion.div
                        className="relative"
                        animate={{
                          y: [0, -15, 0],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          repeatType: "reverse",
                          ease: "easeInOut",
                        }}
                      >
                        <div
                          className={`w-64 h-64 rounded-3xl bg-gradient-to-br ${step.color} p-8 flex items-center justify-center shadow-2xl relative overflow-hidden border border-slate-300 dark:border-slate-600`}
                        >
                          {/* Animated background pattern */}
                          <motion.div
                            className="absolute inset-0 opacity-10"
                            animate={{
                              backgroundPosition: ["0% 0%", "100% 100%"],
                            }}
                            transition={{
                              duration: 10,
                              repeat: Infinity,
                              repeatType: "reverse",
                            }}
                            style={{
                              backgroundImage:
                                "radial-gradient(circle, white 1px, transparent 1px)",
                              backgroundSize: "20px 20px",
                            }}
                          />

                          <motion.div
                            className="text-9xl relative z-10"
                            whileHover={{ scale: 1.1, rotate: 10 }}
                            transition={{ type: "spring", stiffness: 300 }}
                          >
                            {index === 0 ? "🔍" : index === 1 ? "💬" : "📚"}
                          </motion.div>
                        </div>

                        {/* Floating particles */}
                        {[...Array(3)].map((_, i) => (
                          <motion.div
                            key={i}
                            className={`absolute w-4 h-4 rounded-full bg-white`}
                            style={{
                              top: `${20 + i * 30}%`,
                              [isEven ? "right" : "left"]: "-20px",
                            }}
                            animate={{
                              y: [0, -20, 0],
                              opacity: [0.3, 0.7, 0.3],
                              scale: [1, 1.5, 1],
                            }}
                            transition={{
                              duration: 2 + i * 0.5,
                              repeat: Infinity,
                              delay: i * 0.2,
                            }}
                          />
                        ))}
                      </motion.div>
                    </motion.div>
                  </div>

                  {/* Connection Arrow (mobile only) */}
                  {index < steps.length - 1 && (
                    <motion.div
                      className="md:hidden flex justify-center mt-12"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                    >
                      <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        <ArrowRight className="w-8 h-8 text-gray-400 transform rotate-90" />
                      </motion.div>
                    </motion.div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="mt-24 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.button
            className="group relative px-10 py-5 bg-primary-yellow text-primary-charcoal border border-primary-charcoal dark:bg-transparent dark:border-primary-yellow-light dark:text-primary-yellow-light hover:bg-primary-yellow-dark dark:hover:bg-primary-yellow-light/10 rounded-2xl font-bold text-lg shadow-2xl overflow-hidden transition-all"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10 flex items-center space-x-3">
              <span>Get Started Today</span>
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowRight className="w-6 h-6" />
              </motion.div>
            </span>

            {/* Animated shine effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20"
              animate={{
                x: ["-100%", "100%"],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatDelay: 1,
              }}
            />
          </motion.button>

          <p className="mt-6 text-gray-600 dark:text-gray-400">
            Join 1,200+ students already learning with us
          </p>
        </motion.div>
      </div>
    </section>
  );
}
