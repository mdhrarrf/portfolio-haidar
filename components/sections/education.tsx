"use client"

import { motion } from "framer-motion"
import { portfolioData } from "@/data/portfolio"
import { SectionHeading } from "@/components/ui/section-heading"

export function EducationSection() {
  return (
    <section id="education" className="py-24 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading 
          title="Education" 
          subtitle="My academic background and current studies." 
        />
        
        <div className="max-w-3xl mx-auto">
          {portfolioData.education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
              className="relative pl-8 md:pl-0"
            >
              <div className="md:flex items-center justify-between p-6 md:p-8 rounded-2xl border border-muted/50 bg-card/50 backdrop-blur hover:border-primary/20 transition-all">
                <div className="mb-4 md:mb-0">
                  <h3 className="text-xl md:text-2xl font-bold tracking-tight mb-1">{edu.school}</h3>
                  <p className="text-primary font-medium">{edu.major}</p>
                </div>
                <div className="text-left md:text-right">
                  <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold mb-2">
                    {edu.status}
                  </div>
                  <p className="text-sm text-muted-foreground">{edu.year}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
