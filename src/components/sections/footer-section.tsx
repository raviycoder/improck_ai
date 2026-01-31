"use client";

import React from "react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import {
  Mail,
  MapPin,
  Phone,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Send,
  Sun,
  Moon,
} from "lucide-react";
import ImprockLogo from "../svg/improck-logo";

const FooterSection = () => {
  const { theme, setTheme } = useTheme();
  const [email, setEmail] = React.useState("");
  const [mounted, setMounted] = React.useState(false);

  // useEffect only runs on the client, so now we can safely show the UI
  React.useEffect(() => {
    setMounted(true);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Newsletter signup:", email);
    setEmail("");
  };

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const footerLinks = {
    product: [
      { name: "Features", href: "#features" },
      { name: "Pricing", href: "#pricing" },
      { name: "Testimonials", href: "#testimonials" },
      { name: "FAQ", href: "#faq" },
    ],
    company: [
      { name: "About Us", href: "#about" },
      { name: "Careers", href: "#careers" },
      { name: "Blog", href: "#blog" },
      { name: "Press Kit", href: "#press" },
    ],
    support: [
      { name: "Help Center", href: "#help" },
      { name: "Contact Us", href: "#contact" },
      { name: "Status", href: "#status" },
      { name: "API Docs", href: "#api" },
    ],
    legal: [
      { name: "Privacy Policy", href: "#privacy" },
      { name: "Terms of Service", href: "#terms" },
      { name: "Cookie Settings", href: "#cookies" },
      { name: "GDPR", href: "#gdpr" },
    ],
  };

  const socialLinks = [
    { name: "Facebook", icon: Facebook, href: "https://facebook.com" },
    { name: "Twitter", icon: Twitter, href: "https://twitter.com" },
    { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com" },
    { name: "Instagram", icon: Instagram, href: "https://instagram.com" },
  ];

  return (
    <footer className="relative bg-white dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800 transition-colors duration-300">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-12">
          {/* Company Info & Newsletter */}
          <div className="lg:col-span-2 space-y-6">
            <div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-3">
                <ImprockLogo />
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                Automate your job applications with AI-powered technology. Land
                your dream job faster while we handle the repetitive work.
              </p>
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">
                Stay Connected
              </h4>
              <p className="text-xs text-gray-600 dark:text-gray-400 mb-3">
                Get updates on new features and exclusive offers.
              </p>
              <form onSubmit={handleSubmit} className="flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="flex-1 px-4 py-2.5 rounded-lg bg-gray-100 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-500 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-600 transition-all"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="p-2.5 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 transition-all"
                >
                  <Send className="w-5 h-5" />
                </motion.button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                <MapPin className="w-4 h-4 text-blue-600" />
                <span>San Francisco, CA 94105</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                <Phone className="w-4 h-4 text-blue-600" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                <Mail className="w-4 h-4 text-blue-600" />
                <span>hello@improck.com</span>
              </div>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-4">
              Product
            </h4>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-4">
              Company
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-4">
              Support
            </h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-4">
              Legal
            </h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Copyright */}
            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3 text-center md:text-left">
              <p className="text-sm text-gray-600 dark:text-gray-400">
                © {new Date().getFullYear()} Improck. All rights reserved. Made
                with ❤️ for job seekers.
              </p>
              <span className="hidden sm:inline text-gray-400 dark:text-gray-600">•</span>
              <p className="text-xs text-gray-500 dark:text-gray-500">
                Built by{" "}
                <a
                  href="https://raviyadav.me"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
                  aria-label="Visit Ravi Yadav's portfolio"
                >
                  Ravi Yadav
                </a>
              </p>
            </div>

            {/* Social Links & Theme Toggle */}
            <div className="flex items-center gap-6">
              {/* Social Icons */}
              <div className="flex items-center gap-3">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="p-2 rounded-lg bg-gray-100 dark:bg-gray-900 text-gray-600 dark:text-gray-400 hover:bg-blue-100 dark:hover:bg-blue-900/30 hover:text-blue-600 dark:hover:text-blue-400 transition-all"
                      aria-label={social.name}
                    >
                      <Icon className="w-4 h-4" />
                    </motion.a>
                  );
                })}
              </div>

              {/* Theme Toggle */}
              {mounted && (
                <motion.button
                  onClick={toggleTheme}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative p-2.5 rounded-lg bg-gray-100 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 transition-all overflow-hidden group"
                  aria-label="Toggle theme"
                >
                  <div className="relative w-5 h-5">
                    <Sun
                      className={`absolute inset-0 w-5 h-5 text-yellow-500 transition-all duration-300 ${
                        theme === "dark"
                          ? "rotate-90 scale-0 opacity-0"
                          : "rotate-0 scale-100 opacity-100"
                      }`}
                    />
                    <Moon
                      className={`absolute inset-0 w-5 h-5 text-blue-500 transition-all duration-300 ${
                        theme === "dark"
                          ? "rotate-0 scale-100 opacity-100"
                          : "-rotate-90 scale-0 opacity-0"
                      }`}
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.button>
              )}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
