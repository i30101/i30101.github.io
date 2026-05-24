'use client'

import { Github, Linkedin, Mail } from 'lucide-react'

export function HeroSection() {
  return (
    <section
      id="home"
      className="flex min-h-svh w-full flex-col justify-center py-16 md:h-screen md:snap-start md:snap-always md:py-0"
    >
      <div
        data-reveal
        className="flex flex-col items-center px-6 text-center opacity-0 translate-y-14 transition-all duration-700 ease-out will-change-transform motion-reduce:translate-y-0 motion-reduce:opacity-100"
      >
        <h1 className="font-heading text-balance text-6xl font-bold tracking-tight text-foreground sm:text-7xl md:text-8xl lg:text-9xl">
          Andrew Kim
        </h1>
        <p className="mt-4 text-lg font-medium tracking-wide text-muted-foreground sm:text-xl">
          Software Developer
        </p>
        <p className="mt-6 max-w-md text-pretty text-base leading-relaxed text-muted-foreground">
          Building practical Python and web applications. Passionate about clean code, good documentation, and JetBrains Mono!
        </p>
        <div className="mt-8 flex items-center gap-6">
          <a
            href="https://github.com/i30101"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground transition-colors duration-200 hover:text-primary"
            aria-label="GitHub"
          >
            <Github className="size-6" />
          </a>
          <a
            href="https://linkedin.com/in/kim301/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground transition-colors duration-200 hover:text-primary"
            aria-label="LinkedIn"
          >
            <Linkedin className="size-6" />
          </a>
          <a
            href="mailto:kim301@upenn.edu"
            className="text-muted-foreground transition-colors duration-200 hover:text-primary"
            aria-label="Email"
          >
            <Mail className="size-6" />
          </a>
        </div>
      </div>
    </section>
  )
}
