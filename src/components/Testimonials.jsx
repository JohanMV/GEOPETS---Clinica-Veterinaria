import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { fadeUp, staggerContainer } from '../utils/animations';
import { testimonials } from '../data/constants';

export default function Testimonials() {
    return (
        <section id="testimonios" className="testimonials-section">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={staggerContainer}>
                <motion.h2 variants={fadeUp} className="section-title-center">Lo que dicen nuestras familias</motion.h2>
                <motion.p variants={fadeUp} className="section-subtitle-center" style={{ marginBottom: '40px' }}>
                    Voces de quienes confían su mayor tesoro en nuestras manos.
                </motion.p>

                <div className="testimonials-grid">
                    {testimonials.map((test, idx) => (
                        <motion.div key={idx} variants={fadeUp} className="testimonial-card">
                            <Quote size={48} className="testimonial-quote" />
                            <p className="testimonial-text">"{test.text}"</p>
                            <div className="testimonial-author">
                                <div className="testimonial-avatar">
                                    <img src={test.avatar} alt={test.author} loading="lazy" />
                                </div>
                                <div className="testimonial-author-info">
                                    <h4>{test.author}</h4>
                                    <p>{test.role}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}
