// src/components/shared/Navbar.tsx

"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Contact Us", href: "/contact" },
    { label: "Blog", href: "/blog" },
  ];

  return (
    <nav className="bg-white border-b border-gray-200 px-4 py-3 shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-primary">
          Ashu Yoga
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-6">
          {navLinks.map(({ label, href }) => (
            <Link key={href} href={href} className="text-gray-700 hover:text-primary transition">
              {label}
            </Link>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button onClick={toggleMenu} className="md:hidden">
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-2 flex flex-col gap-3">
          {navLinks.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              className="text-gray-700 hover:text-primary px-2"
              onClick={() => setIsOpen(false)}
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
