<template>
    <WebsiteMenu v-if="isWebView" :route="route" />
    <MobileMenu v-else @openMenu="openMenu" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import WebsiteMenu from "./website.vue";
import MobileMenu from "./mobile.vue";

export default defineComponent({
    components: {
        WebsiteMenu,
        MobileMenu,
    },
    props: {
        route: {
            type: Object,
            required: true
        }
    },
    data() {
        return {
            isWebView: false,
        }
    },
    mounted() {
        this.validateWindowSize(window.innerWidth)
        window.addEventListener("resize", this.onWindowResize);
    },
    unmounted() {
        window.removeEventListener("resize", this.onWindowResize);
    },
    methods: {
        validateWindowSize(innerWidth: number) {
            const maxWebsiteWidth = 550;

            if (innerWidth && innerWidth < maxWebsiteWidth) {
                this.isWebView = false;
                return;
            }

            this.isWebView = true;
        },
        onWindowResize(event: any) {
            this.validateWindowSize(event?.target?.innerWidth);
        },
        openMenu() {
            this.$emit("openMenu")
        }
    }
});
</script>

<style lang="scss" scoped>
@import "@/scss/index.scss";
</style>