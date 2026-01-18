<template>
  <div id="portofolio">
    <div class="container">
      <header class="header">
        <span class="label">- My Works</span>
        <h2 class="section-title">Projects</h2>
      </header>

      <div class="projects-grid">
        <div
            v-for="(data, index) in limitedProjects"
            :key="index"
            class="project-card"
        >
          <div class="image-section">
            <img :src="data.src" :alt="data.name" loading="lazy" />
            <div class="role-badge" :class="data.role.toLowerCase().replace(/\s+/g, '-')">
              {{ data.role }}
            </div>
            <div class="overlay">
              <router-link :to="{ name: 'Project' }" class="view-link">
                View Details
              </router-link>
            </div>
          </div>

          <div class="content-section">
            <h3 class="project-title">{{ data.name }}</h3>

            <div class="tag-container">
              <span v-for="tag in data.tags.slice(0, 3)" :key="tag" class="tag">
                {{ tag }}
              </span>
            </div>

            <div class="footer-section">
              <router-link :to="{ name: 'Project' }" class="project-link">
                Explore →
              </router-link>
            </div>
          </div>
        </div>

        <div class="cta-card">
          <div class="cta-content">
            <div class="cta-icon">+</div>
            <h3>More Projects</h3>
            <p>Browse through my technical experiments and legacy works.</p>
            <router-link :to="{ name: 'Project' }" class="view-all-link">
              View All Works
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
const updateWidth = () => { windowWidth.value = window.innerWidth; };

onMounted(() => window.addEventListener('resize', updateWidth));
onUnmounted(() => window.removeEventListener('resize', updateWidth));

const limitedProjects = computed(() => {
  const dataArray = portofolioStaticData.value || [];
  const featured = dataArray.filter((item: any) => item.showInHomePage);
  // 3 columns on desktop: 5 projects + 1 CTA = 6 items
  let limit = windowWidth.value <= 1000 ? 3 : 5;
  return featured.slice(0, limit);
});
</script>

<style lang="scss" scoped>
@import "@/scss/index.scss";

#portofolio {
  background: $darkNavy;
  padding: 20px 0 100px;
  color: white;
  @include text-cannot-edit;

  .container {
    max-width: 1000px;
    margin: 0 auto;
    padding: 0 24px;
  }

  .header {
    margin-bottom: 60px;
    .label {
      color: $orange;
      font-size: 13px;
      font-family: monospace;
      letter-spacing: 2px;
    }
    .section-title { font-family: "Futura", sans-serif; font-size: 26px; text-transform: uppercase; margin-top: 5px; }
  }

  .projects-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 40px 30px;

    @media (max-width: 1100px) { grid-template-columns: repeat(2, 1fr); }
    @media (max-width: 700px) { grid-template-columns: 1fr; }
  }

  .project-card {
    text-align: left;
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
      .overlay { opacity: 1; }
    }

    .image-section {
      height: 200px;
      position: relative;
      overflow: hidden;

      img {
        width: 100%; height: 100%; object-fit: cover; opacity: 0.8;
        transition: all 0.6s ease;
      }

      .role-badge {
        position: absolute; top: 15px; right: 15px;
        background: rgba($darkNavy, 0.8);
        backdrop-filter: blur(4px);
        padding: 6px 12px; border-radius: 4px;
        font-size: 10px; text-transform: uppercase; letter-spacing: 1px;
        color: $orange; border: 1px solid rgba($orange, 0.3);
        z-index: 2;
      }

      .overlay {
        position: absolute; inset: 0; background: rgba($navy, 0.6);
        display: flex; justify-content: center; align-items: center;
        opacity: 0; transition: opacity 0.3s ease;
        .view-link {
          color: white; border: 1px solid white; padding: 8px 16px;
          text-decoration: none; font-size: 12px; border-radius: 4px;
          &:hover { background: white; color: $navy; }
        }
      }
    }

    .content-section {
      padding: 25px;
      display: flex; flex-direction: column;

      .project-title {
        font-family: "Futura", sans-serif;
        font-size: 19px; margin: 0 0 15px; color: white;
      }

      .tag-container {
        display: flex; flex-wrap: wrap; gap: 6px; margin-bottom: 20px;
        .tag {
          font-size: 10px; background: rgba(255, 255, 255, 0.05);
          padding: 3px 8px; border-radius: 4px;
          color: rgba(255, 255, 255, 0.6);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
      }

      .footer-section {
        border-top: 1px solid rgba(255, 255, 255, 0.08);
        padding-top: 15px;
        .project-link {
          color: $orange; text-decoration: none; font-size: 13px; font-weight: 600;
          &:hover { text-decoration: underline; }
        }
      }
    }
  }

  .cta-card {
    background: rgba($orange, 0.03);
    border: 1px dashed rgba($orange, 0.2);
    border-radius: 16px;
    padding: 30px;
    display: flex; flex-direction: column; justify-content: center;
    align-items: center; text-align: center;
    transition: all 0.3s ease;

    &:hover { background: rgba($orange, 0.05); border-style: solid; border-color: $orange; }

    .cta-icon { font-size: 32px; color: $orange; margin-bottom: 10px; }
    h3 { font-family: "Futura", sans-serif; font-size: 20px; margin-bottom: 8px; }
    p { font-size: 13px; color: rgba(255,255,255,0.4); margin-bottom: 20px; line-height: 1.5; }

    .view-all-link {
      background: $orange; color: $navy; text-decoration: none;
      font-size: 12px; font-weight: 700; padding: 10px 20px;
      border-radius: 4px; text-transform: uppercase;
    }
  }
}
</style>