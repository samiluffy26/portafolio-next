"use client";
import { motion } from "framer-motion";

export default function GridBackground() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {/* Animated Grid */}
      <div className="absolute inset-0">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="grid"
              width="50"
              height="50"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 50 0 L 0 0 0 50"
                fill="none"
                stroke="rgba(16, 185, 129, 0.1)"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <motion.rect
            width="100%"
            height="100%"
            fill="url(#grid)"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
          />
        </svg>
      </div>

      {/* Gradient Orbs */}
      <motion.div
        animate={{
          x: [0, 100, -50, 0],
          y: [0, -100, 50, 0],
          scale: [1, 1.2, 0.8, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-0 left-1/4 w-96 h-96 bg-[#6D28D9] rounded-full mix-blend-multiply filter blur-3xl opacity-20"
      />

      <motion.div
        animate={{
          x: [0, -100, 50, 0],
          y: [0, 100, -50, 0],
          scale: [1, 0.8, 1.2, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#10B981] rounded-full mix-blend-multiply filter blur-3xl opacity-20"
      />

      <motion.div
        animate={{
          x: [0, 50, -100, 0],
          y: [0, -50, 100, 0],
          scale: [1, 1.3, 0.9, 1],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4,
        }}
        className="absolute top-1/2 left-1/2 w-96 h-96 bg-[#8B5CF6] rounded-full mix-blend-multiply filter blur-3xl opacity-15"
      />
    </div>
  );
}
