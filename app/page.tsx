"use client"

import { useState, useEffect } from "react"
import dynamic from "next/dynamic"
import { HeroSection } from "@/components/sections/hero-section"
import { AboutSection } from "@/components/sections/about-section"
import { SkillsSection } from "@/components/sections/skills-section"
import { ProjectsSection } from "@/components/sections/projects-section"
import { ExperienceSection } from "@/components/sections/experience-section"
import { ContactSection } from "@/components/sections/contact-section"
import { Navigation } from "@/components/navigation"
import { CustomCursor } from "@/components/custom-cursor"
import { LoadingScreen } from "@/components/loading-screen"
import { ParticleField } from "@/components/particle-field"
import { LanguageProvider, useLanguage } from "@/lib/language-context"

const Scene3D = dynamic(() => import("@/components/scene-3d").then((mod) => mod.Scene3D), {
  ssr: false,
})

function HomeContent() {
  const [isLoading, setIsLoading] = useState(true)
  const [activeSection, setActiveSection] = useState("hero")
  const { t } = useLanguage()

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2500)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "about", "skills", "projects", "experience", "contact"]
      const scrollPosition = window.scrollY + window.innerHeight / 3

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  if (isLoading) {
    return <LoadingScreen />
  }

  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <CustomCursor />
      <Navigation activeSection={activeSection} />

      {/* Fixed 3D Background */}
      <div className="fixed inset-0 z-0">
        <Scene3D activeSection={activeSection} />
      </div>

      {/* Particle overlay */}
      <ParticleField />

      {/* Content sections */}
      <div className="relative z-10">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <ContactSection />
      </div>

      {/* Footer */}
      <footer className="relative z-10 py-8 text-center">
        <p className="text-muted-foreground text-sm">
          {t.footer.madeWith} <span className="text-[var(--rose-quartz)]">&#10084;</span> in Morocco
        </p>
        <p className="text-muted-foreground/50 text-xs mt-2">© 2025 Hanane Oubaha</p>
      </footer>
    </main>
  )
}

export default function Home() {
  return (
    <LanguageProvider>
      <HomeContent />
    </LanguageProvider>
  )
}
