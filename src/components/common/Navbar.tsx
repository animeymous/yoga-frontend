"use client";

import * as React from "react";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import Image from "next/image";

// Define your links
const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact Us", href: "/contact" },
];

const moreLinks = [
  { title: "Classes", href: "/classes", description: "Explore all yoga classes." },
  { title: "Teachers", href: "/teachers", description: "Meet our certified instructors." },
  { title: "Schedule", href: "/schedule", description: "Plan your sessions with ease." },
  { title: "Pricing", href: "/pricing", description: "Flexible and affordable pricing." },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white border-b border-gray-200 shadow-sm sticky top-0 z-50 px-4 py-3">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
          {/* Logo */}
          <Image
            src="/images/yogabrandlogo1.png"
            alt="Ashu Yoga Logo"
            width={40}
            height={40}
            className="object-contain"
          />
          {/* Brand Name */}
          <span className="text-xl font-bold text-primary">Ashu Yoga</span>
        </Link>

        {/* Desktop Navigation Menu */}
        <div className="hidden md:flex items-center gap-6">
          <NavigationMenu>
            <NavigationMenuList className="flex gap-4">
              {navLinks.map(({ label, href }) => (
                <NavigationMenuItem key={href}>
                  <Link href={href} passHref legacyBehavior>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                      {label}
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              ))}

              <NavigationMenuItem>
                <NavigationMenuTrigger>More</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[300px] gap-3 p-4 md:w-[400px] md:grid-cols-2">
                    {moreLinks.map((item) => (
                      <ListItem
                        key={item.title}
                        title={item.title}
                        href={item.href}
                      >
                        {item.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Mobile Toggle Button */}
        <button onClick={toggleMenu} className="md:hidden">
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-2 flex flex-col gap-3 px-2">
          {navLinks.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setIsOpen(false)}
              className="text-gray-700 hover:text-primary"
            >
              {label}
            </Link>
          ))}
          <hr />
          {moreLinks.map(({ title, href }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setIsOpen(false)}
              className="text-gray-700 hover:text-primary"
            >
              {title}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}

// Reusable ListItem for dropdown
const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";