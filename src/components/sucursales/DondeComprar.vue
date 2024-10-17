<template>
    <div>
        <PageBaner title="Sucursales de 3R" :breadcrumb="breadcrumbData" />

        <div class="brach-container">
            <h3>
                Las siguientes son las sucursales certificadas de 3R Ingenieria.
            </h3>
            <div class="branch-list">            
                <div v-for="(branch, index) in branches" :key="index" class="branch-card">
                    <h3>{{ branch.name }}</h3>
                    <p><strong>Dirección:</strong> {{ branch.address }}</p>
                    <p><strong>Teléfono:</strong> {{ branch.phone }}</p>
                    <div ref="mapContainer" :id="`map-${index}`" class="map"></div>
                    <button @click="openInGoogleMaps(branch.coords)">Ver en Google Maps</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import PageBaner from "../layout/PageBaner.vue";

export default {
    data() {
        return {
            branches: [
                {
                    name: "Sucursal Centro",
                    address: "Calle Principal 123, Colonia Centro, Ciudad",
                    phone: "(123) 456-7890",
                    coords: [19.4326, -99.1332] // Ejemplo: Ciudad de México
                },
                {
                    name: "Sucursal Norte",
                    address: "Avenida Norte 456, Colonia Industrial, Ciudad",
                    phone: "(123) 555-6789",
                    coords: [19.444, -99.138]
                },
                {
                    name: "Sucursal Sur",
                    address: "Boulevard Sur 789, Colonia Comercial, Ciudad",
                    phone: "(123) 333-4567",
                    coords: [19.424, -99.132]
                }
            ],
            breadcrumbData: [
                { label: 'Inicio', link: '/' },
                { label: 'Productos', link: '/productos' },
                { label: 'Concretos', link: '/concretos' },
            ],
        };
    },
    mounted() {
        this.branches.forEach((branch, index) => {
            this.initMap(branch.coords, `map-${index}`);
        });
    },
    methods: {
        initMap(coords, mapId) {
            const map = L.map(mapId).setView(coords, 14);
            L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
                maxZoom: 18,
                attribution: '© OpenStreetMap contributors'
            }).addTo(map);

            L.marker(coords).addTo(map)
                .bindPopup(`<b>${this.branches.find(b => `map-${this.branches.indexOf(b)}` === mapId).name}</b>`)
                .openPopup();
        },
        openInGoogleMaps(coords) {
            const [lat, lng] = coords;
            const googleMapsUrl = `https://www.google.com/maps?q=${lat},${lng}`;
            window.open(googleMapsUrl, "_blank");
        },
    },
    components:{
        PageBaner
    }
};
</script>

<style scoped>
.brach-container {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 100px;
}

.branch-list {
    display: flex;
    flex-direction: column;
    gap: 20px;
    max-width: 1200px;
    width: 90%;
}

@media (max-width:768px) {
    .branch-list {
        width: 80%;
    }
}

.branch-card {
    background-color: #f8f8f8;
    border-radius: 10px;
    padding: 1.5rem;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.branch-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.branch-card h3 {
    margin: 0;
    font-size: 1.2rem;
    color: #333;
}

.branch-card p {
    margin: 5px 0;
    color: #666;
}

.map {
    height: 400px;
    width: 100%;
    margin-top: 10px;
    border-radius: 8px;
}

.branch-card button {
    margin-top: 10px;
    padding: 8px 12px;
    background-color: var(--primary-color);
    color: black;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.branch-card button:hover {
    background-color: var(--secondary-color);
    color: white;
}

.branch-card button+button {
    margin-left: 10px;
}
</style>