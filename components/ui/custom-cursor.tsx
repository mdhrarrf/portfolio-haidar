"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    // Only run on non-touch devices
    if (window.matchMedia("(pointer: coarse)").matches) return

    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    const playSound = (type: "hover" | "click") => {
      try {
        const AudioContext = window.AudioContext || (window as any).webkitAudioContext
        const win = window as any
        if (!win.audioCtx) win.audioCtx = new AudioContext()
        const ctx = win.audioCtx
        
        if (ctx.state === "suspended") {
          ctx.resume().catch(() => {})
        }
        if (ctx.state === "suspended") return

        const osc = ctx.createOscillator()
        const gain = ctx.createGain()
        osc.connect(gain)
        gain.connect(ctx.destination)
        const now = ctx.currentTime

        if (type === "hover") {
          // Subtle, modern tick
          osc.type = "sine"
          osc.frequency.setValueAtTime(300, now)
          osc.frequency.exponentialRampToValueAtTime(150, now + 0.05)
          gain.gain.setValueAtTime(0, now)
          gain.gain.linearRampToValueAtTime(0.02, now + 0.01) // very quiet
          gain.gain.exponentialRampToValueAtTime(0.001, now + 0.05)
          osc.start(now)
          osc.stop(now + 0.05)
        } else if (type === "click") {
          // Satisfying water-drop pop
          osc.type = "sine"
          osc.frequency.setValueAtTime(600, now)
          osc.frequency.exponentialRampToValueAtTime(100, now + 0.1)
          gain.gain.setValueAtTime(0, now)
          gain.gain.linearRampToValueAtTime(0.05, now + 0.01)
          gain.gain.exponentialRampToValueAtTime(0.001, now + 0.1)
          osc.start(now)
          osc.stop(now + 0.1)
        }
      } catch (e) {
        // Ignore audio errors
      }
    }

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (
        target.tagName.toLowerCase() === "a" ||
        target.tagName.toLowerCase() === "button" ||
        target.closest("a") ||
        target.closest("button")
      ) {
        if (!isHovering) {
          setIsHovering(true)
          playSound("hover")
        }
      } else {
        setIsHovering(false)
      }
    }

    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (
        target.tagName.toLowerCase() === "a" ||
        target.tagName.toLowerCase() === "button" ||
        target.closest("a") ||
        target.closest("button")
      ) {
        playSound("click")
      }
    }

    window.addEventListener("mousemove", updateMousePosition)
    window.addEventListener("mouseover", handleMouseOver)
    window.addEventListener("click", handleClick)

    return () => {
      window.removeEventListener("mousemove", updateMousePosition)
      window.removeEventListener("mouseover", handleMouseOver)
      window.removeEventListener("click", handleClick)
    }
  }, [isHovering])

  // Do not render on mobile/touch devices
  if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) {
    return null
  }

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      scale: 1,
      opacity: 0.5,
    },
    hover: {
      x: mousePosition.x - 24,
      y: mousePosition.y - 24,
      scale: 1.5,
      opacity: 0.2,
      backgroundColor: "var(--color-primary)",
      mixBlendMode: "difference" as any
    },
  }

  return (
    <motion.div
      className="fixed top-0 left-0 w-8 h-8 border-2 border-primary rounded-full pointer-events-none z-[100] hidden md:block"
      variants={variants}
      animate={isHovering ? "hover" : "default"}
      transition={{
        type: "spring",
        stiffness: 500,
        damping: 28,
        mass: 0.5,
      }}
    />
  )
}
