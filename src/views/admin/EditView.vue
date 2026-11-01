<!-- src/views/admin/EditView.vue -->
<template>
  <div class="flex-grow flex flex-col items-center py-10 px-4 sm:px-6">
    <div
      class="max-w-3xl w-full bg-surface-container-lowest p-6 sm:p-10 rounded-2xl shadow-sm border border-surface-dim">
      <div class="flex items-center justify-between mb-8">
        <div>
          <span
            class="text-xs font-bold uppercase tracking-widest text-[#438bc4] mb-2 block"
            >Admin Portal</span
          >
          <h1 class="text-3xl sm:text-4xl font-serif font-bold text-primary">
            Edit Dispatch
          </h1>
        </div>
        <router-link
          to="/admin/manage"
          class="text-sm font-bold text-on-surface-variant hover:text-primary transition-colors flex items-center gap-1">
          <span class="material-symbols-outlined text-[18px]">arrow_back</span>
          Cancel
        </router-link>
      </div>

      <form
        @submit.prevent="handleSubmit"
        @input="isUnsaved = true"
        class="flex flex-col gap-6">
        <div>
          <label class="block font-title-sm text-title-sm text-primary mb-2"
            >Headline</label
          >
          <input
            v-model="title"
            type="text"
            required
            class="w-full p-3 border border-outline-variant rounded-lg bg-surface-bright focus:ring-2 focus:ring-secondary focus:outline-none font-body-md" />
        </div>

        <div>
          <div class="flex justify-between items-end mb-2">
            <label class="block font-title-sm text-title-sm text-primary"
              >Short Snippet</label
            >
            <span class="text-xs font-bold text-on-surface-variant">
              {{ snippet.length }} / 150
            </span>
          </div>
          <textarea
            v-model="snippet"
            required
            maxlength="150"
            class="w-full p-3 border border-outline-variant rounded-lg bg-surface-bright focus:ring-2 focus:ring-secondary focus:outline-none font-body-md"
            rows="2"></textarea>
        </div>

        <div>
          <label class="block font-title-sm text-title-sm text-primary mb-2"
            >Full Content</label
          >
          <div
            class="bg-surface-bright rounded-lg overflow-hidden border border-outline-variant">
            <div
              ref="editorRef"
              style="
                height: 350px;
                font-family: Newsreader, serif;
                font-size: 1.125rem;
              "></div>
          </div>
        </div>

        <!-- Featured Image Details -->
        <div
          class="p-6 bg-surface-container-low rounded-xl border border-surface-dim mt-2">
          <h3
            class="font-title-sm text-title-sm text-primary mb-4 flex items-center gap-2">
            <span class="material-symbols-outlined text-xl">image</span>
            Featured Image Details
          </h3>
          <div class="flex flex-col gap-5">
            <div class="flex flex-wrap items-center gap-6">
              <label
                class="flex items-center gap-2 text-sm font-bold cursor-pointer">
                <input
                  v-model="imageMode"
                  type="radio"
                  value="none"
                  class="w-4 h-4 text-secondary focus:ring-secondary border-outline-variant" />
                <span>No Image</span>
              </label>

              <label
                class="flex items-center gap-2 text-sm font-bold cursor-pointer">
                <input
                  v-model="imageMode"
                  type="radio"
                  value="upload"
                  class="w-4 h-4 text-secondary focus:ring-secondary border-outline-variant" />
                <span>Upload New File</span>
              </label>

              <label
                class="flex items-center gap-2 text-sm font-bold cursor-pointer">
                <input
                  v-model="imageMode"
                  type="radio"
                  value="link"
                  class="w-4 h-4 text-secondary focus:ring-secondary border-outline-variant" />
                <span>Keep Existing / Web Link</span>
              </label>
            </div>

            <div v-if="imageMode === 'upload'">
              <input
                ref="fileInputRef"
                type="file"
                accept="image/*"
                class="w-full p-2 border border-outline-variant rounded-lg bg-surface-bright cursor-pointer file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-bold file:bg-secondary-fixed file:text-on-secondary-fixed hover:file:bg-[#b3c7f2] transition-all" />
              <p class="text-xs text-on-surface-variant mt-1.5">
                Supported formats: JPG, PNG, WEBP (Max size: 5MB)
              </p>
            </div>

            <div v-else-if="imageMode === 'link'">
              <input
                v-model="imageUrl"
                type="url"
                class="w-full p-3 border border-outline-variant rounded-lg bg-surface-bright font-body-sm" />
            </div>

            <div
              v-if="imageMode !== 'none'"
              class="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div>
                <label
                  class="block font-label-sm text-label-sm text-on-surface-variant mb-1"
                  >Image Caption</label
                >
                <input
                  v-model="imageCaption"
                  type="text"
                  class="w-full p-3 border border-outline-variant rounded-lg bg-surface-bright font-body-sm focus:ring-2 focus:ring-secondary focus:outline-none" />
              </div>
              <div>
                <label
                  class="block font-label-sm text-label-sm text-on-surface-variant mb-1"
                  >Image Credit</label
                >
                <input
                  v-model="imageCredit"
                  type="text"
                  class="w-full p-3 border border-outline-variant rounded-lg bg-surface-bright font-body-sm focus:ring-2 focus:ring-secondary focus:outline-none" />
              </div>
            </div>
          </div>
        </div>

        <!-- Publication Status Toggle -->
        <div
          class="p-6 bg-surface-container-low rounded-xl border border-surface-dim">
          <label
            class="block font-title-sm text-title-sm text-primary mb-3 flex items-center gap-2">
            <span class="material-symbols-outlined text-xl">visibility</span>
            Publication Status
          </label>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <label
              class="flex items-center gap-3 p-3.5 rounded-xl border border-outline-variant bg-surface-bright cursor-pointer hover:border-secondary transition-colors has-[:checked]:border-secondary has-[:checked]:bg-secondary-fixed/30">
              <input
                v-model="articleStatus"
                type="radio"
                value="published"
                class="w-4 h-4 text-secondary focus:ring-secondary" />
              <div>
                <span class="block text-sm font-bold text-primary"
                  >Published</span
                >
                <span class="block text-xs text-on-surface-variant"
                  >Live on the public homepage</span
                >
              </div>
            </label>

            <label
              class="flex items-center gap-3 p-3.5 rounded-xl border border-outline-variant bg-surface-bright cursor-pointer hover:border-secondary transition-colors has-[:checked]:border-secondary has-[:checked]:bg-secondary-fixed/30">
              <input
                v-model="articleStatus"
                type="radio"
                value="draft"
                class="w-4 h-4 text-secondary focus:ring-secondary" />
              <div>
                <span class="block text-sm font-bold text-primary">Draft</span>
                <span class="block text-xs text-on-surface-variant"
                  >Hidden from the public homepage</span
                >
              </div>
            </label>
          </div>
        </div>

        <button
          type="submit"
          :disabled="isSubmitting"
          class="bg-secondary hover:bg-primary text-white font-bold py-3.5 px-6 rounded-xl transition-colors mt-2 flex items-center justify-center gap-2 shadow-md cursor-pointer"
          :class="{ 'opacity-60 cursor-not-allowed': isSubmitting }">
          <span>Save Changes</span>
          <span class="material-symbols-outlined text-sm">save</span>
        </button>

        <div
          v-if="message.text"
          class="mt-2 p-4 rounded-lg font-title-sm text-center text-sm font-bold"
          :class="messageClass">
          {{ message.text }}
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, computed, onMounted, onUnmounted } from "vue";
import { useRoute, useRouter, onBeforeRouteLeave } from "vue-router";
import Quill from "quill";
import "quill/dist/quill.snow.css";
import { auth } from "../../firebase-client.js";
import { API_BASE_URL } from "../../utils/api.js";

