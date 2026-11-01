<!-- src/views/admin/ManageView.vue -->
<template>
  <div class="flex-grow flex flex-col items-center py-10 px-4 sm:px-6">
    <div
      class="max-w-4xl w-full bg-surface-container-lowest p-6 sm:p-10 rounded-2xl shadow-sm border border-surface-dim">
      <!-- Dashboard Header -->
      <div
        class="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-4">
        <div>
          <span
            class="text-xs font-bold uppercase tracking-widest text-[#438bc4] mb-2 block"
            >Admin Portal</span
          >
          <h1 class="text-3xl font-serif font-bold text-primary">
            Manage Articles
          </h1>
          <p
            class="text-sm font-bold text-on-surface-variant mt-2 flex items-center gap-1.5">
            <span class="material-symbols-outlined text-[16px]"
              >account_circle</span
            >
            <span>
              Logged in as {{ userName }} ({{ userRole.toUpperCase() }})
            </span>
          </p>
        </div>

        <!-- Action Buttons -->
        <div class="flex items-center gap-3">
          <button
            type="button"
            @click="handleLogout"
            class="bg-surface-container-high hover:bg-surface-dim text-on-surface font-bold py-2.5 px-4 rounded-xl transition-colors flex items-center gap-2 text-sm border border-outline-variant cursor-pointer">
            <span class="material-symbols-outlined text-[18px]">logout</span>
            Sign Out
          </button>
          <router-link
            to="/admin/create"
            class="bg-secondary hover:bg-primary text-white text-sm font-bold py-2.5 px-4 rounded-xl transition-colors flex items-center gap-2 shadow-sm">
            <span class="material-symbols-outlined text-[18px]">add</span> New
          </router-link>
        </div>
      </div>

      <!-- Admin Author Directory Panel (Visible only to Admins) -->
      <div
        v-if="userRole === 'admin'"
        class="mb-10 p-6 bg-surface-container-low rounded-xl border border-surface-dim">
        <div
          class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
          <h2
            class="font-title-sm text-title-sm text-primary flex items-center gap-2">
            <span class="material-symbols-outlined text-xl">group</span>
            Author Directory &amp; Approvals
          </h2>

          <!-- Author Status Tabs -->
          <div
            class="flex flex-wrap w-full sm:w-auto bg-surface-container-highest p-1 rounded-xl border border-outline-variant/40">
            <button
              v-for="tab in authorTabs"
              :key="tab.value"
              type="button"
              @click="currentUserTab = tab.value"
              class="px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer"
              :class="
                currentUserTab === tab.value
                  ? 'bg-primary text-white shadow-sm'
                  : 'text-on-surface-variant hover:text-primary'
              ">
              {{ tab.label }} ({{ tab.count }})
            </button>
          </div>
        </div>

        <div v-if="isLoadingAuthors" class="py-2">
          <p class="text-sm text-on-surface-variant font-bold">
            Loading authors...
          </p>
        </div>
        <div v-else-if="filteredAuthors.length === 0" class="py-2">
          <p class="text-sm text-on-surface-variant">
            No {{ currentUserTab }} authors found.
          </p>
        </div>
        <div v-else class="flex flex-col gap-3">
          <div
            v-for="author in filteredAuthors"
            :key="author.uid"
            class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-3.5 bg-surface-bright rounded-lg border border-outline-variant">
            <div class="min-w-0">
              <p class="text-sm font-bold text-primary truncate">
                {{ author.name }}
              </p>
              <p class="text-xs text-on-surface-variant break-all">
                {{ author.email }}
              </p>
            </div>
            <div class="flex items-center gap-2 w-full sm:w-auto shrink-0">
              <template v-if="currentUserTab === 'pending'">
                <button
                  type="button"
                  @click="updateAuthorStatus(author.uid, 'approved')"
                  class="flex-1 sm:flex-initial px-4 py-2 bg-[#438bc4] hover:bg-[#3472a5] text-white rounded-lg text-xs font-bold transition-colors shadow-sm text-center cursor-pointer">
                  Approve
                </button>
                <button
                  type="button"
                  @click="updateAuthorStatus(author.uid, 'rejected')"
                  class="flex-1 sm:flex-initial px-4 py-2 bg-surface-container-high hover:bg-[#ba1a1a] hover:text-white text-on-surface-variant rounded-lg text-xs font-bold transition-colors border border-outline-variant hover:border-[#ba1a1a] text-center cursor-pointer">
                  Reject
                </button>
              </template>
              <button
                v-else-if="currentUserTab === 'approved'"
                type="button"
                @click="updateAuthorStatus(author.uid, 'rejected')"
                class="w-full sm:w-auto px-4 py-2 bg-surface-container-high hover:bg-[#ba1a1a] hover:text-white text-on-surface-variant rounded-lg text-xs font-bold transition-colors border border-outline-variant hover:border-[#ba1a1a] text-center cursor-pointer">
                Revoke Access
              </button>
              <button
                v-else-if="currentUserTab === 'rejected'"
                type="button"
                @click="updateAuthorStatus(author.uid, 'approved')"
                class="w-full sm:w-auto px-4 py-2 bg-[#438bc4] hover:bg-[#3472a5] text-white rounded-lg text-xs font-bold transition-colors shadow-sm text-center cursor-pointer">
                Restore &amp; Approve
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Article Search & Filter Bar -->
      <div
        class="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 mb-4 pb-4 border-b border-surface-dim">
        <!-- Search Input -->
        <div class="relative flex-1">
          <span
            class="material-symbols-outlined text-[18px] text-on-surface-variant absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none"
            >search</span
          >
          <input
            v-model="searchQuery"
            type="text"
            placeholder="Search by headline or author..."
            class="w-full pl-10 pr-4 py-2 text-sm border border-outline-variant rounded-xl bg-surface-bright focus:ring-2 focus:ring-secondary focus:outline-none" />
        </div>

        <!-- Ownership Filter Pills -->
        <div class="flex items-center justify-between sm:justify-end gap-2">
          <div
            class="flex flex-wrap bg-surface-container-low p-1 rounded-xl border border-outline-variant/50">
            <button
              v-for="filter in articleFilters"
              :key="filter.value"
              type="button"
              @click="currentArticleFilter = filter.value"
              class="px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer"
              :class="
                currentArticleFilter === filter.value
                  ? 'bg-secondary text-white shadow-sm'
                  : 'text-on-surface-variant hover:text-primary'
              ">
              {{ filter.label }}
            </button>
          </div>
          <span
            class="text-xs font-bold text-on-surface-variant whitespace-nowrap ml-1">
            {{ filteredArticles.length }} of {{ allArticles.length }} articles
          </span>
        </div>
      </div>

      <!-- Articles List -->
      <div v-if="isLoadingArticles" class="py-6">
        <p class="text-on-surface-variant text-sm font-bold">
          Loading articles...
        </p>
      </div>
      <div v-else-if="filteredArticles.length === 0" class="py-8 text-center">
        <p class="text-on-surface-variant font-bold">
          No matching articles found.
        </p>
      </div>
      <div v-else class="flex flex-col gap-4">
        <div
          v-for="article in filteredArticles"
          :key="article.id"
          class="flex flex-col sm:flex-row sm:items-center justify-between p-4 border border-outline-variant rounded-xl bg-surface-bright gap-4 hover:shadow-sm transition-shadow">
          <div>
            <div class="flex flex-wrap items-center gap-2 mb-1">
              <h3 class="font-title-sm text-title-sm text-primary">
                {{ article.title }}
              </h3>
              <span
                v-if="article.status === 'draft'"
                class="px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#ffddb3] text-[#291800] border border-[#e0b885]">
                Draft
              </span>
              <span
                v-else
                class="px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#d7e2ff] text-[#021b3d]">
                Published
              </span>
            </div>
            <p class="text-xs text-on-surface-variant font-bold">
              Published: {{ article.date }} • By {{ article.authorName }}
            </p>
            <p
              v-if="article.lastEditedBy"
              class="text-[10px] text-on-surface-variant mt-1 italic">
              Last updated by {{ article.lastEditedBy }} on
              {{ article.lastUpdatedAt || "recently" }}
            </p>
          </div>

          <div class="flex items-center gap-2 self-end sm:self-center shrink-0">
            <router-link
              :to="`/article/${article.id}`"
              target="_blank"
              class="px-4 py-2 bg-surface-container-low border border-outline-variant text-primary rounded-lg text-xs font-bold hover:bg-surface-dim transition-colors flex items-center gap-1">
              <span class="material-symbols-outlined text-[16px]"
                >visibility</span
              >
              View
            </router-link>

            <template v-if="canEditArticle(article)">
              <router-link
                :to="`/admin/edit/${article.id}`"
                class="px-4 py-2 bg-surface-container-low border border-outline-variant text-primary rounded-lg text-xs font-bold hover:bg-surface-dim transition-colors flex items-center gap-1">
                <span class="material-symbols-outlined text-[16px]">edit</span>
                Edit
              </router-link>
              <button
                type="button"
                @click="deleteArticle(article.id)"
                class="px-4 py-2 bg-[#ba1a1a] text-white rounded-lg text-xs font-bold hover:bg-[#93000a] transition-colors flex items-center gap-1 shadow-sm cursor-pointer">
                <span class="material-symbols-outlined text-[16px]"
                  >delete</span
                >
                Delete
              </button>
            </template>
            <span
              v-else
              class="px-4 py-2 text-on-surface-variant text-xs font-bold bg-surface-container-lowest rounded-lg border border-transparent">
              View Only
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import { useRouter } from "vue-router";
import { onAuthStateChanged, signOut } from "firebase/auth";
import {
  collection,
  getDocs,
  doc,
  getDoc,
  updateDoc,
} from "firebase/firestore";
import { auth, db } from "../../firebase-client.js";
import { API_BASE_URL } from "../../utils/api.js";

