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
      titleSecondary: "Data Scientist & PM",
      description:
        "Self-taught developer since age 12 with 100+ courses completed. I build scalable fullstack applications and apply Data Science & Machine Learning to solve real-world problems. Currently Project Manager at On The Clock Transportation and creator of projects like TribunalIQ, Dalia, and EduNova.",
      viewProjects: "View Projects",
      contact: "Contact",
      downloadCV: "Download CV",
      scroll: "Scroll",
      fast: "Fast",
      precise: "Precise",
    },
    about: {
      title: "About me",
      paragraph:
        "I'm an 18-year-old self-taught developer who started learning software development at age 12 on Udemy in 2020, beginning with HTML, CSS, and JavaScript. Over the years I expanded into React, Node.js, .NET, and databases like MongoDB and PostgreSQL. In 2026 I dove into Data Science, Machine Learning, and AI — applying them in real projects like TribunalIQ (legal tech analytics) and Dalia (intelligent task organization). With 100+ courses completed, I'm a natural leader, recently graduated, and about to study Data Science Engineering at university. Currently I serve as Project Manager at On The Clock Transportation.",
      features: [
        {
          title: "Frontend Development",
          description: "React, Next.js, React Native, Angular, Blazor",
        },
        {
          title: "Backend & Database",
          description: "Node.js, .NET, MongoDB, PostgreSQL, Prisma, Entity Framework",
        },
        {
          title: "Data Science & AI",
          description: "Python, Pandas, Scikit-learn, FastAPI, Machine Learning",
        },
        {
          title: "Project Management",
          description: "PM at On The Clock Transportation & EduVisor for the Ministry of Education",
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
      private: "Private",
      comingSoon: "Coming Soon",
    },
    certificates: {
      title: "Certifications",
      subtitle: "Validation of my skills and continuous learning",
      view: "View Certificate",
      download: "Download",
      open: "Open in new tab",
      allCategories: "All",
      noCategory: "No certificates in this category.",
      pdfError: "Your browser cannot display PDF directly.",
      openPdf: "Open PDF",
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
        dataScience: "Data Science & AI",
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
      titleSecondary: "Data Scientist & PM",
      description:
        "Desarrollador autodidacta desde los 12 años con más de 100 cursos completados. Construyo aplicaciones fullstack escalables y aplico Ciencia de Datos y Machine Learning para resolver problemas reales. Actualmente Project Manager en On The Clock Transportation y creador de proyectos como TribunalIQ, Dalia y EduNova.",
      viewProjects: "Ver Proyectos",
      contact: "Contactar",
      downloadCV: "Descargar CV",
      scroll: "Scroll",
      fast: "Rápido",
      precise: "Preciso",
    },
    about: {
      title: "Sobre mí",
      paragraph:
        "Tengo 18 años y soy un desarrollador autodidacta que comenzó a estudiar desarrollo de software a los 12 años en Udemy en 2020, empezando con HTML, CSS y JavaScript. Con el tiempo me expandí a React, Node.js, .NET, y bases de datos como MongoDB y PostgreSQL. En 2026 me sumergí en la Ciencia de Datos, Machine Learning e IA — aplicándolos en proyectos reales como TribunalIQ (analítica legal tech) y Dalia (organización inteligente de tareas). Con más de 100 cursos completados, soy un líder nato, recién graduado, y a punto de estudiar Ingeniería en Ciencia de Datos en la universidad. Actualmente soy Project Manager en On The Clock Transportation.",
      features: [
        {
          title: "Desarrollo Frontend",
          description: "React, Next.js, React Native, Angular, Blazor",
        },
        {
          title: "Backend y Base de Datos",
          description: "Node.js, .NET, MongoDB, PostgreSQL, Prisma, Entity Framework",
        },
        {
          title: "Ciencia de Datos & IA",
          description: "Python, Pandas, Scikit-learn, FastAPI, Machine Learning",
        },
        {
          title: "Gestión de Proyectos",
          description: "PM en On The Clock Transportation y EduVisor para el Ministerio de Educación",
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
      private: "Privado",
      comingSoon: "Próximamente",
    },
    certificates: {
      title: "Certificaciones",
      subtitle: "Validación de mis habilidades y aprendizaje continuo",
      view: "Ver Certificado",
      download: "Descargar",
      open: "Abrir en nueva pestaña",
      allCategories: "Todos",
      noCategory: "No hay certificados en esta categoría.",
      pdfError: "Tu navegador no puede mostrar el PDF directamente.",
      openPdf: "Abrir PDF",
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
        dataScience: "Ciencia de Datos & IA",
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
