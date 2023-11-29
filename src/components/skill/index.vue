<template>
    <div id="skill">
        <div class="container">
            <h1 class="title">
                Skills
            </h1>
            <div class="skill-types">
                <div class="type"
                     @click="changeType('language')"
                     :class="type == 'language' ? 'active' : ''">
                    Language
                </div>
                <div class="type"
                     @click="changeType('framework')"
                     :class="type == 'framework' ? 'active' : ''">
                    Framework
                </div>
                <div class="type"
                     @click="changeType('database')"
                     :class="type == 'database' ? 'active' : ''">
                    Database
                </div>
                <div class="type"
                     @click="changeType('others')"
                     :class="type == 'others' ? 'active' : ''">
                    Others
                </div>
            </div>

            <div class="skill-type-container">
                <div v-for="(skill, index) in skills[type]" :key="index" class="skills">
                    <img :src="skill.url" :alt="skill.name">
                    <div class="skill-name">
                        {{ skill.name }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import {defineComponent, ref} from "vue";
import skillStaticData from "@/static/skill-data";

export default defineComponent({
    data() {
        return {
            skills: skillStaticData,
            type: "language"
        };
    },
    methods: {
        changeType(type: string) {
            this.type = type
        }
    }
});
</script>

<style lang="scss" scoped>
@import "@/scss/index.scss";

#skill {
    @include text-cannot-edit;

    background: $darkNavy;

    .container {
        padding: 40px 80px;

        .title {
            text-align: left;
            font-family: "Futura", sans-serif;
            color: $white;
            margin: 0 10px 20px;
            font-size: 18px;
            font-weight: 400;
        }

        .skill-types {
            overflow-x: scroll;
            white-space:nowrap;
            -ms-overflow-style: none;
            scrollbar-width: none;
            font-family: "Futura", serif;
            font-size: 22px;
            display: flex;
            color: $navy;

            @media (max-width: 500px) {
                font-size: 18px;
            }

            .type {
                margin: 0 10px;
                cursor: pointer;
            }

            .type.active {
                color: white;
            }
        }

        .skill-types::-webkit-scrollbar {
            display: none;
        }

        .skill-type-container {
            margin: 30px 10px 0;
            display: grid;
            grid-template-columns: repeat(5, 1fr);
            grid-gap: 1em;

            .skills {
                display: flex;
                flex-direction: column;
                align-items: center;
                background: $navy;

                img {
                    margin: 20px 0 10px;
                    width: 40px;
                }

                .skill-name {
                    font-family: "Futura", serif;
                    color: $white;
                    margin-bottom: 20px;
                }
            }
        }

        @media (max-width: 775px) {
            .skill-type-container {
                grid-template-columns: repeat(4, 1fr);
            }
        }

        @media (max-width: 620px) {
            .skill-type-container {
                grid-template-columns: repeat(3, 1fr);
            }
        }

        @media (max-width: 450px) {
            .skill-type-container {
                grid-template-columns: repeat(2, 1fr);
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