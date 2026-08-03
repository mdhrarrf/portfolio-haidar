"use client"

import { motion } from "framer-motion"
import { portfolioData } from "@/data/portfolio"
import { SectionHeading } from "@/components/ui/section-heading"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Award, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

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

export function CertificatesSection() {
  return (
    <section id="certificates" className="py-24 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading 
          title="Certificates & Achievements" 
          subtitle="Validations of my continuous learning and skills." 
        />
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto"
        >
          {portfolioData.certificates.map((cert, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full flex flex-col border-muted/50 bg-card/50 backdrop-blur hover:border-primary/30 transition-all hover:-translate-y-1 duration-300">
                <CardHeader className="pb-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Award className="w-5 h-5 text-primary" />
                  </div>
                  <CardTitle className="text-xl leading-tight mb-2">{cert.title}</CardTitle>
                  <CardDescription className="font-medium text-foreground/80">
                    {cert.issuer}
                  </CardDescription>
                </CardHeader>
                <CardContent className="mt-auto pt-0 flex justify-between items-center">
                  <span className="text-sm text-muted-foreground bg-secondary/50 px-3 py-1 rounded-full">
                    {cert.date}
                  </span>
                  {cert.credentialUrl && cert.credentialUrl !== "#" && (
                    <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full" asChild>
                      <a href={cert.credentialUrl} target="_blank" rel="noreferrer" title="View Credential">
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </Button>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
