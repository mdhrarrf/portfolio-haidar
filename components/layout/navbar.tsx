"use client"

import * as React from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { ThemeToggle } from "./theme-toggle"
import { portfolioData } from "@/data/portfolio"

const navItems = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Education", href: "#education" },
  { name: "Certificates", href: "#certificates" },
  { name: "Contact", href: "#contact" },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = React.useState(false)
  const [hoveredPath, setHoveredPath] = React.useState<string | null>(null)

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-500 border-b border-transparent",
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-border shadow-sm py-2"
          : "bg-transparent py-4"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link href="/" className="font-bold tracking-tighter text-xl z-10 relative group">
          {portfolioData.hero.branding}
          <span className="text-primary transition-all duration-300 group-hover:pl-1">.</span>
        </Link>
        <nav className="hidden md:flex items-center gap-2 text-sm font-medium z-10">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onMouseEnter={() => setHoveredPath(item.href)}
              onMouseLeave={() => setHoveredPath(null)}
              className="relative px-4 py-2 rounded-md text-muted-foreground hover:text-foreground transition-colors"
            >
              {item.name}
              {item.href === hoveredPath && (
                <motion.div
                  className="absolute inset-0 bg-muted/80 rounded-md -z-10"
                  layoutId="navbar-hover"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ type: "spring", bounce: 0.25, duration: 0.5 }}
                />
              )}
            </Link>
          ))}
          <div className="ml-4">
            <ThemeToggle />
          </div>
        </nav>
        {/* Mobile Nav Toggle */}
        <div className="md:hidden z-10">
           <ThemeToggle />
        </div>
      </div>
    </header>
  )
}
