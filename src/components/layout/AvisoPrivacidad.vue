<template>
    <div class="privacy-policy">
        <h1>Aviso de Privacidad</h1>

        <section>
            <h2>1. Información que recopilamos</h2>
            <p>
                Recopilamos información personal que usted nos proporciona de manera voluntaria
                al usar nuestro sitio web, incluyendo su nombre, dirección de correo electrónico,
                número de teléfono y detalles de su proyecto de construcción.
            </p>
        </section>

        <section>
            <h2>2. Uso de la información</h2>
            <p>
                Utilizamos la información recopilada para procesar sus solicitudes de cotización,
                comunicarnos con usted sobre su proyecto de construcción y mejorar nuestros servicios.
            </p>
        </section>

        <section>
            <h2>3. Seguridad de los datos</h2>
            <p>
                Implementamos medidas de seguridad adecuadas para proteger su información
                personal contra accesos no autorizados, alteraciones o divulgaciones.
            </p>
        </section>

        <section>
            <h2>4. Compartir información con terceros</h2>
            <p>
                No compartimos su información personal con terceros, salvo cuando sea necesario
                para cumplir con los servicios solicitados o cuando lo exija la ley.
            </p>
        </section>

        <section>
            <h2>5. Derechos de los usuarios</h2>
            <p>
                Usted tiene derecho a acceder, rectificar o eliminar su información personal.
                Si desea ejercer alguno de estos derechos, contáctenos a través de nuestros canales de comunicación.
            </p>
        </section>

        <section>
            <h2>6. Cambios en el aviso de privacidad</h2>
            <p>
                Nos reservamos el derecho de modificar este aviso de privacidad en cualquier momento.
                Le recomendamos revisarlo periódicamente para estar informado sobre cómo protegemos su información.
            </p>
        </section>

        <section>
            <h2>Contacto</h2>
            <p>
                Si tiene alguna pregunta sobre este aviso de privacidad, puede contactarnos en
                <a href="mailto:contacto@concretera.com">contacto@concretera.com</a>.
            </p>
        </section>
    </div>
</template>

<script>
export default {};
</script>

<style scoped>
.privacy-policy {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
    font-family: Arial, sans-serif;
    line-height: 1.6;
}

.privacy-policy h1 {
    font-size: 2rem;
    margin-bottom: 20px;
    color: var(--secondary-color);
}

.privacy-policy h2 {
    font-size: 1.5rem;
    margin-top: 20px;
    color: var(--primary-color);
}

.privacy-policy p {
    font-size: 1rem;
    margin: 10px 0;
    color: var(--secondary-color);
}

.privacy-policy a {
    color: var(--primary-color);
    text-decoration: underline;
}
</style>