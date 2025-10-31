"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { TextEffect } from "./text-effect";
import { Spinner } from "./spinner";
import AnimatedCheckCircle from "../svg/check-circle";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface ProgressStepsProps {
  steps: string[];
  stepDelay?: number;
  autoStart?: boolean;
  onComplete?: () => void;
  className?: string;
}

type StepState = "pending" | "loading" | "completed";

interface Step {
  text: string;
  state: StepState;
}

const ProgressSteps: React.FC<ProgressStepsProps> = ({
  steps,
  stepDelay = 2000, // 2 seconds delay
  autoStart = true,
  onComplete,
  className,
}) => {
  const [stepList, setStepList] = useState<Step[]>(() =>
    steps.map((step) => ({ text: step, state: "pending" }))
  );
  const [isProcessing, setIsProcessing] = useState(false);
  const startProcessing = async () => {
    if (isProcessing) return;

    setIsProcessing(true);

    for (let i = 0; i < steps.length; i++) {
      // Set current step to loading
      setStepList((prev) =>
        prev.map((step, index) =>
          index === i ? { ...step, state: "loading" } : step
        )
      );

      // Wait for the specified delay
      await new Promise((resolve) => setTimeout(resolve, stepDelay));

      // Mark current step as completed
      setStepList((prev) =>
        prev.map((step, index) =>
          index === i ? { ...step, state: "completed" } : step
        )
      );
    }
    setIsProcessing(false);
    onComplete?.();
  };
  useEffect(() => {
    if (autoStart) {
      startProcessing();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [autoStart]);

  return (
    <div
      style={{ perspective: "1000px" }}
      className={cn("w-full max-w-md mx-auto space-y-4 p-6", className)}
    >
      <motion.div
        style={{ transformStyle: "preserve-3d" }}
        animate={{ y: [0, -10, 0] }} // Animates y-position from 0 to -10px and back to 0
        transition={{
          duration: 5, // Animation duration
          repeat: Infinity, // Repeats indefinitely
          ease: "easeInOut", // Smooth easing
          repeatType: "reverse", // Reverses animation direction on each repeat
        }}
      >
        <Card
          style={{
            transform: "rotateX(10deg) rotateY(-10deg)",
          }}
          className="min-h-68 min-w-84 bg-white/20 shadow-lg ring-1 ring-black/5 backdrop-blur-lg inset-ring-chart-2"
        >
          <CardHeader>
            <CardTitle>How Impork finds jobs for you</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col">
            {stepList.map((step, index) => (
              <div
                className={`flex items-center ${
                  step.state !== "completed" && "pt-2"
                }`}
                key={index}
              >
                <AnimatePresence mode="wait">
                  {step.state === "loading" && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.6, ease: "easeInOut" }}
                    >
                      <Spinner size="sm" className="" />
                    </motion.div>
                  )}
                  {step.state === "completed" && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{
                        duration: 0.6,
                        ease: "easeInOut",
                        delay: 0.6,
                      }}
                    >
                      <AnimatedCheckCircle className="pt-2" size={20} />
                    </motion.div>
                  )}
                </AnimatePresence>
                {(step.state === "loading" || step.state === "completed") && (
                  <TextEffect
                    preset="fade-in-blur"
                    speedSegment={0.6}
                    per="line"
                    as="text"
                    className="ml-2 space-y-1 font-medium"
                  >
                    {step.text}
                  </TextEffect>
                )}
              </div>
            ))}
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

export default ProgressSteps;
