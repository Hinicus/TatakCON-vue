<template>
  <div class="sticky top-0 w-full z-50">
    <!-- 1. CMS Quick-Access Top Ribbon -->
    <div
      v-if="isLoggedIn"
      class="bg-[#001331] text-surface border-b border-white/10 text-xs">
      <div
        class="max-w-7xl mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin py-2 flex flex-wrap items-center justify-between gap-2">
        <div class="flex items-center gap-2">
          <span
            class="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider"
            :class="
              userRole === 'admin'
                ? 'bg-tertiary-fixed text-on-tertiary-fixed'
                : 'bg-secondary-fixed text-on-secondary-fixed'
            ">
            <span class="material-symbols-outlined text-[13px]"
              >verified_user</span
            >
            {{ userRole }}
          </span>
          <span class="text-slate-300 hidden sm:inline">
            Signed in as
            <strong class="text-white">{{ userName || "Contributor" }}</strong>
          </span>
        </div>

        <div class="flex flex-wrap items-center gap-2 sm:gap-3 ml-auto">
          <router-link
            v-if="currentArticleId"
            :to="`/admin/edit/${currentArticleId}`"
            class="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-white/10 hover:bg-white/20 text-tertiary-fixed-dim font-bold transition-colors">
            <span class="material-symbols-outlined text-[15px]"
              >edit_document</span
            >
            <span>Edit This Article</span>
          </router-link>
          <router-link
            to="/admin/manage"
            class="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-white/10 hover:bg-white/20 text-white font-bold transition-colors">
            <span class="material-symbols-outlined text-[15px]">dashboard</span>
            <span>Manage Articles</span>
          </router-link>
          <router-link
            to="/admin/create"
            class="inline-flex items-center gap-1 px-3 py-1 rounded-lg bg-secondary hover:bg-[#3472a5] text-white font-bold transition-colors shadow-sm">
            <span class="material-symbols-outlined text-[15px]">post_add</span>
            <span>New Article</span>
          </router-link>
        </div>
      </div>
    </div>

    <!-- 2. Main Header Navigation -->
    <header
      class="bg-primary-container text-surface shadow-[0_4px_20px_rgba(0,19,49,0.25)]">
      <div
        class="h-20 max-w-7xl mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin flex items-center justify-between gap-space-md">
        <router-link to="/" class="flex items-center gap-space-sm shrink-0">
          <img
            alt="TatakCON Logo"
            class="h-20 rounded w-auto object-contain"
            src="/images/logo/tatakcon_icon_transparent.png" />
        </router-link>

        <!-- Desktop Nav -->
        <nav class="hidden lg:flex items-center gap-space-lg h-full">
          <template v-for="item in navItems" :key="item.label">
            <button
              v-if="item.comingSoon"
              type="button"
              @click="notifyComingSoon"
              class="text-surface-variant hover:text-surface transition-colors flex items-center h-full px-space-xs font-label-md text-label-md cursor-pointer">
              {{ item.label }}
            </button>
            <router-link
              v-else
              :to="item.to"
              class="transition-colors flex items-center h-full px-space-xs font-label-md text-label-md"
              :class="
                isActiveRoute(item.to)
                  ? 'text-tertiary-fixed-dim border-b-2 border-tertiary-fixed-dim font-bold'
                  : 'text-surface-variant hover:text-surface'
              ">
              {{ item.label }}
            </router-link>
          </template>

          <router-link
            :to="isLoggedIn ? '/admin/manage' : '/admin/login'"
            class="ml-2 inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold border border-white/15 bg-white/5 hover:bg-secondary hover:border-secondary text-surface transition-all">
            <span class="material-symbols-outlined text-[16px]">
              {{ isLoggedIn ? "space_dashboard" : "login" }}
            </span>
            <span>{{ isLoggedIn ? "Portal" : "Staff Login" }}</span>
          </router-link>
        </nav>

        <!-- Mobile Menu Button -->
        <button
          type="button"
          aria-label="Toggle mobile menu"
          :aria-expanded="isMenuOpen"
          @click="isMenuOpen = !isMenuOpen"
          class="lg:hidden flex items-center justify-center w-10 h-10 rounded-full bg-primary hover:bg-secondary text-surface transition-colors focus:outline-none">
          <span class="material-symbols-outlined text-[24px]">
            {{ isMenuOpen ? "close" : "menu" }}
          </span>
        </button>
      </div>

      <!-- Mobile Drawer -->
      <div
        v-show="isMenuOpen"
        class="lg:hidden border-t border-on-primary-fixed-variant/30 bg-primary-container px-margin-mobile md:px-margin-tablet py-space-lg shadow-xl">
        <nav class="flex flex-col gap-space-xs">
          <template v-for="item in navItems" :key="item.label">
            <button
              v-if="item.comingSoon"
              type="button"
              @click="notifyComingSoon"
              class="text-surface-variant hover:text-surface hover:bg-primary transition-all py-space-sm px-space-md rounded-DEFAULT font-label-md text-label-md flex items-center justify-between text-left">
              <span>{{ item.label }}</span>
              <span
                class="material-symbols-outlined text-[18px] text-tertiary-fixed-dim"
                >chevron_right</span
              >
            </button>
            <router-link
              v-else
              :to="item.to"
              @click="isMenuOpen = false"
              class="transition-all py-space-sm px-space-md rounded-DEFAULT font-label-md text-label-md flex items-center justify-between"
              :class="
                isActiveRoute(item.to)
                  ? 'bg-primary text-tertiary-fixed-dim font-bold'
                  : 'text-surface-variant hover:text-surface hover:bg-primary'
              ">
              <span>{{ item.label }}</span>
              <span
                class="material-symbols-outlined text-[18px] text-tertiary-fixed-dim"
                >chevron_right</span
              >
            </router-link>
          </template>

          <div class="pt-2 mt-2 border-t border-white/10 flex flex-col gap-2">
            <router-link
              :to="isLoggedIn ? '/admin/manage' : '/admin/login'"
              @click="isMenuOpen = false"
              class="text-white bg-secondary hover:bg-[#3472a5] transition-all py-space-sm px-space-md rounded-DEFAULT font-label-md text-label-md flex items-center justify-between">
              <span class="flex items-center gap-2">
                <span class="material-symbols-outlined text-[18px]">
                  {{ isLoggedIn ? "space_dashboard" : "login" }}
                </span>
                {{ isLoggedIn ? "Manage Articles" : "Contributor Login" }}
              </span>
              <span class="material-symbols-outlined text-[18px]"
                >chevron_right</span
              >
            </router-link>
          </div>
        </nav>
      </div>
    </header>
  </div>
