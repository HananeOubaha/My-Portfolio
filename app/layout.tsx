import type React from "react"
import type { Metadata } from "next"
import { Space_Grotesk, Playfair_Display } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-sans",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
})

export const metadata: Metadata = {
  title: "Hanane's Galaxy | Full-Stack Developer Portfolio",
  description: "Full-Stack Developer from Morocco. Java, Spring Boot, React, Django. Turning ideas into elegant code.",
  keywords: ["Full-Stack Developer", "Java", "Spring Boot", "React", "Django", "Morocco", "Portfolio"],
  authors: [{ name: "Hanane Oubaha" }],
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${spaceGrotesk.variable} ${playfair.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
