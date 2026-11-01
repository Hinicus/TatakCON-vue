<script setup>
import MemberCard from "./MemberCard.vue";
import { leadership, groups } from "@/data/researchers.js";
</script>

<template>
  <section id="researchers" class="scroll-mt-28 space-y-12">
    <div class="space-y-6">
      <div
        class="flex items-center gap-2 text-xs font-bold tracking-wider uppercase text-secondary">
        <span class="material-symbols-outlined text-[18px]">stars</span>
        <span>Project Leadership</span>
      </div>
      <div
        class="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8 max-w-3xl mx-auto">
        <MemberCard v-for="p in leadership" :key="p.name" v-bind="p" featured />
      </div>
    </div>

    <div v-for="group in groups" :key="group.title" class="space-y-6">
      <div
        class="flex items-center gap-2 text-xs font-bold tracking-wider uppercase text-secondary border-b border-surface-variant/60 pb-2">
        <span class="material-symbols-outlined text-[18px]">{{
          group.icon
        }}</span>
        <span>{{ group.title }}</span>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <MemberCard
          v-for="m in group.members"
          :key="m.name"
          v-bind="m"
          :role="group.role"
          :badge="group.badge" />
      </div>
    </div>
  </section>
</template>
