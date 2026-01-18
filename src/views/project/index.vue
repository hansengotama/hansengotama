<template>
  <div id="project-page">
    <div class="container">
      <header class="page-header">
        <router-link to="/" class="back-link">
          <span class="arrow">←</span> Back to Home
        </router-link>
        <h1 class="title">Technical Works</h1>
        <p class="subtitle">A selection of systems, mobile applications, and digital solutions I have developed.</p>
      </header>

      <div class="projects-grid">
        <div
            class="project-card"
            v-for="(data, index) in portofolioDataList"
            :key="index"
        >
          <div class="image-section">
            <img :src="data.src" :alt="data.name">
            <div class="role-badge" :class="data.role.toLowerCase().replace(/\s+/g, '-')">
              {{ data.role }}
            </div>
          </div>

          <div class="content-section">
            <h2 class="project-title">{{ data.name }}</h2>

            <p class="description-text">{{ data.description }}</p>

            <div class="tag-container">
              <span v-for="tag in data.tags" :key="tag" class="tag">{{ tag }}</span>
            </div>

            <div class="footer-section" v-if="data.links && data.links.length">
              <a
                  v-for="link in data.links"
                  :key="link.url"
                  :href="link.url"
                  target="_blank"
                  class="project-link"
              >
                {{ link.label }}
              </a>
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

const portofolioDataList = computed(() => {
  return portofolioStaticData.value || [];
});
</script>

<style lang="scss" scoped>
@import "@/scss/index.scss";

#project-page {
  background: $darkNavy;
  padding: 100px 20px;
  color: white;
  text-align: left;

  .container {
    max-width: 1200px;
    margin: 0 auto;
  }

  .page-header {
    margin-bottom: 80px;

    .back-link {
      color: $orange;
      text-decoration: none;
      font-size: 14px;
      text-transform: uppercase;
      letter-spacing: 2px;
      font-weight: 500;
      display: flex;
      align-items: center;
      gap: 10px;
      margin-bottom: 25px;
      transition: color 0.3s ease;

      .arrow { transition: transform 0.3s ease; }
      &:hover {
        color: white;
        .arrow { transform: translateX(-5px); }
      }
    }

    .title {
      font-family: "Futura", sans-serif;
      font-size: clamp(32px, 5vw, 48px);
      text-transform: uppercase;
      letter-spacing: 4px;
      margin: 0;
    }

    .subtitle {
      color: rgba(255, 255, 255, 0.5);
      font-size: 18px;
      max-width: 600px;
      margin-top: 20px;
      line-height: 1.6;
    }
  }

  .projects-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 40px 30px;
  }

  .project-card {
    background: rgba(255, 255, 255, 0.02);
    border: 1px solid rgba(255, 255, 255, 0.05);
    border-radius: 16px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    transition: all 0.4s ease;

    &:hover {
      transform: translateY(-10px);
      background: rgba(255, 255, 255, 0.04);
      border-color: rgba($orange, 0.3);

      .image-section img { transform: scale(1.05); opacity: 1; }
    }

    .image-section {
      height: 220px;
      position: relative;
      overflow: hidden;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        opacity: 0.8;
        transition: all 0.6s ease;
      }

      .role-badge {
        position: absolute;
        top: 15px;
        right: 15px;
        background: rgba($darkNavy, 0.8);
        backdrop-filter: blur(4px);
        padding: 6px 12px;
        border-radius: 4px;
        font-size: 11px;
        text-transform: uppercase;
        letter-spacing: 1px;
        color: $orange;
        border: 1px solid rgba($orange, 0.3);
      }

      .role-badge {
        &.solo-developer, &.lead-architect {
          color: $orange !important;
          border-color: $orange !important;
        }
        &.hobbyist {
          color: rgba(255, 255, 255, 0.5) !important;
          border-color: rgba(255, 255, 255, 0.2) !important;
        }
      }
    }

    .content-section {
      padding: 30px;
      display: flex;
      flex-direction: column;
      flex-grow: 1;

      .project-title {
        font-family: "Futura", sans-serif;
        font-size: 20px;
        letter-spacing: 1px;
        margin: 0 0 15px;
        color: white;
      }

      .description-text {
        font-size: 14px;
        line-height: 1.6;
        color: rgba(255, 255, 255, 0.7);
        margin-bottom: 25px;
        flex-grow: 1;
      }

      .tag-container {
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
        margin-bottom: 25px;

        .tag {
          font-size: 11px;
          background: rgba(255, 255, 255, 0.05);
          padding: 4px 10px;
          border-radius: 4px;
          color: rgba(255, 255, 255, 0.8);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
      }

      .footer-section {
        border-top: 1px solid rgba(255, 255, 255, 0.1);
        padding-top: 20px;

        .project-link {
          color: $orange;
          text-decoration: none;
          font-size: 14px;
          font-weight: 600;
          display: inline-flex;
          align-items: center;
          gap: 5px;

          &:hover { text-decoration: underline; }
        }
      }
    }
  }

  @media (max-width: 1100px) {
    .projects-grid { grid-template-columns: repeat(2, 1fr); }
  }

  @media (max-width: 700px) {
    .projects-grid { grid-template-columns: 1fr; }
    .page-header .title { font-size: 32px; }
  }
}
</style>