const router = useRouter();

const currentUserId = ref(sessionStorage.getItem("currentUserId") || "");
const userRole = ref(sessionStorage.getItem("userRole") || "author");
const userName = ref(sessionStorage.getItem("userName") || "Contributor");

const allArticles = ref([]);
const isLoadingArticles = ref(true);
const currentArticleFilter = ref("all");
const searchQuery = ref("");

const allAuthors = ref([]);
const isLoadingAuthors = ref(false);
const currentUserTab = ref("pending");

const articleFilters = [
  { label: "All Articles", value: "all" },
  { label: "My Articles", value: "mine" },
  { label: "Drafts", value: "drafts" },
];

const authorTabs = computed(() => [
  {
    label: "Pending",
    value: "pending",
    count: allAuthors.value.filter((u) => u.approvalStatus === "pending")
      .length,
  },
  {
    label: "Approved",
    value: "approved",
    count: allAuthors.value.filter((u) => u.approvalStatus === "approved")
      .length,
  },
  {
    label: "Rejected",
    value: "rejected",
    count: allAuthors.value.filter((u) => u.approvalStatus === "rejected")
      .length,
  },
]);

const filteredAuthors = computed(() =>
  allAuthors.value.filter((u) => u.approvalStatus === currentUserTab.value),
);

