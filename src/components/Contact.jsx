import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, ArrowRight } from 'lucide-react';
import { fadeUp } from '../utils/animations';

export default function Contact() {
    return (
        <section id="contacto" className="contact-section">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp}>
                <h2 className="section-title-center" style={{ textAlign: 'left', margin: '0 0 40px 32px' }}>Encuéntranos</h2>

                <div className="contact-wrapper">
                    <div className="contact-info-panel">
                        <div className="contact-item">
                            <div className="contact-icon-large"><MapPin size={24} /></div>
                            <div>
                                <h4 style={{ fontSize: '1.2rem', marginBottom: '4px' }}>Centro Veterinario GeoPet's</h4>
                                <p style={{ color: 'var(--text-body)' }}>Ubicación directa a través de Google Maps.</p>
                            </div>
                        </div>

                        <div className="contact-item">
                            <div className="contact-icon-large"><Phone size={24} /></div>
                            <div>
                                <h4 style={{ fontSize: '1.2rem', marginBottom: '4px' }}>Línea Directa</h4>
                                <p style={{ color: 'var(--text-body)' }}>+51 987 654 321</p>
                            </div>
                        </div>

                        <button className="btn-primary" style={{ width: 'fit-content', padding: '16px 32px', marginTop: '24px' }}>
                            Contactar por WhatsApp <ArrowRight size={18} />
                        </button>
                    </div>

                    <div className="contact-map-panel">
                        <iframe
                            src="https://maps.google.com/maps?q=-12.0349487,-76.9257894&hl=es&z=17&output=embed"
                            title="Google Maps - GeoPets"
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade">
                        </iframe>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
