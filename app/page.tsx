import { MouseGradient } from '@/components/mouse-gradient'
import { Navigation } from '@/components/navigation'
import { HeroSection } from '@/components/hero-section'
import { ExperienceSection } from '@/components/experience-section'
import { ProjectsSection } from '@/components/projects-section'

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <MouseGradient />
      <Navigation />
      <HeroSection />
      <ExperienceSection />
      <ProjectsSection />
      <footer className="pb-24 text-center text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} Andrew Kim. All rights reserved.</p>
      </footer>
    </main>
  )
}
