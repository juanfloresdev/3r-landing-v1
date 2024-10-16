import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { nextTick } from 'vue';

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/acerca',
      name: 'acerca',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/productos',
      name: 'productos',
      component: () => import('../views/ProductView.vue')
    },
    {
      path: '/concretos',
      name: 'concretos',
      component: () => import('../components/products/ConcreteList.vue')
    },
  ],



  scrollBehavior(to, from, savedPosition) {
    // Usar nextTick para asegurarse de que el DOM está actualizado antes de ajustar el scroll
    nextTick(() => {
      const scrollContainer = document.getElementById('appContent');
      if (scrollContainer) {
        scrollContainer.scrollTop = 0; // Reinicia el scroll del div
      }
    });
    return { x: 0, y: 0 };  // También puedes ajustar la ventana principal si es necesario
  }



})

export default router