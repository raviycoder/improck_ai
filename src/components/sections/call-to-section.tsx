"use client";

import React from "react";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, TrendingUp, Clock } from "lucide-react";

const CallToSection = () => {
  const words = [
    {
      text: "Your",
    },
    {
      text: "Dream",
    },
    {
      text: "Job",
    },
    {
      text: "Is",
    },
    {
      text: "Waiting.",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];

  const stats = [
    {
      icon: "Sparkles",
      value: "10x",
      label: "More Applications",
    },
    {
      icon: "TrendingUp",
      value: "85%",
      label: "Higher Response Rate",
    },
    {
      icon: "Clock",
      value: "20hrs",
      label: "Saved Per Week",
    },
  ];

  return (
    <section className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-b from-white via-blue-50/30 to-white dark:from-gray-950 dark:via-blue-950/20 dark:to-gray-950">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-48 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center space-y-8">
          {/* Typewriter Heading */}
          <div className="w-full flex items-center justify-center">
            {" "}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <TypewriterEffectSmooth words={words} />
            </motion.div>
          </div>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg sm:text-xl md:text-2xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto"
          >
            Stop wasting hours on repetitive applications. Let Improck handle
            the grunt work while you focus on{" "}
            <span className="font-semibold text-blue-600 dark:text-blue-400">
              preparing for interviews
            </span>{" "}
            and{" "}
            <span className="font-semibold text-blue-600 dark:text-blue-400">
              landing your dream role
            </span>
            .
          </motion.p>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 max-w-4xl mx-auto py-8"
          >
            {stats.map((stat, index) => {
              const IconComponent =
                stat.icon === "Sparkles"
                  ? Sparkles
                  : stat.icon === "TrendingUp"
                  ? TrendingUp
                  : Clock;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex flex-col items-center space-y-2 p-6 rounded-xl bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm border border-gray-200/50 dark:border-gray-800/50"
                >
                  <div className="p-3 rounded-full bg-gradient-to-br from-blue-500 to-purple-600">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-sm md:text-base text-gray-600 dark:text-gray-400">
                    {stat.label}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2"
            >
              <span>Start Applying Now</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-700 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-full bg-white dark:bg-gray-900 text-gray-900 dark:text-white font-semibold text-lg border-2 border-gray-300 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-all duration-300"
            >
              Watch Demo
            </motion.button>
          </motion.div>

          {/* Trust Badge */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
            viewport={{ once: true }}
            className="text-sm text-gray-500 dark:text-gray-400 pt-4"
          >
            Join 10,000+ job seekers who automated their way to success ✨
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default CallToSection;
