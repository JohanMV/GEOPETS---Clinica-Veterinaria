import React from 'react';

export default function Navbar() {
    return (
        <nav className="navbar">
            <div className="logo">
                <img src="/images/geopets_logo.webp" alt="GeoPet's" className="brand-logo" />
            </div>
            <div className="nav-links">
                <a href="#clinica" className="nav-link">Clínica</a>
                <a href="#servicios" className="nav-link">Especialidades</a>
                <a href="#por-que-nosotros" className="nav-link">Nosotros</a>
                <a href="#equipo" className="nav-link">Equipo</a>
                <a href="#contacto" className="nav-link">Contacto</a>
            </div>
            <button className="btn-primary" style={{ padding: '10px 24px', fontSize: '0.9rem' }}>
                Agendar Cita
            </button>
        </nav>
    );
}
