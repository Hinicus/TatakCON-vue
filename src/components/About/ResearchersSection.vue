<script setup>
import MemberCard from "./MemberCard.vue";

// Researchers Data
const leadership = [
  {
    name: "Catelyn Heart B. Bulaong",
    role: "Leader",
    image: "/images/researchers/catelyn-heart-b-bulaong-leader.jpg",
    imagePosition: "center",
    badge: "Head of Research",
    badgeIcon: "shield_person",
    subtitle: "Project Lead & Interviewer • TatakCON",
    subtitleIcon: "workspace_premium",
  },
  {
    name: "Francis Ed Mark I. Hular",
    role: "Assistant Leader",
    image:
      "/images/researchers/francis-ed-mark-i-hular-researchers-and-transcriber.jpg",
    badge: "Executive Directorate",
    badgeIcon: "military_tech",
    subtitle: "Co-Lead & Transcriber • TatakCON",
    subtitleIcon: "assistant",
  },
];

const groups = [
  {
    title: "Researchers",
    icon: "menu_book",
    role: "Researcher",
    badge: "Research",
    members: [
      {
        name: "Katelyn C. Dela Cruz",
        image: "/images/researchers/katelyn-c-dela-cruz-researcher-s.jpg",
      },
      {
        name: "Elaisa Pauline C. Dela Cruz",
        image:
          "/images/researchers/elaisa-pauline-c-dela-cruz-researcher-s.jpg",
      },
      {
        name: "Ian Klode A. Rodriguez",
        image: "/images/researchers/ian-klode-a-rodriguez-researcher.jpg",
        imagePosition: "center",
      },
      {
        name: "Jyana Richel DR. Halili",
        image: "/images/researchers/jyana-richel-dr-halili-researcher-s.jpg",
      },
    ],
  },
  {
    title: "Field Interviewers",
    icon: "record_voice_over",
    role: "Interviewer",
    badge: "Field Inquiry",
    members: [
      {
        name: "Rayssa Nicole G. Miano",
        image:
          "/images/researchers/rayssa-nicole-g-miano-interviewer-and-transcriber.jpg",
      },
      {
        name: "Alethea Nicole B. So",
        image:
          "/images/researchers/alethea-nicole-b-so-interviewer-and-transcriber.jpg",
        imagePosition: "center",
      },
      {
        name: "Catelyn Heart B. Bulaong",
        image: "/images/researchers/catelyn-heart-b-bulaong-leader.jpg",
      },
      {
        name: "Ashley Via D.P. Tamayo",
        image: "/images/researchers/ashley-via-d-p-tamayo-interview.jpg",
      },
    ],
  },
  {
    title: "Data Transcribers",
    icon: "description",
    role: "Transcriber",
    badge: "Transcription",
    members: [
      {
        name: "Francis Ed Mark I. Hular",
        image:
          "/images/researchers/francis-ed-mark-i-hular-researchers-and-transcriber.jpg",
      },
      {
        name: "Rayssa Nicole G. Miano",
        image:
          "/images/researchers/rayssa-nicole-g-miano-interviewer-and-transcriber.jpg",
      },
      {
        name: "Alethea Nicole B. So",
        image:
          "/images/researchers/alethea-nicole-b-so-interviewer-and-transcriber.jpg",
      },
      {
        name: "Mariane Denise J. Versoza",
        image: "/images/researchers/mariane-denise-j-versoza-transcriber.jpg",
      },
      {
        name: "Aaron T. Baun",
        image: "/images/researchers/aaron-t-baun.jfif",
      },
    ],
  },
];
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
