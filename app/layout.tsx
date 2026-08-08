import type { Metadata } from "next"
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { SmoothScroll } from "@/components/layout/smooth-scroll"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { CustomCursor } from "@/components/ui/custom-cursor"
import { portfolioData } from "@/data/portfolio"

const plusJakarta = Plus_Jakarta_Sans({ 
  subsets: ["latin"],
  variable: "--font-sans" 
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  style: ["normal", "italic"]
})

export const metadata: Metadata = {
  title: `${portfolioData.hero.name} | Portfolio`,
  description: portfolioData.hero.description,
  keywords: ["Portfolio", "Frontend Engineer", "Next.js", "React", "Mobile Developer"],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body className={`${plusJakarta.variable} ${playfair.variable} font-sans antialiased relative min-h-screen`}>
        {/* Subtle Matte Finish / Film Noise Overlay */}
        <div className="pointer-events-none fixed inset-0 z-[100] h-full w-full bg-noise opacity-[0.03] dark:opacity-[0.06] mix-blend-overlay"></div>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <CustomCursor />
          <SmoothScroll>
            <Navbar />
            {children}
            <Footer />
          </SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  )
}
