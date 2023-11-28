<template>
    <div id="contact-me">
        <div class="container">
            <div class="qoutes">
                <div class="qoutes-container">
                    <div class="title">
                        CONTACT ME 
                    </div>
                    <div class="description">
                        If you interested to collaborate or looking for website, android or ios development services, 
                        please feel free to contact me.
                    </div>
                </div>
            </div>
            <div class="media-social">
                <div class="title">
                    Social media
                </div>
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
            <div class="contact">
                <div class="phone">
                    <fa icon="phone" type="fas"></fa>
                    <span>081 118 140 32</span>
                </div>
                <div class="email">
                    <fa icon="envelope" type="fas"></fa>
                    <span>hansenwu98@gmail.com</span>
                </div>
                <div class="location">
                    <span>Jakarta, Indonesia</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import socialMediaStaticData from "@/static/social-media-data";

export default defineComponent({
  data() {
    return {
      socialMedia: socialMediaStaticData,
    };
  },
  methods: {
    openNewTab(url: string) {
      window.open(url, "_blank");
    }
  }
});
</script>

<style lang="scss" scoped>
@import "@/scss/index.scss";

#contact-me {
  @include text-cannot-edit;
  
  background: $navy;
  font-family: "Futura", serif;

  .container {
    padding: 40px 80px;
    display: flex;

    .qoutes {
        flex: 1;
        color: $white;
        align-items: center;
        text-align: center;
        
        .qoutes-container {
            width: 300px;

            .title {
                text-transform: uppercase;
                margin-bottom: 10px;
            }
        }
    }

    .media-social {
        flex: 1;
        color: $white;

        .title {
            text-align: center;
        }

        .social-media {
            text-align: center;
            display: flex;
            width: 200px;
            margin: 0 auto;
            margin-top: 40px;

            .linkedin,
            .github,
            .hackerrank,
            .instagram {
                margin: 0 auto;
                width: 20px;
            }
        }
    }

    .contact {
        flex: 1;
        display: flex;
        justify-content: center;
        flex-direction: column;
        color: $white;

        .phone {
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 15px;

            svg {
                margin-right: 10px;
                width: 16px;
            }
        }

        .email {
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 15px;

            svg {
                margin-right: 10px;
                width: 16px;
            }
        }

        .location {
            display: flex;
            justify-content: center;
            margin-bottom: 15px;
            
            svg {
                margin-right: 10px;
                width: 16px;
            }
        }
    }
  }

  @media (max-width: 1200px) {
    .container {
      padding: 40px 40px;
    }
  }

  @media (max-width: 950px) {
    .container {
      flex-direction: column;

        .qoutes {
            margin: 0 auto;
        }

        .media-social {
            margin-bottom: 20px;

            .title {
                display: none;
            }
        }
    }
  }

  @media (max-width: 500px) {
    .container {
      padding: 40px 20px;
    }
  }
}
</style>