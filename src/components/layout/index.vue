<template>
    <div class="parent-container">
        <router-view/>
    </div>
    <Footer/>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import Footer from "./footer/index.vue";
import routeStaticData from "@/static/route-data";

export default defineComponent({
    name: "Layout",
    components: {
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