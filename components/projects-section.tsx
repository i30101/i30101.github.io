'use client'

import { Badge } from '@/components/ui/badge'
import { ArrowUpRight } from 'lucide-react'

type Project = {
  id: string
  title: string
  description: string
  tech: string[]
  featured: boolean
  tall?: boolean
  href?: string
}

const slugify = (value: string) =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')

const projects: Project[] = [
  {
    id: '1',
    title: 'CrystalEyes',
    description:
      'An image analysis platform that automates the extraction of morphometric data from nano-ice crystal microscopy. The stack includes Cellpose for contour segmenetation, OpenCV for image processing, a custom binary parser for decoding proprietary instrument files, and a Tkinter/Matplotlib GUI for real-time video playback, graphing, and data export. CrystalEyes fully automates a previously manual process and reduces processing time by over 95%, while also unlocking temporal tracking of crystal size and shape that was infeasible at scale. This work contributed to a publication by the American Chemical Society in March 2025.',
    tech: ['Python', 'PyTorch', 'Cellpose', 'Matplotlib', 'NumPy', 'Tkinter', 'Linkam'],
    featured: true,
    href: 'https://github.com/i30101/CrystalEyes'
  },
  {
    id: '2',
    title: 'woodsonscioly.org',
    description: 
      'Founding developer of C. G. Woodson High School\'s Science Olympiad team, reaching 11k+ impressions. Developed modular React components for event listings, team bios, and competition results. Created a custom Markdown parser to automate blog post rendering.',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    featured: false,
    tall: true,
    href: 'https://www.woodsonscioly.org/'
  },
  {
    id: '3',
    title: 'Shopii',
    description:
      'AI-powered browser extension that helps users find the best deals and alternatives while shopping online.',
    tech: ['React', 'Chrome Extension', 'OpenAI', 'Node.js', 'SQLite'],
    featured: false,
    href: 'https://github.com/25tyler/shopii.git'
  },
  {
    id: '4',
    title: 'Penn Marketplace',
    description: 
      'An online marketplace where Penn students can buy, list, and sell items and sublets',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Shadcn'],
    featured: false,
    href: 'https://github.com/pennlabs/penn-marketplace.git',
  },
  {
    id: '5',
    title: 'thocc.works',
    description: 
      'A comprehensive search engine for mechanical keyboard parts, helping enthusiasts find the perfect components for their custom builds.',
    tech: ['Next.js', 'PostgreSQL', 'pgvector', 'Groq API', 'Gemini API', 'Jina API'],
    featured: false,
    href: 'https://www.thocc.works/',
  }
]

const projectSlugCounts = new Map<string, number>()

const projectsWithAnchors = projects.map((project) => {
  const baseSlug = slugify(project.title) || `project-${project.id}`
  const occurrence = (projectSlugCounts.get(baseSlug) ?? 0) + 1

  projectSlugCounts.set(baseSlug, occurrence)

  return {
    ...project,
    anchorId:
      occurrence === 1
        ? `project-${baseSlug}`
        : `project-${baseSlug}-${occurrence}`,
  }
})

export function ProjectsSection() {
  return (
    <section
      id="projects"
      className="flex min-h-svh w-full flex-col justify-center py-16 md:h-screen md:snap-start md:snap-always md:py-0"
    >
      <div
        data-reveal
        className="mx-auto w-full max-w-5xl px-6 py-24 opacity-0 translate-y-14 transition-all duration-700 ease-out will-change-transform motion-reduce:translate-y-0 motion-reduce:opacity-100"
      >
        <h2 className="font-heading mb-12 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Projects
        </h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {projectsWithAnchors.map((project) => {
            const cardClassName = `group relative flex flex-col rounded-xl border border-border/50 bg-card p-6 backdrop-blur-sm transition-all duration-300 hover:border-primary/30 hover:bg-secondary/80 ${
              project.featured ? 'md:col-span-2 md:row-span-2' : ''
            } ${project.tall ? 'md:row-span-2' : ''} ${project.href ? 'cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2' : ''}`

            const cardContent = (
              <>
                <div className="flex items-start justify-between">
                  <h3
                    className={`font-heading font-semibold tracking-tight text-foreground transition-colors group-hover:text-primary ${
                      project.featured ? 'text-2xl' : 'text-lg'
                    }`}
                  >
                    {project.title}
                  </h3>
                  {project.href ? (
                    <ArrowUpRight className="size-5 shrink-0 text-muted-foreground opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary group-hover:opacity-100" />
                  ) : null}
                </div>
                <p
                  className={`mt-3 flex-1 pb-6 leading-relaxed text-muted-foreground ${
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
              </>
            )

            if (project.href) {
              return (
                <a
                  key={project.id}
                  id={project.anchorId}
                  data-project-slug={project.anchorId}
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cardClassName}
                >
                  {cardContent}
                </a>
              )
            }

            return (
              <article
                key={project.id}
                id={project.anchorId}
                data-project-slug={project.anchorId}
                className={cardClassName}
              >
                {cardContent}
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
