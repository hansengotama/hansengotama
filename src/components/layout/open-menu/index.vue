<template>
    <div id="open-menu">
        <div class="navbar">
            <div class="close-button">
                <fa icon="times" type="fas" @click="closeMenu()"></fa>
            </div>
        </div>

        <div class="menu-container">
            <router-link
                class="menu"
                :to="r.redirect"
                :class="{ active: $route.fullPath === r.url }"
                v-for="(r, key) in route"
                :key="key"
                @click="closeMenu()"
            >
                {{ key }}
            </router-link>
        </div>
        <div class="social-media-container">
            <div
                :class="sm.icon"
                v-for="(sm, index) in socialMedia"
                :key="index"
                @click="openNewTab(sm.url)"
            >
                <fa :icon="sm.icon" type="fab"></fa>
                {{ sm.name }}
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import socialMediaStaticData from "@/static/social-media-data";

export default defineComponent({
    emits: ["closeMenu"],
    props: {
        route: {
          type: Object,
          required: true
        }
    },
    data() {
        return {
          socialMedia: socialMediaStaticData,
        }
    },
    methods: {
      openNewTab(url: string) {
        window.open(url, "_blank");
      },
      closeMenu() {
        this.$emit("closeMenu");
      }
    }
});
</script>

<style lang="scss" scoped>
@import "@/scss/index.scss";

#open-menu {
    font-family: "Roboto";
    width: 100vw;
    height: 100vh;
    background: $navy;

    .navbar {
        height: $menuHeight;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        z-index: 2;

        .close-button {
            width: 25px;
            margin-right: 15px;
            color: $orange;
        }
    }

    .menu-container {
        padding: 0 0 0 30px;

        .menu {
            margin: 20px 0;
            text-transform: capitalize;
            color: $white;
            font-weight: 500;
            font-size: 22px;
            display: block;
        }

        .menu.active {
            color: $orange;
        }
    }

    .social-media-container {
        padding: 15px 0 0 50px;

        .linkedin,
        .github,
        .hackerrank,
        .instagram {
            display: flex;
            align-items: center;
            padding-right: 15px;
            cursor: pointer;
            margin-bottom: 10px;
            color: $white;
            opacity: 0.5;

            svg {
                margin-right: 10px;
                width: 18px;
            }
        }
    }
}
</style>