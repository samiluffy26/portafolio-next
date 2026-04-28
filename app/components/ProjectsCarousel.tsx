"use client";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight, ExternalLink, Github, Star } from "lucide-react";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useLanguage } from "@/components/LanguageProvider";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  featured?: boolean;
  githubUrl?: string;
  liveUrl?: string;
  image: string;
  isPrivate?: boolean;
  comingSoon?: boolean;
}

export default function ProjectsCarousel() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentIndex, setCurrentIndex] = useState(0);
  const { t } = useLanguage();

  const projects: Project[] = [
    {
      title: "EduVisor",
      description:
        "Project Manager & Backend Developer. Web platform for the Ministry of Education enabling educational technicians to register school visits with photos, reports, and deadlines, eliminating manual processes.",
      technologies: ["Node.js", "MongoDB", "Mongoose", "JWT", "Express"],
      featured: true,
      image: "/eduvisor.jpg",
      isPrivate: true
    },
    {
      title: "Billing & Inventory System",
      description:
        "Comprehensive billing and inventory system for vehicle management with full CRUD operations.",
      technologies: ["React", ".NET Core", "Entity Framework", "SQL Server"],
      image: "/facturacion1.png",
      isPrivate: true,
    },
    {
      title: "SeVaNe",
      description:
        "Real estate, sales, loans, advisory and financial management platform.",
      technologies: ["Node", "Express", "MongoDB", "Mongoose", "HTML", "CSS"],
      liveUrl: "https://sevane.org",
      image: "/sevane.jpg",
    },
    {
      title: "Yira's Gourmet",
      description:
        "Restaurant management system with menu, orders, and inventory control.",
      technologies: ["React", "Vite", "Node", "Express", "MongoDB"],
      liveUrl: "https://yiras-gourmet.brightmatter.lat",
      image: "/yiras.jpg",
    },
    {
      title: "Supermarket E-commerce",
      description:
        "Amazon/Uber style e-commerce platform for supermarkets with real-time inventory.",
      technologies: ["React", "Next.js", "Strapi", "Tailwind CSS"],
      image: "/supermarket.png",
      githubUrl: "https://github.com/samiluffy26/E-commerce",
    
    },
    {
      title: "Blog & Music App",
      description:
        "Sami Music Group is a cutting-edge cultural hub that merges a music magazine with a hypebeast merchandise store to empower independent artists. Developed with React 19 and TypeScript under a striking brutalist aesthetic, the platform stands out for its native integration with Google Gemini's AI. This not only automates the creation of biographies and dynamic content but also revolutionizes the shopping experience by enabling real-time Smart Recoloring, where AI visually adjusts the color of garments directly in the store before the user decides to purchase them.",
      technologies: ["Node.js", "React", "MongoDB", "Nest.js", "Stripe", "Docker"],
      githubUrl: "https://github.com/samiluffy26/Ecommerce-BlogArtist",
      image: "ecommerce.jpg",
    },
    {
      title: "Social Media Platform",
      description:
        "Social media platform with real-time updates, posts, and user interactions.",
      technologies: ["Node.js", "Mongoose", "MongoDB", "Socket.io"],
      githubUrl: "https://github.com/samiluffy26/Red-Social",
      image: "/socialnet.png",
    },
    {
      title: "Personal Portfolio",
      description:
        "Modern personal portfolio showcasing projects and skills with animations.",
      technologies: ["React", "Next.js", "Tailwind CSS", "Framer Motion"],
      githubUrl: "https://github.com/samiluffy26/portafolio-next.git",
      liveUrl: "https://samueltech.dev/",
      image: "/portafolio.png",
    },
    {
      title: "Children Donation Platform",
      description:
        "Donation platform to help children in need with transparent fund tracking.",
      technologies: ["HTML", "CSS", "JavaScript"],
      githubUrl: "https://github.com/JodrellPG/LasMargaritas.git",
      image: "/donate.jpg",
    },
    {
      title: "Pet Adoption & Rescue",
      description:
        "Animal adoption and rescue platform connecting pets with loving homes.",
      technologies: ["HTML", "CSS", "JavaScript", "PHP"],
      githubUrl: "https://github.com/samiluffy26/Proyectos-Adopcion-de-perritos.git",
      image: "/pets.png",
    },
    {
      title: "Personal Startup",
      description:
        "Full-stack startup project with modern architecture and scalable solutions.",
      technologies: ["React", "Next.js", "Tailwind", "Node", "Nest", "MongoDB"],
      githubUrl: "https://github.com/samiluffy26/brightmatterlab.git",
      liveUrl: "https://startup.brightmatter.lat",
      image: "/startup.png",
    },
    {
      title: "Patient Transport Platform",
      description:
        "Full-stack platform for a patient transport and medical services company, featuring real-time tracking, scheduling, and management tools to enhance operational efficiency and patient care.",
      technologies: ["React", "Astro", "Tailwind", "Node", "Express", "MongoDB", "Stripe"],
      liveUrl: "https://www.ontheclocktrans.com",
      image: "/ontheclock.png",
    },
    {
      title: "Scada",
      description:
        "Landing page for a Dominican Republic real estate company.",
      technologies: ["React", "Vite", "Tailwind", "Node"],
      liveUrl: "https://www.scadadr.com",
      image: "/scada.png",
    },
    {
      title: "SanXoft Page",
      description:
        "Full-stack startup project with modern architecture and scalable solutions.",
      technologies: ["React", "Vite", "Tailwind", "Node", "Express", "MongoDB"],
      liveUrl: "https://www.sanxoft.lat",
      image: "/sanxoft.png",
    },
    {
      title: "Barber Sanx",
      description:
        "SAAS platform for a Dominican Republic barber shop, featuring appointment scheduling, service management, and customer engagement tools to enhance the client experience and streamline operations.",
      technologies: ["React Native", "Angular", "Tailwind", "Node", "Nest.js", "Mongo", "Stripe", "Docker", "Kubernetes", "Azure", "Supabase", "Resend"],
      liveUrl: "https://www.barbersanx.online",
      image: "/barbersanx.png",
    },
  
    {
      title: "Sami Netflix",
      description:
        "A modern streaming platform for showcasing movies and TV shows, built with the latest web technologies.",
      technologies: ["React", "Vite", "Tailwind", "Node", "Express", "MongoDB"],
      githubUrl: "https://github.com/samiluffy26/SamiNET",
      image: "/saminetflix.png",
    },
    {
      title: "Spa-FullStack",
      description:
        "A full-stack Single Page Application (SPA) for a spa and wellness center, featuring appointment scheduling, service management, and customer engagement tools to enhance the client experience and streamline operations.",
      technologies: ["React", "Vite", "Tailwind", "Node", "Express", "MongoDB"],
      githubUrl: "https://github.com/samiluffy26/Spa-Fullstack",
      image: "/spa-Fullstack.png",
    },
    {
      title: "Blazor Spa FullStack",
      description:
        " A full-stack Single Page Application (SPA) for a spa and wellness center, featuring appointment scheduling, service management, and customer engagement tools to enhance the client experience and streamline operations.",
      technologies: ["Entity Framework", "ASP.NET Core", "Blazor", ".NET", "MongoDB"],
      githubUrl: "https://github.com/samiluffy26/Spa-Blazor",
      image: "/spa-Fullstack.png",
    },
    {
      title: "HandsMachines",
      description:
        "This project consists of an interactive web application designed to bridge the communication gap between people with hearing disabilities and the digital environment. It uses computer vision models to instantly detect and translate hand gestures from the sign language alphabet into text via the device's camera.",
      technologies: ["MediaPipe (Hands)", "React", "Vite", "TypeScript", "HTML5 Canvas", "Tailwind CSS", "ONNX Runtime Web", "FastAPI", "MongoDB", "Scikit-learn", "Uvicorn" ],
      githubUrl: "https://github.com/samiluffy26/HandsMachines",
      image: "/HandsMachine.png",
    },
    {
      title: "FullStack Restaurant Management",
      description:
        "A full-stack restaurant management system with menu, orders, and inventory control.",
      technologies: ["Zustand", "React", "Vite", "TypeScript", "React Router DOM", "Tailwind CSS", "Axios", "Node.js & Express", "MongoDB", "Socket.io", "JWT", "Bcrypt", "Multer", "Helmet & Morgan", "Zod" ],
      githubUrl: "https://github.com/samiluffy26/Proyecto-fullstackPractica",
      image: "/RestaurantFS.png",
    },
    {
      title: "First Full Stack Project",
      description:
        "Full-stack blog with authentication, user management, CRUD functionality for posts and comments, and an admin panel for content moderation. It implements security with JWT, validation with Zod, and file handling with Multer.",
      technologies: ["Node.js", "Express", "MongoDB", "Mongoose", "Nodemon", "React" ],
      githubUrl: "https://github.com/samiluffy26/Blog-PrimerProyecto",
      image: "/PrimerBlog.png",
    },
    {
      title: "CJ-Informa",
      description:
        "Full-stack school newspaper with authentication, user management, CRUD functionality for posts and comments, and an administration panel for content moderation. Includes a landing page to display relevant information about the newspaper and its mission.",
      technologies: ["Node.js", "Express", "MongoDB", "Mongoose", "Nodemon", "React", "Cloudinary", "Vite" ],
      liveUrl: "https://cj.informa.samueltech.dev",
      image: "/cj-informa.png",
    },
    {
      title: "Blog Dev",
      description:
        "A blog for developers to share knowledge, experiences, and resources related to software development. The blog covers a wide range of topics, from tutorials and how-tos to analyses of technological trends and interviews with industry experts. With a focus on community, the blog encourages active reader participation through comments, discussions, and content contributions.",
      technologies: ["Node.js", "Express", "MongoDB", "Mongoose", "Nodemon", "React", "Cloudinary", "Vite" ],
      image: "/BlogDev.png",
      comingSoon: true,
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
            {t.projects.title}
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#6D28D9] to-[#10B981] mx-auto rounded-full" />
          <p className="text-white/60 mt-4 max-w-2xl mx-auto">
            {t.projects.description.replace("{count}", String(projects.length))}
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
                        <Badge className="bg-gradient-to-r from-[#10B981] to-[#059669] text-black border-0 flex items-center gap-2">
                          <Star size={16} />
                          {t.projects.featured}
                        </Badge>
                      </motion.div>
                    )}

                    {/* Overlay on hover */}
                    <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {currentProject.githubUrl && !currentProject.isPrivate && !currentProject.comingSoon && (
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
                      {currentProject.liveUrl && !currentProject.isPrivate && !currentProject.comingSoon && (
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
                      {currentProject.isPrivate && (
                        <div className="p-3 bg-red-500/20 backdrop-blur-md rounded-full border border-red-500/50">
                          <span className="text-red-400 text-sm font-medium">Private</span>
                        </div>
                      )}
                      {currentProject.comingSoon && (
                        <div className="p-3 bg-yellow-500/20 backdrop-blur-md rounded-full border border-yellow-500/50">
                          <span className="text-yellow-400 text-sm font-medium">Coming Soon</span>
                        </div>
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

                    {currentProject.isPrivate && (
                      <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="flex"
                      >
                        <Badge className="bg-red-500/20 text-red-400 border-red-500/50">
                          Private
                        </Badge>
                      </motion.div>
                    )}

                    {currentProject.comingSoon && (
                      <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="flex"
                      >
                        <Badge className="bg-yellow-500/20 text-yellow-400 border-yellow-500/50">
                          Coming Soon
                        </Badge>
                      </motion.div>
                    )}

                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.6 }}
                      className="flex gap-4"
                    >
                      {currentProject.githubUrl && !currentProject.isPrivate && !currentProject.comingSoon && (
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
                      {currentProject.liveUrl && !currentProject.isPrivate && !currentProject.comingSoon && (
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
