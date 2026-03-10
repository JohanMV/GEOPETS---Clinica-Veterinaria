import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { fadeUp } from '../utils/animations';

const aboutImages = [
    "/images/about_1.png",
    "/images/about_2.png",
    "/images/about_3.png",
    "/images/about_4.png"
];

const aboutAlts = [
    "Recepción GeoPet's",
    "Salas de Monitoreo",
    "Quirófano Moderno",
    "Atención Clínica Veterinaria"
];

export default function About() {
    const [selectedIndex, setSelectedIndex] = useState(null);

    const openLightbox = (index) => setSelectedIndex(index);
    const closeLightbox = () => setSelectedIndex(null);

    const showNext = (e) => {
        e.stopPropagation();
        setSelectedIndex((prev) => (prev + 1) % aboutImages.length);
    };

    const showPrev = (e) => {
        e.stopPropagation();
        setSelectedIndex((prev) => (prev - 1 + aboutImages.length) % aboutImages.length);
    };

    return (
        <section id="quienes-somos" className="about-section">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="about-wrapper">
                <div className="about-content">
                    <h2 className="features-header-title" style={{ fontSize: '3rem', marginBottom: '24px' }}>Nuestra Historia</h2>
                    <p className="features-header-desc" style={{ marginBottom: '32px' }}>
                        Fundada en la intersección de la pasión por el bienestar animal y la vanguardia científica.
                        En GeoPet's, no solo aplicamos diagnóstico y tratamiento, sino que construimos un refugio seguro, optimizado
                        para ofrecer paz a las familias y vitalidad a cada paciente que cruza nuestras puertas.
                    </p>
                    <div>
                        <button className="btn-primary" style={{ padding: '14px 28px' }}>Descubre nuestro legado</button>
                    </div>
                </div>
                <div className="about-image-grid">
                    {aboutImages.map((src, index) => (
                        <div key={index} className="about-image-item" onClick={() => openLightbox(index)}>
                            <img src={src} alt={aboutAlts[index]} loading="lazy" />
                            <div className="gallery-overlay">
                                <span>Ver Recinto</span>
                            </div>
                        </div>
                    ))}
                </div>
            </motion.div>

            <AnimatePresence>
                {selectedIndex !== null && (
                    <motion.div
                        key="lightbox-about"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="lightbox"
                        onClick={closeLightbox}
                    >
                        <button className="lightbox-close" onClick={closeLightbox}>
                            <X size={32} />
                        </button>

                        <button className="lightbox-prev" onClick={showPrev}>
                            <ChevronLeft size={40} />
                        </button>

                        <motion.img
                            key={selectedIndex}
                            src={aboutImages[selectedIndex]}
                            alt={aboutAlts[selectedIndex]}
                            className="lightbox-img"
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            transition={{ type: "spring", stiffness: 300, damping: 25 }}
                            onClick={(e) => e.stopPropagation()}
                        />

                        <button className="lightbox-next" onClick={showNext}>
                            <ChevronRight size={40} />
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
