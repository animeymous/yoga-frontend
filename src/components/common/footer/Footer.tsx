'use client';

import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200 py-12">
      <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 items-start">

        {/* Logo & Description */}
        <div className="flex flex-col items-start space-y-6">
          <img
            src="/images/yogabrandlogo4.png"
            alt="Ashu Yoga Brand Logo"
            className="w-40 h-auto object-contain drop-shadow-lg transition-transform duration-300 hover:scale-105"
            loading="lazy"
            width={160}
            height={60}
          />
          <h2 className="text-2xl font-bold">Awaken Your Inner Light</h2>
          <p className="text-sm max-w-xs">
            Your destination for peace, mindfulness, and holistic living. Stay grounded. Stay connected.
          </p>
        </div>

        {/* Quick Links */}
        <nav aria-label="Quick Links">
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            {[
              { href: '/', label: 'Home' },
              { href: '/about', label: 'About Us' },
              { href: '/contact', label: 'Contact' },
              { href: '/classes', label: 'Classes' },
            ].map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="hover:underline transition-colors duration-300 ease-in-out hover:text-white"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Contact Info */}
        <address className="not-italic">
          <h3 className="text-lg font-semibold mb-4">Contact</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <Phone size={16} aria-hidden="true" />
              <a href="tel:+16035550123" className="hover:text-white transition-colors duration-300 ease-in-out">
                (603) 555-0123
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Mail size={16} aria-hidden="true" />
              <a href="mailto:support@example.com" className="hover:text-white transition-colors duration-300 ease-in-out">
                support@example.com
              </a>
            </li>
            <li className="flex items-center gap-2">
              <MapPin size={16} aria-hidden="true" />
              <span>123 Yoga Street, Wellness City</span>
            </li>
          </ul>
        </address>

        {/* Social Media */}
        <section aria-label="Follow Ashu Yoga on Social Media">
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-6">
            {[
              { href: 'https://facebook.com', label: 'Facebook', icon: Facebook },
              { href: 'https://twitter.com', label: 'Twitter', icon: Twitter },
              { href: 'https://instagram.com', label: 'Instagram', icon: Instagram },
            ].map(({ href, label, icon: Icon }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-300 ease-in-out transform hover:scale-110"
              >
                <Icon size={24} />
              </a>
            ))}
          </div>
        </section>
      </div>

      {/* Bottom Bar */}
      <div className="mt-12 border-t border-gray-700 pt-6 text-center text-sm text-gray-400 select-none">
        © {new Date().getFullYear()} Ashu Yoga. All rights reserved.
      </div>
    </footer>
  );
}