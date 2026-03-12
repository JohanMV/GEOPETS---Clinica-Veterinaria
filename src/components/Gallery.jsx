import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { fadeUp, staggerContainer } from '../utils/animations';

const galleryImages = [
    "/images/gallery-photo-01.webp",
    "/images/gallery-photo-02.webp",
    "/images/gallery-photo-03.webp",
    "/images/gallery-photo-04.webp",
    "/images/gallery-photo-05.webp",
    "/images/gallery-photo-06.webp"
];

export default function Gallery() {
    const [selectedIndex, setSelectedIndex] = useState(null);

    const openLightbox = (index) => setSelectedIndex(index);
    const closeLightbox = () => setSelectedIndex(null);

    const showNext = (e) => {
        e.stopPropagation();
        setSelectedIndex((prev) => (prev + 1) % galleryImages.length);
    };

    const showPrev = (e) => {
        e.stopPropagation();
        setSelectedIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
    };

    return (
        <section id="galeria" className="gallery-section">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={staggerContainer} className="container">
                <motion.div variants={fadeUp} className="gallery-header">
                    <h2>Pacientes Felices</h2>
                    <p>Cortes, baños, chequeos y mucho amor. Un vistazo a los pacientes más consentidos de nuestra clínica.</p>
                </motion.div>

                <motion.div variants={fadeUp} className="gallery-grid">
                    {galleryImages.map((src, index) => (
                        <div key={index} className={`gallery-item ${index === 0 ? 'gallery-item-large' : ''}`} onClick={() => openLightbox(index)}>
                            <img src={src} alt="Mascota feliz en GeoPet's" loading="lazy" />
                            <div className="gallery-overlay">
                                <span>Ampliar</span>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </motion.div>

            <AnimatePresence>
                {selectedIndex !== null && (
                    <motion.div
                        key="lightbox"
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
                            src={galleryImages[selectedIndex]}
                            alt="GeoPets Gallery Large"
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
