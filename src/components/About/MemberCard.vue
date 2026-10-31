<template>
  <div
    class="bg-surface-container-lowest rounded-2xl overflow-hidden flex flex-col group transition-all duration-300 hover:shadow-lg"
    :class="
      featured
        ? 'shadow-md border-2 border-secondary'
        : 'shadow-sm border border-surface-variant/60 hover:border-secondary'
    ">
    <div
      class="aspect-square w-full overflow-hidden bg-surface-container relative">
      <img
        loading="lazy"
        :src="image"
        :alt="name"
        class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        :class="imagePosition === 'center' ? 'object-center' : 'object-top'" />
      <span
        class="absolute top-3 right-3 text-[10px] font-bold uppercase tracking-wider rounded-full flex items-center gap-1"
        :class="
          featured
            ? 'px-3 py-1 bg-secondary text-white shadow-sm'
            : 'px-2.5 py-1 bg-primary/85 text-tertiary-fixed-dim backdrop-blur-sm'
        ">
        <span v-if="badgeIcon" class="material-symbols-outlined text-[13px]">{{
          badgeIcon
        }}</span>
        {{ badge }}
      </span>
    </div>
    <div :class="featured ? 'p-6' : 'p-5'">
      <p class="text-xs font-bold text-secondary uppercase tracking-wider mb-1">
        {{ role }}
      </p>
      <h3
        class="font-bold text-primary group-hover:text-secondary transition-colors leading-snug font-serif"
        :class="featured ? 'text-xl' : 'text-lg'">
        {{ name }}
      </h3>
      <p
        v-if="subtitle"
        class="text-xs text-on-surface-variant pt-2 flex items-center gap-1.5 font-medium">
        <span class="material-symbols-outlined text-[15px] text-secondary">{{
          subtitleIcon
        }}</span>
        {{ subtitle }}
      </p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  name: String,
  role: String,
  image: String,
  badge: String,
  badgeIcon: String,
  subtitle: String,
  subtitleIcon: String,
  imagePosition: { type: String, default: "top" },
  featured: Boolean,
});
</script>
