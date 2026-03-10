import React from 'react';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-grid">
                <div style={{ maxWidth: '300px' }}>
                    <div className="footer-logo">
                        <img src="/images/geopets_logo.webp" alt="GeoPet's" className="brand-logo" />
                    </div>
                    <p style={{ color: 'var(--text-body)', marginTop: '24px' }}>
                        Redefiniendo el cuidado veterinario a través de ciencia y respeto.
                    </p>
                </div>

                <div className="footer-links">
                    <h4>Especialidades</h4>
                    <ul>
                        <li><a href="#">General</a></li>
                        <li><a href="#">Vacunación</a></li>
                        <li><a href="#">Cirugía</a></li>
                    </ul>
                </div>

                <div className="footer-links">
                    <h4>Empresa</h4>
                    <ul>
                        <li><a href="#">Sobre nosotros</a></li>
                        <li><a href="#">Médicos</a></li>
                        <li><a href="#">Contacto</a></li>
                    </ul>
                </div>

                <div className="footer-links">
                    <h4>Conectar</h4>
                    <ul>
                        <li><a href="#">Instagram</a></li>
                        <li><a href="#">Facebook</a></li>
                        <li><a href="#">Trabaja aquí</a></li>
                    </ul>
                </div>
            </div>

            <div className="footer-bottom">
                <p>Respaldado por años de experiencia clínica.</p>
                <div style={{ display: 'flex', gap: '20px' }}>
                    <span>© {new Date().getFullYear()} GeoPet's.</span>
                    <span>Made with precision.</span>
                </div>
            </div>
        </footer>
    );
}
