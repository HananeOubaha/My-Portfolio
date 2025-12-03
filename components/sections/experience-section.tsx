"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Briefcase, GraduationCap, Award } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function ExperienceSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const { t } = useLanguage()

  const experiences = [
    {
      type: "work",
      title: t.experience.work.title,
      organization: "Team Elghazi",
      location: "Casablanca",
      date: "June 2025 - August 2025",
      description: t.experience.work.description,
      tech: ["Django REST", "PostgreSQL", "React", "Next.js", "Docker", "Tailwind"],
    },
  ]

  const education = [
    {
      type: "education",
      title: "Full-Stack Web Development",
      organization: "YOUCODE - UM6P",
      date: "2024 - 2026",
      description: t.experience.education.youcode,
    },
    {
      type: "education",
      title: "Preparatory Cycle",
      organization: "ENSA-AGADIR",
      date: "2020 - 2023",
      description: t.experience.education.ensa,
    },
    {
      type: "education",
      title: "Baccalaureate in Physical Sciences",
      organization: "Lycée Oulad Hriz",
      date: "2019 - 2020",
      description: t.experience.education.bac,
    },
  ]

  const certifications = [
    {
      type: "certification",
      title: "ALX AiCE - AI Career Essentials",
      organization: "ALX MAROC",
      date: "2024",
      description: t.experience.certification.alx,
    },
  ]

  const allItems = [...experiences, ...education, ...certifications]

  return (
    <section id="experience" ref={ref} className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-4xl mx-auto w-full">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="text-[var(--gold)] text-sm tracking-widest uppercase">{t.experience.section}</span>
          <h2 className="text-4xl md:text-5xl font-display text-gradient mt-2">{t.experience.title}</h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">{t.experience.description}</p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Glowing path line */}
          <motion.div
            className="absolute left-8 top-0 bottom-0 w-px md:left-1/2 md:-translate-x-px"
            style={{
              background: "linear-gradient(to bottom, var(--lilac), var(--rose-quartz), var(--gold))",
            }}
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : {}}
            transition={{ duration: 1.5 }}
          />

          {/* Timeline items */}
          {allItems.map((item, index) => {
            const isLeft = index % 2 === 0
            const Icon = item.type === "work" ? Briefcase : item.type === "education" ? GraduationCap : Award
            const iconColor =
              item.type === "work" ? "var(--gold)" : item.type === "education" ? "var(--lilac)" : "var(--rose-quartz)"

            return (
              <motion.div
                key={`${item.title}-${index}`}
                className={`relative flex items-center gap-8 mb-12 ${isLeft ? "md:flex-row" : "md:flex-row-reverse"}`}
                initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                {/* Timeline marker */}
                <motion.div
                  className="absolute left-8 md:left-1/2 w-4 h-4 rounded-full -translate-x-1/2 z-10"
                  style={{
                    backgroundColor: iconColor,
                    boxShadow: `0 0 20px ${iconColor}`,
                  }}
                  whileHover={{ scale: 1.5 }}
                />

                {/* Content card */}
                <div className={`ml-16 md:ml-0 md:w-[calc(50%-2rem)] ${isLeft ? "md:pr-8" : "md:pl-8"}`}>
                  <motion.div
                    className="glass-card rounded-2xl p-6"
                    whileHover={{ scale: 1.02 }}
                    style={{
                      boxShadow: `0 0 20px ${iconColor}10`,
                    }}
                  >
                    {/* Header */}
                    <div className="flex items-start gap-4 mb-4">
                      <div className="p-3 rounded-xl" style={{ backgroundColor: `${iconColor}20` }}>
                        <Icon className="w-5 h-5" style={{ color: iconColor }} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                        <p className="text-sm" style={{ color: iconColor }}>
                          {item.organization}
                        </p>
                        {"location" in item && <p className="text-xs text-muted-foreground">{item.location}</p>}
                      </div>
                    </div>

                    {/* Date */}
                    <span className="text-xs text-muted-foreground">{item.date}</span>

                    {/* Description */}
                    <p className="text-sm text-foreground/70 mt-3 leading-relaxed">{item.description}</p>

                    {/* Tech stack for work experience */}
                    {"tech" in item && item.tech && (
                      <div className="flex flex-wrap gap-2 mt-4">
                        {item.tech.map((tech) => (
                          <span key={tech} className="px-2 py-1 text-xs rounded-full glass">
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}
                  </motion.div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
