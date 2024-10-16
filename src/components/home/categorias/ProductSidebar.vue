<template>
    <div class="sidebar">
      <ul>
        <li 
          v-for="(product, index) in products" 
          :key="index" 
          @click="select(product)" 
          :class="{ active: selectedProduct.name === product.name }"
        >
          {{ product.name }}
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      products: {
        type: Array,
        required: true,
      },
      selectedProduct: {
        type: Object,
        required: true,
      },
    },
    methods: {
      select(product) {
        this.$emit('selectProduct', product);
      },
    },
  };
  </script>
  
  <style scoped>
  .sidebar {
    width: 300px;
    padding: 10px;
    font-weight: bold;
  }
  
  .sidebar ul {
    list-style-type: none;
    padding: 0;
  }
  
  .sidebar li {
    cursor: pointer;
    padding: 10px;
    border-bottom: 1px dotted var(--soft-color);
    margin-bottom: 5px;
  }
  
  .sidebar li.active {
    color: var(--primary-color);
  }
  </style>
  