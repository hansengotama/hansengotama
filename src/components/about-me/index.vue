<template>
  <div id="about-me">
    <div class="container">
      <div class="header-section">
        <div class="title-group">
          <h1>Hansen Wu</h1>
          <p class="role">Senior Backend Engineer & Tech Lead</p>
        </div>

        <div class="actions-group">
          <div class="social-links">
            <div
                v-for="(sm, index) in socialMediaList"
                :key="index"
                class="icon-item"
                @click="openNewTab(sm.url)"
            >
              <fa :icon="sm.icon" type="fab"></fa>
            </div>
          </div>

          <button class="cv-button" @click="openNewTab('/cv')">
            View CV
          </button>
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
  if (url) {
    window.open(url, "_blank", "noopener,noreferrer");
  }
};
</script>

<style lang="scss" scoped>
@import "@/scss/index.scss";

#about-me {
  text-align: left;
  width: 100% !important;
  background: $navy;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 80px 20px;
  box-sizing: border-box;

  .container {
    max-width: 1000px;
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  .header-section {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
    margin-bottom: 5px;
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
      margin: 8px 0 0 0;
      text-transform: uppercase;
      letter-spacing: 1.2px;
      font-weight: 500;
    }

    .actions-group {
      display: flex;
      align-items: center;
      gap: 24px;

      .social-links {
        display: flex;
        gap: 18px;
        align-items: center;

        .icon-item {
          display: inline-flex;
          font-size: 22px;
          cursor: pointer;
          transition: all 0.3s ease;
          color: rgba(255, 255, 255, 0.7);

          &:hover {
            color: $orange;
            transform: translateY(-2px);
          }

          svg {
            display: block;
            width: 1em;
            height: 1em;
          }
        }
      }

      .cv-button {
        background: transparent;
        border: 1px solid rgba($orange, 0.5);
        color: $orange;
        padding: 8px 16px;
        font-family: "Roboto", sans-serif;
        font-size: 11px;
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 1px;
        border-radius: 4px;
        cursor: pointer;
        transition: all 0.3s ease;

        &:hover {
          background: rgba($orange, 0.1);
          border-color: $orange;
          transform: translateY(-2px);
        }
      }
    }
  }

  .divider {
    width: 100%;
    height: 1px;
    background: rgba(255, 255, 255, 0.1);
    margin: 25px 0 35px 0;
  }

  .bio-section {
    p {
      font-family: "Roboto", sans-serif;
      font-size: 16px;
      line-height: 1.8;
      margin-bottom: 20px;
      color: rgba(255, 255, 255, 0.7);
      font-weight: 300;
      max-width: 900px;
    }
  }

  /* --- RESPONSIVE ADJUSTMENTS --- */
  @media screen and (max-width: 768px) {
    #about-me {
      padding: 60px 24px;
    }

    .header-section {
      flex-direction: column !important;
      align-items: flex-start !important;
      gap: 25px;

      .actions-group {
        width: 100%;
        justify-content: space-between;
        flex-direction: row-reverse;
      }
    }
  }
}
</style>