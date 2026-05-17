<template>
    <Navbar />
    <div class="parent-container">
        <router-view/>
    </div>
    <Footer/>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import Navbar from "./navbar/index.vue";
import Footer from "./footer/index.vue";
import routeStaticData from "@/static/route-data";

export default defineComponent({
    name: "Layout",
    components: {
        Navbar,
        Footer,
    },
    data() {
        return {
            isLoading: true,
            route: routeStaticData,
        }
    }
});
</script>