'use client'
import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { AspectRatio } from "./aspect-ratio";
import { useTheme } from "next-themes";

interface FeatureCardProps {
  title: string;
  description: string;
  icon?: LucideIcon;
  image?: string;
  linkText?: string;
  linkHref?: string;
  theme?: 'dark' | 'light' | 'auto';
  className?: string;
  width?: string;
  height?: string;
  showGlow?: boolean;
  interactive?: boolean;
    wantLink?: boolean;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  icon: Icon,
  image,
  linkText = "Learn More",
  linkHref = "#",
  theme = 'auto',
  className,
  width = "100%",
  height = "auto",
  showGlow = true,
  interactive = true,
  wantLink = false
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const { theme: systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Determine effective theme
  const effectiveTheme = theme === 'auto' 
    ? (mounted && systemTheme === 'dark' ? 'dark' : 'light')
    : theme;

  // Theme configurations
  const themes = {
    dark: {
      cardBg: "#0e131f",
      gradientBg: "linear-gradient(180deg, #000000 0%, #000000 70%)",
      glowColors: {
        primary: "rgba(172, 92, 255, 0.7)",
        secondary: "rgba(56, 189, 248, 0.7)",
        tertiary: "rgba(161, 58, 229, 0.7)"
      },
      iconBg: "linear-gradient(225deg, #171c2c 0%, #121624 100%)",
      titleColor: "text-white",
      descColor: "text-gray-300",
      linkColor: "text-white",
      shadow: "0 -10px 100px 10px rgba(78, 99, 255, 0.25), 0 0 10px 0 rgba(0, 0, 0, 0.5)"
    },
    light: {
      cardBg: "#ffffff",
      gradientBg: "linear-gradient(180deg, #f8fafc 0%, #ffffff 70%)",
      glowColors: {
        primary: "rgba(99, 102, 241, 0.4)",
        secondary: "rgba(59, 130, 246, 0.4)",
        tertiary: "rgba(147, 51, 234, 0.4)"
      },
      iconBg: "linear-gradient(225deg, #f1f5f9 0%, #e2e8f0 100%)",
      titleColor: "text-gray-900",
      descColor: "text-gray-600",
      linkColor: "text-gray-900",
      shadow: "0 -10px 60px 5px rgba(99, 102, 241, 0.15), 0 0 10px 0 rgba(0, 0, 0, 0.1)"
    }
  };

  const currentTheme = themes[effectiveTheme];

  // Handle mouse movement for 3D effect
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!interactive || !cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    const rotateX = -(y / rect.height) * 8;
    const rotateY = (x / rect.width) * 8;

    setRotation({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotation({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={cardRef}
      className={cn(
        "relative rounded-[32px] overflow-hidden w-full min-h-fit",
        "sm:rounded-[24px] md:rounded-[32px]", // Responsive border radius
        className
      )}
      style={{
        maxWidth: width === "100%" ? "none" : width,
        height: height === "auto" ? "auto" : height,
        minHeight: image ? "320px" : "280px", // Minimum height based on content
        transformStyle: "preserve-3d",
        backgroundColor: currentTheme.cardBg,
        boxShadow: showGlow ? currentTheme.shadow : "0 0 10px 0 rgba(0, 0, 0, 0.1)",
      }}
      initial={{ y: 0 }}
      animate={{
        y: interactive && isHovered ? -5 : 0,
        rotateX: interactive ? rotation.x : 0,
        rotateY: interactive ? rotation.y : 0,
        perspective: 1000,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20
      }}
      onMouseEnter={() => interactive && setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
    >
      {/* Glass reflection overlay */}
      <motion.div
        className="absolute inset-0 z-35 pointer-events-none"
        style={{
          background: effectiveTheme === 'dark' 
            ? "linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0) 40%, rgba(255,255,255,0) 80%, rgba(255,255,255,0.05) 100%)"
            : "linear-gradient(135deg, rgba(255,255,255,0.6) 0%, rgba(255,255,255,0) 40%, rgba(255,255,255,0) 80%, rgba(255,255,255,0.3) 100%)",
          backdropFilter: "blur(2px)",
        }}
        animate={{
          opacity: isHovered ? 0.7 : 0.5,
          rotateX: -rotation.x * 0.2,
          rotateY: -rotation.y * 0.2,
          z: 1,
        }}
        transition={{
          duration: 0.4,
          ease: "easeOut"
        }}
      />

      {/* Background gradient */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{
          background: currentTheme.gradientBg,
        }}
        animate={{ z: -1 }}
      />

      {/* Glow effects (only if showGlow is true) */}
      {showGlow && (
        <>
          <motion.div
            className="absolute bottom-0 left-0 right-0 h-2/3 z-20"
            style={{
              background: `
                radial-gradient(ellipse at bottom right, ${currentTheme.glowColors.primary} -10%, transparent 70%),
                radial-gradient(ellipse at bottom left, ${currentTheme.glowColors.secondary} -10%, transparent 70%)
              `,
              filter: "blur(40px)",
            }}
            animate={{
              opacity: isHovered ? 0.9 : 0.8,
              y: isHovered ? rotation.x * 0.5 : 0,
              z: 0
            }}
            transition={{
              duration: 0.4,
              ease: "easeOut"
            }}
          />

          <motion.div
            className="absolute bottom-0 left-0 right-0 h-2/3 z-21"
            style={{
              background: `radial-gradient(circle at bottom center, ${currentTheme.glowColors.tertiary} -20%, transparent 60%)`,
              filter: "blur(45px)",
            }}
            animate={{
              opacity: isHovered ? 0.85 : 0.75,
              y: isHovered ? `calc(10% + ${rotation.x * 0.3}px)` : "10%",
              z: 0
            }}
            transition={{
              duration: 0.4,
              ease: "easeOut"
            }}
          />
        </>
      )}

      {/* Card content */}
      <motion.div
        className="relative flex flex-col h-full p-[5px] z-40"
        animate={{ z: 2 }}
      >
        {/* Icon or Image */}
        {image ? (
          <div className="w-full mb-4 sm:mb-6 -mt-6">
            <div className="w-full overflow-hidden rounded-3xl">
              <AspectRatio ratio={16/10} className="bg-muted p-4">
                <Image
                  src={image}
                  alt={title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </AspectRatio>
            </div>
          </div>
        ) : (
          <motion.div
            className={cn(
              "rounded-full flex items-center justify-center mb-4 sm:mb-6",
              "w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14" // Responsive icon sizes
            )}
            style={{
              background: currentTheme.iconBg,
              position: "relative",
              overflow: "hidden"
            }}
            animate={{
              boxShadow: isHovered
                ? `0 8px 16px -2px rgba(0, 0, 0, 0.3), 0 4px 8px -1px rgba(0, 0, 0, 0.2), inset 2px 2px 5px ${theme === 'dark' ? 'rgba(255, 255, 255, 0.15)' : 'rgba(255, 255, 255, 0.8)'}, inset -2px -2px 5px ${theme === 'dark' ? 'rgba(0, 0, 0, 0.7)' : 'rgba(0, 0, 0, 0.1)'}`
                : `0 6px 12px -2px rgba(0, 0, 0, 0.25), 0 3px 6px -1px rgba(0, 0, 0, 0.15), inset 1px 1px 3px ${theme === 'dark' ? 'rgba(255, 255, 255, 0.12)' : 'rgba(255, 255, 255, 0.6)'}, inset -2px -2px 4px ${theme === 'dark' ? 'rgba(0, 0, 0, 0.5)' : 'rgba(0, 0, 0, 0.05)'}`,
              z: isHovered ? 10 : 5,
              y: isHovered ? -2 : 0,
              rotateX: isHovered ? -rotation.x * 0.5 : 0,
              rotateY: isHovered ? -rotation.y * 0.5 : 0
            }}
            transition={{
              duration: 0.4,
              ease: "easeOut"
            }}
          >
            {Icon ? (
              <div className="flex items-center justify-center w-full h-full relative z-10">
                <Icon 
                  className={cn(
                    "w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6", // Responsive icon sizes
                    theme === 'dark' ? "text-white" : "text-gray-700"
                  )}
                />
              </div>
            ) : (
              // Default star icon with responsive sizing
              <div className="flex items-center justify-center w-full h-full relative z-10">
                <svg 
                  className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" 
                  viewBox="0 0 16 16" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8 0L9.4 5.4L14.8 5.4L10.6 8.8L12 14.2L8 10.8L4 14.2L5.4 8.8L1.2 5.4L6.6 5.4L8 0Z"
                    fill={theme === 'dark' ? "white" : "#374151"}
                  />
                </svg>
              </div>
            )}
          </motion.div>
        )}

        {/* Content */}
        <motion.div
          className="mb-auto flex-1 flex flex-col p-4 sm:p-6 md:p-8"
          animate={{
            z: isHovered ? 5 : 2,
            rotateX: isHovered ? -rotation.x * 0.3 : 0,
            rotateY: isHovered ? -rotation.y * 0.3 : 0
          }}
          transition={{
            duration: 0.4,
            ease: "easeOut"
          }}
        >
          <motion.h3
            className={cn(
              "text-lg sm:text-xl md:text-2xl font-medium mb-3 sm:mb-4 leading-tight", 
              currentTheme.titleColor
            )}
            style={{
              letterSpacing: "-0.01em",
              lineHeight: 1.2,
            }}
            animate={{
              textShadow: isHovered ? "0 2px 4px rgba(0,0,0,0.2)" : "none",
            }}
          >
            {title}
          </motion.h3>

          <motion.p
            className={cn(
              "text-sm sm:text-base md:text-lg mb-4 sm:mb-6 leading-relaxed flex-1", 
              currentTheme.descColor
            )}
            style={{
              lineHeight: 1.6,
              fontWeight: 350,
            }}
            animate={{
              textShadow: isHovered ? "0 1px 2px rgba(0,0,0,0.1)" : "none",
            }}
          >
            {description}
          </motion.p>

          {/* Link */}
          {wantLink && <motion.a
            href={linkHref}
            className={cn(
              "inline-flex items-center text-sm sm:text-base font-medium group mt-auto", 
              currentTheme.linkColor
            )}
            whileHover={{
              filter: `drop-shadow(0 0 5px ${theme === 'dark' ? 'rgba(255, 255, 255, 0.5)' : 'rgba(99, 102, 241, 0.5)'})`
            }}
          >
            {linkText}
            <motion.svg
              className="ml-1 w-4 h-4 sm:w-5 sm:h-5"
              width="8"
              height="8"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              animate={{
                x: isHovered ? 4 : 0
              }}
              transition={{
                duration: 0.6,
                ease: "easeOut"
              }}
            >
              <path
                d="M1 8H15M15 8L8 1M15 8L8 15"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </motion.svg>
          </motion.a>}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

// Legacy component for backwards compatibility
export const GradientCard = () => (
  <div className="w-full h-screen flex items-center justify-center bg-black">
    <FeatureCard
      title="AI-Powered Inbox Sorting"
      description="OpenMail revolutionizes email management with AI-driven sorting, boosting productivity and accessibility"
      theme="dark"
    />
  </div>
);