<template>
  <nav v-if="!isCV" id="navbar" :class="{ scrolled: isScrolled }">
    <div class="nav-inner">
      <div class="brand" @click="scrollToTop" role="button" tabindex="0" aria-label="Back to top">
        <span>HW</span>
      </div>

      <div class="nav-links" :class="{ open: menuOpen }">
        <button @click="scrollAndClose('skill')">Skills</button>
        <button @click="scrollAndClose('project')">Projects</button>
        <button @click="scrollAndClose('experience')">Experience</button>
        <button @click="scrollAndClose('contact-me')">Contact</button>
      </div>

      <div class="nav-right">
        <button class="cv-btn" @click="openCV">View CV</button>
        <button
          class="hamburger"
          :class="{ active: menuOpen }"
          @click="menuOpen = !menuOpen"
          aria-label="Toggle navigation menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const isCV = computed(() => route.path === "/cv");

const isScrolled = ref(false);
const menuOpen = ref(false);

const handleScroll = () => {
  isScrolled.value = window.scrollY > 60;
};

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
  menuOpen.value = false;
};

const scrollAndClose = (id: string) => {
  const el = document.getElementById(id);
  if (el) {
    const navHeight = 64;
    const top = el.getBoundingClientRect().top + window.scrollY - navHeight;
    window.scrollTo({ top, behavior: "smooth" });
  }
  menuOpen.value = false;
};

const openCV = () => {
  window.open("/cv", "_blank", "noopener,noreferrer");
};

onMounted(() => window.addEventListener("scroll", handleScroll, { passive: true }));
onUnmounted(() => window.removeEventListener("scroll", handleScroll));
</script>

<style lang="scss" scoped>
@import "@/scss/index.scss";

#navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  padding: 0 24px;
  transition: background 0.35s ease, box-shadow 0.35s ease, backdrop-filter 0.35s ease;

  &.scrolled {
    background: rgba($navy, 0.92);
    backdrop-filter: blur(14px);
    -webkit-backdrop-filter: blur(14px);
    box-shadow: 0 1px 0 rgba(255, 255, 255, 0.05);
  }

  .nav-inner {
    max-width: 1000px;
    margin: 0 auto;
    height: 64px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .brand {
    cursor: pointer;
    display: flex;
    align-items: center;

    span {
      display: inline-flex;
      width: 36px;
      height: 36px;
      background: $orange;
      color: $navy;
      border-radius: 6px;
      align-items: center;
      justify-content: center;
      font-family: "Futura", sans-serif;
      font-size: 13px;
      font-weight: 800;
      letter-spacing: 1px;
      transition: opacity 0.2s ease;

      &:hover {
        opacity: 0.85;
      }
    }
  }

  .nav-links {
    display: flex;
    gap: 2px;

    button {
      background: none;
      border: none;
      color: rgba($white, 0.55);
      font-family: "Roboto", sans-serif;
      font-size: 13px;
      font-weight: 500;
      padding: 8px 14px;
      cursor: pointer;
      border-radius: 4px;
      transition: color 0.2s ease, background 0.2s ease;
      letter-spacing: 0.3px;

      &:hover {
        color: $white;
        background: rgba($white, 0.06);
      }

      &:focus-visible {
        outline: 2px solid $orange;
        outline-offset: 2px;
      }
    }
  }

  .nav-right {
    display: flex;
    align-items: center;
    gap: 16px;

    .cv-btn {
      background: transparent;
      border: 1px solid rgba($orange, 0.5);
      color: $orange;
      font-family: "Roboto", sans-serif;
      font-size: 11px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 1px;
      padding: 7px 16px;
      border-radius: 4px;
      cursor: pointer;
      transition: background 0.25s ease, border-color 0.25s ease;

      &:hover {
        background: rgba($orange, 0.1);
        border-color: $orange;
      }

      &:focus-visible {
        outline: 2px solid $orange;
        outline-offset: 2px;
      }
    }

    .hamburger {
      display: none;
      background: none;
      border: none;
      cursor: pointer;
      padding: 6px;
      flex-direction: column;
      gap: 5px;

      span {
        display: block;
        width: 22px;
        height: 2px;
        background: $white;
        border-radius: 2px;
        transition: transform 0.3s ease, opacity 0.3s ease;
        transform-origin: center;
      }

      &.active {
        span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
        span:nth-child(2) { opacity: 0; transform: scaleX(0); }
        span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }
      }
    }
  }

  @media (max-width: 768px) {
    .nav-links {
      position: fixed;
      top: 64px;
      left: 0;
      right: 0;
      background: rgba($darkNavy, 0.97);
      backdrop-filter: blur(16px);
      -webkit-backdrop-filter: blur(16px);
      flex-direction: column;
      padding: 12px 20px 20px;
      gap: 2px;
      border-bottom: 1px solid rgba($white, 0.06);
      transform: translateY(-110%);
      opacity: 0;
      pointer-events: none;
      transition: transform 0.3s ease, opacity 0.25s ease;

      &.open {
        transform: translateY(0);
        opacity: 1;
        pointer-events: all;
      }

      button {
        width: 100%;
        text-align: left;
        padding: 13px 16px;
        font-size: 15px;
      }
    }

    .hamburger { display: flex; }
    .cv-btn { display: none; }
  }
}
</style>
