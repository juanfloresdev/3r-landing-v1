<template>
    <PageBaner title="Productos" :breadcrumb="breadcrumbData" />
    <div class="product-container">
        <ProductsList></ProductsList>
    </div>

</template>

<script>
import PageBaner from '@/components/layout/PageBaner.vue';
import ProductsList from '@/components/products/ProductsList.vue';

export default {
    components: {
        PageBaner,
        ProductsList
    },
    data() {
        return {
            breadcrumbData: [
                { label: 'Inicio', link: '/' },
                { label: 'Concreto', link: '/concretos' }
            ],
        }
    },
};
</script>
<style>
.product-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.product-content {
    max-width: 1200px;
    padding-top: 4rem;
    padding-bottom: 4rem;
    padding-left: 1rem;
    padding-right: 1rem;
}
</style>