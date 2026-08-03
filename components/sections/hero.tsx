"use client"

import { motion } from "framer-motion"
import { portfolioData } from "@/data/portfolio"
import { Button } from "@/components/ui/button"
import { ArrowRight, Code2 } from "lucide-react"

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
    <section className="relative min-h-screen flex items-center pt-20 pb-16 overflow-hidden">
      {/* Optimized Background Orbs (No CSS Blur) */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] left-[15%] w-[40vw] h-[40vw] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/15 to-transparent animate-blob transform-gpu will-change-transform" />
        <div className="absolute top-[30%] right-[10%] w-[35vw] h-[35vw] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/15 to-transparent animate-blob animation-delay-2000 transform-gpu will-change-transform" />
        <div className="absolute -bottom-[20%] left-[40%] w-[50vw] h-[50vw] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-500/15 to-transparent animate-blob animation-delay-4000 transform-gpu will-change-transform" />
      </div>
      
      <div className="container relative mx-auto px-6 md:px-12 z-10">
        {/* Exact Golden Ratio Grid (1.618 : 1) */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.618fr_1fr] gap-12 lg:gap-12 items-center">
          
          {/* Left Content (Text) - 61.8% */}
          <div className="flex flex-col items-start text-left w-full pt-10 lg:pt-0">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                visible: { transition: { staggerChildren: 0.15 } }
              }}
              className="w-full"
            >
              <motion.div variants={textVariants} className="flex items-center gap-3 mb-8">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary"></span>
                </span>
                <p className="text-sm font-semibold tracking-[0.2em] text-primary uppercase">
                  {portfolioData.hero.name}
                </p>
              </motion.div>
              
              <motion.h1 
                variants={textVariants}
                className="text-5xl md:text-7xl lg:text-[5.5rem] font-bold tracking-tighter leading-[1.05] text-foreground mb-6"
              >
                {portfolioData.hero.roles[0]} <br />
                <span className="text-muted-foreground font-light">&</span> {portfolioData.hero.roles[1]}
              </motion.h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-[540px] mb-12 font-light"
            >
              {portfolioData.hero.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto"
            >
              <Button size="lg" className="h-14 px-8 rounded-full gap-3 group text-base" asChild>
                <a href="#projects">
                  {portfolioData.hero.primaryCTA}
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="h-14 px-8 rounded-full gap-3 text-base" asChild>
                <a href="#contact">
                  {portfolioData.hero.secondaryCTA}
                </a>
              </Button>
            </motion.div>
          </div>

          {/* Right Content (Visual) - 38.2% */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="hidden lg:flex justify-end items-center relative w-full h-[600px]"
          >
            {/* Main Floating Glass Card */}
            <div className="relative w-full max-w-[400px] aspect-[4/5] animate-float z-20">
              <div className="absolute inset-0 bg-gradient-to-br from-background/60 to-background/20 rounded-3xl backdrop-blur-2xl border border-white/10 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] p-8 flex flex-col justify-between overflow-hidden">
                
                {/* Subtle internal shine */}
                <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/10 to-white/0 -translate-x-full group-hover:animate-[shimmer_2s_infinite] pointer-events-none" />

                <div className="flex justify-between items-start">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center border border-primary/10">
                    <Code2 className="w-7 h-7 text-primary" />
                  </div>
                  <div className="flex items-center gap-2 bg-background/50 px-4 py-2 rounded-full border border-white/5 backdrop-blur-md">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                    </span>
                    <span className="text-xs font-semibold tracking-wide">Available for PKL</span>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="space-y-2">
                    <h3 className="text-3xl font-bold tracking-tight text-foreground">
                      System.out<br/>
                      <span className="text-muted-foreground/80">.println</span>
                    </h3>
                    <p className="text-sm text-muted-foreground font-mono leading-relaxed mt-4">
                      "Designing with precision. Building with logic."
                    </p>
                  </div>
                  
                  {/* Decorative code lines aligned perfectly */}
                  <div className="space-y-3 pt-6 border-t border-border/40">
                    <div className="h-2 bg-primary/20 rounded-full w-[85%]"></div>
                    <div className="h-2 bg-primary/10 rounded-full w-[60%]"></div>
                    <div className="h-2 bg-primary/10 rounded-full w-[75%]"></div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Minimalist Floating Accent 1 */}
            <motion.div 
              animate={{ y: [-15, 15, -15], rotate: [0, 5, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute top-[10%] right-[-5%] w-20 h-20 bg-blue-500/10 rounded-2xl backdrop-blur-xl border border-white/10 z-10"
            />
            
            {/* Minimalist Floating Accent 2 */}
            <motion.div 
              animate={{ y: [15, -15, 15], rotate: [0, -10, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute bottom-[15%] left-[-10%] w-24 h-24 bg-primary/5 rounded-full backdrop-blur-md border border-white/10 z-30 flex items-center justify-center"
            >
              <div className="w-10 h-10 rounded-full border border-primary/20" />
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
