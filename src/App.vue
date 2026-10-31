<!-- src/App.vue -->
<template>
  <div
    class="min-h-screen bg-surface font-body-md text-on-surface flex flex-col antialiased selection:bg-clear-skies selection:text-deep-ocean">
    <AppHeader v-if="!isStandaloneAuthPage" />

    <main class="w-full flex-grow bg-surface" @click="handleMainImageClick">
      <router-view />
    </main>

    <AppFooter v-if="!isStandaloneAuthPage" />

    <!-- Global Floating Back to Top Button -->
    <button
      type="button"
      aria-label="Back to top"
      @click="scrollToTop"
      class="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-primary-container hover:bg-secondary text-white shadow-lg border border-white/15 flex items-center justify-center transition-all duration-300 cursor-pointer"
      :class="
        showBackToTop
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-4 pointer-events-none'
      ">
      <span class="material-symbols-outlined text-[20px]">arrow_upward</span>
    </button>

    <!-- Global Click-to-Zoom Lightbox -->
    <div
      class="fixed inset-0 z-[10000] bg-[#001331]/92 backdrop-blur-sm flex flex-col items-center justify-center p-6 transition-opacity duration-250"
      :class="
        lightbox.isOpen
          ? 'opacity-100 pointer-events-auto'
          : 'opacity-0 pointer-events-none'
      "
      @click.self="closeLightbox">
      <button
        type="button"
        aria-label="Close image preview"
        @click="closeLightbox"
        class="absolute top-5 right-5 w-11 h-11 rounded-full bg-white/10 hover:bg-secondary text-white border border-white/20 flex items-center justify-center transition-colors shadow-lg cursor-pointer">
        <span class="material-symbols-outlined text-[22px]">close</span>
      </button>
      <img
        v-if="lightbox.src"
        :src="lightbox.src"
        :alt="lightbox.alt"
        class="max-w-[92vw] max-h-[82vh] w-auto h-auto object-contain rounded-xl shadow-2xl border border-white/15 bg-primary transition-transform duration-250"
        :class="lightbox.isOpen ? 'scale-100' : 'scale-95'" />
      <p
        v-if="lightbox.alt"
        class="mt-3 text-xs sm:text-sm text-surface-variant font-medium text-center max-w-2xl px-4">
        {{ lightbox.alt }}
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, computed, onMounted, onUnmounted } from "vue";
import { useRoute } from "vue-router";
import AppHeader from "./components/AppHeader.vue";
import AppFooter from "./components/AppFooter.vue";
import { optimizeImageUrl } from "./utils/api.js";

const route = useRoute();

// Hide Header & Footer on Login and Signup pages just like the original design
const isStandaloneAuthPage = computed(
  () => route.name === "admin-login" || route.name === "admin-signup",
);

// --- 1. Back to Top State ---
const showBackToTop = ref(false);

function handleScroll() {
  showBackToTop.value = window.scrollY > 450;
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// --- 2. Global Lightbox State ---
const lightbox = reactive({
  isOpen: false,
  src: "",
  alt: "",
});

function handleMainImageClick(e) {
  if (e.target.closest("a, button")) return;

  let img = e.target.closest("img");
  if (!img) {
    const figureOrCard = e.target.closest("figure, .relative");
    if (figureOrCard && figureOrCard.querySelectorAll("img").length === 1) {
      img = figureOrCard.querySelector("img");
    }
  }

  if (!img || img.clientWidth < 48 || !img.src) return;

  lightbox.src = optimizeImageUrl(img.src, 1600);
  lightbox.alt = img.alt || "";
  lightbox.isOpen = true;
  document.body.style.overflow = "hidden";
}

function closeLightbox() {
  lightbox.isOpen = false;
  document.body.style.overflow = "";
}

function handleKeydown(e) {
  if (e.key === "Escape" && lightbox.isOpen) {
    closeLightbox();
  }
}

onMounted(() => {
  window.addEventListener("scroll", handleScroll, { passive: true });
  window.addEventListener("keydown", handleKeydown);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
  window.removeEventListener("keydown", handleKeydown);
});
</script>

<style>
main img:not(a img):not(button img) {
  cursor: zoom-in;
}
</style>
