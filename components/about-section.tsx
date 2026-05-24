'use client'

import Image from 'next/image'

export function AboutSection() {
  return (
    <section
      id="about"
      className="flex min-h-svh w-full flex-col justify-center py-16 md:h-screen md:snap-start md:snap-always md:py-0"
    >
      <div
        data-reveal
        className="mx-auto flex w-full max-w-4xl flex-col items-center gap-8 px-6 opacity-0 translate-y-14 transition-all duration-700 ease-out will-change-transform md:flex-row md:items-center md:gap-10 motion-reduce:translate-y-0 motion-reduce:opacity-100"
      >
        <div className="relative h-40 w-40 shrink-0 overflow-hidden rounded-full border border-border/50 bg-muted/30 sm:h-48 sm:w-48">
          <Image
            src="/andrew.jpg"
            alt="Portrait of Andrew Kim"
            fill
            className="object-cover"
            sizes="192px"
          />
        </div>
        <div className="flex-1 text-center md:text-left">
          <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Hi, I&apos;m Andrew!
          </h2>
          <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground">
            I'm a sophomore at the University of Pennsylvania studying CS. I like building simple, functional, and reliable applications with Python and Next.js. Previously, I've worked at the U.S. Naval Research Lab; now, I'm part of Penn Labs building Penn Marketplace, an intra-university digital market. When I have time to myself, I like reading, lifting, playing the piano, and listening to Vampire Weekend.
          </p>
        </div>
      </div>
    </section>
  )
}
