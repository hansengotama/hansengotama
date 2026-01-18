<template>
  <div id="portofolio">
    <div class="container">
      <header class="header">
        <span class="label">- Works</span>
        <h2 class="section-title">Featured Projects</h2>
      </header>

      <div class="projects-grid">
        <div
            v-for="(data, index) in featuredProjects"
            :key="index"
            class="project-card"
        >
          <div class="image-wrapper">
            <img :src="data.src" :alt="data.title || 'Project Screenshot'" loading="lazy" />
            <div class="overlay">
              <router-link :to="{ name: 'Project' }" class="view-link">
                View Details
              </router-link>
            </div>
          </div>
        </div>

        <div class="cta-card">
          <div class="cta-content">
            <h3>More Projects</h3>
            <p>A collection of backend systems, mobile apps, and web platforms.</p>
            <router-link :to="{ name: 'Project' }">
              <button class="primary-btn">View All Works</button>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import portofolioStaticData from "@/static/portofolio-data";

// FIX: Safely unwrap the .value since the data is a ref
const featuredProjects = computed(() => {
  const dataArray = portofolioStaticData.value || [];
  return dataArray.filter((item: any) => item.showInHomePage).slice(0, 3);
});
</script>

<style lang="scss" scoped>
@import "@/scss/index.scss";

#portofolio {
  background: $darkNavy;
  padding: 80px 0;
  color: white;

  .container {
    max-width: 1100px;
    margin: 0 auto;
    padding: 0 24px;
  }

  .header {
    margin-bottom: 40px;
    text-align: left;

    .label {
      color: $orange;
      font-family: "Roboto", sans-serif;
      text-transform: uppercase;
      letter-spacing: 2px;
      font-size: 13px;
      font-weight: 500;
    }

    .section-title {
      font-family: "Futura", sans-serif;
      font-size: 32px;
      margin-top: 8px;
      text-transform: uppercase;
      letter-spacing: 1px;
    }
  }

  .projects-grid {
    display: grid;
    // Desktop: 2 or 3 columns, Mobile: 1 column
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 24px;
  }

  .project-card {
    position: relative;
    border-radius: 8px;
    overflow: hidden;
    background: rgba(255, 255, 255, 0.03);
    aspect-ratio: 16 / 10;
    transition: all 0.4s ease;
    border: 1px solid rgba(255, 255, 255, 0.05);

    &:hover {
      transform: translateY(-8px);
      border-color: rgba($orange, 0.3);
      .overlay { opacity: 1; }
      img { transform: scale(1.05); opacity: 0.4; }
    }

    .image-wrapper {
      width: 100%;
      height: 100%;
      position: relative;
      background: #000;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: all 0.6s ease;
        opacity: 0.7; // Professional dimmed look
      }
    }

    .overlay {
      position: absolute;
      inset: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      opacity: 0;
      transition: opacity 0.3s ease;

      .view-link {
        color: white;
        font-family: "Roboto", sans-serif;
        text-decoration: none;
        font-size: 14px;
        font-weight: 500;
        border: 1px solid white;
        padding: 8px 16px;
        border-radius: 4px;
        transition: all 0.3s;

        &:hover {
          background: white;
          color: $navy;
        }
      }
    }
  }

  .cta-card {
    background: rgba(255, 255, 255, 0.02);
    border: 1px dashed rgba(255, 255, 255, 0.1);
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 30px;
    text-align: center;
    transition: border-color 0.3s;

    &:hover {
      border-color: $orange;
    }

    .cta-content {
      h3 {
        font-family: "Futura", sans-serif;
        font-size: 20px;
        margin-bottom: 8px;
        text-transform: uppercase;
      }
      p {
        font-family: "Roboto", sans-serif;
        font-size: 13px;
        color: rgba(255, 255, 255, 0.5);
        margin-bottom: 20px;
        line-height: 1.5;
      }
    }
  }

  .primary-btn {
    background: $orange;
    color: $navy;
    border: none;
    padding: 10px 24px;
    font-family: "Roboto", sans-serif;
    font-weight: 600;
    font-size: 14px;
    border-radius: 4px;
    cursor: pointer;
    transition: transform 0.2s;

    &:hover {
      transform: scale(1.05);
    }
  }

  /* Responsive Adjustments */
  @media (max-width: 600px) {
    padding: 60px 0;

    .header .section-title {
      font-size: 26px;
    }

    .projects-grid {
      grid-template-columns: 1fr;
    }
  }
}
</style>