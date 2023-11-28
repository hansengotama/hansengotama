<template>
    <div id="not-found-page">
        <div class="icon">
            <img src="/logo.png" alt="logo" />
        </div>
        <div class="description-silde">
            <div>
                <div>404</div>
                <div>Oops</div>
                <div>Sorry</div>
            </div>
        </div>
        <div class="description">Page not found !</div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: "Not Found",
});
</script>

<style lang="scss" scoped>
@import "@/scss/index.scss";

#not-found-page {
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: "Roboto";
    font-weight: 500;
    flex-direction: column;
    background: $navy;

    .icon {
        width: 200px;
        height: 200px;

        img {
            width: 100%;
            height: 100%;
        }
    }

    .title {
        font-size: 40px;
        margin-top: 10px;
        color: $orange;
    }

    .description-silde {
        font-size: 20px;
        margin: 10px 0;
        overflow: hidden;
        height: 45px;
    }

    .description-silde > div > div {
        display: block;
        margin-bottom: 45px;
        color: $navy;
        padding: 10px;
        border-radius: 5px;
        text-align: center;
        background: $orange;
        user-select: none;
    }

    .description-silde div:nth-child(1) {
        animation: animate 3s linear infinite;
    }

    @keyframes animate {
        0% {
            margin-top: -270px;
        }
        5% {
            margin-top: -180px;
        }
        33% {
            margin-top: -180px;
        }
        38% {
            margin-top: -90px;
        }
        66% {
            margin-top: -90px;
        }
        71% {
            margin-top: 0px;
        }
        99.99% {
            margin-top: 0px;
        }
        100% {
            margin-top: -270px;
        }
    }

    .description {
        margin-top: 5px;
        font-size: 18px;
        color: $orange;
    }

    .back-to-home {
        margin: 10px 0;
        color: $white;

        a {
            color: blue;
        }
    }
}
</style>