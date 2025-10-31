"use client";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { CheckCircle, Zap, Target, TrendingUp, Users, Crown } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

const plans = [
  {
    name: "Starter",
    description:
      "Perfect for job seekers who want to get started with automated applications",
    price: 29,
    yearlyPrice: 299,
    buttonText: "Start Free Trial",
    buttonVariant: "outline" as const,
    features: [
      { text: "50 automated applications/month", icon: <Zap size={20} /> },
      { text: "Basic AI profile optimization", icon: <Target size={20} /> },
      { text: "Email application tracking", icon: <TrendingUp size={20} /> },
    ],
    includes: [
      "Free trial includes:",
      "Resume analysis & optimization",
      "Cover letter templates",
      "Basic job matching",
      "Email support",
    ],
  },
  {
    name: "Professional",
    description:
      "Best value for serious job seekers who want to maximize their success rate",
    price: 79,
    yearlyPrice: 799,
    buttonText: "Get Started",
    buttonVariant: "default" as const,
    popular: true,
    features: [
      { text: "500 automated applications/month", icon: <Zap size={20} /> },
      { text: "Advanced AI matching & insights", icon: <Target size={20} /> },
      { text: "Real-time analytics dashboard", icon: <TrendingUp size={20} /> },
    ],
    includes: [
      "Everything in Starter, plus:",
      "Priority job matching",
      "Custom cover letter generation",
      "Interview preparation tools",
      "Priority support",
    ],
  },
  {
    name: "Enterprise",
    description:
      "Unlimited access for recruiters, career coaches, and large-scale job searching",
    price: 199,
    yearlyPrice: 1999,
    buttonText: "Contact Sales",
    buttonVariant: "outline" as const,
    features: [
      { text: "Unlimited applications", icon: <Zap size={20} /> },
      { text: "Team collaboration tools", icon: <Users size={20} /> },
      { text: "White-label solutions", icon: <Crown size={20} /> },
    ],
    includes: [
      "Everything in Professional, plus:",
      "Multi-user accounts",
      "Custom integrations",
      "Dedicated account manager",
      "24/7 priority support",
    ],
  },
];

const PricingSwitch = ({ onSwitch }: { onSwitch: (value: string) => void }) => {
  const [selected, setSelected] = useState("0");

  const handleSwitch = (value: string) => {
    setSelected(value);
    onSwitch(value);
  };

  return (
    <div className="flex justify-center">
      <div className="relative z-50 mx-auto flex w-fit rounded-full bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 p-1 transition-colors duration-300">
        <button
          onClick={() => handleSwitch("0")}
          className={`relative z-10 w-fit sm:h-12 h-10 rounded-full sm:px-6 px-3 sm:py-2 py-1 font-medium transition-colors ${
            selected === "0"
              ? "text-white"
              : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200"
          }`}
        >
          {selected === "0" && (
            <motion.span
              layoutId={"switch"}
              className="absolute top-0 left-0 sm:h-12 h-10 w-full rounded-full border-2 shadow-lg shadow-blue-500/20 border-blue-500 bg-gradient-to-r from-blue-600 via-blue-500 to-purple-600"
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            />
          )}
          <span className="relative">Monthly</span>
        </button>

        <button
          onClick={() => handleSwitch("1")}
          className={`relative z-10 w-fit sm:h-12 h-10 flex-shrink-0 rounded-full sm:px-6 px-3 sm:py-2 py-1 font-medium transition-colors ${
            selected === "1"
              ? "text-white"
              : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200"
          }`}
        >
          {selected === "1" && (
            <motion.span
              layoutId={"switch"}
              className="absolute top-0 left-0 sm:h-12 h-10 w-full rounded-full border-2 shadow-lg shadow-blue-500/20 border-blue-500 bg-gradient-to-r from-blue-600 via-blue-500 to-purple-600"
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            />
          )}
          <span className="relative flex items-center gap-2">
            Yearly
            <span className="rounded-full bg-green-100 px-2 py-0.5 text-xs font-medium text-green-700">
              Save 15%
            </span>
          </span>
        </button>
      </div>
    </div>
  );
};

