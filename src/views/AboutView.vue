<template>
  <Banner title="Acerca de 3R" :breadcrumb="breadcrumbData" />
  <div class="about-container">
    <div class="about-content">
      <h3>
        Somos una empresa mexicana fundada en 2018 con la misión de ofrecer soluciones innovadoras que simplifican la
        construcción. Somos un jugador importante en América Latina y el sur de Estados Unidos.
      </h3>
      <h3>
        Mercados que cubrimos:
      </h3>
      <div class="numbered-list">
        <ul>
          <li v-for="(item, index) in items" :key="index" :data-index="index + 1">
            {{ item }}
          </li>
        </ul>

      </div>

    </div>

    <VideoAbout></VideoAbout>

  </div>

</template>

<script>
import VideoAbout from '@/components/about/VideoAbout.vue';
import Banner from '@/components/layout/PageBaner.vue';

export default {
  components: {
    Banner,
    VideoAbout
  },
  data() {
    return {
      breadcrumbData: [
        { label: 'Inicio', link: '/' },
        { label: 'Productos', link: '/productos' },
        { label: 'Concreto', link: '/productos/concreto' }
      ],
      items: [
        'Adhesivos',
        'Recubrimientos',
        'Boquillas',
        'Concreto decorativo',
        'Preparación de superficies',
        'Protección y tratamiento de superficies',
        'Impermeabilizantes',
      ]
    }
  },
};
</script>
<style>
.about-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.about-content {
  max-width: 1200px;
  padding-top: 4rem;
  padding-bottom: 4rem;
  padding-left: 1rem;
  padding-right: 1rem;
}
.numbered-list {
  padding: 0;
}

.numbered-list ul {
  list-style-type: none; /* Quita las viñetas predeterminadas */
  padding: 0; /* Quita el padding por defecto */
}

.numbered-list li {
  position: relative; /* Para colocar el círculo */
  padding-left: 35px; /* Espacio para el círculo */
  margin-bottom: 10px; /* Espacio entre los elementos */
  font-size: 1.1rem; /* Ajusta el tamaño de la fuente según lo desees */
  margin-top: 1rem;
}

.numbered-list li::before {
  content:attr(data-index); /* Muestra el número en el círculo */
  position: absolute;
  left: 0; /* Alinea el círculo a la izquierda */
  top: 50%; /* Alinea el círculo al centro verticalmente */
  transform: translateY(-50%); /* Centra verticalmente el círculo */
  width: 30px; /* Ancho del círculo */
  height: 30px; /* Altura del círculo */
  background-color: var(--primary-color); /* Color de fondo del círculo */
  color: white; /* Color del texto */
  border-radius: 50%; /* Hace que el fondo sea un círculo */
  display: flex; /* Usar flexbox para centrar el número */
  justify-content: center; /* Centra horizontalmente */
  align-items: center; /* Centra verticalmente */
  font-weight: bold; /* Hace el número más destacado */
}
</style>