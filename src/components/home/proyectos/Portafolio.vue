<template>
    <div class="portfolio-container">
        <PortfolioCard v-for="(project, index) in projects" :key="index" :project="project" />
    </div>
</template>

<script>
import PortfolioCard from './PortafolioCard.vue';
import { projectsData } from '@/data/menuOptions.js'; // Asegúrate de ajustar la ruta según tu proyecto

export default {
    components: {
        PortfolioCard
    },
    data() {
        return {
            projects: []
        };
    },
    mounted() {
        // Simular la obtención de los datos desde el archivo JSON
        this.projects = projectsData;
    }
};
</script>

<style scoped>
.portfolio-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 2rem;
    margin-bottom: 2rem;
}
</style>