"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

type Language = "en" | "fr"

interface Translations {
  nav: {
    home: string
    about: string
    skills: string
    projects: string
    experience: string
    contact: string
  }
  hero: {
    welcome: string
    title: string
    subtitle: string
    cta: string
  }
  about: {
    section: string
    greeting: string
    description1: string
    description2: string
    location: string
    values: {
      creativity: string
      performance: string
      impact: string
      community: string
    }
  }
  skills: {
    section: string
    title: string
    description: string
    softSkills: string
    categories: {
      backend: string
      frontend: string
      database: string
      devops: string
    }
  }
  projects: {
    section: string
    title: string
    description: string
    featured: string
    code: string
    private: string
    more: string
    projectDescriptions: {
      youdemy: string
      vibe: string
      driveLoc: string
      educational: string
      smartshop: string
    }
  }
  experience: {
    section: string
    title: string
    description: string
    work: {
      title: string
      description: string
    }
    education: {
      youcode: string
      ensa: string
      bac: string
    }
    certification: {
      alx: string
    }
  }
  contact: {
    section: string
    title: string
    description: string
    getInTouch: string
    sendMessage: string
    labels: {
      email: string
      phone: string
      location: string
    }
    form: {
      name: string
      email: string
      message: string
      send: string
      success: string
      successMessage: string
    }
  }
  footer: {
    madeWith: string
    rights: string
  }
}

