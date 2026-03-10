import React from 'react';
import { motion } from 'framer-motion';
import { fadeUp, staggerContainer } from '../utils/animations';
import { team } from '../data/constants';

export default function Team() {
    return (
        <section id="equipo" className="team-section">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={staggerContainer}>
                <motion.h2 variants={fadeUp} className="section-title-center">Especialistas</motion.h2>
                <motion.p variants={fadeUp} className="section-subtitle-center">
                    Capital humano capacitado internacionalmente.
                </motion.p>

                <div className="team-grid">
                    {team.map((member, idx) => (
                        <motion.div key={idx} variants={fadeUp} className="team-card">
                            <div className="team-image-container">
                                <div className="team-image">
                                    <img src={member.img} alt={member.name} />
                                </div>
                            </div>
                            <div className="team-card-role">{member.role}</div>
                            <h3>{member.name}</h3>
                            <div className="team-dots">
                                <span className="team-dot"></span>
                                <span className="team-dot"></span>
                                <span className="team-dot"></span>
                                <span className="team-dot"></span>
                            </div>
                            <p>{member.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}
