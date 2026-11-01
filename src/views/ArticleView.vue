<!-- src/views/ArticleView.vue -->
<template>
  <div class="min-h-[calc(100vh-80px)] flex flex-col bg-surface w-full">
    <!-- Initial Loading State -->
    <div
      v-if="isLoading"
      class="max-w-4xl mx-auto w-full my-auto px-6 py-24 flex flex-col items-center justify-center gap-4">
      <div
        class="w-12 h-12 border-4 border-secondary-fixed border-t-secondary rounded-full animate-spin"></div>
      <p
        class="font-label-md text-label-md text-on-surface-variant animate-pulse">
        Loading article details...
      </p>
    </div>

    <!-- Error / Not Found State -->
    <div
      v-else-if="fetchError"
      class="max-w-4xl mx-auto w-full my-auto px-6 py-24 text-center">
      <h1 class="serif-heading text-3xl font-bold text-primary mb-3">
        Article Not Found
      </h1>
      <p class="text-on-surface-variant mb-6">
        The article you are looking for might have been removed or does not
        exist.
      </p>
      <router-link
        to="/"
        class="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-secondary text-white text-xs font-bold">
        <span class="material-symbols-outlined text-[16px]">arrow_back</span>
        <span>Return to Home</span>
      </router-link>
    </div>

    <!-- Main Article Loaded Content -->
    <template v-else-if="article">
      <!-- Unified Header Banner -->
      <section
        class="relative bg-gradient-to-b from-[#1e3a6a] via-[#12284b] to-[#0d1b33] text-white pt-12 pb-16 px-4 sm:px-6 lg:px-8 border-b border-black/10 overflow-hidden">
        <div class="absolute inset-0 pointer-events-none opacity-20">
          <div
            class="absolute -top-24 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#8cc1e9] blur-[120px] rounded-full"></div>
        </div>
        <div class="relative max-w-4xl mx-auto text-center">
          <div
            class="mx-auto w-12 h-12 rounded-full bg-white/10 ring-1 ring-white/20 flex items-center justify-center mb-4 shadow-lg backdrop-blur-sm">
            <span class="material-symbols-outlined text-clear-skies text-2xl"
              >newspaper</span
            >
          </div>

          <h1
            class="serif-heading text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-[1.15] mb-5">
            {{ article.title }}
          </h1>

          <!-- Article Meta Pill Bar -->
          <div
            class="inline-flex flex-wrap items-center justify-center gap-3 sm:gap-5 bg-white/10 ring-1 ring-white/15 rounded-full px-5 py-2.5 text-xs text-slate-200 backdrop-blur-md">
            <div class="flex items-center gap-2">
              <span class="material-symbols-outlined text-clear-skies text-sm"
                >person</span
              >
              <span>{{ article.authorName }}</span>
            </div>
            <span class="hidden sm:inline text-white/30">•</span>
            <div class="flex items-center gap-1.5">
              <span class="material-symbols-outlined text-clear-skies text-sm"
                >calendar_today</span
              >
              <span>{{ article.date }}</span>
            </div>
            <span class="hidden sm:inline text-white/30">•</span>
            <div class="flex items-center gap-1.5">
              <span class="material-symbols-outlined text-clear-skies text-sm"
                >schedule</span
              >
              <span>{{ readTimeMinutes }} min read</span>
            </div>

            <template v-if="article.lastEditedBy">
              <span class="hidden sm:inline text-white/30">•</span>
              <div class="flex items-center gap-1.5">
                <span class="material-symbols-outlined text-white/60 text-sm"
                  >edit_note</span
                >
                <span class="text-white/80 italic text-[11px]">
                  Updated by {{ article.lastEditedBy }} on
                  {{ article.lastUpdatedAt }}
                </span>
              </div>
            </template>

            <span class="hidden sm:inline text-white/30">•</span>
            <button
              type="button"
              @click="shareArticle"
              class="inline-flex items-center gap-1 text-clear-skies hover:text-white font-bold transition-colors focus:outline-none cursor-pointer">
              <span class="material-symbols-outlined text-sm">{{
                shareIcon
              }}</span>
              <span>{{ shareText }}</span>
            </button>
          </div>
        </div>
      </section>

      <!-- Main Article Body -->
      <main
        class="w-full max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-6 sm:py-10 lg:py-14 flex-1">
        <div class="grid grid-cols-1 gap-8 xl:gap-12 items-start">
          <article
            class="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-10 lg:p-12 border border-[#e0dac9] shadow-sm w-full">
            <!-- Lead Image Banner (Adapts to natural proportions) -->
            <figure
              v-if="article.imageUrl"
              class="mb-6 sm:mb-10 rounded-xl sm:rounded-2xl overflow-hidden border border-[#e0dac9] shadow-sm bg-[#0a172c] relative">
              <div
                class="w-full max-h-[540px] flex items-center justify-center relative overflow-hidden bg-gradient-to-b from-[#12284b] to-[#0a172c]">
                <img
                  :src="optimizeImageUrl(article.imageUrl, 1400)"
                  :alt="article.title"
                  class="w-auto max-w-full h-auto max-h-[540px] object-contain mx-auto" />
                <div
                  class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none"></div>
                <div
                  v-if="article.imageCredit"
                  class="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 z-10 pointer-events-none">
                  <span
                    class="text-[11px] text-slate-200 bg-black/50 backdrop-blur-sm px-2.5 py-1 rounded-full border border-white/15">
                    Photo: {{ article.imageCredit }}
                  </span>
                </div>
              </div>
              <figcaption
                v-if="article.imageCaption"
                class="p-3.5 text-xs text-slate-600 bg-surface-container-low border-t border-[#e0dac9] flex items-center justify-between">
                <span>{{ article.imageCaption }}</span>
              </figcaption>
            </figure>

            <!-- Article Body Content (Quill HTML) -->
            <div
              class="prose prose-lg max-w-none prose-ul:list-disc prose-ol:list-decimal prose-a:text-blueberry"
              v-html="sanitizedContent"></div>
          </article>
        </div>

        <!-- Other Recommended News Section -->
        <section
          v-if="otherArticles.length > 0"
          class="mt-16 pt-12 border-t border-[#e0dac9]">
          <div class="flex items-center justify-between mb-8">
            <div>
              <span
                class="text-xs font-bold uppercase tracking-widest text-[#438bc4] block mb-1">
                Keep Reading
              </span>
              <h2
                class="serif-heading text-2xl sm:text-3xl font-bold text-[#12284b]">
                Other Articles
              </h2>
            </div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <router-link
              v-for="item in otherArticles"
              :key="item.id"
              :to="`/article/${item.id}`"
              class="bg-white rounded-2xl border border-[#e0dac9] overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col group hover:-translate-y-1">
              <div
                v-if="item.imageUrl"
                class="aspect-[16/10] w-full overflow-hidden bg-slate-900">
                <img
                  loading="lazy"
                  :src="optimizeImageUrl(item.imageUrl, 600)"
                  :alt="item.title"
                  class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div class="p-6 flex flex-col flex-grow justify-between">
                <div>
                  <span
                    class="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-2">
                    {{ item.date }}
                  </span>
                  <h3
                    class="serif-heading text-xl font-bold text-[#12284b] group-hover:text-[#0055a0] transition-colors mb-2 line-clamp-2">
                    {{ item.title }}
                  </h3>
                  <p class="text-sm text-slate-600 line-clamp-3 mb-4">
                    {{ item.snippet }}
                  </p>
                </div>
                <div
                  class="pt-4 border-t border-[#e0dac9]/60 flex items-center justify-between mt-auto">
                  <span
                    class="text-xs font-bold text-[#12284b] flex items-center gap-1">
                    <span
                      class="material-symbols-outlined text-[#438bc4] text-sm"
                      >person</span
                    >
                    {{ item.authorName }}
                  </span>
                  <span
                    class="material-symbols-outlined text-sm text-[#0055a0] group-hover:translate-x-1 transition-transform">
                    arrow_forward
                  </span>
                </div>
              </div>
            </router-link>
          </div>
        </section>
      </main>
    </template>
  </div>
