"use client";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-white/10 text-white py-12 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#10B981]/5 via-transparent to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center justify-center space-y-4">
          {/* Logo/Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2"
          >
            <motion.div
              className="w-10 h-10 rounded-full bg-gradient-to-br from-[#6D28D9] to-[#10B981] flex items-center justify-center"
              whileHover={{ scale: 1.1, rotate: 360 }}
              transition={{ duration: 0.6 }}
            >
              <span>{"</>"}</span>
            </motion.div>
          </motion.div>

          {/* Copyright */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-white/70 flex items-center gap-2"
          >
            © {currentYear} Desarrollado con{" "}
            <Heart size={16} className="text-[#10B981] fill-[#10B981]" /> por Samuel Guance.
          </motion.p>

          {/* Tech Stack */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-white/50"
          >
            React · Next.js · TypeScript · Tailwind CSS · Motion
          </motion.p>
        </div>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-6 mt-8 pt-8 border-t border-white/10"
        >
          {["Inicio", "Sobre mí", "Skills", "Proyectos", "Contacto"].map(
            (item, index) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase().replace(" ", "")}`}
                whileHover={{ y: -2, color: "#10B981" }}
                className="text-white/70 hover:text-[#10B981] transition-colors"
              >
                {item}
              </motion.a>
            )
          )}
        </motion.div>
      </div>
    </footer>
  );
}
