import { portfolioData } from "@/data/portfolio"
import { Mail } from "lucide-react"
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa"

export function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="border-t py-12 md:py-16 bg-muted/40">
      <div className="container mx-auto px-4 md:px-6 flex flex-col items-center justify-center gap-6 text-center">
        <h3 className="font-bold text-2xl tracking-tighter">
          {portfolioData.hero.branding}.
        </h3>
        <p className="text-muted-foreground max-w-[500px]">
          Building clean, scalable, and premium digital experiences.
        </p>
        <div className="flex gap-4">
          {portfolioData.contact.github && (
            <a href={portfolioData.contact.github} target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
              <FaGithub className="w-5 h-5" />
              <span className="sr-only">GitHub</span>
            </a>
          )}
          {portfolioData.contact.linkedin && (
            <a href={portfolioData.contact.linkedin} target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
              <FaLinkedin className="w-5 h-5" />
              <span className="sr-only">LinkedIn</span>
            </a>
          )}
          {portfolioData.contact.instagram && (
            <a href={portfolioData.contact.instagram} target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
              <FaInstagram className="w-5 h-5" />
              <span className="sr-only">Instagram</span>
            </a>
          )}
          {portfolioData.contact.email && (
            <a href={`mailto:${portfolioData.contact.email}`} className="text-muted-foreground hover:text-foreground transition-colors">
              <Mail className="w-5 h-5" />
              <span className="sr-only">Email</span>
            </a>
          )}
        </div>
        <p className="text-sm text-muted-foreground mt-4">
          &copy; {currentYear} {portfolioData.hero.name}. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
