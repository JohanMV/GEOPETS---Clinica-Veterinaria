import React from 'react';
import { motion } from 'framer-motion';
import { fadeUp, staggerContainer } from '../utils/animations';

const galleryImages = [
    "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1510771463146-e89e6e86560e?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1534361960057-19889db9621e?auto=format&fit=crop&q=80"
];

export default function Gallery() {
    return (
        <section id="galeria" className="gallery-section">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={staggerContainer} className="container">
                <motion.div variants={fadeUp} className="gallery-header">
                    <h2>Pacientes Felices</h2>
                    <p>Cortes, baños, chequeos y mucho amor. Un vistazo a los pacientes más consentidos de nuestra clínica.</p>
                </motion.div>

                <motion.div variants={fadeUp} className="gallery-grid">
                    {galleryImages.map((src, index) => (
                        <div key={index} className={`gallery-item ${index === 0 ? 'gallery-item-large' : ''}`}>
                            <img src={src} alt="Mascota feliz en GeoPet's" loading="lazy" />
                            <div className="gallery-overlay">
                                <span>GeoPet's</span>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </motion.div>
        </section>
    );
}
