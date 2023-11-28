<template>
    <div id="menu">
        <div class="menu-container">
            <router-link
                :class="{ active: $route.fullPath === r.url }"
                :to="r.redirect"
                v-for="(r, key) in route"
                :key="key"
            >
                <span>{{ key }}</span>
            </router-link>
        </div>
    </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  props: {
    route: {
      type: Object,
      required: true
    }
  },
});

</script>

<style lang="scss" scoped>
@import "@/scss/index.scss";

#menu {
    width: 100%;
    height: $menuHeight;
    position: fixed;
    top: 0;
    background: $navy;
    display: flex;
    justify-content: flex-end;
    font-family: "Roboto", serif;
    z-index: 2;

    .menu-container {
        width: 100%;
        max-width: 550px;
        height: inherit;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        padding-right: 40px;

        a,
        a:focus,
        a:active {
            text-decoration: none;
            color: $white;
            width: auto;
            padding: 0 20px;
            height: inherit;
            display: flex;
            justify-content: center;
            align-items: center;
            text-align: center;
            font-weight: 500;

            span {
                text-transform: capitalize;
            }
        }

        a:hover {
            cursor: pointer;
            font-weight: 600;
        }

        a.active {
            height: calc(100% - 10px);
        }

        a.active > span {
            border-bottom: 5px solid $orange;
            line-height: 35px;
            padding-top: 5px;
        }

        a.active::after {
            width: 100%;
        }
    }
}
</style>