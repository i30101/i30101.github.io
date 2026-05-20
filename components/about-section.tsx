'use client'

import { motion } from 'framer-motion'

export function AboutSection() {
  return (
    <section
      id="about"
      className="h-screen w-full snap-start snap-always flex flex-col justify-center"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
        viewport={{ once: false, amount: 0.1 }}
        className="mx-auto flex w-full max-w-4xl flex-row items-center gap-10 px-6"
      >
        <div className="h-48 w-48 shrink-0 overflow-hidden rounded-full border border-border/50 bg-muted/30" />
        <p className="flex-1 text-pretty text-base leading-relaxed text-muted-foreground">
          Andrew Kim is a frontend developer focused on accessible, pixel-perfect
          interfaces. He builds high-performance React and Next.js experiences
          with clean architecture, thoughtful interactions, and an eye for
          detail.
        </p>
      </motion.div>
    </section>
  )
}
