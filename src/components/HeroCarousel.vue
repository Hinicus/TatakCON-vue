<!-- src/components/HeroCarousel.vue -->
<template>
  <div class="lg:col-span-7 relative mt-space-md lg:mt-0">
    <div
      class="relative w-full aspect-[16/10] rounded-2xl overflow-hidden shadow-2xl bg-surface-container group select-none ring-1 ring-primary/10"
      @mouseenter="stopAutoPlay"
      @mouseleave="startAutoPlay"
      @touchstart.passive="onTouchStart"
      @touchend.passive="onTouchEnd">
      <!-- Slides Track -->
      <div class="relative w-full h-full">
        <div
          v-for="(item, index) in slides"
          :key="index"
          class="carousel-slide absolute inset-0 transition-opacity duration-700 ease-in-out"
          :class="
            index === currentIndex
              ? 'opacity-100 z-10'
              : 'opacity-0 z-0 pointer-events-none'
          ">
          <img
            :loading="index === 0 ? 'eager' : 'lazy'"
            :style="item.imgStyle || ''"
            class="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
            :alt="item.alt || item.title"
            :src="item.src" />
        </div>
      </div>

      <!-- Dark Gradient Overlay -->
      <div
        class="absolute inset-0 bg-gradient-to-t from-primary/85 via-primary/15 to-transparent z-20 pointer-events-none"></div>

      <!-- Top-Right Slide Indicator Pills -->
      <div
        class="absolute top-3.5 right-3.5 sm:top-4 sm:right-4 z-30 flex items-center gap-1.5 bg-primary/50 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/15">
        <button
          v-for="(_, index) in slides"
          :key="index"
          type="button"
          :aria-label="`Slide ${index + 1}`"
          @click="goToSlide(index)"
          class="h-1.5 rounded-full transition-all duration-300 cursor-pointer"
          :class="
            index === currentIndex
              ? 'w-6 bg-white'
              : 'w-1.5 bg-white/50 hover:bg-white/80'
          "></button>
      </div>

      <!-- Previous / Next Navigation Buttons -->
      <button
        type="button"
        aria-label="Previous image"
        @click="prevSlide"
        class="absolute left-3 top-1/2 -translate-y-1/2 z-30 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-primary/50 hover:bg-primary/80 text-white backdrop-blur-sm border border-white/15 flex items-center justify-center opacity-0 group-hover:opacity-100 focus:opacity-100 transition-all duration-300 hover:scale-105 cursor-pointer">
        <span class="material-symbols-outlined text-[20px]">chevron_left</span>
      </button>
      <button
        type="button"
        aria-label="Next image"
        @click="nextSlide"
        class="absolute right-3 top-1/2 -translate-y-1/2 z-30 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-primary/50 hover:bg-primary/80 text-white backdrop-blur-sm border border-white/15 flex items-center justify-center opacity-0 group-hover:opacity-100 focus:opacity-100 transition-all duration-300 hover:scale-105 cursor-pointer">
        <span class="material-symbols-outlined text-[20px]">chevron_right</span>
      </button>

      <!-- Floating Architectural Badge -->
      <div
        v-if="currentSlide"
        class="absolute bottom-3 left-3 right-3 sm:bottom-5 sm:left-5 sm:right-5 z-30 bg-surface-container-lowest/95 backdrop-blur-md px-3.5 py-2.5 sm:p-space-md rounded-xl sm:rounded-DEFAULT shadow-lg flex items-center justify-between gap-2 border border-white/40">
        <div class="flex items-center gap-2.5 sm:gap-space-sm min-w-0">
          <div
            class="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-secondary-fixed flex items-center justify-center text-on-secondary-fixed shrink-0">
            <span class="material-symbols-outlined text-[18px] sm:text-[20px]">
              {{ currentSlide.icon || "photo_camera" }}
            </span>
          </div>
          <div class="flex flex-col min-w-0">
            <span
              class="font-title-sm text-primary line-clamp-2 font-semibold transition-all duration-200"
              :class="badgeTitleSizeClass">
              {{ currentSlide.title }}
            </span>
            <span
              class="font-caption text-[11px] sm:text-caption text-on-surface-variant line-clamp-1 mt-0.5">
              {{ currentSlide.subtitle }}
            </span>
          </div>
        </div>
        <span
          class="w-2 h-2 rounded-full bg-secondary animate-ping mr-1 shrink-0"></span>
      </div>
    </div>

    <!-- Decorative Subtle Backing Ornament -->
    <div
      class="absolute -top-6 -right-6 w-36 h-36 rounded-full bg-secondary-fixed/40 -z-10 blur-2xl pointer-events-none"></div>
    <div
      class="absolute -bottom-6 -left-6 w-32 h-32 rounded-full bg-tertiary-fixed-dim/30 -z-10 blur-2xl pointer-events-none"></div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from "vue";

// --- Edit or Add Carousel Slides Here ---
const slides = [
  {
    src: "/images/hero-carousel/con-pimentel.jpg",
    alt: "BulSU College of Nursing - Pimentel Hall",
    title: "BulSU College of Nursing",
    subtitle: "AACCUP Level IV Re-Accredited Institution",
    icon: "account_balance",
    imgStyle:
      "transform: scale(1.28) translateY(-11%); transform-origin: center center;",
  },
  {
    src: "/images/hero-carousel/candlelight.jpg",
    alt: "Candlelighting",
    title: "21ST Capping, Pinning, and Candle Lighting Ceremony",
    icon: "candle",
  },
  {
    src: "/images/hero-carousel/send-off-future-RN.jpg",
    alt: "Send-Off Mass for Future RNs",
    title: "Send-Off Mass for Future RNs",
    subtitle: "Heart of Jesus and Mary Parish Church, Malolos",
    icon: "church",
  },
];

const currentIndex = ref(0);
let autoPlayTimer = null;
let touchStartX = 0;

const currentSlide = computed(() => slides[currentIndex.value] || slides[0]);

// Dynamically scale down badge title size for long strings
const badgeTitleSizeClass = computed(() => {
  const len = (currentSlide.value?.title || "").length;
  if (len > 55) return "text-[11px] sm:text-xs leading-tight";
  if (len > 35) return "text-xs sm:text-[13px] leading-snug";
  return "text-sm sm:text-title-sm leading-snug";
});

function showSlide(index) {
  currentIndex.value = (index + slides.length) % slides.length;
}

function nextSlide() {
  showSlide(currentIndex.value + 1);
  startAutoPlay();
}

function prevSlide() {
  showSlide(currentIndex.value - 1);
  startAutoPlay();
}

function goToSlide(index) {
  showSlide(index);
  startAutoPlay();
}

function startAutoPlay() {
  stopAutoPlay();
  autoPlayTimer = setInterval(() => {
    showSlide(currentIndex.value + 1);
  }, 5000);
}

function stopAutoPlay() {
  if (autoPlayTimer) clearInterval(autoPlayTimer);
}

function onTouchStart(e) {
  touchStartX = e.changedTouches[0].screenX;
}

function onTouchEnd(e) {
  const touchEndX = e.changedTouches[0].screenX;
  if (touchStartX - touchEndX > 40) nextSlide();
  else if (touchEndX - touchStartX > 40) prevSlide();
}

onMounted(() => {
  startAutoPlay();
});

onUnmounted(() => {
  stopAutoPlay();
});
</script>
