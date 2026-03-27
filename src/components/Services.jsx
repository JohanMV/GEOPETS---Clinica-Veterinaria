import React from 'react';
import { motion } from 'framer-motion';
import { Stethoscope, Syringe, Scissors } from 'lucide-react';
import { fadeUp, staggerContainer } from '../utils/animations';
import { ExpandableCard } from './ui/expandable-card';

const services = [
    {
        icon: <Stethoscope size={20} />,
        title: "Consultas Generales",
        desc: "Diagnósticos precisos apoyados en tecnología para garantizar la salud a largo plazo.",
        img: "/images/consultas.webp",
        details: [
            "chequeo general",
            "diagnóstico clínico",
            "control preventivo",
            "desparasitación",
            "orientación médica"
        ]
    },
    {
        icon: <Syringe size={20} />,
        title: "Vacunación",
        desc: "Esquemas personalizados que fortalecen la inmunidad y previenen enfermedades complejas.",
        img: "/images/vacunacion.webp",
        details: [
            "vacuna múltiple",
            "antirrábica",
            "destemper/moquillo",
            "parvovirus",
            "refuerzos anuales"
        ]
    },
    {
        icon: <Scissors size={20} />,
        title: "Cirugía Especializada",
        desc: "Quirófanos asépticos y modernos con monitoreo continuo durante todo el procedimiento.",
        img: "/images/consulta_general.webp",
        details: [
            "esterilización",
            "castración",
            "extracción de masas",
            "cirugía de tejidos blandos",
            "procedimientos menores"
        ]
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
                        <motion.div key={idx} variants={fadeUp} style={{ height: '100%' }}>
                            <ExpandableCard
                                title={service.title}
                                src={service.img}
                                description={service.desc}
                                icon={service.icon}
                            >
                                <div style={{ borderTop: '1px solid var(--border-light)', paddingTop: '24px' }}>
                                    <h4 style={{ color: 'var(--text-title)', marginBottom: '16px', fontSize: '1.1rem', fontFamily: 'var(--font-display)' }}>Incluye:</h4>
                                    <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                                        {service.details.map((detail, i) => (
                                            <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--text-body)', fontWeight: 500 }}>
                                                <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--primary)', flexShrink: 0 }}></div>
                                                {detail}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </ExpandableCard>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}
