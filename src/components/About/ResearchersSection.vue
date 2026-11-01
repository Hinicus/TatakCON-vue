<script setup>
import MemberCard from "./MemberCard.vue";
import { leadership, groups } from "@/data/researchers.js";
</script>

<template>
  <section id="researchers" class="scroll-mt-28 space-y-12">
    <div
      class="flex flex-col sm:flex-row sm:items-end justify-between border-b border-surface-variant pb-4 gap-2">
      <div>
        <span
          class="font-caption text-caption uppercase tracking-wider text-secondary font-bold"
          >ARP Group Project Roles</span
        >
        <h2
          class="font-headline-lg text-2xl sm:text-3xl font-bold text-primary font-serif mt-0.5">
          Researchers &amp; Project Staff
        </h2>
      </div>
      <span
        class="px-space-md py-1 rounded-full bg-surface-container-high text-primary font-label-sm text-label-sm self-start sm:self-auto font-bold"
        >Bachelor of Public Administration</span
      >
    </div>
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
