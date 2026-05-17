<template>
  <div id="about-me">
    <div class="container">
      <p class="greeting">Hello, I'm</p>
      <h1>Hansen Wu</h1>
      <p class="role">Senior Software Engineer</p>

      <div class="divider"></div>

      <div class="bio">
        <p>
          Senior backend-focused engineer with 7+ years of experience building and
          maintaining systems across backend, mobile, and web platforms.
          Experienced in leading teams, defining technical direction, and
          removing blockers to ensure high-quality delivery.
        </p>
        <p>
          Strong believer in scalable system design, clean architecture, and
          effective engineering processes to drive business outcomes.
        </p>
      </div>

      <div class="actions">
        <div class="social-links">
          <button
            v-for="(sm, index) in socialMediaList"
            :key="index"
            class="icon-item"
            @click="openNewTab(sm.url)"
            :aria-label="sm.name"
          >
            <fa :icon="sm.icon" type="fab"></fa>
          </button>
        </div>
        <button class="cv-button" @click="openNewTab('/cv')">View CV</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import socialMediaData from "@/static/social-media-data";

const socialMediaList = computed(() => socialMediaData.value || []);

const openNewTab = (url: string) => {
  if (url) window.open(url, "_blank", "noopener,noreferrer");
};
</script>

<style lang="scss" scoped>
@import "@/scss/index.scss";


#about-me {
  background: $navy;
  color: $white;
  padding: 120px 20px 70px;
  box-sizing: border-box;
  @include text-cannot-edit;

  .container {
    max-width: 1000px;
    margin: 0 auto;
    width: 100%;
  }

  .greeting {
      font-family: "Roboto", sans-serif;
      font-size: 14px;
      color: rgba($white, 0.65);
      letter-spacing: 2px;
      text-transform: uppercase;
      margin-bottom: 10px;
    }

    h1 {
      font-family: "Futura", sans-serif;
      font-size: clamp(28px, 5vw, 44px);
      text-transform: uppercase;
      letter-spacing: 2px;
      line-height: 1.1;
      margin: 0;
    }

    .role {
      font-family: "Roboto", sans-serif;
      font-size: 13px;
      color: $orange;
      margin-top: 10px;
      text-transform: uppercase;
      letter-spacing: 2px;
      font-weight: 500;
    }

    .divider {
      width: 40px;
      height: 2px;
      background: $orange;
      margin: 28px 0;
      border-radius: 2px;
    }

    .bio {
      p {
        font-family: "Roboto", sans-serif;
        font-size: 15px;
        line-height: 1.85;
        color: rgba($white, 0.62);
        font-weight: 300;
        margin-bottom: 16px;
        max-width: 700px;

        &:last-child { margin-bottom: 0; }
      }
    }

    .actions {
      display: flex;
      align-items: center;
      gap: 28px;
      margin-top: 36px;

      .social-links {
        display: flex;
        gap: 20px;
        align-items: center;

        .icon-item {
          display: inline-flex;
          font-size: 21px;
          cursor: pointer;
          color: rgba($white, 0.5);
          background: none;
          border: none;
          padding: 0;
          transition: color 0.25s ease, transform 0.25s ease;

          &:hover {
            color: $orange;
            transform: translateY(-3px);
          }

          &:focus-visible {
            outline: 2px solid $orange;
            outline-offset: 4px;
            border-radius: 2px;
          }

          svg { display: block; width: 1em; height: 1em; }
        }
      }

      .cv-button {
        background: transparent;
        border: 1px solid rgba($orange, 0.5);
        color: $orange;
        padding: 9px 20px;
        font-family: "Roboto", sans-serif;
        font-size: 11px;
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 1px;
        border-radius: 4px;
        cursor: pointer;
        transition: background 0.25s ease, border-color 0.25s ease;

        &:hover {
          background: rgba($orange, 0.1);
          border-color: $orange;
        }

        &:focus-visible {
          outline: 2px solid $orange;
          outline-offset: 2px;
        }
      }
    }

  @media (max-width: 768px) {
    padding: 100px 20px 60px;
  }
}
</style>
