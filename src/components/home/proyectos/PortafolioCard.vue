<template>
    <div class="portfolio-card" @mouseover="hover = true" @mouseleave="hover = false">
      <div class="image-container">
        <img :src="project.image" alt="project image" />
        <div class="overlay" v-if="hover">
          <div class="overlay-content">
            <h3>{{ project.title }}</h3>
            <p>{{ project.description }}</p>
            <router-link :to="project.link">
              <button>Ver Más</button>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      project: {
        type: Object,
        required: true
      }
    },
    data() {
      return {
        hover: false
      };
    }
  };
  </script>
  
  <style scoped>
  .portfolio-card {
    width: 300px;
    margin: 20px;
    position: relative;
    cursor: pointer;
  }
  
  .image-container {
    position: relative;
    width: 100%;
    height: 300px;
    border: 10px solid #e9e9e9; /* Aquí añadimos el borde de 10px */
    box-sizing: border-box; /* Asegura que el borde esté incluido dentro de las dimensiones */
  }
  
  .image-container img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.7);
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  .overlay-content {
    color: white;
    text-align: center;
  }
  
  button {
    background-color: white;
    color: black;
    border: none;
    padding: 10px 20px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
  button:hover {
    background-color: black;
    color: white;
  }
  
  .portfolio-card:hover .overlay {
    opacity: 1;
  }
  </style>
  