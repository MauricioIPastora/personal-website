"use client"

import { useState, useEffect } from "react"

export function useMobile() {
  // Default to true to prevent flash of desktop nav on mobile during SSR
  const [isMobile, setIsMobile] = useState(true)

  useEffect(() => {
    const checkIfMobile = () => {
      // Increased breakpoint to 1024px to accommodate the full nav width
      setIsMobile(window.innerWidth < 1024)
    }

    // Initial check
    checkIfMobile()

    // Add event listener
    window.addEventListener("resize", checkIfMobile)

    // Clean up
    return () => window.removeEventListener("resize", checkIfMobile)
  }, [])

  return isMobile
}

