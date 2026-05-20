'use client'

import { Badge } from '@/components/ui/badge'
import { ArrowUpRight } from 'lucide-react'

const projects = [
  {
    id: '1',
    title: 'ThoccWorks',
    description:
      'A comprehensive search engine for mechanical keyboard parts, helping enthusiasts find the perfect components for their custom builds.',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'PostgreSQL'],
    featured: true,
  },
  {
    id: '2',
    title: 'Shopii',
    description:
      'AI-powered browser extension that helps users find the best deals and alternatives while shopping online.',
    tech: ['React', 'Chrome Extension', 'OpenAI', 'Node.js'],
    featured: false,
  },
  {
    id: '3',
    title: 'Gummi',
    description:
      'Social commerce platform connecting creators with their communities through curated product recommendations.',
    tech: ['React Native', 'Firebase', 'Stripe'],
    featured: false,
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="mx-auto min-h-screen max-w-5xl px-6 py-24">
      <h2 className="font-heading mb-12 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        Projects
      </h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <article
            key={project.id}
            className={`group relative flex flex-col rounded-xl border border-border/50 bg-card p-6 backdrop-blur-sm transition-all duration-300 hover:border-primary/30 hover:bg-secondary/80 ${
              project.featured ? 'md:col-span-2 md:row-span-2' : ''
            }`}
          >
            <div className="flex items-start justify-between">
              <h3
                className={`font-heading font-semibold tracking-tight text-foreground transition-colors group-hover:text-primary ${
                  project.featured ? 'text-2xl' : 'text-lg'
                }`}
              >
                {project.title}
              </h3>
              <ArrowUpRight className="size-5 shrink-0 text-muted-foreground opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary group-hover:opacity-100" />
            </div>
            <p
              className={`mt-3 flex-1 leading-relaxed text-muted-foreground ${
                project.featured ? 'text-base' : 'text-sm'
              }`}
            >
              {project.description}
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <Badge
                  key={tech}
                  variant="outline"
                  className="border-border/50 bg-transparent text-muted-foreground transition-colors duration-200 hover:border-primary/50 hover:text-primary"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
