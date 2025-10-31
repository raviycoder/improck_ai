'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

interface AnimatedCheckCircleProps {
  size?: number
  strokeWidth?: number
  duration?: number
  delay?: number
  autoPlay?: boolean
  onComplete?: () => void
  className?: string
}

const AnimatedCheckCircle: React.FC<AnimatedCheckCircleProps> = ({
  size = 60,
  strokeWidth = 3,
  duration = 0.8,
  delay = 0,
  autoPlay = true,
  onComplete,
  className = ""
}) => {
  const [isChecked, setIsChecked] = useState(false)

  useEffect(() => {
    if (autoPlay) {
      const timer = setTimeout(() => {
        setIsChecked(true)
        onComplete?.()
      }, delay * 1000)
      
      return () => clearTimeout(timer)
    }
  }, [autoPlay, delay, onComplete])

  const circleRadius = (size - strokeWidth) / 2
  const checkmarkPath = `M${size * 0.25} ${size * 0.5} L${size * 0.4} ${size * 0.65} L${size * 0.75} ${size * 0.35}`

  return (
    <div className={`inline-flex items-center justify-center ${className}`}>
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        className="overflow-visible"
      >
        {/* Background Circle with Fill Animation */}
        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={circleRadius}
          fill="#10B981" // Green-500
          stroke="#10B981"
          strokeWidth={strokeWidth}
          initial={{ scale: 0, opacity: 0 }}
          animate={isChecked ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
          transition={{
            duration: duration * 0.6,
            ease: "easeOut",
            type: "spring",
            stiffness: 300,
            damping: 20
          }}
        />

        {/* Checkmark Path */}
        <motion.path
          d={checkmarkPath}
          stroke="white"
          strokeWidth={strokeWidth}
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={isChecked ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
          transition={{
            duration: duration * 0.8,
            delay: duration * 0.2,
            ease: "easeInOut"
          }}
        />
      </svg>
    </div>
  )
}

export default AnimatedCheckCircle
