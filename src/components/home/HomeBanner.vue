<template>
    <div class="carousel">
      <div class="carousel-inner" :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
        <div v-for="(image, index) in images" :key="index" class="carousel-item">
          <img :src="image" alt="Carousel Image" />
        </div>
      </div>
      <button class="prev" @click="prevSlide">&#10094;</button>
      <button class="next" @click="nextSlide">&#10095;</button>
    </div>
  </template>
  
  <script>
  import baner1 from '@/assets/images/baner/baner-1.jpg'
  import baner2 from '@/assets/images/baner/baner-2.jpg'
  export default {
    data() {
      return {
        currentIndex: 0,
        images: [
          baner1, baner2
        ]
      };
    },
    methods: {
      nextSlide() {
        this.currentIndex = (this.currentIndex + 1) % this.images.length;
      },
      prevSlide() {
        this.currentIndex =
          this.currentIndex === 0 ? this.images.length - 1 : this.currentIndex - 1;
      }
    }
  };
  </script>
  
  <style scoped>
  .carousel {
    position: relative;
    overflow: hidden;
    width: 100%;
    height: 500px;
  }
  
  .carousel-inner {
    display: flex;
    transition: transform 0.5s ease;
  }
  
  .carousel-item {
    min-width: 100%;
    height: 100%;
  }
  
  .carousel-item img {
    width: 100%;
    height: auto;
    object-fit: fill;
    object-position: center; /* Centra la imagen */
  }
  
  .prev, .next {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background-color: rgba(0, 0, 0, 0.5);
    color: var(--text-color-on-ligth);
    border: none;
    font-size: 24px;
    padding: 10px;
    cursor: pointer;
    z-index: 10;
    outline: none;
  }
  
  .prev {
    left: 10px;
  }
  
  .next {
    right: 10px;
  }
  
  .prev:hover, .next:hover {
    background-color: rgba(0, 0, 0, 0.8);
  }
  </style>
  