</template>

<script setup>
import { ref, computed, watch, onMounted } from "vue";
import { useRoute } from "vue-router";
import DOMPurify from "dompurify";
import { API_BASE_URL, optimizeImageUrl } from "../utils/api.js";

const route = useRoute();

const article = ref(null);
const otherArticles = ref([]);
const isLoading = ref(true);
const fetchError = ref(false);

const shareText = ref("Share");
const shareIcon = ref("share");

const readTimeMinutes = computed(() => {
  if (!article.value?.content) return 1;
  const tempDiv = document.createElement("div");
  tempDiv.innerHTML = article.value.content;
  const plainText = tempDiv.textContent || "";
  const wordCount = plainText.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.ceil(wordCount / 200));
});

const sanitizedContent = computed(() => {
  if (!article.value?.content) return "";
  return DOMPurify.sanitize(article.value.content, {
    USE_PROFILES: { html: true },
  });
});

async function fetchArticleData(id) {
  isLoading.value = true;
  fetchError.value = false;

  try {
    const res = await fetch(`${API_BASE_URL}/api/news/${id}`);
    if (!res.ok) throw new Error("Article not found");
    article.value = await res.json();
    document.title = `${article.value.title} - TatakCON`;

    // Fetch other news recommendations
    const listRes = await fetch(`${API_BASE_URL}/api/news?page=1`);
    if (listRes.ok) {
      const allNews = await listRes.json();
      otherArticles.value = allNews
        .filter((item) => item.id !== id)
        .slice(0, 3);
    }
  } catch (err) {
    console.error("Error fetching single article:", err);
    fetchError.value = true;
  } finally {
    isLoading.value = false;
  }
}

