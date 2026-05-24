'use client'

import type { ReactNode } from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

type Experience = {
  id: string
  role: string
  company: string
  dates?: string
  description: ReactNode
}

const experiences: Experience[] = [
  {
    id: '1',
    role: 'Frontend Web Developer',
    company: 'Penn Labs',
    dates: '2025 - Present',
    description:
      <>
        Developer in the University of Pennsylvania's in student-run {' '} <a href="https://pennlabs.org/" target="_blank" rel="noopener noreferrer">dev team</a> maintaining products used by thousands of Penn students every month. Enhanced usability of Penn Course Plan, a schedule building tool, and contributed as a core developer to Penn Marketplace, an upcoming peer-to-peer e-commerce platform for the Penn community.
      </>
  },
  {
    id: '2',
    role: 'Software Engineering Intern',
    company: 'U.S. Navy',
    dates: 'Summer 2024, 2025',
    description:
      <>
        Spent two summers as a full-time researcher at the U.S. Naval Research Laboratory in Washington, D.C. Built CrystalEyes, an image analysis platform that automates extraction of ice crystal morphology data. CrystalEyes rapidly evaluates antifreeze proteins that have potential applications in organ and tissue cryopreservation. Published in the {' '}<a href="https://pubs.acs.org/doi/full/10.1021/acsanm.5c00031" target="_blank" rel="noopener noreferrer">American Chemical Society</a> and awarded Best Presentation for the Optical Physics Branch. Check out the dev portfolio {' '} <a href="public/andrew-dev-sample.pdf" target="_blank" rel="noopener noreferrer">here</a>.
    </>
  },
  {
    id: '3',
    role: 'ML Engineer',
    company: 'Independent research',
    dates: '2023 - 2024',
    description: (
      <>
      </>
    ),
  }
]

export function ExperienceSection() {
  return (
    <section
      id="experience"
      className="flex min-h-svh w-full flex-col justify-center py-16 md:h-screen md:snap-start md:snap-always md:py-0"
    >
      <div
        data-reveal
        className="mx-auto w-full max-w-3xl px-6 py-24 opacity-0 translate-y-14 transition-all duration-700 ease-out will-change-transform motion-reduce:translate-y-0 motion-reduce:opacity-100"
      >
        <h2 className="font-heading mb-12 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Experience
        </h2>
        <Accordion type="single" collapsible className="w-full">
          {experiences.map((exp) => (
            <AccordionItem
              key={exp.id}
              value={exp.id}
              className="border-border/50"
            >
              <AccordionTrigger className="group py-6 hover:no-underline">
                <div className="flex w-full items-center justify-between pr-4">
                  <span className="text-left text-base font-medium text-foreground transition-colors group-hover:text-primary sm:text-lg">
                    {exp.role}
                    {exp.company ? (
                      <>
                        {' '}
                        <span className="text-muted-foreground">
                          @ {exp.company}
                        </span>
                      </>
                    ) : null}
                  </span>
                  <span className="shrink-0 text-sm text-muted-foreground">
                    {exp.dates}
                  </span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pb-6">
                <div className="leading-relaxed text-muted-foreground [&_a]:font-medium [&_a]:text-foreground [&_a]:underline [&_a]:underline-offset-4 [&_a]:transition-colors [&_a:hover]:text-primary">
                  {exp.description}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
