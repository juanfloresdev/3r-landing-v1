<template>
    <div class="product-info">
        <div style="width: 300px;">
           
            <img :src="product.image" :alt="product.name" style="width: 100%" />
        </div>
        <div class="product-info-desc">
            <h2>{{ product.name }}</h2>
            <p >{{ product.description }}</p>
            <div class="buttons">
                <a v-for="(button, index) in product.buttons" :key="index" :href="button.link" class="btn">
                    {{ button.text }}
                </a>
            </div>
        </div>


    </div>
</template>

<script>
export default {
    props: {
        product: {
            type: Object,
            required: true,
        },
    },
};
</script>

<style scoped>
.product-info {
    border-left: 3px solid var(--primary-color);
    border-right: 1px solid var(--soft-color);
    border-top: 1px solid var(--soft-color);
    border-bottom: 1px solid var(--soft-color);
    padding: 0.5rem;

    display: flex;
    flex-wrap: wrap;
    align-items: center;
}

.product-info img {
    width: 100%;
    height: auto;
}

.product-info-desc {
    width: 280px;
}

.buttons {
    display: flex;
    margin-top: 20px;
    gap: 0.5rem;
    flex-wrap: wrap;
}

.buttons .btn {
    display: inline-block;
    margin-right: 10px;
    padding: 10px 10px;
    background-color: var(--primary-color);
    color: black;
    text-decoration: none;
    border-radius: 5px;
}

.buttons .btn:hover {
    background-color: var(--secondary-color);
    color: var(--text-color-on-ligth);
}
</style>