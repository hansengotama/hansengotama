<template>
    <div id="about-me-photo">
        <img src="@/assets/images/hansen.png" alt=""/>
    </div>
    <div id="about-me">
        <div class="container">
            <div class="name-container">
                <div class="name">
                    Hansen <br/>
                    Wu
                </div>
                <div class="line"></div>
                <div class="social-media">
                    <div
                        :class="sm.icon"
                        v-for="(sm, index) in socialMedia"
                        :key="index"
                    >
                        <fa
                            :icon="sm.icon"
                            type="fab"
                            @click="openNewTab(sm.url)"
                        ></fa>
                    </div>
                </div>
            </div>
            <div class="about-us-container">
                <div class="introduction">- Introduction</div>
                <div class="title">
                    Software Engineer <br/>
                    based in Jakarta.
                </div>
                <div class="description">
                    {{ activeDescription() }}
                </div>
                <div class="description-point">
                    <div
                        class="point"
                        :class="index == activeDescriptionIndex ? 'active' : ''"
                        @click="changeDescription(index)"
                        v-for="(_, index) in descriptionData"
                        :key="index"
                    ></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";

import socialMediaStaticData from "@/static/social-media-data";

export default defineComponent({
    data() {
        return {
            socialMedia: socialMediaStaticData,
            descriptionData: [
                "With almost 6 years of experience in back-end, mobile, and web development, I have a natural curiosity for problem-solving, especially when things are not as expected. My career goal is to make a meaningful impact on people's lives; that's what I love to do.",
                "I strongly believe that a well-organized engineering team with industry leading processes can enhance team performance and drive better business outcomes. I enjoy analyzing and improving processes to deliver meaningful value to the organization.",
            ],
            activeDescriptionIndex: 0,
        };
    },
    methods: {
        changeDescription(index: number) {
            this.activeDescriptionIndex = index
        },
        openNewTab(url: string) {
            window.open(url, "_blank");
        },
        activeDescription() {
            return this.descriptionData[this.activeDescriptionIndex]
        },
    }
});

</script>

<style lang="scss" scoped>
@import "@/scss/index.scss";

$containerPadding: 40px;

#about-me {
    @include text-cannot-edit;

    width: 100%;
    height: calc(100vh - #{$menuHeight});
    background: $navy;
    position: relative;
    min-height: 580px;

    .container {
        z-index: 1;
        color: white;
        display: flex;
        height: 100%;

        .name-container {
            z-index: 1;
            flex: 6;
            display: flex;
            padding: $containerPadding 0 $containerPadding 80px;
            flex-direction: column;
            justify-content: flex-end;
            align-items: flex-start;

            .name {
                font-family: "Futura", serif;
                font-size: max(7vw, 40px);
                text-transform: uppercase;
                font-weight: 500;
                letter-spacing: 5px;
                text-align: left;
            }

            .line {
                margin: 10px 0;
                width: 100px;
                height: 12px;
                background: $orange;
            }

            .social-media {
                margin: 30px 0;
                display: flex;
                width: 100%;

                .linkedin,
                .github,
                .hackerrank,
                .instagram {
                    padding-right: 15px;
                    width: 30px;
                    cursor: pointer;
                }
            }
        }

        .about-us-container {
            padding: $containerPadding 80px $containerPadding 80px;
            flex: 3;
            display: flex;
            align-items: flex-start;
            justify-content: center;
            flex-direction: column;
            z-index: 1;

            .introduction {
                font-family: "Roboto", serif;
                font-size: 18px;
            }

            .title {
                font-family: "Futura", serif;
                font-size: 40px;
                padding: 30px 0;
                text-align: left;
            }

            .description {
                font-family: "Roboto", serif;
                line-height: 24px;
                text-align: left;
            }

            .description-point {
                margin-top: 15px;
                display: flex;

                .point {
                    margin-right: 10px;
                    width: 10px;
                    height: 10px;
                    background: white;
                    cursor: pointer;
                }

                .point.active {
                    background: $orange;
                }
            }
        }
    }
}

#about-me-photo {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 5px);
    z-index: 1;

    img {
        padding-top: $menuHeight;
        height: calc(100vh - #{$menuHeight});
        min-height: 580px;
    }
}

#about-me {
    .container {
        @media (max-width: 870px) {
            flex-direction: column;
            padding: 20px 0 20px 40px;
        }

        @media (max-width: 500px) {
            padding: 20px 0 20px 20px;
        }

        .name-container {
            @media (max-width: 1200px) {
                padding: $containerPadding 0 $containerPadding $containerPadding;
                flex: 7;
            }

            @media (max-width: 870px) {
                flex: 1;
                padding: 0;
                justify-content: center;

                .name {
                    font-size: max(7vw, 40px);
                }

                .line {
                    width: 60px;
                    height: 5px;
                }

                .social-media {
                    margin: 10px 0;

                    .linkedin,
                    .github,
                    .hackerrank,
                    .instagram {
                        width: 20px;
                    }
                }
            }

            @media (max-width: 400px) {
                .name {
                    font-size: 26px;
                }

                .line {
                    width: 60px;
                    height: 5px;
                }
            }
        }

        .about-us-container {
            @media (max-width: 1200px) {
                padding: $containerPadding $containerPadding $containerPadding 80px;

                .title {
                    font-size: 30px;
                }
            }

            @media (max-width: 950px) {
                padding-left: 10%;

                .introduction {
                    font-size: 16px;
                }

                .title {
                    font-size: 26px;
                    padding: 20px 0;
                }

                .description {
                    font-size: 16px;
                    line-height: 24px;
                }
            }

            @media (max-width: 870px) {
                flex: 2;
                padding: 0;
                justify-content: flex-start;

                .description {
                    width: 50%;
                    line-height: 24px;
                }
            }

            @media (max-width: 550px) {
                flex: 3;

                .title {
                    font-size: 22px;
                    padding: 10px 0;
                }

                .description {
                    font-size: 14px;
                    width: 60%;
                    line-height: 22px;
                }
            }

            @media (max-width: 400px) {
                .description {
                    font-size: 12px;
                    width: 60%;
                    line-height: 18px;
                }
            }
        }
    }
}

#about-me-photo {
    @media (max-width: 870px) {
        text-align: right;
        right: 0;
        transform: none;

        img {
            float: right;
            padding-top: calc(10vh + #{$menuHeight});
            height: calc(90vh - #{$menuHeight});
        }
    }

    @media (max-width: 550px) {
        img {
            float: right;
            object-fit: cover;
            object-position: 65px;
        }
    }

    @media (max-width: 600px) and (min-height: 960px) {
        img {
            float: right;
            object-fit: cover;
            object-position: 65px;
        }
    }

    @media (max-width: 320px) {
        img {
            float: right;
            object-fit: cover;
            width: 100%;
            object-position: 25px;
        }
    }

    @media (max-width: 420px) and (min-height: 640px) {
        img {
            float: right;
            object-fit: cover;
            object-position: 18px;
            width: 100%;
        }
    }

    @media (max-width: 280px) and (min-height: 600px) {
        img {
            float: right;
            object-fit: cover;
            width: 100%;
            object-position: 30px;
        }
    }

    @media (max-height: 640px) {
        bottom: calc(100vh - 639px);
    }
}
</style>