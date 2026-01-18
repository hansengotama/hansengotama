<template>
  <div id="skill">
    <div class="container">
      <header class="section-header">
        <span class="label">- Technical Stack</span>
        <h2 class="title">Expertise & Tools</h2>
      </header>

      <div class="categories-container">
        <div v-for="(items, category) in skills" :key="category" class="skill-group">
          <h3 class="category-name">{{ category }}</h3>

          <div class="pill-cloud">
            <div
                v-for="skill in items"
                :key="skill.name"
                class="tech-pill"
                :class="{ 'no-icon': !skill.url || skill.url === '' }"
            >
              <div v-if="skill.url && skill.url !== ''" class="icon-box">
                <img :src="skill.url" :alt="skill.name">
              </div>
              <span class="skill-text">{{ skill.name }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import skillStaticData from "@/static/skill-data";

const skills = ref(skillStaticData);
</script>

<style lang="scss" scoped>
@import "@/scss/index.scss";

#skill {
  background: $darkNavy;
  padding: 80px 0;
  color: white;
  @include text-cannot-edit;

  .container {
    max-width: 1000px;
    margin: 0 auto;
    padding: 0 24px;
  }

  .section-header {
    margin-bottom: 40px;
    .label { color: $orange; font-family: monospace; font-size: 13px; letter-spacing: 2px; }
    .title { font-family: "Futura", sans-serif; font-size: 26px; text-transform: uppercase; margin-top: 5px; }
  }

  .categories-container {
    display: flex;
    flex-direction: column;
    gap: 35px;
  }

  .skill-group {
    .category-name {
      font-family: "Futura", sans-serif;
      font-size: 14px;
      color: rgba(255, 255, 255, 0.3);
      text-transform: uppercase;
      letter-spacing: 1.5px;
      margin-bottom: 15px;
      display: flex;
      align-items: center;

      &::after {
        content: "";
        height: 1px;
        flex: 1;
        background: rgba(255, 255, 255, 0.05);
        margin-left: 15px;
      }
    }
  }

  .pill-cloud {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
  }

  .tech-pill {
    display: flex;
    align-items: center;
    background: rgba(255, 255, 255, 0.03);
    border: 1px solid rgba(255, 255, 255, 0.08);
    padding: 6px 14px 6px 8px; // Asymmetric padding for icon look
    border-radius: 6px;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    cursor: default;

    &.no-icon {
      padding: 6px 14px; // Symmetrical padding when no icon
    }

    .icon-box {
      width: 20px;
      height: 20px;
      margin-right: 10px;
      display: flex;
      align-items: center;
      justify-content: center;

      img {
        max-width: 100%;
        max-height: 100%;
        object-fit: contain;
        filter: grayscale(100%) brightness(1.2);
        opacity: 0.7;
        transition: all 0.3s ease;
      }
    }

    .skill-text {
      font-size: 13px;
      font-weight: 500;
      color: rgba(255, 255, 255, 0.7);
      transition: all 0.3s ease;
    }

    &:hover {
      background: rgba(255, 255, 255, 0.07);
      border-color: rgba($orange, 0.4);
      transform: translateY(-2px);

      .icon-box img {
        filter: grayscale(0%) brightness(1);
        opacity: 1;
      }

      .skill-text {
        color: white;
      }
    }
  }
}
</style>