// Watch for route ID changes so clicking a recommendation card instantly loads the new story
watch(
  () => route.params.id,
  (newId) => {
    if (newId) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      fetchArticleData(newId);
    }
  },
);

async function shareArticle() {
  const shareData = {
    title: `${article.value?.title} - TatakCON`,
    text: article.value?.snippet || article.value?.title,
    url: window.location.href,
  };

  try {
    if (navigator.share) {
      await navigator.share(shareData);
    } else {
      await navigator.clipboard.writeText(window.location.href);
      shareText.value = "Link Copied!";
      shareIcon.value = "check";
      setTimeout(() => {
        shareText.value = "Share";
        shareIcon.value = "share";
      }, 2000);
    }
  } catch (err) {
    console.log("Share canceled or failed:", err);
  }
}

onMounted(() => {
  if (route.params.id) {
    fetchArticleData(route.params.id);
  }
});
</script>

<style scoped>
.serif-heading {
  font-family: "Newsreader", Georgia, serif;
}
.prose p {
  margin-bottom: 1rem;
  line-height: 1.85;
  font-size: 1.125rem;
  color: #2c3e50;
}
.prose h2 {
  font-family: "Newsreader", Georgia, serif;
  font-size: 1.875rem;
  font-weight: 700;
  color: #12284b;
  margin-top: 2.5rem;
  margin-bottom: 1rem;
}
.prose h3 {
  font-family: "Newsreader", Georgia, serif;
  font-size: 1.45rem;
  font-weight: 600;
  color: #12284b;
  margin-top: 2rem;
  margin-bottom: 0.75rem;
}
.prose blockquote {
  border-left: 4px solid #0055a0;
  padding-left: 1.5rem;
  margin: 2rem 0;
  font-style: italic;
  color: #12284b;
  font-family: "Newsreader", Georgia, serif;
  font-size: 1.35rem;
  line-height: 1.6;
}
</style>