const filteredArticles = computed(() => {
  const q = searchQuery.value.trim().toLowerCase();
  return allArticles.value.filter((article) => {
    const status = article.status || "published";

    let matchesTab = true;
    if (currentArticleFilter.value === "mine") {
      matchesTab = article.authorId === currentUserId.value;
    } else if (currentArticleFilter.value === "drafts") {
      matchesTab = status === "draft";
    }

    const titleMatch = (article.title || "").toLowerCase().includes(q);
    const authorMatch = (article.authorName || "").toLowerCase().includes(q);

    return matchesTab && (titleMatch || authorMatch);
  });
});

function canEditArticle(article) {
  return userRole.value === "admin" || article.authorId === currentUserId.value;
}

async function fetchArticles() {
  isLoadingArticles.value = true;
  try {
    const res = await fetch(`${API_BASE_URL}/api/news?all=true`);
    allArticles.value = await res.json();
  } catch (error) {
    console.error("Error fetching articles:", error);
  } finally {
    isLoadingArticles.value = false;
  }
}

async function fetchAuthors() {
  isLoadingAuthors.value = true;
  try {
    const snap = await getDocs(collection(db, "users"));
    allAuthors.value = snap.docs
      .map((d) => d.data())
      .filter((user) => !user.isAdmin);
  } catch (error) {
    console.error("Error fetching users:", error);
  } finally {
    isLoadingAuthors.value = false;
  }
}

async function updateAuthorStatus(uid, newStatus) {
  const msg =
    newStatus === "approved"
      ? "Grant this author access to publish articles?"
      : "Revoke or reject this author's access? They will not be able to sign in.";
  if (!confirm(msg)) return;

  try {
    await updateDoc(doc(db, "users", uid), { approvalStatus: newStatus });
    await fetchAuthors();
  } catch (error) {
    console.error("Error updating user status:", error);
    alert("Failed to update user status.");
  }
}

async function deleteArticle(id) {
  if (
    !confirm(
      "Are you sure you want to permanently delete this article? This cannot be undone.",
    )
  ) {
    return;
  }

  if (!auth.currentUser) {
    alert("Authentication error: Please refresh the page.");
    return;
  }

  try {
    const token = await auth.currentUser.getIdToken();
    const res = await fetch(`${API_BASE_URL}/api/news/${id}`, {
      method: "DELETE",
      headers: { Authorization: `Bearer ${token}` },
    });

    if (res.ok) {
      await fetchArticles();
    } else {
      const data = await res.json();
      alert(`Error: ${data.error}`);
    }
  } catch (error) {
    console.error("Failed to delete article:", error);
    alert("A network error occurred while trying to delete the article.");
  }
}

async function handleLogout() {
  sessionStorage.clear();
  await signOut(auth);
  router.replace("/admin/login");
}

onMounted(() => {
  fetchArticles();
  if (userRole.value === "admin") {
    fetchAuthors();
  }

  // Verify live Firebase session in the background
  onAuthStateChanged(auth, async (user) => {
    if (!user) {
      sessionStorage.clear();
      router.replace("/admin/login");
      return;
    }
    const userSnap = await getDoc(doc(db, "users", user.uid));
    if (!userSnap.exists() || userSnap.data().approvalStatus !== "approved") {
      sessionStorage.clear();
      await signOut(auth);
      router.replace("/admin/login");
      return;
    }
    const data = userSnap.data();
    currentUserId.value = user.uid;
    userRole.value = data.isAdmin ? "admin" : "author";
    userName.value = data.name;
    sessionStorage.setItem("currentUserId", user.uid);
    sessionStorage.setItem("userRole", userRole.value);
    sessionStorage.setItem("userName", userName.value);
    if (userRole.value === "admin" && allAuthors.value.length === 0) {
      fetchAuthors();
    }
  });
});
</script>
