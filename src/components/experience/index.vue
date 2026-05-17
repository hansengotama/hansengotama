<template>
  <div id="experience">
    <div class="container">
      <header class="section-header">
        <span class="label">- Career</span>
        <h2 class="title">Experience</h2>
      </header>

      <div class="timeline">
        <div
          v-for="(work, wIdx) in works"
          :key="wIdx"
          class="company-block"
        >
          <div class="company-line">
            <span class="company-name">{{ work.name }}</span>
            <span class="company-bar"></span>
          </div>

          <div class="roles">
            <div
              v-for="(role, rIdx) in work.roles"
              :key="rIdx"
              class="role-row"
            >
              <div class="role-info">
                <span class="role-title">{{ role.text }}</span>
                <span class="role-time">{{ role.time }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import experienceData from "@/static/experience-data";

const works = computed(() => experienceData.value.works);
</script>

<style lang="scss" scoped>
@import "@/scss/index.scss";

#experience {
  background: $navy;
  padding: 80px 0;
  color: $white;
  text-align: left;
  @include text-cannot-edit;

  .container {
    max-width: 1000px;
    margin: 0 auto;
    padding: 0 24px;
  }

  .section-header {
    margin-bottom: 48px;

    .label {
      color: $orange;
      font-family: monospace;
      font-size: 13px;
      letter-spacing: 2px;
    }

    .title {
      font-family: "Futura", sans-serif;
      font-size: 26px;
      text-transform: uppercase;
      margin-top: 6px;
    }
  }

  /* ── Timeline ────────────────────────────────── */
  .timeline {
    display: flex;
    flex-direction: column;
    gap: 40px;
  }

  .company-block {
    display: grid;
    grid-template-columns: 200px 1fr;
    gap: 0 40px;

    @media (max-width: 680px) {
      grid-template-columns: 1fr;
      gap: 12px;
    }
  }

  .company-line {
    display: flex;
    align-items: flex-start;
    gap: 16px;
    padding-top: 5px;

    .company-name {
      font-family: "Futura", sans-serif;
      font-size: 13px;
      text-transform: uppercase;
      letter-spacing: 1px;
      color: rgba($white, 0.9);
      white-space: nowrap;
      flex-shrink: 0;
    }

    .company-bar {
      display: none;
    }

    @media (max-width: 680px) {
      .company-bar { display: none; }
    }
  }

  .roles {
    display: flex;
    flex-direction: column;
    border-left: 1px solid rgba($white, 0.08);
    padding-left: 24px;
    gap: 0;
    position: relative;
  }

  .role-row {
    display: flex;
    align-items: flex-start;
    gap: 0;
    padding: 12px 0;
    position: relative;
    transition: background 0.2s ease;

    &:not(:last-child) {
      border-bottom: 1px solid rgba($white, 0.04);
    }

    &:hover .role-title {
      color: $orange;
    }
  }

  .role-row::before {
    content: '';
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: rgba($orange, 0.5);
    flex-shrink: 0;
    margin-top: 5px;
    margin-left: -27px;
    margin-right: 20px;
    transition: background 0.2s ease;
  }

  .role-row:hover::before {
    background: $orange;
  }

  .role-info {
    display: flex;
    flex-direction: row;
    align-items: baseline;
    gap: 16px;
    flex: 1;
    flex-wrap: wrap;

    .role-title {
      font-family: "Roboto", sans-serif;
      font-size: 14px;
      font-weight: 500;
      color: rgba($white, 0.8);
      transition: color 0.2s ease;
      flex: 1;
      min-width: 180px;
    }

    .role-time {
      font-family: monospace;
      font-size: 12px;
      color: rgba($white, 0.6);
      white-space: nowrap;
      flex-shrink: 0;
    }
  }

  @media (max-width: 680px) {
    .company-block {
      .company-line {
        padding-bottom: 8px;
        border-bottom: 1px solid rgba($white, 0.08);
      }

      .roles {
        border-left: none;
        padding-left: 0;

        .role-dot {
          margin-left: 0;
          margin-right: 12px;
          display: none;
        }

        .role-row {
          padding: 10px 0;
        }
      }
    }
  }
}
</style>
