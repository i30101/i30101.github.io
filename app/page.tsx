'use client'

import { useEffect, useRef } from 'react'
import { AboutSection } from '@/components/about-section'
import { ExperienceSection } from '@/components/experience-section'
import { HeroSection } from '@/components/hero-section'
import { InteractiveDotGrid } from '@/components/interactive-dot-grid'
import { Navigation } from '@/components/navigation'
import { ProjectsSection } from '@/components/projects-section'

export default function Home() {
  const scrollContainerRef = useRef<HTMLElement | null>(null)
  const navigateToSectionRef = useRef<(sectionId: string) => void>(() => {})

  useEffect(() => {
    const container = scrollContainerRef.current

    if (!container) {
      return
    }

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches
    const isDesktop = window.matchMedia('(min-width: 768px)').matches
    const sections = Array.from(container.querySelectorAll<HTMLElement>('section'))
    const revealItems = Array.from(
      container.querySelectorAll<HTMLElement>('[data-reveal]')
    )
    const getRevealItem = (section: HTMLElement) =>
      section.querySelector<HTMLElement>('[data-reveal]')
    const setRevealState = (item: HTMLElement | null, isVisible: boolean) => {
      if (!item) {
        return
      }

      item.classList.toggle('opacity-0', !isVisible)
      item.classList.toggle('translate-y-14', !isVisible)
      item.classList.toggle('opacity-100', isVisible)
      item.classList.toggle('translate-y-0', isVisible)
    }
    const getClosestSectionIndex = () =>
      sections.reduce((closestIndex, section, index) => {
        const closestDistance = Math.abs(
          sections[closestIndex].offsetTop - container.scrollTop
        )
        const currentDistance = Math.abs(section.offsetTop - container.scrollTop)

        return currentDistance < closestDistance ? index : closestIndex
      }, 0)

    if (prefersReducedMotion) {
      revealItems.forEach((item) => {
        setRevealState(item, true)
      })
      return
    }

    if (!isDesktop) {
      revealItems.forEach((item) => {
        setRevealState(item, true)
      })

      navigateToSectionRef.current = (sectionId: string) => {
        const targetSection = sections.find((section) => section.id === sectionId)

        if (!targetSection) {
          return
        }

        targetSection.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        })
      }

      return () => {
        navigateToSectionRef.current = () => {}
      }
    }

    let animationFrame = 0
    let deltaResetTimeout: number | undefined
    let revealTimeout: number | undefined
    let accumulatedDelta = 0
    let isAnimatingScroll = false
    let activeSectionIndex = getClosestSectionIndex()

    const revealSection = (sectionIndex: number) => {
      revealItems.forEach((item, index) => {
        setRevealState(item, index === sectionIndex)
      })
    }

    revealItems.forEach((item) => setRevealState(item, false))
    revealTimeout = window.setTimeout(() => {
      revealSection(activeSectionIndex)
    }, 80)

    const easeInOutCubic = (progress: number) =>
      progress < 0.5
        ? 4 * progress * progress * progress
        : 1 - Math.pow(-2 * progress + 2, 3) / 2
    const scrollDuration = 500
    const revealDelay = 320

    const animateToSection = (targetIndex: number) => {
      const targetSection = sections[targetIndex]

      if (!targetSection) {
        return
      }

      const targetTop = targetSection.offsetTop
      const startTop = container.scrollTop
      const distance = targetTop - startTop

      if (distance === 0) {
        return
      }

      const startTime = performance.now()

      isAnimatingScroll = true
      container.style.scrollSnapType = 'none'
      setRevealState(getRevealItem(targetSection), false)

      if (revealTimeout) {
        window.clearTimeout(revealTimeout)
      }

      revealTimeout = window.setTimeout(() => {
        revealSection(targetIndex)
      }, revealDelay)

      const step = (currentTime: number) => {
        const elapsed = currentTime - startTime
        const progress = Math.min(elapsed / scrollDuration, 1)
        const easedProgress = easeInOutCubic(progress)

        container.scrollTop = startTop + distance * easedProgress

        if (progress < 1) {
          animationFrame = window.requestAnimationFrame(step)
          return
        }

        container.scrollTop = targetTop
        container.style.scrollSnapType = ''
        isAnimatingScroll = false
        activeSectionIndex = targetIndex
        revealSection(targetIndex)
      }

      animationFrame = window.requestAnimationFrame(step)
    }

    navigateToSectionRef.current = (sectionId: string) => {
      const targetIndex = sections.findIndex((section) => section.id === sectionId)

      if (targetIndex === -1) {
        return
      }

      if (isAnimatingScroll) {
        return
      }

      if (targetIndex === activeSectionIndex) {
        revealSection(targetIndex)
        return
      }

      animateToSection(targetIndex)
    }

    const handleWheel = (event: WheelEvent) => {
      if (Math.abs(event.deltaY) < 4) {
        return
      }

      event.preventDefault()

      if (isAnimatingScroll || sections.length === 0) {
        return
      }

      accumulatedDelta += event.deltaY

      if (deltaResetTimeout) {
        window.clearTimeout(deltaResetTimeout)
      }

      deltaResetTimeout = window.setTimeout(() => {
        accumulatedDelta = 0
      }, 140)

      if (Math.abs(accumulatedDelta) < 30) {
        return
      }

      const direction = accumulatedDelta > 0 ? 1 : -1
      const currentIndex = activeSectionIndex

      const targetIndex = Math.max(
        0,
        Math.min(currentIndex + direction, sections.length - 1)
      )

      accumulatedDelta = 0

      if (targetIndex === currentIndex) {
        return
      }

      animateToSection(targetIndex)
    }

    container.addEventListener('wheel', handleWheel, { passive: false })

    return () => {
      navigateToSectionRef.current = () => {}
      container.removeEventListener('wheel', handleWheel)
      container.style.scrollSnapType = ''

      if (animationFrame) {
        window.cancelAnimationFrame(animationFrame)
      }

      if (deltaResetTimeout) {
        window.clearTimeout(deltaResetTimeout)
      }

      if (revealTimeout) {
        window.clearTimeout(revealTimeout)
      }
    }
  }, [])

  return (
    <main
      ref={scrollContainerRef}
      className="relative min-h-screen w-full overflow-visible touch-pan-y md:h-screen md:overflow-y-scroll md:snap-y md:snap-mandatory md:overscroll-y-contain"
    >
      <InteractiveDotGrid />
      <div className="relative z-10">
        <Navigation
          onNavigate={(sectionId) => {
            navigateToSectionRef.current(sectionId)
          }}
        />
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
      </div>
    </main>
  )
}
