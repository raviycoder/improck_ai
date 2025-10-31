"use client"

import * as React from "react"
import { motion, type HTMLMotionProps } from "motion/react"
import { cn } from "@/lib/utils"

interface CardStickyProps extends HTMLMotionProps<"div"> {
  index: number
  incrementY?: number   // vertical spacing between cards (px)
  incrementZ?: number   // depth spacing for subtle 3D, if desired
}

const ContainerScroll = React.forwardRef<HTMLDivElement, React.HTMLProps<HTMLDivElement>>(
  ({ children, className, style, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          // reduced vertical padding to minimize extra scroll space
          "relative w-full py-[20vh]", 
          className
        )}
        style={{ perspective: "1000px", ...style }}
        {...props}
      >
        {children}
      </div>
    )
  }
)
ContainerScroll.displayName = "ContainerScroll"

const CardSticky = React.forwardRef<HTMLDivElement, CardStickyProps>(
  (
    {
      index,
      incrementY = 100,   // reduced from 140 for tighter spacing
      incrementZ = 8,     // tweak for depth
      className,
      style,
      children,
      ...props
    },
    ref
  ) => {
    const mt = index * incrementY
    const z = index * incrementZ

    return (
      <motion.div
        ref={ref}
        layout="position"
        // Use marginTop to stagger cards; keep sticky locked to center with top:50% + -translate-y-1/2
        style={{ marginTop: mt, z, backfaceVisibility: "hidden", ...style }}
        className={cn(
          // lock the element to viewport center on scroll
          "sticky top-1/2 -translate-y-1/3",
          // smoother transforms while scrolling
          "will-change-transform",
          // typical width and centering; adjust as needed
          "mx-auto w-full max-w-2xl",
          className
        )}
        {...props}
      >
        {children}
      </motion.div>
    )
  }
)
CardSticky.displayName = "CardSticky"

export { ContainerScroll, CardSticky }
