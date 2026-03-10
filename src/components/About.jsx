import React from 'react';
import { motion } from 'framer-motion';
import { fadeUp } from '../utils/animations';

export default function About() {
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
                    <img src="/images/about_1.png" alt="Recepción GeoPet's" loading="lazy" />
                    <img src="/images/about_2.png" alt="Salas de Monitoreo" loading="lazy" />
                    <img src="/images/about_3.png" alt="Quirófano Moderno" loading="lazy" />
                    <img src="/images/about_4.png" alt="Atención Clínica Veterinaria" loading="lazy" />
                </div>
            </motion.div>
        </section>
    );
}
