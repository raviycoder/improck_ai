import React from 'react'
import { FeatureCard } from '../ui/feature-card'

const Solution = () => {
  return (
    <section id="solution" className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-white via-gray-50 to-white dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-xl">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-900 dark:from-white dark:via-blue-200 dark:to-purple-200 bg-clip-text text-transparent mb-4 sm:mb-6">
            How We Solve Your Job Application Issues
          </h2>
          <p className="max-w-4xl mx-auto text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-400 leading-relaxed">{" "}Improck transforms the job search process through our intelligent 3-step solution that eliminates the tedious manual work and maximizes your success rate.
          </p>
        </div>

        {/* Three Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 mb-16 sm:mb-20">
          {/* Step 1 */}
          <div className="relative">
            {/* Step Badge */}
            <div className="absolute -top-3 -left-3 w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg sm:text-xl shadow-lg shadow-blue-500/50 z-10">
              1
            </div>
            <FeatureCard
              title="Smart Profile Analysis"
              description="Upload your resume and let our AI analyze your skills, experience, and career goals. We identify your strengths and match them with relevant job opportunities across multiple platforms automatically."
              image='https://user-gen-media-assets.s3.amazonaws.com/seedream_images/0774f407-4205-44ed-b8eb-1614e2394392.png'
              theme="auto"
              showGlow={true}
              className="pt-6"
            />
          </div>

          {/* Step 2 */}
          <div className="relative">
            {/* Step Badge */}
            <div className="absolute -top-3 -left-3 w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center text-white font-bold text-lg sm:text-xl shadow-lg shadow-green-500/50 z-10">
              2
            </div>
            <FeatureCard
              title="Automated Application Process"
              description="Our intelligent system fills out applications automatically using your profile data, customizes cover letters for each position, and submits applications to hundreds of relevant jobs while you sleep."
              image='https://user-gen-media-assets.s3.amazonaws.com/seedream_images/b20532c0-b21e-444a-ab76-aa625803e204.png'
              theme="auto"
              showGlow={true}
              className="pt-6"
            />
          </div>

          {/* Step 3 */}
          <div className="relative md:col-span-2 lg:col-span-1">
            {/* Step Badge */}
            <div className="absolute -top-3 -left-3 w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg sm:text-xl shadow-lg shadow-purple-500/50 z-10">
              3
            </div>
            <FeatureCard
              title="Real-time Tracking & Optimization"
              description="Monitor all your applications in one dashboard, receive instant notifications about responses, and get AI-powered insights to improve your success rate with continuous optimization."
              image='/image-hero.png'
              theme="auto"
              showGlow={true}
              className="pt-6"
            />
          </div>
        </div>

        {/* Call to Action */}
        {/* <div className="text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl sm:rounded-3xl p-8 sm:p-12 lg:p-16 text-white">
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">
            Ready to Transform Your Job Search?
          </h3>
          <p className="text-lg sm:text-xl mb-6 sm:mb-8 opacity-90 max-w-2xl mx-auto">
            Join thousands of professionals who have already automated their job applications and landed their dream jobs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center justify-center">
            <button className="w-full sm:w-auto px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-gray-100 transition-colors duration-200 shadow-lg">
              Start Free Trial
            </button>
            <button className="w-full sm:w-auto px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-xl hover:bg-white/10 transition-colors duration-200">
              Watch Demo
            </button>
          </div>
        </div> */}
      </div>
    </section>
  )
}

export default Solution;