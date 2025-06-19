'use client';

import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import Image from 'next/image';
import { 
  ArrowRight, 
  Zap, 
  RefreshCw, 
  TrendingUp, 
  Sparkles, 
  Shield, 
  Users,
  ShoppingCart,
  Truck,
  Smartphone,
  Package,
  CreditCard,
  Rocket,
  MessageSquare,
  Star,
  CheckCircle2,
  Search,
  ClipboardCheck,
  Receipt,
  Clock,
  Building2,
  WifiOff,
  Headphones,
  ShieldCheck,
  Quote,
  Lock,
  Building,
  Link2,
  Scaling
} from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background via-gray-900 to-gray-950 dark:from-background dark:via-gray-900 dark:to-gray-950 text-white overflow-hidden min-h-screen">
      {/* Background Elements */}
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent pointer-events-none"></div>
      <div className="fixed inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] pointer-events-none"></div>

      {/* Hero Section with Quote */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-6xl mx-auto mb-20 md:mb-32 text-center relative z-10"
      >
        {/* <div className="flex justify-center mb-8">
          <Image
            src="/bleaum White.png" 
            alt="Bleaum.io Logo"
            width={180}
            height={48}
            priority
            className="hover:scale-105 transition-transform duration-300"
          />
        </div> */}
        
        {/* Main Quote */}
        <div className="mb-16">
          
          <h1 className="text-4xl md:text-7xl font-extrabold mb-6 text-white leading-tight drop-shadow-lg bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
            Where Retail Meets Innovation
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Transforming the way retailers operate, one smart solution at a time.
          </p>
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {[
            {
              title: "Real-Time Inventory, Real Easy",
              description: "Know exactly what's on your shelf—anytime. Run midday audits. Track shrinkage. Catch theft. No more counting blind.",
              quote: "With Bleaum, we don't wait until close to count—we count while we sell.",
              icon: <Search className="w-12 h-12 text-blue-400" />
            },
            {
              title: "Last Mile, Locked In",
              description: "Drivers get a connected app. You get smart routes, live tracking, OTP verification, and full control.",
              quote: "We went from chaos to clockwork overnight.",
              icon: <Truck className="w-12 h-12 text-blue-400" />
            },
            {
              title: "Your Branded Mobile App",
              description: "Launch a custom storefront without the custom dev bill. Live inventory, in-app payments, real-time delivery updates.",
              quote: "It's like having our own app—without the headache.",
              icon: <Smartphone className="w-12 h-12 text-blue-400" />
            },
            {
              title: "Receipts That Just Work",
              description: "Print, text, or email. Itemized, branded, tax-compliant. Fully synced with POS + inventory.",
              icon: <Receipt className="w-12 h-12 text-blue-400" />
            }
          ].map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="p-6 sm:p-8 md:p-10 bg-white/5 backdrop-filter backdrop-blur-lg rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 group"
            >
              <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">{feature.title}</h3>
              <p className="text-gray-300 mb-4">{feature.description}</p>
              {feature.quote && (
                <p className="text-blue-300 italic">"{feature.quote}"</p>
              )}
            </motion.div>
          ))}
        </div>

        {/* Why Teams Switch Section */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="w-full max-w-6xl mx-auto mt-20 p-8 sm:p-10 md:p-12 bg-white/5 dark:bg-white/5 backdrop-filter backdrop-blur-lg rounded-2xl shadow-2xl border border-white/10 relative z-10 hover:border-white/20 transition-colors duration-300"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-12 text-white text-center bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
            Why Teams Switch to Bleaum
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                text: "Onboard in 15 minutes",
                icon: <Clock className="w-6 h-6 text-blue-400" />
              },
              {
                text: "Multi-location ready",
                icon: <Building2 className="w-6 h-6 text-blue-400" />
              },
              {
                text: "Works offline",
                icon: <WifiOff className="w-6 h-6 text-blue-400" />
              },
              {
                text: "Real support, real fast",
                icon: <Headphones className="w-6 h-6 text-blue-400" />
              },
              {
                text: "Fully compliant, always",
                icon: <ShieldCheck className="w-6 h-6 text-blue-400" />
              }
            ].map((item, index) => (
              <motion.div
                key={item.text}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center space-x-4 p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors duration-300"
              >
                {item.icon}
                <span className="text-lg text-gray-300">{item.text}</span>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </motion.section>

      {/* Demo CTA Section */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="w-full max-w-6xl mx-auto mb-20 md:mb-32 p-8 sm:p-10 md:p-12 bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-600 rounded-2xl shadow-2xl text-white text-center relative z-10 hover:shadow-blue-500/25 transition-shadow duration-300"
      >
        <div className="flex justify-center mb-6">
          <Rocket className="w-16 h-16 text-white" />
        </div>
        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          Get a Live Demo
        </h2>
        <p className="text-lg mb-10 leading-relaxed">
          15 minutes is all it takes to see the difference.
      </p>
      <Link href="/demo">
          <button className={buttonVariants({ 
            variant: "secondary", 
            size: "lg", 
            className: "px-8 py-3 text-xl hover:scale-105 transition-transform duration-300 flex items-center gap-2"
          })}>
            Schedule a Demo <ArrowRight className="w-5 h-5" />
          </button>
      </Link>
      </motion.section>

      {/* Footer Tagline */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="w-full max-w-6xl mx-auto text-center text-2xl md:text-4xl font-bold text-white relative z-10"
      >
        <div className="flex items-center justify-center gap-4">
          <Star className="w-8 h-8 text-blue-400" />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
            Bleaum.io — Run Better. Sell Smarter.
          </span>
          <Star className="w-8 h-8 text-blue-400" />
        </div>
      </motion.section>

      {/* Born From the Front Lines Section */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="w-full max-w-4xl mx-auto mb-20 md:mb-32 p-8 sm:p-10 md:p-12 bg-white/5 dark:bg-white/5 backdrop-filter backdrop-blur-lg rounded-2xl shadow-2xl border border-white/10 relative z-10 hover:border-white/20 transition-colors duration-300 text-center"
      >
        <div className="flex justify-center mb-6">
          <Quote className="w-16 h-16 text-blue-400" />
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
          Born From the Front Lines
        </h2>
        <p className="text-lg text-gray-300 mb-6 leading-relaxed italic max-w-2xl mx-auto">
          We started in eComm. We've seen the chaos—broken tools, rising costs, no visibility.
          So we built Bleaum: a system that gives small dispensaries big-league tools—without the bloat.
        </p>
        <p className="text-blue-300 font-semibold">
          — Antonio Panella, Founder
        </p>
      </motion.section>

      {/* Secure & Compliant Section */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="w-full max-w-6xl mx-auto mb-20 md:mb-32 p-8 sm:p-10 md:p-12 bg-white/5 dark:bg-white/5 backdrop-filter backdrop-blur-lg rounded-2xl shadow-2xl border border-white/10 relative z-10 hover:border-white/20 transition-colors duration-300"
      >
        <div className="flex justify-center mb-8">
          <Lock className="w-16 h-16 text-blue-400" />
        </div>
        <h2 className="text-3xl md:text-5xl font-bold mb-8 text-white bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300 text-center">
          Secure & Compliant, End to End
        </h2>
        <ul className="list-none space-y-4 text-lg text-gray-300 max-w-2xl mx-auto">
          {[ 
            "Metrc, BioTrack & state integrations",
            "Encrypted + backed-up data",
            "Full audit trails & staff permissions"
          ].map((item, index) => (
            <motion.li
              key={item}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex items-center space-x-3"
            >
              <CheckCircle2 className="w-5 h-5 text-blue-400" />
              <span>{item}</span>
            </motion.li>
          ))}
        </ul>
      </motion.section>

      {/* Industries We Serve Section */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="w-full max-w-6xl mx-auto mb-20 md:mb-32 p-8 sm:p-10 md:p-12 bg-white/5 dark:bg-white/5 backdrop-filter backdrop-blur-lg rounded-2xl shadow-2xl border border-white/10 relative z-10 hover:border-white/20 transition-colors duration-300 text-center"
      >
        <div className="flex justify-center mb-8">
          <Building className="w-16 h-16 text-blue-400" />
        </div>
        <h2 className="text-3xl md:text-5xl font-bold mb-8 text-white bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
          Industries We Serve
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-lg text-gray-300 max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }} viewport={{ once: true }} className="flex items-center justify-center space-x-2 p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors duration-300">
             <ShoppingCart className="w-5 h-5 text-blue-400"/><span>Cannabis Retail & Delivery</span>
          </motion.div>
           <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} viewport={{ once: true }} className="flex items-center justify-center space-x-2 p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors duration-300">
            <MessageSquare className="w-5 h-5 text-blue-400"/> <span>Pharmacies & Wellness Retail</span>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }} viewport={{ once: true }} className="flex items-center justify-center space-x-2 p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors duration-300">
            <Building2 className="w-5 h-5 text-blue-400"/><span>High-Compliance General Retail</span>
          </motion.div>
        </div>
      </motion.section>

      {/* Integrations Section */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="w-full max-w-6xl mx-auto mb-20 md:mb-32 p-8 sm:p-10 md:p-12 bg-white/5 dark:bg-white/5 backdrop-filter backdrop-blur-lg rounded-2xl shadow-2xl border border-white/10 relative z-10 hover:border-white/20 transition-colors duration-300 text-center"
      >
        <div className="flex justify-center mb-8">
          <Link2 className="w-16 h-16 text-blue-400" />
        </div>
        <h2 className="text-3xl md:text-5xl font-bold mb-8 text-white bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
          Integrations That Just Work
        </h2>
        <div className="flex flex-wrap justify-center gap-6 text-lg font-medium text-gray-300">
          {[
            "QuickBooks",
            "Weedmaps",
            "Leafly",
            "Custom API Access"
          ].map((item, index) => (
             <motion.span
              key={item}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="px-6 py-3 bg-blue-600/30 text-blue-200 rounded-full shadow-inner hover:bg-blue-600/40 transition-colors duration-300"
            >
              {item}
            </motion.span>
          ))}
        </div>
      </motion.section>

      {/* Track Everything Section */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="w-full max-w-6xl mx-auto mb-20 md:mb-32 p-8 sm:p-10 md:p-12 bg-white/5 dark:bg-white/5 backdrop-filter backdrop-blur-lg rounded-2xl shadow-2xl border border-white/10 relative z-10 hover:border-white/20 transition-colors duration-300 text-center"
      >
        <div className="flex justify-center mb-8">
          <Scaling className="w-16 h-16 text-blue-400" />
        </div>
        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
          Track Everything. Scale Easily.
        </h2>
        <p className="text-xl font-semibold text-blue-400 mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">
          From seed to sale, Bleaum grows with you.
        </p>
         <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
          One shop or multi-state—stay lean, fast, and focused.
        </p>
      </motion.section>

      {/* What Customers Say Section - Auto-scrolling horizontal */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="w-full max-w-7xl mx-auto mb-20 md:mb-32 relative z-10"
      >
        <div className="text-center mb-12">
          <div className="flex justify-center mb-8">
            <MessageSquare className="w-16 h-16 text-blue-400" />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-8 text-white bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
            What Customers Say
          </h2>
        </div>
        
        {/* Scrolling container */}
        <div className="relative overflow-hidden">
          {/* Gradient overlays for smooth fade effect */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-gray-950 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-gray-950 to-transparent z-10 pointer-events-none"></div>
          
          {/* Auto-scrolling testimonials */}
          <motion.div
            className="flex gap-8"
            animate={{
              x: [0, -100 * 6] // Adjust based on number of testimonials
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 30, // Adjust speed here (higher = slower)
                ease: "linear",
              },
            }}
          >
            {/* Duplicate testimonials for seamless loop */}
            {[
              {
                quote: "We used to spend 4 hours doing inventory. Now it's 20 minutes—midday.",
                author: "Sarah Chen",
                role: "Store Manager",
                company: "Green Valley Dispensary"
              },
              {
                quote: "Our drivers love it. And so do our customers. Real-time tracking changed everything.",
                author: "Mike Rodriguez",
                role: "Operations Director", 
                company: "Swift Cannabis Delivery"
              },
              {
                quote: "We're never switching back. The compliance features alone saved us from three audits.",
                author: "Jessica Taylor",
                role: "Owner",
                company: "Harmony Wellness"
              },
              {
                quote: "Onboarding was literally 15 minutes. We were selling the same day.",
                author: "David Kim",
                role: "Founder",
                company: "Urban Leaf Co."
              },
              {
                quote: "The mobile app brought in 40% more customers in our first month.",
                author: "Lisa Wang",
                role: "Marketing Manager",
                company: "Peak Dispensary"
              },
              {
                quote: "Finally, a POS that actually works offline. Game changer for our location.",
                author: "Alex Thompson",
                role: "Store Owner",
                company: "Mountain High Cannabis"
              },
              // Duplicate for seamless loop
              {
                quote: "We used to spend 4 hours doing inventory. Now it's 20 minutes—midday.",
                author: "Sarah Chen",
                role: "Store Manager",
                company: "Green Valley Dispensary"
              },
              {
                quote: "Our drivers love it. And so do our customers. Real-time tracking changed everything.",
                author: "Mike Rodriguez",
                role: "Operations Director",
                company: "Swift Cannabis Delivery"
              },
              {
                quote: "We're never switching back. The compliance features alone saved us from three audits.",
                author: "Jessica Taylor",
                role: "Owner",
                company: "Harmony Wellness"
              },
              {
                quote: "Onboarding was literally 15 minutes. We were selling the same day.",
                author: "David Kim",
                role: "Founder",
                company: "Urban Leaf Co."
              },
              {
                quote: "The mobile app brought in 40% more customers in our first month.",
                author: "Lisa Wang",
                role: "Marketing Manager",
                company: "Peak Dispensary"
              },
              {
                quote: "Finally, a POS that actually works offline. Game changer for our location.",
                author: "Alex Thompson",
                role: "Store Owner",
                company: "Mountain High Cannabis"
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-80 p-6 bg-white/5 backdrop-filter backdrop-blur-lg rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300"
              >
                <div className="flex justify-center mb-4">
                  <Quote className="w-8 h-8 text-blue-400" />
                </div>
                <p className="text-lg text-gray-300 italic mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </p>
                <div className="text-center">
                  <p className="text-white font-semibold">{testimonial.author}</p>
                  <p className="text-blue-300 text-sm">{testimonial.role}</p>
                  <p className="text-gray-400 text-sm">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Talk to Us Section */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="w-full max-w-6xl mx-auto mb-20 md:mb-32 p-8 sm:p-10 md:p-12 bg-white/5 dark:bg-white/5 backdrop-filter backdrop-blur-lg rounded-2xl shadow-2xl border border-white/10 relative z-10 hover:border-white/20 transition-colors duration-300 text-center"
      >
        <div className="flex justify-center mb-8">
          <MessageSquare className="w-16 h-16 text-blue-400" />
      </div>

        <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
          ✉ Talk to Us
        </h2>
        
        <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
          We're real people. We're here to help.
        </p>
        
        {/* Contact Options */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
          {[
            {
              title: "Contact Us",
              description: "Get in touch with our team",
              icon: <MessageSquare className="w-8 h-8 text-blue-400" />,
              href: "/contact"
            },
            {
              title: "Support Portal", 
              description: "Find answers and get help",
              icon: <Headphones className="w-8 h-8 text-blue-400" />,
              href: "/support"
            },
            {
              title: "Partner With Us",
              description: "Explore partnership opportunities", 
              icon: <Users className="w-8 h-8 text-blue-400" />,
              href: "/partners"
            }
          ].map((option, index) => (
            <motion.div
              key={option.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <Link href={option.href}>
                <div className="p-6 bg-white/5 backdrop-filter backdrop-blur-lg rounded-xl border border-white/10 hover:border-blue-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 hover:bg-white/10 cursor-pointer transform hover:scale-105">
                  <div className="flex justify-center mb-4 transform group-hover:scale-110 transition-transform duration-300">
                    {option.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-white group-hover:text-blue-300 transition-colors duration-300">
                    → {option.title}
                  </h3>
                  <p className="text-gray-300 text-sm">
                    {option.description}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
        
        {/* Footer Tagline */}
        <div className="pt-8 border-t border-white/10">
          <p className="text-2xl font-bold text-white bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
            Bleaum.io — Run Better. Sell Smarter.
          </p>
        </div>
      </motion.section>
    </div>
  );
} 