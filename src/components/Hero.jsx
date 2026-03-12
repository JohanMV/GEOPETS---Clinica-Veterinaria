import React from 'react';
import { motion } from 'framer-motion';
import { Sparkle } from 'lucide-react';
import { fadeUp, staggerContainer } from '../utils/animations';

export default function Hero() {
    return (
        <section className="hero">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="hero-image-bg"
            >
                <div className="hero-overlay"></div>
                <img src="/images/geopets_hero_2.webp" alt="GeoPets Clinic Premium Environment" />
            </motion.div>

            <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="hero-content-wrapper">
                <motion.div variants={fadeUp} className="hero-badge">
                    <Sparkle size={14} />
                    <span>Donde Nace El Bienestar</span>
                </motion.div>
                <motion.h1 variants={fadeUp} className="hero-title">
                    <span className="hero-title-small">Clínica Veterinaria</span>
                    <br />
                    <span className="hero-brand-highlight">GEOPETS</span>
                </motion.h1>
                <motion.p variants={fadeUp} className="hero-subtitle">
                    Impulsada por tecnología y diseñada para el bienestar integral,
                    el diagnóstico preciso y la tranquilidad de tu familia.
                </motion.p>
                <motion.div variants={fadeUp} className="hero-buttons">
                    <button className="btn-primary hero-btn-light">
                        Agenda tu Evaluación
                    </button>
                </motion.div>
            </motion.div>
        </section>
    );
}
