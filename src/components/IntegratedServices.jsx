import React from 'react';
import { motion } from 'framer-motion';
import { Stethoscope, Microscope, HeartPulse, Scissors, PawPrint } from 'lucide-react';
import { fadeUp, staggerContainer } from '../utils/animations';

const integratedServices = [
    {
        icon: <Stethoscope size={32} strokeWidth={1.5} />,
        title: "Consulta General",
        desc: "Evaluaciones médicas exhaustivas para garantizar el desarrollo saludable de tu mascota en cada etapa.",
        img: "/images/consulta_general.webp"
    },
    {
        icon: <Microscope size={32} strokeWidth={1.5} />,
        title: "Análisis Clínico",
        desc: "Laboratorio in-house equipado con tecnología de precisión para diagnósticos rápidos y exactos.",
        img: "/images/analisis_clinico.webp"
    },
    {
        icon: <HeartPulse size={32} strokeWidth={1.5} />,
        title: "Medicina Integral",
        desc: "Abordaje completo desde prevención hasta tratamientos curativos avanzados, enfocados en bienestar.",
        img: "/images/cirugia.webp"
    },
    {
        icon: <Scissors size={32} strokeWidth={1.5} />,
        title: "Peluquería Canina",
        desc: "Spa y grooming profesional utilizando productos hipoalergénicos para cuidar la piel y el pelaje.",
        img: "/images/gallery-photo-01.webp"
    }
];

export default function IntegratedServices() {
    return (
        <section id="clinica" className="integrated-services-section">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={staggerContainer}>
                <motion.div variants={fadeUp} className="integrated-header">
                    <h2>Atención Clínica Integral</h2>
                    <p>Cobertura médica veterinaria 360° diseñada bajo los más exigentes estándares del sector.</p>
                </motion.div>

                <div className="integrated-grid">
                    {integratedServices.map((service, idx) => (
                        <motion.div key={idx} variants={fadeUp} className="integrated-card">
                            <div className="integrated-card-watermark">
                                <PawPrint size={180} />
                            </div>

                            <div className="integrated-card-body">
                                <div className="integrated-icon">
                                    {service.icon}
                                </div>
                                <div className="integrated-text">
                                    <h3>{service.title}</h3>
                                    <p>{service.desc}</p>
                                </div>
                            </div>

                            <div className="integrated-card-image">
                                <img src={service.img} alt={service.title} loading="lazy" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}
