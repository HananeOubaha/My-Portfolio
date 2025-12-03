"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Mail } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { LanguageToggle } from "./language-toggle"

const socialLinks = [
  { icon: Github, href: "https://github.com/HananeOubaha", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/hanane-oubaha/", label: "LinkedIn" },
  { icon: Mail, href: "mailto:Hananeouba03@gmail.com", label: "Email" },
]

export function Navigation({ activeSection }: { activeSection: string }) {
  const { t } = useLanguage()

  const navItems = [
    { id: "hero", label: t.nav.home },
    { id: "about", label: t.nav.about },
    { id: "skills", label: t.nav.skills },
    { id: "projects", label: t.nav.projects },
    { id: "experience", label: t.nav.experience },
    { id: "contact", label: t.nav.contact },
  ]

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <>
      {/* Main navigation */}
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50 px-6 py-4"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <motion.button
            onClick={() => scrollToSection("hero")}
            className="text-xl font-display text-gradient cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            H.O
          </motion.button>

          {/* Navigation links - Desktop */}
          <div className="hidden md:flex items-center gap-1 glass rounded-full px-2 py-2">
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`px-4 py-2 rounded-full text-sm transition-all cursor-pointer ${
                  activeSection === item.id
                    ? "bg-[var(--lilac)]/20 text-[var(--lilac)]"
                    : "text-foreground/70 hover:text-foreground"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.label}
              </motion.button>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <LanguageToggle />
            <div className="flex items-center gap-2">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full glass text-foreground/70 hover:text-[var(--lilac)] transition-colors"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={link.label}
                >
                  <link.icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile bottom navigation */}
      <motion.nav
        className="fixed bottom-4 left-4 right-4 z-50 md:hidden"
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <div className="glass rounded-2xl px-2 py-2 flex justify-around">
          {navItems.slice(0, 5).map((item) => (
            <motion.button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`p-3 rounded-xl text-xs transition-all ${
                activeSection === item.id ? "bg-[var(--lilac)]/20 text-[var(--lilac)]" : "text-foreground/70"
              }`}
              whileTap={{ scale: 0.9 }}
            >
              {item.label.slice(0, 4)}
            </motion.button>
          ))}
        </div>
      </motion.nav>
    </>
  )
}
