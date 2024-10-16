<template>
    <div class="product-selector">
      <!-- Sidebar con el selector de productos -->
      <ProductSidebar 
        :products="category" 
        @selectProduct="selectProduct"
        :selectedProduct="selectedProduct"
      />
  
      <!-- Tarjeta con la información del producto -->
      <ProductInfo 
        v-if="selectedProduct" 
        :product="selectedProduct" 
      />
    </div>
  </template>
  
  <script>
  import ProductSidebar from './ProductSidebar.vue';
  import ProductInfo from './ProductInfo.vue';
  import { categoryData } from '@/data/menuOptions';
  
  export default {
    components: {
      ProductSidebar,
      ProductInfo,
    },
    data() {
      return {
        // Lista de productos
        category: categoryData,
        // Producto seleccionado
        selectedProduct: null,
      };
    },
    created() {
      // Seleccionar el primer producto por defecto
      this.selectedProduct = this.category[0];
    },
    methods: {
      // Cambiar el producto seleccionado
      selectProduct(product) {
        this.selectedProduct = product;
      },
    },
  };
  </script>
  
  <style scoped>
  .product-selector {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
  }
  </style>
  