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

// Define your links
const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Contact Us", href: "/contact" },
  { label: "Blog", href: "/blog" },
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
                <Link href="/" passHref legacyBehavior>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Home
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              {/* About Us */}
              <NavigationMenuItem key="/about">
                <Link href="/about" passHref legacyBehavior>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    About Us
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              {/* Courses Menu inserted right after About Us */}
              <Menubar>
                <MenubarMenu>
                  <MenubarTrigger className="cursor-pointer font-medium text-sm px-3 py-2 rounded-md hover:bg-accent hover:text-accent-foreground border-0 focus:outline-none focus:ring-0">
                    Yoga Courses
                  </MenubarTrigger>
                  <MenubarContent align="start" forceMount>
                    <MenubarSub>
                      <MenubarSubTrigger>Rishikesh</MenubarSubTrigger>
                      <MenubarSubContent>
                        <MenubarItem>
                          <Link href="/courses/rishikesh/yoga-basics" className="block w-full" aria-label="Yoga Basics Course in Rishikesh">
                            Yoga Basics
                          </Link>
                        </MenubarItem>
                        <MenubarItem>
                          <Link href="/courses/rishikesh/advanced-practice" className="block w-full" aria-label="Advanced Practice Course in Rishikesh">
                            Advanced Practice
                          </Link>
                        </MenubarItem>
                        <MenubarItem>
                          <Link href="/courses/rishikesh/meditation" className="block w-full" aria-label="Meditation Course in Rishikesh">
                            Meditation
                          </Link>
                        </MenubarItem>
                      </MenubarSubContent>
                    </MenubarSub>

                    <MenubarSub>
                      <MenubarSubTrigger>Bali</MenubarSubTrigger>
                      <MenubarSubContent>
                        <MenubarItem>
                          <Link href="/courses/bali/surf-yoga" className="block w-full" aria-label="Surf Yoga Course in Bali">
                            Surf Yoga
                          </Link>
                        </MenubarItem>
                        <MenubarItem>
                          <Link href="/courses/bali/spiritual-retreat" className="block w-full" aria-label="Spiritual Retreat Course in Bali">
                            Spiritual Retreat
                          </Link>
                        </MenubarItem>
                      </MenubarSubContent>
                    </MenubarSub>

                    <MenubarSub>
                      <MenubarSubTrigger>Goa</MenubarSubTrigger>
                      <MenubarSubContent>
                        <MenubarItem>
                          <Link href="/courses/goa/beach-yoga" className="block w-full" aria-label="Beach Yoga Course in Goa">
                            Beach Yoga
                          </Link>
                        </MenubarItem>
                        <MenubarItem>
                          <Link href="/courses/goa/night-meditation" className="block w-full" aria-label="Night Meditation Course in Goa">
                            Night Meditation
                          </Link>
                        </MenubarItem>
                      </MenubarSubContent>
                    </MenubarSub>
                  </MenubarContent>
                </MenubarMenu>
              </Menubar>

              {/* Contact Us */}
              <NavigationMenuItem key="/contact">
                <Link href="/contact" passHref legacyBehavior>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Contact Us
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              {/* Blog */}
              <NavigationMenuItem key="/blog">
                <Link href="/blog" passHref legacyBehavior>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Blog
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              {/* More Dropdown */}
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
          {moreLinks.map(({ title, href }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setIsOpen(false)}
              className="text-gray-700 hover:text-primary"
              role="menuitem"
            >
              {title}
            </Link>
          ))}
          <hr />
          <p className="text-gray-500 font-semibold">Courses</p>
          <Link href="/courses/rishikesh" onClick={() => setIsOpen(false)} className="text-gray-700 hover:text-primary" role="menuitem">
            Rishikesh
          </Link>
          <Link href="/courses/bali" onClick={() => setIsOpen(false)} className="text-gray-700 hover:text-primary" role="menuitem">
            Bali
          </Link>
          <Link href="/courses/goa" onClick={() => setIsOpen(false)} className="text-gray-700 hover:text-primary" role="menuitem">
            Goa
          </Link>
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