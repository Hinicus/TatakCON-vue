<!-- src/components/AppFooter.vue -->
<template>
  <footer
    class="bg-[#12284b] text-white pt-14 pb-8 border-t border-white/10 mt-16">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Brand header -->
      <div
        class="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 mb-8 border-b border-white/10">
        <div>
          <span
            class="block text-xs font-bold uppercase tracking-wider text-clear-skies mb-1">
            Bulacan State University • College of Nursing
          </span>
          <h3
            class="font-headline-md text-headline-md text-surface tracking-tight font-serif">
            "TO SAVE AND TO SERVICE"
          </h3>
        </div>
        <div
          class="flex items-center gap-4 self-start md:self-auto bg-white/5 border border-white/10 rounded-2xl px-5 py-3">
          <img
            alt="Bulacan State University Logo"
            class="w-14 h-14 object-contain rounded-full bg-white/10 p-1"
            src="/images/logo/bulsu_logo.png" />
          <div class="w-px h-10 bg-white/10"></div>
          <img
            alt="College of Nursing Logo"
            class="w-14 h-14 object-contain rounded-full bg-white/10 p-1"
            src="/images/con-org-logo/college-of-nursing.jpg" />
        </div>
      </div>

      <!-- Affiliated organizations -->
      <div class="pb-8 mb-8 border-b border-white/10">
        <div
          class="flex items-center gap-2 mb-6 text-xs font-bold uppercase tracking-wider text-clear-skies">
          <span class="material-symbols-outlined text-[18px]">groups</span>
          <span>Affiliated Organizations &amp; Student Guilds</span>
        </div>
        <div class="flex flex-wrap items-start justify-center gap-3 sm:gap-4">
          <router-link
            v-for="org in orgSeals"
            :key="org.slug"
            :to="`/con-community/${org.slug}`"
            :title="org.name"
            class="flex flex-col items-center text-center group cursor-pointer">
            <div
              class="w-14 h-14 rounded-full bg-white/10 p-1 border border-white/10 flex items-center justify-center overflow-hidden transition-all duration-300 group-hover:scale-105 group-hover:border-clear-skies group-hover:bg-white/20 shadow-sm">
              <img
                :alt="org.name"
                class="w-full h-full object-contain rounded-full"
                :src="org.logo" />
            </div>
          </router-link>
        </div>
      </div>

      <!-- Quick links -->
      <div
        class="flex flex-wrap items-center justify-between gap-4 text-xs text-slate-300 mb-8">
        <div class="flex flex-wrap items-center gap-x-6 gap-y-2">
          <router-link class="hover:text-white transition-colors" to="/"
            >Home</router-link
          >
          <router-link
            class="hover:text-white transition-colors"
            to="/our-story"
            >Our Story</router-link
          >
          <router-link
            class="hover:text-white transition-colors"
            to="/con-community"
            >CON Community</router-link
          >
          <router-link
            class="hover:text-white transition-colors"
            to="/traditions-culture"
            >Traditions &amp; Culture</router-link
          >
          <router-link class="hover:text-white transition-colors" to="/about"
            >About</router-link
          >
          <a
            class="hover:text-clear-skies transition-colors inline-flex items-center gap-1"
            href="https://www.facebook.com/bulsu.con"
            target="_blank"
            rel="noopener noreferrer">
            <span>BulSU CON Facebook</span>
            <span class="material-symbols-outlined text-[14px]"
              >open_in_new</span
            >
          </a>
          <a
            class="hover:text-clear-skies transition-colors inline-flex items-center gap-1"
            href="https://bulsu.edu.ph"
            target="_blank"
            rel="noopener noreferrer">
            <span>bulsu.edu.ph</span>
            <span class="material-symbols-outlined text-[14px]"
              >open_in_new</span
            >
          </a>
        </div>
      </div>

      <!-- Bottom bar -->
      <div
        class="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
        <p>
          © {{ currentYear }} #TatakCON Research Project &amp; BulSU College of
          Nursing. All rights reserved.
          <span class="text-clear-skies"> TatakCON </span>
        </p>
        <div class="flex items-center space-x-4">
          <router-link
            class="hover:text-white transition-colors flex items-center gap-1"
            :to="isLoggedIn ? '/admin/manage' : '/admin/login'"
            title="Editorial Portal">
            <span class="material-symbols-outlined text-[16px]"
              >admin_panel_settings</span
            >
            <span>{{
              isLoggedIn ? "Editorial Dashboard" : "Contributor Portal"
            }}</span>
          </router-link>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const currentYear = new Date().getFullYear();

const isLoggedIn = computed(() => {
  // Touch route.fullPath so computed re-evaluates after login/logout navigation
  void route.fullPath;
  return Boolean(
    sessionStorage.getItem("currentUserId") &&
    sessionStorage.getItem("userRole"),
  );
});

const orgSeals = [
  {
    name: "Knightingale Society",
    slug: "knightingale-society",
    logo: "/images/con-org-logo/knightingale-society.png",
  },
  {
    name: "CORTEX",
    slug: "cortex",
    logo: "/images/con-org-logo/cortex-the-con-academic-society.jpg",
  },
  {
    name: "The Nurses' Notes",
    slug: "the-nurses-notes",
    logo: "/images/con-org-logo/the-nurses-notes.jpg",
  },
  {
    name: "Red Cross Youth Council",
    slug: "red-cross-youth-council",
    logo: "/images/con-org-logo/red-cross-youth-council.jpg",
  },
  {
    name: "Pacemaker All-Stars",
    slug: "pacemaker-all-stars",
    logo: "/images/con-org-logo/pacemaker-all-stars.jpg",
  },
  {
    name: "LUNGS",
    slug: "lungs",
    logo: "/images/con-org-logo/lungs-lydians-united-nursing-giocoso-singers.png",
  },
  {
    name: "Unang Hakbang",
    slug: "unang-hakbang",
    logo: "/images/con-org-logo/unang-hakbang.jpg",
  },
  {
    name: "Local Student Council",
    slug: "local-student-council",
    logo: "/images/con-org-logo/local-student-council.jpg",
  },
];
</script>
