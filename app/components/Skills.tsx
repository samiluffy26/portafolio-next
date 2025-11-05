"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Badge } from "./ui/badge";

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const allSkills = [
    "Html",
    "Css",
    "Js",
    "C#",
    ".NET",
    "Node",
    "Ts",
    "bootstrap",
    "C++",
    "React",
    "Next js",
    "Angular",
    "Docker",
    "Git",
    "Sql",
    "Java",
    "PhP",
    "mongodb",
    ".Net core",
    "entity framework core",
    "asp.net core",
    "blazor",
  ];

  const favoriteSkills = [
    "Node",
    "mongodb",
    "Express",
    "React",
    "Next",
    ".Net",
    "Asp.net",
    "entity framework",
    "blazor",
  ];

  const isFavorite = (skill: string) => {
    return favoriteSkills.some(
      (fav) => fav.toLowerCase() === skill.toLowerCase()
    );
  };

  return (
    <section id="skills" ref={ref} className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-black" />
      
      {/* Animated grid lines */}
      <div className="absolute inset-0 opacity-20">
        <div className="h-full w-full" style={{
          backgroundImage: `
            linear-gradient(90deg, rgba(16, 185, 129, 0.1) 1px, transparent 1px),
            linear-gradient(rgba(16, 185, 129, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.h2
            className="text-white mb-4"
            animate={{
              backgroundImage: [
                "linear-gradient(90deg, #10B981, #6D28D9)",
                "linear-gradient(180deg, #6D28D9, #10B981)",
                "linear-gradient(270deg, #10B981, #6D28D9)",
              ],
            }}
            transition={{ duration: 5, repeat: Infinity }}
          >
            Tech Stack
          </motion.h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#6D28D9] to-[#10B981] mx-auto rounded-full" />
          <p className="text-white/60 mt-4 max-w-2xl mx-auto">
            Tecnologías y herramientas con las que trabajo
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-5xl mx-auto"
        >
          <div className="flex flex-wrap gap-3 justify-center">
            {allSkills.map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.8, y: 50 }}
                animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
                transition={{
                  duration: 0.5,
                  delay: index * 0.03,
                  type: "spring",
                  stiffness: 100,
                }}
                whileHover={{
                  scale: 1.15,
                  rotate: isFavorite(skill) ? [0, -10, 10, -10, 0] : [0, -5, 5, 0],
                  boxShadow: isFavorite(skill)
                    ? "0 10px 40px rgba(16, 185, 129, 0.5)"
                    : "0 5px 20px rgba(255, 255, 255, 0.2)",
                }}
                whileTap={{ scale: 0.95 }}
              >
                <Badge
                  variant={isFavorite(skill) ? "default" : "outline"}
                  className={
                    isFavorite(skill)
                      ? "px-5 py-2.5 bg-gradient-to-r from-[#6D28D9] via-[#8B5CF6] to-[#10B981] text-white border-0 shadow-lg cursor-pointer relative overflow-hidden"
                      : "px-5 py-2.5 border-2 border-white/20 text-white/70 hover:border-[#10B981] hover:text-[#10B981] hover:bg-white/5 transition-all cursor-pointer backdrop-blur-sm"
                  }
                >
                  {isFavorite(skill) && (
                    <motion.div
                      className="absolute inset-0 bg-white"
                      initial={{ x: "-100%", opacity: 0.3 }}
                      whileHover={{ x: "100%" }}
                      transition={{ duration: 0.6 }}
                    />
                  )}
                  <span className="relative z-10">{skill}</span>
                </Badge>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 1.5 }}
            className="mt-12 text-center"
          >
            <motion.p
              className="text-white/40 mb-4 flex items-center justify-center gap-2"
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <motion.span
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              >
                ✨
              </motion.span>
              Tecnologías favoritas destacadas con gradiente
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
