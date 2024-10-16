<script setup>
import HomeBanner from '@/components/home/HomeBanner.vue';
import Portafolio from '@/components/home/proyectos/Portafolio.vue';
import TheTools from '@/components/home/herramientas/TheTools.vue';
import ProductSelector from '@/components/home/categorias/ProductSelector.vue';

</script>

<template>
  <main>
    <HomeBanner></HomeBanner>
    <div class="categories-container">
      <div class="categories-content">
        <h1>Conoce nuestros productos</h1>
        <div style="catetories-container">
          <ProductSelector></ProductSelector>
        </div>
      </div>


    </div>

    <div class="top-products">
      <h1 class="top-products-header">
        Productos destacados
      </h1>

      <div class="top-products-divider">
        <div class="top-products-divider-block">
        </div>
      </div>
      <p class="top-products-desc">
        En 3R, hemos tenido la oportunidad de colaborar en una amplia gama de proyectos y obras de gran envergadura.
        Nuestro equipo, con su experiencia técnica y compromiso, se enfoca en ofrecer soluciones innovadoras que se
        ajusten a las necesidades específicas de cada cliente. Además de proporcionar productos de alta calidad,
        brindamos un servicio integral que incluye asesoramiento especializado en cada etapa del proyecto, desde la
        planificación hasta la ejecución. Nos enorgullece garantizar un apoyo constante y personalizado, asegurando el
        éxito y la satisfacción en cada trabajo que realizamos
      </p>


      <Portafolio></Portafolio>

    </div>

 
      <TheTools></TheTools>




  </main>
</template>
<style>
.categories-container {
  display: flex;
  margin-top: 2rem;
  justify-content: center;
}

.categories-content {
  max-width: 1200px;
  padding: 1rem;
}

.catetories-container {
  display: flex;
  flex-wrap: wrap;
}

.top-products {
  width: 100%;
  background: black;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 3rem;
  margin-bottom: 3rem;
}

.top-products-header {
  color: white;
}

.top-products-divider {
  display: flex;
  justify-content: center;
  margin-top: 1rem;
  margin-bottom: 1rem;
}

.top-products-divider-block {
  width: 200px;
  background-color: var(--primary-color);
  height: 3px;
}

.top-products-desc {
  color: white;
  max-width: 1200px;
  text-align: center;
  margin: 1rem;
}
</style>
