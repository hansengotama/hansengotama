<template>
  <div id="about-me">
    <div class="container">
      <div class="header-section">
        <div class="title-group">
          <h1>Hansen Wu</h1>
          <p class="role">Senior Backend Engineer & Tech Lead</p>
        </div>

        <div class="social-links">
          <div
              v-for="(sm, index) in socialMediaList"
              :key="index"
              class="icon-item"
          >
            <fa
                :icon="sm.icon"
                type="fab"
                @click="openNewTab(sm.url)"
            ></fa>
          </div>
        </div>
      </div>

      <div class="divider"></div>

      <div class="bio-section">
        <p>
          Senior backend-focused engineer with 7+ years of experience building and
          maintaining systems across backend, mobile, and web platforms.
          Experienced in leading teams, defining technical direction, and
          removing blockers to ensure high-quality delivery.
        </p>
        <p>
          Strong believer in scalable system design, clean architecture, and
          effective engineering processes to drive business outcomes. Passionate
          about solving complex problems, understanding the why behind systems,
          and building solutions that create meaningful impact.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import socialMediaData from "@/static/social-media-data";

const socialMediaList = computed(() => {
  return socialMediaData.value || [];
});

const openNewTab = (url: string) => {
  if (url) window.open(url, "_blank");
};
</script>

<style lang="scss" scoped>
@import "@/scss/index.scss";

#about-me {
  text-align: left;
  width: 100% !important;
  min-height: 60vh;
  background: $navy;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 80px 20px;
  box-sizing: border-box;

  .container {
    max-width: 720px;
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  .header-section {
    display: flex;
    flex-direction: row; // Desktop default
    justify-content: space-between;
    align-items: flex-end;
    margin-bottom: 15px;
    width: 100%;

    h1 {
      font-family: "Futura", sans-serif;
      font-size: 32px;
      margin: 0;
      text-transform: uppercase;
      letter-spacing: 1.5px;
      line-height: 1.1;
    }

    .role {
      font-family: "Roboto", sans-serif;
      font-size: 14px;
      color: $orange;
      margin: 10px 0 0 0;
      text-transform: uppercase;
      letter-spacing: 1.2px;
      font-weight: 500;
    }

    .social-links {
      display: flex;
      gap: 20px;
      align-items: center;

      .icon-item {
        display: inline-flex;
        font-size: 24px;
        cursor: pointer;
        transition: color 0.3s ease;

        &:hover {
          color: $orange;
        }

        svg {
          display: block;
          width: 1em;
          height: 1em;
        }
      }
    }
  }

  .divider {
    width: 100%;
    height: 1px;
    background: rgba(255, 255, 255, 0.15);
    margin: 20px 0 30px 0;
  }

  .bio-section {
    p {
      font-family: "Roboto", sans-serif;
      font-size: 16px;
      line-height: 1.8;
      margin-bottom: 20px;
      color: rgba(255, 255, 255, 0.85);
      font-weight: 300;
    }
  }

  /* --- FORCED RESPONSIVE RULES --- */

  @media screen and (max-width: 700px) {
    #about-me {
      padding: 40px 20px !important;
      height: auto !important; // Allow container to grow with content
    }

    .header-section {
      flex-direction: column !important; // Force stack
      align-items: flex-start !important;
      gap: 20px !important;

      h1 {
        font-size: 26px !important;
      }
    }

    .social-links {
      justify-content: flex-start !important;
      width: 100% !important;
    }

    .bio-section p {
      font-size: 15px !important;
    }
  }
}
</style>