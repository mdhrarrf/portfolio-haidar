"use client"

import { motion } from "framer-motion"
import { portfolioData } from "@/data/portfolio"
import { Button } from "@/components/ui/button"
import { ArrowRight, Download } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Subtle Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-muted/20 pointer-events-none" />
      
      <div className="container relative mx-auto px-4 md:px-6 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="space-y-2 mb-6"
        >
          <p className="text-sm md:text-base text-muted-foreground font-medium tracking-widest uppercase">
            {portfolioData.hero.name}
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold tracking-tighter">
            {portfolioData.hero.roles[0]} <br className="hidden md:block" />
            <span className="text-muted-foreground">&</span> {portfolioData.hero.roles[1]}
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
          className="max-w-[700px] text-muted-foreground md:text-xl leading-relaxed mb-10"
        >
          {portfolioData.hero.description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
        >
          <Button size="lg" className="rounded-full gap-2 w-full sm:w-auto" asChild>
            <a href="#projects">
              {portfolioData.hero.primaryCTA}
              <ArrowRight className="w-4 h-4" />
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
