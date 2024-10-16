<template>
    <div class="carousel">
        <h1>Beneficios de trabajar con nosotros</h1>
        <div class="carousel-inner" :style="{ transform: `translateX(-${currentIndex * (100 / visibleItems)}%)` }">
            <div v-for="(benefit, index) in benefits" :key="index" class="carousel-item">
                <div class="card">
                    <div class="icon">
                        <i :class="benefit.icon"></i> <!-- Usar la clase del icono -->
                    </div>
                    <h3>{{ benefit.title }}</h3>
                    <p>{{ benefit.description }}</p>
                </div>
            </div>
        </div>
        <button class="prev" @click="prevSlide">&#10094;</button>
        <button class="next" @click="nextSlide">&#10095;</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            currentIndex: 0,
            visibleItems: 3, // Número de tarjetas visibles en pantalla
            benefits: [
                {
                    icon: 'fas fa-hard-hat', // Icono 1
                    title: 'Experiencia Profesional',
                    description: 'Los expertos en concreto cuentan con la experiencia necesaria para realizar proyectos complejos.'
                },
                {
                    icon: 'fas fa-building', // Icono 2
                    title: 'Durabilidad',
                    description: 'El concreto es uno de los materiales más duraderos y resistentes disponibles.'
                },
                {
                    icon: 'fas fa-tools', // Icono 3
                    title: 'Personalización',
                    description: 'Las empresas de concreto ofrecen soluciones personalizadas que se adaptan a tus necesidades.'
                },
                {
                    icon: 'fas fa-clock', // Icono 4
                    title: 'Eficiencia',
                    description: 'Contratar a profesionales asegura un proceso de construcción eficiente y oportuno.'
                },
                {
                    icon: 'fas fa-leaf', // Icono 5
                    title: 'Sostenibilidad',
                    description: 'Las empresas de concreto se esfuerzan por utilizar métodos sostenibles y materiales reciclados.'
                },
            ]
        };
    },
    mounted() {
        this.updateVisibleItems(); // Llama a la función al montar el componente
        window.addEventListener('resize', this.updateVisibleItems); // Escucha el evento de cambio de tamaño
    },
    beforeDestroy() {
        window.removeEventListener('resize', this.updateVisibleItems); // Limpia el evento
    },
    methods: {
        nextSlide() {
            if (this.currentIndex < Math.ceil(this.benefits.length / this.visibleItems) - 1) {
                this.currentIndex++;
            } else {
                this.currentIndex = 0; // Regresa al inicio si se alcanza el final
            }
        },
        prevSlide() {
            if (this.currentIndex > 0) {
                this.currentIndex--;
            } else {
                this.currentIndex = Math.ceil(this.benefits.length / this.visibleItems) - 1; // Regresa al final si está en el inicio
            }
        },
        updateVisibleItems() {
            const width = window.innerWidth; // Obtener el ancho de la ventana
            if (width >= 1200) { // Pantallas grandes
                this.visibleItems = 3;
            } else if (width >= 720) { // Pantallas medianas
                this.visibleItems = 2;
            } else { // Pantallas pequeñas
                this.visibleItems = 1;
            }
        }

    }
};
</script>

<style scoped>
.carousel {
    position: relative;
    overflow: hidden;
    width: 100%;
    margin-top: 3rem;
    margin-bottom: 3rem;
}

.carousel-inner {
    display: flex;
    transition: transform 0.5s ease;
    height: 100%;
    margin: 1rem;
}

.carousel-item {
    min-width: calc(100% / v-bind(visibleItems));
    /* Muestra 3 tarjetas a la vez */
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.card {
    background: #fff;
    border-radius: 8px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
    padding: 20px;
    text-align: center;
    transition: transform 0.3s ease;
    width: 280px;
    /* Ancho de la tarjeta */
    margin: 0 10px;
    /* Espacio entre tarjetas */
    min-height: 280px;
}

.card:hover {
    transform: translateY(-10px);
    /* Efecto hover para elevar la tarjeta */
}

.icon {
    font-size: 50px;
    /* Ajusta el tamaño del ícono */
    margin-bottom: 10px;
}

.icon i {
    color: var(--primary-color);
}

h3 {
    font-size: 18px;
    margin: 10px 0;
}

p {
    font-size: 14px;
    color: #666;
}

.prev,
.next {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background-color: rgba(0, 0, 0, 0.5);
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
    background-color: rgba(0, 0, 0, 0.8);
}
</style>