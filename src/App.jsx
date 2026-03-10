import React from 'react';
import { motion } from 'framer-motion';
import {
  Sparkle, Shield, Clock, Stethoscope, Syringe, Scissors,
  MapPin, Phone, Instagram, Facebook, ArrowRight, Quote
} from 'lucide-react';
import './App.css';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const services = [
  {
    icon: <Stethoscope size={20} />,
    title: "Consultas Generales",
    desc: "Diagnósticos precisos apoyados en tecnología para garantizar la salud a largo plazo.",
    img: "https://images.unsplash.com/photo-1576201836106-db1758fd1c97?w=800&auto=format&fit=crop&q=80"
  },
  {
    icon: <Syringe size={20} />,
    title: "Vacunación",
    desc: "Esquemas personalizados que fortalecen la inmunidad y previenen enfermedades complejas.",
    img: "/images/vacunacion.png"
  },
  {
    icon: <Scissors size={20} />,
    title: "Cirugía Especializada",
    desc: "Quirófanos asépticos y modernos con monitoreo continuo durante todo el procedimiento.",
    img: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=800&auto=format&fit=crop&q=80"
  }
];

const team = [
  {
    name: "Dr. Eduardo\nRondón Navas",
    role: "Fundador",
    desc: "Nuestro director y fundador, médico veterinario con más de 40 años de dedicación y amor por los animales. Fue Presidente de la Academia de Ciencias Veterinarias y Decano Nacional del Colegio Médico Veterinario del Perú.",
    img: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=800&auto=format&fit=crop&q=80"
  },
  {
    name: "Dr. Rodrigo\nRondón Herz",
    role: "Director",
    desc: "Médico veterinario especialista en animales menores, con más de dos décadas de experiencia. El Doctor Rodrigo Rondón se caracteriza por su delicada mano, sus acertados diagnósticos, y una sonrisa de oreja a oreja al recibir a sus pacientes.",
    img: "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=800&auto=format&fit=crop&q=80"
  }
];

const testimonials = [
  { text: "El amor con el que trataron a mi perro es invaluable. Las instalaciones son súper modernas y me sentí tranquila desde el primer día.", author: "Mariana L.", role: "Cliente Frecuente", avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&auto=format&fit=crop&q=80" },
  { text: "Llevé a mi gata de urgencia en la madrugada y la Dra. Sofía fue un ángel. Equipos modernos y atención cálida. 100% recomendados.", author: "Diego T.", role: "Dueño de 'Luna'", avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&auto=format&fit=crop&q=80" },
  { text: "He visitado muchas veterinarias, pero GeoPet's es otro nivel. Realmente entienden que nuestras mascotas son familia.", author: "Carolina H.", role: "Mamá perruna", avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&auto=format&fit=crop&q=80" },
];

export default function App() {
  return (
    <div className="main-wrapper">
      {/* Navbar outside the Hero Wrapper, as per BloomFi */}
      <nav className="navbar">
        <div className="logo">
          <div className="logo-icon">
            <Sparkle size={16} fill="white" />
          </div>
          GeoPet's
        </div>
        <div className="nav-links">
          <a href="#servicios" className="nav-link">Servicios</a>
          <a href="#por-que-nosotros" className="nav-link">Por qué elegirnos</a>
          <a href="#equipo" className="nav-link">Equipo</a>
          <a href="#contacto" className="nav-link">Contacto</a>
        </div>
        <button className="btn-primary" style={{ padding: '10px 24px', fontSize: '0.9rem' }}>
          Agendar Cita
        </button>
      </nav>

      {/* Hero Section matching BloomFi */}
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
          {/* Main hero image - large panorama matching reference layout */}
          <img src="/images/hero.png" alt="GeoPets Clinic Premium Environment" />
        </motion.div>
      </section>

      {/* What is Bloom / Features matching the reference exactly */}
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
                <button className="btn-outline" style={{ padding: '10px 24px', fontSize: '0.9rem' }}>Conocer más</button>
              </motion.div>
            </div>
          </div>

          <div className="features-grid">
            {/* Left wide card (light) */}
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

            {/* Center dark card */}
            <motion.div variants={fadeUp} className="feature-card dark">
              <div>
                <h3>Siempre atentos,<br />siempre seguros</h3>
                <p style={{ marginTop: '24px' }}>
                  Mantente tranquilo con acceso inmediato a los reportes clínicos de tu mascota — sin papeleos ni demoras.
                </p>
              </div>
            </motion.div>

            {/* Right dark card */}
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

      {/* Services Section with Images */}
      <section id="servicios" className="services-section">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={staggerContainer}>
          <motion.h2 variants={fadeUp} className="section-title-center">Especialidades</motion.h2>
          <motion.p variants={fadeUp} className="section-subtitle-center">
            Abordaje clínico sustentado para garantizar longevidad y vitalidad.
          </motion.p>

          <div className="services-grid">
            {services.map((service, idx) => (
              <motion.div key={idx} variants={fadeUp} className="service-card">
                <div className="service-image">
                  <img src={service.img} alt={service.title} loading="lazy" />
                </div>
                <div className="service-content">
                  <div className="service-icon-wrap">
                    {service.icon}
                  </div>
                  <h3>{service.title}</h3>
                  <p>{service.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* About Us (Quiénes Somos) section injected here */}
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

      {/* Revamped Team Section matching the reference */}
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

      {/* Testimonials Section */}
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

      {/* Contact & Corrected Map Section */}
      <section id="contacto" className="contact-section">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp}>
          <h2 className="section-title-center" style={{ textAlign: 'left', marginBottom: '40px' }}>Encuéntranos</h2>

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

              <button className="btn-primary" style={{ width: 'FIT-CONTENT', padding: '16px 32px', marginTop: '24px' }}>
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

      {/* Simplified, properly aligned footer matching BloomFi */}
      <footer className="footer">
        <div className="footer-grid">
          <div style={{ maxWidth: '300px' }}>
            <div className="footer-logo">
              <div className="logo-icon">
                <Sparkle size={16} fill="white" />
              </div>
              GeoPet's
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
    </div>
  );
}
