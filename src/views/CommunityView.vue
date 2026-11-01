<!-- src/views/CommunityView.vue -->
<template>
  <div class="flex flex-col w-full">
    <!-- Hero Banner -->
    <section
      class="relative w-full overflow-hidden bg-primary-container text-surface py-space-2xl md:py-space-3xl">
      <div
        class="absolute inset-0 bg-gradient-to-r from-primary-container via-tertiary-container to-secondary opacity-95"></div>
      <div
        class="absolute -right-20 -top-24 w-96 h-96 rounded-full bg-secondary-container/10 blur-3xl pointer-events-none"></div>
      <div
        class="absolute -left-16 bottom-0 w-80 h-80 rounded-full bg-tertiary-fixed-dim/15 blur-2xl pointer-events-none"></div>

      <div
        class="relative max-w-7xl mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin flex flex-col items-center text-center">
        <!-- Centered Icon Badge -->
        <div
          class="w-20 h-20 md:w-24 md:h-24 rounded-full p-1 bg-surface-container-lowest/15 backdrop-blur-md shadow-xl mb-space-md border-2 border-white/20 flex items-center justify-center overflow-hidden">
          <img
            src="/images/con-org-logo/college-of-nursing.jpg"
            alt="BulSU College of Nursing Logo"
            class="w-full h-full object-cover rounded-full" />
        </div>

        <div
          class="flex items-center gap-space-xs text-tertiary-fixed-dim uppercase tracking-widest font-label-sm text-label-sm mb-space-xxs">
          <span>Collegiate Directory</span>
          <span
            class="inline-block w-1 h-1 rounded-full bg-tertiary-fixed-dim"></span>
          <span>Governance &amp; Alliances</span>
        </div>

        <h1
          class="font-headline-lg text-headline-lg md:text-[40px] md:leading-[48px] text-surface font-semibold max-w-3xl font-serif">
          CON Community
        </h1>

        <p
          class="font-body-md text-body-md text-surface-variant max-w-2xl mt-space-xs">
          Empowering student leadership, accredited nursing organizations, and
          esteemed academic stewards championing compassionate healthcare beyond
          the walls.
        </p>

        <!-- Official College of Nursing Facebook Page Pill -->
        <div class="mt-space-lg">
          <a
            href="https://www.facebook.com/bulsu.con"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-2.5 bg-white/10 hover:bg-white/20 backdrop-blur-sm py-2.5 px-5 rounded-full shadow-sm ring-1 ring-white/20 text-xs font-bold text-white transition-all group">
            <svg
              class="w-4 h-4 fill-current text-tertiary-fixed-dim shrink-0"
              viewBox="0 0 24 24">
              <path
                d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
            <span>BulSU College of Nursing Official Facebook Page</span>
            <span
              class="material-symbols-outlined text-[15px] text-tertiary-fixed-dim group-hover:translate-x-0.5 transition-transform"
              >open_in_new</span
            >
          </a>
        </div>
      </div>
    </section>

    <!-- Main Body: Organization Directory Grid -->
    <section
      class="max-w-7xl mx-auto w-full px-margin-mobile md:px-margin-tablet lg:px-margin py-space-2xl">
      <div class="flex flex-col space-y-space-3xl">
        <section class="scroll-mt-28" id="collegiate-heraldry">
          <!-- Section Header + Live Search Filter -->
          <div
            class="flex flex-col md:flex-row md:items-end justify-between gap-space-md pb-space-md border-b border-surface-variant/40">
            <div>
              <div
                class="flex items-center gap-space-xxs text-secondary font-label-sm text-label-sm uppercase tracking-wide">
                <span class="material-symbols-outlined text-[18px]"
                  >verified</span
                >
                <span>Accredited Student Bodies &amp; Councils</span>
              </div>
              <h2
                class="font-headline-lg text-headline-lg text-on-surface font-semibold font-serif">
                Local Student Councils &amp; Organizations
              </h2>
              <p
                class="font-body-sm text-body-sm text-on-surface-variant mt-space-xxs">
                The official emblems, publications, academic guilds, and
                cultural councils serving the BulSU College of Nursing.
              </p>
            </div>

            <!-- Directory Search Input -->
            <div class="relative w-full md:w-72 shrink-0">
              <span
                class="material-symbols-outlined text-[18px] text-on-surface-variant absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none"
                >search</span
              >
              <input
                v-model="searchQuery"
                type="text"
                placeholder="Search organizations..."
                class="w-full pl-10 pr-4 py-2 text-sm border border-outline-variant rounded-xl bg-surface-container-lowest focus:ring-2 focus:ring-secondary focus:outline-none" />
            </div>
          </div>

          <!-- Organizations Cards Grid -->
          <div
            v-if="filteredOrganizations.length > 0"
            class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-gutter mt-space-lg">
            <article
              v-for="org in filteredOrganizations"
              :key="org.slug"
              class="bg-surface-container-lowest rounded-2xl p-space-lg shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all flex flex-col items-center text-center group border border-surface-variant/40 hover:border-secondary/50">
              <router-link
                :to="`/con-community/${org.slug}`"
                class="relative w-28 h-28 mb-space-md rounded-full bg-surface-container-low p-space-xxs shadow-inner flex items-center justify-center overflow-hidden">
                <img
                  loading="lazy"
                  class="w-full h-full object-contain rounded-full group-hover:scale-105 transition-transform duration-300"
                  :alt="org.name"
                  :src="org.logo" />
              </router-link>

              <span
                class="inline-block px-space-xs py-space-xxs rounded-full font-label-sm text-label-sm mb-space-xs font-semibold"
                :class="org.badgeClass">
                {{ org.badge }}
              </span>

              <router-link
                :to="`/con-community/${org.slug}`"
                class="hover:text-secondary transition-colors">
                <h3
                  class="font-title-sm text-title-sm text-on-surface font-semibold group-hover:text-secondary transition-colors">
                  {{ org.name }}
                </h3>
              </router-link>

              <p
                class="font-caption text-caption text-secondary uppercase tracking-wider mt-space-xxs font-semibold">
                {{ org.subtitle }}
              </p>

              <p
                class="font-body-sm text-body-sm text-on-surface-variant mt-space-xs flex-grow">
                {{ org.shortDescription }}
              </p>

              <div
                class="mt-space-md pt-space-sm border-t border-surface-variant/40 w-full flex items-center justify-center gap-2">
                <router-link
                  :to="`/con-community/${org.slug}`"
                  class="flex-1 inline-flex items-center justify-center gap-1 py-2 px-3 rounded-xl bg-primary-container hover:bg-secondary text-white text-xs font-bold transition-colors">
                  <span>View Profile</span>
                  <span class="material-symbols-outlined text-[15px]"
                    >arrow_forward</span
                  >
                </router-link>
                <a
                  :href="org.facebookUrl"
                  target="_blank"
                  rel="noopener noreferrer"
                  :title="`Visit ${org.name} on Facebook`"
                  class="inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-surface-container hover:bg-[#1877F2] text-primary hover:text-white text-xs font-bold transition-colors border border-outline-variant/40">
                  <svg
                    class="w-3.5 h-3.5 fill-current shrink-0"
                    viewBox="0 0 24 24">
                    <path
                      d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                  <span>Facebook</span>
                </a>
              </div>
            </article>
          </div>

          <!-- Empty Search State -->
          <div
            v-else
            class="mt-space-lg p-12 bg-surface-container-lowest rounded-2xl text-center border border-surface-variant/40">
            <p class="text-on-surface-variant font-semibold">
              No organizations matched "{{ searchQuery }}".
            </p>
          </div>
        </section>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { organizations } from "../data/organizations.js";

const searchQuery = ref("");

const filteredOrganizations = computed(() => {
  const q = searchQuery.value.trim().toLowerCase();
  if (!q) return organizations;
  return organizations.filter(
    (org) =>
      org.name.toLowerCase().includes(q) ||
      org.subtitle.toLowerCase().includes(q) ||
      org.badge.toLowerCase().includes(q) ||
      org.shortDescription.toLowerCase().includes(q),
  );
});
</script>
