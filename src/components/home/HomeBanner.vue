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
import baner3 from '@/assets/images/baner/baner-3.jpg'
export default {
  data() {
    return {
      currentIndex: 0,
      images: [
        baner1, baner2, baner3
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

.carousel-item {
  min-width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background: linear-gradient(135deg, #f0f0f0, #d3d3d3, #f0f0f0);
  /* Efecto de mármol */
}

.carousel-item::before,
.carousel-item::after {
  content: "";
  position: absolute;
  width: 200px;
  height: 100px;
  background: rgba(255, 255, 255, 0.2);
  /* Color semitransparente */
  border: 2px solid rgba(255, 255, 255, 0.5);
  transform: skew(20deg);
  /* Crear el efecto de paralelogramo */
  z-index: 0;
}

.carousel-item::before {
  top: 20px;
  left: 20px;
  transform: skew(20deg) rotate(10deg);
  background: var(--color-primary);
}

.carousel-item::after {
  bottom: 20px;
  right: 20px;
  transform: skew(20deg) rotate(-10deg);
}

.carousel-item img {
  position: relative;
  z-index: 1;
  width: auto;
  height: 100%;
  object-fit: contain;
}

.carousel-inner {
  display: flex;
  transition: transform 0.5s ease;
  height: 100%;
}


.prev,
.next {
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

.prev:hover,
.next:hover {
  background-color: rgba(0, 0, 0, 0.8);
}
</style>