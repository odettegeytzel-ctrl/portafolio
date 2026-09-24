// Datos del portafolio. Edita este archivo para agregar tecnologías, proyectos o experiencia.

export const profile = {
  name: 'Odette Vazquez',
  githubUser: 'odettegeytzel-ctrl',
  email: 'odette.geytzel@gmail.com',
  linkedin: 'https://www.linkedin.com/in/odettevazquez',
  cv: 'assets/cv-odette-vazquez.pdf'
};

export const stack = [
  { category: 'Frontend', items: ['HTML', 'CSS', 'JavaScript', 'React', 'AngularJS'] },
  { category: 'Backend', items: ['Python', 'FastAPI', 'APIs REST', 'WebSockets'] },
  { category: 'Bases de datos', items: ['SQLite', 'MySQL', 'SQL'] },
  { category: 'Redes e infraestructura', items: ['MikroTik / RouterOS', 'SwOS', 'LAN / Wi-Fi', 'Cableado estructurado'] },
  { category: 'Herramientas', items: ['Git', 'GitHub', 'VS Code', 'Vite'] },
  { category: 'Cloud / Deployment', items: ['Vercel', 'AWS'] }
];

// El proyecto destacado (RemoteAdmin) tiene su propia sección. Aquí van los demás.
// image: ruta a una captura. Sin image, la tarjeta muestra una vista previa en vivo de demoUrl.
// Los botones solo aparecen si hay demoUrl / repoUrl.
// placeholder: true muestra una tarjeta vacía lista para completar.
export const projects = [
  {
    name: 'NovaPack',
    desc: 'Sitio corporativo demo para una empresa ficticia de empaque industrial.',
    problem: 'Presentar servicios y datos de contacto de una empresa B2B en un sitio claro y responsive.',
    tech: ['React', 'Vite', 'CSS', 'Vercel'],
    demoUrl: 'https://empresa-ejemplo.vercel.app',
    repoUrl: 'https://github.com/odettegeytzel-ctrl/empresa-ejemplo',
    image: 'assets/novapack.jpg'
  },
  {
    name: 'Desarrollo Web para negocios',
    desc: 'Sitio de servicios de desarrollo web con proyectos demo, paquetes y formulario de cotización.',
    problem: 'Que un negocio pequeño entienda qué incluye cada paquete y pida una cotización sin salir del sitio.',
    tech: ['React', 'Vite', 'JavaScript', 'Vercel'],
    demoUrl: 'https://mispaginasweb.vercel.app',
    repoUrl: 'https://github.com/odettegeytzel-ctrl/mispaginasweb',
    image: 'assets/mispaginasweb.jpg'
  },
  {
    name: 'Aura Studio',
    desc: 'Sitio demo para un estudio de belleza con servicios, galería y botón para agendar cita.',
    problem: 'Que un cliente conozca los servicios del estudio y agende su cita desde el celular en pocos pasos.',
    tech: ['React', 'Vite', 'CSS', 'Vercel'],
    demoUrl: 'https://estetica-orpin-ten.vercel.app',
    repoUrl: 'https://github.com/odettegeytzel-ctrl/estetica',
    image: 'assets/estetica.jpg'
  }
  // Ejemplo de proyecto real:
  // { name: 'Nombre', desc: 'Qué es', problem: 'Qué problema resuelve', tech: ['React','Vercel'], demoUrl: 'https://…', repoUrl: 'https://github.com/…', image: 'assets/nombre.png' }
];

export const experience = [
  { type: 'Experiencia profesional', items: [
    { title: 'Soporte TI · Infraestructura — Plastika', detail: 'Jul 2026 – actualidad · Puebla. Soporte a usuarios, instalación de kioscos y equipos, diagnóstico de conectividad, administración de red con MikroTik y SwOS, levantamiento y documentación de red, cableado y control de acceso por MAC.' },
    { title: 'Practicante de ingeniería — TV Azteca', detail: 'Abr 2023 – Nov 2024 · Puebla. Soporte técnico y mantenimiento de equipos, infraestructura técnica y operación de cabina master, ponchado y manejo de cableado.' }
  ] },
  { type: 'Proyectos técnicos', items: [
    { title: 'RemoteAdmin', detail: 'Plataforma de administración y monitoreo remoto de equipos Windows: inventario, alertas, grabación de pantalla y control remoto. Python, FastAPI, WebSockets, SQLite.' },
    { title: 'NetworkAdmin · en desarrollo', detail: 'Herramienta de monitoreo y diagnóstico de red con Python y FastAPI: obtención de IP, MAC e interfaces y detección de dispositivos conectados.' },
    { title: 'Digitalización de pirómetros industriales · en desarrollo', detail: 'Análisis de equipos con comunicación RS485 y diseño de una solución con ESP32-S3 para identificar cada equipo y consultar sus datos por red.' },
    { title: 'Emoticontrol — FEPRO BUAP 2024', detail: 'Aplicación web con MySQL que se integra con dispositivos por Bluetooth para registrar, consultar y visualizar el historial de datos.' }
  ] },
  { type: 'Formación', items: [
    { title: 'Licenciatura en Desarrollo de Software', detail: 'Universidad IEU.' }
  ] },
  { type: 'Certificaciones y cursos', items: [
    { title: 'Certificación Tecnolochicas — Televisa', detail: 'Desarrollo web con HTML, CSS y JavaScript.' },
    { title: 'Google Project Management Professional Certificate — Coursera', detail: 'En curso.' },
    { title: 'Curso de Diseño de Videojuegos — Rendér', detail: '' },
    { title: '2.º Congreso de Desarrollo de Software y TI · Torneo Sumbot (robótica IEU)', detail: 'Participación.' }
  ] }
];

export const learning = [
  { name: 'Java', area: 'Lenguaje' },
  { name: 'AWS', area: 'Cloud' },
  { name: 'JavaScript avanzado', area: 'Frontend' },
  { name: 'Project Management', area: 'Gestión' }
];
