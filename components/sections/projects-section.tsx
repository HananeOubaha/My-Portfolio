"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Github, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/language-context"

const projects = [
  {
    title: "Youdemy",
    descriptionKey: "youdemy",
    tech: ["PHP (OOP)", "SQL", "JavaScript", "HTML", "CSS", "Tailwind", "MySQL", "UML"],
    color: "#C8A2C8",
    github: "https://github.com/HananeOubaha/Youdemy.git",
    featured: true,
  },
  {
    title: "VIBE",
    descriptionKey: "vibe",
    tech: ["Laravel", "PHP", "HTML", "CSS", "JavaScript", "WebSockets"],
    color: "#E5B8D0",
    github: "https://github.com/HananeOubaha/vibe.3.git",
    featured: true,
  },
  {
    title: "Drive & Loc",
    descriptionKey: "driveLoc",
    tech: ["PHP (OOP)", "SQL", "JavaScript", "HTML", "CSS", "Tailwind", "MySQL", "UML", "DataTables"],
    color: "#9370DB",
    github: "https://github.com/HananeOubaha/brief10-drive-loc.git",
    featured: true,
  },
  {
    title: "Educational Platform",
    descriptionKey: "educational",
    tech: ["Django REST", "PostgreSQL", "React", "Next.js", "CSS", "Tailwind", "Docker"],
    color: "#FFD700",
    github: null,
    featured: true,
  },
  {
    title: "SmartShop",
    descriptionKey: "smartshop",
    tech: [
      "Spring Boot",
      "Java 17",
      "REST/JSON",
      "PostgreSQL",
      "Spring Data JPA",
      "MapStruct",
      "Lombok",
      "JUnit",
      "Mockito",
      "Swagger",
    ],
    color: "#F4C2C2",
    github: "https://github.com/HananeOubaha/SmartShop_crois-.git",
    featured: true,
  },
]

export function ProjectsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)
  const { t } = useLanguage()

  return (
    <section id="projects" ref={ref} className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="text-[var(--gold)] text-sm tracking-widest uppercase">{t.projects.section}</span>
          <h2 className="text-4xl md:text-5xl font-display text-gradient mt-2">{t.projects.title}</h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">{t.projects.description}</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className={`relative group ${index === 3 ? "lg:col-start-1" : ""}`}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <motion.div
                className="relative glass-card rounded-2xl p-6 h-full overflow-hidden"
                whileHover={{ scale: 1.02 }}
                style={{
                  boxShadow: hoveredProject === index ? `0 0 40px ${project.color}30` : "none",
                }}
              >
                {/* Planet decoration */}
                <motion.div
                  className="absolute -top-10 -right-10 w-32 h-32 rounded-full opacity-20"
                  style={{
                    background: `radial-gradient(circle, ${project.color} 0%, transparent 70%)`,
                  }}
                  animate={hoveredProject === index ? { scale: 1.5, opacity: 0.3 } : { scale: 1, opacity: 0.2 }}
                />

                {/* Featured badge */}
                {project.featured && (
                  <div className="absolute top-4 right-4">
                    <span
                      className="px-3 py-1 text-xs rounded-full"
                      style={{
                        backgroundColor: `${project.color}20`,
                        color: project.color,
                      }}
                    >
                      {t.projects.featured}
                    </span>
                  </div>
                )}

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-2xl font-display mb-3" style={{ color: project.color }}>
                    {project.title}
                  </h3>

                  <p className="text-foreground/70 text-sm leading-relaxed mb-6">
                    {
                      t.projects.projectDescriptions[
                        project.descriptionKey as keyof typeof t.projects.projectDescriptions
                      ]
                    }
                  </p>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.slice(0, 5).map((tech) => (
                      <span key={tech} className="px-3 py-1 text-xs rounded-full glass">
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 5 && (
                      <span className="px-3 py-1 text-xs rounded-full glass text-muted-foreground">
                        +{project.tech.length - 5}
                      </span>
                    )}
                  </div>

                  <div className="flex gap-3">
                    {project.github ? (
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm text-foreground/70 hover:text-foreground transition-colors"
                        whileHover={{ x: 5 }}
                      >
                        <Github className="w-4 h-4" />
                        {t.projects.code}
                      </motion.a>
                    ) : (
                      <span className="flex items-center gap-2 text-sm text-foreground/40">
                        <Github className="w-4 h-4" />
                        {t.projects.private}
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* More projects link */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 1 }}
        >
          <Button
            variant="outline"
            className="glass border-[var(--lilac)]/30 text-[var(--lilac)] hover:bg-[var(--lilac)]/10 bg-transparent"
            asChild
          >
            <a href="https://github.com/HananeOubaha" target="_blank" rel="noopener noreferrer">
              <span>{t.projects.more}</span>
              <ChevronRight className="w-4 h-4 ml-2" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