</template>

<script setup>
import { ref, computed, watch } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const isMenuOpen = ref(false);

const currentUserId = ref(sessionStorage.getItem("currentUserId"));
const userRole = ref(sessionStorage.getItem("userRole"));
const userName = ref(sessionStorage.getItem("userName"));

// Re-sync session state whenever the route changes (e.g. after logging in/out)
watch(
  () => route.fullPath,
  () => {
    currentUserId.value = sessionStorage.getItem("currentUserId");
    userRole.value = sessionStorage.getItem("userRole");
    userName.value = sessionStorage.getItem("userName");
    isMenuOpen.value = false;
  },
);

const isLoggedIn = computed(() =>
  Boolean(currentUserId.value && userRole.value),
);
const currentArticleId = computed(() =>
  route.name === "article" ? route.params.id : null,
);

const navItems = [
  { label: "Home", to: "/" },
  { label: "Our Story", to: "/our-story" },
  { label: "CON Community", to: "/con-community" },
  { label: "Traditions & Culture", to: "/traditions-culture" },
  { label: "Faculty", to: "/faculty" },
  { label: "About", to: "/about" },
];

function isActiveRoute(targetPath) {
  if (targetPath === "/") return route.path === "/";
  return route.path.startsWith(targetPath);
}

// PUT: on sections still not finished
function notifyComingSoon() {
  alert(
    "This section is currently under construction for the next phase. Stay tuned!",
  );
}
</script>
