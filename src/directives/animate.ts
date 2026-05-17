import type { DirectiveBinding } from "vue";

type AnimateValue = number | { delay?: number } | undefined;

export const vAnimate = {
  mounted(el: HTMLElement, binding: DirectiveBinding<AnimateValue>) {
    const delay =
      typeof binding.value === "number"
        ? binding.value
        : (binding.value?.delay ?? 0);

    el.classList.add("scroll-reveal");
    if (delay) el.style.transitionDelay = `${delay}ms`;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("revealed");
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );
    observer.observe(el);
  },
};