const route = useRoute();
const router = useRouter();
const articleId = route.params.id;

const editorRef = ref(null);
const fileInputRef = ref(null);
let quillInstance = null;

const title = ref("");
const snippet = ref("");
const imageMode = ref("link");
const imageUrl = ref("");
const imageCaption = ref("");
const imageCredit = ref("");
const articleStatus = ref("published");

const isUnsaved = ref(false);
const isSubmitting = ref(false);

const message = reactive({ text: "", type: "info" });

const messageClass = computed(() => {
  if (message.type === "error") return "bg-[#ffdad6] text-[#93000a]";
  if (message.type === "success") return "bg-[#d7e2ff] text-[#021b3d]";
  return "bg-[#f5ede0] text-[#12284b]";
});

function setMessage(text, type = "info") {
  message.text = text;
  message.type = type;
}

function handleBeforeUnload(e) {
  if (isUnsaved.value) {
    e.preventDefault();
    e.returnValue = "";
  }
}

onBeforeRouteLeave(() => {
  if (isUnsaved.value) {
    return confirm("You have unsaved changes. Leave this page anyway?");
  }
});

onMounted(async () => {
  quillInstance = new Quill(editorRef.value, {
    theme: "snow",
    modules: {
      toolbar: [
        [{ header: [2, 3, false] }],
        ["bold", "italic", "underline"],
        [{ list: "ordered" }, { list: "bullet" }],
        ["link"],
        ["clean"],
      ],
    },
  });

  try {
    const res = await fetch(`${API_BASE_URL}/api/news/${articleId}`);
    if (!res.ok) throw new Error("Failed to fetch article details");
    const article = await res.json();

    const currentUserId = sessionStorage.getItem("currentUserId");
    const userRole = sessionStorage.getItem("userRole");
    if (userRole !== "admin" && article.authorId !== currentUserId) {
      alert("You only have permission to edit your own articles.");
      router.replace("/admin/manage");
      return;
    }

    title.value = article.title || "";
    snippet.value = article.snippet || "";
    imageCaption.value = article.imageCaption || "";
    imageCredit.value = article.imageCredit || "";
    articleStatus.value = article.status || "published";

    if (article.imageUrl) {
      imageUrl.value = article.imageUrl;
      imageMode.value = "link";
    } else {
      imageMode.value = "none";
    }

    if (article.content) {
      quillInstance.root.innerHTML = article.content;
    }

    // Track changes only after initial data is populated
    quillInstance.on("text-change", () => {
      isUnsaved.value = true;
    });
    window.addEventListener("beforeunload", handleBeforeUnload);
  } catch (error) {
    console.error("Error loading article:", error);
    alert("Failed to load article data.");
    router.replace("/admin/manage");
  }
});

