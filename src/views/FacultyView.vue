<!-- src/views/FacultyView.vue -->
<!-- src/views/FacultyView.vue -->
<template>
  <div class="flex flex-col w-full bg-surface">
    <!-- Executive Hero Banner (Navy + Academic Gold Accents) -->
    <section
      class="relative w-full overflow-hidden py-space-2xl md:py-space-3xl px-margin-mobile md:px-margin-tablet lg:px-margin text-white border-b-4 border-amber-500/80"
      style="
        background: radial-gradient(
          circle at 50% 15%,
          rgb(28, 52, 94) 0%,
          rgb(15, 31, 60) 60%,
          rgb(8, 19, 38) 100%
        );
      ">
      <div
        class="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[720px] h-[340px] bg-amber-400/10 rounded-full blur-3xl"></div>
      <div
        class="pointer-events-none absolute -bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl"></div>

      <div
        class="max-w-5xl mx-auto relative z-10 flex flex-col items-center text-center">
        <!-- College Seal with Gold Ring -->
        <div class="relative mb-6">
          <div
            class="absolute -inset-2 bg-gradient-to-r from-amber-400/40 to-clear-skies/40 rounded-full blur-xl opacity-80"></div>
          <div
            class="relative w-24 h-24 md:w-28 md:h-28 rounded-full p-1 bg-gradient-to-b from-amber-300 via-amber-500 to-primary shadow-2xl flex items-center justify-center">
            <img
              src="/images/con-org-logo/college-of-nursing.jpg"
              alt="BulSU College of Nursing Seal"
              class="w-full h-full object-cover rounded-full bg-white" />
          </div>
        </div>

        <!-- Eyebrow -->
        <div
          class="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-amber-500/15 border border-amber-400/40 text-amber-300 text-xs font-bold uppercase tracking-widest mb-3 shadow-inner">
          <span class="material-symbols-outlined text-[16px]">school</span>
          <span>Academic Stewards &amp; Administration</span>
        </div>

        <h1
          class="font-headline-lg text-3xl sm:text-4xl md:text-5xl text-white font-bold tracking-tight font-serif">
          The Faculty of College of Nursing
        </h1>

        <p
          class="font-body-md text-body-md text-surface-variant/90 max-w-2xl mt-3 leading-relaxed">
          Meet the esteemed administration, program coordinators, ethics review
          stewards, and student organization advisers guiding the Bulacan State
          University College of Nursing.
        </p>

        <!-- Quick Jump Pills -->
        <div
          class="mt-7 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          <a
            href="#executive-tiers"
            class="px-4 py-2 rounded-full bg-white/10 hover:bg-amber-500 hover:text-primary text-xs font-bold text-white ring-1 ring-white/20 transition-all">
            Executive Leadership
          </a>
          <a
            href="#coordinators-tier"
            class="px-4 py-2 rounded-full bg-white/10 hover:bg-amber-500 hover:text-primary text-xs font-bold text-white ring-1 ring-white/20 transition-all">
            Coordinators &amp; Committees
          </a>
          <a
            href="#advisers-tier"
            class="px-4 py-2 rounded-full bg-white/10 hover:bg-amber-500 hover:text-primary text-xs font-bold text-white ring-1 ring-white/20 transition-all">
            Organization Advisers
          </a>
        </div>
      </div>
    </section>

    <!-- Main Container -->
    <div
      class="max-w-7xl mx-auto w-full px-margin-mobile md:px-margin-tablet lg:px-margin py-space-2xl space-y-20">
      <!-- Search Bar -->
      <div
        class="bg-surface-container-lowest p-4 sm:p-5 rounded-2xl shadow-sm border border-surface-variant/60 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
        <div class="flex items-center gap-2.5">
          <span
            class="w-9 h-9 rounded-xl bg-amber-500/15 text-amber-800 flex items-center justify-center shrink-0">
            <span class="material-symbols-outlined text-[20px]">badge</span>
          </span>
          <div>
            <h2 class="text-sm font-bold text-primary">
              Faculty &amp; Administration Directory
            </h2>
            <p class="text-xs text-on-surface-variant">
              Filter by faculty name, credential, committee, or student
              organization
            </p>
          </div>
        </div>

        <div class="relative w-full sm:w-80">
          <span
            class="material-symbols-outlined text-[18px] text-on-surface-variant absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none"
            >search</span
          >
          <input
            v-model="searchQuery"
            type="text"
            placeholder="Search faculty or role..."
            class="w-full pl-10 pr-9 py-2 text-sm border border-outline-variant rounded-xl bg-surface-bright focus:ring-2 focus:ring-amber-600 focus:outline-none" />
          <button
            v-if="searchQuery"
            type="button"
            @click="searchQuery = ''"
            class="absolute right-2.5 top-1/2 -translate-y-1/2 text-on-surface-variant hover:text-primary cursor-pointer">
            <span class="material-symbols-outlined text-[16px]">close</span>
          </button>
        </div>
      </div>

      <!-- ========================================================= -->
      <!-- EXECUTIVE ADMINISTRATION HIERARCHY                        -->
      <!-- ========================================================= -->
      <section
        v-if="filteredExecutive.length > 0"
        id="executive-tiers"
        class="scroll-mt-28">
        <div class="text-center max-w-2xl mx-auto mb-10">
          <div
            class="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-amber-700 mb-1">
            <span class="material-symbols-outlined text-[16px]"
              >account_tree</span
            >
            <span>Institutional Leadership</span>
          </div>
          <h2
            class="font-headline-lg text-2xl sm:text-3xl font-bold text-primary font-serif">
            Executive Administration
          </h2>
          <p class="text-xs sm:text-sm text-on-surface-variant mt-1">
            The academic and administrative leadership of the BulSU College of
            Nursing.
          </p>
        </div>

        <!-- Hierarchical Vertical Org-Chart Spine -->
        <div class="relative flex flex-col items-center">
          <template
            v-for="(leader, index) in filteredExecutive"
            :key="leader.name">
            <!-- Vertical Connector Line -->
            <div
              v-if="index > 0 && !searchQuery"
              class="w-0.5 h-10 bg-gradient-to-b from-amber-500 to-primary/60 relative flex items-center justify-center">
              <span
                class="w-2.5 h-2.5 rounded-full bg-amber-500 ring-4 ring-surface"></span>
            </div>

            <!-- Executive Leader Card -->
            <div
              class="w-full bg-surface-container-lowest rounded-3xl overflow-hidden transition-all duration-300 group"
              :class="[
                leader.tier === 1
                  ? 'max-w-md border-2 border-amber-500 shadow-xl ring-4 ring-amber-500/10'
                  : 'max-w-sm border-2 border-primary/80 shadow-md hover:border-amber-600',
                index > 0 && searchQuery ? 'mt-6' : '',
              ]">
              <!-- Top Ribbon Bar -->
              <div
                class="px-4 py-2 text-[11px] font-bold uppercase tracking-widest flex items-center justify-between"
                :class="
                  leader.tier === 1
                    ? 'bg-gradient-to-r from-[#001331] via-[#12284b] to-[#001331] text-amber-300'
                    : 'bg-primary-container text-tertiary-fixed-dim'
                ">
                <span class="flex items-center gap-1.5">
                  <span class="material-symbols-outlined text-[15px]">{{
                    leader.icon
                  }}</span>
                  {{ leader.tierLabel }}
                </span>
                <span
                  class="px-2 py-0.5 rounded-full text-[10px] bg-white/10 text-white">
                  {{ leader.credentials }}
                </span>
              </div>

              <!-- Portrait -->
              <div
                class="aspect-[4/4] w-full overflow-hidden bg-surface-container relative">
                <img
                  :loading="leader.tier === 1 ? 'eager' : 'lazy'"
                  :src="leader.image"
                  :alt="leader.name"
                  class="w-full h-full object-cover object-left group-hover:scale-105 transition-transform duration-500" />
              </div>

              <!-- Details -->
              <div class="p-6 text-center">
                <p
                  class="text-xs font-bold uppercase tracking-wider mb-1"
                  :class="
                    leader.tier === 1 ? 'text-amber-700' : 'text-secondary'
                  ">
                  {{ leader.role }}
                </p>
                <h3
                  class="font-headline-sm text-xl sm:text-2xl font-bold text-primary font-serif leading-snug">
                  {{ leader.name }}
                </h3>

                <!-- Concurrent Roles / Tags -->
                <div
                  v-if="leader.tags && leader.tags.length"
                  class="mt-3 pt-3 border-t border-surface-variant/50 flex flex-wrap items-center justify-center gap-1.5">
                  <span
                    v-for="tag in leader.tags"
                    :key="tag"
                    class="inline-flex items-center gap-1 text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-surface-container text-on-surface-variant">
                    <span
                      class="material-symbols-outlined text-[13px] text-amber-700"
                      >verified</span
                    >
                    {{ tag }}
                  </span>
                </div>
              </div>
            </div>
          </template>
        </div>
      </section>

      <!-- ========================================================= -->
      <!-- COORDINATORS, OFFICERS & ETHICS COMMITTEE                 -->
      <!-- ========================================================= -->
      <section
        v-if="filteredCoordinatorGroups.length > 0"
        id="coordinators-tier"
        class="scroll-mt-28 space-y-14">
        <div
          class="flex flex-col sm:flex-row sm:items-end justify-between border-b-2 border-primary/15 pb-4 gap-2">
          <div>
            <div
              class="flex items-center gap-2 text-xs font-bold tracking-wider uppercase text-amber-700">
              <span class="material-symbols-outlined text-[18px]">hub</span>
              <span>Functional Clusters &amp; Committees</span>
            </div>
            <h2
              class="font-headline-lg text-2xl sm:text-3xl font-bold text-primary mt-1 font-serif">
              Coordinators &amp; Officers
            </h2>
          </div>
          <p class="text-xs sm:text-sm text-on-surface-variant max-w-md">
            Grouped by academic, clinical, research, student services,
            communications, and institutional ethics functions.
          </p>
        </div>

        <!-- Loop Through Functional Clusters -->
        <div
          v-for="cluster in filteredCoordinatorGroups"
          :key="cluster.title"
          class="space-y-6">
          <!-- Cluster Subheader -->
          <div class="flex items-center gap-3">
            <div
              class="w-10 h-10 rounded-xl bg-primary-container text-amber-300 flex items-center justify-center shadow-sm shrink-0">
              <span class="material-symbols-outlined text-[20px]">{{
                cluster.icon
              }}</span>
            </div>
            <div>
              <span
                class="text-[11px] font-bold uppercase tracking-widest text-secondary block">
                {{ cluster.eyebrow }}
              </span>
              <h3
                class="font-headline-sm text-xl sm:text-2xl font-bold text-primary font-serif">
                {{ cluster.title }}
              </h3>
            </div>
          </div>

          <!-- Cluster Members Grid -->
          <div class="grid" :class="cluster.gridClass">
            <div
              v-for="member in cluster.members"
              :key="`${cluster.title}-${member.name}`"
              class="bg-surface-container-lowest rounded-2xl overflow-hidden transition-all duration-300 flex flex-col group"
              :class="
                member.isHead
                  ? 'border-2 border-amber-500 shadow-md hover:shadow-lg'
                  : 'border border-surface-variant/70 shadow-sm hover:border-primary hover:shadow-md'
              ">
              <!-- Image Container -->
              <div
                class="aspect-[4/4] w-full overflow-hidden bg-surface-container relative">
                <img
                  loading="lazy"
                  :src="member.image"
                  :alt="member.name"
                  class="w-full h-full object-cover object-left group-hover:scale-105 transition-transform duration-500" />

                <!-- Top-Right Credential or Head Badge -->
                <span
                  class="absolute top-3 right-3 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full backdrop-blur-sm flex items-center gap-1 shadow-sm"
                  :class="
                    member.isHead
                      ? 'bg-amber-500 text-primary'
                      : 'bg-primary/85 text-amber-200'
                  ">
                  <span
                    v-if="member.isHead"
                    class="material-symbols-outlined text-[13px]"
                    >workspace_premium</span
                  >
                  {{ member.badge }}
                </span>
              </div>

              <!-- Card Text -->
              <div class="p-5 flex flex-col flex-grow justify-between">
                <div>
                  <p
                    class="text-xs font-bold uppercase tracking-wider mb-1"
                    :class="
                      member.isHead ? 'text-amber-700' : 'text-secondary'
                    ">
                    {{ member.role }}
                  </p>
                  <h4
                    class="font-headline-sm text-lg font-bold text-primary group-hover:text-secondary transition-colors leading-snug font-serif">
                    {{ member.name }}
                  </h4>
                  <p
                    v-if="member.credentials"
                    class="text-xs font-semibold text-on-surface-variant mt-0.5">
                    {{ member.credentials }}
                  </p>
                </div>

                <!-- Extra Role / Secondary Tag Pills -->
                <div
                  v-if="member.tags && member.tags.length"
                  class="mt-3 pt-3 border-t border-surface-variant/50 flex flex-wrap gap-1.5">
                  <span
                    v-for="tag in member.tags"
                    :key="tag"
                    class="inline-flex items-center gap-1 text-[11px] font-bold px-2.5 py-1 rounded-lg bg-amber-500/15 text-amber-900 border border-amber-500/30">
                    <span class="material-symbols-outlined text-[13px]"
                      >bookmark_star</span
                    >
                    {{ tag }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- ========================================================= -->
      <!-- STUDENT ORGANIZATION ADVISERS                             -->
      <!-- ========================================================= -->
      <section
        v-if="filteredAdviserOrgs.length > 0"
        id="advisers-tier"
        class="scroll-mt-28 space-y-8">
        <div
          class="flex flex-col sm:flex-row sm:items-end justify-between border-b-2 border-primary/15 pb-4 gap-2">
          <div>
            <div
              class="flex items-center gap-2 text-xs font-bold tracking-wider uppercase text-amber-700">
              <span class="material-symbols-outlined text-[18px]"
                >supervisor_account</span
              >
              <span>Mentorship &amp; Student Guidance</span>
            </div>
            <h2
              class="font-headline-lg text-2xl sm:text-3xl font-bold text-primary mt-1 font-serif">
              Student Organization Advisers
            </h2>
          </div>
          <p class="text-xs sm:text-sm text-on-surface-variant max-w-md">
            Faculty mentors guiding the accredited student councils, academic
            societies, and performing guilds of BulSU CON.
          </p>
        </div>

        <!-- Organization Adviser Cards Grid -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div
            v-for="org in filteredAdviserOrgs"
            :key="org.slug"
            class="bg-surface-container-lowest rounded-2xl p-6 shadow-sm border border-surface-variant/70 hover:border-secondary transition-all flex flex-col justify-between gap-5">
            <!-- Organization Header Row -->
            <div
              class="flex items-center justify-between gap-4 pb-4 border-b border-surface-variant/50">
              <div class="flex items-center gap-3.5 min-w-0">
                <img
                  :src="org.logo"
                  :alt="org.organization"
                  class="w-14 h-14 rounded-full object-contain bg-surface-container p-1 border border-outline-variant/40 shrink-0" />
                <div class="min-w-0">
                  <span
                    class="text-[10px] font-bold uppercase tracking-widest text-secondary block">
                    {{ org.category }}
                  </span>
                  <h3
                    class="font-headline-sm text-lg sm:text-xl font-bold text-primary font-serif truncate">
                    {{ org.organization }}
                  </h3>
                </div>
              </div>

              <router-link
                :to="`/con-community/${org.slug}`"
                class="shrink-0 inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-surface-container hover:bg-secondary hover:text-white text-primary text-xs font-bold transition-colors">
                <span>View Org</span>
                <span class="material-symbols-outlined text-[15px]"
                  >arrow_forward</span
                >
              </router-link>
            </div>

            <!-- Advisers Portrait Pills -->
            <div
              class="grid grid-cols-1 sm:grid-cols-2 gap-3"
              :class="{
                'sm:grid-cols-3': org.advisers.length === 3,
              }">
              <div
                v-for="adviser in org.advisers"
                :key="adviser.name"
                class="flex items-center gap-3 p-2.5 rounded-xl bg-surface-container-low border border-surface-variant/50 hover:border-amber-500/60 transition-colors">
                <img
                  loading="lazy"
                  :src="adviser.image"
                  :alt="adviser.name"
                  class="w-14 h-14 rounded-xl object-cover object-left shrink-0 border border-white shadow-xs" />
                <div class="min-w-0">
                  <span
                    class="text-[10px] font-bold uppercase tracking-wider text-amber-800 block">
                    Faculty Adviser
                  </span>
                  <h4
                    class="text-xs sm:text-sm font-bold text-primary leading-tight">
                    {{ adviser.name }}
                  </h4>
                  <p class="text-[11px] text-on-surface-variant font-medium">
                    {{ adviser.credentials }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Empty Search State -->
      <div
        v-if="
          filteredExecutive.length === 0 &&
          filteredCoordinatorGroups.length === 0 &&
          filteredAdviserOrgs.length === 0
        "
        class="p-12 bg-surface-container-lowest rounded-2xl text-center border border-surface-variant/40">
        <p class="text-on-surface-variant font-semibold">
          No faculty members or roles matched "{{ searchQuery }}".
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import {
  executiveTiers,
  coordinatorGroups,
  adviserOrgs,
} from "../data/faculty";

const searchQuery = ref("");

// --- REACTIVE SEARCH FILTERING ---
const filteredExecutive = computed(() => {
  const q = searchQuery.value.trim().toLowerCase();
  if (!q) return executiveTiers;
  return executiveTiers.filter(
    (item) =>
      item.name.toLowerCase().includes(q) ||
      item.role.toLowerCase().includes(q) ||
      item.credentials.toLowerCase().includes(q) ||
      item.tags.some((t) => t.toLowerCase().includes(q)),
  );
});

const filteredCoordinatorGroups = computed(() => {
  const q = searchQuery.value.trim().toLowerCase();
  if (!q) return coordinatorGroups;
  return coordinatorGroups
    .map((group) => ({
      ...group,
      members: group.members.filter(
        (m) =>
          m.name.toLowerCase().includes(q) ||
          m.role.toLowerCase().includes(q) ||
          m.badge.toLowerCase().includes(q) ||
          group.title.toLowerCase().includes(q) ||
          (m.tags && m.tags.some((t) => t.toLowerCase().includes(q))),
      ),
    }))
    .filter((group) => group.members.length > 0);
});

const filteredAdviserOrgs = computed(() => {
  const q = searchQuery.value.trim().toLowerCase();
  if (!q) return adviserOrgs;
  return adviserOrgs.filter(
    (org) =>
      org.organization.toLowerCase().includes(q) ||
      org.category.toLowerCase().includes(q) ||
      org.advisers.some((a) => a.name.toLowerCase().includes(q)),
  );
});
</script>
