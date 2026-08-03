"use client"

import { useEffect, useState, useRef } from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"

export function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  
  // Use motion values to bypass React state on mousemove
  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)
  
  // Spring config for smooth following without lag
  const springConfig = { damping: 25, stiffness: 400, mass: 0.5 }
  const cursorXSpring = useSpring(cursorX, springConfig)
  const cursorYSpring = useSpring(cursorY, springConfig)

  // Use a ref to keep track of hovering state for the mousemove event without recreating it
  const isHoveringRef = useRef(isHovering)
  useEffect(() => {
    isHoveringRef.current = isHovering
  }, [isHovering])

  useEffect(() => {
    if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) {
      return
    }
    
    setIsVisible(true)

    const updateMousePosition = (e: MouseEvent) => {
      const offset = isHoveringRef.current ? 24 : 16
      cursorX.set(e.clientX - offset)
      cursorY.set(e.clientY - offset)
    }

    const playSound = (type: "hover" | "click") => {
      try {
        const win = window as any
        const AudioContext = window.AudioContext || win.webkitAudioContext
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
          osc.type = "sine"
          osc.frequency.setValueAtTime(300, now)
          osc.frequency.exponentialRampToValueAtTime(150, now + 0.05)
          gain.gain.setValueAtTime(0, now)
          gain.gain.linearRampToValueAtTime(0.02, now + 0.01)
          gain.gain.exponentialRampToValueAtTime(0.001, now + 0.05)
          osc.start(now)
          osc.stop(now + 0.05)
        } else if (type === "click") {
          osc.type = "sine"
          osc.frequency.setValueAtTime(600, now)
          osc.frequency.exponentialRampToValueAtTime(100, now + 0.1)
          gain.gain.setValueAtTime(0, now)
          gain.gain.linearRampToValueAtTime(0.05, now + 0.01)
          gain.gain.exponentialRampToValueAtTime(0.001, now + 0.1)
          osc.start(now)
          osc.stop(now + 0.1)
        }
      } catch (e) {}
    }

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (
        target.tagName.toLowerCase() === "a" ||
        target.tagName.toLowerCase() === "button" ||
        target.closest("a") ||
        target.closest("button")
      ) {
        if (!isHoveringRef.current) {
          setIsHovering(true)
          playSound("hover")
        }
      } else {
        if (isHoveringRef.current) setIsHovering(false)
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

    window.addEventListener("mousemove", updateMousePosition, { passive: true })
    window.addEventListener("mouseover", handleMouseOver, { passive: true })
    window.addEventListener("click", handleClick, { passive: true })

    return () => {
      window.removeEventListener("mousemove", updateMousePosition)
      window.removeEventListener("mouseover", handleMouseOver)
      window.removeEventListener("click", handleClick)
    }
  }, [cursorX, cursorY])

  if (!isVisible) return null

  return (
    <motion.div
      className="fixed top-0 left-0 border-2 border-primary rounded-full pointer-events-none z-[100] hidden md:block"
      style={{
        x: cursorXSpring,
        y: cursorYSpring,
        width: isHovering ? 48 : 32,
        height: isHovering ? 48 : 32,
        backgroundColor: isHovering ? "var(--color-primary)" : "transparent",
        mixBlendMode: isHovering ? "difference" : "normal",
        opacity: isHovering ? 0.2 : 0.5,
      }}
      layout
    />
  )
}
