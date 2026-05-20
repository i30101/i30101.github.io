'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Mail } from 'lucide-react'

export function HeroSection() {
  return (
    <section
      id="home"
      className="h-screen w-full snap-start snap-always flex flex-col justify-center"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: false, amount: 0.3 }}
        className="flex flex-col items-center px-6 text-center"
      >
        <h1 className="font-heading text-balance text-6xl font-bold tracking-tight text-foreground sm:text-7xl md:text-8xl lg:text-9xl">
          Andrew Kim
        </h1>
        <p className="mt-4 text-lg font-medium tracking-wide text-muted-foreground sm:text-xl">
          Frontend Developer
        </p>
        <p className="mt-6 max-w-md text-pretty text-base leading-relaxed text-muted-foreground">
          Building accessible, pixel-perfect web experiences with a focus on
          performance, usability, and clean code.
        </p>
        <div className="mt-8 flex items-center gap-6">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground transition-colors duration-200 hover:text-primary"
            aria-label="GitHub"
          >
            <Github className="size-6" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground transition-colors duration-200 hover:text-primary"
            aria-label="LinkedIn"
          >
            <Linkedin className="size-6" />
          </a>
          <a
            href="mailto:andrew@example.com"
            className="text-muted-foreground transition-colors duration-200 hover:text-primary"
            aria-label="Email"
          >
            <Mail className="size-6" />
          </a>
        </div>
      </motion.div>
    </section>
  )
}
