"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Badge } from "./ui/badge";
import { X, ExternalLink, FileText, Image as ImageIcon, ZoomIn, Download, ChevronLeft, ChevronRight } from "lucide-react";
import * as Dialog from "@radix-ui/react-dialog";
import { useLanguage } from "@/components/LanguageProvider";

interface Certificate {
    title: string;
    filename: string;
    type: "pdf" | "image";
    category: string;
}

export default function Certificates() {
    const { t } = useLanguage();
    const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);

    const certificates: Certificate[] = [
        { title: "Administrador de Base de Datos", filename: "AdministradorBaseDatos.pdf", type: "pdf", category: "Database" },
        { title: "Administrador de Servidores", filename: "AdministradorDeServidores.pdf", type: "pdf", category: "DevOps" },
        { title: "AWS Cloud", filename: "AMAZON WEB SERVICES.pdf", type: "pdf", category: "Cloud" },
        { title: "Análisis Avanzado de Data Science", filename: "analalisis-avanzado-DataScience.pdf", type: "pdf", category: "Data" },
        { title: "ASP.NET Core Web API", filename: "ASP.NET CORE WEB API.pdf", type: "pdf", category: "Backend" },
        { title: "Backend", filename: "Backend.pdf", type: "pdf", category: "Backend" },
        { title: "C# básico con Microsoft", filename: "certi.jpg", type: "image", category: "Backend" },
        { title: "Liderazgo", filename: "certifiado-Liderazgo.pdf", type: "pdf", category: "Soft Skills" },
        { title: "Desarrollo IA", filename: "Certificado-DesarrolloIA.pdf", type: "pdf", category: "AI" },
        { title: "Desarrollo Web Fullstack", filename: "certificado-Indotel.pdf", type: "pdf", category: "Fullstack" },
        { title: "IA + Big Data", filename: "CertificadoIABIGDATA.pdf", type: "pdf", category: "AI" },
        { title: "Codificación Java", filename: "codificacion-java.pdf", type: "pdf", category: "Backend" },
        { title: "Curso Snowflake", filename: "Curso-Snowflake.pdf", type: "pdf", category: "Data" },
        { title: "Java para IA", filename: "CursoJava-IA.pdf", type: "pdf", category: "AI" },
        { title: "Repaso SQL", filename: "cursoRepaso-Sql.pdf", type: "pdf", category: "Database" },
        { title: "Data Literacy", filename: "Data-Literacy.pdf", type: "pdf", category: "Data" },
        { title: "Desarrollador Apps Móviles", filename: "DesarrolladorAppsMobiles.pdf", type: "pdf", category: "Mobile" },
        { title: "Desarrollador Back-end", filename: "DesarrolladorBack-end.pdf", type: "pdf", category: "Backend" },
        { title: "Desarrollador Front-end", filename: "DesarrolladorFront-end.pdf", type: "pdf", category: "Frontend" },
        { title: "Desarrollo PY IA", filename: "DesarrolloPYIA.pdf", type: "pdf", category: "AI" },
        { title: "Diplomado", filename: "Diplomado.pdf", type: "pdf", category: "Course" },
        { title: "Django y Laravel", filename: "django-laravel.pdf", type: "pdf", category: "Backend" },
        { title: "Experto en análisis y visualización de datos", filename: "Experto en analisis y visualizacion de datos.pdf", type: "pdf", category: "Data" },
        { title: "Golang Course", filename: "golangCourse.pdf", type: "pdf", category: "Backend" },
        { title: "OWASP API Java", filename: "OWASP-API-Java.pdf", type: "pdf", category: "Security" },
        { title: "Python Práctica", filename: "Python-Practica.pdf", type: "pdf", category: "Backend" },
        { title: "R Manipulación Avanzada de Datos", filename: "R-ManipulacionAvanzada-Datos.pdf", type: "pdf", category: "Data" },
        { title: "React Primer Curso", filename: "React Primer Curso.pdf", type: "pdf", category: "Frontend" },
        { title: "Seguridad de APIs", filename: "seguridad-apis.pdf", type: "pdf", category: "Security" },
        { title: "Spring Boot Course", filename: "SpringBootCourse.pdf", type: "pdf", category: "Backend" },
        { title: "SQL 2025", filename: "SQL 2025.pdf", type: "pdf", category: "Database" },
        { title: ".NET con SQL", filename: "_NET con SQL.pdf", type: "pdf", category: "Backend" },
    ];

    const categories = [
      t.certificates.allCategories,
      ...Array.from(new Set(certificates.map((cert) => cert.category))),
    ];

    const [selectedCategory, setSelectedCategory] = useState(t.certificates.allCategories);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
      setSelectedCategory(t.certificates.allCategories);
    }, [t.certificates.allCategories]);

    const filteredCertificates =
      selectedCategory === "All"
        ? certificates
        : certificates.filter((cert) => cert.category === selectedCategory);

    useEffect(() => {
      setCurrentIndex(0);
    }, [selectedCategory]);

    const currentCert = filteredCertificates[currentIndex] ?? filteredCertificates[0];

    const prevCertificate = () => {
      setCurrentIndex((prev) =>
        filteredCertificates.length === 0
          ? 0
          : (prev - 1 + filteredCertificates.length) % filteredCertificates.length,
      );
    };

    const nextCertificate = () => {
      setCurrentIndex((prev) =>
        filteredCertificates.length === 0
          ? 0
          : (prev + 1) % filteredCertificates.length,
      );
    };

    return (
        <section id="certificates" className="py-20 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-black" />
            <div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.05)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)] opacity-20" />

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-white mb-4 text-4xl font-bold">
                        {t.certificates.title}
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-[#6D28D9] to-[#10B981] mx-auto rounded-full" />
                    <p className="text-white/60 mt-4 max-w-2xl mx-auto">
                        {t.certificates.subtitle}
                    </p>
                </motion.div>

                <div className="mb-8 flex flex-wrap justify-center gap-2">
                    {categories.map((category) => (
                        <button
                            key={category}
                            type="button"
                            onClick={() => setSelectedCategory(category)}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                                selectedCategory === category
                                    ? "bg-[#10B981] text-black"
                                    : "bg-white/10 text-white hover:bg-white/20"
                            }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                <div className="max-w-5xl mx-auto">
                    {filteredCertificates.length === 0 ? (
                        <p className="text-white/70 text-center">{t.certificates.noCategory}</p>
                    ) : (
                        <div className="relative">
                            <motion.div
                                key={currentCert?.filename}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3 }}
                                className="group relative mx-auto max-w-3xl bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl overflow-hidden cursor-pointer hover:border-[#10B981]/50 hover:bg-white/10 transition-all duration-300"
                                onClick={() => currentCert && setSelectedCert(currentCert)}
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-[#10B981]/5 to-[#6D28D9]/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                                <div className="relative p-6 sm:p-10 flex flex-col items-center justify-center gap-6 min-h-[320px] sm:min-h-[360px]">
                                    <div className="relative">
                                        <div className="absolute inset-0 bg-[#10B981]/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                                        {currentCert?.type === "pdf" ? (
                                            <FileText size={56} className="text-white/80 group-hover:text-[#10B981] transition-colors relative z-10" />
                                        ) : (
                                            <ImageIcon size={56} className="text-white/80 group-hover:text-[#6D28D9] transition-colors relative z-10" />
                                        )}
                                    </div>

                                    <div className="text-center max-w-xl">
                                        <h3 className="text-white text-xl sm:text-2xl font-semibold group-hover:text-[#10B981] transition-colors mb-2 sm:mb-3">
                                            {currentCert?.title}
                                        </h3>
                                        <Badge variant="outline" className="text-xs sm:text-sm border-white/20 text-white/60 group-hover:border-[#10B981]/30 group-hover:text-[#10B981]">
                                            {currentCert?.category}
                                        </Badge>
                                    </div>

                                    <div className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 hover:opacity-100 transition-all backdrop-blur-[2px]">
                                        <div className="transform translate-y-4 hover:translate-y-0 transition-transform duration-300 flex items-center gap-2 text-white font-medium">
                                            <ZoomIn size={18} />
                                            <span>{t.certificates.view}</span>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>

                            {filteredCertificates.length > 1 && (
                                <>
                                    <button
                                        type="button"
                                        onClick={prevCertificate}
                                        className="absolute left-0 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white shadow-lg transition hover:bg-white/20 sm:-left-4"
                                        aria-label="Anterior certificado"
                                    >
                                        <ChevronLeft size={24} />
                                    </button>
                                    <button
                                        type="button"
                                        onClick={nextCertificate}
                                        className="absolute right-0 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white shadow-lg transition hover:bg-white/20 sm:-right-4"
                                        aria-label="Siguiente certificado"
                                    >
                                        <ChevronRight size={24} />
                                    </button>
                                </>
                            )}

                            <div className="mt-6 flex items-center justify-center gap-2 flex-wrap text-white/60 text-sm">
                                <span>{currentIndex + 1}/{filteredCertificates.length}</span>
                                <span className="h-1 w-1 rounded-full bg-white/50" />
                                <span>{currentCert?.filename}</span>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Modal / Dialog */}
            <Dialog.Root open={!!selectedCert} onOpenChange={(open) => !open && setSelectedCert(null)}>
                <Dialog.Portal>
                    <Dialog.Overlay className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 animate-in fade-in duration-200" />
                    <Dialog.Content className="fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[95vw] h-[90vh] max-w-6xl bg-[#0a0a0a] border border-white/10 rounded-2xl shadow-2xl z-50 animate-in zoom-in-95 duration-200 flex flex-col outline-none">

                        {/* Modal Header */}
                        <div className="flex items-center justify-between p-4 border-b border-white/10">
                            <div className="flex items-center gap-3">
                                {selectedCert?.type === 'pdf' ? <FileText className="text-[#10B981]" /> : <ImageIcon className="text-[#6D28D9]" />}
                                <h3 className="text-white font-medium text-lg">{selectedCert?.title}</h3>
                            </div>
                            <div className="flex items-center gap-2">
                                <a
                                    href={`/Certificados/${selectedCert?.filename}`}
                                    download
                                    className="p-2 hover:bg-white/10 rounded-full transition-colors text-white/70 hover:text-white"
                                    title={t.certificates.download}
                                >
                                    <Download size={20} />
                                </a>
                                <a
                                    href={`/Certificados/${selectedCert?.filename}`}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="p-2 hover:bg-white/10 rounded-full transition-colors text-white/70 hover:text-white"
                                    title={t.certificates.open}
                                >
                                    <ExternalLink size={20} />
                                </a>
                                <button
                                    onClick={() => setSelectedCert(null)}
                                    className="p-2 hover:bg-red-500/20 hover:text-red-500 rounded-full transition-colors text-white/70"
                                >
                                    <X size={20} />
                                </button>
                            </div>
                        </div>

                        {/* Modal Body - Viewer */}
                        <div className="flex-1 bg-[#1a1a1a] relative overflow-hidden flex items-center justify-center p-4">
                            {selectedCert && (
                                selectedCert.type === 'pdf' ? (
                                    <object
                                        data={`/Certificados/${selectedCert.filename}`}
                                        type="application/pdf"
                                        className="w-full h-full rounded-lg"
                                    >
                                        <div className="text-white text-center p-8">
                                            <p>Tu navegador no puede mostrar este PDF directamente.</p>
                                            <a
                                                href={`/Certificados/${selectedCert.filename}`}
                                                target="_blank"
                                                className="text-[#10B981] hover:underline mt-2 inline-block"
                                            >
                                                Abrir PDF
                                            </a>
                                        </div>
                                    </object>
                                ) : (
                                    <img
                                        src={`/Certificados/${selectedCert.filename}`}
                                        alt={selectedCert.title}
                                        className="max-w-full max-h-full object-contain rounded-lg"
                                    />
                                )
                            )}
                        </div>

                    </Dialog.Content>
                </Dialog.Portal>
            </Dialog.Root>
        </section>
    );
}
