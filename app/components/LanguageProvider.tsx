"use client";
import React, { createContext, useContext, useMemo, useState } from "react";

type Language = "en" | "es";

type TranslationStrings = typeof translations["en"];

const translations = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      skills: "Skills",
      projects: "Projects",
      certificates: "Certificates",
      contact: "Contact",
    },
    hero: {
      available: "Available for work",
      greeting: "Hi, I'm Samuel Isaias Guance Santi",
      titlePrimary: "Fullstack Developer",
      titleSecondary: "& Project Manager",
      description:
        "I am a junior fullstack developer and Project Manager of the EduVisor project, a web platform for the Ministry of Education. Specialized in building scalable solutions with React, Node.js, and .NET.",
      viewProjects: "View Projects",
      contact: "Contact",
      scroll: "Scroll",
      fast: "Fast",
      precise: "Precise",
    },
    about: {
      title: "About me",
      paragraph:
        "I am a junior fullstack developer and Project Manager of the EduVisor project, a web platform for the Ministry of Education that enables educational technicians to register school visits with photos, reports, and deadlines, eliminating manual processes and ensuring accurate information. I handle backend and database implementation with scalable and secure systems.",
      features: [
        {
          title: "Frontend Development",
          description: "React, Next.js, React Native, Angular, Blazor",
        },
        {
          title: "Backend & Database",
          description: "Node.js, .NET, MongoDB, SQL Server, Entity Framework",
        },
        {
          title: "Project Management",
          description: "Leading the EduVisor project for the Ministry of Education",
        },
      ],
    },
    skills: {
      title: "Tech Stack",
      subtitle: "Technologies and tools I work with",
      favorite: "Highlighted favorite technologies with gradient",
    },
    projects: {
      title: "Featured Projects",
      description: "Explore my work - {count} projects and counting",
      code: "Code",
      demo: "View Demo",
      featured: "Featured",
      next: "Next project",
      previous: "Previous project",
      ariaLabel: "Go to project {index}",
    },
    certificates: {
      title: "Certifications",
      subtitle: "Validation of my skills and continuous learning",
      view: "View Certificate",
      download: "Download",
      open: "Open in new tab",
      allCategories: "All",
      noCategory: "No certificates in this category.",
    },
    contact: {
      title: "Contact",
      subtitle: "Got a project in mind? Let's talk!",
      name: "Name",
      email: "Email",
      phone: "Phone / WhatsApp",
      serviceType: "Service Type",
      budget: "Budget (optional)",
      message: "Message",
      selectService: "Select a service",
      namePlaceholder: "Your name",
      emailPlaceholder: "your@email.com",
      phonePlaceholder: "+1 (809) 123-4567",
      messagePlaceholder: "Tell me about your project...",
      sendMessage: "Send Message",
      sending: "Sending...",
      connectTitle: "Connect with me",
      connectText: "I am available to discuss new projects, creative ideas, or opportunities to support your vision.",
      clientInfoLabel: "CLIENT INFORMATION",
      projectDetailsLabel: "PROJECT DETAILS",
      messageLabel: "MESSAGE",
      dateLabel: "Date",
      notSpecified: "Unspecified",
      serviceOptions: {
        webDevelopment: "Web Development",
        mobileApp: "Mobile App",
        ecommerce: "E-commerce",
        uiUxDesign: "UI/UX Design",
        apiBackend: "API / Backend",
        consulting: "Consulting",
        maintenance: "Maintenance",
        other: "Other",
      },
      budgetOptions: {
        under1000: "Under $1,000",
        "1000to5000": "$1,000 - $5,000",
        "5000to10000": "$5,000 - $10,000",
        "10000to25000": "$10,000 - $25,000",
        "25000plus": "Over $25,000",
        notSure: "Not sure yet",
      },
      formSuccess: "Message sent successfully! I will contact you soon.",
      formError: "Error sending the message. Please try again later.",
      formConnectionError: "Connection error. Please try again later.",
      contactPrompt: "Have a project in mind? Let's talk!",
    },
    footer: {
      developed: "Developed by Samuel Guance.",
      techStack: "React · Next.js · TypeScript · Tailwind CSS · Motion",
      quickLinks: ["Home", "About", "Skills", "Projects", "Contact"],
    },
  },
  es: {
    nav: {
      home: "Inicio",
      about: "Sobre mí",
      skills: "Skills",
      projects: "Proyectos",
      certificates: "Certificaciones",
      contact: "Contacto",
    },
    hero: {
      available: "Disponible para trabajar",
      greeting: "Hola, soy Samuel Isaias Guance Santi",
      titlePrimary: "Desarrollador Fullstack",
      titleSecondary: "& Project Manager",
      description:
        "Soy un desarrollador fullstack junior y Project Manager del proyecto EduVisor, una plataforma web para el Ministerio de Educación. Especializado en construir soluciones escalables con React, Node.js y .NET.",
      viewProjects: "Ver Proyectos",
      contact: "Contactar",
      scroll: "Scroll",
      fast: "Rápido",
      precise: "Preciso",
    },
    about: {
      title: "Sobre mí",
      paragraph:
        "Soy un desarrollador fullstack junior y Project Manager del proyecto EduVisor, una plataforma web para el Ministerio de Educación que permite a los técnicos educativos registrar visitas escolares con fotos, informes y plazos, eliminando procesos manuales y asegurando la precisión de la información. Me encargo de la implementación del backend y la base de datos con sistemas escalables y seguros.",
      features: [
        {
          title: "Desarrollo Frontend",
          description: "React, Next.js, React Native, Angular, Blazor",
        },
        {
          title: "Backend y Base de Datos",
          description: "Node.js, .NET, MongoDB, SQL Server, Entity Framework",
        },
        {
          title: "Gestión de Proyectos",
          description: "Liderando el proyecto EduVisor para el Ministerio de Educación",
        },
      ],
    },
    skills: {
      title: "Tech Stack",
      subtitle: "Tecnologías y herramientas con las que trabajo",
      favorite: "Tecnologías favoritas destacadas con gradiente",
    },
    projects: {
      title: "Proyectos Destacados",
      description: "Explora mi trabajo - {count} proyectos y contando",
      code: "Código",
      demo: "Ver Demo",
      featured: "Destacado",
      next: "Proyecto siguiente",
      previous: "Proyecto anterior",
      ariaLabel: "Ir al proyecto {index}",
    },
    certificates: {
      title: "Certificaciones",
      subtitle: "Validación de mis habilidades y aprendizaje continuo",
      view: "Ver Certificado",
      download: "Descargar",
      open: "Abrir en nueva pestaña",
      allCategories: "Todos",
      noCategory: "No hay certificados en esta categoría.",
    },
    contact: {
      title: "Contacto",
      subtitle: "¿Tienes un proyecto en mente? ¡Hablemos!",
      name: "Nombre",
      email: "Email",
      phone: "Teléfono / WhatsApp",
      serviceType: "Tipo de Servicio",
      budget: "Presupuesto (opcional)",
      message: "Mensaje",
      selectService: "Selecciona un servicio",
      namePlaceholder: "Tu nombre",
      emailPlaceholder: "tu@email.com",
      phonePlaceholder: "+1 (809) 123-4567",
      messagePlaceholder: "Cuéntame sobre tu proyecto...",
      sendMessage: "Enviar Mensaje",
      sending: "Enviando...",
      connectTitle: "Conecta conmigo",
      connectText: "Siempre estoy abierto a discutir nuevos proyectos, ideas creativas o oportunidades para ser parte de tus visiones.",
      clientInfoLabel: "INFORMACIÓN DEL CLIENTE",
      projectDetailsLabel: "DETALLES DEL PROYECTO",
      messageLabel: "MENSAJE",
      dateLabel: "Fecha",
      notSpecified: "No especificado",
      serviceOptions: {
        webDevelopment: "Desarrollo Web",
        mobileApp: "Aplicación Móvil",
        ecommerce: "E-commerce",
        uiUxDesign: "Diseño UI/UX",
        apiBackend: "API / Backend",
        consulting: "Consultoría",
        maintenance: "Mantenimiento",
        other: "Otro",
      },
      budgetOptions: {
        under1000: "Menos de $1,000",
        "1000to5000": "$1,000 - $5,000",
        "5000to10000": "$5,000 - $10,000",
        "10000to25000": "$10,000 - $25,000",
        "25000plus": "Más de $25,000",
        notSure: "No estoy seguro",
      },
      formSuccess: "Mensaje enviado exitosamente! Te contactaré pronto.",
      formError: "Error al enviar el mensaje. Por favor, intenta más tarde.",
      formConnectionError: "Error de conexión. Por favor, intenta más tarde.",
      contactPrompt: "¿Tienes un proyecto en mente? ¡Hablemos!",
    },
    footer: {
      developed: "Desarrollado por Samuel Guance.",
      techStack: "React · Next.js · TypeScript · Tailwind CSS · Motion",
      quickLinks: ["Inicio", "Sobre mí", "Skills", "Proyectos", "Contacto"],
    },
  },
};

const LanguageContext = createContext<{
  locale: Language;
  setLocale: (locale: Language) => void;
  t: TranslationStrings;
}>({
  locale: "en",
  setLocale: () => {},
  t: translations.en,
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocale] = useState<Language>("en");

  const value = useMemo(
    () => ({ locale, setLocale, t: translations[locale] as TranslationStrings }),
    [locale],
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
}
