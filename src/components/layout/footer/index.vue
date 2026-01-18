<template>
    <div id="footer" class="footer">
        <div>© 2023 | Hansen</div>
    </div>
</template>

<style lang="scss" scoped>
    @import "@/scss/index.scss";
    .footer {
        @include text-cannot-edit;
        background: $navy;
        font-family: "Futura", serif;
        text-align: center;
        color: $white;
        padding: 20px 0;
    }
</style>