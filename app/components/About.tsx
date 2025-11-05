"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Database, Globe } from "lucide-react";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    {
      icon: Code2,
      title: "Frontend Development",
      description: "React, Next.js, React Native, Angular, Blazor",
    },
    {
      icon: Database,
      title: "Backend & Database",
      description: "Node.js, .NET, MongoDB, SQL Server, Entity Framework",
    },
    {
      icon: Globe,
      title: "Project Management",
      description: "Leading EduVisor project for Ministry of Education",
    },
  ];

  return (
    <section
      id="about"
      ref={ref}
      className="py-20 relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0a0a0a] to-black" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.h2
            className="text-white mb-4"
            initial={{ scale: 0.9 }}
            animate={isInView ? { scale: 1 } : {}}
          >
            Sobre mí
          </motion.h2>
          <motion.div
            className="w-20 h-1 bg-gradient-to-r from-[#6D28D9] to-[#10B981] mx-auto rounded-full"
            initial={{ width: 0 }}
            animate={isInView ? { width: 80 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50, rotateY: -30 }}
              animate={isInView ? { opacity: 1, y: 0, rotateY: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ 
                y: -15, 
                scale: 1.05,
                boxShadow: "0 20px 60px rgba(16, 185, 129, 0.3)"
              }}
              className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg p-8 rounded-2xl border border-white/10 hover:border-[#10B981]/50 transition-all"
            >
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#6D28D9]/0 to-[#10B981]/0 group-hover:from-[#6D28D9]/20 group-hover:to-[#10B981]/20 rounded-2xl transition-all duration-500" />
              
              <motion.div
                className="relative w-16 h-16 bg-gradient-to-br from-[#6D28D9] to-[#10B981] rounded-2xl flex items-center justify-center mb-6 mx-auto"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.8 }}
              >
                <feature.icon className="text-white" size={32} />
              </motion.div>
              
              <h3 className="text-white mb-3 text-center relative">
                {feature.title}
              </h3>
              <p className="text-white/60 text-center relative">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="max-w-4xl mx-auto mt-16 p-8 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl border border-white/10 relative overflow-hidden"
        >
          {/* Animated border */}
          <motion.div
            className="absolute inset-0 rounded-2xl"
            animate={{
              background: [
                "linear-gradient(0deg, transparent, transparent)",
                "linear-gradient(360deg, rgba(16, 185, 129, 0.3), rgba(109, 40, 217, 0.3))",
              ],
            }}
            transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
            style={{ padding: "1px" }}
          />
          
          <p className="text-white/80 leading-relaxed relative">
            I am a junior fullstack developer and Project Manager of the EduVisor project, a web platform for the Ministry of Education that enables educational technicians to register school visits with photos, reports, and deadlines, eliminating manual processes and ensuring the accuracy of information. In this project, I am responsible for the backend and database, implementing scalable and secure solutions. My core technical skills include React, React Native, Node.js, SQL, C#, .NET, JavaScript, Blazor, ASP.NET, MongoDB, Mongoose, version control with Git/GitHub, and API testing with Postman.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
