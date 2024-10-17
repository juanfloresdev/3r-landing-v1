<template>
    <div>
        <div class="overlay" @click="closeSidebar" v-show="isVisible"></div>
        <aside class="sidebar" :class="{ 'visible': isVisible }">

            <div class="sidebar-content">
              <button class="close-button" @click="closeSidebar">✖</button>
              <ul>
                <li v-for="option in menuOptions" :key="option.name">
                  <router-link :to="option.link" @click="closeSidebar">{{ option.name }}</router-link>
                </li>
              </ul>
                    </div>
          </aside>
    </div>
    
  </template>
  
  <script>
  import { menuOptions } from '@/data/menuOptions'; // Importa las opciones del menú
  
  export default {
    name: 'Sidebar',
    emits:['closeSidebar'],
    props: {
      isVisible: {
        type: Boolean,
        required: true,
      },
    },
    data() {
      return {
        menuOptions, // Usa las opciones del menú
      };
    },
    methods: {
      closeSidebar() {
        this.$emit('closeSidebar'); // Emitir un evento para cerrar el sidebar
      },
    },
  };
  </script>
  
  <style scoped>
  .sidebar {
    position: fixed;
    top: 0;
    right: -350px; /* Comienza fuera de la pantalla por la derecha */
    width: 250px; /* Ancho del sidebar */
    height: 100%;
    background-color: var(--text-color-on-ligth);
    box-shadow: -1px 0 5px rgba(0, 0, 0, 0.5); /* Sombra hacia la izquierda */
    padding: 20px;
    transition: right 0.3s ease; /* Transición suave */
    z-index: 1000;
  }
  
  .sidebar.visible {
    right: 0; /* Muestra el sidebar al hacer visible */
  }
  
  .sidebar-content {
    color: black;

  }
  
  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5); /* Fondo semi-transparente */
    z-index: 9; /* Asegúrate de que el overlay esté sobre otros elementos */
  }
  
  .sidebar ul {
    list-style: none;
    padding: 0;
  }
  
  .sidebar li {
    margin: 10px 0;
  }
  
  .sidebar a {
    text-decoration: none;
    color: black;
    display: block; /* Hace que el área clickeable sea todo el ancho */
    padding: 10px;
    transition: background-color 0.3s; /* Transición para el efecto hover */
    border-radius: 6px;
  }
  
  .sidebar a:hover {
    background-color: #b1d710; /* Color de fondo al pasar el mouse */
    color: var(--text-color-on-ligth); /* Cambia el color del texto en hover */
  }
  
  .close-button {
    background: none;
    border: none;
    color: black;
    font-size: 24px; /* Tamaño del botón */
    cursor: pointer;
    margin-bottom: 10px; /* Espacio debajo del botón */
    border-radius: 6px;
  }

  .close-button:hover {
    background-color: #b1d710; /* Color de fondo al pasar el mouse */
    color: var(--text-color-on-ligth); /* Cambia el color del texto en hover */
  }
  </style>
  