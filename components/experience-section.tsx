'use client'

import { motion } from 'framer-motion'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

const experiences = [
  {
    id: '1',
    role: 'Frontend Web Developer',
    company: 'Penn Labs',
    dates: '2023 — Present',
    description:
      'Developing and maintaining web applications for the University of Pennsylvania community. Building responsive, accessible interfaces using React, TypeScript, and modern CSS. Collaborating with designers and backend engineers to deliver impactful products used by thousands of students.',
  },
  {
    id: '2',
    role: 'Software Engineering Intern',
    company: 'U.S. Navy',
    dates: 'Summer 2023',
    description:
      'Designed and implemented internal tools to streamline data processing workflows. Worked with cross-functional teams to identify pain points and deliver software solutions that improved operational efficiency.',
  },
]

export function ExperienceSection() {
  return (
    <section
      id="experience"
      className="h-screen w-full snap-start snap-always flex flex-col justify-center"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
        viewport={{ once: false, amount: 0.1 }}
        className="mx-auto w-full max-w-3xl px-6 py-24"
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
                    {exp.role}{' '}
                    <span className="text-muted-foreground">
                      @ {exp.company}
                    </span>
                  </span>
                  <span className="shrink-0 text-sm text-muted-foreground">
                    {exp.dates}
                  </span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pb-6">
                <p className="leading-relaxed text-muted-foreground">
                  {exp.description}
                </p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </motion.div>
    </section>
  )
}
