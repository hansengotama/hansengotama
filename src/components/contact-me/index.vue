<template>
  <div id="contact-me">
    <div class="container">
      <div class="contact-grid">

        <div class="identity-side">
          <header class="section-header">
            <span class="label">- Connection</span>
            <h2 class="title">CONTACT ME</h2>
          </header>

          <div class="social-links-block">
            <span class="sub-label">Social Media</span>
            <div class="social-links">
              <div
                  v-for="(sm, index) in socialMediaList"
                  :key="index"
                  class="icon-item"
                  @click="openNewTab(sm.url)"
              >
                <fa :icon="sm.icon" type="fab" />
              </div>
            </div>
          </div>
        </div>

        <div class="details-side">
          <div class="details-card">

            <a href="tel:+628111814032" class="detail-row">
              <div class="icon-box">
                <fa icon="phone" type="fas" />
              </div>
              <div class="info">
                <span class="tag">Direct Line</span>
                <span class="val">+6281 118 140 32</span>
              </div>
            </a>

            <a href="mailto:hansenwu98@gmail.com" class="detail-row">
              <div class="icon-box">
                <fa icon="envelope" type="fas" />
              </div>
              <div class="info">
                <span class="tag">Email Address</span>
                <span class="val">hansenwu98@gmail.com</span>
              </div>
            </a>

            <div class="detail-row">
              <div class="icon-box">
                <fa icon="location-dot" type="fas" />
              </div>
              <div class="info">
                <span class="tag">Base Location</span>
                <span class="val">Jakarta, Indonesia</span>
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
import socialMediaData from "@/static/social-media-data";

const socialMediaList = computed(() => {
  return socialMediaData.value || [];
});

const openNewTab = (url: string) => {
  if (url) window.open(url, "_blank");
};
</script>

<style lang="scss" scoped>
@import "@/scss/index.scss";

#contact-me {
  text-align: left;
  background: $navy;
  color: $white;
  padding: 60px 0;
  font-family: "Futura", sans-serif;
  border-top: 1px solid rgba(255, 255, 255, 0.05);
  @include text-cannot-edit;

  .container {
    max-width: 1000px;
    margin: 0 auto;
    padding: 0 24px;
  }

  .contact-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 40px;
    align-items: center;
  }

  // Left Column Styling
  .identity-side {
    .section-header {
      margin-bottom: 40px;
      .label {
        color: $orange;
        font-size: 13px;
        font-family: monospace;
        letter-spacing: 2px;
      }
      .title { font-family: "Futura", sans-serif; font-size: 26px; text-transform: uppercase; margin-top: 5px; }
    }

    .sub-label {
      display: block;
      font-size: 11px;
      text-transform: uppercase;
      letter-spacing: 2px;
      color: rgba(255, 255, 255, 0.3);
      margin-bottom: 20px;
    }

    // Social links using your reference logic
    .social-links {
      display: flex;
      gap: 25px;
      align-items: center;

      .icon-item {
        display: inline-flex;
        font-size: 26px;
        cursor: pointer;
        transition: all 0.3s ease;
        color: rgba(255, 255, 255, 0.4);

        &:hover {
          color: $orange;
          transform: translateY(-4px);
        }

        svg {
          display: block;
          width: 1em;
          height: 1em;
        }
      }
    }
  }

  // Right Column Styling
  .details-side {
    .details-card {
      background: rgba(255, 255, 255, 0.02);
      border: 1px solid rgba(255, 255, 255, 0.05);
      border-radius: 16px;
      padding: 40px;
      display: flex;
      flex-direction: column;
      gap: 32px;
      transition: border-color 0.3s ease;

      &:hover {
        border-color: rgba($orange, 0.2);
      }
    }

    .detail-row {
      display: flex;
      align-items: center;
      gap: 20px;
      text-decoration: none;
      color: inherit;

      .icon-box {
        font-size: 18px;
        color: $orange;
        width: 20px;
        display: flex;
        justify-content: center;

        svg {
          display: block;
          width: 1em;
          height: 1em;
        }
      }

      .info {
        display: flex;
        flex-direction: column;
        .tag {
          font-size: 10px;
          text-transform: uppercase;
          letter-spacing: 1px;
          color: rgba(255, 255, 255, 0.3);
        }
        .val {
          font-size: 16px;
          color: rgba(255, 255, 255, 0.9);
          margin-top: 4px;
          transition: color 0.3s;
        }
      }

      &:hover .val {
        color: $orange;
      }
    }
  }

  // Responsive logic
  @media screen and (max-width: 768px) {
    padding: 80px 0;
    .contact-grid {
      grid-template-columns: 1fr;
      text-align: center;
      gap: 60px;
    }
    .identity-side .social-links { justify-content: center; }
    .details-side .detail-row {
      justify-content: center;
      text-align: left;
    }
  }
}
</style>