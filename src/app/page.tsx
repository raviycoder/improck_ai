import HeroSection from "@/components/sections/hero-section";
import IssueSection from "@/components/sections/issue-section";
import Solution from "@/components/sections/solution-section";
import FeaturesSection from "@/components/sections/feature-section";
import PricingSection from "@/components/sections/price-section";
import Testimonials from "@/components/sections/testimonials-section";
import FAQSection from "@/components/sections/faq-section";
import CallToSection from "@/components/sections/call-to-section";
import FooterSection from "@/components/sections/footer-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <IssueSection />
      <Solution />
      <FeaturesSection />
      <Testimonials />
      <PricingSection />
      <FAQSection />
      <CallToSection />
      <FooterSection />
    </>
  );
}
