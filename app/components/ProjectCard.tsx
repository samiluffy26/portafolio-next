"use client";
import { motion } from "motion/react";
import { ExternalLink, Github } from "lucide-react";
import { Badge } from "./ui/badge";
import Image from "next/image";

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  featured?: boolean;
  githubUrl?: string;
  liveUrl?: string;
  image?: string; // ← propiedad nueva
}

export default function ProjectCard({
  title,
  description,
  technologies,
  featured = false,
  githubUrl,
  liveUrl,
  image,
}: ProjectCardProps) {
  return (
    <motion.div
      whileHover={{
        y: -10,
        rotateY: 2,
        rotateX: 2,
      }}
      transition={{ duration: 0.3 }}
      className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow border border-gray-100"
    >
      {/* Glow effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#6D28D9]/0 to-[#10B981]/0 group-hover:from-[#6D28D9]/10 group-hover:to-[#10B981]/10 transition-all duration-300" />

      {/* Content */}
      <div className="relative p-6 h-full flex flex-col">
        {/* Badge for featured */}
        {featured && (
          <div className="absolute top-4 right-4">
            <Badge className="bg-gradient-to-r from-[#6D28D9] to-[#10B981] text-white border-0">
              Destacado
            </Badge>
          </div>
        )}

        {/* Imagen del proyecto */}
        {image && (
          <div className="mb-4 rounded-xl overflow-hidden">
            <Image
              src={image}
              alt={title}
              width={600}
              height={400}
              className="w-full h-auto object-cover"
            />
          </div>
        )}

        {/* Título */}
        <h3 className="text-[#0F172A] mb-3 pr-20">{title}</h3>

        {/* Descripción */}
        <p className="text-[#0F172A]/70 mb-6 flex-grow">{description}</p>

        {/* Tecnologías */}
        <div className="flex flex-wrap gap-2 mb-6">
          {technologies.slice(0, 5).map((tech) => (
            <Badge
              key={tech}
              variant="outline"
              className="text-xs border-[#10B981] text-[#10B981]"
            >
              {tech}
            </Badge>
          ))}
          {technologies.length > 5 && (
            <Badge variant="outline" className="text-xs">
              +{technologies.length - 5}
            </Badge>
          )}
        </div>

        {/* Enlaces */}
        <div className="flex gap-4">
          {githubUrl && (
            <motion.a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 text-[#0F172A] hover:text-[#6D28D9] transition-colors"
            >
              <Github size={20} />
              <span>Code</span>
            </motion.a>
          )}
          {liveUrl && (
            <motion.a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 text-[#0F172A] hover:text-[#10B981] transition-colors"
            >
              <ExternalLink size={20} />
              <span>Live</span>
            </motion.a>
          )}
        </div>
      </div>

      {/* Animated border */}
      <motion.div
        className="absolute inset-0 border-2 border-transparent rounded-2xl"
        whileHover={{
          borderImage: "linear-gradient(135deg, #6D28D9, #10B981) 1",
        }}
      />
    </motion.div>
  );
}