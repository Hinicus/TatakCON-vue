<!-- src/views/HomeView.vue -->
<template>
  <div class="flex flex-col w-full mt-5">
    <!-- Section 1: Top Ambient Banner & Welcome Stage -->
    <section
      class="relative w-full max-w-7xl mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin pt-space-xl md:pt-space-2xl pb-space-2xl md:pb-space-3xl overflow-hidden">
      <div
        class="grid grid-cols-1 lg:grid-cols-12 gap-space-xl lg:gap-gutter items-center">
        <!-- Left Column: Content Narrative (5 Cols on Desktop) -->
        <div class="lg:col-span-5 flex flex-col items-start z-10">
          <!-- Eyebrow Pill -->
          <div
            class="inline-flex items-center gap-space-xs px-space-md py-space-xxs rounded-full bg-secondary-fixed text-on-secondary-fixed mb-space-md shadow-sm border border-secondary/10">
            <span
              class="material-symbols-outlined text-[16px] text-secondary"
              style="font-variation-settings: FILL 1"
              >local_hospital</span
            >
            <span
              class="font-label-sm text-label-sm uppercase tracking-wider font-bold"
              >BulSU College of Nursing • Official Portal</span
            >
          </div>

          <!-- Main Title & Motto Subtitle -->
          <h1
            class="font-display-hero text-display-hero-mobile sm:text-display-hero text-primary tracking-tight font-serif font-bold leading-none mb-2">
            TatakCON
          </h1>
          <p
            class="font-headline-sm text-base sm:text-lg text-secondary italic font-serif mb-space-md">
            "To Save and To Service"
          </p>

          <!-- Narrative Lead -->
          <p
            class="font-body-md sm:font-body-lg text-body-md sm:text-body-lg text-on-surface-variant mb-space-lg leading-relaxed">
            Maligayang pagdating sa opisyal na lunan ng
            <strong class="text-primary font-semibold">#TatakCON</strong>.
            Sinasalamin ng proyektong ito ang kasaysayan, mga organisasyon, at
            ang transisyon ng mga mag-aaral ng College of Nursing tungo sa isang
            panibagong yugto at espasyo ng pagkatuto.
          </p>

          <!-- Primary & Secondary CTA Buttons -->
          <div
            class="flex flex-wrap items-center gap-3 sm:gap-space-sm w-full sm:w-auto">
            <router-link
              to="/our-story"
              class="inline-flex items-center justify-center gap-space-xs px-space-lg py-3 rounded-full bg-primary-container text-on-primary font-label-md text-label-md hover:bg-secondary transition-all transform hover:-translate-y-0.5 shadow-md group flex-1 sm:flex-initial">
              <span>Explore Our Story</span>
              <span
                class="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform"
                >arrow_forward</span
              >
            </router-link>
            <router-link
              to="/con-community"
              class="inline-flex items-center justify-center gap-space-xs px-space-lg py-3 rounded-full bg-surface-container-lowest text-primary border border-outline-variant hover:border-secondary hover:bg-secondary-fixed/40 font-label-md text-label-md transition-all transform hover:-translate-y-0.5 shadow-sm group flex-1 sm:flex-initial">
              <span class="material-symbols-outlined text-[18px] text-secondary"
                >groups</span
              >
              <span>CON Community</span>
            </router-link>
          </div>

          <!-- Compact Institutional Highlights Bar -->
          <div
            class="mt-space-xl pt-space-md border-t border-surface-variant/60 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-on-surface-variant w-full">
            <div class="flex items-center gap-1.5">
              <span class="material-symbols-outlined text-[16px] text-secondary"
                >verified</span
              >
              <span class="font-semibold text-primary">AACCUP Level IV</span>
            </div>
            <span class="text-outline-variant hidden sm:inline">•</span>
            <div class="flex items-center gap-1.5">
              <span class="material-symbols-outlined text-[16px] text-secondary"
                >history_edu</span
              >
              <span>Chartered 2003</span>
            </div>
            <span class="text-outline-variant hidden sm:inline">•</span>
            <div class="flex items-center gap-1.5">
              <span class="material-symbols-outlined text-[16px] text-secondary"
                >diversity_3</span
              >
              <span>8 Student Councils &amp; Guilds</span>
            </div>
          </div>
        </div>

        <!-- Right Column: Interactive Landscape College Showcase Carousel -->
        <HeroCarousel />
      </div>
    </section>

    <!-- Section 2: Explore CON Directory Section -->
    <section
      class="w-full bg-surface-container-low border-y border-surface-variant/40 py-space-2xl md:py-space-3xl">
      <div
        class="max-w-7xl mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin">
        <div
          class="flex flex-col sm:flex-row sm:items-end justify-between gap-space-md mb-space-xl">
          <div>
            <span
              class="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-bold"
              >Directory &amp; Archives</span
            >
            <h2
              class="font-headline-lg text-3xl md:text-4xl font-bold text-primary tracking-tight font-serif mt-1">
              Explore the College
            </h2>
          </div>
          <p class="font-body-sm text-body-sm text-on-surface-variant max-w-md">
            Navigate through the institutional milestones, accredited student
            councils, cultural traditions, and research archives of BulSU CON.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          <router-link
            v-for="card in directoryCards"
            :key="card.to"
            :to="card.to"
            class="bg-surface-container-lowest rounded-2xl p-6 sm:p-8 shadow-sm border border-surface-variant/60 hover:border-secondary hover:shadow-md hover:-translate-y-0.5 transition-all group flex flex-col justify-between h-full">
            <div>
              <div
                class="w-12 h-12 rounded-full bg-secondary-fixed text-on-secondary-fixed flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <span class="material-symbols-outlined text-[24px]">{{
                  card.icon
                }}</span>
              </div>
              <h3
                class="font-headline-sm text-xl font-bold text-primary font-serif group-hover:text-secondary transition-colors">
                {{ card.title }}
              </h3>
              <span
                class="block font-caption text-caption text-secondary uppercase tracking-wider font-semibold mt-1 mb-3">
                {{ card.subtitle }}
              </span>
              <p class="font-body-sm text-on-surface-variant leading-relaxed">
                {{ card.description }}
              </p>
            </div>
            <div
              class="mt-6 flex items-center gap-1 text-sm font-bold text-secondary group-hover:translate-x-1 transition-transform">
              <span>{{ card.cta }}</span>
              <span class="material-symbols-outlined text-[16px]"
                >arrow_forward</span
              >
            </div>
          </router-link>
        </div>
      </div>
    </section>

    <!-- Section 3: Clinical Imperative Callout -->
    <section
      class="w-full max-w-7xl mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin my-space-3xl">
      <div
        class="relative overflow-hidden rounded-lg bg-tertiary-fixed text-on-tertiary-fixed p-space-xl md:p-space-2xl shadow-md">
        <div
          class="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-space-xl">
          <div class="flex items-start gap-space-md max-w-3xl">
            <div
              class="w-14 h-14 rounded-full bg-primary-container text-surface flex items-center justify-center shrink-0 shadow-sm">
              <span
                class="material-symbols-outlined text-[28px] text-tertiary-fixed-dim"
                >lightbulb</span
              >
            </div>
            <div>
              <div class="flex items-center gap-space-xs mb-space-xxs">
                <span
                  class="material-symbols-outlined text-[18px] text-secondary"
                  >location_on</span
                >
                <span
                  class="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-bold"
                  >Clinical Imperative</span
                >
              </div>
              <h3
                class="font-headline-md text-headline-md text-primary mb-space-xs">
                Bakit ito mahalaga?
              </h3>
              <p class="font-body-md text-body-md text-on-surface-variant">
                Ang pag-nars at ang buhay-estudyante ay lumalampas sa mga
                silid-aralan at pader ng ospital. Sinasalamin ng ating mga
                Isko-Nars ang katatagan sa gitna ng pagbabago ng espasyo at
                internal na diaspora—mula sa mga komunidad hanggang sa mga ward
                at laboratoryo—na nagpapatunay ng ating malasakit sa bayan.
              </p>
            </div>
          </div>
        </div>
        <div
          class="absolute -right-12 -bottom-12 w-64 h-64 rounded-full bg-secondary-fixed-dim/30 blur-3xl pointer-events-none"></div>
      </div>
    </section>

    <!-- Section 4: Latest News Section (2-Column Layout) -->
    <section
      class="w-full max-w-7xl mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin pb-space-3xl">
      <div
        class="flex items-center justify-between mb-space-2xl border-b border-surface-container-high pb-space-md">
        <div class="flex items-center gap-space-sm">
          <div
            class="w-10 h-10 rounded-full bg-secondary-fixed flex items-center justify-center text-secondary">
            <span class="material-symbols-outlined text-[22px]">newspaper</span>
          </div>
          <div>
            <h2 class="font-headline-lg text-headline-lg text-primary">
              Latest News
            </h2>
          </div>
        </div>
      </div>

      <!-- Initial Loading Spinner -->
      <div
        v-if="isInitialLoading"
        class="bg-surface-container-lowest rounded-lg p-12 shadow-sm flex flex-col items-center justify-center min-h-[360px] gap-4">
        <div
          class="w-10 h-10 border-4 border-secondary-fixed border-t-secondary rounded-full animate-spin"></div>
        <p
          class="font-label-md text-label-md text-on-surface-variant animate-pulse">
          Loading latest dispatches...
        </p>
      </div>

      <!-- Error State -->
      <div
        v-else-if="fetchError"
        class="bg-surface-container-lowest rounded-lg p-space-xl text-on-surface-variant">
        Failed to load latest news.
      </div>

      <!-- Empty State -->
      <div
        v-else-if="featuredArticles.length === 0"
        class="bg-surface-container-lowest rounded-lg p-space-xl text-on-surface-variant">
        No dispatches published yet.
      </div>

      <!-- Two-Column News Grid -->
      <div
        v-else
        class="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-stretch">
        <!-- Left: Large Featured Article Cards (1st article of each batch) -->
        <div class="lg:col-span-7 flex flex-col gap-space-md">
          <div
            v-for="article in featuredArticles"
            :key="article.id"
            class="bg-surface-container-lowest rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow group h-full flex flex-col">
            <div
              v-if="article.imageUrl"
              class="relative w-full aspect-[16/10] overflow-hidden bg-surface-container">
              <img
                loading="lazy"
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                :src="optimizeImageUrl(article.imageUrl, 900)"
                :alt="article.title" />
            </div>
            <div class="p-space-xl flex flex-col justify-between flex-grow">
              <div>
                <div
                  class="flex items-center gap-space-sm text-on-surface-variant font-caption text-caption uppercase tracking-wider mb-space-xs">
                  <span>{{ article.date }}</span>
                </div>
                <h3
                  class="font-headline-md text-headline-md text-primary mb-space-sm group-hover:text-secondary transition-colors">
                  {{ article.title }}
                </h3>
                <p
                  class="font-body-md text-body-md text-on-surface-variant line-clamp-3 mb-space-lg">
                  {{ article.snippet }}
                </p>
              </div>
              <div
                class="flex items-center justify-between pt-space-md border-t border-surface-container-low mt-auto">
                <div class="flex items-center gap-1">
                  <span
                    class="material-symbols-outlined text-clear-skies text-md"
                    >person</span
                  >
                  <span class="font-label-sm text-label-sm text-primary">{{
                    article.authorName
                  }}</span>
                </div>
                <router-link
                  class="inline-flex items-center gap-space-xs font-label-md text-label-md text-secondary hover:text-primary"
                  :to="`/article/${article.id}`">
                  <span>Read Full Story</span>
                  <span class="material-symbols-outlined text-[16px]"
                    >arrow_forward</span
                  >
                </router-link>
              </div>
            </div>
          </div>
        </div>

        <!-- Right: List of Secondary News Items -->
        <div class="lg:col-span-5 flex flex-col gap-space-md justify-between">
          <article
            v-for="article in listArticles"
            :key="article.id"
            class="p-space-lg bg-surface-container-lowest rounded-DEFAULT shadow-sm hover:shadow-md transition-shadow group flex flex-col h-full">
            <div
              class="flex flex-row-reverse items-center justify-between gap-space-sm mb-space-xxs">
              <span class="font-caption text-caption text-on-surface-variant">{{
                article.date
              }}</span>
            </div>
            <h4
              class="font-title-md text-title-md text-primary group-hover:text-secondary transition-colors mb-space-xs">
              {{ article.title }}
            </h4>
            <p
              class="font-body-sm text-body-sm text-on-surface-variant line-clamp-2 mb-space-sm">
              {{ article.snippet }}
            </p>
            <router-link
              class="inline-flex items-center gap-space-xxs font-label-sm text-label-sm text-secondary hover:text-primary mt-auto"
              :to="`/article/${article.id}`">
              <span>Continue reading</span>
              <span class="material-symbols-outlined text-[14px]"
                >arrow_forward</span
              >
            </router-link>
          </article>
        </div>
      </div>

      <!-- Load More Button -->
      <div v-if="hasMoreArticles" class="flex justify-center mt-12 w-full">
        <button
          type="button"
          @click="loadMore"
          :disabled="isLoadingMore"
          class="px-6 py-3 bg-white border border-[#e0dac9] text-primary rounded-xl font-bold hover:bg-surface-dim transition-colors shadow-sm flex items-center gap-2 cursor-pointer">
          <span
            class="material-symbols-outlined text-[18px]"
            :class="{ 'animate-spin': isLoadingMore }">
            {{ isLoadingMore ? "progress_activity" : "expand_more" }}
          </span>
          <span>{{ isLoadingMore ? "Loading..." : "Load More Articles" }}</span>
        </button>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import HeroCarousel from "../components/HeroCarousel.vue";
