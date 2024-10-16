<template>
    <header class="topbar">
      <div class="topbar-content">
        <nav>
          <ul>
            <li><router-link to="/about"> Acerca de 3R </router-link></li>        
            <li><a href="#contacto">Contáctanos</a></li>
          </ul>
        </nav>
        <div class="social-icons">
          <a href="https://facebook.com" target="_blank" aria-label="Facebook">
            <i class="fab fa-facebook"></i>
          </a>
          <a href="https://twitter.com" target="_blank" aria-label="Twitter">
            <i class="fab fa-twitter"></i>
          </a>
          <a href="https://instagram.com" target="_blank" aria-label="Instagram">
            <i class="fab fa-instagram"></i>
          </a>
        </div>
      </div>
    </header>
  </template>
  
  <script>
  export default {
    name: 'FirstTopbar',
  };
  </script>
  
  <style scoped>
  .topbar {
    background-color: black;
    color: var(--text-color-on-ligth);
    padding: 10px 0;
    font-size: small;
  }
  
  .topbar-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
  }
  
  nav ul {
    list-style: none;
    display: flex;
    margin: 0;
    padding: 0;
  }
  
  nav li {
    margin: 0 15px;
    cursor: pointer;
  }
  
  nav a {
    color: var(--text-color-on-ligth);
    text-decoration: none;
  }
  
  nav a:hover {
    text-decoration: underline;
  }
  
  .social-icons {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
  }
  
  .social-icons a {
    margin-left: 15px;
    color: var(--text-color-on-ligth); /* Asegura que los iconos sean blancos */
  }
  
  .social-icons i {
    font-size: 24px; /* Tamaño de los iconos */
  }
  </style>
  