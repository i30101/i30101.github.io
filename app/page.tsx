import { InteractiveDotGrid } from '@/components/interactive-dot-grid'
import { Navigation } from '@/components/navigation'
import { HeroSection } from '@/components/hero-section'
import { AboutSection } from '@/components/about-section'
import { ExperienceSection } from '@/components/experience-section'
import { ProjectsSection } from '@/components/projects-section'

export default function Home() {
  return (
    <main className="h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth">
      <InteractiveDotGrid />
      <div className="relative z-10">
        <Navigation />
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <footer className="pb-24 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Andrew Kim. All rights reserved.</p>
        </footer>
      </div>
    </main>
  )
}
