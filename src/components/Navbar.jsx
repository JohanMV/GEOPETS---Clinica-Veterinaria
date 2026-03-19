import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const updateIsMobile = () => {
            const mobile = window.innerWidth <= 768;
            setIsMobile(mobile);

            if (!mobile) {
                setMenuOpen(false);
            }
        };

        updateIsMobile();
        window.addEventListener('resize', updateIsMobile);

        return () => window.removeEventListener('resize', updateIsMobile);
    }, []);

    const closeMenu = () => setMenuOpen(false);

    return (
        <nav className="navbar">
            <div className="logo">
                <img src="/images/geopets_logo.webp" alt="GeoPet's" className="brand-logo" />
            </div>

            {!isMobile && (
                <div className="nav-links">
                    <a href="#clinica" className="nav-link">Clínica</a>
                    <a href="#servicios" className="nav-link">Especialidades</a>
                    <a href="#galeria" className="nav-link">Galería</a>
                    <a href="#por-que-nosotros" className="nav-link">Nosotros</a>
                    <a href="#equipo" className="nav-link">Equipo</a>
                    <a href="#contacto" className="nav-link">Contacto</a>
                </div>
            )}

            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <button className="btn-primary" style={{ padding: '10px 24px', fontSize: '0.9rem' }}>
                    Agendar Cita
                </button>

                {isMobile && (
                    <button
                        type="button"
                        aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
                        aria-expanded={menuOpen}
                        aria-controls="mobile-nav-menu"
                        onClick={() => setMenuOpen((prev) => !prev)}
                        style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            background: 'transparent',
                            border: 'none',
                            color: 'var(--text-title)',
                            cursor: 'pointer',
                            padding: '8px',
                            borderRadius: '9999px',
                            transition: 'all 150ms ease',
                        }}
                    >
                        {menuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                )}
            </div>

            <AnimatePresence>
                {isMobile && menuOpen && (
                    <motion.div
                        id="mobile-nav-menu"
                        className="nav-links"
                        initial={{ opacity: 0, y: -14, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -10, scale: 0.985 }}
                        transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                        style={{
                            position: 'absolute',
                            top: 'calc(100% + 8px)',
                            left: '16px',
                            right: '16px',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '12px',
                            padding: '16px',
                            background: 'rgba(255, 255, 255, 0.98)',
                            border: '1px solid var(--border-light)',
                            borderRadius: '20px',
                            boxShadow: 'var(--shadow-md)',
                            zIndex: 101,
                            transformOrigin: 'top center',
                        }}
                    >
                        <a href="#clinica" className="nav-link" onClick={closeMenu}>Clínica</a>
                        <a href="#servicios" className="nav-link" onClick={closeMenu}>Especialidades</a>
                        <a href="#galeria" className="nav-link" onClick={closeMenu}>Galería</a>
                        <a href="#por-que-nosotros" className="nav-link" onClick={closeMenu}>Nosotros</a>
                        <a href="#equipo" className="nav-link" onClick={closeMenu}>Equipo</a>
                        <a href="#contacto" className="nav-link" onClick={closeMenu}>Contacto</a>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
