import React, { useEffect, useRef, useState } from 'react';
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
    const lastFocusedRef = useRef(null);

    const openLightbox = (index, event) => {
        lastFocusedRef.current = event.currentTarget;
        setSelectedIndex(index);
    };

    const closeLightbox = () => setSelectedIndex(null);

    const showNext = (e) => {
        e.stopPropagation();
        setSelectedIndex((prev) => (prev + 1) % galleryImages.length);
    };

    const showPrev = (e) => {
        e.stopPropagation();
        setSelectedIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
    };

    useEffect(() => {
        if (selectedIndex === null && lastFocusedRef.current) {
            lastFocusedRef.current.focus();
        }
    }, [selectedIndex]);

    useEffect(() => {
        if (selectedIndex === null) {
            return undefined;
        }

        const handleKeyDown = (event) => {
            if (event.key === 'Escape') {
                closeLightbox();
            }

            if (event.key === 'ArrowRight') {
                setSelectedIndex((prev) => (prev + 1) % galleryImages.length);
            }

            if (event.key === 'ArrowLeft') {
                setSelectedIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
            }
        };

        window.addEventListener('keydown', handleKeyDown);

        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [selectedIndex]);

    return (
        <section id="galeria" className="gallery-section">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={staggerContainer} className="container">
                <motion.div variants={fadeUp} className="gallery-header">
                    <h2>Pacientes Felices</h2>
                    <p>Cortes, baños, chequeos y mucho amor. Un vistazo a los pacientes más consentidos de nuestra clínica.</p>
                </motion.div>

                <motion.div variants={fadeUp} className="gallery-grid">
                    {galleryImages.map((src, index) => (
                        <div
                            key={index}
                            className={`gallery-item ${index === 0 ? 'gallery-item-large' : ''}`}
                        >
                            <button
                                type="button"
                                className="gallery-item-button"
                                onClick={(event) => openLightbox(index, event)}
                                aria-label={`Abrir imagen ${index + 1} de ${galleryImages.length}`}
                            >
                                <img src={src} alt="Mascota feliz en GeoPet's" loading="lazy" />
                                <div className="gallery-overlay">
                                    <span>Ampliar</span>
                                </div>
                            </button>
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
                        role="dialog"
                        aria-modal="true"
                        aria-label="Vista ampliada de la galería"
                    >
                        <button type="button" className="lightbox-close" onClick={closeLightbox} aria-label="Cerrar galería">
                            <X size={32} />
                        </button>

                        <button type="button" className="lightbox-prev" onClick={showPrev} aria-label="Imagen anterior">
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

                        <button type="button" className="lightbox-next" onClick={showNext} aria-label="Imagen siguiente">
                            <ChevronRight size={40} />
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
