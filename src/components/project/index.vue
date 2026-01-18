<template>
  <div id="project">
    <div class="container">
      <header class="header">
        <span class="label">- My Works</span>
        <h2 class="section-title">Projects</h2>
        <p class="subtitle">My technical experiments and legacy works.</p>
      </header>

      <div class="projects-grid">
        <div
            v-for="(data, index) in allProjects"
            :key="index"
            class="project-card"
        >
          <div class="image-section">
            <img :src="data.src" :alt="data.name" loading="lazy" />
            <div class="role-badge" :class="data.role.toLowerCase().replace(/\s+/g, '-')">
              {{ data.role }}
            </div>
          </div>

          <div class="content-section">
            <h3 class="project-title">{{ data.name }}</h3>
            <p class="description-text">{{ data.description }}</p>

            <div class="tag-container">
              <span v-for="tag in data.tags" :key="tag" class="tag">
                {{ tag }}
              </span>
            </div>

            <div class="footer-section" v-if="data.links?.length">
              <a v-for="link in data.links" :key="link.url" :href="link.url" target="_blank" class="project-link">
                {{ link.label }} →
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
import projectStaticData from "@/static/project-data";

// Ensure the source matches your static file variable
const allProjects = computed(() => projectStaticData.value || []);
</script>

<style lang="scss" scoped>
@import "@/scss/index.scss";

#project {
  background: $darkNavy;
  padding: 20px 0 100px;
  color: white;

  .container {
    max-width: 1000px;
    margin: 0 auto;
    padding: 0 24px;
  }

  .header {
    margin-bottom: 40px;
    .label {
      color: $orange;
      font-size: 13px;
      font-family: monospace;
      letter-spacing: 2px;
    }
    .section-title { font-family: "Futura", sans-serif; font-size: 26px; text-transform: uppercase; margin-top: 5px; }
    .subtitle {
      color: rgba(255, 255, 255, 0.4);
      font-size: 15px;
      margin-top: 8px;
    }
  }

  .projects-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 25px; // Slightly tighter gap for compactness

    @media (max-width: 1000px) { grid-template-columns: repeat(2, 1fr); }
    @media (max-width: 650px) { grid-template-columns: 1fr; }
  }

  .project-card {
    background: rgba(255, 255, 255, 0.02);
    border: 1px solid rgba(255, 255, 255, 0.05);
    border-radius: 12px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

    &:hover {
      transform: translateY(-8px);
      border-color: rgba($orange, 0.3);
      background: rgba(255, 255, 255, 0.04);
      .image-section img { opacity: 1; transform: scale(1.05); }
    }

    .image-section {
      height: 160px; // Compact image height
      position: relative;
      overflow: hidden;
      img { width: 100%; height: 100%; object-fit: cover; opacity: 0.7; transition: 0.6s ease; }

      .role-badge {
        position: absolute; top: 12px; right: 12px;
        background: rgba($darkNavy, 0.85);
        padding: 4px 10px; border-radius: 4px;
        font-size: 9px; text-transform: uppercase; color: $orange;
        border: 1px solid rgba($orange, 0.2);
        z-index: 2;
      }
    }

    .content-section {
      padding: 20px;
      display: flex; flex-direction: column; flex-grow: 1;

      .project-title { font-family: "Futura", sans-serif; font-size: 17px; margin-bottom: 10px; }

      .description-text {
        font-size: 13px; line-height: 1.5; color: rgba(255, 255, 255, 0.5);
        margin-bottom: 15px; flex-grow: 1;
      }

      .tag-container {
        display: flex; flex-wrap: wrap; gap: 6px; margin-bottom: 20px;
        .tag {
          font-family: monospace; font-size: 10px;
          background: rgba($orange, 0.05); // Subtle orange tint
          padding: 2px 8px; border-radius: 3px;
          color: $orange;
          border: 1px solid rgba($orange, 0.1);
        }
      }

      .footer-section {
        border-top: 1px solid rgba(255, 255, 255, 0.05);
        padding-top: 15px;
        .project-link {
          color: $orange;
          text-decoration: none;
          font-size: 12px;
          font-weight: 700;
          text-transform: uppercase;
          &:hover { text-decoration: underline; }
        }
      }
    }
  }
}
</style>