"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { Mail, Github, Linkedin, Send, Instagram, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { FaWhatsapp } from "react-icons/fa";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    serviceType: "",
    budget: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const serviceTypes = [
    { value: "", label: "Selecciona un servicio" },
    { value: "web-development", label: "🌐 Desarrollo Web" },
    { value: "mobile-app", label: "📱 Aplicación Móvil" },
    { value: "ecommerce", label: "🛒 E-commerce" },
    { value: "ui-ux-design", label: "🎨 Diseño UI/UX" },
    { value: "api-backend", label: "⚙️ API/Backend" },
    { value: "consulting", label: "💼 Consultoría" },
    { value: "maintenance", label: "🔧 Mantenimiento" },
    { value: "other", label: "✨ Otro" },
  ];

  const budgetRanges = [
    { value: "", label: "Presupuesto (opcional)" },
    { value: "under-1000", label: "Menos de $1,000" },
    { value: "1000-5000", label: "$1,000 - $5,000" },
    { value: "5000-10000", label: "$5,000 - $10,000" },
    { value: "10000-25000", label: "$10,000 - $25,000" },
    { value: "25000-plus", label: "Más de $25,000" },
    { value: "not-sure", label: "No estoy seguro" },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const selectedService = serviceTypes.find(s => s.value === formData.serviceType)?.label || "No especificado";
      const selectedBudget = budgetRanges.find(b => b.value === formData.budget)?.label || "No especificado";

      // Formatear el mensaje para que llegue organizado
      const formattedMessage = `
═══════════════════════════════════════
📋 NUEVA SOLICITUD DE CONTACTO
═══════════════════════════════════════

👤 INFORMACIÓN DEL CLIENTE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Nombre: ${formData.name}
Email: ${formData.email}
Teléfono: ${formData.phone || "No proporcionado"}

💼 DETALLES DEL PROYECTO
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Tipo de Servicio: ${selectedService}
Presupuesto: ${selectedBudget}

💬 MENSAJE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
${formData.message}

═══════════════════════════════════════
📅 Fecha: ${new Date().toLocaleString('es-ES', { 
  dateStyle: 'full', 
  timeStyle: 'short' 
})}
═══════════════════════════════════════
      `;

      const response = await fetch("https://formspree.io/f/meopbyny", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          serviceType: selectedService,
          budget: selectedBudget,
          message: formData.message,
          formattedMessage: formattedMessage,
          _subject: `🚀 Nueva Solicitud: ${selectedService} - ${formData.name}`,
          _replyto: formData.email,
        }),
      });

      if (response.ok) {
        toast.success("✅ ¡Mensaje enviado exitosamente! Te contactaré pronto.");
        setFormData({ 
          name: "", 
          email: "", 
          phone: "", 
          serviceType: "", 
          budget: "", 
          message: "" 
        });
      } else {
        const errorData = await response.json();
        toast.error(`❌ Error: ${errorData.error || "No se pudo enviar el mensaje"}`);
      }
    } catch (error) {
      console.error("Error detallado:", error);
      toast.error("🌐 Error de conexión. Por favor, intenta más tarde.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/samiluffy26",
      color: "#0F172A",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/samuelguance/",
      color: "#0A66C2",
    },
    {
      icon: Mail,
      label: "Email",
      href: "mailto:samuel.guance@hotmail.com",
      color: "#10B981",
    },
    {
      icon: Instagram,
      label: "Instagram",
      href: "https://www.instagram.com/sami_luffy26?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
      color: "#10B981",
    },
    {
      icon: FaWhatsapp,
      label: "Whatsapp",
      href: "https://wa.me/18096950386",
      color: "#10B981",
    },
  ];

  return (
    <section id="contact" ref={ref} className="py-20 bg-black relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Contacto</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#6D28D9] to-[#10B981] mx-auto rounded-full" />
          <p className="text-white/60 mt-4 max-w-2xl mx-auto">
            ¿Tienes un proyecto en mente? ¡Hablemos!
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg p-8 rounded-2xl border border-white/10"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-white mb-2 font-medium">
                  Nombre
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  className="w-full bg-white/5 border-white/20 text-white focus:border-[#10B981] disabled:opacity-50"
                  placeholder="Tu nombre"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-white mb-2 font-medium">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  className="w-full bg-white/5 border-white/20 text-white focus:border-[#10B981] disabled:opacity-50"
                  placeholder="tu@email.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-white mb-2 font-medium">
                  Teléfono / WhatsApp
                </label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  className="w-full bg-white/5 border-white/20 text-white focus:border-[#10B981] disabled:opacity-50"
                  placeholder="+1 (809) 123-4567"
                />
              </div>

              <div>
                <label htmlFor="serviceType" className="block text-white mb-2 font-medium">
                  Tipo de Servicio
                </label>
                <select
                  id="serviceType"
                  name="serviceType"
                  required
                  value={formData.serviceType}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  className="w-full bg-white/5 border border-white/20 text-white rounded-md px-3 py-2 focus:border-[#10B981] focus:outline-none disabled:opacity-50 cursor-pointer"
                >
                  {serviceTypes.map((service) => (
                    <option key={service.value} value={service.value} className="bg-gray-900">
                      {service.label}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="budget" className="block text-white mb-2 font-medium">
                  Presupuesto (Opcional)
                </label>
                <select
                  id="budget"
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  className="w-full bg-white/5 border border-white/20 text-white rounded-md px-3 py-2 focus:border-[#10B981] focus:outline-none disabled:opacity-50 cursor-pointer"
                >
                  {budgetRanges.map((range) => (
                    <option key={range.value} value={range.value} className="bg-gray-900">
                      {range.label}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-white mb-2 font-medium">
                  Mensaje
                </label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  className="w-full min-h-[150px] bg-white/5 border-white/20 text-white focus:border-[#10B981] disabled:opacity-50"
                  placeholder="Cuéntame sobre tu proyecto..."
                />
              </div>

              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-[#6D28D9] to-[#10B981] text-white hover:shadow-lg hover:shadow-[#10B981]/50 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 size={20} className="mr-2 animate-spin" />
                      Enviando...
                    </>
                  ) : (
                    <>
                      <Send size={20} className="mr-2" />
                      Enviar Mensaje
                    </>
                  )}
                </Button>
              </motion.div>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col justify-center"
          >
            <div className="bg-gradient-to-br from-[#6D28D9]/20 to-[#10B981]/20 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-6">
                Conecta conmigo
              </h3>
              <p className="text-white/70 mb-8">
                Siempre estoy abierto a discutir nuevos proyectos, ideas
                creativas o oportunidades para ser parte de tus visiones.
              </p>

              <div className="space-y-4">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    whileHover={{ x: 10, scale: 1.05 }}
                    className="flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-white/10 hover:border-[#10B981]/50 hover:bg-white/10 transition-all group"
                  >
                    <motion.div
                      className="w-12 h-12 rounded-full flex items-center justify-center bg-gradient-to-br from-[#6D28D9] to-[#10B981]"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <link.icon size={24} className="text-white" />
                    </motion.div>
                    <span className="text-white/70 group-hover:text-[#10B981] transition-colors">
                      {link.label}
                    </span>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}