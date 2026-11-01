<!-- src/views/admin/LoginView.vue -->
<template>
  <div class="min-h-screen bg-surface flex items-center justify-center p-4">
    <div
      class="max-w-md w-full bg-surface-container-lowest p-8 rounded-2xl shadow-sm border border-surface-dim">
      <div class="text-center mb-8 flex flex-col">
        <img
          src="/images/logo/tatakcon_icon_transparent.png"
          alt="TatakCON Logo"
          class="object-contain w-auto h-36 mx-auto" />
        <p
          class="text-sm font-bold text-on-surface-variant uppercase tracking-widest">
          Admin Portal
        </p>
      </div>

      <form @submit.prevent="handleEmailLogin" class="flex flex-col gap-5">
        <!-- Email -->
        <div>
          <label
            class="block font-label-sm text-label-sm text-on-surface-variant mb-1"
            >Email Address</label
          >
          <input
            ref="emailInputRef"
            v-model="email"
            type="email"
            required
            class="w-full p-3 border border-outline-variant rounded-lg bg-surface-bright focus:ring-2 focus:ring-secondary focus:outline-none"
            placeholder="example@gmail.com" />
        </div>

        <!-- Password -->
        <div>
          <label
            class="block font-label-sm text-label-sm text-on-surface-variant mb-1"
            >Password</label
          >
          <div class="relative flex items-center">
            <input
              v-model="password"
              :type="showPassword ? 'text' : 'password'"
              required
              class="w-full p-3 pr-12 border border-outline-variant rounded-lg bg-surface-bright focus:ring-2 focus:ring-secondary focus:outline-none"
              placeholder="••••••••" />
            <button
              type="button"
              @click="showPassword = !showPassword"
              class="absolute right-2 p-2 text-on-surface-variant hover:text-primary transition-colors focus:outline-none flex items-center justify-center rounded-full hover:bg-surface-dim cursor-pointer">
              <span class="material-symbols-outlined text-[20px]">
                {{ showPassword ? "visibility_off" : "visibility" }}
              </span>
            </button>
          </div>
        </div>

        <button
          type="submit"
          class="bg-secondary hover:bg-primary text-white font-bold py-3 px-4 rounded-xl transition-colors mt-2 cursor-pointer">
          Sign In
        </button>

        <!-- Divider -->
        <div class="relative flex py-1 items-center">
          <div class="flex-grow border-t border-outline-variant/60"></div>
          <span
            class="shrink-0 mx-3 text-xs font-bold uppercase tracking-wider text-on-surface-variant"
            >Or</span
          >
          <div class="flex-grow border-t border-outline-variant/60"></div>
        </div>

        <!-- Google OAuth Button -->
        <button
          type="button"
          @click="handleGoogleLogin"
          class="w-full bg-surface-bright hover:bg-surface-dim text-primary font-bold py-3 px-4 rounded-xl border border-outline-variant transition-colors flex items-center justify-center gap-3 shadow-sm cursor-pointer">
          <svg class="w-5 h-5" viewBox="0 0 24 24">
            <path
              fill="#4285F4"
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
            <path
              fill="#34A853"
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
            <path
              fill="#FBBC05"
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
            <path
              fill="#EA4335"
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
          </svg>
          <span>Continue with Google</span>
        </button>

        <div class="text-center mt-2">
          <p class="text-sm text-on-surface-variant">
            Are you an author?
            <router-link
              to="/admin/signup"
              class="text-secondary font-bold hover:underline"
              >Apply here</router-link
            >
          </p>
          <button
            type="button"
            @click="handleForgotPassword"
            class="text-xs font-bold text-secondary hover:text-primary transition-colors cursor-pointer mt-1">
            Forgot Password?
          </button>

          <p class="text-xs text-on-surface-variant mt-1">
            <router-link to="/" class="text-secondary font-bold hover:underline"
              >Back to Home</router-link
            >
          </p>
        </div>

        <div
          v-if="message.text"
          class="mt-2 p-3 rounded-lg text-sm font-bold text-center"
          :class="messageClass">
          {{ message.text }}
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, computed } from "vue";
import { useRouter } from "vue-router";
import {
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { doc, getDoc, setDoc, serverTimestamp } from "firebase/firestore";
import { auth, db } from "../../firebase-client.js";

const router = useRouter();

const email = ref("");
const password = ref("");
const showPassword = ref(false);
const emailInputRef = ref(null);

const message = reactive({
  text: "",
  type: "info", // "info" | "success" | "error"
});

const messageClass = computed(() => {
  if (message.type === "error") return "bg-[#ffdad6] text-[#93000a]";
  if (message.type === "success") return "bg-[#d7e2ff] text-[#021b3d]";
  return "bg-[#f5ede0] text-[#12284b]";
});

function setMessage(text, type = "info") {
  message.text = text;
  message.type = type;
}

function isValidEmail(val) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val);
}

