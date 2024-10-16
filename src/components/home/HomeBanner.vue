<template>
  <div class="carousel">
    <div class="carousel-inner" :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
      <div v-for="(item, index) in items" :key="index" class="carousel-item" :style="{ background: item.background }">
        <img :src="item.image" alt="Carousel Image" />
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

import background1 from '@/assets/images/baner/background-1.png'
import background2 from '@/assets/images/baner/background-2.png'
import background3 from '@/assets/images/baner/background-3.png'


export default {
  data() {
    return {
      currentIndex: 0,
      items: [
        {
          image: baner1,
          background: `url(${background1})`
        },
        {
          image: baner2,
          background: `url(${background2})`
        },
        {
          image: baner3,
          background: `url(${background3})`
        },
      ]
    };
  },
  methods: {
    nextSlide() {
      this.currentIndex = (this.currentIndex + 1) % this.items.length;
    },
    prevSlide() {
      this.currentIndex =
        this.currentIndex === 0 ? this.items.length - 1 : this.currentIndex - 1;
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
  height: 100%;
}

.carousel-item {
  min-width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.carousel-item img {
  position: relative;
  z-index: 1;
  width: 80%;
  height: auto;
  object-fit: contain;
}

.prev,
.next {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.5);
  color: var(--text-color-on-light);
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
