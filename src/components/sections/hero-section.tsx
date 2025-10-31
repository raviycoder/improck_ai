"use client";
import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import ProgressSteps from "../ui/progress-steps";
import { ChevronRight, Sparkles } from "lucide-react";
import { AuroraBackground } from "../ui/aura-bg";
import { HeroHeader } from "./header";
import ImprockLogo from "../svg/improck-logo";

export default function HeroSection() {
  const jobFinding = [
    "Analyzing your profile & skills",
    "Matching with 1000+ job listings",
    "Auto-filling applications",
    "Customizing cover letters",
    "Getting you hired faster!",
  ];
  return (
    <>
      <HeroHeader />
      <AuroraBackground>
        <main className="overflow-hidden">
          <div
            aria-hidden
            className="absolute inset-0 isolate hidden opacity-65 contain-strict lg:block"
          >
            <div className="w-140 h-320 -translate-y-87.5 absolute left-0 top-0 -rotate-45 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,hsla(0,0%,85%,.08)_0,hsla(0,0%,55%,.02)_50%,hsla(0,0%,45%,0)_80%)]" />
            <div className="h-320 absolute left-0 top-0 w-60 -rotate-45 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.06)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)] [translate:5%_-50%]" />
            <div className="h-320 -translate-y-87.5 absolute left-0 top-0 w-60 -rotate-45 bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.04)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)]" />
          </div>
          <main className="overflow-x-hidden">
            <section>
              <div className="pb-16 pt-8 sm:pb-20 sm:pt-12 md:pb-32 lg:pb-56 lg:pt-44">
                <div className="relative mx-auto flex max-w-6xl flex-col px-4 sm:px-6 lg:flex-row lg:items-center">
                  <div className="mx-auto max-w-lg text-center lg:ml-0 lg:w-1/2 lg:text-left">
                    {/* Logo Badge */}
                    <div className="inline-flex items-center gap-2 sm:gap-3 rounded-full bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/50 dark:to-purple-950/50 px-3 py-2 sm:px-5 sm:py-2.5 border border-blue-200 dark:border-blue-800 backdrop-blur-sm">
                      <ImprockLogo width={24} height={18} className="sm:w-8 sm:h-6" />
                      <span className="text-xs sm:text-sm font-semibold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
                        Improck AI
                      </span>
                      <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-blue-500 dark:text-blue-400" />
                    </div>

                    <h1 className="mt-6 sm:mt-8 max-w-2xl text-balance text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-900 dark:from-white dark:via-blue-200 dark:to-purple-200 bg-clip-text text-transparent lg:mt-12">
                      Land Your Dream Job 10x Faster
                    </h1>
                    <p className="mt-4 sm:mt-6 lg:mt-8 max-w-2xl text-pretty text-base sm:text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                      Stop wasting hours on manual applications. Let Improck&apos;s AI-powered platform automatically apply to hundreds of relevant jobs while you focus on interview preparation.
                    </p>

                    <div className="mt-8 sm:mt-10 lg:mt-12 flex flex-col items-center justify-center gap-3 sm:gap-4 sm:flex-row lg:justify-start">
                      <Button asChild size="lg" className="w-full sm:w-auto px-6 py-4 sm:px-8 sm:py-6 text-sm sm:text-base font-semibold bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg shadow-blue-500/25 dark:shadow-blue-500/20 transition-all duration-300">
                        <Link href="#pricing">
                          <span className="text-nowrap">Start Free Trial</span>
                          <Sparkles className="ml-2 w-3 h-3 sm:w-4 sm:h-4" />
                        </Link>
                      </Button>
                      <Button
                        asChild
                        size="lg"
                        variant="outline"
                        className="w-full sm:w-auto px-6 py-4 sm:px-8 sm:py-6 text-sm sm:text-base font-semibold border-2 border-blue-200 dark:border-blue-800 hover:bg-blue-50 dark:hover:bg-blue-950/50 transition-all duration-300"
                      >
                        <Link href="#features">
                          <span className="text-nowrap">See How It Works</span>
                          <ChevronRight className="ml-1 w-3 h-3 sm:w-4 sm:h-4" />
                        </Link>
                      </Button>
                    </div>

                    {/* Stats */}
                    {/* <div className="mt-8 sm:mt-10 lg:mt-12 grid grid-cols-3 gap-4 sm:gap-6 text-center lg:text-left">
                      <div>
                        <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
                          10x
                        </div>
                        <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mt-1">
                          More Applications
                        </div>
                      </div>
                      <div>
                        <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
                          85%
                        </div>
                        <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mt-1">
                          Success Rate
                        </div>
                      </div>
                      <div>
                        <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
                          24/7
                        </div>
                        <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mt-1">
                          Auto Apply
                        </div>
                      </div>
                    </div> */}
                  </div>
                  <div className="relative mt-12 sm:mt-16 flex justify-center lg:mt-0 lg:w-1/2 lg:pl-8 xl:pl-16">
                    <ProgressSteps
                      steps={jobFinding}
                      stepDelay={2000}
                      autoStart={true}
                      onComplete={() => console.log("All steps completed!")}
                      className="max-w-lg w-full"
                    />
                  </div>
                </div>
              </div>
            </section>
          </main>
          {/* <section className="bg-background pb-12 pt-12 sm:pb-16 sm:pt-16 md:pb-32">
            <div className="group relative m-auto max-w-5xl px-4 sm:px-6">
              <div className="absolute inset-0 z-10 flex scale-95 items-center justify-center opacity-0 duration-500 group-hover:scale-100 group-hover:opacity-100">
                <Link
                  href="#testimonials"
                  className="block text-xs sm:text-sm font-semibold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent duration-150 hover:opacity-75"
                >
                  <span>Trusted by 10,000+ Job Seekers</span>
                  <ChevronRight className="ml-1 inline-block size-3" />
                </Link>
              </div>
              <div className="group-hover:blur-xs mx-auto mt-8 sm:mt-12 grid max-w-2xl grid-cols-2 sm:grid-cols-4 gap-x-8 gap-y-6 sm:gap-x-12 sm:gap-y-8 md:gap-x-16 md:gap-y-14 transition-all duration-500 group-hover:opacity-50">
                <div className="flex">
                  <Image
                    className="mx-auto h-5 w-fit dark:invert"
                    src="https://html.tailus.io/blocks/customers/nvidia.svg"
                    alt="Nvidia Logo"
                    height="20"
                    width="100"
                  />
                </div>

                <div className="flex">
                  <Image
                    className="mx-auto h-4 w-fit dark:invert"
                    src="https://html.tailus.io/blocks/customers/column.svg"
                    alt="Column Logo"
                    height="16"
                    width="100"
                  />
                </div>
                <div className="flex">
                  <Image
                    className="mx-auto h-4 w-fit dark:invert"
                    src="https://html.tailus.io/blocks/customers/github.svg"
                    alt="GitHub Logo"
                    height="16"
                    width="100"
                  />
                </div>
                <div className="flex">
                  <Image
                    className="mx-auto h-5 w-fit dark:invert"
                    src="https://html.tailus.io/blocks/customers/nike.svg"
                    alt="Nike Logo"
                    height="20"
                    width="100"
                  />
                </div>
                <div className="flex">
                  <Image
                    className="mx-auto h-5 w-fit dark:invert"
                    src="https://html.tailus.io/blocks/customers/lemonsqueezy.svg"
                    alt="Lemon Squeezy Logo"
                    height="20"
                    width="100"
                  />
                </div>
                <div className="flex">
                  <Image
                    className="mx-auto h-4 w-fit dark:invert"
                    src="https://html.tailus.io/blocks/customers/laravel.svg"
                    alt="Laravel Logo"
                    height="16"
                    width="100"
                  />
                </div>
                <div className="flex">
                  <Image
                    className="mx-auto h-7 w-fit dark:invert"
                    src="https://html.tailus.io/blocks/customers/lilly.svg"
                    alt="Lilly Logo"
                    height="28"
                    width="100"
                  />
                </div>

                <div className="flex">
                  <Image
                    className="mx-auto h-6 w-fit dark:invert"
                    src="https://html.tailus.io/blocks/customers/openai.svg"
                    alt="OpenAI Logo"
                    height="24"
                    width="100"
                  />
                </div>
              </div>
            </div>
          </section> */}
        </main>
      </AuroraBackground>
    </>
  );
}
