import React from 'react';
import { motion } from 'framer-motion';
import { Stethoscope, Syringe, Scissors } from 'lucide-react';
import { fadeUp, staggerContainer } from '../utils/animations';

const services = [
    {
        icon: <Stethoscope size={20} />,
        title: "Consultas Generales",
        desc: "Diagnósticos precisos apoyados en tecnología para garantizar la salud a largo plazo.",
        img: "/images/consultas.webp"
    },
    {
        icon: <Syringe size={20} />,
        title: "Vacunación",
        desc: "Esquemas personalizados que fortalecen la inmunidad y previenen enfermedades complejas.",
        img: "/images/vacunacion.webp"
    },
    {
        icon: <Scissors size={20} />,
        title: "Cirugía Especializada",
        desc: "Quirófanos asépticos y modernos con monitoreo continuo durante todo el procedimiento.",
        img: "/images/consulta_general.webp"
    }
];

export default function Services() {
    return (
        <section id="servicios" className="services-section">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={staggerContainer}>
                <motion.h2 variants={fadeUp} className="section-title-center">Especialidades</motion.h2>
                <motion.p variants={fadeUp} className="section-subtitle-center">
                    Abordaje clínico sustentado para garantizar longevidad y vitalidad.
                </motion.p>

                <div className="services-grid">
                    {services.map((service, idx) => (
                        <motion.div key={idx} variants={fadeUp} className="service-card">
                            <div className="service-image">
                                <img src={service.img} alt={service.title} loading="lazy" />
                            </div>
                            <div className="service-content">
                                <div className="service-icon-wrap">
                                    {service.icon}
                                </div>
                                <h3>{service.title}</h3>
                                <p>{service.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}
