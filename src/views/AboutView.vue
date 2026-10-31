<template>
  <main class="w-full flex-grow bg-surface">
    <div class="flex flex-col w-full">
      <!-- Top Banner / Header -->
      <section
        class="w-full relative overflow-hidden px-margin-mobile md:px-margin-tablet lg:px-margin py-space-2xl md:py-space-3xl text-white text-center"
        style="
          background: radial-gradient(
            circle at 50% 20%,
            rgb(30, 58, 106) 0%,
            rgb(18, 40, 75) 60%,
            rgb(13, 27, 51) 100%
          );
        ">
        <div
          class="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px] opacity-5 pointer-events-none"></div>
        <div class="max-w-4xl mx-auto flex flex-col items-center relative z-10">
          <div
            class="w-14 h-14 rounded-full bg-white/10 ring-1 ring-white/15 flex items-center justify-center mb-space-sm shadow-md">
            <span
              class="material-symbols-outlined text-[30px] text-clear-skies"
              style="font-variation-settings: FILL 1"
              >info</span
            >
          </div>
          <div class="inline-flex items-center gap-space-xs mb-space-xs">
            <span
              class="font-caption text-caption text-clear-skies font-bold tracking-wider uppercase"
              >Bulacan State University • Research &amp; Digital Archive</span
            >
          </div>
          <h1
            class="font-headline-lg text-headline-lg md:text-[42px] md:leading-[50px] font-semibold text-white tracking-tight mb-space-sm font-serif">
            About #TatakCON
          </h1>
          <p
            class="font-body-md text-[16px] text-[#c4d7ec] max-w-2xl mx-auto mb-space-md leading-relaxed font-normal">
            An academic research initiative and digital repository documenting
            the heritage, spatial transition, and lived experiences of the BulSU
            College of Nursing community.
          </p>
          <div
            class="inline-flex items-center gap-space-xs bg-white/10 ring-1 ring-white/15 px-space-md py-1.5 rounded-full text-white backdrop-blur-sm shadow-sm">
            <span class="material-symbols-outlined text-[18px] text-clear-skies"
              >verified</span
            >
            <span class="font-label-sm text-label-sm font-medium text-white"
              >ARP Research Project • Academic Year 2026–2027</span
            >
          </div>
        </div>
      </section>

      <!-- Two-Column Primary Layout (Sticky Sub-Nav + Main Content) -->
      <div
        class="max-w-7xl mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin py-space-2xl w-full">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-start">
          <!-- Left Sidebar / Sticky Rail -->
          <aside class="lg:col-span-3 sticky top-28 z-20">
            <div
              class="bg-surface-container-lowest rounded-2xl p-space-lg shadow-sm border border-surface-variant/40">
              <div
                class="flex items-center justify-between pb-space-sm mb-space-sm border-b border-surface-variant/40">
                <span
                  class="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant"
                  >Contents</span
                >
                <span class="material-symbols-outlined text-outline text-[18px]"
                  >format_list_bulleted</span
                >
              </div>
              <nav
                class="flex flex-row lg:flex-col gap-space-xs overflow-x-auto lg:overflow-visible pb-space-xs lg:pb-0">
                <button
                  v-for="item in tocItems"
                  :key="item.id"
                  type="button"
                  @click="scrollToSection(item.id)"
                  class="group flex items-center justify-between px-space-md py-space-sm rounded-full font-label-md text-label-md transition-all cursor-pointer shrink-0 lg:shrink"
                  :class="
                    activeSection === item.id
                      ? 'bg-secondary-fixed text-primary shadow-xs'
                      : 'text-on-surface-variant hover:bg-surface-container hover:text-on-surface'
                  ">
                  <span class="flex items-center gap-space-xs">
                    <span
                      class="w-1.5 h-1.5 rounded-full shrink-0 transition-colors"
                      :class="
                        activeSection === item.id
                          ? 'bg-secondary'
                          : 'bg-outline-variant'
                      "></span>
                    {{ item.label }}
                  </span>
                  <span
                    class="material-symbols-outlined text-[16px] shrink-0 transition-opacity ml-2"
                    :class="
                      activeSection === item.id
                        ? 'text-secondary opacity-100'
                        : 'opacity-0 group-hover:opacity-100'
                    "
                    >arrow_forward</span
                  >
                </button>
              </nav>

              <div
                class="hidden lg:block mt-space-lg p-space-md bg-surface-container-low rounded-xl border border-surface-variant/40">
                <span
                  class="font-label-sm text-label-sm text-secondary font-semibold block mb-space-xxs"
                  >Research Purpose</span
                >
                <p class="font-body-sm text-body-sm text-on-surface-variant">
                  Pinapalakas ang mga tinig, pamanang institusyonal, at
                  mapag-angkop na katatagan ng komunidad ng BulSU College of
                  Nursing.
                </p>
              </div>
            </div>
          </aside>

          <!-- Right Main Content Area (9 Columns) -->
          <div class="lg:col-span-9 flex flex-col gap-space-3xl">
            <!-- SUBSECTION 1: PROJECT OVERVIEW -->
            <section class="scroll-mt-28" id="project-overview">
              <!-- Group Photo Banner -->
              <div
                class="w-full mb-space-lg rounded-2xl overflow-hidden shadow-md border border-outline-variant/30 relative group bg-surface-container">
                <img
                  alt="#TatakCON Research Group"
                  class="w-full h-72 sm:h-96 object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  src="/images/researchers/tatakcon-research-group-pic-1.jpg" />
                <div
                  class="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/30 to-transparent flex items-end p-space-lg">
                  <div>
                    <span
                      class="inline-flex items-center px-3 py-1 rounded-full text-caption font-semibold bg-white/20 text-white backdrop-blur-md mb-2 border border-white/20">
                      ARP Research Team
                    </span>
                    <h3
                      class="text-white font-headline-md text-2xl sm:text-3xl font-bold tracking-tight font-serif">
                      #TatakCON Research Group
                    </h3>
                    <p
                      class="text-white/85 font-body-sm text-xs sm:text-sm mt-1">
                      Bulacan State University • Academic &amp; Spatial
                      Transition Study
                    </p>
                  </div>
                </div>
              </div>

              <div class="flex items-center justify-between mb-space-md">
                <div>
                  <span
                    class="font-caption text-caption uppercase tracking-wider text-secondary font-bold"
                    >Initiative &amp; Origins</span
                  >
                  <h2
                    class="font-headline-lg text-2xl sm:text-3xl font-bold text-primary font-serif">
                    Project Overview
                  </h2>
                </div>
                <span
                  class="px-space-md py-1 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-sm text-label-sm font-bold"
                  >TatakCON • 2026</span
                >
              </div>

              <div
                class="bg-surface-container-lowest rounded-2xl p-space-lg md:p-space-xl shadow-sm border border-secondary-fixed/40">
                <div
                  class="grid grid-cols-1 md:grid-cols-12 gap-gutter items-center">
                  <!-- Left Visual Banner -->
                  <div class="md:col-span-5 flex flex-col gap-space-sm">
                    <div
                      class="relative overflow-hidden rounded-2xl group shadow-md border border-outline-variant/30 bg-surface-container aspect-[4/4]">
                      <img
                        loading="lazy"
                        class="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                        alt="BulSU College of Nursing Emblem"
                        src="/images/con-org-logo/college-of-nursing.jpg" />
                      <div
                        class="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent"></div>
                      <div
                        class="absolute bottom-4 left-4 right-4 text-surface">
                        <span
                          class="px-2.5 py-0.5 rounded-full bg-secondary-fixed text-on-secondary-fixed font-caption text-caption inline-block mb-1 font-bold"
                          >BulSU College of Nursing</span
                        >
                        <p
                          class="font-title-sm text-title-sm text-surface leading-snug font-serif">
                          #TatakCON
                        </p>
                      </div>
                    </div>
                  </div>

                  <!-- Right Description & Pillars -->
                  <div class="md:col-span-7 flex flex-col justify-between">
                    <div>
                      <p
                        class="font-body-md text-body-md text-on-surface-variant mb-space-sm leading-relaxed">
                        Ang proyektong ito, na pinamagatang
                        <strong class="text-primary font-semibold"
                          >"#TatakCON: Pagsusuri sa Konsepto ng Diaspora at
                          Karanasan ng mga Mag-aaral ng College of Nursing sa
                          Transisyon sa Panibagong Espasyo,"</strong
                        >
                        ay isang masusing pag-aaral na naglalayong tuklasin at
                        unawain ang mga hamon, pag-angkop, at dinamika ng mga
                        mag-aaral habang sila ay tumatawid sa iba't ibang yugto
                        ng kanilang akademiko at propesyonal na paglalakbay.
                      </p>
                      <p
                        class="font-body-sm text-body-sm text-on-surface-variant mb-space-lg leading-relaxed">
                        Sa gitna ng mga pagbabago sa pisikal na espasyo,
                        istruktura, at sistema ng Bulacan State University,
                        tinatalakay ng konseptong papel na ito ang mga kuwento
                        ng katatagan, pagkakaisa, at paghubog sa pagkatao ng
                        bawat Isko-Nars. Layunin din nitong magsilbi bilang
                        isang digital na lunan at arkibo na nagtatampok hindi
                        lamang sa kasaysayan at mga tagumpay ng kolehiyo kundi
                        pati na rin sa totoong karanasan at tinig ng komunidad.
                      </p>
                    </div>

                    <!-- Feature Badge Icons -->
                    <div
                      class="grid grid-cols-3 gap-space-sm pt-space-sm bg-surface-container-low rounded-xl p-space-sm border border-surface-variant/40">
                      <div
                        class="flex flex-col items-center text-center p-space-xs rounded-lg bg-surface-container-lowest shadow-sm">
                        <div
                          class="w-10 h-10 rounded-full bg-tertiary-fixed text-on-tertiary-fixed-variant flex items-center justify-center mb-space-xxs">
                          <span
                            class="material-symbols-outlined text-[20px]"
                            style="font-variation-settings: FILL 1"
                            >travel_explore</span
                          >
                        </div>
                        <span
                          class="font-label-sm text-label-sm text-primary font-semibold"
                          >Spatial Study</span
                        >
                        <span
                          class="font-caption text-caption text-on-surface-variant"
                          >Transition</span
                        >
                      </div>
                      <div
                        class="flex flex-col items-center text-center p-space-xs rounded-lg bg-surface-container-lowest shadow-sm">
                        <div
                          class="w-10 h-10 rounded-full bg-secondary-fixed text-on-secondary-fixed-variant flex items-center justify-center mb-space-xxs">
                          <span
                            class="material-symbols-outlined text-[20px]"
                            style="font-variation-settings: FILL 1"
                            >diversity_3</span
                          >
                        </div>
                        <span
                          class="font-label-sm text-label-sm text-primary font-semibold"
                          >Advocacy</span
                        >
                        <span
                          class="font-caption text-caption text-on-surface-variant"
                          >Student Voice</span
                        >
                      </div>
                      <div
                        class="flex flex-col items-center text-center p-space-xs rounded-lg bg-surface-container-lowest shadow-sm">
                        <div
                          class="w-10 h-10 rounded-full bg-primary-fixed text-on-primary-fixed flex items-center justify-center mb-space-xxs">
                          <span
                            class="material-symbols-outlined text-[20px]"
                            style="font-variation-settings: FILL 1"
                            >museum</span
                          >
                        </div>
                        <span
                          class="font-label-sm text-label-sm text-primary font-semibold"
                          >Heritage</span
                        >
                        <span
                          class="font-caption text-caption text-on-surface-variant"
                          >Digital Archive</span
                        >
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <!-- SUBSECTION 2: RESEARCHERS & PROJECT STAFF -->
            <ResearchersSection />

            <!-- SUBSECTION 3: CONTACT INFORMATION -->
            <section class="scroll-mt-28" id="contact">
              <div class="flex items-center justify-between mb-space-md">
                <div>
                  <span
                    class="font-caption text-caption uppercase tracking-wider text-secondary font-bold"
                    >Liaison &amp; Campus Location</span
                  >
                  <h2
                    class="font-headline-lg text-2xl sm:text-3xl font-bold text-primary font-serif">
                    Contact Information
                  </h2>
                </div>
                <div
                  class="flex items-center gap-space-xs text-on-surface-variant font-label-sm text-label-sm">
                  <span
                    class="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse shrink-0"></span>
                  <span>BulSU Main Campus</span>
                </div>
              </div>

              <!-- Two-Column Split: Details Card vs Map Card -->
              <div class="grid grid-cols-1 md:grid-cols-12 gap-gutter">
                <!-- Left Contact Details Card -->
                <div
                  class="md:col-span-5 bg-surface-container-lowest rounded-2xl p-space-lg sm:p-space-xl shadow-sm border border-surface-variant/40 flex flex-col justify-between">
                  <div>
                    <h3
                      class="font-headline-sm text-xl font-bold text-primary mb-space-xs font-serif">
                      BulSU College of Nursing
                    </h3>
                    <p
                      class="font-body-sm text-body-sm text-on-surface-variant mb-space-lg">
                      Reach out for academic inquiries, student organization
                      affairs, or #TatakCON research documentation.
                    </p>

                    <div class="space-y-space-md">
                      <!-- Campus Address -->
                      <div
                        class="flex items-start gap-space-md p-space-sm rounded-xl bg-surface-container-low">
                        <div
                          class="w-10 h-10 rounded-full bg-primary-fixed text-on-primary-fixed flex items-center justify-center flex-shrink-0">
                          <span class="material-symbols-outlined text-[20px]"
                            >location_on</span
                          >
                        </div>
                        <div>
                          <span
                            class="block font-caption text-caption text-on-surface-variant uppercase tracking-wider font-semibold"
                            >Campus Address</span
                          >
                          <p
                            class="font-label-md text-label-md text-primary font-semibold">
                            Bulacan State University — Main Campus
                          </p>
                          <p
                            class="font-body-sm text-body-sm text-on-surface-variant">
                            MacArthur Highway, Brgy. Guinhawa, City of Malolos,
                            Bulacan 3000
                          </p>
                        </div>
                      </div>

                      <!-- Official Portal / Website -->
                      <div
                        class="flex items-start gap-space-md p-space-sm rounded-xl bg-surface-container-low">
                        <div
                          class="w-10 h-10 rounded-full bg-secondary-fixed text-on-secondary-fixed-variant flex items-center justify-center flex-shrink-0">
                          <span class="material-symbols-outlined text-[20px]"
                            >language</span
                          >
                        </div>
                        <div>
                          <span
                            class="block font-caption text-caption text-on-surface-variant uppercase tracking-wider font-semibold"
                            >University Portal</span
                          >
                          <a
                            class="font-label-md text-label-md text-primary hover:text-secondary transition-colors font-semibold"
                            href="https://bulsu.edu.ph"
                            target="_blank"
                            rel="noopener noreferrer"
                            >bulsu.edu.ph</a
                          >
                          <span
                            class="block font-caption text-caption text-outline"
                            >Official Bulacan State University Website</span
                          >
                        </div>
                      </div>

                      <!-- Community Directory Link -->
                      <div
                        class="flex items-start gap-space-md p-space-sm rounded-xl bg-surface-container-low">
                        <div
                          class="w-10 h-10 rounded-full bg-tertiary-fixed text-on-tertiary-fixed-variant flex items-center justify-center flex-shrink-0">
                          <span class="material-symbols-outlined text-[20px]"
                            >groups</span
                          >
                        </div>
                        <div>
                          <span
                            class="block font-caption text-caption text-on-surface-variant uppercase tracking-wider font-semibold"
                            >Student Councils &amp; Orgs</span
                          >
                          <a
                            class="font-label-md text-label-md text-primary hover:text-secondary transition-colors font-semibold"
                            href="/pages/con-community/con-community.html"
                            >Explore CON Community Directory</a
                          >
                          <span
                            class="block font-caption text-caption text-outline"
                            >8 Accredited Organizations &amp; Guilds</span
                          >
                        </div>
                      </div>
                    </div>
                  </div>

                  <!-- Quick Action -->
                  <div class="mt-space-lg pt-space-md">
                    <router-link
                      class="inline-flex items-center justify-center w-full px-space-lg py-3 rounded-full bg-primary text-on-primary font-label-md text-label-md hover:bg-secondary transition-all shadow-sm gap-2"
                      to="/con-community">
                      <span>View CON Organizations</span>
                      <span class="material-symbols-outlined text-[18px]"
                        >arrow_forward</span
                      >
                    </router-link>
                  </div>
                </div>

                <!-- Right Embedded Interactive Location Map Card -->
                <div
                  class="md:col-span-7 bg-surface-container-lowest rounded-2xl p-space-lg shadow-sm border border-surface-variant/40 flex flex-col justify-between">
                  <div>
                    <div class="flex items-center justify-between mb-space-sm">
                      <div class="flex items-center gap-space-xs">
                        <span
                          class="material-symbols-outlined text-[20px] text-secondary"
                          >explore</span
                        >
                        <span
                          class="font-title-sm text-title-sm text-primary font-semibold"
                          >BulSU Main Campus Navigation</span
                        >
                      </div>
                      <a
                        href="https://maps.app.goo.gl/Pgmn5X9E3kxM5MkC8"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="px-3 py-1 rounded-full bg-surface-container text-primary font-caption text-caption font-semibold hover:bg-secondary-fixed transition-colors inline-flex items-center gap-1">
                        <span>Open in Maps</span>
                        <span class="material-symbols-outlined text-[13px]"
                          >open_in_new</span
                        >
                      </a>
                    </div>

                    <!-- Live Embedded Map of Bulacan State University -->
                    <div
                      class="relative w-full h-80 rounded-xl overflow-hidden shadow-inner border border-outline-variant/30 bg-surface-container">
                      <iframe
                        title="Bulacan State University Main Campus Map"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d442.0453679959229!2d120.81351149212963!3d14.857146921834378!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x339653db6cd5818f%3A0x92e62c100f736c98!2sBulSU%20College%20of%20Nursing!5e0!3m2!1sen!2sph!4v1793281635254!5m2!1sen!2sph"
                        class="w-full h-full border-0"
                        allowfullscreen=""
                        loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                  </div>

                  <!-- Campus Landmarks Strip -->
                  <div
                    class="grid grid-cols-1 sm:grid-cols-2 gap-space-sm mt-space-md pt-space-xs">
                    <div
                      class="p-space-sm rounded-xl bg-surface-container-low flex items-center gap-space-xs">
                      <span
                        class="material-symbols-outlined text-[20px] text-secondary shrink-0"
                        >school</span
                      >
                      <div class="text-left min-w-0">
                        <span
                          class="block font-label-sm text-label-sm text-primary font-semibold truncate"
                          >Main Campus • Guinhawa</span
                        >
                        <span
                          class="font-caption text-caption text-on-surface-variant block truncate"
                          >City of Malolos, Bulacan</span
                        >
                      </div>
                    </div>
                    <div
                      class="p-space-sm rounded-xl bg-surface-container-low flex items-center gap-space-xs">
                      <span
                        class="material-symbols-outlined text-[20px] text-secondary shrink-0"
                        >verified</span
                      >
                      <div class="text-left min-w-0">
                        <span
                          class="block font-label-sm text-label-sm text-primary font-semibold truncate"
                          >AACCUP Level IV</span
                        >
                        <span
                          class="font-caption text-caption text-on-surface-variant block truncate"
                          >Re-Accredited Nursing Program</span
                        >
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import ResearchersSection from "../components/About/ResearchersSection.vue";

import { ref, onMounted, onUnmounted } from "vue";

// --- 1. Sticky Table of Contents Navigation ---
const activeSection = ref("Project Overview");

const tocItems = [
  { id: "project-overview", label: "Project Overview" },
  { id: "researchers", label: "Researchers" },
  { id: "contact", label: "Contact" },
];

function scrollToSection(id) {
  activeSection.value = id;
  const targetElem = document.getElementById(id);
  if (targetElem) {
    window.scrollTo({
      top: targetElem.offsetTop - 110,
      behavior: "smooth",
    });
  }
}

function handleScrollSpy() {
  const scrollPosition = window.scrollY + 180;
  for (const item of tocItems) {
    const el = document.getElementById(item.id);
    if (el && scrollPosition >= el.offsetTop) {
      activeSection.value = item.id;
    }
  }
}

onMounted(() => {
  window.addEventListener("scroll", handleScrollSpy, { passive: true });
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScrollSpy);
});
</script>
