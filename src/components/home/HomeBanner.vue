<template>
  <div class="carousel">
    <div class="carousel-inner" :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
      <div v-for="(item, index) in items" :key="index" class="carousel-item" :style="{ backgroundImage: item.background }">
        <!-- <img :src="item.image" alt="Carousel Image"/> -->
        <!-- <button>Ver concretos</button> -->
      </div>
    </div>
    <!-- <button class="prev" @click="prevSlide">&#10094;</button>
    <button class="next" @click="nextSlide">&#10095;</button> -->
  </div>
</template>

<script>
import baner1Desktop from '@/assets/images/baner/baner-1.png'
import baner2Desktop from '@/assets/images/baner/baner-2.png'
import baner3Desktop from '@/assets/images/baner/baner-3.png'

import baner1Mobile from '@/assets/images/baner/movil/rike-movil.png'
import baner2Mobile from '@/assets/images/baner/movil/rike-movil.png'
import baner3Mobile from '@/assets/images/baner/movil/rike-movil.png'


import background1 from '@/assets/images/baner/background-1.png'
import background2 from '@/assets/images/baner/background-2.png'
import background3 from '@/assets/images/baner/background-1.png'

export default {
  data() {
    return {
      currentIndex: 0,
      items: [
        {
          image: baner1Desktop,
          background: `url(${background1})`,
          mobile: baner1Desktop,
          desktop: baner1Desktop,
        },
        //  {
        //    image: baner2Desktop,
        //    background: `url(${background2})`,
        //    mobile: baner2Mobile,
        //    desktop: baner2Desktop,
        //  },
        // {
        //   image: baner3Desktop,
        //   background: `url(${background3})`,
        //   mobile: baner3Mobile,
        //   desktop: baner3Desktop,
        // }
      ]
    };
  },
  mounted() {
    this.updateImagesForScreenSize();
    window.addEventListener('resize', this.updateImagesForScreenSize);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.updateImagesForScreenSize);
  },
  methods: {
    nextSlide() {
      this.currentIndex = (this.currentIndex + 1) % this.items.length;
    },
    prevSlide() {
      this.currentIndex =
        this.currentIndex === 0 ? this.items.length - 1 : this.currentIndex - 1;
    },
    updateImagesForScreenSize() {
      this.items.forEach(item => {
        if (window.innerWidth < 800) {
          item.image = item.mobile;
        } else {
          item.image = item.desktop;
        }
      });
    }
  }
};
</script>

<style scoped>
.carousel {
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 70vh;
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

  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.carousel-item img {
  position: relative;
  z-index: 1;
  width: auto;
  height: 100%;
  object-fit: contain;
  max-width: 100%;
}


.carousel-item button {
  position: fixed;
  z-index: 2;
  left: 50px;
  bottom: 100px;
  width: 300px;
  height: 80px;
  font-size: 24px;
  border-radius: 100px;
  background-color: var(--primary-color);
  border: none;
  outline: none;
  cursor: pointer;
}

.carousel-item button:hover {
  background-color: var(--secondary-color);
  color: white;
}



.prev,
.next {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(180, 180, 180, 0.5);
  color: white;
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
  background-color: rgba(160, 160, 160, 0.8);
}
</style>
