<template>
    <div class="contact-container" id="contacto">
        <!-- Imagen a la izquierda -->
        <div class="contact-image">
            <img :src="ingeImage" alt="contact image" />
        </div>

        <!-- Formulario de contacto a la derecha -->
        <div class="contact-form-container">
            <div class="contact-form">
                <h1>Contáctanos</h1>
                <p>
                    Estamos para servirte
                </p>
                <form @submit.prevent="submitForm">
                    <div class="form-group">
                        <label for="name">Nombre</label>
                        <input type="text" id="name" v-model="form.name" required />
                    </div>
                    <div class="form-group">
                        <label for="email">Correo Electrónico</label>
                        <input type="email" id="email" v-model="form.email" required />
                    </div>
                    <div class="form-group">
                        <label for="message">Mensaje</label>
                        <textarea id="message" v-model="form.message" rows="5" required></textarea>
                    </div>
                    <button type="submit">Enviar</button>
                </form>
            </div>

        </div>
    </div>
</template>

<script>
import ingeImage from '@/assets/images/inge.jpg'

export default {
    data() {
        return {
            ingeImage,
            form: {
                name: '',
                email: '',
                message: '',
            }
        };
    },
    methods: {
        submitForm() {
            // Aquí puedes manejar el envío del formulario, como enviarlo a un servidor o mostrar un mensaje
            alert(`Formulario enviado por ${this.form.name}`);
        }
    }
};
</script>

<style scoped>
.contact-container {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    background-color: black;
    color: white;
}

.contact-image img {
    width: 100%;
    height: auto;
}

.contact-form-container {
    box-sizing: border-box;
    flex: 1 0 auto;
    margin: 3rem;
}

.contact-form {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

form {
    width: 100%;
}

.contact-form h2 {
    margin-bottom: 20px;
}

.form-group {
    margin-bottom: 15px;
    width: 100%;
}

.form-group label {
    display: block;
    margin-bottom: 5px;
}

.form-group input,
.form-group textarea {
    width: 100%;
    padding: 10px;
    font-size: 16px;
    border-radius: 4px;
    border: 1px solid #ccc;
    box-sizing: border-box;
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

/* Estilos para pantallas pequeñas */
@media (max-width: 768px) {
    .contact-container {
        flex-direction: column;
    }

    .contact-image {
        margin-bottom: 20px;
    }
}

h1 {
    color: var(--primary-color);
}

p {
    font-size: 20px;
}
</style>