export default function PricingSection() {
  const [isYearly, setIsYearly] = useState(false);

  const togglePricingPeriod = (value: string) =>
    setIsYearly(Number.parseInt(value) === 1);

  return (
    <section id="pricing" className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-white via-gray-50 to-white dark:from-gray-950 dark:via-gray-900 dark:to-gray-950">
      {/* Background decoration */}
      <div
        className="absolute top-0 left-[20%] right-[20%] w-[60%] h-full z-0 opacity-10 dark:opacity-5"
        style={{
          backgroundImage: `
            radial-gradient(circle at center, #3b82f6 0%, transparent 70%)
          `,
          mixBlendMode: "multiply",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6"
          >
            Choose Your{" "}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Success Plan
              </span>
              <motion.div
                className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
              />
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-2xl mx-auto text-base sm:text-lg text-gray-600 dark:text-gray-400 leading-relaxed"
          >
            Transform your job search with AI-powered automation. Choose the plan that fits your career goals and start landing interviews faster.
          </motion.p>
        </div>

        {/* Pricing Toggle */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-12"
        >
          <PricingSwitch onSwitch={togglePricingPeriod} />
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
            >
              <Card
                className={`relative h-full transition-all duration-300 hover:shadow-xl ${
                  plan.popular 
                    ? "ring-2 ring-blue-500 shadow-lg bg-gradient-to-b from-blue-50 to-white dark:from-blue-950/50 dark:to-gray-900 scale-105" 
                    : "bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700"
                }`}
              >
                <CardHeader className="text-left pb-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
                      {plan.name}
                    </h3>
                    {plan.popular && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.6 + index * 0.1 }}
                        className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg"
                      >
                        Most Popular
                      </motion.div>
                    )}
                  </div>
                  
                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                    {plan.description}
                  </p>
                  
                  <div className="flex items-baseline mb-6">
                    <span className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white">
                      ${isYearly ? plan.yearlyPrice : plan.price}
                    </span>
                    <span className="text-gray-600 dark:text-gray-400 ml-2 text-base">
                      /{isYearly ? "year" : "month"}
                    </span>
                  </div>
                </CardHeader>

                <CardContent className="pt-0">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full mb-8 py-3 sm:py-4 px-6 text-base sm:text-lg font-semibold rounded-xl transition-all duration-300 ${
                      plan.popular
                        ? "bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 shadow-lg shadow-blue-500/25 text-white"
                        : plan.buttonVariant === "outline"
                          ? "bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800 shadow-lg shadow-gray-800/25 text-white"
                          : "bg-blue-600 hover:bg-blue-700 text-white"
                    }`}
                  >
                    {plan.buttonText}
                  </motion.button>

                  {/* Main Features */}
                  <div className="space-y-4 mb-8">
                    <h4 className="font-semibold text-gray-900 dark:text-white text-base sm:text-lg">
                      Key Features:
                    </h4>
                    <ul className="space-y-3">
                      {plan.features.map((feature, featureIndex) => (
                        <motion.li
                          key={featureIndex}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.8 + featureIndex * 0.1 }}
                          className="flex items-center gap-3"
                        >
                          <div className="text-blue-500 dark:text-blue-400 flex-shrink-0">
                            {feature.icon}
                          </div>
                          <span className="text-sm sm:text-base text-gray-700 dark:text-gray-300">
                            {feature.text}
                          </span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* Included Features */}
                  <div className="pt-6 border-t border-gray-200 dark:border-gray-700">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-4 text-base sm:text-lg">
                      {plan.includes[0]}
                    </h4>
                    <ul className="space-y-3">
                      {plan.includes.slice(1).map((feature, featureIndex) => (
                        <motion.li
                          key={featureIndex}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 1.0 + featureIndex * 0.1 }}
                          className="flex items-start gap-3"
                        >
                          <div className="w-5 h-5 bg-green-100 dark:bg-green-900/30 border border-green-300 dark:border-green-700 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                            <CheckCircle className="h-3 w-3 text-green-600 dark:text-green-400" />
                          </div>
                          <span className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed">{feature}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12 sm:mt-16"
        >
          <p className="text-gray-600 mb-6 text-base sm:text-lg">
            Not sure which plan is right for you? 
            <span className="text-blue-600 font-semibold ml-1">Start with a free consultation.</span>
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white border-2 border-blue-500 text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-xl font-semibold transition-colors duration-300 shadow-md"
          >
            Schedule Free Consultation
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
