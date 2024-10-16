<template>
    <footer class="footer-container">
        <!-- Información de la empresa -->
        <div class="footer-content">
            <div class="company-info">
                <h3>Acerca de 3R</h3>
                <div class="top-products-divider-block"/>
                <ul>
                    <li>Oficinas</li>
                    <li>Misión</li>
                    <li>Visión</li>
                </ul>
            </div>

            <div class="company-info">
                <img :src="logo" alt="Logo 3r">
                <p>1234 Calle Principal, Ciudad, País</p>
                <p>+123 456 7890</p>
                <p>contacto@empresa.com</p>
            </div>



        </div>
        <div class="privacy-notice">
            <p>
                {{ privacyMessage }}
                <router-link to="/privacy-policy">Leer aviso de privacidad</router-link>
            </p>
        </div>
    </footer>
</template>

<script>
import logo from '@/assets/images/3r-logo-white.jpg';


export default {
    data() {
        return {
            logo
        };
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

.privacy-notice {
    font-size: 14px;
}

.privacy-notice a {
    color: var(--primary-color);
    text-decoration: none;
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
li{
    margin-top: 1.3rem;
}

.top-products-divider-block {
    width: 40px;
    background-color: var(--primary-color);
    height: 3px;
  }
</style>