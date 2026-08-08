"use client"

import { motion } from "framer-motion"
import { portfolioData } from "@/data/portfolio"
import { SectionHeading } from "@/components/ui/section-heading"
import { User, MapPin, Mail, Briefcase, GraduationCap } from "lucide-react"
import Image from "next/image"

export function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-32 relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full filter blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <SectionHeading title={portfolioData.about.title} />
        
        {/* Exact Golden Ratio Grid (1 : 1.618) */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.618fr] gap-8 lg:gap-16 items-start mt-8 lg:mt-12">
          
          {/* Left Column: Photo Area - 38.2% */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex justify-center lg:justify-start"
          >
            <div className="relative w-full max-w-[260px] md:max-w-[320px] lg:max-w-[400px] aspect-[4/5] group">
              {/* Photo Frame / Shadow */}
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-primary/5 rounded-2xl transform rotate-3 scale-105 transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110 -z-10" />
              
              {/* Actual Photo Container */}
              <div className="relative w-full h-full rounded-2xl overflow-hidden border border-border/50 bg-muted flex items-center justify-center">
                {/* 
                  To use your real photo: 
                  Save your photo as 'profile.jpg' inside the 'public' folder. 
                */}
                <Image 
                  src={portfolioData.about.profileImage}
                  alt={portfolioData.about.biodata[0].value}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  onError={(e) => {
                    // Fallback if image doesn't exist yet
                    e.currentTarget.style.display = 'none';
                  }}
                />
                
                {/* Fallback Icon if image fails to load */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-muted-foreground/50 -z-10">
                  <User className="w-24 h-24 mb-4 opacity-20" />
                  <span className="text-sm font-medium">Add profile.jpg to /public</span>
                </div>
              </div>

              {/* Decorative floating badge */}
              <div className="absolute -bottom-6 -right-6 bg-background border border-border shadow-xl rounded-2xl p-4 flex items-center gap-4 animate-float">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-bold text-foreground">12th Grade</p>
                  <p className="text-xs text-muted-foreground">Software Engineering</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Biodata and Text - 61.8% */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="flex flex-col justify-center"
          >
            <h3 className="text-3xl font-medium font-serif mb-6 text-foreground">
              Hello, I am <span className="text-primary italic">{portfolioData.hero.name.split(" ")[1]}</span>.
            </h3>

            {/* Paragraphs */}
            <div className="space-y-5 text-lg text-muted-foreground leading-relaxed font-light mb-10">
              {portfolioData.about.content.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            {/* Biodata Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-8 border-t border-border/50">
              {portfolioData.about.biodata.map((item, index) => {
                // Map icons based on label
                let Icon = User;
                if (item.label === "Role") Icon = Briefcase;
                if (item.label === "Location") Icon = MapPin;
                if (item.label === "Email") Icon = Mail;
                
                return (
                  <div key={index} className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center shrink-0">
                      <Icon className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">{item.label}</p>
                      <p className="text-sm font-medium text-foreground">{item.value}</p>
                    </div>
                  </div>
                )
              })}
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  )
}
