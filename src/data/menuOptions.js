// src/menuOptions.js

export const menuOptions = [
    { name: 'PRODUCTOS', link: '/productos' },
    { name: 'CONCRETO', link: '/concretos' },
    { name: '¿DÓNDE COMPRAR?', link: '/sucursales' },
  ];
  

  export const categoryData = [
    {
      name: 'Adhesivos',
      image: new URL('@/assets/images/producto.jpg', import.meta.url).href,
      description: 'Descripción de Adhesivos. Productos de alta calidad para tus necesidades de construcción.',
      buttons: [
        { text: 'Ver Productos', link: '#adhesivos' },
        { text: 'Más Información', link: '#info-adhesivos' },
      ],
    },
    {
      name: 'Recubrimientos',
      image: new URL('@/assets/images/producto.jpg', import.meta.url).href,
      description: 'Descripción de Recubrimientos. Soluciones duraderas para proteger y embellecer superficies.',
      buttons: [
        { text: 'Ver Productos', link: '#recubrimientos' },
        { text: 'Más Información', link: '#info-recubrimientos' },
      ],
    },
    {
      name: 'Boquillas',
      image: new URL('@/assets/images/producto.jpg', import.meta.url).href,
      description: 'Descripción de Boquillas. Equipos eficientes para tus proyectos de construcción.',
      buttons: [
        { text: 'Ver Productos', link: '#boquillas' },
        { text: 'Más Información', link: '#info-boquillas' },
      ],
    },
    {
      name: 'Concreto Decorativo',
      image: new URL('@/assets/images/producto.jpg', import.meta.url).href,
      description: 'Descripción de Concreto Decorativo. Innovación y estética en cada proyecto.',
      buttons: [
        { text: 'Ver Productos', link: '#concreto-decorativo' },
        { text: 'Más Información', link: '#info-concreto-decorativo' },
      ],
    },
    {
      name: 'Preparación de Superficies',
      image: new URL('@/assets/images/producto.jpg', import.meta.url).href,
      description: 'Descripción de Preparación de Superficies. Bases sólidas para construcciones duraderas.',
      buttons: [
        { text: 'Ver Productos', link: '#preparacion-superficies' },
        { text: 'Más Información', link: '#info-preparacion-superficies' },
      ],
    },
    {
      name: 'Protección y Tratamiento de Superficies',
      image: new URL('@/assets/images/producto.jpg', import.meta.url).href,
      description: 'Descripción de Protección y Tratamiento de Superficies. Protección avanzada para tus proyectos.',
      buttons: [
        { text: 'Ver Productos', link: '#proteccion-superficies' },
        { text: 'Más Información', link: '#info-proteccion-superficies' },
      ],
    },
    {
      name: 'Impermeabilizantes',
      image: new URL('@/assets/images/producto.jpg', import.meta.url).href,
      description: 'Descripción de Impermeabilizantes. Soluciones efectivas contra la humedad.',
      buttons: [
        { text: 'Ver Productos', link: '#impermeabilizantes' },
        { text: 'Más Información', link: '#info-impermeabilizantes' },
      ],
    },
  ];


  export const projectsData = [
    {
      title: "Proyecto 1",
      description: "Descripción breve del Proyecto 1.",
      image: new URL('@/assets/images/producto.jpg', import.meta.url).href,
      link: "/proyecto1"
    },
    {
      title: "Proyecto 2",
      description: "Descripción breve del Proyecto 2.",
      image: new URL('@/assets/images/producto.jpg', import.meta.url).href,
      link: "/proyecto2"
    },
    {
      title: "Proyecto 3",
      description: "Descripción breve del Proyecto 3.",
      image: new URL('@/assets/images/producto.jpg', import.meta.url).href,
      link: "/proyecto3"
    }
  ]
  