import { API_BASE_URL, optimizeImageUrl } from "../utils/api.js";

const directoryCards = [
  {
    to: "/our-story",
    icon: "history_edu",
    title: "Our Story & Heritage",
    subtitle: "Institutional History",
    description:
      "Tuntonin ang ebolusyon ng BulSU College of Nursing—mula sa kanilang unang pangkat ng 200 na mag-aaral ng nars noong 2004 hanggang sa kanilang prestihiyosong estadong AACUP Level IV Re-Accredited sa kasalukuyan.",
    cta: "Read History",
  },
  {
    to: "/con-community",
    icon: "groups",
    title: "CON Community",
    subtitle: "Accredited Councils & Guilds",
    description: `Tuklasin ang masiglang sistema ng pamumuno ng mga mag-aaral.
    Alamin ang 8 opisyal na konseho, akademikong lipunan, at
    cultural guilds na humuhubog sa adbokasiya at kahusayang
    klinikal lampas sa mga pader ng paaralan.`,
    cta: "View Directory",
  },
  {
    to: "/traditions-culture",
    icon: "military_tech",
    title: "Traditions & Culture",
    subtitle: "Ceremonies & Rites",
    description: `Parangalan ang kolektibong pamana ng mga Isko-Nars. Mula sa simbolikong pagsisindi ng Florence Nightingale Lamp hanggang sa mga madamdaming paligsahan sa kakayahang klinikal, tuklasin ang buhay na diwa ng pangkat ng mga nars.`,
    cta: "Explore Traditions",
  },
  {
    to: "/about",
    icon: "museum",
    title: "The #TatakCON Project",
    subtitle: "Academic & Spatial Transition Study",
    description:
      "Isang empirikal na hakbangin sa pananaliksik at digital repository ng koponan ng Bachelor of Public Administration, na nagtatala ng katatagan at mga karanasan ng mga mag-aaral ng nars sa BulSU",
    cta: "Meet the Rese archers",
  },
];

