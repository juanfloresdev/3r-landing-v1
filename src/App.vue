<template>
  <div>
    <!-- FirstTopbar se posiciona con sticky -->
    <div class="first-topbar">
      <FirstTopbar />
    </div>

    <!-- SecondTopbar siempre fijo -->
    <div class="fixed-second-topbar">
      <SecondTopbar />
    </div>

    <!-- Contenido principal -->
    <div id="appContent" class="app-content">
      <RouterView />
      <ContactoForm></ContactoForm>
      <TheFooter></TheFooter>
    </div>
  </div>
</template>

<script>
import ContactoForm from './components/contacto/ContactoForm.vue';
import FirstTopbar from './components/layout/FirstTopbar.vue';
import SecondTopbar from './components/layout/SecondTopbar.vue';
import TheFooter from './components/layout/TheFooter.vue';

export default {
  components: {
    FirstTopbar,
    SecondTopbar,
    ContactoForm,
    TheFooter,
  },
};
</script>

<style scoped>

.fixed-second-topbar {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); 
  position: sticky;
}

.first-topbar {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}

.app-content{
  width: 100%;
}


</style>
