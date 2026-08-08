import * as React from "react"
import { cn } from "@/lib/utils"

interface SectionHeadingProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string
  subtitle?: string
}

export function SectionHeading({ title, subtitle, className, ...props }: SectionHeadingProps) {
  return (
    <div className={cn("flex flex-col items-center justify-center space-y-4 text-center mb-12", className)} {...props}>
      <h2 className="text-3xl font-medium font-serif tracking-tight sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {subtitle && (
        <p className="max-w-[700px] text-muted-foreground md:text-lg">
          {subtitle}
        </p>
      )}
    </div>
  )
}
