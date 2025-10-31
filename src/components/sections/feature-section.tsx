import { cn } from "@/lib/utils";
import {
  Brain,
  Rocket,
  Shield,
  Target,
  BarChart3,
  Clock,
} from "lucide-react";

export function FeaturesSection() {
  const features = [
    {
      title: "AI-Powered Profile Analysis",
      description:
        "Our advanced AI analyzes your resume, skills, and career goals to match you with the perfect job opportunities automatically.",
      icon: <Brain />,
    },
    {
      title: "Automated Applications",
      description:
        "Apply to hundreds of relevant jobs with a single click. Our system fills out applications and customizes cover letters for each position.",
      icon: <Rocket />,
    },
    {
      title: "Privacy & Security First",
      description:
        "Your personal data is encrypted and secure. We never share your information without your explicit consent.",
      icon: <Shield />,
    },
    {
      title: "Smart Job Matching",
      description:
        "Advanced algorithms match your profile with jobs that align with your skills, experience, and salary expectations.",
      icon: <Target />,
    },
    {
      title: "Real-time Analytics",
      description:
        "Track application status, response rates, and get insights to optimize your job search strategy with detailed analytics.",
      icon: <BarChart3 />,
    },
    {
      title: "24/7 Automation",
      description:
        "Your job search never stops. Our system works around the clock to find and apply to new opportunities while you sleep.",
      icon: <Clock />,
    },
  ];

  return (
    <section id="features" className="py-16 sm:py-20 lg:py-24 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
            Powerful Features for Job Seekers
          </h2>
          <p className="max-w-3xl mx-auto text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
            Discover how Improck transforms your job search with cutting-edge technology and intelligent automation.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 relative z-10 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <Feature key={feature.title} {...feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r py-10 relative group/feature dark:border-neutral-800 border-neutral-200",
        (index === 0 || index === 3) && "lg:border-l dark:border-neutral-800 border-neutral-200",
        index < 3 && "lg:border-b dark:border-neutral-800 border-neutral-200"
      )}
    >
      {/* Hover effect for top row */}
      {index < 3 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      {/* Hover effect for bottom row */}
      {index >= 3 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      
      {/* Icon */}
      <div className="mb-4 relative z-10 px-6 sm:px-8 lg:px-10 text-neutral-600 dark:text-neutral-400 text-2xl sm:text-3xl">
        {icon}
      </div>
      
      {/* Title */}
      <div className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 relative z-10 px-6 sm:px-8 lg:px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
          {title}
        </span>
      </div>
      
      {/* Description */}
      <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-6 sm:px-8 lg:px-10 leading-relaxed">
        {description}
      </p>
    </div>
  );
};

export default FeaturesSection;
