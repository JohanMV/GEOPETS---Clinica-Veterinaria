import React from 'react';
import { motion } from 'framer-motion';
import { Shield } from 'lucide-react';
import { fadeUp, staggerContainer } from '../utils/animations';

export default function Features() {
    return (
        <section id="por-que-nosotros" className="features-section">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={staggerContainer}>
                <div className="features-header">
                    <motion.h2 variants={fadeUp} className="features-header-title">¿Qué hace único a GeoPet's?</motion.h2>
                    <div>
                        <motion.p variants={fadeUp} className="features-header-desc">
                            GeoPet's es una clínica de rendimiento superior que ayuda a mejorar la calidad de vida
                            de tu mascota manteniéndose apegada a los más altos estándares.
                        </motion.p>
                        <motion.div variants={fadeUp}>
                            <button 
                                className="btn-outline" 
                                style={{ padding: '10px 24px', fontSize: '0.9rem' }}
                                onClick={() => document.getElementById('quienes-somos')?.scrollIntoView({ behavior: 'smooth' })}
                            >
                                Conocer más
                            </button>
                        </motion.div>
                    </div>
                </div>

                <div className="features-grid">
                    <motion.div variants={fadeUp} className="feature-card wide" style={{ backgroundColor: '#e9f2df' }}>
                        <div>
                            <h3 style={{ color: 'var(--text-title)' }}>Salud que prospera</h3>
                            <p style={{ color: 'rgba(0,0,0,0.6)', maxWidth: '280px' }}>
                                Asegura un cuidado preventivo ya que nuestros protocolos están diseñados mediante tecnología de vanguardia.
                            </p>
                        </div>
                        <div className="feature-image-placeholder">
                            <Shield size={140} color="var(--primary)" style={{ opacity: 0.2, transform: 'rotate(15deg)' }} />
                        </div>
                    </motion.div>

                    <motion.div variants={fadeUp} className="feature-card dark">
                        <div>
                            <h3>Siempre atentos,<br />siempre seguros</h3>
                            <p style={{ marginTop: '24px' }}>
                                Mantente tranquilo con acceso inmediato a los reportes clínicos de tu mascota - sin papeleos ni demoras.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div variants={fadeUp} className="feature-card dark">
                        <div>
                            <h3>100%<br />libres de estrés</h3>
                            <p style={{ marginTop: '24px' }}>
                                No necesitas preocuparte. Nuestro ambiente maneja el estrés de los pacientes de forma natural en segundo plano.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
}
