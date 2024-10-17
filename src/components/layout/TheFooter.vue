<template>
    <footer class="footer-container">
        <!-- Información de la empresa -->
        <div class="footer-content">



            <div class="company-info">
                <h3>Acerca de 3R</h3>
                <div class="top-products-divider-block" />
                <ul>
                    <li><router-link to="/sucursales">Oficinas</router-link></li>
                    <li>
                        <router-link to="/acerca/mision"> Misión </router-link>
                    </li>
                    <li><router-link to="/acerca/vision"> Visión </router-link></li>
                </ul>
            </div>

            <div class="company-info">
                <img :src="logo" alt="Logo 3r">
                <p>1234 Calle Principal, Ciudad, País</p>
                <p>+123 456 7890</p>
                <p>contacto@empresa.com</p>

                <div class="social-icons">

                    <a href="https://facebook.com" target="_blank" aria-label="Facebook">
                        <i class="fab fa-facebook"></i>
                    </a>
                    <a href="https://twitter.com" target="_blank" aria-label="Twitter">
                        <i class="fab fa-twitter"></i>
                    </a>
                    <a href="https://instagram.com" target="_blank" aria-label="Instagram">
                        <i class="fab fa-instagram"></i>
                    </a>


                </div>
            </div>





        </div>

        <div class="privacy-divider">

        </div>
        <div class="privacy-notice">
            <RouterLink to="/aviso-privacidad">Aviso de privacidad</RouterLink>
            <AvisoPrivacidadPopup></AvisoPrivacidadPopup>
        </div>
    </footer>
</template>

<script>
import logo from '@/assets/images/3r-logo-white.jpg';
import AvisoPrivacidadPopup from './AvisoPrivacidadPopup.vue';


export default {
    data() {
        return {
            logo
        };
    },
    methods: {
        navegarA(to, hash) {
            this.$router.push({ path: to, hash: hash })
        }
    },
    components: {
        AvisoPrivacidadPopup
    }
};
</script>

<style scoped>
.footer-container {
    background-color: black;
    color: white;
    padding: 20px;
    text-align: center;
    padding: 3rem;
}

.footer-content {
    display: flex;
    justify-content: space-around;
    align-items: center;
    gap: 3rem;
}

.company-info {
    font-size: 20px;
    text-align: left;
}

.company-info p {
    font-size: 20px;
    text-align: left;
}


.privacy-notice {
    font-size: 14px;
}

.privacy-notice a {
    color: white;
    text-decoration: none;
    font-size: 20px;
}

.privacy-notice a:hover {
    text-decoration: underline;
}

img {
    height: 60px;
}

h3 {
    color: var(--primary-color);
}

ul {
    list-style: square;
    padding-left: 18px;
}

li {
    margin-top: 1.3rem;
}

.privacy-divider {
    height: 3px;
    background-color: var(--primary-color);
    margin-top: 2rem;
    margin-bottom: 1rem;
}

.top-products-divider-block {
    width: 40px;
    background-color: var(--primary-color);
    height: 3px;
}

a {
    color: white;
    text-decoration: none;
}

.social-icons {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
}

.social-icons a {
    margin-left: 15px;
    color: var(--text-color-on-ligth);
    /* Asegura que los iconos sean blancos */
}

.social-icons i {
    font-size: 24px;
    /* Tamaño de los iconos */
}
</style>