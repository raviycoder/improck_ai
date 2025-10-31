"use client";
import React, { useState, useId } from "react";
import Image from "next/image";

type Testimonial = {
  text: string;
  image: string;
  name: string;
  role: string;
};

export const TestimonialsColumn = (props: {
  className?: string;
  testimonials: Testimonial[];
  duration?: number;
  pauseOnHover?: boolean;
  slowOnHover?: boolean;
  hoverSlowFactor?: number;
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const uniqueId = useId();
  
  const getDuration = () => {
    if (props.slowOnHover && isHovered) {
      return (props.duration || 10) * (props.hoverSlowFactor || 5);
    }
    return props.duration || 10;
  };

  const getAnimationPlayState = () => {
    if (props.pauseOnHover && isHovered) {
      return "paused";
    }
    return "running";
  };

  return (
    <>
      <style jsx global>{`
        @keyframes scroll-${uniqueId} {
          0% {
            transform: translateY(0%);
          }
          100% {
            transform: translateY(-50%);
          }
        }
      `}</style>
      <div 
        className={props.className}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div
          style={{
            animation: `scroll-${uniqueId} ${getDuration()}s linear infinite`,
            animationPlayState: getAnimationPlayState(),
          }}
          className="flex flex-col gap-6 pb-6"
        >
        {[
          ...new Array(2).fill(0).map((_, index) => (
            <React.Fragment key={index}>
              {props.testimonials.map(({ text, image, name, role }, i) => (
                <div className="p-6 sm:p-8 lg:p-10 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 shadow-lg hover:shadow-xl dark:hover:shadow-blue-900/20 transition-all duration-300 max-w-xs w-full group" key={i}>
                  <div className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm sm:text-base mb-6 group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-300">
                    &quot;{text}&quot;
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <Image
                        width={48}
                        height={48}
                        src={image}
                        alt={name}
                        className="h-12 w-12 rounded-full border-2 border-blue-100 dark:border-blue-900 group-hover:border-blue-200 dark:group-hover:border-blue-700 transition-colors duration-300"
                      />
                      <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 border-2 border-white dark:border-gray-900 rounded-full"></div>
                    </div>
                    <div className="flex flex-col">
                      <div className="font-semibold text-gray-900 dark:text-white tracking-tight leading-5 text-sm sm:text-base">{name}</div>
                      <div className="text-xs sm:text-sm text-blue-600 dark:text-blue-400 font-medium leading-4 tracking-tight">{role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </React.Fragment>
          )),
        ]}
        </div>
      </div>
    </>
  );
};

;