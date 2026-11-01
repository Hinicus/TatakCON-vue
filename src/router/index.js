// src/router/index.js
import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import { organizations } from "../data/organizations.js";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    meta: { title: "TatakCON" },
  },
  {
    path: "/our-story",
    name: "our-story",
    component: () => import("../views/OurStoryView.vue"),
    meta: { title: "Our Story - TatakCON" },
  },
  {
    path: "/con-community",
    name: "con-community",
    component: () => import("../views/CommunityView.vue"),
    meta: { title: "CON Community - TatakCON" },
  },
  {
    path: "/con-community/:slug",
    name: "organization-detail",
    component: () => import("../views/OrganizationDetailView.vue"),
    meta: { title: "Organization Directory - TatakCON" },
  },
  {
    path: "/traditions-culture",
    name: "traditions-culture",
    component: () => import("../views/TraditionsView.vue"),
    meta: { title: "Traditions & Culture - TatakCON" },
  },
  {
    path: "/about",
    name: "about",
    component: () => import("../views/AboutView.vue"),
    meta: { title: "About - TatakCON" },
  },
  {
    path: "/article/:id",
    name: "article",
    component: () => import("../views/ArticleView.vue"),
    meta: { title: "Loading Article - TatakCON" },
  },
  {
    path: "/faculty",
    name: "faculty",
    component: () => import("../views/FacultyView.vue"),
    meta: { title: "Faculty & Administration - TatakCON" },
  },
  // --- Admin Portal Routes ---
  {
    path: "/admin/login",
    name: "admin-login",
    component: () => import("../views/admin/LoginView.vue"),
    meta: { title: "Admin Login - TatakCON" },
  },
  {
    path: "/admin/signup",
    name: "admin-signup",
    component: () => import("../views/admin/SignupView.vue"),
    meta: { title: "Author Registration - TatakCON" },
  },
  {
    path: "/admin/manage",
    name: "admin-manage",
    component: () => import("../views/admin/ManageView.vue"),
    meta: { requiresAuth: true, title: "Manage Articles - TatakCON" },
  },
  {
    path: "/admin/create",
    name: "admin-create",
    component: () => import("../views/admin/CreateView.vue"),
    meta: { requiresAuth: true, title: "Create Article - TatakCON" },
  },
  {
    path: "/admin/edit/:id",
    name: "admin-edit",
    component: () => import("../views/admin/EditView.vue"),
    meta: { requiresAuth: true, title: "Edit Article - TatakCON" },
  },
  {
    path: "/:pathMatch(.*)",
    name: "not-found",
    component: () => import("../views/ErrorView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition;
    if (to.hash) return { el: to.hash, behavior: "smooth" };
    return { top: 0, behavior: "smooth" };
  },
});

// 1. Global Auth Guard for Admin Routes
router.beforeEach((to) => {
  if (to.meta.requiresAuth) {
    const currentUserId = sessionStorage.getItem("currentUserId");
    const userRole = sessionStorage.getItem("userRole");
    if (!currentUserId || !userRole) {
      return { name: "admin-login" };
    }
  }
});

// 2. Automatically Update Browser Tab Title on Every Route Change
router.afterEach((to) => {
  // Dynamic title for the 8 organization subpages
  if (to.name === "organization-detail" && to.params.slug) {
    const org = organizations.find((o) => o.slug === to.params.slug);
    if (org) {
      document.title = `${org.name} — Leadership & Member Directory | TatakCON`;
      return;
    }
  }

  // Standard title from route meta (or fallback to TatakCON)
  document.title = to.meta.title || "TatakCON";
});

export default router;
