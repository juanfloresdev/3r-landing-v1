<template>
  <div ref="topbar">
    <FirstTopbar  />
    <SecondTopbar />
  </div>

  <div :style="routerViewContainerStyle" >
    <RouterView />
    <ContactoForm></ContactoForm>
    <TheFooter></TheFooter>
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
  data() {
    return {
      topbarHeight: 0,
    };
  },
  computed: {
    routerViewContainerStyle() {
      return {
        height: `calc(100vh - ${this.topbarHeight}px)`,
        overflowY: 'auto',
      };
    },
  },
  mounted() {
    this.adjustRouterViewHeight();
    window.addEventListener('resize', this.adjustRouterViewHeight);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.adjustRouterViewHeight);
  },
  methods: {
    adjustRouterViewHeight() {
      this.topbarHeight = this.$refs.topbar ? this.$refs.topbar.offsetHeight : 0;

    },
  },
};
</script>

<style scoped>

</style>
