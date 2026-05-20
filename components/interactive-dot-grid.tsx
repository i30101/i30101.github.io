'use client'

import { useEffect, useRef } from 'react'

export function InteractiveDotGrid() {
  const gridRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const target = gridRef.current
    if (!target) return

    let frame = 0
    const handleMouseMove = (event: MouseEvent) => {
      if (frame) return
      frame = window.requestAnimationFrame(() => {
        frame = 0
        target.style.setProperty('--mouse-x', `${event.clientX}px`)
        target.style.setProperty('--mouse-y', `${event.clientY}px`)
      })
    }

    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    return () => {
      if (frame) window.cancelAnimationFrame(frame)
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <div
      ref={gridRef}
      aria-hidden="true"
      className="interactive-dot-grid pointer-events-none fixed inset-0 z-0"
    />
  )
}
