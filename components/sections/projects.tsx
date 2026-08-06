"use client"

import { motion } from "framer-motion"
import { portfolioData } from "@/data/portfolio"
import { SectionHeading } from "@/components/ui/section-heading"
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"
import { FaGithub } from "react-icons/fa"


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

export function ProjectsSection() {
  return (
    <section id="projects" className="py-16 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading 
          title="Featured Projects" 
          subtitle="A selection of my recent work in web and mobile development." 
        />
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex overflow-x-auto pb-8 snap-x snap-mandatory md:grid md:grid-cols-2 gap-4 md:gap-8 max-w-6xl mx-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] -mx-4 px-4 md:mx-auto md:px-0"
        >
          {portfolioData.projects.map((project) => (
            <motion.div 
              key={project.id} 
              variants={itemVariants}
              className="w-[85vw] sm:w-[350px] md:w-auto flex-shrink-0 snap-center md:snap-align-none"
            >
              <Card className="h-full flex flex-col overflow-hidden border-muted/50 bg-card/50 backdrop-blur group relative transition-all duration-500 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/5 md:hover:-translate-y-2">
                <div className="relative h-48 md:h-60 w-full overflow-hidden bg-muted">
                  {/* Placeholder for project image, with subtle scale effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-muted-foreground/50 font-medium text-sm">Image Placeholder</span>
                  </div>
                  {/* Image overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                
                <CardHeader className="relative z-10 p-4 md:p-6 pb-2 md:pb-4">
                  <div className="flex justify-between items-start mb-2">
                    <Badge variant={project.status === "Completed" ? "default" : "secondary"} className="text-[10px] md:text-xs">
                      {project.status}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl md:text-2xl group-hover:text-primary transition-colors duration-300">{project.title}</CardTitle>
                  <CardDescription className="text-sm md:text-base mt-1 md:mt-2 line-clamp-2 md:line-clamp-none">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="flex-grow p-4 md:p-6 pt-0 md:pt-0">
                  <div className="mb-4 hidden md:block">
                    <h4 className="text-sm font-semibold mb-2">Key Features:</h4>
                    <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                      {project.features.map((feature, i) => (
                        <li key={i}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex flex-wrap gap-1.5 md:gap-2 mt-auto">
                    {project.technologies.map((tech, i) => (
                      <Badge key={i} variant="outline" className="bg-background text-[10px] md:text-xs px-2 py-0">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                
                <CardFooter className="flex gap-2 md:gap-4 p-4 md:p-6 pt-0 md:pt-4 border-t-0 md:border-t border-border/50">
                  {project.github && (
                    <Button variant="outline" size="sm" className="gap-2 h-8 md:h-9 text-xs md:text-sm" asChild>
                      <a href={project.github} target="_blank" rel="noreferrer">
                        <FaGithub className="w-3 h-3 md:w-4 md:h-4" /> Code
                      </a>
                    </Button>
                  )}
                  {project.demo && (
                    <Button size="sm" className="gap-2 h-8 md:h-9 text-xs md:text-sm" asChild>
                      <a href={project.demo} target="_blank" rel="noreferrer">
                        <ExternalLink className="w-3 h-3 md:w-4 md:h-4" /> Demo
                      </a>
                    </Button>
                  )}
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
