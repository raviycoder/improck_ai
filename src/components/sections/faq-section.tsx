"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    category: "Getting Started",
    question: "How do I get started?",
    answer:
      "Getting started with Improck is simple! Sign up for a free account, upload your resume, and our AI will analyze your profile. Then, set your job preferences (industry, location, salary range), and we'll start automatically applying to relevant positions. You can be up and running in less than 10 minutes!",
  },
  {
    category: "Billing",
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit cards (Visa, Mastercard, American Express), PayPal, and bank transfers for annual plans. All payments are processed securely through industry-standard encryption. You can update your payment method anytime in your account settings.",
  },
  {
    category: "Pricing",
    question: "Is there a free trial available?",
    answer:
      "Yes! We offer a 7-day free trial with full access to our Professional plan features. No credit card required to start. You'll get 50 automated applications, AI profile optimization, and real-time tracking. After the trial, you can choose the plan that best fits your needs or cancel anytime.",
  },
  {
    category: "Support",
    question: "How can I contact support?",
    answer:
      "Our support team is available 24/7 via live chat, email at support@improck.com, or through the help center in your dashboard. Professional and Enterprise users get priority support with guaranteed response times. We also have an extensive knowledge base and video tutorials to help you get the most out of Improck.",
  },
  {
    category: "Features",
    question: "How does the AI matching work?",
    answer:
      "Our AI uses advanced natural language processing to analyze your resume, skills, and work history. It then matches you with job listings that align with your experience level, career goals, and preferences. The system learns from your feedback and continuously improves its recommendations over time.",
  },
  {
    category: "Privacy",
    question: "Is my personal data safe?",
    answer:
      "Absolutely. We use bank-level encryption (AES-256) to protect your data. Your information is never shared with third parties without your explicit consent. We're GDPR compliant and undergo regular security audits. You have full control over your data and can delete your account at any time.",
  },
  {
    category: "Applications",
    question: "Can I review applications before they're sent?",
    answer:
      "Yes! You can choose between automatic mode (we apply on your behalf) or review mode (you approve each application before sending). You can also set custom filters to exclude certain companies or job types, and edit cover letters before submission.",
  },
  {
    category: "Results",
    question: "What kind of results can I expect?",
    answer:
      "On average, our users see a 5x increase in interview invitations within the first month. Results vary based on your industry, experience level, and job market conditions. Most users receive their first interview invitation within 2-3 weeks of starting with Improck.",
  },
];

const FAQSection = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-white via-blue-50/30 to-white dark:from-gray-950 dark:via-blue-950/20 dark:to-gray-950 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-900 dark:from-white dark:via-blue-200 dark:to-purple-200 bg-clip-text text-transparent mb-4 sm:mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl mx-auto">
            Find answers to common questions about our services
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-4"
        >
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <AccordionItem
                  value={`item-${index}`}
                  className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl px-6 sm:px-8 shadow-sm hover:shadow-md dark:hover:shadow-blue-900/20 transition-all duration-300"
                >
                  <AccordionTrigger className="hover:no-underline py-6">
                    <div className="flex flex-col items-start gap-2 text-left">
                      <span className="inline-block bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-600 dark:text-blue-400 text-xs font-medium px-3 py-1 rounded-full border border-blue-200 dark:border-blue-800">
                        {faq.category}
                      </span>
                      <span className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white">
                        {faq.question}
                      </span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 dark:text-gray-400 text-base leading-relaxed pb-6">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12 sm:mt-16"
        >
          <p className="text-gray-600 dark:text-gray-400 mb-6 text-base sm:text-lg">
            Still have questions?
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-semibold text-base sm:text-lg shadow-lg shadow-blue-500/25 dark:shadow-blue-900/50 transition-all duration-300"
          >
            Contact Our Team
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;