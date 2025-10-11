"use client";

import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  Search,
  GraduationCap,
  BookOpen,
  Calculator,
  Award,
  Users,
  CheckCircle,
  DollarSign,
  Clock,
  MapPin,
  ChevronDown,
} from "lucide-react";
import { Select, Input } from "antd";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./slider.css";
const { Option } = Select;

export default function Hero() {
  const [typedText, setTypedText] = useState("");
  const fullText = "Find the Right Teacher, Every Time";
  const [showCursor, setShowCursor] = useState(true);
  const [searchFocused, setSearchFocused] = useState(false);

  // ✅ React Hook Form setup
  const { handleSubmit, setValue, watch, reset } = useForm({
    defaultValues: {
      subject: "",
      level: "",
      location: "",
    },
  });

  const onSubmit = (data) => {
    console.log("Search Data:", data);
  };

  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setTypedText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
        setShowCursor(false);
      }
    }, 80);
    return () => clearInterval(typingInterval);
  }, []);

  // Animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const slideInLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", stiffness: 80, damping: 15 },
    },
  };

  const slideInRight = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", stiffness: 80, damping: 15 },
    },
  };

  const responsive = {
    all: {
      breakpoint: { max: 4000, min: 0 },
      items: 1,
    },
  };

  const slides = [
    {
      img: "https://images.unsplash.com/photo-1606761568499-6a0b5b0c8f63?auto=format&fit=crop&w=800&q=80",
      caption: "Focused Learning Session",
    },
    {
      img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
      caption: "Collaborative Study Group",
    },
    {
      img: "https://images.unsplash.com/photo-1593642532973-d31b6557fa68?auto=format&fit=crop&w=800&q=80",
      caption: "Coding from Home Setup",
    },
    {
      img: "https://images.unsplash.com/photo-1587614382346-4ec1e4e2de62?auto=format&fit=crop&w=800&q=80",
      caption: "Creative Student Workspace",
    },
  ];

  // Trust badges
  const trustBadges = [
    {
      icon: CheckCircle,
      text: "Verified Teachers",
      color: "text-primary-black dark:text-primary-white",
    },
    {
      icon: DollarSign,
      text: "Affordable Tuitions",
      color: "text-primary-black dark:text-primary-white",
    },
    {
      icon: Clock,
      text: "Flexible Scheduling",
      color: "text-primary-black dark:text-primary-white",
    },
  ];

  // Statistics data with animation
  const statistics = [
    {
      value: "500+",
      label: "Verified Tutors",
      icon: GraduationCap,
      delay: 0.5,
    },
    { value: "1,200+", label: "Happy Students", icon: Users, delay: 0.7 },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-gradient-light dark:bg-gradient-dark"
    >
      {/* 🔹 Background Image Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-100 mix-blend-overlay z-[1]"
        style={{
          backgroundImage:
            "url('https://craftlakecity.com/wp-content/uploads/2020/04/STEM-Background.jpg')",
        }}
      ></div>

      {/* 🔹 Optional dark layer for better contrast */}
      {/* <div className="absolute inset-0 bg-black/30 z-[2]" /> */}

      {/* Background icons omitted for brevity */}

      <div className="relative z-[3] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* LEFT SIDE */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center lg:text-left"
          >
            <motion.h1
              variants={slideInLeft}
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-primary-text dark:text-primary-text-dark"
            >
              <span className="bg-gradient-to-r from-primary-black to-primary-text-secondary dark:from-primary-white dark:to-primary-text-secondary-dark bg-clip-text text-transparent">
                {typedText}
                {showCursor && <span className="typing-cursor">|</span>}
              </span>
            </motion.h1>

            <motion.p
              variants={slideInLeft}
              className="text-lg md:text-xl text-primary-text-secondary dark:text-primary-text-secondary-dark mb-8 leading-relaxed"
            >
              Discover qualified tutors, book personalized sessions, and achieve
              your learning goals with expert guidance tailored just for you.
            </motion.p>

            {/* ✅ Search Bar with React Hook Form */}
            <motion.form
              onSubmit={handleSubmit(onSubmit)}
              variants={slideInLeft}
              className={`bg-[#EEF4F4]  dark:bg-primary-card-dark rounded-2xl shadow-2xl p-6 mb-8 border ${
                searchFocused
                  ? "border-primary-black dark:border-primary-white"
                  : "border-primary-border dark:border-primary-border-dark"
              } transition-all duration-300`}
              whileHover={{ scale: 1.02, y: -2 }}
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Select
                  placeholder="Subject"
                  size="large"
                  suffixIcon={<ChevronDown className="w-4 h-4" />}
                  onChange={(value) => setValue("subject", value)}
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
                  onChange={(value) => setValue("level", value)}
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
                  onChange={(e) => setValue("location", e.target.value)}
                  onFocus={() => setSearchFocused(true)}
                  onBlur={() => setSearchFocused(false)}
                />
              </div>

              <motion.button
                type="submit"
                className="w-full mt-4 bg-primary-white text-primary-black border-2 border-primary-black dark:bg-primary-black dark:border-primary-white dark:text-primary-white hover:opacity-90 font-semibold py-3 px-6 rounded-xl flex items-center justify-center space-x-2 transition-all"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Search className="w-5 h-5" />
                <span>Search Tutors</span>
              </motion.button>
            </motion.form>

            {/* Trust Badges */}
            <motion.div
              variants={slideInLeft}
              className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8"
            >
              {trustBadges.map((badge, index) => {
                const Icon = badge.icon;
                return (
                  <motion.div
                    key={index}
                    className="flex items-center space-x-2 bg-primary-white/50 dark:bg-primary-card-dark/50 backdrop-blur-sm px-4 py-2 rounded-full border border-primary-border dark:border-primary-border-dark"
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
                    }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.5 + index * 0.1 }}
                  >
                    <Icon className={`w-5 h-5 ${badge.color}`} />
                    <span className="text-sm font-medium text-primary-text dark:text-primary-text-dark">
                      {badge.text}
                    </span>
                  </motion.div>
                );
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
                className="group relative px-8 py-4 bg-primary-white text-primary-black border-2 border-primary-black dark:bg-primary-black dark:border-primary-white dark:text-primary-white hover:opacity-90 rounded-xl font-semibold text-lg shadow-lg overflow-hidden transition-all"
              >
                <span className="relative z-10 flex items-center justify-center space-x-2">
                  <Search className="w-5 h-5" />
                  <span>Find Tuition</span>
                </span>
                <motion.div
                  className="absolute inset-0 bg-gray-100 dark:bg-gray-900"
                  initial={{ scale: 0, opacity: 0 }}
                  whileHover={{ scale: 1, opacity: 0.2 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05, x: 5 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-primary-border dark:border-primary-border-dark text-primary-text dark:text-primary-text-dark rounded-xl font-semibold text-lg hover:bg-primary-black hover:text-primary-white hover:border-primary-black dark:hover:bg-primary-white dark:hover:text-primary-black dark:hover:border-primary-white transition-all flex items-center justify-center space-x-2"
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
                repeatType: "reverse",
                ease: "easeInOut",
              }}
              className="relative w-full max-w-xl"
            >
              {/* Student with Laptop Illustration */}
              <div className="bg-gradient-to-br from-primary-white/80 to-primary-white/60 dark:from-primary-card-dark/80 dark:to-primary-background-dark/60 backdrop-blur-xl rounded-3xl shadow-2xl border border-primary-border dark:border-primary-border-dark">
                <Carousel
                  responsive={responsive}
                  infinite={true}
                  autoPlay={true}
                  autoPlaySpeed={3000}
                  arrows={true}
                  swipeable={true}
                  draggable={true}
                  showDots={true}
                  transitionDuration={800}
                  containerClass="carousel-container flex gap-4"
                  itemClass="carousel-item-wrapper"
                >
                  {slides.map((slide, index) => (
                    <div
                      key={index}
                      className="w-full h-80 md:h-96 rounded-2xl overflow-hidden relative flex items-center justify-center transition-all duration-500 ease-in-out hover:scale-110 hover:z-10 hover:shadow-2xl"
                    >
                      <Image
                        src={slide.img}
                        alt={slide.caption}
                        width={800}
                        height={600}
                        className="w-full h-full object-cover"
                        priority={index === 0}
                      />
                      <div className="absolute bottom-5 left-5 bg-black/50 text-white px-4 py-2 rounded-lg">
                        {slide.caption}
                      </div>
                    </div>
                  ))}
                </Carousel>
              </div>

              {/* Floating Statistics Bubbles */}
              {statistics.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={index}
                    className="
        absolute 
        bg-primary-card dark:bg-primary-card-dark 
        rounded-xl shadow-xl 
        p-3 sm:p-4 
        border border-primary-border dark:border-primary-border-dark 
        w-32 sm:w-40 md:w-48
      "
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 200,
                      damping: 15,
                    }}
                    whileHover={{ scale: 1.05 }}
                    style={{
                      top: index === 0 ? "8%" : index === 1 ? "45%" : "78%",
                      [index % 2 === 0 ? "left" : "right"]:
                        index % 2 === 0
                          ? "2%" // closer to edge on mobile
                          : "2%",
                    }}
                  >
                    <div className="flex items-center space-x-2 sm:space-x-3">
                      <div
                        className="
          bg-primary-black/10 dark:bg-primary-white/10 
          p-1.5 sm:p-2 rounded-lg 
          border border-primary-border dark:border-primary-border-dark
        "
                      >
                        <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary-black dark:text-primary-white" />
                      </div>
                      <div>
                        <p className="text-lg sm:text-2xl font-bold text-primary-text dark:text-primary-text-dark">
                          {stat.value}
                        </p>
                        <p className="text-[10px] sm:text-xs text-primary-text-secondary dark:text-primary-text-secondary-dark">
                          {stat.label}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>
          <motion.div
            variants={slideInRight}
            initial="hidden"
            animate="visible"
            className="relative flex items-center justify-center"
          >
            <div className="bg-gradient-to-br from-primary-white/80 to-primary-white/60 dark:from-primary-card-dark/80 dark:to-primary-background-dark/60 backdrop-blur-xl rounded-3xl shadow-2xl border border-primary-border dark:border-primary-border-dark">
              <Carousel
                responsive={responsive}
                infinite
                autoPlay
                autoPlaySpeed={3000}
                arrows
                swipeable
                draggable
                showDots
                transitionDuration={800}
                containerClass="carousel-container"
              >
                {slides.map((slide, i) => (
                  <div
                    key={i}
                    className="w-full h-80 md:h-96 rounded-2xl overflow-hidden relative flex items-center justify-center"
                  >
                    <Image
                      src={slide.img}
                      alt={slide.caption}
                      width={800}
                      height={600}
                      className="w-full h-full object-cover"
                      priority={i === 0}
                    />
                    <div className="absolute bottom-5 left-5 bg-black/50 text-white px-4 py-2 rounded-lg">
                      {slide.caption}
                    </div>
                  </div>
                ))}
              </Carousel>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
