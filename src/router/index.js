// src/router/index.js
import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/our-story",
    name: "our-story",
    component: () => import("../views/OurStoryView.vue"),
  },

  {
    path: "/con-community",
    name: "con-community",
    component: () => import("../views/CommunityView.vue"),
  },
  {
    path: "/con-community/:slug",
    name: "organization-detail",
    component: () => import("../views/OrganizationDetailView.vue"),
  },
  {
    path: "/traditions-culture",
    name: "traditions-culture",
    component: () => import("../views/TraditionsView.vue"),
  },
  {
    path: "/about",
    name: "about",
    component: () => import("../views/AboutView.vue"),
  },
  /*
  {
    path: "/article/:id",
    name: "article",
    component: () => import("../views/ArticleView.vue"),
  },
  // --- Admin Portal Routes ---
  {
    path: "/admin/login",
    name: "admin-login",
    component: () => import("../views/admin/LoginView.vue"),
  },
  {
    path: "/admin/signup",
    name: "admin-signup",
    component: () => import("../views/admin/SignupView.vue"),
  },
  {
    path: "/admin/manage",
    name: "admin-manage",
    component: () => import("../views/admin/ManageView.vue"),
    meta: { requiresAuth: true },
  },
  {
    path: "/admin/create",
    name: "admin-create",
    component: () => import("../views/admin/CreateView.vue"),
    meta: { requiresAuth: true },
  },
  {
    path: "/admin/edit/:id",
    name: "admin-edit",
    component: () => import("../views/admin/EditView.vue"),
    meta: { requiresAuth: true },
  },*/
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

// Global Auth Guard for Admin Routes
router.beforeEach((to) => {
  if (to.meta.requiresAuth) {
    const currentUserId = sessionStorage.getItem("currentUserId");
    const userRole = sessionStorage.getItem("userRole");
    if (!currentUserId || !userRole) {
      return { name: "admin-login" };
    }
  }
});

export default router;
