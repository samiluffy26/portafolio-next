"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Badge } from "./ui/badge";
import { X, ExternalLink, FileText, Image as ImageIcon, ZoomIn, Download } from "lucide-react";
import * as Dialog from "@radix-ui/react-dialog";

interface Certificate {
    title: string;
    filename: string;
    type: "pdf" | "image";
    category: string;
}

export default function Certificates() {
    const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);

    const certificates: Certificate[] = [
        { title: "Amazon Web Services", filename: "AMAZON WEB SERVICES.pdf", type: "pdf", category: "Cloud" },
        { title: "ASP.NET Core Web API", filename: "ASP.NET CORE WEB API.pdf", type: "pdf", category: "Backend" },
        { title: "Node.js, Express, MongoDB & more", filename: "Backend.pdf", type: "pdf", category: "Backend" },
        { title: "Curso de IA 2026", filename: "Certificado-Samuel-Isaias-Guance-Santi.pdf", type: "pdf", category: "Fullstack" },
        { title: "Microsoft Excel", filename: "Coursera HD3C3FB1FC3C.pdf", type: "pdf", category: "Course" },
        { title: "Data Analysis & Visualization", filename: "Experto en analisis y visualizacion de datos.pdf", type: "pdf", category: "Data" },
        { title: "C# Programming", filename: "Primer-Programming.pdf", type: "pdf", category: "Language" },
        { title: "React Native", filename: "React Primer Curso.pdf", type: "pdf", category: "Frontend" },
        { title: "React Native Animations", filename: "React bsic.pdf", type: "pdf", category: "Frontend" },
        { title: "SQL 2025", filename: "SQL 2025.pdf", type: "pdf", category: "Database" },
        { title: "Master en APIs RESTful", filename: "UDEMY.pdf", type: "pdf", category: "Course" },
        { title: ".NET with MS SQL", filename: "_NET con SQL.pdf", type: "pdf", category: "Backend" },
        { title: ".NET Course 2025", filename: "_net course 2025.pdf", type: "pdf", category: "Backend" },
        { title: "Liderazgo", filename: "certifiado-Liderazgo.pdf", type: "pdf", category: "Soft Skills" },
        { title: "Desarrollo Web Fullstack", filename: "certificado-Indotel.pdf", type: "pdf", category: "Institution" },
        { title: "Desarrollo Web", filename: "certificado.pdf", type: "pdf", category: "General" },
        { title: "Bootcamp web development", filename: "certificado2.pdf", type: "pdf", category: "General" },
        { title: "Desarrollador .NET", filename: "certi.jpg", type: "image", category: "General" },
    ];

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
                        Certificaciones
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-[#6D28D9] to-[#10B981] mx-auto rounded-full" />
                    <p className="text-white/60 mt-4 max-w-2xl mx-auto">
                        Validación de mis habilidades y aprendizaje continuo
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {certificates.map((cert, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            onClick={() => setSelectedCert(cert)}
                            className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden cursor-pointer hover:border-[#10B981]/50 hover:bg-white/10 transition-all duration-300"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-[#10B981]/5 to-[#6D28D9]/5 opacity-0 group-hover:opacity-100 transition-opacity" />

                            <div className="p-6 flex flex-col items-center justify-center min-h-[200px] gap-4">
                                <div className="relative">
                                    <div className="absolute inset-0 bg-[#10B981]/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                                    {cert.type === 'pdf' ? (
                                        <FileText size={48} className="text-white/80 group-hover:text-[#10B981] transition-colors relative z-10" />
                                    ) : (
                                        <ImageIcon size={48} className="text-white/80 group-hover:text-[#6D28D9] transition-colors relative z-10" />
                                    )}
                                </div>

                                <div className="text-center">
                                    <h3 className="text-white font-medium group-hover:text-[#10B981] transition-colors line-clamp-2 mb-2">
                                        {cert.title}
                                    </h3>
                                    <Badge variant="outline" className="text-xs border-white/20 text-white/60 group-hover:border-[#10B981]/30 group-hover:text-[#10B981]">
                                        {cert.category}
                                    </Badge>
                                </div>

                                <div className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 group-hover:opacity-100 transition-all backdrop-blur-[2px]">
                                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2 text-white font-medium">
                                        <ZoomIn size={18} />
                                        <span>Ver Certificado</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
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
                                    title="Descargar"
                                >
                                    <Download size={20} />
                                </a>
                                <a
                                    href={`/Certificados/${selectedCert?.filename}`}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="p-2 hover:bg-white/10 rounded-full transition-colors text-white/70 hover:text-white"
                                    title="Abrir en nueva pestaña"
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
