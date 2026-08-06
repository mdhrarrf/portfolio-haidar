"use client"

import { motion } from "framer-motion"
import { portfolioData } from "@/data/portfolio"
import { SectionHeading } from "@/components/ui/section-heading"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
}

export function SkillsSection() {
  const skillCategories = [
    { title: "Frontend", data: portfolioData.skills.frontend },
    { title: "Backend", data: portfolioData.skills.backend },
    { title: "Mobile", data: portfolioData.skills.mobile },
    { title: "Database", data: portfolioData.skills.database },
    { title: "Tools & Workflow", data: portfolioData.skills.tools },
  ]

  return (
    <section id="skills" className="py-16 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading 
          title="Technical Arsenal" 
          subtitle="The tools and technologies I use to build digital products." 
        />
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6 max-w-5xl mx-auto"
        >
          {skillCategories.map((category, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full border-muted/50 bg-card/50 backdrop-blur hover:border-primary/20 transition-colors">
                <CardHeader className="p-4 md:p-6 pb-2 md:pb-4">
                  <CardTitle className="text-sm md:text-lg">{category.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-wrap gap-1.5 md:gap-2 p-4 md:p-6 pt-0 md:pt-0">
                  {category.data.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex} 
                      variant="secondary"
                      className="bg-secondary/50 hover:bg-secondary text-[10px] md:text-xs px-2 py-0.5 md:py-1"
                    >
                      {skill.name}
                    </Badge>
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
