import React from 'react';
import { Stethoscope, Syringe, Scissors } from 'lucide-react';

export const services = [
    {
        icon: <Stethoscope size={20} />,
        title: "Consultas Generales",
        desc: "Diagnósticos precisos apoyados en tecnología para garantizar la salud a largo plazo.",
        img: "/images/consultas.webp"
    },
    {
        icon: <Syringe size={20} />,
        title: "Vacunación",
        desc: "Esquemas personalizados que fortalecen la inmunidad y previenen enfermedades complejas.",
        img: "/images/vacunacion.webp"
    },
    {
        icon: <Scissors size={20} />,
        title: "Cirugía Especializada",
        desc: "Quirófanos asépticos y modernos con monitoreo continuo durante todo el procedimiento.",
        img: "/images/gallery-photo-02.webp"
    }
];

export const team = [
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

export const testimonials = [
    { text: "El amor con el que trataron a mi perro es invaluable. Las instalaciones son súper modernas y me sentí tranquila desde el primer día.", author: "Mariana L.", role: "Cliente Frecuente", avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&auto=format&fit=crop&q=80" },
    { text: "Llevé a mi gata de urgencia en la madrugada y la Dra. Sofía fue un ángel. Equipos modernos y atención cálida. 100% recomendados.", author: "Diego T.", role: "Dueño de 'Luna'", avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&auto=format&fit=crop&q=80" },
    { text: "He visitado muchas veterinarias, pero GeoPet's es otro nivel. Realmente entienden que nuestras mascotas son familia.", author: "Carolina H.", role: "Mamá perruna", avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&auto=format&fit=crop&q=80" },
];
