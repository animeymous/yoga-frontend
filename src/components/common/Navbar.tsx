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
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";

// Define your links
const navLinks = [
  { label: "Home", href: "/" },
  { label: "Contact Us", href: "/contact" },
  { label: "Blog", href: "/blog" },
];

const aboutLinks = [
  { 
    title: "Ashu Yoga Ashram", 
    href: "/about/ashram", 
    description: "Discover our spiritual sanctuary and yoga training center." 
  },
  { 
    title: "Food & Accommodation", 
    href: "/about/facilities", 
    description: "Experience comfortable stay with nutritious yogic food." 
  },
  { 
    title: "Photo Gallery", 
    href: "/about/gallery", 
    description: "Visual journey through our ashram and activities." 
  },
  { 
    title: "Course Payment", 
    href: "/about/payment", 
    description: "Secure and flexible payment options for courses." 
  },
  { 
    title: "FAQ", 
    href: "/about/faq", 
    description: "Find answers to common questions about our programs." 
  }
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
    <nav 
      lang="en"
      itemScope 
      itemType="https://schema.org/SiteNavigationElement"
      className="bg-white border-b border-gray-200 shadow-sm sticky top-0 z-50 px-4 py-3"
    >
      {/* Skip to main content link */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:z-[100] focus:top-4 focus:left-4 inline-block bg-gray-900 text-white px-6 py-3 rounded-full text-base font-medium hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 focus:ring-4 focus:outline-none focus:ring-gray-600 shadow-lg hover:shadow-xl"
      >
        Skip to main content
      </a>

      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2" aria-label="Ashu Yoga Home">
          <Image
            src="/images/yogabrandlogo1.png"
            alt="Ashu Yoga Logo"
            width={40}
            height={40}
            className="object-contain"
          />
          <span className="text-xl font-bold text-primary">Ashu Yoga</span>
        </Link>

        {/* Desktop Navigation Menu */}
        <div className="hidden md:flex items-center gap-6">
          <NavigationMenu>
            <NavigationMenuList className="flex gap-4">

              {/* Home */}
              <NavigationMenuItem key="/">
                <NavigationMenuLink asChild>
                  <Link href="/" className={navigationMenuTriggerStyle()}>
                    Home
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              {/* Replace About Us with About Dropdown */}
              <NavigationMenuItem>
                <NavigationMenuTrigger>About</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                    {aboutLinks.map((item) => (
                      <ListItem
                        key={item.title}
                        title={item.title}
                        href={item.href}
                      >
                        {item.description}
                      </ListItem>
                    ))}
                    <div className="md:col-span-2">
                      <Separator className="my-2" />
                      <div className="grid md:grid-cols-2 gap-3 mt-3">
                        {moreLinks.map((item) => (
                          <ListItem
                            key={item.title}
                            title={item.title}
                            href={item.href}
                          >
                            {item.description}
                          </ListItem>
                        ))}
                      </div>
                    </div>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Courses Menu inserted right after About Us */}
              <NavigationMenuItem>
                <NavigationMenuTrigger>Yoga Courses</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="w-[400px] p-4">
                    <div className="grid gap-3">
                      {/* Rishikesh */}
                      <div>
                        <h4 className="text-sm font-medium leading-none mb-3 text-gray-500">Rishikesh</h4>
                        <div className="grid gap-2">
                          <Link href="/courses/india/rishikesh/1" className="block text-sm leading-none no-underline outline-none select-none rounded-sm px-2 py-1.5 hover:bg-accent hover:text-accent-foreground">
                            100 Hour Yoga Teacher Training - Rishikesh
                          </Link>
                          <Link href="/courses/india/rishikesh/2" className="block text-sm leading-none no-underline outline-none select-none rounded-sm px-2 py-1.5 hover:bg-accent hover:text-accent-foreground">
                            200 Hour Yoga Teacher Training - Rishikesh
                          </Link>
                          <Link href="/courses/india/rishikesh/3" className="block text-sm leading-none no-underline outline-none select-none rounded-sm px-2 py-1.5 hover:bg-accent hover:text-accent-foreground">
                            300 Hour Yoga Teacher Training - Rishikesh
                          </Link>
                          <Link href="/courses/india/rishikesh/4" className="block text-sm leading-none no-underline outline-none select-none rounded-sm px-2 py-1.5 hover:bg-accent hover:text-accent-foreground">
                            500 Hour Yoga Teacher Training - Rishikesh
                          </Link>
                        </div>
                      </div>

                      {/* Bali */}
                      <div>
                        <h4 className="text-sm font-medium leading-none mb-3 text-gray-500">Bali</h4>
                        <div className="grid gap-2">
                          <Link href="/courses/bali/1" className="block text-sm leading-none no-underline outline-none select-none rounded-sm px-2 py-1.5 hover:bg-accent hover:text-accent-foreground">
                            100 Hour Yoga Teacher Training - Bali
                          </Link>
                          <Link href="/courses/bali/2" className="block text-sm leading-none no-underline outline-none select-none rounded-sm px-2 py-1.5 hover:bg-accent hover:text-accent-foreground">
                            200 Hour Yoga Teacher Training - Bali
                          </Link>
                          <Link href="/courses/bali/3" className="block text-sm leading-none no-underline outline-none select-none rounded-sm px-2 py-1.5 hover:bg-accent hover:text-accent-foreground">
                            300 Hour Yoga Teacher Training - Bali
                          </Link>
                          <Link href="/courses/bali/4" className="block text-sm leading-none no-underline outline-none select-none rounded-sm px-2 py-1.5 hover:bg-accent hover:text-accent-foreground">
                            500 Hour Yoga Teacher Training - Bali
                          </Link>
                        </div>
                      </div>

                      {/* Goa */}
                      <div>
                        <h4 className="text-sm font-medium leading-none mb-3 text-gray-500">Goa</h4>
                        <div className="grid gap-2">
                          <Link href="/courses/india/goa/1" className="block text-sm leading-none no-underline outline-none select-none rounded-sm px-2 py-1.5 hover:bg-accent hover:text-accent-foreground">
                            100 Hour Yoga Teacher Training - Goa
                          </Link>
                          <Link href="/courses/india/goa/2" className="block text-sm leading-none no-underline outline-none select-none rounded-sm px-2 py-1.5 hover:bg-accent hover:text-accent-foreground">
                            200 Hour Yoga Teacher Training - Goa
                          </Link>
                          <Link href="/courses/india/goa/3" className="block text-sm leading-none no-underline outline-none select-none rounded-sm px-2 py-1.5 hover:bg-accent hover:text-accent-foreground">
                            300 Hour Yoga Teacher Training - Goa
                          </Link>
                        </div>
                      </div>
                    </div>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Contact Us */}
              <NavigationMenuItem key="/contact">
                <NavigationMenuLink asChild>
                  <Link href="/contact" className={navigationMenuTriggerStyle()}>
                    Contact Us
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              {/* Blog */}
              <NavigationMenuItem key="/blog">
                <NavigationMenuLink asChild>
                  <Link href="/blog" className={navigationMenuTriggerStyle()}>
                    Blog
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Mobile Toggle Button */}
        <button onClick={toggleMenu} className="md:hidden" aria-label="Toggle menu">
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-2 flex flex-col gap-3 px-2" role="menu" aria-label="Mobile Navigation Menu">
          {navLinks.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setIsOpen(false)}
              className="text-gray-700 hover:text-primary"
              role="menuitem"
            >
              {label}
            </Link>
          ))}
          <hr />
          <p className="text-gray-500 font-semibold">About</p>
          <div className="pl-4 flex flex-col gap-2">
            {aboutLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-gray-700 hover:text-primary"
                role="menuitem"
              >
                {item.title}
              </Link>
            ))}
          </div>
          <hr />
          <p className="text-gray-500 font-semibold">Courses</p>
          <div className="pl-4 flex flex-col gap-2">
            <p className="text-gray-600 font-medium">Rishikesh</p>
            <Link href="/courses/india/rishikesh/1" onClick={() => setIsOpen(false)} className="text-gray-700 hover:text-primary pl-2" role="menuitem">
              100 Hour Yoga Teacher Training - Rishikesh
            </Link>
            <Link href="/courses/india/rishikesh/2" onClick={() => setIsOpen(false)} className="text-gray-700 hover:text-primary pl-2" role="menuitem">
              200 Hour Yoga Teacher Training - Rishikesh
            </Link>
            <Link href="/courses/india/rishikesh/3" onClick={() => setIsOpen(false)} className="text-gray-700 hover:text-primary pl-2" role="menuitem">
              300 Hour Yoga Teacher Training - Rishikesh
            </Link>
            <Link href="/courses/india/rishikesh/4" onClick={() => setIsOpen(false)} className="text-gray-700 hover:text-primary pl-2" role="menuitem">
              500 Hour Yoga Teacher Training - Rishikesh
            </Link>
          </div>
          <div className="pl-4 flex flex-col gap-2">
            <p className="text-gray-600 font-medium">Bali</p>
            <Link href="/courses/bali/1" onClick={() => setIsOpen(false)} className="text-gray-700 hover:text-primary pl-2" role="menuitem">
              100 Hour Yoga Teacher Training - Bali
            </Link>
            <Link href="/courses/bali/2" onClick={() => setIsOpen(false)} className="text-gray-700 hover:text-primary pl-2" role="menuitem">
              200 Hour Yoga Teacher Training - Bali
            </Link>
            <Link href="/courses/bali/3" onClick={() => setIsOpen(false)} className="text-gray-700 hover:text-primary pl-2" role="menuitem">
              300 Hour Yoga Teacher Training - Bali
            </Link>
            <Link href="/courses/bali/4" onClick={() => setIsOpen(false)} className="text-gray-700 hover:text-primary pl-2" role="menuitem">
              500 Hour Yoga Teacher Training - Bali
            </Link>
          </div>
          <div className="pl-4 flex flex-col gap-2">
            <p className="text-gray-600 font-medium">Goa</p>
            <Link href="/courses/india/goa/1" onClick={() => setIsOpen(false)} className="text-gray-700 hover:text-blue-500 pl-2" role="menuitem">
              100 Hour Yoga Teacher Training - Goa
            </Link>
            <Link href="/courses/india/goa/2" onClick={() => setIsOpen(false)} className="text-gray-700 hover:text-blue-500 pl-2" role="menuitem">
              200 Hour Yoga Teacher Training - Goa
            </Link>
            <Link href="/courses/india/goa/3" onClick={() => setIsOpen(false)} className="text-gray-700 hover:text-blue-500 pl-2" role="menuitem">
              300 Hour Yoga Teacher Training - Goa
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

// Reusable ListItem for dropdown (More)
const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & { title: string }
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