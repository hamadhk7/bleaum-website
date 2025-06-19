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
  Scaling,
  Bell,
  Monitor,
  Fingerprint,
  ScrollText,
  AlertCircle,
  HardDrive,
  Play,
  Eye,
  MapPin,
  Mail,
  Phone,
} from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#010a1a] overflow-hidden">
      {/* Global Background Elements */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[#010a1a]"></div>
        <div className="absolute inset-0 bg-gradient-radial from-blue-900/20 via-transparent to-transparent"></div>
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-32 bg-[#010a1a]">
        {/* Hero Background */}
        <div className="absolute inset-0 bg-[#010a1a]"></div>
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(59,130,246,0.08)_50%,transparent_75%)] bg-[length:20px_20px]"></div>
        </div>
        
        {/* Floating geometric shapes */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-blue-400/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-cyan-400/10 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-blue-500/10 rounded-full blur-xl animate-pulse delay-2000"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-5xl mx-auto"
            >
              <div className="mb-8">
                <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Bleaum.io</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                Where Retail Runs{' '}
                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Smart
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
                Built for operators. Loved by teams. Trusted by growing retailers.
              </p>
              
              <p className="text-lg text-blue-200 mb-12 font-medium">
                Everything you need. Nothing you don't.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
                <Link href="/demo">
                  <button className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 flex items-center gap-2">
                    Get a Live Demo <ArrowRight className="w-5 h-5 text-white" />
                  </button>
                </Link>
                <button className="border-2 border-blue-500 text-blue-200 px-8 py-4 rounded-xl text-lg font-semibold hover:border-cyan-400 hover:text-cyan-300 transition-all duration-300 flex items-center gap-2">
                  <Play className="w-5 h-5 text-blue-400" /> Watch Video
                </button>
              </div>

              {/* Feature Tags */}
              <div className="flex flex-wrap justify-center gap-3 text-sm font-medium text-white">
                {["Point of Sale", "Last Mile Delivery", "Mobile App", "Inventory", "Payments"].map((feature, index) => (
                  <span key={feature} className="px-4 py-2 bg-blue-900/60 text-blue-200 border border-blue-700 rounded-full shadow-sm">
                    {feature}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* All-in-One Platform Section */}
      <section className="py-24 relative bg-[#010a1a]">
        {/* Section Background */}
        <div className="absolute inset-0 bg-[#010a1a]"></div>
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_25%,rgba(59,130,246,0.03)_50%,transparent_75%)] bg-[length:40px_40px]"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              The All-in-One Platform for Retailers
            </h2>
            <p className="text-xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
              From sales to delivery, training to inventory—Bleaum keeps everything connected, clean, and customizable.
            </p>
            <p className="text-lg font-semibold text-blue-400 mt-4">
              Run smarter. Move faster. Stay in control.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Built Different",
                description: "Everything you need in one seamless platform. No more juggling multiple tools.",
                icon: <Zap className="w-12 h-12 text-blue-400" />
              },
              {
                title: "Built for You", 
                description: "Customizable to your workflow. Scalable to your growth. Simple to use.",
                icon: <Users className="w-12 h-12 text-blue-400" />
              },
              {
                title: "Built to Last",
                description: "Reliable, secure, and constantly improving. Your business deserves better.",
                icon: <Shield className="w-12 h-12 text-blue-400" />
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-[#101a32]/80 backdrop-blur-md border border-blue-900 rounded-2xl p-8 hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-300 group text-center"
              >
                <div className="mb-6 group-hover:scale-110 transition-transform duration-300 flex justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Real-Time Inventory Section */}
      <section className="py-24 relative">
        {/* Section Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-cyan-50/50"></div>
        <div className="absolute inset-0 bg-gradient-radial from-blue-400/5 via-transparent to-transparent"></div>
        <div className="absolute top-10 right-10 w-32 h-32 bg-blue-400/5 rounded-full blur-2xl"></div>
        <div className="absolute bottom-10 left-10 w-24 h-24 bg-cyan-400/5 rounded-full blur-2xl"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
    
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Real-Time Inventory,{' '}
                <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                  Real Easy
                </span>
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Know exactly what's on your shelf—anytime.
              </p>
              
              <div className="space-y-4 mb-8">
                {[
                  "Run midday audits",
                  "Track shrinkage", 
                  "Catch theft",
                  "No more counting blind"
                ].map((feature, index) => (
                  <div key={feature} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-blue-500 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-blue-200/50 shadow-lg">
                <Quote className="w-8 h-8 text-blue-400 mb-4" />
                <p className="text-gray-700 italic text-lg">
                  "With Bleaum, we don't wait until close to count—we count while we sell."
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl p-8 text-white shadow-2xl">
                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                    <Eye className="w-8 h-8 text-white mx-auto mb-3" />
                    <div className="text-2xl font-bold mb-1">Live</div>
                    <div className="text-blue-100 text-sm">Inventory View</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                    <Zap className="w-8 h-8 text-white mx-auto mb-3" />
                    <div className="text-2xl font-bold mb-1">Instant</div>
                    <div className="text-blue-100 text-sm">Updates</div>
                  </div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-white font-semibold">Current Stock Levels</span>
                    <span className="bg-green-400 text-green-900 px-2 py-1 rounded text-xs font-bold">LIVE</span>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-blue-100">Product A</span>
                      <span className="text-white font-semibold">24 units</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-blue-100">Product B</span>
                      <span className="text-white font-semibold">12 units</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-blue-100">Product C</span>
                      <span className="text-yellow-300 font-semibold">3 units ⚠️</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Last Mile Delivery Section */}
      <section className="py-24 relative bg-[#010a1a]">
        {/* Section Background */}
        <div className="absolute inset-0 bg-[#010a1a]"></div>
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-[linear-gradient(135deg,transparent_25%,rgba(6,182,212,0.03)_50%,transparent_75%)] bg-[length:60px_60px]"></div>
        </div>
        <div className="absolute top-20 left-20 w-20 h-20 bg-cyan-400/5 rounded-full blur-xl"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <div className="bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl p-8 text-white shadow-2xl">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-6">
                  <MapPin className="w-12 h-12 text-white mb-4" />
                  <h3 className="text-xl font-bold mb-2">Smart Routing</h3>
                  <p className="text-blue-100">Optimized delivery routes in real-time</p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                    <div className="text-2xl font-bold mb-1">OTP</div>
                    <div className="text-blue-100 text-sm">Verification</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                    <div className="text-2xl font-bold mb-1">Live</div>
                    <div className="text-blue-100 text-sm">Tracking</div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
     
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Last Mile,{' '}
                <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                  Locked In
                </span>
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Drivers get a connected app. You get smart routes, live tracking, OTP verification, and full control.
              </p>

              <div className="bg-gradient-to-br from-blue-50/80 to-cyan-50/80 backdrop-blur-sm rounded-xl p-6 border border-blue-200/50 mb-8">
                <Quote className="w-8 h-8 text-blue-400 mb-4" />
                <p className="text-gray-700 italic text-lg">
                  "We went from chaos to clockwork overnight."
                </p>
              </div>

              <div className="space-y-4">
                {[
                  "Connected driver app",
                  "Smart route optimization", 
                  "Real-time tracking",
                  "OTP verification system"
                ].map((feature, index) => (
                  <div key={feature} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-blue-500 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mobile App Section */}
      <section className="py-24 relative">
        {/* Section Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-cyan-50/50"></div>
        <div className="absolute inset-0 bg-gradient-radial from-cyan-400/8 via-transparent to-transparent"></div>
        <div className="absolute bottom-20 right-20 w-28 h-28 bg-blue-400/5 rounded-full blur-2xl"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Your Branded{' '}
                <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                  Mobile App
                </span>
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Launch a custom storefront without the custom dev bill.
              </p>
              
              <div className="space-y-4 mb-8">
                {[
                  "Live inventory sync",
                  "In-app payments", 
                  "Real-time delivery updates",
                  "Custom branding"
                ].map((feature, index) => (
                  <div key={feature} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-blue-500 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-blue-200/50 shadow-lg">
                <Quote className="w-8 h-8 text-blue-400 mb-4" />
                <p className="text-gray-700 italic text-lg">
                  "It's like having our own app—without the headache."
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl p-8 text-white shadow-2xl">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-6">
                  <Smartphone className="w-12 h-12 text-white mb-4" />
                  <h3 className="text-xl font-bold mb-2">Native Mobile Experience</h3>
                  <p className="text-blue-100">iOS & Android ready</p>
                </div>
                <div className="space-y-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 flex items-center gap-4">
                    <ShoppingCart className="w-6 h-6 text-white" />
                    <span className="text-white">Seamless shopping cart</span>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 flex items-center gap-4">
                    <CreditCard className="w-6 h-6 text-white" />
                    <span className="text-white">Secure payments</span>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 flex items-center gap-4">
                    <Bell className="w-6 h-6 text-white" />
                    <span className="text-white">Push notifications</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Receipts Section */}
      <section className="py-24 relative bg-[#010a1a]">
        {/* Section Background */}
        <div className="absolute inset-0 bg-[#010a1a]"></div>
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_40%,rgba(59,130,246,0.02)_50%,transparent_60%)] bg-[length:80px_80px]"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <div className="bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl p-8 text-white shadow-2xl">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-6">
                  <Receipt className="w-12 h-12 text-white mb-4" />
                  <h3 className="text-xl font-bold mb-2">Smart Receipts</h3>
                  <p className="text-blue-100">Print, text, or email automatically</p>
                </div>
                <div className="space-y-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                    <div className="text-white font-semibold mb-2">Receipt Options:</div>
                    <div className="grid grid-cols-3 gap-2 text-center text-sm">
                      <div className="bg-white/10 rounded p-2">Print</div>
                      <div className="bg-white/10 rounded p-2">Text</div>
                      <div className="bg-white/10 rounded p-2">Email</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
            
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Receipts That{' '}
                <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                  Just Work
                </span>
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Print, text, or email. Itemized, branded, tax-compliant.
              </p>

              <div className="space-y-4">
                {[
                  "Fully synced with POS + inventory",
                  "Custom branding options", 
                  "Tax compliance built-in",
                  "Multiple delivery methods"
                ].map((feature, index) => (
                  <div key={feature} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-blue-500 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Teams Switch */}
      <section className="py-24 relative">
        {/* Section Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-cyan-50/50"></div>
        <div className="absolute inset-0 bg-gradient-radial from-blue-400/5 via-transparent to-transparent"></div>
        <div className="absolute top-10 left-1/4 w-16 h-16 bg-blue-400/5 rounded-full blur-xl"></div>
        <div className="absolute bottom-10 right-1/4 w-20 h-20 bg-cyan-400/5 rounded-full blur-xl"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Teams Switch to Bleaum
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See why retailers choose Bleaum over the competition
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Onboard in 15 minutes",
                icon: <Clock className="w-8 h-8 text-blue-500" />,
                description: "Get up and running fast"
              },
              {
                title: "Multi-location ready",
                icon: <Building2 className="w-8 h-8 text-blue-500" />,
                description: "Scale across locations"
              },
              {
                title: "Works offline",
                icon: <WifiOff className="w-8 h-8 text-blue-500" />,
                description: "Never miss a sale"
              },
              {
                title: "Real support, real fast",
                icon: <Headphones className="w-8 h-8 text-blue-500" />,
                description: "Human help when you need it"
              },
              {
                title: "Fully compliant, always",
                icon: <ShieldCheck className="w-8 h-8 text-blue-500" />,
                description: "Stay audit-ready 24/7"
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/70 backdrop-blur-sm border border-blue-200/50 rounded-2xl p-8 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 text-center"
              >
                <div className="bg-blue-100/70 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Born From the Front Lines */}
      <section className="py-24 relative bg-[#010a1a]">
        {/* Section Background */}
        <div className="absolute inset-0 bg-[#010a1a]"></div>
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_30%,rgba(6,182,212,0.02)_50%,transparent_70%)] bg-[length:100px_100px]"></div>
        </div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Born From the{' '}
              <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                Front Lines
              </span>
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
              We started in eComm. We've seen the chaos—broken tools, rising costs, no visibility. 
              So we built Bleaum: a system that gives small dispensaries big-league tools—without the bloat.
            </p>

            <div className="bg-gradient-to-br from-blue-50/80 to-cyan-50/80 backdrop-blur-sm rounded-2xl p-8 border border-blue-200/50 max-w-2xl mx-auto">
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">AP</span>
                </div>
                <div className="text-left">
                  <h3 className="font-bold text-gray-900">Antonio Panella</h3>
                  <p className="text-blue-600">Founder</p>
                </div>
              </div>
              <Quote className="w-8 h-8 text-blue-400 mx-auto mb-4" />
              <p className="text-gray-700 italic text-lg leading-relaxed">
                Every feature we build comes from real problems we've solved in the field. That's what makes Bleaum different.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Secure & Compliant */}
      <section className="py-24 relative">
        {/* Section Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-cyan-50/50"></div>
        <div className="absolute inset-0 bg-gradient-radial from-blue-400/6 via-transparent to-transparent"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
  
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Secure & Compliant,{' '}
              <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                End to End
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                title: "Metrc, BioTrack & state integrations",
                icon: <Link2 className="w-8 h-8 text-blue-500" />
              },
              {
                title: "Encrypted + backed-up data",
                icon: <Lock className="w-8 h-8 text-blue-500" />
              },
              {
                title: "Full audit trails & staff permissions",
                icon: <ScrollText className="w-8 h-8 text-blue-500" />
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/70 backdrop-blur-sm border border-blue-200/50 rounded-2xl p-8 shadow-lg text-center"
              >
                <div className="bg-blue-100/70 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  {feature.icon}
                </div>
                <p className="text-gray-700 font-semibold">{feature.title}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-24 relative bg-[#010a1a]">
        {/* Section Background */}
        <div className="absolute inset-0 bg-[#010a1a]"></div>
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_35%,rgba(59,130,246,0.02)_50%,transparent_65%)] bg-[length:120px_120px]"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
         
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Industries We Serve
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Cannabis Retail & Delivery",
                icon: <ShoppingCart className="w-12 h-12 text-blue-500" />
              },
              {
                title: "Pharmacies & Wellness Retail",
                icon: <Shield className="w-12 h-12 text-blue-500" />
              },
              {
                title: "High-Compliance General Retail", 
                icon: <Building2 className="w-12 h-12 text-blue-500" />
              }
            ].map((industry, index) => (
              <motion.div
                key={industry.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/70 backdrop-blur-sm border border-blue-200/50 rounded-2xl p-8 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 text-center"
              >
                <div className="mb-6">
                  {industry.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900">{industry.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Track Everything Section */}
      <section className="py-24 relative">
        {/* Section Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-cyan-50/50"></div>
        <div className="absolute inset-0 bg-gradient-radial from-cyan-400/6 via-transparent to-transparent"></div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Track Everything.{' '}
              <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                Scale Easily.
              </span>
            </h2>
            <p className="text-xl font-semibold text-blue-600 mb-6">
              From seed to sale, Bleaum grows with you.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              One shop or multi-state—stay lean, fast, and focused.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Customer Testimonials */}
      <section className="py-24 relative bg-[#010a1a]">
        {/* Section Background */}
        <div className="absolute inset-0 bg-[#010a1a]"></div>
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-[linear-gradient(60deg,transparent_40%,rgba(6,182,212,0.02)_50%,transparent_60%)] bg-[length:80px_80px]"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
         
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              What Customers Say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              "We used to spend 4 hours doing inventory. Now it's 20 minutes—midday.",
              "Our drivers love it. And so do our customers.",
              "We're never switching back."
            ].map((quote, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-blue-50/80 to-cyan-50/80 backdrop-blur-sm rounded-2xl p-8 border border-blue-200/50 text-center"
              >
                <Quote className="w-8 h-8 text-blue-400 mx-auto mb-6" />
                <p className="text-gray-700 italic text-lg leading-relaxed">
                  "{quote}"
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 relative">
        {/* Section Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-500 to-cyan-600"></div>
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.05)_50%,transparent_75%)] bg-[length:40px_40px]"></div>
        </div>
        <div className="absolute top-10 left-1/4 w-20 h-20 bg-white/5 rounded-full blur-2xl"></div>
        <div className="absolute bottom-10 right-1/4 w-16 h-16 bg-cyan-300/10 rounded-full blur-2xl"></div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
        
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Get a Live Demo
            </h2>
            <p className="text-xl text-blue-100 mb-12 leading-relaxed">
              15 minutes is all it takes to see the difference.
            </p>
            
            <Link href="/demo">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-xl text-lg font-semibold hover:shadow-lg hover:shadow-white/25 transition-all duration-300 flex items-center gap-2 mx-auto mb-16">
                Schedule a Demo <ArrowRight className="w-5 h-5" />
              </button>
            </Link>

            {/* Contact Options */}
            <div className="text-left max-w-2xl mx-auto">
  
           
              <p className="text-blue-100 mb-8 text-center">We're real people. We're here to help.</p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Link href="/contact">
                  <button className="w-full border-2 border-white/50 backdrop-blur-sm text-white px-6 py-3 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300">
                    Contact Us
                  </button>
                </Link>
                <Link href="/support">
                  <button className="w-full border-2 border-white/50 backdrop-blur-sm text-white px-6 py-3 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300">
                    Support Portal
                  </button>
                </Link>
                <Link href="/partners">
                  <button className="w-full border-2 border-white/50 backdrop-blur-sm text-white px-6 py-3 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300">
                    Partner With Us
                  </button>
                </Link>
              </div>
            </div>

            <div className="mt-16 flex items-center justify-center gap-4">
             
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}