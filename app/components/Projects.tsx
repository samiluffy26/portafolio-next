"use client";
import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      title: "EduVisor",
      description:
        "Project Manager & Backend Developer. Web platform for the Ministry of Education enabling educational technicians to register school visits with photos, reports, and deadlines, eliminating manual processes.",
      image: "/eduvisor.jpg", // ← ruta desde /public

        technologies: ["Node.js", "MongoDB", "Mongoose", "JWT", "Express"],
      featured: true,
      githubUrl: "#",
    },
    {
      title: "Sistema de facturación e inventario para vehículos",
      description:
        "Comprehensive billing and inventory system for vehicle management with full CRUD operations.",
        image: "/facturacion.jpg",
      technologies: [
        "React",
        ".NET Core",
        "Entity Framework",
        "SQL Server",
        "ASP.NET",
      ],
      githubUrl: "#",
    },
    {
      title: "SeVaNe",
      description:
        "Real estate, sales, loans, advisory and financial management platform.",
        image: "/sevane.jpg",
      technologies: [
        "Node",
        "Express",
        "MongoDB",
        "Mongoose",
        "HTML",
        "CSS",
        "JS",
      ],
      githubUrl: "#",
    },
    {
      title: "Yira's Gourmet",
      description:
        "Restaurant management system with menu, orders, and inventory control.",
        image: "/yiras.jpg",
      technologies: ["React", "Vite", "Node", "Express", "MongoDB", "Mongoose"],
      githubUrl: "#",
    },
    {
      title: "E-commerce para supermercados",
      description:
        "Amazon/Uber style e-commerce platform for supermarkets with real-time inventory.",
      technologies: ["React", "Next.js", "Strapi", "Tailwind CSS"],
      githubUrl: "#",
    },
    {
      title: "Portafolio personal",
      description:
        "Modern personal portfolio showcasing projects and skills with animations.",
      technologies: ["React", "Next.js", "Tailwind CSS", "Framer Motion"],
      githubUrl: "#",
      liveUrl: "#",
    },
    {
      title: "Blog & Music App",
      description:
        "Full-stack blogging platform with integrated music streaming features.",
        image: "/ecommerce.jpg",
      technologies: ["Node.js", "Mongoose", "MongoDB", "Express"],
      githubUrl: "#",
    },
    {
      title: "Twitter-like Social App",
      description:
        "Social media platform with real-time updates, posts, and user interactions.",
      technologies: ["Node.js", "Mongoose", "MongoDB", "Socket.io"],
      githubUrl: "#",
    },
    {
      title: "Donación para niños necesitados",
      description:
        "Donation platform to help children in need with transparent fund tracking.",
        image: "/donate.jpg",
      technologies: ["HTML", "CSS", "JavaScript"],
      githubUrl: "#",
    },
    {
      title: "Adopción y rescate de animales",
      description:
        "Animal adoption and rescue platform connecting pets with loving homes.",
      technologies: ["HTML", "CSS", "JavaScript", "PHP"],
      githubUrl: "#",
    },
    {
      title: "Startup Personal",
      description:
        "Full-stack startup project with modern architecture and scalable solutions.",
        image: "/startup.jpg",
      technologies: [
        "React",
        "Next.js",
        "Tailwind CSS",
        "Node",
        "Nest",
        "MongoDB",
      ],
      githubUrl: "#",
    },
  ];

  return (
    <section id="projects" ref={ref} className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-[#0F172A] mb-4">
            Proyectos
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#6D28D9] to-[#10B981] mx-auto rounded-full" />
          <p className="text-[#0F172A]/70 mt-4 max-w-2xl mx-auto">
            Una selección de proyectos en los que he trabajado
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
