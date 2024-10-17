<template>
  <div v-if="showNotice" class="privacy-notice">
    <p>Utilizamos cookies para mejorar su experiencia en nuestro sitio. Para obtener más
      información, consulte nuestro <router-link to="/aviso-privacidad">aviso de privacidad</router-link>.</p>
    <button @click="acceptPrivacyNotice">Aceptar</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showNotice: true
    };
  },
  methods: {
    acceptPrivacyNotice() {
      this.showNotice = false;
      localStorage.setItem("privacyAccepted", "true");
    }
  },
  mounted() {
    if (localStorage.getItem("privacyAccepted") === "true") {
      this.showNotice = false;
    }
  }
};
</script>

<style scoped>
.privacy-notice {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 15px;
  background-color: var(--secondary-color);
  color: #fff;
  text-align: center;
  font-size: 0.9rem;
  z-index: 1000;
}

.privacy-notice p {
  display: inline;
  margin-right: 10px;
}

.privacy-notice a {
  color: var(--primary-color);
  text-decoration: underline;
}

.privacy-notice button {
  padding: 5px 10px;
  background-color: var(--primary-color);
  border: none;
  color: black;
  border-radius: 3px;
  cursor: pointer;
  font-size: 0.9rem;
}

.privacy-notice button:hover {
  background-color: var(--secondary-color);
  color: white;
}
</style>