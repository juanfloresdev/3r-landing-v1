<template>
    <div class="banner" :style="{ background: backgroundStyle }">
      <div class="banner-content">
        <h1>{{ title }}</h1>
        <nav class="breadcrumb">
          <ul>
            <li v-for="(item, index) in breadcrumb" :key="index">
              <router-link :to="item.link">{{ item.label }}</router-link>
              <span v-if="index < breadcrumb.length - 1">/</span>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </template>
  
  <script>
  import background1 from "@/assets/images/baner/background-1.png"
  export default {
    props: {
      title: {
        type: String,
        required: true
      },
      breadcrumb: {
        type: Array,
        required: true,
        default: () => []
      }
    },
    data() {
      return {
        background1,
        backgroundStyle: `url(${background1})`
      }
    },
  };
  </script>
  
  <style scoped>
  .banner {
    padding: 20px;
    text-align: center;
    position: relative;
    height: 150px;
    display: flex;
    align-items: center;
    justify-content: center;

  }
  
  .banner-content {
    position: relative;
    z-index: 1;
  }
  
  h1 {
    font-size: 24px;
    color: #333;
    margin: 0 0 10px;
  }
  
  .breadcrumb {
    margin-top: 10px;
  }
  
  .breadcrumb ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: center;
    font-size: 14px;
    color: #666;
  }
  
  .breadcrumb li {
    margin: 0 5px;
  }
  
  .breadcrumb li a {
    color: #007bff;
    text-decoration: none;
    transition: color 0.3s;
  }
  
  .breadcrumb li a:hover {
    color: #0056b3;
  }
  
  .breadcrumb li span {
    margin: 0 5px;
  }
  </style>
  