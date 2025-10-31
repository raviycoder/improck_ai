"use client";

import React from "react";
import { ContainerScroll, CardSticky } from "@/components/ui/cards-stack";

const MANUAL_JOB_SEARCH_STEPS = [
  {
    id: 1,
    title: "Browse Job Boards",
    description: "Start your day by checking multiple job platforms like LinkedIn, Indeed, Glassdoor, and company websites. Spend hours scrolling through countless listings, most of which don't match your criteria or are outdated postings."
  },
  {
    id: 2,
    title: "Filter & Research",
    description: "Manually filter through jobs using basic search terms. Research each company individually, checking their website, values, and recent news. This process is repetitive and time-consuming for each potential opportunity."
  },
  {
    id: 3,
    title: "Customize Applications",
    description: "Tailor your resume for each specific role, highlighting relevant experience. Write personalized cover letters that address the job requirements. This customization process takes 1-2 hours per application."
  },
  {
    id: 4,
    title: "Submit & Track",
    description: "Submit applications one by one through different portals and systems. Manually track application status in spreadsheets. Follow up with recruiters and hiring managers via email or LinkedIn messages."
  },
  {
    id: 5,
    title: "Repeat Daily",
    description: "Start the entire process over again the next day. Most applications get no response, forcing you to continue this exhausting cycle. The lack of feedback makes it impossible to improve your approach."
  }
];

const IssueSection = () => {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950 md:-mt-40 transition-colors duration-300">
      <div className="container mx-auto px-6 xl:px-12 max-w-screen-xl">
        <div className="grid md:grid-cols-2 md:gap-8 xl:gap-12">
          <div className="flex items-center md:sticky md:top-0 md:h-screen">
            <div className="py-12">
              <h5 className="text-xs uppercase tracking-wide text-blue-600 dark:text-blue-400 font-semibold">The Problem</h5>
              <h2 className="mb-6 mt-4 text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
                Manual Job Searching{" "}
                <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">Wastes Your Time</span>
              </h2>
              <p className="max-w-prose text-sm text-gray-700 dark:text-gray-300">
                Traditional job searching is an exhausting, time-consuming process that drains your energy and motivation. 
                Every day, job seekers spend countless hours on repetitive tasks that yield minimal results. 
                Here&apos;s the painful reality of manual job hunting that you know all too well.
              </p>
              <div className="mt-6 p-4 bg-red-50 border-l-4 border-red-400 rounded-r-lg">
                <p className="text-sm font-medium text-red-800">
                  <span className="font-bold">15-20 hours wasted weekly</span> on inefficient job searching
                </p>
              </div>
            </div>
          </div>
          <ContainerScroll className="min-h-[300vh] pb-20 md:pt-86">
            {MANUAL_JOB_SEARCH_STEPS.map((step, index) => (
              <CardSticky
                key={step.id}
                index={index}
                incrementY={15}
                incrementZ={5}
                className="rounded-2xl border border-gray-200 dark:border-gray-700 bg-white/90 dark:bg-gray-800/90 p-8 shadow-lg backdrop-blur-md mx-auto min-h-72 transition-colors duration-300"
              >
                <div className="flex items-center justify-between gap-4">
                  <h2 className="my-6 text-2xl font-bold tracking-tighter text-gray-900 dark:text-white">
                    {step.title}
                  </h2>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
                    {String(index + 1).padStart(2, "0")}
                  </h3>
                </div>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{step.description}</p>
              </CardSticky>
            ))}
          </ContainerScroll>
        </div>
      </div>
    </div>
  );
};

export default IssueSection;
