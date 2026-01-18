<template>
  <div id="portofolio">
    <div class="container">
      <header class="header">
        <span class="label">- Works</span>
        <h2 class="section-title">Featured Projects</h2>
      </header>

      <div class="projects-grid">
        <div
            v-for="(data, index) in limitedProjects"
            :key="index"
            class="project-card"
        >
          <div class="image-wrapper">
            <img :src="data.src" :alt="data.name" loading="lazy" />
            <div class="overlay">
              <router-link :to="{ name: 'Project' }" class="view-link">
                View Details
              </router-link>
            </div>
          </div>
          <div class="project-info">
            <h3>{{ data.name }}</h3>
          </div>
        </div>

        <div class="cta-card">
          <div class="cta-content">
            <h3>More Projects</h3>
            <p>Browse through my previous works and technical experiments.</p>
            <router-link :to="{ name: 'Project' }">
              <button class="primary-btn">View All</button>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from "vue";
import portofolioStaticData from "@/static/portofolio-data";

const windowWidth = ref(typeof window !== 'undefined' ? window.innerWidth : 1200);

const updateWidth = () => {
  windowWidth.value = window.innerWidth;
};

onMounted(() => window.addEventListener('resize', updateWidth));
onUnmounted(() => window.removeEventListener('resize', updateWidth));

const limitedProjects = computed(() => {
  const dataArray = portofolioStaticData.value || [];
  const featured = dataArray.filter((item: any) => item.showInHomePage);

  // Logic:
  // Desktop (>1000px): 3 columns -> Show 5 projects + 1 CTA = 6 total (2 rows)
  // Tablet (600px-1000px): 2 columns -> Show 3 projects + 1 CTA = 4 total (2 rows)
  // Mobile (<600px): 1 column -> Show 3 projects + 1 CTA = 4 total (4 rows)

  let limit = 5;
  if (windowWidth.value <= 1000 && windowWidth.value > 600) {
    limit = 3;
  } else if (windowWidth.value <= 600) {
    limit = 3;
  }

  return featured.slice(0, limit);
});
</script>

<style lang="scss" scoped>
@import "@/scss/index.scss";

#portofolio {
  background: $darkNavy;
  padding: 20px 0 100px;
  color: white;

  .container {
    max-width: 1000px;
    margin: 0 auto;
    padding: 0 24px;
  }

  .header {
    margin-bottom: 50px;
    .label { color: $orange; font-family: monospace; font-size: 13px; letter-spacing: 2px; }

    .section-title {
      font-family: "Futura", sans-serif;
      font-size: 26px;
      margin-top: 5px;
      text-transform: uppercase;
    }
  }

  .projects-grid {
    display: grid;
    // Set explicit columns
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;

    @media (max-width: 1000px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 600px) {
      grid-template-columns: 1fr;
    }
  }

  .project-card {
    background: lighten($darkNavy, 2%);
    border-radius: 12px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    transition: transform 0.3s ease;

    &:hover {
      transform: translateY(-5px);
      .overlay { opacity: 1; }
    }

    .image-wrapper {
      position: relative;
      aspect-ratio: 16 / 9;
      background: #000;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        opacity: 0.7;
      }
    }

    .project-info {
      padding: 15px;
      h3 {
        font-size: 16px;
        color: $orange;
        margin: 0;
        text-transform: uppercase;
        font-family: "Futura", sans-serif;
      }
    }
  }

  .overlay {
    position: absolute;
    inset: 0;
    background: rgba($navy, 0.4);
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0;
    transition: opacity 0.3s ease;

    .view-link {
      color: white;
      border: 1px solid white;
      padding: 8px 16px;
      text-decoration: none;
      font-size: 13px;
      border-radius: 4px;
      &:hover { background: white; color: $navy; }
    }
  }

  .cta-card {
    background: rgba($orange, 0.05);
    border: 2px dashed rgba($orange, 0.2);
    border-radius: 12px;
    display: flex;
    text-align: center;
    padding: 30px;
    align-items: center;
    justify-content: center;

    .cta-content {
      h3 { font-family: "Futura", sans-serif; color: white; margin-bottom: 10px; }
      p { font-size: 13px; color: rgba(255,255,255,0.6); margin-bottom: 20px; }
    }
  }

  .primary-btn {
    background: $orange;
    color: $navy;
    border: none;
    padding: 10px 24px;
    font-weight: 700;
    border-radius: 4px;
    cursor: pointer;
  }
}
</style>