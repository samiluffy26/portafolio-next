"use client";
import { motion } from "framer-motion";
import { ArrowDown, Code2, Terminal, Sparkles } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export default function Hero() {
  const codeLines = [
    "const developer = {",
    "  name: 'Fullstack Dev',",
    "  skills: ['React', 'Node.js', '.NET'],",
    "  passion: 'Building the future'",
    "};",
  ];

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >
      {/* Matrix-style falling code */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-[#10B981] font-mono text-xs"
            style={{ left: `${i * 5}%` }}
            animate={{
              y: ["-100%", "100%"],
            }}
            transition={{
              duration: 10 + Math.random() * 10,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 5,
            }}
          >
            {"{} </> () []".split("").map((char, j) => (
              <div key={j} className="h-8">
                {char}
              </div>
            ))}
          </motion.div>
        ))}
      </div>

      {/* Animated Terminal Window */}
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="absolute left-4 top-32 hidden lg:block"
      >
        <div className="bg-black/40 backdrop-blur-md border border-[#10B981]/30 rounded-lg p-4 w-80">
          <div className="flex gap-2 mb-3">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
          </div>
          <div className="font-mono text-xs text-[#10B981]">
            {codeLines.map((line, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1 + i * 0.2 }}
              >
                {line}
              </motion.div>
            ))}
            <motion.span
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
              className="inline-block w-2 h-4 bg-[#10B981] ml-1"
            />
          </div>
        </div>
      </motion.div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#10B981]/10 border border-[#10B981]/30 rounded-full mb-6"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, type: "spring" }}
            >
              <Sparkles size={16} className="text-[#10B981]" />
              <span className="text-[#10B981]">Available for work</span>
            </motion.div>

            <motion.h1
              className="mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <span className="block text-white/60 mb-2">Hi, I'm a Samuel Isaias Guance Santi</span>
              <span className="block bg-gradient-to-r from-[#10B981] via-[#8B5CF6] to-[#6D28D9] bg-clip-text text-transparent">
                Fullstack Developer
              </span>
              <span className="block bg-gradient-to-r from-[#6D28D9] via-[#8B5CF6] to-[#10B981] bg-clip-text text-transparent">
                & Project Manager
              </span>
            </motion.h1>

            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="text-white/70 mb-8 leading-relaxed"
            >
              I am a junior fullstack developer and Project Manager of the{" "}
              <span className="text-[#10B981] font-semibold">EduVisor</span> project, 
              a web platform for the Ministry of Education. Specialized in building 
              scalable solutions with <span className="text-[#6D28D9]">React</span>,{" "}
              <span className="text-[#6D28D9]">Node.js</span>, and{" "}
              <span className="text-[#6D28D9]">.NET</span>.
            </motion.p>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1 }}
              className="flex flex-wrap gap-4"
            >
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(16, 185, 129, 0.5)" }}
                whileTap={{ scale: 0.95 }}
                className="group px-8 py-4 rounded-full bg-gradient-to-r from-[#10B981] to-[#059669] text-black relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <Code2 size={20} />
                  Ver Proyectos
                </span>
                <motion.div
                  className="absolute inset-0 bg-white"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                  style={{ opacity: 0.2 }}
                />
              </motion.a>

              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(109, 40, 217, 0.5)" }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-full border-2 border-[#6D28D9] text-white hover:bg-[#6D28D9]/20 transition-all flex items-center gap-2"
              >
                <Terminal size={20} />
                Contactar
              </motion.a>
            </motion.div>

            {/* Tech Stack Icons */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="mt-12 flex flex-wrap gap-4"
            >
              {["React", "Node.js", ".NET", "MongoDB", "Next.js"].map((tech, i) => (
                <motion.div
                  key={tech}
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 1.3 + i * 0.1, type: "spring" }}
                  whileHover={{ y: -5, scale: 1.1 }}
                  className="px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg text-white/60 text-sm hover:border-[#10B981] hover:text-[#10B981] transition-all"
                >
                  {tech}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: Photo/Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="relative"
          >
            {/* Glowing ring */}
            <motion.div
              className="absolute inset-0 rounded-full"
              animate={{
                boxShadow: [
                  "0 0 60px rgba(16, 185, 129, 0.3)",
                  "0 0 80px rgba(109, 40, 217, 0.4)",
                  "0 0 60px rgba(16, 185, 129, 0.3)",
                ],
              }}
              transition={{ duration: 3, repeat: Infinity }}
            />

            {/* Photo container */}
            <div className="relative aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-[#10B981] via-[#8B5CF6] to-[#6D28D9] rounded-full blur-2xl opacity-40" />
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-[#10B981]/30">
                <ImageWithFallback
                  src="/me.jpg"
                  alt="Fullstack Developer"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating badges */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-4 -right-4 bg-gradient-to-r from-[#10B981] to-[#059669] px-4 py-2 rounded-full shadow-lg"
              >
                <span className="text-black">⚡ Fast</span>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                className="absolute -bottom-4 -left-4 bg-gradient-to-r from-[#6D28D9] to-[#5B21B6] px-4 py-2 rounded-full shadow-lg"
              >
                <span className="text-white">🎯 Precise</span>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.a
            href="#about"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-[#10B981]"
            aria-label="Scroll down"
          >
            <span className="text-sm">Scroll</span>
            <ArrowDown size={24} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
