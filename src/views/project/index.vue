<template>
  <div id="project-page">
    <div class="container">
      <header class="page-header">
        <router-link to="/" class="back-link">← Back to Home</router-link>
        <h1 class="title">My Projects</h1>
        <p class="subtitle">A comprehensive gallery of systems and applications I've engineered.</p>
      </header>

      <div class="projects-grid">
        <div
            class="project-card"
            v-for="(data, index) in portofolioDataList"
            :key="index"
        >
          <div class="image-section">
            <img :src="data.src" :alt="data.name">
            <div class="image-overlay"></div>
          </div>

          <div class="content-section">
            <h2 class="project-title">{{ data.name }}</h2>
            <div class="divider"></div>
            <div class="project-details">
              <div class="description-text" v-html="data.description"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import portofolioStaticData from "@/static/portofolio-data";

// Unwrap the ref data safely
const portofolioDataList = computed(() => {
  return portofolioStaticData.value || [];
});
</script>

<style lang="scss" scoped>
@import "@/scss/index.scss";

#project-page {
  text-align: left;
  min-height: 100vh;
  background: $darkNavy;
  padding: 80px 20px;
  color: white;

  .container {
    max-width: 1200px;
    margin: 0 auto;
  }

  .page-header {
    margin-bottom: 60px;
    text-align: left;

    .back-link {
      color: $orange;
      text-decoration: none;
      font-family: "Roboto", sans-serif;
      font-size: 14px;
      text-transform: uppercase;
      letter-spacing: 1px;
      display: inline-block;
      margin-bottom: 20px;
      transition: transform 0.3s ease;

      &:hover {
        transform: translateX(-5px);
      }
    }

    .title {
      font-family: "Futura", sans-serif;
      font-size: 42px;
      text-transform: uppercase;
      letter-spacing: 2px;
      margin: 0;
      line-height: 1;
    }

    .subtitle {
      font-family: "Roboto", sans-serif;
      color: rgba(255, 255, 255, 0.6);
      margin-top: 15px;
      font-size: 16px;
      font-weight: 300;
    }
  }

  .projects-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
  }

  .project-card {
    background: lighten($darkNavy, 3%);
    border-radius: 12px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    border: 1px solid rgba(255, 255, 255, 0.05);
    transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);

    &:hover {
      transform: translateY(-10px);
      box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);

      .image-section img {
        transform: scale(1.05);
      }
    }

    .image-section {
      height: 200px;
      overflow: hidden;
      position: relative;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 0.6s ease;
        opacity: 0.8;
      }

      .image-overlay {
        position: absolute;
        inset: 0;
        background: linear-gradient(to bottom, transparent, rgba($darkNavy, 0.3));
      }
    }

    .content-section {
      padding: 25px;
      flex-grow: 1;
      display: flex;
      flex-direction: column;

      .project-title {
        font-family: "Futura", sans-serif;
        color: $orange;
        font-size: 18px;
        text-transform: uppercase;
        letter-spacing: 1px;
        margin: 0 0 15px;
      }

      .divider {
        width: 40px;
        height: 2px;
        background: $orange;
        margin-bottom: 20px;
      }

      .description-text {
        font-family: "Roboto", sans-serif;
        font-size: 14px;
        line-height: 1.6;
        color: rgba(255, 255, 255, 0.8);

        /* Deep selector to style the HTML tags from your data */
        ::v-deep(p) { margin: 0; }
        ::v-deep(ul) {
          list-style: none;
          padding-left: 0 !important;
          li {
            position: relative;
            padding-left: 15px;
            margin-bottom: 8px;
            &::before {
              content: "•";
              color: $orange;
              position: absolute;
              left: 0;
            }
          }
        }
        ::v-deep(a) {
          color: $orange !important;
          text-decoration: underline;
          font-weight: 500;
        }
      }
    }
  }

  /* Responsive Design */
  @media (max-width: 1100px) {
    .projects-grid { grid-template-columns: repeat(2, 1fr); }
  }

  @media (max-width: 700px) {
    padding: 60px 20px;
    .page-header .title { font-size: 32px; }
    .projects-grid { grid-template-columns: 1fr; }

    .project-card {
      max-width: 450px;
      margin: 0 auto;
    }
  }
}
</style>