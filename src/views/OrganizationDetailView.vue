<!-- src/views/OrganizationDetailView.vue -->
<template>
  <div v-if="org" class="w-full flex-grow bg-surface">
    <!-- Hero Header Banner -->
    <section
      class="relative bg-gradient-to-b from-[#0A172C] via-[#12284B] to-[#16335F] text-white py-12 lg:py-16 px-margin-mobile md:px-margin-tablet lg:px-margin border-b-4 overflow-hidden"
      :class="heroBorderClass">
      <!-- Decorative Radial Glow -->
      <div
        class="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] via-transparent to-transparent pointer-events-none"
        :class="heroGlowClass"></div>
      <div
        class="absolute -right-20 -top-24 w-96 h-96 rounded-full bg-secondary-container/10 blur-3xl pointer-events-none"></div>
      <div
        class="absolute -left-16 bottom-0 w-80 h-80 rounded-full bg-tertiary-fixed-dim/10 blur-2xl pointer-events-none"></div>

      <div
        class="max-w-6xl mx-auto relative z-10 flex flex-col items-center text-center">
        <!-- Top Breadcrumb Row + Official Facebook Page Button -->
        <div
          class="w-full flex items-center justify-between flex-wrap gap-3 mb-6">
          <router-link
            to="/con-community"
            class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 text-tertiary-fixed-dim hover:text-white text-xs font-bold tracking-wide transition-all backdrop-blur-sm ring-1 ring-white/15 group">
            <span
              class="material-symbols-outlined text-[16px] group-hover:-translate-x-0.5 transition-transform"
              >arrow_back</span
            >
            <span>Back to CON Community</span>
          </router-link>

          <a
            v-if="org.facebookUrl"
            :href="org.facebookUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1877F2] hover:bg-[#166fe5] text-white text-xs font-bold tracking-wide transition-all shadow-md ring-1 ring-white/20 group">
            <svg class="w-3.5 h-3.5 fill-current shrink-0" viewBox="0 0 24 24">
              <path
                d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
            <span>Official Facebook Page</span>
            <span
              class="material-symbols-outlined text-[14px] group-hover:translate-x-0.5 transition-transform"
              >open_in_new</span
            >
          </a>
        </div>

        <!-- Official Seal / Emblem of Organization -->
        <div class="relative mb-6">
          <div
            class="absolute -inset-2 bg-gradient-to-r from-clear-skies/40 to-secondary/40 rounded-full blur-xl opacity-75"></div>
          <div
            class="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full p-1.5 bg-gradient-to-b from-clear-skies to-secondary shadow-2xl flex items-center justify-center">
            <div
              class="w-full h-full rounded-full bg-white overflow-hidden flex items-center justify-center">
              <img
                :src="org.logo"
                :alt="`${org.name} Seal`"
                class="rounded-full w-full h-full object-contain transform hover:scale-105 transition-transform duration-300" />
            </div>
          </div>
        </div>

        <!-- Eyebrow Subtitle -->
        <div
          class="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold tracking-widest uppercase mb-3 shadow-inner"
          :class="heroPillClass">
          <span class="material-symbols-outlined text-[16px]">{{
            org.heroEyebrowIcon
          }}</span>
          <span>{{ org.heroEyebrowText }}</span>
        </div>

        <!-- Main Heading -->
        <h1
          class="font-headline-lg text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-2 font-serif">
          {{ org.name }}
        </h1>
        <p
          class="font-headline-sm text-lg sm:text-xl font-medium tracking-wide mb-5 max-w-2xl font-serif italic"
          :class="
            org.theme === 'error' ? 'text-error-container' : 'text-clear-skies'
          ">
          {{ org.subtitle }}
        </p>

        <!-- Verbatim Filipino Community Description -->
        <p
          class="text-sm sm:text-base text-surface-variant/95 max-w-3xl leading-relaxed italic border-t border-b border-white/15 py-4 px-4">
          "{{ org.shortDescription }}"
        </p>
      </div>
    </section>

    <!-- Roster & Directory Body -->
    <div
      class="max-w-7xl mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin py-space-2xl space-y-16">
      <!-- Dynamic Roster Sections -->
      <section
        v-for="(sec, sIdx) in org.sections"
        :key="sIdx"
        class="space-y-8">
        <div
          class="flex flex-col sm:flex-row sm:items-end justify-between border-b border-surface-variant pb-4 gap-2">
          <div>
            <div
              class="flex items-center gap-2 text-xs font-bold tracking-wider uppercase"
              :class="accentTextClass">
              <span class="material-symbols-outlined text-[18px]">{{
                sec.eyebrowIcon
              }}</span>
              <span>{{ sec.eyebrow }}</span>
            </div>
            <h2
              class="font-headline-lg text-2xl sm:text-3xl font-bold text-primary mt-1 font-serif">
              {{ sec.title }}
            </h2>
          </div>
        </div>

        <!-- Groups within each section -->
        <div
          v-for="(group, gIdx) in sec.groups"
          :key="gIdx"
          class="grid"
          :class="group.gridClass">
          <div
            v-for="member in group.members"
            :key="`${member.name}-${member.role}`"
            class="bg-surface-container-lowest rounded-2xl overflow-hidden transition-all duration-300 flex flex-col group"
            :class="[cardBorderClass(member.variant), member.cardClass || '']">
            <div
              class="aspect-[4/4] w-full overflow-hidden bg-surface-container relative">
              <img
                loading="lazy"
                :src="member.image"
                :alt="member.name"
                class="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500" />
              <span
                v-if="member.tag"
                class="absolute top-3 right-3 text-[10px] font-bold uppercase tracking-wider rounded-full flex items-center gap-1"
                :class="tagBadgeClass(member.variant)">
                <span
                  v-if="member.tagIcon"
                  class="material-symbols-outlined text-[13px]"
                  >{{ member.tagIcon }}</span
                >
                {{ member.tag }}
              </span>
            </div>

            <div
              class="flex flex-col flex-grow justify-between"
              :class="[
                member.variant ? 'p-6' : 'p-5',
                member.centered ? 'text-center' : '',
              ]">
              <div>
                <p
                  class="text-xs font-bold uppercase tracking-wider mb-1"
                  :class="accentTextClass">
                  {{ member.role }}
                </p>
                <h3
                  class="font-headline-sm font-bold text-primary transition-colors leading-snug font-serif"
                  :class="[
                    member.variant ? 'text-xl' : 'text-lg',
                    org.theme === 'error'
                      ? 'group-hover:text-error'
                      : 'group-hover:text-secondary',
                  ]">
                  {{ member.name }}
                </h3>
                <p
                  v-if="member.subtext"
                  class="text-xs text-on-surface-variant pt-2 flex items-center gap-1.5 font-medium"
                  :class="{ 'justify-center': member.centered }">
                  <span
                    v-if="member.subtextIcon"
                    class="material-symbols-outlined text-[15px]"
                    :class="accentTextClass"
                    >{{ member.subtextIcon }}</span
                  >
                  {{ member.subtext }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Organizational Profile & Directory Action -->
      <section
        class="bg-surface-container-lowest rounded-3xl p-8 sm:p-10 shadow-sm border border-secondary-fixed/50 grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
        <div class="space-y-4 lg:col-span-2">
          <div
            class="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold tracking-wide uppercase"
            :class="
              org.theme === 'error'
                ? 'bg-error-container text-on-error-container'
                : 'bg-secondary-fixed text-on-secondary-fixed'
            ">
            <span class="material-symbols-outlined text-[16px]">{{
              org.aboutBadgeIcon
            }}</span>
            <span>{{ org.aboutBadgeText }}</span>
          </div>
          <h2
            class="font-headline-lg text-2xl sm:text-3xl font-bold text-primary font-serif">
            {{ org.aboutTitle }}
          </h2>
          <p
            class="text-sm sm:text-base text-on-surface-variant leading-relaxed">
            {{ org.aboutDescription }}
          </p>
        </div>

        <!-- Back to Directory Quick Action Card -->
        <div
          class="bg-primary-container text-surface p-6 rounded-2xl flex flex-col justify-between gap-4 shadow-md">
          <div>
            <span
              class="text-xs font-bold uppercase tracking-widest text-tertiary-fixed-dim block mb-1"
              >CON Community</span
            >
            <h3 class="font-headline-sm text-lg font-bold font-serif">
              Explore Accredited Student Organizations
            </h3>
            <p class="text-xs text-surface-variant mt-1">
              Return to the main collegiate directory to view other councils,
              academic guilds, and societies.
            </p>
          </div>

          <a
            v-if="org.facebookUrl"
            :href="org.facebookUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center justify-between px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-bold transition-all ring-1 ring-white/15 group">
            <span class="inline-flex items-center gap-2">
              <svg
                class="w-3.5 h-3.5 fill-current shrink-0"
                viewBox="0 0 24 24">
                <path
                  d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
              <span>Visit Facebook Page</span>
            </span>
            <span class="material-symbols-outlined text-[15px]"
              >open_in_new</span
            >
          </a>

          <router-link
            to="/con-community"
            class="inline-flex items-center justify-between px-5 py-2.5 rounded-full bg-secondary hover:bg-secondary-container text-on-secondary hover:text-on-secondary-container text-xs font-bold transition-all group">
            <span>Back to Directory</span>
            <span
              class="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform"
              >arrow_forward</span
            >
          </router-link>
        </div>
      </section>
    </div>
  </div>

  <!-- Fallback if slug is not found -->
  <div v-else class="max-w-4xl mx-auto py-24 px-6 text-center">
    <h1 class="text-3xl font-serif font-bold text-primary mb-3">
      Organization Not Found
    </h1>
    <router-link
      to="/con-community"
      class="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-secondary text-white text-xs font-bold">
      <span class="material-symbols-outlined text-[16px]">arrow_back</span>
      <span>Return to CON Community</span>
    </router-link>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";
import { organizations } from "../data/organizations.js";

const route = useRoute();

const org = computed(() =>
  organizations.find((item) => item.slug === route.params.slug),
);

const accentTextClass = computed(() =>
  org.value?.theme === "error" ? "text-error" : "text-secondary",
);

const heroBorderClass = computed(() => {
  if (org.value?.theme === "error") return "border-error";
  if (org.value?.theme === "primary") return "border-primary";
  if (org.value?.theme === "cortex") return "border-secondary-fixed";
  return "border-secondary";
});

const heroGlowClass = computed(() => {
  if (org.value?.theme === "error") return "from-error/20";
  if (org.value?.theme === "primary") return "from-primary/30";
  if (org.value?.theme === "cortex") return "from-secondary-fixed/25";
  return "from-secondary/25";
});

const heroPillClass = computed(() => {
  if (org.value?.theme === "error") {
    return "bg-error/80 border border-error-container/40 text-white";
  }
  if (org.value?.theme === "primary") {
    return "bg-primary/60 border border-clear-skies/40 text-tertiary-fixed-dim";
  }
  if (org.value?.theme === "cortex") {
    return "bg-secondary-fixed/80 border border-secondary-fixed/40 text-on-secondary-fixed";
  }
  return "bg-secondary/60 border border-clear-skies/40 text-tertiary-fixed-dim";
});

function cardBorderClass(variant) {
  const isError = org.value?.theme === "error";
  const isPrimary = org.value?.theme === "primary";

  if (variant === "head") {
    if (isError) return "shadow-md border-2 border-error hover:shadow-lg";
    if (isPrimary) return "shadow-md border-2 border-primary hover:shadow-lg";
    return "shadow-md border-2 border-secondary hover:shadow-lg";
  }
  if (variant === "vice") {
    if (isError) {
      return "shadow-md border-2 border-error-container hover:border-error hover:shadow-lg";
    }
    return "shadow-md border-2 border-clear-skies hover:border-secondary hover:shadow-lg";
  }
  if (variant === "adviser") {
    return isError
      ? "shadow-sm border-2 border-secondary-fixed hover:border-error hover:shadow-md"
      : "shadow-sm border-2 border-secondary-fixed hover:border-secondary hover:shadow-md";
  }
  return isError
    ? "shadow-sm border border-surface-variant/60 hover:border-error hover:shadow-md"
    : "shadow-sm border border-surface-variant/60 hover:border-secondary hover:shadow-md";
}

function tagBadgeClass(variant) {
  if (variant === "head") {
    if (org.value?.theme === "error") {
      return "px-3 py-1 bg-error text-white shadow-sm";
    }
    if (org.value?.theme === "primary") {
      return "px-3 py-1 bg-primary text-white shadow-sm";
    }
    return "px-3 py-1 bg-secondary text-white shadow-sm";
  }
  if (variant === "vice" || variant === "adviser") {
    return "px-3 py-1 bg-primary/90 text-tertiary-fixed-dim backdrop-blur-sm shadow-sm";
  }
  return "px-2.5 py-1 bg-primary/85 text-tertiary-fixed-dim backdrop-blur-sm";
}
</script>
