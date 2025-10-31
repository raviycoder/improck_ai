'use client'
import React from "react";
import { Star, Mail, Shield, Zap, Globe, Users } from "lucide-react";
import { FeatureCard } from "../ui/feature-card";

export const FeatureCardsExample = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          Feature Cards Examples
        </h1>
        
        {/* Dark Theme Cards */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold mb-8 text-gray-900 dark:text-white">
            Dark Theme Cards
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            <FeatureCard
              title="AI-Powered Inbox"
              description="Revolutionize email management with intelligent sorting and automated responses"
              icon={Mail}
              theme="dark"
              linkText="Learn More"
              linkHref="/features/inbox"
            />
            
            <FeatureCard
              title="Advanced Security"
              description="Enterprise-grade protection with end-to-end encryption and threat detection"
              icon={Shield}
              theme="dark"
              linkText="View Security"
              linkHref="/security"
            />
            
            <FeatureCard
              title="Lightning Fast"
              description="Optimized performance with sub-second response times and smart caching"
              icon={Zap}
              theme="dark"
              linkText="See Performance"
              linkHref="/performance"
            />
          </div>
        </div>

        {/* Light Theme Cards */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold mb-8 text-gray-900 dark:text-white">
            Light Theme Cards
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            <FeatureCard
              title="Global Reach"
              description="Connect with audiences worldwide through our distributed network infrastructure"
              icon={Globe}
              theme="light"
              linkText="Explore Regions"
              linkHref="/global"
            />
            
            <FeatureCard
              title="Team Collaboration"
              description="Seamless teamwork with real-time sync, shared workspaces, and role management"
              icon={Users}
              theme="light"
              linkText="Start Collaborating"
              linkHref="/teams"
            />
            
            <FeatureCard
              title="Premium Experience"
              description="Unlock advanced features with our premium subscription and priority support"
              icon={Star}
              theme="light"
              linkText="Upgrade Now"
              linkHref="/premium"
            />
          </div>
        </div>

        {/* Custom Sized Cards */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold mb-8 text-gray-900 dark:text-white">
            Custom Sizes & Options
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
            {/* Larger card with image */}
            <FeatureCard
              title="Visual Analytics"
              description="Comprehensive dashboards with interactive charts, real-time data visualization, and customizable reporting tools that help you make informed decisions faster."
              image="/image-hero.png"
              theme="dark"
              width="400px"
              height="500px"
              linkText="View Dashboard"
              linkHref="/analytics"
            />
            
            {/* Compact card without glow */}
            <FeatureCard
              title="Minimal Design"
              description="Clean, distraction-free interface focused on essential features"
              icon={Star}
              theme="light"
              width="320px"
              height="300px"
              showGlow={false}
              interactive={false}
              linkText="Try It"
              linkHref="/minimal"
            />
          </div>
        </div>

        {/* Usage Examples */}
        <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-lg">
          <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
            Usage Examples
          </h3>
          <div className="space-y-4 text-sm text-gray-600 dark:text-gray-300">
            <div>
              <strong>Basic Usage:</strong>
              <pre className="mt-2 p-3 bg-gray-100 dark:bg-gray-700 rounded text-xs overflow-x-auto">
{`<FeatureCard
  title="Your Title"
  description="Your description"
  icon={YourIcon}
  theme="dark"
/>`}
              </pre>
            </div>
            
            <div>
              <strong>With Custom Image:</strong>
              <pre className="mt-2 p-3 bg-gray-100 dark:bg-gray-700 rounded text-xs overflow-x-auto">
{`<FeatureCard
  title="Visual Feature"
  description="Description here"
  image="/your-image.jpg"
  theme="light"
  width="400px"
  height="500px"
/>`}
              </pre>
            </div>
            
            <div>
              <strong>Minimal Card:</strong>
              <pre className="mt-2 p-3 bg-gray-100 dark:bg-gray-700 rounded text-xs overflow-x-auto">
{`<FeatureCard
  title="Simple Card"
  description="Clean design"
  showGlow={false}
  interactive={false}
  theme="light"
/>`}
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureCardsExample;