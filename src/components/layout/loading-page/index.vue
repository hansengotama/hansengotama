<template>
    <div id="loading-page">
        <div class="icon animate__animated animate__tada">
            <img src="/logo.png" alt="logo" />
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import "@/scss/index.scss";

#loading-page {
    background: $navy;
    width: 100vw;
    height: 100vh;
    display: grid;

    .icon {
        place-self: center;

        img {
            width: 12vw;
            min-width: 100px;
            height: 100%;
        }
    }
}
</style>