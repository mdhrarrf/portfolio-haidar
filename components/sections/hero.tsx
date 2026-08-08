"use client"

import { motion } from "framer-motion"
import { portfolioData } from "@/data/portfolio"
import { Button } from "@/components/ui/button"
import { ArrowRight, MapPin } from "lucide-react"

const textVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 1, 
      ease: [0.16, 1, 0.3, 1] 
    } 
  }
}

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-12 lg:pt-20 lg:pb-16 overflow-hidden">
      {/* Optimized Background Orbs (No CSS Blur) */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] left-[15%] w-[40vw] h-[40vw] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/15 to-transparent animate-blob transform-gpu will-change-transform" />
        <div className="absolute top-[30%] right-[10%] w-[35vw] h-[35vw] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/15 to-transparent animate-blob animation-delay-2000 transform-gpu will-change-transform" />
        <div className="absolute -bottom-[20%] left-[40%] w-[50vw] h-[50vw] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-500/15 to-transparent animate-blob animation-delay-4000 transform-gpu will-change-transform" />
      </div>
      
      <div className="container relative mx-auto px-6 md:px-12 z-10 flex flex-col items-center justify-center min-h-[calc(100vh-8rem)]">
        {/* Centered Content */}
        <div className="flex flex-col items-center text-center w-full max-w-4xl pt-4 lg:pt-0">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              visible: { transition: { staggerChildren: 0.15 } }
            }}
            className="w-full flex flex-col items-center"
          >
            <motion.div variants={textVariants} className="flex items-center justify-center gap-3 mb-6 lg:mb-8">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary"></span>
              </span>
              <p className="text-xs lg:text-sm font-semibold tracking-[0.2em] text-primary uppercase font-sans">
                {portfolioData.hero.name}
              </p>
            </motion.div>
            
            <motion.h1 
              variants={textVariants}
              className="font-serif text-4xl sm:text-5xl md:text-7xl lg:text-[5.5rem] font-medium tracking-tight leading-[1.05] text-foreground mb-4 lg:mb-6"
            >
              {portfolioData.hero.roles[0]} <br />
              <span className="text-muted-foreground font-light italic">&</span> {portfolioData.hero.roles[1]}
            </motion.h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed max-w-[600px] mx-auto mb-8 lg:mb-12 font-light font-sans"
          >
            {portfolioData.hero.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-5 w-full sm:w-auto font-sans"
          >
            <Button size="lg" className="h-12 lg:h-14 px-6 lg:px-8 rounded-full gap-3 group text-sm lg:text-base w-full sm:w-auto" asChild>
              <a href="#projects">
                {portfolioData.hero.primaryCTA}
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="h-12 lg:h-14 px-6 lg:px-8 rounded-full gap-3 text-sm lg:text-base w-full sm:w-auto" asChild>
              <a href="#contact">
                {portfolioData.hero.secondaryCTA}
              </a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
