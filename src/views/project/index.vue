<template>
    <div id="project">
        <h1 class="title">
            My Projects
        </h1>
        <div class="container">
            <div class="project-container" v-for="(data, index) in portofolioData" :key="index">
                <div class="image">
                    <img :src="data.src" >
                </div>
                <div class="text-container">
                    <div class="title">
                        {{ data.name }}
                    </div>
                    <div class="description">
                        <span v-html="data?.description"></span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import portofolioStaticData from "@/static/portofolio-data";

export default defineComponent({
    name: "Project",
    data() {
        return {
          portofolioData: portofolioStaticData
        };
    }
});
</script>

<style lang="scss" scoped>
@import "@/scss/index.scss";

#project {
    @include text-cannot-edit;
    padding: 20px 20px 70px;
    background: $darkNavy;
    font-family: "Roboto", serif;

    .title {
        margin: 0 10px;
        text-align: left;
        font-family: "Futura", sans-serif;
        color: $white;
        font-size: 18px;
        font-weight: 400;
    }

    .container {
      margin: 30px 10px 0;
      display: grid;
        grid-gap: 1em;
        grid-template-columns: repeat(4, 1fr);

        .project-container {
            background: $navy;
            border-bottom-left-radius: 5px;
            border-bottom-right-radius: 5px;

            .image {
                img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    border-top-left-radius: 5px;
                    border-top-right-radius: 5px;
                }
            }

            .text-container {
                padding: 15px;
                text-align: left;

                .title {
                    margin: 0 0 10px;
                    font-weight: 600;
                    color: $orange;
                    text-transform: uppercase;
                }

                .description {
                    color: $white;
                }
            }
        }
    }

    @media (max-width: 1200px) {
        .container {
            grid-template-columns: repeat(3, 1fr);
        }
    }

    @media (max-width: 800px) {
        .container {
            grid-template-columns: repeat(2, 1fr);
        }
    }

    @media (max-width: 500px) {
        .container {
            grid-template-columns: 1fr;
        }
    }
}
</style>