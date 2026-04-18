"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { Mail, Github, Linkedin, Send, Instagram, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { FaWhatsapp } from "react-icons/fa";
import { useLanguage } from "@/components/LanguageProvider";

export default function Contact() {
  const { locale, t } = useLanguage();
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
    { value: "", label: t.contact.selectService },
    { value: "web-development", label: t.contact.serviceOptions.webDevelopment },
    { value: "mobile-app", label: t.contact.serviceOptions.mobileApp },
    { value: "ecommerce", label: t.contact.serviceOptions.ecommerce },
    { value: "ui-ux-design", label: t.contact.serviceOptions.uiUxDesign },
    { value: "api-backend", label: t.contact.serviceOptions.apiBackend },
    { value: "consulting", label: t.contact.serviceOptions.consulting },
    { value: "maintenance", label: t.contact.serviceOptions.maintenance },
    { value: "other", label: t.contact.serviceOptions.other },
  ];

  const budgetRanges = [
    { value: "", label: t.contact.budget },
    { value: "under-1000", label: t.contact.budgetOptions.under1000 },
    { value: "1000-5000", label: t.contact.budgetOptions["1000to5000"] },
    { value: "5000-10000", label: t.contact.budgetOptions["5000to10000"] },
    { value: "10000-25000", label: t.contact.budgetOptions["10000to25000"] },
    { value: "25000-plus", label: t.contact.budgetOptions["25000plus"] },
    { value: "not-sure", label: t.contact.budgetOptions.notSure },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const selectedService = serviceTypes.find((s) => s.value === formData.serviceType)?.label || t.contact.notSpecified;
      const selectedBudget = budgetRanges.find((b) => b.value === formData.budget)?.label || t.contact.notSpecified;

      const formattedMessage = `
═══════════════════════════════════════
${t.contact.clientInfoLabel}
═══════════════════════════════════════

${t.contact.name}: ${formData.name}
${t.contact.email}: ${formData.email}
${t.contact.phone}: ${formData.phone || t.contact.notSpecified}

${t.contact.projectDetailsLabel}
═══════════════════════════════════════
${t.contact.serviceType}: ${selectedService}
${t.contact.budget}: ${selectedBudget}

${t.contact.messageLabel}
═══════════════════════════════════════
${formData.message}

═══════════════════════════════════════
${t.contact.dateLabel}: ${new Date().toLocaleString(locale, {
        dateStyle: "full",
        timeStyle: "short",
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
          _subject: `New Contact: ${selectedService} - ${formData.name}`,
          _replyto: formData.email,
        }),
      });

      if (response.ok) {
        toast.success(t.contact.formSuccess);
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
        toast.error(`Error: ${errorData.error || t.contact.formError}`);
      }
    } catch (error) {
      console.error("Error details:", error);
      toast.error(t.contact.formConnectionError);
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
          <h2 className="text-4xl font-bold text-white mb-4">{t.contact.title}</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#6D28D9] to-[#10B981] mx-auto rounded-full" />
          <p className="text-white/60 mt-4 max-w-2xl mx-auto">
            {t.contact.subtitle}
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
                  {t.contact.name}
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
                  placeholder={t.contact.namePlaceholder}
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-white mb-2 font-medium">
                  {t.contact.email}
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
                  placeholder={t.contact.emailPlaceholder}
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-white mb-2 font-medium">
                  {t.contact.phone}
                </label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  className="w-full bg-white/5 border-white/20 text-white focus:border-[#10B981] disabled:opacity-50"
                  placeholder={t.contact.phonePlaceholder}
                />
              </div>

              <div>
                <label htmlFor="serviceType" className="block text-white mb-2 font-medium">
                  {t.contact.serviceType}
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
                  {t.contact.budget}
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
                  {t.contact.message}
                </label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  className="w-full min-h-[150px] bg-white/5 border-white/20 text-white focus:border-[#10B981] disabled:opacity-50"
                  placeholder={t.contact.messagePlaceholder}
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
                      {t.contact.sending}
                    </>
                  ) : (
                    <>
                      <Send size={20} className="mr-2" />
                      {t.contact.sendMessage}
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
                {t.contact.connectTitle}
              </h3>
              <p className="text-white/70 mb-8">
                {t.contact.connectText}
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