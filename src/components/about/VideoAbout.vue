<template>
    <div class="video-container">
      <div class="video-wrapper">
        <iframe
          width="560"
          height="500"
          src="https://www.youtube.com/embed/uIBdgbQkypU"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  </template>
  
  <style scoped>
  /* Fondo negro para el contenedor del video */
  .video-container {
    background-color: black;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%; /* Altura completa de la pantalla */
    padding-top: 5rem;
    padding-bottom: 5rem;
  }
  
  /* Estilos para centrar el video */
  .video-wrapper {
    width: 80%;
    height: 60vh;
    padding: 0.5rem;
    box-sizing: border-box;
  }

  @media (max-width: 768px) {
    .video-wrapper {
        width: 100%;
        height: 60vh;
      }
  }
  
  iframe {
    width: 100%;
    height: 100%;
    border-radius: 10px; /* Opcional: bordes redondeados */
  }
  </style>
  