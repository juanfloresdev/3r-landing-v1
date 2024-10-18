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
      component: () => import('../views/AboutView.vue'),
      children: [
        {
          path: 'mision',
          name: 'mision',
          component: () => import('@/components/about/TheMision.vue'),
        },
        {
          path: 'vision',
          name: 'vision',
          component: () => import('@/components/about/TheVision.vue'),
        },
      ]
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
    {
      path: '/sucursales',
      name: 'sucursales',
      component: () => import('../components/sucursales/DondeComprar.vue')
    },
    {
      path: '/aviso-privacidad',
      name: 'aviso-privacidad',
      component: () => import('../components/layout/AvisoPrivacidad.vue')
    },
    {
      path: '/contacto',
      name: 'contacto',
      component: () => import('../components/contacto/ContactoSpan.vue')
    },
  ],



  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      if (to.hash) {
        return {
          el: to.hash, 
          behavior: 'smooth', 
        };
      }

      return { top: 0, behavior: 'smooth' }; 
    }
  }



})

export default router
