<template>
  <footer id="footer">
    <div class="container">
      <div class="footer-content">
        <div class="copyright">
          <span class="symbol">©</span>
          <span class="year">{{ currentYear }}</span>
          <span class="divider">|</span>
          <span class="name">Hansen Wu</span>
        </div>

        <div class="build-info">
          Built with <span class="tech">Love</span>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const currentYear = new Date().getFullYear();
</script>

<style lang="scss" scoped>
@import "@/scss/index.scss";

#footer {
  @include text-cannot-edit;
  background: $navy;
  // Use a slightly darker navy or a top border to separate it from Contact Me
  border-top: 1px solid rgba(255, 255, 255, 0.03);
  font-family: "Futura", sans-serif;
  padding: 30px 0;
  color: rgba($white, 0.3); // Muted color so it's not distracting

  .container {
    max-width: 1000px;
    margin: 0 auto;
    padding: 0 24px;
  }

  .footer-content {
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 600px) {
      flex-direction: column;
      gap: 10px;
    }
  }

  .copyright {
    font-size: 12px;
    letter-spacing: 1px;

    .divider {
      margin: 0 8px;
      color: rgba($white, 0.1);
    }

    .name {
      color: rgba($white, 0.6);
      font-weight: 500;
    }
  }

  .build-info {
    font-size: 10px;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    font-family: monospace; // Monospace gives it a "dev" feel

    .tech {
      color: $orange; // Subtle pop of your brand color
      opacity: 0.8;
    }
  }
}
</style>