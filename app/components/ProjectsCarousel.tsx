"use client";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight, ExternalLink, Github, Star } from "lucide-react";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useLanguage } from "@/components/LanguageProvider";

import { getProjects } from "@/data/projects";

export default function ProjectsCarousel() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentIndex, setCurrentIndex] = useState(0);
  const { t, locale } = useLanguage();
  const projects = getProjects(locale);

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
                    className="relative aspect-[2.05/1] rounded-xl overflow-hidden group"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ImageWithFallback
                      src={currentProject.image}
                      alt={currentProject.title}
                      className="w-full h-full object-cover object-top"
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
                          <span className="text-red-400 text-sm font-medium">{t.projects.private}</span>
                        </div>
                      )}
                      {currentProject.comingSoon && (
                        <div className="p-3 bg-yellow-500/20 backdrop-blur-md rounded-full border border-yellow-500/50">
                          <span className="text-yellow-400 text-sm font-medium">{t.projects.comingSoon}</span>
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
                          {t.projects.private}
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
                          {t.projects.comingSoon}
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
                          {t.projects.code}
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
                          {t.projects.demo}
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
                className={`h-2 rounded-full transition-all ${index === currentIndex
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