async function handleGoogleLogin() {
  const provider = new GoogleAuthProvider();
  setMessage("Connecting to Google...", "info");

  try {
    const result = await signInWithPopup(auth, provider);
    const user = result.user;

    const userRef = doc(db, "users", user.uid);
    const userSnap = await getDoc(userRef);

    if (!userSnap.exists()) {
      await setDoc(userRef, {
        uid: user.uid,
        name: user.displayName || user.email.split("@")[0],
        email: user.email,
        isAdmin: false,
        approvalStatus: "pending",
        dateCreated: serverTimestamp(),
      });

      await signOut(auth);
      setMessage(
        "Application received via Google! An admin must approve your account before you can log in.",
        "success",
      );
      return;
    }

    const userData = userSnap.data();
    if (userData.approvalStatus !== "approved") {
      await signOut(auth);
      setMessage(
        `Access denied. Your account status is: ${userData.approvalStatus}.`,
        "error",
      );
      return;
    }

    sessionStorage.setItem("currentUserId", user.uid);
    sessionStorage.setItem("userRole", userData.isAdmin ? "admin" : "author");
    sessionStorage.setItem("userName", userData.name);

    setMessage("Success! Redirecting...", "success");
    setTimeout(() => {
      router.push("/admin/manage");
    }, 800);
  } catch (error) {
    console.error("Google Auth Error:", error);
    if (error.code === "auth/popup-closed-by-user") {
      message.text = "";
      return;
    }
    setMessage("Google sign-in failed. Please try again.", "error");
  }
}

async function handleForgotPassword() {
  const trimmedEmail = email.value.trim();

  if (!trimmedEmail) {
    setMessage(
      "Please enter your email address in the email field first, then click 'Forgot Password?'.",
      "error",
    );
    emailInputRef.value?.focus();
    return;
  }

  if (!isValidEmail(trimmedEmail)) {
    setMessage("Please enter a valid email address.", "error");
    emailInputRef.value?.focus();
    return;
  }

  setMessage("Sending password reset link...", "info");

  try {
    await sendPasswordResetEmail(auth, trimmedEmail);
    setMessage(
      "If an account exists for this email, a password reset link has been sent. Please check your inbox and spam folder.",
      "success",
    );
  } catch (error) {
    console.error("Password Reset Error:", error);
    const errorMsg =
      error.code === "auth/too-many-requests"
        ? "Too many requests. Please wait a few minutes and try again."
        : "Failed to send reset email. Please try again.";
    setMessage(errorMsg, "error");
  }
}

async function handleEmailLogin() {
  const trimmedEmail = email.value.trim();

  if (!trimmedEmail || !password.value) {
    setMessage("Please fill in both email and password.", "error");
    return;
  }

  if (!isValidEmail(trimmedEmail)) {
    setMessage("Please enter a valid email address.", "error");
    return;
  }

  setMessage("Authenticating...", "info");

  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      trimmedEmail,
      password.value,
    );
    const user = userCredential.user;

    const userSnap = await getDoc(doc(db, "users", user.uid));
    if (!userSnap.exists()) {
      await signOut(auth);
      setMessage("Error: User profile not found.", "error");
      return;
    }

    const userData = userSnap.data();
    if (userData.approvalStatus !== "approved") {
      await signOut(auth);
      setMessage(
        `Access denied. Your account status is: ${userData.approvalStatus}.`,
        "error",
      );
      return;
    }

    sessionStorage.setItem("currentUserId", user.uid);
    sessionStorage.setItem("userRole", userData.isAdmin ? "admin" : "author");
    sessionStorage.setItem("userName", userData.name);

    setMessage("Success! Redirecting...", "success");
    setTimeout(() => {
      router.push("/admin/manage");
    }, 800);
  } catch (error) {
    console.error("Login Error:", error);
    const errorMsg =
      error.code === "auth/too-many-requests"
        ? "Too many failed attempts. Please try again later."
        : "Invalid email or password.";
    setMessage(errorMsg, "error");
  }
}
</script>
