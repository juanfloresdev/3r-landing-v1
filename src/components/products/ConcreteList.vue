<template>
    <div>
        <PageBaner title=" Solicita tu cotización de concreto" :breadcrumb="breadcrumbData" />

        <div class="concrete-container">

            <div class="concrete-content">
                <p>
                    Estamos aquí para ayudarte a hacer realidad tu proyecto. Si necesitas concreto de alta calidad, ¡no
                    dudes en contactarnos! Completa el formulario de cotización a continuación y recibirás una respuesta
                    personalizada en breve.
                </p>

                <h2>
                    Seleccione el tiempo de secado
                </h2>
                <div class="concrete-list">

                    <div v-for="(concrete, index) in concretes" :key="index" class="concrete-card"
                        :class="{ selected: selectedConcrete === concrete.days }"
                        @click="selectConcrete(concrete.days)">
                        <div class="concrete-days">{{ concrete.days }}</div>
                        <div class="concrete-info">
                            <h3>Días</h3>
                            <p>{{ concrete.description }}</p>
                        </div>
                    </div>
                </div>
                <h2>
                    Capture los metros cúbicos
                </h2>
                <div class="number-input-container">
                    <input type="number" v-model="number" @input="validateNumber(4)" class="large-input"
                        placeholder="Ingrese un número de 4 dígitos" required />
                </div>

                <h2>
                    Capture tu número de teléfono
                </h2>
                <div class="number-input-container">
                    <input type="phone" v-model="phone" class="large-input" @input="validatePhone(10)"
                        placeholder="Ingrese un número a 10 dígitos" required />
                </div>

                <div class="quote-button-container">                   
                    <button class="quote-button" @click="requestQuote">
                        Solicitar cotización
                    </button>
                </div>
            </div>
        </div>
    </div>


</template>

<script>
import PageBaner from '../layout/PageBaner.vue';

export default {
    props: {
        modelValue: {
            type: String,
            default: ''
        }
    },
    data() {
        return {
            breadcrumbData: [
                { label: 'Inicio', link: '/' },
                { label: 'Productos', link: '/productos' },
            ],
            concretes: [
                {
                    days: '5',
                    description: "Este es un producto increíble para la construcción."
                },
                {
                    days: '7',
                    description: "Ideal para todo tipo de proyectos de concreto."
                },
                {
                    days: '15',
                    description: "Alta resistencia y durabilidad en cada aplicación."
                },
                {
                    days: '28',
                    description: "Fácil de aplicar, diseñado para resultados rápidos."
                },
            ],
            selectedConcrete: '',
            number: null,
            phone: '',
        };
    },
    methods: {
        selectConcrete(days) {
            this.selectedConcrete = days; // Actualiza el estado
            this.$emit('update:modelValue', days); // Emite el valor seleccionado
        },
        validateNumber(length) {
            if (this.number.toString().length > length) {
                this.number = Number(this.number.toString().slice(0, length));
            }
        },
        validatePhone(length) {
            if (this.phone.toString().length > length) {
                this.phone = Number(this.phone.toString().slice(0, length));
            }
        },
    },
    components: {
        PageBaner
    }
};
</script>

<style scoped>
h1,
h2,
h3 {
    text-align: center;
}

.concrete-container {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.concrete-content {
    max-width: 1200px;
    text-align: center;
}

.concrete-list {
    display: grid;
    gap: 20px;
    padding: 20px;
}

@media (min-width: 600px) {
    .concrete-list {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media (min-width: 900px) {
    .concrete-list {
        grid-template-columns: repeat(3, 1fr);
    }
}

.concrete-days {
    font-size: 62px;
    color: #666;
}

.concrete-card {
    background-color: white;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
}

.concrete-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}


.concrete-card.selected {
    border: 2px solid var(--primary-color);
    background-color: #f2fff0;
}

.concrete-info {
    padding: 15px;
    text-align: center;
}

.concrete-info h3 {
    font-size: 1.2rem;
    margin-bottom: 10px;
}

.concrete-info p {
    font-size: 1rem;
    color: var(--secondary-color); ;
}


.number-input-container {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px 0;
}

.large-input {
    width: 100%;    
    max-width: 400px;    
    height: 60px;    
    font-size: 24px;    
    padding: 10px;    
    border: 2px solid var(--secondary-color);    
    border-radius: 10px;    
    outline: none;    
    transition: border-color 0.3s ease;    
}

.large-input:focus {
    border-color: var(--primary-color);
}

.quote-button-container {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px 0;
}

.quote-button {
    background-color: var(--primary-color);    
    color: black;    
    font-size: 24px;    
    padding: 20px 0px;    
    border: none;    
    border-radius: 10px;    
    cursor: pointer;    
    transition: background-color 0.3s ease, transform 0.3s ease;
    max-width: 424px;
    width: 100%;
}

.quote-button:hover {
    background-color: var(--primary-color);    
    transform: scale(1.05);    
}

.quote-button:focus {
    outline: none;    
}
</style>