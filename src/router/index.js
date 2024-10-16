import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { nextTick } from 'vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
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
