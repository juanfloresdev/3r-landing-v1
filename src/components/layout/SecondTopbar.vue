<template>
  <div>
    <header>
      <div class="topbar">
        <div class="topbar-content">
          <img :src="logo" alt="Logo de la Empresa" class="logo" @click="this.$router.push({ path: '/' })" />

          <button class="sidebar-toggle" @click="toggleSidebar" v-if="isSmallScreen">☰</button>

          <nav class="topbar-menu" v-if="!isSmallScreen">
            <ul>
              <li v-for="option in menuOptions" :key="option.name">
                <routerLink :to="option.link">{{ option.name }}</routerLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
    <Sidebar :isVisible="isSidebarVisible" @closeSidebar="isSidebarVisible = false" />
  </div>

</template>

<script>
import logo from '@/assets/images/3r-logo.jpg';
import { menuOptions } from '@/data/menuOptions'; // Importa las opciones del menú
import Sidebar from './Sidebar.vue';

export default {
  name: 'Header',
  data() {
    return {
      logo,
      isSidebarVisible: false,
      menuOptions,
      isSmallScreen: false, // Estado para verificar el tamaño de la pantalla
    };
  },
  methods: {
    toggleSidebar() {
      this.isSidebarVisible = !this.isSidebarVisible;
    },
    checkScreenSize() {
      this.isSmallScreen = window.innerWidth < 640; // Verifica el tamaño de la pantalla
    },
  },
  mounted() {
    this.checkScreenSize(); // Verifica el tamaño de la pantalla al montar el componente
    window.addEventListener('resize', this.checkScreenSize); // Agrega un listener para el redimensionamiento
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.checkScreenSize); // Limpia el listener al destruir el componente
  },
  components: {
    Sidebar
  }
};
</script>

<style scoped>
.topbar {
  background-color: var(--text-color-on-ligth);
  color: black;
  border-bottom: 1px solid #bbb;
}

.topbar-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.logo {
  height: 70px;
  cursor: pointer;
}

.sidebar-toggle {
  background: none;
  border: none;
  color: black;
  font-size: 24px;
  /* Tamaño del botón */
  cursor: pointer;
}

nav ul {
  list-style: none;
  display: flex;
  margin: 0;
  padding: 0;
}

nav li {
  margin: 0 15px;
}

nav a {
  color: black;
  text-decoration: none;
}

nav a:hover {
  text-decoration: underline;
}
</style>