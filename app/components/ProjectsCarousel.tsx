"use client";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight, ExternalLink, Github } from "lucide-react";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  featured?: boolean;
  githubUrl?: string;
  liveUrl?: string;
  image: string;
}

export default function ProjectsCarousel() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentIndex, setCurrentIndex] = useState(0);

  const projects: Project[] = [
    {
      title: "EduVisor",
      description:
        "Project Manager & Backend Developer. Web platform for the Ministry of Education enabling educational technicians to register school visits with photos, reports, and deadlines, eliminating manual processes.",
      technologies: ["Node.js", "MongoDB", "Mongoose", "JWT", "Express"],
      featured: true,
      githubUrl: "https://github.com/samiluffy26/EduVisor.git",
      image: "/eduvisor.jpg",
    },
    {
      title: "Sistema de facturación e inventario",
      description:
        "Comprehensive billing and inventory system for vehicle management with full CRUD operations.",
      technologies: ["React", ".NET Core", "Entity Framework", "SQL Server"],
      githubUrl: "https://github.com/samiluffy26/System-Facturacion.git",
      image: "/facturacion.jpg",
    },
    {
      title: "SeVaNe",
      description:
        "Real estate, sales, loans, advisory and financial management platform.",
      technologies: ["Node", "Express", "MongoDB", "Mongoose", "HTML", "CSS"],
      githubUrl: "https://github.com/samiluffy26/Sevane-Frontend.git",
      image: "/sevane.jpg",
    },
    {
      title: "Yira's Gourmet",
      description:
        "Restaurant management system with menu, orders, and inventory control.",
      technologies: ["React", "Vite", "Node", "Express", "MongoDB"],
      githubUrl: "https://github.com/leo124123/Yira-s-Gourmet.git",
      image: "/yiras.jpg",
    },
    {
      title: "E-commerce para supermercados",
      description:
        "Amazon/Uber style e-commerce platform for supermarkets with real-time inventory.",
      technologies: ["React", "Next.js", "Strapi", "Tailwind CSS"],
      githubUrl: "#",
      image: "/supermarket.png",
    },
    {
      title: "Blog & Music App",
      description:
        "Full-stack blogging platform with integrated music streaming features.",
      technologies: ["Node.js", "React", "MongoDB", "Nest.js", "Stripe", "Docker"],
      githubUrl: "#",
      image: "ecommerce.jpg",
    },
    {
      title: "Twitter-like Social App",
      description:
        "Social media platform with real-time updates, posts, and user interactions.",
      technologies: ["Node.js", "Mongoose", "MongoDB", "Socket.io"],
      githubUrl: "#",
      image: "/socialnet.png",
    },
    {
      title: "Portafolio personal",
      description:
        "Modern personal portfolio showcasing projects and skills with animations.",
      technologies: ["React", "Next.js", "Tailwind CSS", "Framer Motion"],
      githubUrl: "https://github.com/samiluffy26/portafolio-next.git",
      liveUrl: "https://samueltech.dev/",
      image: "https://images.unsplash.com/photo-1566915896913-549d796d2166?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXZlbG9wZXIlMjB3b3Jrc3BhY2UlMjBjb2RlfGVufDF8fHx8MTc2MjEzNDE0OHww&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      title: "Donación para niños necesitados",
      description:
        "Donation platform to help children in need with transparent fund tracking.",
      technologies: ["HTML", "CSS", "JavaScript"],
      githubUrl: "https://github.com/JodrellPG/LasMargaritas.git",
      image: "/donate.jpg",
    },
    {
      title: "Adopción y rescate de animales",
      description:
        "Animal adoption and rescue platform connecting pets with loving homes.",
      technologies: ["HTML", "CSS", "JavaScript", "PHP"],
      githubUrl: "https://github.com/samiluffy26/Proyectos-Adopcion-de-perritos.git",
      image: "/pets.png",
    },
    {
      title: "Startup Personal",
      description:
        "Full-stack startup project with modern architecture and scalable solutions.",
      technologies: ["React", "Next.js", "Tailwind", "Node", "Nest", "MongoDB"],
      githubUrl: "https://github.com/samiluffy26/brightmatterlab.git",
      image: "/startup.png",
    },
  ];

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const currentProject = projects[currentIndex];

  return (
    <section id="projects" ref={ref} className="py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0a0a0a] to-black" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-white mb-4">
            Proyectos Destacados
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#6D28D9] to-[#10B981] mx-auto rounded-full" />
          <p className="text-white/60 mt-4 max-w-2xl mx-auto">
            Explora mi trabajo - {projects.length} proyectos y contando
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          {/* Main Carousel */}
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="relative"
              >
                <div className="grid lg:grid-cols-2 gap-8 items-center bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-lg border border-white/10 rounded-2xl overflow-hidden p-8">
                  {/* Project Image */}
                  <motion.div
                    className="relative aspect-video rounded-xl overflow-hidden group"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ImageWithFallback
                      src={currentProject.image}
                      alt={currentProject.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {currentProject.featured && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="absolute top-4 right-4"
                      >
                        <Badge className="bg-gradient-to-r from-[#10B981] to-[#059669] text-black border-0">
                          ⭐ Destacado
                        </Badge>
                      </motion.div>
                    )}

                    {/* Overlay on hover */}
                    <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {currentProject.githubUrl && (
                        <motion.a
                          href={currentProject.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          whileTap={{ scale: 0.9 }}
                          className="p-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20 hover:bg-[#10B981] transition-colors"
                        >
                          <Github size={24} className="text-white" />
                        </motion.a>
                      )}
                      {currentProject.liveUrl && (
                        <motion.a
                          href={currentProject.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.1, rotate: -5 }}
                          whileTap={{ scale: 0.9 }}
                          className="p-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20 hover:bg-[#6D28D9] transition-colors"
                        >
                          <ExternalLink size={24} className="text-white" />
                        </motion.a>
                      )}
                    </div>
                  </motion.div>

                  {/* Project Info */}
                  <div className="space-y-6">
                    <motion.h3
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.2 }}
                      className="text-white"
                    >
                      {currentProject.title}
                    </motion.h3>

                    <motion.p
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.3 }}
                      className="text-white/70 leading-relaxed"
                    >
                      {currentProject.description}
                    </motion.p>

                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.4 }}
                      className="flex flex-wrap gap-2"
                    >
                      {currentProject.technologies.map((tech, i) => (
                        <motion.div
                          key={tech}
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 0.5 + i * 0.05 }}
                          whileHover={{ y: -2, scale: 1.05 }}
                        >
                          <Badge
                            variant="outline"
                            className="border-[#10B981]/50 text-[#10B981] hover:bg-[#10B981]/10"
                          >
                            {tech}
                          </Badge>
                        </motion.div>
                      ))}
                    </motion.div>

                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.6 }}
                      className="flex gap-4"
                    >
                      {currentProject.githubUrl && (
                        <motion.a
                          href={currentProject.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="px-6 py-3 bg-white/5 border border-white/20 rounded-lg text-white hover:bg-white/10 transition-all flex items-center gap-2"
                        >
                          <Github size={20} />
                          Código
                        </motion.a>
                      )}
                      {currentProject.liveUrl && (
                        <motion.a
                          href={currentProject.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="px-6 py-3 bg-gradient-to-r from-[#10B981] to-[#059669] rounded-lg text-black hover:shadow-lg hover:shadow-[#10B981]/50 transition-all flex items-center gap-2"
                        >
                          <ExternalLink size={20} />
                          Ver Demo
                        </motion.a>
                      )}
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <motion.button
              onClick={prevProject}
              whileHover={{ scale: 1.1, x: -5 }}
              whileTap={{ scale: 0.9 }}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-16 p-3 bg-gradient-to-r from-[#6D28D9] to-[#5B21B6] rounded-full shadow-lg hover:shadow-[#6D28D9]/50 transition-all"
              aria-label="Previous project"
            >
              <ChevronLeft size={24} className="text-white" />
            </motion.button>

            <motion.button
              onClick={nextProject}
              whileHover={{ scale: 1.1, x: 5 }}
              whileTap={{ scale: 0.9 }}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-16 p-3 bg-gradient-to-r from-[#10B981] to-[#059669] rounded-full shadow-lg hover:shadow-[#10B981]/50 transition-all"
              aria-label="Next project"
            >
              <ChevronRight size={24} className="text-white" />
            </motion.button>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {projects.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setCurrentIndex(index)}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                className={`h-2 rounded-full transition-all ${
                  index === currentIndex
                    ? "w-8 bg-gradient-to-r from-[#10B981] to-[#6D28D9]"
                    : "w-2 bg-white/20 hover:bg-white/40"
                }`}
                aria-label={`Go to project ${index + 1}`}
              />
            ))}
          </div>

          {/* Counter */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-center mt-4 text-white/40"
          >
            {currentIndex + 1} / {projects.length}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
