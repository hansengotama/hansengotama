<template>
    <div id="portofolio">
        <div class="container">
            <div class="portofolio-title">
                Projects
            </div>

            <div class="portofolio-container">
                <div class="images">
                    <div class="image" v-for="(data, index) in getPortofolio(portofolioData)" :key="index">
                        <img :src="data.src"/>
                    </div>

                    <div class="portofolio-description">
                        <div class="title">
                            My Projects
                        </div>
                        <div class="button">
                            <router-link :to="{
                                name: 'Project'
                            }">
                                <button>View</button>
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import {defineComponent, ref} from "vue";
import {routeName} from "@/static/route-data";
import portofolioStaticData from "@/static/portofolio-data";

export default defineComponent({
    data() {
        return {
            portofolioData: portofolioStaticData,

        };
    },
    methods: {
        getPortofolio(data: any) {
            const returnData = data.filter((datum: any) => {
                return datum.showInHomePage;
            });

            return returnData
        }
    }
});
</script>

<style lang="scss" scoped>
@import "@/scss/index.scss";

#portofolio {
    @include text-cannot-edit;

    background: $darkNavy;
    padding-bottom: 50px;

    .container {
        padding: 40px 80px;

        .portofolio-title {
            text-align: left;
            font-family: "Futura", sans-serif;
            color: $white;
            margin: 0 10px 20px;
            font-size: 18px;
            font-weight: 400;
        }

        .portofolio-container {
            margin: 0 10px;

            .images {
                display: grid;
                grid-template-columns: repeat(4, 1fr);
                grid-gap: 1em;
                position: relative;

                .image {
                    img {
                        width: 100%;
                        height: 100%;
                        opacity: 0.5;
                        filter: blur(1px);
                        object-fit: cover;
                    }
                }

                .portofolio-description {
                    position: absolute;
                    left: 10%;
                    top: 35%;

                    .title {
                        color: $white;
                        font-family: "Futura", serif;
                        font-size: 22px;
                        text-transform: uppercase;
                        font-weight: 500;
                    }

                    .description {
                        color: $white;
                        text-shadow: 2px 2px $navy;
                        font-family: "Roboto", serif;
                        width: 250px;
                        font-weight: 500;
                        display: none;
                    }

                    .button {
                        text-align: left;
                        margin-top: 15px;

                        button {
                            background: $orange;
                            color: $navy;
                            font-family: "Roboto", serif;
                            padding: 10px 22px;
                            border: none;
                            cursor: pointer;
                            font-weight: 600;
                            border-radius: 5px;
                            box-shadow: none;
                        }
                    }
                }
            }

            @media (max-width: 1000px) and (min-width: 720px) {
                .images {
                    .portofolio-description {
                        top: 30%;

                        .button {
                            margin-top: 5px;

                            button {
                                padding: 4px 22px;
                            }
                        }
                    }
                }
            }

            @media (max-width: 720px) and (min-width: 450px) {
                .images {
                    grid-template-columns: repeat(2, 1fr);
                    grid-gap: 5px;

                    .portofolio-description {
                        top: 42%;
                    }

                    .title {
                        margin-bottom: 30px;
                        font-size: 22px;
                    }

                    .button {
                        button {
                            padding: 10px 22px;
                        }
                    }
                }
            }

            @media (max-width: 450px) {
                .images {
                    grid-template-columns: repeat(2, 1fr);
                    grid-gap: 5px;

                    .portofolio-description {
                        top: 40%;
                    }

                    .title {
                        margin-bottom: 0;
                    }
                }
            }
        }
    }

    @media (max-width: 1200px) {
        .container {
            padding: 40px 40px;
        }
    }

    @media (max-width: 500px) {
        .container {
            padding: 40px 20px;
        }
    }
}
</style>