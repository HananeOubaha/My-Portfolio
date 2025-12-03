"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { useLanguage } from "@/lib/language-context"

const technicalSkills = [
  { name: "Java", category: "backend", color: "#FFD700", ring: true },
  { name: "Spring Boot", category: "backend", color: "#C8A2C8", ring: true },
  { name: "React.js", category: "frontend", color: "#E5B8D0", ring: false },
  { name: "Django REST", category: "backend", color: "#9370DB", ring: true },
  { name: "PostgreSQL", category: "database", color: "#DDA0DD", ring: false },
  { name: "Tailwind CSS", category: "frontend", color: "#F4C2C2", ring: false },
  { name: "Docker", category: "devops", color: "#FFD700", ring: true },
  { name: "Python", category: "backend", color: "#C8A2C8", ring: false },
  { name: "JavaScript", category: "frontend", color: "#E5B8D0", ring: true },
  { name: "Laravel", category: "backend", color: "#9370DB", ring: false },
  { name: "PHP", category: "backend", color: "#DDA0DD", ring: true },
  { name: "MySQL", category: "database", color: "#F4C2C2", ring: false },
]

export function SkillsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)
  const { t } = useLanguage()

  const softSkills = ["Teamwork", "Agile/SCRUM", "Problem Solving", "Communication"]

  return (
    <section id="skills" ref={ref} className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="text-[var(--gold)] text-sm tracking-widest uppercase">{t.skills.section}</span>
          <h2 className="text-4xl md:text-5xl font-display text-gradient mt-2">{t.skills.title}</h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">{t.skills.description}</p>
        </motion.div>

        <div className="relative">
          {/* Orbital paths decoration */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-[300px] h-[300px] md:w-[500px] md:h-[500px] rounded-full border border-[var(--lilac)]/10" />
            <div className="absolute w-[200px] h-[200px] md:w-[350px] md:h-[350px] rounded-full border border-[var(--gold)]/10" />
            <div className="absolute w-[100px] h-[100px] md:w-[200px] md:h-[200px] rounded-full border border-[var(--rose)]/10" />
          </div>

          {/* Skills planets grid */}
          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 md:gap-8">
            {technicalSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                className="relative group flex flex-col items-center"
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{
                  duration: 0.6,
                  delay: 0.2 + index * 0.08,
                  type: "spring",
                  stiffness: 200,
                }}
                onMouseEnter={() => setHoveredSkill(skill.name)}
                onMouseLeave={() => setHoveredSkill(null)}
              >
                <motion.div
                  className="relative cursor-pointer"
                  whileHover={{ scale: 1.15 }}
                  animate={hoveredSkill === skill.name ? { y: -10 } : { y: 0 }}
                >
                  {/* Planet glow */}
                  <motion.div
                    className="absolute inset-0 rounded-full blur-xl"
                    style={{
                      background: skill.color,
                      opacity: hoveredSkill === skill.name ? 0.5 : 0.2,
                    }}
                    animate={hoveredSkill === skill.name ? { scale: 1.3 } : { scale: 1 }}
                  />

                  {/* Planet body */}
                  <div
                    className="relative rounded-full flex items-center justify-center overflow-hidden w-20 h-20"
                    style={{
                      background: `radial-gradient(circle at 30% 30%, ${skill.color}, ${skill.color}80 50%, ${skill.color}40 100%)`,
                      boxShadow: `
                        inset -8px -8px 20px rgba(0,0,0,0.4),
                        inset 4px 4px 15px rgba(255,255,255,0.3),
                        0 0 30px ${skill.color}50
                      `,
                    }}
                  >
                    {/* Planet surface texture */}
                    <div
                      className="absolute inset-0 opacity-30"
                      style={{
                        background: `
                          radial-gradient(circle at 70% 30%, rgba(255,255,255,0.4) 0%, transparent 30%),
                          radial-gradient(circle at 20% 80%, rgba(0,0,0,0.2) 0%, transparent 40%)
                        `,
                      }}
                    />

                    {/* Ring for some planets */}
                    {skill.ring && (
                      <motion.div
                        className="absolute w-[140%] h-[30%] border-2 rounded-full pointer-events-none"
                        style={{
                          borderColor: `${skill.color}`,
                          transform: "rotateX(75deg)",
                        }}
                        animate={{ rotate: 360 }}
                        transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                      />
                    )}
                  </div>

                  {/* Hover info card */}
                  <motion.div
                    className="absolute -top-16 left-1/2 -translate-x-1/2 glass px-4 py-2 rounded-xl text-center whitespace-nowrap z-20"
                    initial={{ opacity: 0, y: 10, scale: 0.9 }}
                    animate={
                      hoveredSkill === skill.name ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 10, scale: 0.9 }
                    }
                  >
                    <span className="text-sm font-medium text-white" style={{ textShadow: `0 0 10px ${skill.color}` }}>
                      {skill.name}
                    </span>
                    <div className="text-xs text-white/70 capitalize">
                      {t.skills.categories[skill.category as keyof typeof t.skills.categories]}
                    </div>
                  </motion.div>
                </motion.div>

                {/* Skill name below planet */}
                <motion.span
                  className="mt-4 text-xs md:text-sm font-medium text-center text-white"
                  style={{
                    textShadow: hoveredSkill === skill.name ? `0 0 10px ${skill.color}` : "0 0 5px rgba(0,0,0,0.5)",
                  }}
                  animate={hoveredSkill === skill.name ? { color: skill.color } : { color: "#ffffff" }}
                >
                  {skill.name}
                </motion.span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Soft skills */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.2 }}
        >
          <h3 className="text-xl font-display text-[var(--lilac)] mb-6">{t.skills.softSkills}</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {softSkills.map((skill, index) => (
              <motion.span
                key={skill}
                className="px-6 py-3 rounded-full glass text-white"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 1.4 + index * 0.1 }}
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "rgba(200, 162, 200, 0.3)",
                }}
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
