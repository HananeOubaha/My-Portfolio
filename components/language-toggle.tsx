"use client"

import { motion } from "framer-motion"
import { useLanguage } from "@/lib/language-context"

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage()

  return (
    <motion.div
      className="flex items-center gap-1 glass rounded-full p-1"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.6 }}
    >
      <motion.button
        onClick={() => setLanguage("en")}
        className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
          language === "en" ? "bg-[var(--lilac)]/30 text-[var(--lilac)]" : "text-foreground/60 hover:text-foreground"
        }`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        EN
      </motion.button>
      <motion.button
        onClick={() => setLanguage("fr")}
        className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
          language === "fr" ? "bg-[var(--lilac)]/30 text-[var(--lilac)]" : "text-foreground/60 hover:text-foreground"
        }`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        FR
      </motion.button>
    </motion.div>
  )
}
