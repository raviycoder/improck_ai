"use client";
import { motion } from "motion/react";
import { TestimonialsColumn } from "../testimonials-columns";

const testimonials = [
  {
    text: "Improck helped me land my dream job in just 3 weeks! The AI automatically applied to 150+ positions while I focused on interview prep. Game changer!",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
    name: "Sarah Johnson",
    role: "Software Engineer at Google",
  },
  {
    text: "After months of manual job applications with no luck, Improck got me 12 interviews in the first month. The automated system is incredibly smart.",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
    name: "Michael Chen",
    role: "Data Scientist at Microsoft",
  },
  {
    text: "The AI profile optimization was spot on. It identified skills I didn't even highlight and matched me with perfect roles. Worth every penny!",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
    name: "Emily Rodriguez",
    role: "Marketing Manager at Adobe",
  },
  {
    text: "As a recent graduate, job hunting was overwhelming. Improck automated everything and I received my first offer within 2 weeks!",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
    name: "David Park",
    role: "Product Manager at Spotify",
  },
  {
    text: "The real-time analytics showed me exactly what was working. I could track my application success rate and optimize my profile accordingly.",
    image: "https://randomuser.me/api/portraits/women/5.jpg",
    name: "Jessica Williams",
    role: "UX Designer at Airbnb",
  },
  {
    text: "Switching careers felt impossible until Improck. The AI matched my transferable skills to new industries I never considered. Amazing!",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
    name: "Amanda Taylor",
    role: "Business Analyst at Tesla",
  },
  {
    text: "The automated cover letter generation saved me hours. Each one was perfectly tailored to the job description. Brilliant technology!",
    image: "https://randomuser.me/api/portraits/men/7.jpg",
    name: "James Wilson",
    role: "Sales Director at Salesforce",
  },
  {
    text: "I was skeptical about AI job hunting, but Improck's results speak for themselves. 200+ applications, 15 interviews, 3 offers. Incredible!",
    image: "https://randomuser.me/api/portraits/women/8.jpg",
    name: "Lisa Thompson",
    role: "HR Director at Netflix",
  },
  {
    text: "The 24/7 automation meant I was applying to jobs while I slept. Woke up to interview invitations multiple times. This is the future!",
    image: "https://randomuser.me/api/portraits/men/9.jpg",
    name: "Robert Davis",
    role: "DevOps Engineer at Amazon",
  },
];


const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);


const Testimonials = () => {
  return (
    <section id="testimonials" className="relative py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-white via-gray-50 to-white dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 overflow-hidden">

      <div className="container z-10 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-4xl mx-auto text-center mb-12 sm:mb-16"
        >
          <div className="flex justify-center mb-4">
            <div className="bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-800 py-2 px-4 rounded-full text-sm font-medium transition-colors duration-300">
              Success Stories
            </div>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
            Loved by Job Seekers
            <span className="block mt-2">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Worldwide
              </span>
            </span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-3xl transition-colors duration-300">
            Join thousands of professionals who transformed their job search with Improck&apos;s AI-powered automation.
          </p>
        </motion.div>

        <div className="flex justify-center gap-4 sm:gap-6 lg:gap-8 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[740px] overflow-hidden">
          <TestimonialsColumn 
            testimonials={firstColumn} 
            duration={15}
            pauseOnHover={true}  // Pause on hover
          />
          <TestimonialsColumn 
            testimonials={secondColumn} 
            className="hidden md:block" 
            duration={19}
            pauseOnHover={true}  // Pause on hover
          />
          <TestimonialsColumn 
            testimonials={thirdColumn} 
            className="hidden lg:block" 
            duration={17}
            pauseOnHover={true}  // Pause on hover
          />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;