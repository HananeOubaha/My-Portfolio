"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Sparkles, Zap, Globe, Heart, MapPin } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const { t } = useLanguage()

  const values = [
    { icon: Sparkles, label: t.about.values.creativity, color: "#FFD700" },
    { icon: Zap, label: t.about.values.performance, color: "#C8A2C8" },
    { icon: Globe, label: t.about.values.impact, color: "#E5B8D0" },
    { icon: Heart, label: t.about.values.community, color: "#F4C2C2" },
  ]

  return (
    <section id="about" ref={ref} className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Planet visual */}
          <motion.div
            className="relative flex justify-center"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              {/* Glowing planet */}
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-br from-[var(--lilac)] via-[var(--rose-quartz)] to-[var(--gold)] opacity-20"
                animate={{
                  scale: [1, 1.05, 1],
                  opacity: [0.2, 0.3, 0.2],
                }}
                transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
              />

              {/* Inner planet */}
              <div className="absolute inset-4 rounded-full glass overflow-hidden flex items-center justify-center">
                <div className="text-center p-6">
                  <motion.div
                    className="text-6xl mb-2"
                    animate={{ rotate: [0, 5, -5, 0] }}
                    transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
                  >
                    <span role="img" aria-label="moon">
                      &#127769;
                    </span>
                  </motion.div>
                  <p className="text-[var(--gold)] font-display text-lg">Morocco</p>
                </div>
              </div>

              {/* Orbiting elements */}
              {values.map((value, index) => (
                <motion.div
                  key={value.label}
                  className="absolute w-12 h-12 rounded-full glass flex items-center justify-center"
                  style={{
                    top: `${50 + 45 * Math.sin((index * Math.PI) / 2)}%`,
                    left: `${50 + 45 * Math.cos((index * Math.PI) / 2)}%`,
                    transform: "translate(-50%, -50%)",
                  }}
                  animate={{
                    y: [0, -10, 0],
                    boxShadow: [`0 0 10px ${value.color}40`, `0 0 20px ${value.color}60`, `0 0 10px ${value.color}40`],
                  }}
                  transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, delay: index * 0.5 }}
                >
                  <value.icon className="w-5 h-5" style={{ color: value.color }} />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.span
              className="text-[var(--gold)] text-sm tracking-widest uppercase"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.4 }}
            >
              {t.about.section}
            </motion.span>

            <h2 className="text-4xl md:text-5xl font-display text-gradient mt-2 mb-6">
              {t.about.greeting}{" "}
              <span role="img" aria-label="moon">
                &#127769;
              </span>
            </h2>

            <div className="space-y-4 text-foreground/80 text-lg leading-relaxed">
              <p>
                {t.about.description1.split("Full-Stack Developer")[0]}
                <span className="text-[var(--lilac)]">Full-Stack Developer</span>
                {t.about.description1.split("Full-Stack Developer")[1]}
              </p>
              <p>
                {t.about.description2.split("YOUCODE UM6P")[0]}
                <span className="text-[var(--gold)]">YOUCODE UM6P</span>
                {t.about.description2.split("YOUCODE UM6P")[1]}
              </p>
            </div>

            {/* Location badge */}
            <motion.div
              className="mt-8 inline-flex items-center gap-2 glass px-4 py-2 rounded-full"
              whileHover={{ scale: 1.05 }}
            >
              <MapPin className="w-4 h-4 text-[var(--rose-quartz)]" />
              <span className="text-sm text-foreground/70">{t.about.location}</span>
            </motion.div>

            {/* Values */}
            <div className="mt-8 grid grid-cols-2 gap-4">
              {values.map((value, index) => (
                <motion.div
                  key={value.label}
                  className="flex items-center gap-3 glass-card rounded-xl p-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  whileHover={{ scale: 1.02, backgroundColor: "rgba(200, 162, 200, 0.1)" }}
                >
                  <value.icon className="w-5 h-5" style={{ color: value.color }} />
                  <span className="text-sm font-medium">{value.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
