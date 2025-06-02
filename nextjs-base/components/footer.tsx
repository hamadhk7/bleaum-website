import Link from "next/link";
import { GithubIcon, LinkedinIcon, TwitterIcon, InstagramIcon } from "lucide-react";
import Image from 'next/image';

const features = [
  "Point of Sale",
  "Inventory Management",
  "Automate",
  "Reporting",
];

const footerLinks = {
  product: [
    { name: "Features", href: "/features" },
    { name: "Pricing", href: "/pricing" },
    { name: "Documentation", href: "/docs" },
    { name: "Updates", href: "/updates" },
  ],
  company: [
    { name: "About", href: "/about" },
    { name: "Blog", href: "/blog" },
    { name: "Careers", href: "/careers" },
    { name: "Contact", href: "/contact" },
  ],
  resources: [
    { name: "Community", href: "/community" },
    { name: "Support", href: "/support" },
    { name: "Terms", href: "/terms" },
    { name: "Privacy", href: "/privacy" },
  ],
  terms: [
    { name: "Terms of Service", href: "/terms" },
    { name: "Privacy Policy", href: "/privacy" },
    // Add other terms-related links here if needed
  ],
};

const socialLinks = [
  { name: "GitHub", icon: GithubIcon, href: "https://github.com" },
  { name: "LinkedIn", icon: LinkedinIcon, href: "https://linkedin.com" },
  { name: "Twitter", icon: TwitterIcon, href: "https://twitter.com" },
  { name: "Instagram", icon: InstagramIcon, href: "https://instagram.com" },
];

export function Footer() {
  return (
    <footer className="w-full relative overflow-hidden bg-background">
      {/* Decorative Elements */}
      {/* <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div> */}
      {/* <div className="absolute inset-0 bg-gradient-to-b from-[#051530] via-white/5 to-transparent"></div> */}
      
      {/* Top Section with Features */}
      <div className="container mx-auto px-4 py-12 relative">
        <div className="flex flex-row justify-center items-end gap-8 mb-8 flex-wrap">
          {features.map((label) => (
            <div key={label} className="flex flex-col items-center group">
              <button
                className="rounded-full border border-white/30 px-6 py-3 bg-[#1a365d] text-base font-medium shadow-md transition-all duration-300 text-white hover:bg-[#2a4a7a] focus:outline-none focus:ring-2 focus:ring-white/40 relative overflow-hidden"
              >
                <span className="relative z-10">{label}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12 border-t border-white/10 relative">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-1">
            <div className="mb-4">
              <Image 
                src="/bleaum White.png"
                alt="Bleaum Logo"
                width={150}
                height={40}
                priority
              />
            </div>
            <p className="text-white/70 text-sm mb-6">
              Empowering businesses with innovative solutions for growth and success.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  className="text-white/70 hover:text-white transition-colors duration-300 hover:scale-110 transform"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <social.icon className="w-5 h-5" />
                </Link>
              ))}
            </div>
          </div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category} className="col-span-1">
              <h4 className="text-lg font-semibold mb-4 capitalize bg-gradient-to-r from-blue-200 to-cyan-200 bg-clip-text text-transparent drop-shadow-sm">{category}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-white/70 hover:text-white transition-colors duration-300 text-sm inline-block hover:translate-x-1"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 relative">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/50 text-sm">
              © {new Date().getFullYear()} Bleaum. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/terms" className="text-white/50 hover:text-white text-sm transition-colors duration-300">
                Terms
              </Link>
              <Link href="/privacy" className="text-white/50 hover:text-white text-sm transition-colors duration-300">
                Privacy
              </Link>
              <Link href="/cookies" className="text-white/50 hover:text-white text-sm transition-colors duration-300">
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