// --- Paginated News State ---
const currentPage = ref(1);
const featuredArticles = ref([]);
const listArticles = ref([]);
const isInitialLoading = ref(true);
const isLoadingMore = ref(false);
const hasMoreArticles = ref(false);
const fetchError = ref(false);

async function fetchNews(page = 1) {
  if (page === 1) {
    isInitialLoading.value = true;
    fetchError.value = false;
  } else {
    isLoadingMore.value = true;
  }

  try {
    const response = await fetch(`${API_BASE_URL}/api/news?page=${page}`);
    if (!response.ok) throw new Error("Failed to fetch news");

    const newsData = await response.json();

    if (newsData && newsData.length > 0) {
      // 1st article of each batch becomes a featured card; articles 2-4 go to the right-hand list
      if (page === 1) {
        featuredArticles.value = [newsData[0]];
        listArticles.value = newsData.slice(1);
      } else {
        featuredArticles.value.push(newsData[0]);
        listArticles.value.push(...newsData.slice(1));
      }
    }

    hasMoreArticles.value = newsData.length >= 4;
  } catch (error) {
    console.error("Error fetching news:", error);
    if (page === 1) fetchError.value = true;
  } finally {
    isInitialLoading.value = false;
    isLoadingMore.value = false;
  }
}

function loadMore() {
  currentPage.value++;
  fetchNews(currentPage.value);
}

onMounted(() => {
  fetchNews(1);
});
</script>
