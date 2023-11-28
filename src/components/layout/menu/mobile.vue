<template>
    <div id="menu">
        <fa icon="equals" type="fas" @click="openMenu()"></fa>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  methods: {
    openMenu() {
      this.$emit("openMenu");
    }
  }
});
</script>

<style lang="scss" scoped>
@import "@/scss/index.scss";

#menu {
    width: 100vw;
    height: $menuHeight;
    position: fixed;
    top: 0;
    background: $navy;
    display: flex;
    justify-content: flex-end;
    font-family: "Roboto", serif;
    z-index: 2;

    svg {
        width: 25px;
        margin-right: 15px;
        color: $orange;
    }
}
</style>