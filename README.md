# GeoPet's Clínica Veterinaria

Landing page premium para **GeoPet's Clínica Veterinaria**, diseñada para comunicar una propuesta de valor de alto nivel, reforzar confianza de marca y presentar servicios, instalaciones, equipo médico y canales de contacto en una sola experiencia web.

El proyecto está construido como una **SPA estática con React + Vite**, con foco en:

- presentación visual cuidada
- navegación fluida por secciones
- experiencia responsive
- animaciones sutiles y elegantes
- mantenibilidad para futuras iteraciones comerciales

## Objetivo del proyecto

Esta landing busca transmitir una imagen moderna, confiable y sofisticada de la clínica, destacando:

- atención veterinaria integral
- especialidades médicas
- infraestructura y entorno clínico
- equipo profesional
- testimonios y prueba social
- contacto directo y geolocalización

No es un sistema transaccional ni un panel administrativo. Su propósito actual es **comunicación, posicionamiento de marca y conversión comercial**.

## Tecnologías utilizadas

### Dependencias principales

| Tecnología | Versión declarada |
| --- | --- |
| React | `^19.2.0` |
| React DOM | `^19.2.0` |
| Vite | `^7.3.1` |
| Framer Motion | `^12.35.2` |
| Lucide React | `^0.577.0` |
| React Icons | `^5.6.0` |

### Herramientas de desarrollo

| Herramienta | Versión declarada |
| --- | --- |
| ESLint | `^9.39.1` |
| `@eslint/js` | `^9.39.1` |
| `@vitejs/plugin-react` | `^5.1.1` |
| `eslint-plugin-react-hooks` | `^7.0.1` |
| `eslint-plugin-react-refresh` | `^0.4.24` |
| `globals` | `^16.5.0` |
| `@types/react` | `^19.2.7` |
| `@types/react-dom` | `^19.2.3` |

## Scripts disponibles

| Comando | Descripción |
| --- | --- |
| `npm run dev` | Inicia el entorno de desarrollo con Vite |
| `npm run build` | Genera la versión de producción |
| `npm run preview` | Levanta una vista previa del build |
| `npm run lint` | Ejecuta validación estática con ESLint |

## Estructura del proyecto

```text
GEOPETS - Clínica Veterinaria/
├── public/
│   └── images/                 # Recursos visuales públicos
├── src/
│   ├── components/            # Secciones visuales de la landing
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Features.jsx
│   │   ├── Footer.jsx
│   │   ├── Gallery.jsx
│   │   ├── Hero.jsx
│   │   ├── IntegratedServices.jsx
│   │   ├── Navbar.jsx
│   │   ├── Services.jsx
│   │   ├── Team.jsx
│   │   └── Testimonials.jsx
│   ├── data/
│   │   └── constants.jsx      # Contenido reusable de equipo/testimonios/servicios
│   ├── utils/
│   │   └── animations.js      # Variantes de animación
│   ├── App.jsx                # Ensamble principal de la landing
│   ├── App.css                # Estilos de componentes y layout
│   ├── index.css              # Variables globales y estilos base
│   └── main.jsx               # Punto de entrada
├── package.json
├── vite.config.js
└── README.md
```

## Arquitectura visual

La aplicación está organizada como una única página compuesta por bloques independientes:

1. `Navbar`
2. `Hero`
3. `Features`
4. `IntegratedServices`
5. `Services`
6. `Gallery`
7. `About`
8. `Team`
9. `Testimonials`
10. `Contact`
11. `Footer`

Este enfoque facilita:

- mantener cada sección aislada
- iterar contenido sin afectar toda la página
- reutilizar patrones visuales
- escalar el sitio hacia nuevas secciones si el negocio lo necesita

## Principales características

- navegación por anclas entre secciones
- hero visual con imagen de alto impacto
- cards de servicios y beneficios
- galería con lightbox
- sección institucional de historia e instalaciones
- bloque de especialistas
- testimonios de clientes
- botón de contacto por WhatsApp
- mapa embebido
- menú móvil con interacción dedicada
- animaciones con Framer Motion

## Requisitos para desarrollo local

- Node.js instalado
- npm disponible

Instalación:

```bash
npm install
```

Ejecución en desarrollo:

```bash
npm run dev
```

Build de producción:

```bash
npm run build
```

Vista previa local del build:

```bash
npm run preview
```

## Gestión de contenido

El contenido del proyecto está repartido entre:

- componentes JSX cuando el texto pertenece a una sección específica
- `src/data/constants.jsx` cuando el contenido es reutilizable o estructurado
- `public/images/` para imágenes servidas como assets públicos

Para futuras actualizaciones comerciales, normalmente se editarán:

- textos y CTA en `src/components/`
- servicios, testimonios y equipo en `src/data/constants.jsx`
- imágenes de marca e instalaciones en `public/images/`

## Estilos y diseño

La identidad visual se apoya en:

- variables CSS centralizadas en `src/index.css`
- layout y estilos de secciones en `src/App.css`
- tipografía y paleta alineadas a una estética premium y clínica
- radios amplios, sombras suaves y espaciado generoso

Esto permite ajustar branding o refinamientos visuales sin reestructurar toda la aplicación.

## Accesibilidad y experiencia de usuario

El proyecto incorpora una base de UX moderna para una landing comercial:

- navegación clara por secciones
- soporte responsive
- lightbox interactivo
- CTA visibles y consistentes
- animaciones que acompañan la experiencia sin sobrecargarla

Si el proyecto sigue creciendo, el siguiente nivel recomendado sería reforzar:

- semántica accesible completa
- manejo avanzado de foco
- validación de contraste
- optimización de performance de imágenes

## Estado actual del proyecto

La landing está enfocada en presentar la marca con calidad visual alta y una base técnica limpia para continuar iterando.

Como proyecto frontend, su siguiente evolución natural puede incluir:

- integración con formularios reales o CRM
- analítica de eventos y conversiones
- SEO técnico más profundo
- CMS o capa de contenido editable
- despliegue productivo con pipeline automatizado

## Recomendaciones para producción

- optimizar y versionar imágenes antes de publicar
- definir el número oficial de WhatsApp y enlaces sociales finales
- validar contenido legal y datos de contacto reales
- ejecutar revisión visual completa en móvil, tablet y desktop
- incorporar medición de conversiones si la landing será usada comercialmente

## Créditos técnicos

Proyecto frontend desarrollado con una arquitectura simple, mantenible y orientada a branding comercial de alto nivel.

Base tecnológica:

- React
- Vite
- Framer Motion
- Lucide React
- ESLint
