<template>
  <div class="product-list">
    <div v-for="(product, index) in products" :key="index" class="product-card">
      <img :src="product.image" alt="Product Image" class="product-image" />
      <div class="product-info">
        <h3>{{ product.name }}</h3>
        <p>{{ product.description }}</p>
        <button>Ver detalle</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      products: [
        {
          name: "Producto 1",
          description: "Este es un producto increíble para la construcción.",
          image: new URL('@/assets/images/producto.jpg', import.meta.url).href,
        },
        {
          name: "Producto 2",
          description: "Ideal para todo tipo de proyectos de concreto.",
          image: new URL('@/assets/images/producto.jpg', import.meta.url).href,
        },
        {
          name: "Producto 3",
          description: "Alta resistencia y durabilidad en cada aplicación.",
          image: new URL('@/assets/images/producto.jpg', import.meta.url).href,
        },
        {
          name: "Producto 4",
          description: "Fácil de aplicar, diseñado para resultados rápidos.",
          image: new URL('@/assets/images/producto.jpg', import.meta.url).href,
        },
        {
          name: "Producto 5",
          description: "Innovación y calidad en cada detalle.",
          image: new URL('@/assets/images/producto.jpg', import.meta.url).href,
        },
      ],
    };
  },
};
</script>

<style scoped>
.product-list {
  display: grid;
  gap: 20px;
  padding: 20px;
}

@media (min-width: 600px) {
  .product-list {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 900px) {
  .product-list {
    grid-template-columns: repeat(3, 1fr);
  }
}


.product-card {
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.product-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.product-image {
  width: 100%;
  height: 250px;
  object-fit: cover;
}

.product-info {
  padding: 15px;
  text-align: center;
}

.product-info h3 {
  font-size: 1.2rem;
  margin-bottom: 10px;
}

.product-info p {
  font-size: 1rem;
  color: #666;
}

button {
  padding: 10px 20px;
  background-color: var(--primary-color);
  color: black;
  width: 100%;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
}

button:hover {
  background-color: var(--secondary-color);
  color: white;
}
</style>