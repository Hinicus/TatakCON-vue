<template>
  <!-- Main Content: 404 Hero Section -->
  <main
    class="flex-1 flex flex-col justify-center items-center py-12 lg:py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
    <div class="max-w-3xl w-full text-center relative z-10">
      <!-- Diagnostic Nursing Badge -->

      <!-- Prominent 404 Typography with Stethoscope / Lamp Icon motif -->
      <div class="relative inline-block mb-4">
        <h1
          class="font-[Georgia] text-8xl sm:text-9xl font-black text-[#12284B] tracking-tight leading-none drop-shadow-sm">
          4<span class="text-[#0055A0] relative inline-block top-[52%]"
            >0<i
              class="fa-solid fa-stethoscope absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-12 text-4xl sm:text-5xl text-[#8CC1E9]/80 pointer-events-none"></i></span
          >4
        </h1>
      </div>

      <!-- Headline -->
      <h2 class="font-serif text-2xl sm:text-4xl font-bold text-[#12284B] mb-4">
        Hindi Matagpuan ang Pahina
      </h2>

      <!-- Description / Nursing Diaspora theme -->
      <p
        class="text-base sm:text-lg text-[#12284B]/80 max-w-2xl mx-auto mb-8 leading-relaxed">
        Paumanhin, ang hinahanap mong pahina o dokumento sa
        <strong class="text-[#0055A0] font-semibold">TatakCON</strong> ay
        maaaring nailipat, nabago ang address, o kasalukuyang sumasailalim sa
        transisyon ng sistema.
      </p>

      <!-- Action Buttons -->
      <div
        class="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-12">
        <router-link
          to="/"
          class="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#12284B] text-[#FFF8E7] font-semibold text-sm shadow-md hover:bg-[#0055A0] transition-all transform hover:-translate-y-0.5 active:translate-y-0">
          <span class="material-symbols-outlined"> home </span>
          <span class="">Bumalik sa Homepage</span>
        </router-link>
        <router-link
          to="/con-community"
          class="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#FFF8E7] text-[#12284B] border-2 border-[#12284B]/20 font-semibold text-sm shadow-sm hover:border-[#0055A0] hover:text-[#0055A0] hover:bg-white transition-all">
          <span class="material-symbols-outlined"> explore </span>
          <span class="">I-explore ang CON Community</span>
        </router-link>
        <button
          @click="router.back()"
          class="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl text-[#0055A0] hover:text-[#12284B] hover:bg-[#8CC1E9]/20 font-medium text-sm transition-colors">
          <span class="material-symbols-outlined"> arrow_left_alt </span>
          <span class="">Bumalik sa Nakaraan</span>
        </button>
      </div>
    </div>
  </main>
</template>

<script setup>
import router from "../router";
</script>
