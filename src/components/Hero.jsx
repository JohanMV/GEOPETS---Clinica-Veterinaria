import React from 'react';
import { motion } from 'framer-motion';
import { Sparkle } from 'lucide-react';
import { fadeUp, staggerContainer } from '../utils/animations';

export default function Hero() {
    return (
        <section className="hero">
            <motion.div initial="hidden" animate="visible" variants={staggerContainer} style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <motion.div variants={fadeUp} className="hero-top-icon">
                    <Sparkle size={28} />
                </motion.div>
                <motion.h1 variants={fadeUp} className="hero-title">
                    Donde Nace El Bienestar
                </motion.h1>
                <motion.p variants={fadeUp} className="hero-subtitle">
                    Una clínica veterinaria impulsada por tecnología y diseñada para el bienestar integral,
                    el diagnóstico preciso y la tranquilidad de tu familia.
                </motion.p>
                <motion.div variants={fadeUp} className="hero-buttons">
                    <button className="btn-primary">
                        Agenda tu Evaluación
                    </button>
                </motion.div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, scale: 0.98, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="hero-image-wrapper"
            >
                <img src="/images/hero.png" alt="GeoPets Clinic Premium Environment" />
            </motion.div>
        </section>
    );
}