const translations: Record<Language, Translations> = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      skills: "Skills",
      projects: "Projects",
      experience: "Experience",
      contact: "Contact",
    },
    hero: {
      welcome: "Welcome to my universe",
      title: "Full-Stack Developer",
      subtitle: "Turning ideas into elegant code",
      cta: "Explore My Universe",
    },
    about: {
      section: "About Me",
      greeting: "Hi, I'm Hanane",
      description1:
        "A passionate Full-Stack Developer from Morocco who loves clean code, beautiful design, and solving real-world problems.",
      description2:
        "Currently building the future at YOUCODE UM6P, where I'm honing my skills in Java, Spring Boot, React, and Django.",
      location: "Had Soualem, Morocco",
      values: {
        creativity: "Creativity",
        performance: "Performance",
        impact: "Impact",
        community: "Community",
      },
    },
    skills: {
      section: "Skills",
      title: "Skills Solar System",
      description: "Each technology is a planet in my development solar system",
      softSkills: "Soft Skills",
      categories: {
        backend: "Backend",
        frontend: "Frontend",
        database: "Database",
        devops: "DevOps",
      },
    },
    projects: {
      section: "Projects",
      title: "Projects Galaxy",
      description: "Each project is a planet in my development universe",
      featured: "Featured",
      code: "Code",
      private: "Private",
      more: "More projects on GitHub",
      projectDescriptions: {
        youdemy:
          "Online learning platform with role management (Student, Teacher, Admin), secure authentication, course management, and detailed statistics.",
        vibe: "Complete and interactive social platform allowing users to manage accounts, add friends, publish content, and exchange via instant messaging with WebSockets.",
        driveLoc:
          "Vehicle rental platform with PHP OOP and MySQL for vehicle rental management and an interactive blog with DataTables integration.",
        educational:
          "Online educational platform dedicated to autonomous learning, progress tracking, and continuous assessment of learners. (Internship Project)",
        smartshop:
          "REST API for B2B commercial management with customer loyalty discounts, installment payments, and complete financial traceability.",
      },
    },
    experience: {
      section: "Journey",
      title: "Experience Timeline",
      description: "My path through the galaxy of learning and growth",
      work: {
        title: "Full-Stack Web Developer",
        description:
          "Design and development of an online educational platform dedicated to autonomous learning, progress tracking, and continuous assessment.",
      },
      education: {
        youcode: "Comprehensive full-stack development program covering modern web technologies.",
        ensa: "Engineering preparatory studies in science and technology.",
        bac: "French option - Scientific baccalaureate.",
      },
      certification: {
        alx: "Certificate in AI fundamentals and career applications.",
      },
    },
    contact: {
      section: "Contact",
      title: "Let's Connect",
      description: "Ready to build something amazing together? Let's make it happen",
      getInTouch: "Get In Touch",
      sendMessage: "Send a Message",
      labels: {
        email: "Email",
        phone: "Phone",
        location: "Location",
      },
      form: {
        name: "Your name",
        email: "your@email.com",
        message: "Tell me about your project...",
        send: "Send Message",
        success: "Message Sent!",
        successMessage: "I'll get back to you soon",
      },
    },
    footer: {
      madeWith: "Made with",
      rights: "All rights reserved.",
    },
  },
  fr: {
    nav: {
      home: "Accueil",
      about: "À propos",
      skills: "Compétences",
      projects: "Projets",
      experience: "Expérience",
      contact: "Contact",
    },
    hero: {
      welcome: "Bienvenue dans mon univers",
      title: "Développeuse Full-Stack",
      subtitle: "Transformer les idées en code élégant",
      cta: "Explorer Mon Univers",
    },
    about: {
      section: "À propos",
      greeting: "Salut, je suis Hanane",
      description1:
        "Une développeuse Full-Stack passionnée du Maroc qui aime le code propre, le beau design et la résolution de problèmes réels.",
      description2:
        "Actuellement en train de construire l'avenir à YOUCODE UM6P, où je perfectionne mes compétences en Java, Spring Boot, React et Django.",
      location: "Had Soualem, Maroc",
      values: {
        creativity: "Créativité",
        performance: "Performance",
        impact: "Impact",
        community: "Communauté",
      },
    },
    skills: {
      section: "Compétences",
      title: "Système Solaire des Compétences",
      description: "Chaque technologie est une planète dans mon système solaire de développement",
      softSkills: "Compétences Douces",
      categories: {
        backend: "Backend",
        frontend: "Frontend",
        database: "Base de données",
        devops: "DevOps",
      },
    },
    projects: {
      section: "Projets",
      title: "Galaxie des Projets",
      description: "Chaque projet est une planète dans mon univers de développement",
      featured: "En vedette",
      code: "Code",
      private: "Privé",
      more: "Plus de projets sur GitHub",
      projectDescriptions: {
        youdemy:
          "Plateforme d'apprentissage en ligne avec gestion des rôles (Étudiant, Enseignant, Admin), authentification sécurisée, gestion des cours et statistiques détaillées.",
        vibe: "Plateforme sociale complète et interactive permettant aux utilisateurs de gérer leurs comptes, d'ajouter des amis, publier du contenu et échanger via un système de messagerie instantanée avec WebSockets.",
        driveLoc:
          "Plateforme de location de véhicules en PHP POO et MySQL pour la gestion de location et un blog interactif avec intégration DataTables.",
        educational:
          "Plateforme éducative en ligne dédiée à l'apprentissage autonome, au suivi de progression et à l'évaluation continue des apprenants. (Projet de Stage)",
        smartshop:
          "API REST pour la gestion commerciale B2B avec remises de fidélité client, paiements en plusieurs fois et traçabilité financière complète.",
      },
    },
    experience: {
      section: "Parcours",
      title: "Chronologie d'Expérience",
      description: "Mon chemin à travers la galaxie de l'apprentissage et de la croissance",
      work: {
        title: "Développeuse Web Full-Stack",
        description:
          "Conception et développement d'une plateforme éducative en ligne dédiée à l'apprentissage autonome, au suivi de progression et à l'évaluation continue.",
      },
      education: {
        youcode: "Programme complet de développement full-stack couvrant les technologies web modernes.",
        ensa: "Études préparatoires d'ingénierie en sciences et technologie.",
        bac: "Option française - Baccalauréat scientifique.",
      },
      certification: {
        alx: "Certificat en fondamentaux de l'IA et applications de carrière.",
      },
    },
    contact: {
      section: "Contact",
      title: "Connectons-nous",
      description: "Prête à construire quelque chose d'incroyable ensemble ? Faisons-le",
      getInTouch: "Me Contacter",
      sendMessage: "Envoyer un Message",
      labels: {
        email: "Email",
        phone: "Téléphone",
        location: "Localisation",
      },
      form: {
        name: "Votre nom",
        email: "votre@email.com",
        message: "Parlez-moi de votre projet...",
        send: "Envoyer le Message",
        success: "Message Envoyé !",
        successMessage: "Je vous répondrai bientôt",
      },
    },
    footer: {
      madeWith: "Fait avec",
      rights: "Tous droits réservés.",
    },
  },
}

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: Translations
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t: translations[language] }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
