"use client"

import type React from "react"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Mail, Phone, MapPin, Github, Linkedin, Send, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { useLanguage } from "@/lib/language-context"

export function ContactSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })
  const { t } = useLanguage()

  const contactInfo = [
    {
      icon: Mail,
      label: t.contact.labels.email,
      value: "Hananeouba03@gmail.com",
      href: "mailto:Hananeouba03@gmail.com",
    },
    { icon: Phone, label: t.contact.labels.phone, value: "+212 632333724", href: "tel:+212632333724" },
    { icon: MapPin, label: t.contact.labels.location, value: "Had Soualem, Morocco", href: null },
    { icon: Github, label: "GitHub", value: "@HananeOubaha", href: "https://github.com/HananeOubaha" },
    { icon: Linkedin, label: "LinkedIn", value: "Hanane Oubaha", href: "https://www.linkedin.com/in/hanane-oubaha/" },
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 3000)
  }

  return (
    <section id="contact" ref={ref} className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="text-[var(--gold)] text-sm tracking-widest uppercase">{t.contact.section}</span>
          <h2 className="text-4xl md:text-5xl font-display text-gradient mt-2">{t.contact.title}</h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">{t.contact.description}</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="glass-card rounded-2xl p-8 h-full">
              <h3 className="text-2xl font-display text-[var(--lilac)] mb-8">{t.contact.getInTouch}</h3>

              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <motion.div
                    key={item.label}
                    className="flex items-center gap-4 group"
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.4 + index * 0.1 }}
                  >
                    <div className="p-3 rounded-xl glass group-hover:bg-[var(--lilac)]/20 transition-colors">
                      <item.icon className="w-5 h-5 text-[var(--lilac)]" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground uppercase tracking-wider">{item.label}</p>
                      {item.href ? (
                        <a
                          href={item.href}
                          target={item.href.startsWith("http") ? "_blank" : undefined}
                          rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                          className="text-foreground hover:text-[var(--lilac)] transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-foreground">{item.value}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Decorative element */}
              <motion.div
                className="mt-12 text-center"
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
              >
                <p className="text-2xl font-display text-gradient">{t.contact.description}</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="glass-card rounded-2xl p-8 relative overflow-hidden">
              {/* Success sparkles */}
              {isSubmitted && (
                <motion.div
                  className="absolute inset-0 flex items-center justify-center bg-background/80 backdrop-blur-sm z-10"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <div className="text-center">
                    <motion.div animate={{ scale: [1, 1.2, 1], rotate: [0, 360] }} transition={{ duration: 0.5 }}>
                      <Sparkles className="w-12 h-12 text-[var(--gold)] mx-auto mb-4" />
                    </motion.div>
                    <p className="text-xl font-display text-gradient">{t.contact.form.success}</p>
                    <p className="text-muted-foreground text-sm mt-2">{t.contact.form.successMessage}</p>
                  </div>
                </motion.div>
              )}

              <h3 className="text-2xl font-display text-[var(--rose-quartz)] mb-8">{t.contact.sendMessage}</h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-foreground/80">
                    Name
                  </Label>
                  <Input
                    id="name"
                    placeholder={t.contact.form.name}
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="bg-background/50 border-border/50 focus:border-[var(--lilac)]"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-foreground/80">
                    Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder={t.contact.form.email}
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="bg-background/50 border-border/50 focus:border-[var(--lilac)]"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-foreground/80">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    placeholder={t.contact.form.message}
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="bg-background/50 border-border/50 focus:border-[var(--lilac)] resize-none"
                    required
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[var(--lilac)] to-[var(--rose-quartz)] text-[var(--deep-indigo)] font-semibold py-6 rounded-xl hover:opacity-90 transition-all glow-lilac"
                >
                  <Send className="w-4 h-4 mr-2" />
                  {t.contact.form.send}
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