onUnmounted(() => {
  window.removeEventListener("beforeunload", handleBeforeUnload);
});

async function handleSubmit() {
  const richTextContent = quillInstance ? quillInstance.root.innerHTML : "";
  if (!richTextContent || richTextContent === "<p><br></p>") {
    alert("Please write some content before saving.");
    return;
  }

  const formData = new FormData();
  formData.append("title", title.value);
  formData.append("snippet", snippet.value);
  formData.append("content", richTextContent);
  formData.append(
    "imageCaption",
    imageMode.value === "none" ? "" : imageCaption.value,
  );
  formData.append(
    "imageCredit",
    imageMode.value === "none" ? "" : imageCredit.value,
  );
  formData.append("lastEditedBy", sessionStorage.getItem("userName"));
  formData.append("status", articleStatus.value);

  if (imageMode.value === "upload") {
    const files = fileInputRef.value?.files;
    if (!files || files.length === 0) {
      alert("Please select a new image file or choose 'No Image'.");
      return;
    }
    const file = files[0];
    if (file.size > 5 * 1024 * 1024) {
      const sizeMB = (file.size / (1024 * 1024)).toFixed(1);
      setMessage(
        `Error: Image is too large (${sizeMB}MB). Maximum allowed size is 5MB.`,
        "error",
      );
      return;
    }
    formData.append("imageFile", file);
  } else if (imageMode.value === "link") {
    if (!imageUrl.value) {
      alert("Please provide a web link or select 'No Image'.");
      return;
    }
    formData.append("imageUrl", imageUrl.value);
  } else if (imageMode.value === "none") {
    formData.append("imageUrl", "");
  }

  if (!auth.currentUser) {
    alert("Authentication error: Please refresh the page.");
    return;
  }

  isSubmitting.value = true;
  setMessage("Saving changes... please wait.", "info");

  try {
    const token = await auth.currentUser.getIdToken();
    const res = await fetch(`${API_BASE_URL}/api/news/${articleId}`, {
      method: "PUT",
      headers: { Authorization: `Bearer ${token}` },
      body: formData,
    });

    const result = await res.json();
    if (!res.ok) throw new Error(result.error || "Failed to update");

    isUnsaved.value = false;
    setMessage("Article updated successfully! Redirecting...", "success");

    setTimeout(() => {
      router.push("/admin/manage");
    }, 1200);
  } catch (error) {
    console.error("Submit error:", error);
    isSubmitting.value = false;
    setMessage(`Error: ${error.message}`, "error");
  }
}
</script>
