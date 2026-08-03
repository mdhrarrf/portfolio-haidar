"use client"

import { motion } from "framer-motion"
import { portfolioData } from "@/data/portfolio"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const textVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.8, 
      ease: [0.16, 1, 0.3, 1] // Apple-like ease out
    } 
  }
}

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Subtle Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-muted/20 pointer-events-none" />
      
      <div className="container relative mx-auto px-4 md:px-6 flex flex-col items-center text-center z-10">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            visible: { transition: { staggerChildren: 0.15 } }
          }}
          className="space-y-4 mb-8"
        >
          <motion.p 
            variants={textVariants}
            className="text-sm md:text-base text-primary font-semibold tracking-widest uppercase mb-4"
          >
            {portfolioData.hero.name}
          </motion.p>
          
          <motion.h1 
            variants={textVariants}
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter"
          >
            {portfolioData.hero.roles[0]} <br className="hidden md:block" />
            <span className="text-muted-foreground">&</span> {portfolioData.hero.roles[1]}
          </motion.h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, filter: "blur(10px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          className="max-w-[700px] text-muted-foreground md:text-xl leading-relaxed mb-10"
        >
          {portfolioData.hero.description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
        >
          <Button size="lg" className="rounded-full gap-2 w-full sm:w-auto group" asChild>
            <a href="#projects">
              {portfolioData.hero.primaryCTA}
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </Button>
          <Button size="lg" variant="outline" className="rounded-full gap-2 w-full sm:w-auto" asChild>
            <a href="#contact">
              {portfolioData.hero.secondaryCTA}
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
