<template>
    <LoadingPage v-show="isLoading"/>
    <div v-show="!isLoading">
        <div v-if="showMenu">
            <OpenMenu @closeMenu="closeMenu" :route="route"/>
        </div>
        <div v-else>
            <transition name="slide-up">
                <Menu v-if="showNavbar" @openMenu="openMenu" :route="route"/>
            </transition>
            <div class="parent-container">
                <router-view/>
            </div>
            <Footer/>
        </div>
    </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import Menu from "./menu/index.vue";
import Footer from "./footer/index.vue";
import LoadingPage from "./loading-page/index.vue";
import OpenMenu from "./open-menu/index.vue";
import routeStaticData from "@/static/route-data";

export default defineComponent({
    name: "Layout",
    components: {
        Menu,
        Footer,
        LoadingPage,
        OpenMenu,
    },
    data() {
        return {
            lastScrollPosition: 0,
            isLoading: true,
            showMenu: false,
            showNavbar: true,
            route: routeStaticData,
        }
    },
    mounted() {
        this.onReadyStateChange()
        window.addEventListener("scroll", this.onWindowScroll);
    },
    unmounted() {
        window.removeEventListener("scroll", this.onWindowScroll);
    },
    methods: {
        onReadyStateChange() {
            if (document.readyState == "complete") this.loadingTimeOut();
            else {
                document.onreadystatechange = () => {
                    if (document.readyState == "complete") {
                        this.loadingTimeOut();
                    }
                };
            }
        },
        loadingTimeOut() {
            if (localStorage.isLoading) {
                this.isLoading = false;
                return;
            }

            const loadingTimeMs = 1600;

            setTimeout(() => {
                this.isLoading = false;
                localStorage.isLoading = true;
            }, loadingTimeMs);
        },
        onWindowScroll() {
            const currentScrollPosition =
                window.pageYOffset || document.documentElement.scrollTop;
            if (currentScrollPosition < 0) {
                return;
            }

            if (Math.abs(currentScrollPosition - this.lastScrollPosition) < 60) {
                return;
            }

            this.showNavbar = currentScrollPosition < this.lastScrollPosition;
            this.lastScrollPosition = currentScrollPosition;
        },
        openMenu() {
            this.showMenu = true
        },
        closeMenu() {
            this.showMenu = false
        }
    }
});
</script>

<style lang="scss" scoped>
@import "@/scss/index.scss";

.parent-container {
    padding-top: $menuHeight;
    background: $navy;
}

.slide-up-enter-active {
    transition: all 0.5s ease-out;
}

.slide-up-leave-active {
    transition: all 0.5s ease-in;
}

.slide-up-enter-from,
.slide-up-leave-to {
    transform: translate3d(0, -100%, 0);
}
</style>