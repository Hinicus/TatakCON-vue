<!-- src/views/OurStoryView.vue -->
<template>
  <div class="flex flex-col w-full">
    <!-- Story Hero Banner -->
    <section
      class="relative w-full overflow-hidden py-space-3xl px-margin-mobile md:px-margin-tablet lg:px-margin"
      style="
        background: radial-gradient(
          circle at 50% 20%,
          rgb(30, 58, 106) 0%,
          rgb(18, 40, 75) 60%,
          rgb(13, 27, 51) 100%
        );
      ">
      <div
        class="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[700px] h-[340px] bg-secondary-container/20 rounded-full blur-3xl"></div>
      <div
        class="pointer-events-none absolute -bottom-16 right-10 w-96 h-96 bg-primary/40 rounded-full blur-2xl"></div>

      <div
        class="max-w-7xl mx-auto flex flex-col items-center text-center relative z-10">
        <div
          class="w-14 h-14 rounded-full flex items-center justify-center mb-space-sm shadow-md bg-white/10 ring-1 ring-white/15 text-tertiary-fixed-dim">
          <span class="material-symbols-outlined text-[28px]">menu_book</span>
        </div>
        <div
          class="inline-flex items-center gap-space-xs px-space-md py-space-xxs rounded-full mb-space-md bg-white/10 ring-1 ring-white/10 text-tertiary-fixed-dim">
          <span class="material-symbols-outlined text-[16px]"
            >workspace_premium</span
          >
          <span
            class="font-label-sm text-label-sm uppercase tracking-widest font-semibold text-tertiary-fixed-dim">
            BulSU College of Nursing • Est. 2003
          </span>
        </div>
        <h1
          class="font-headline-lg md:font-display-hero text-headline-lg md:text-[48px] text-surface tracking-tight mb-space-xs font-serif font-bold">
          Our Story
        </h1>
        <p
          class="font-body-md text-body-md text-surface-variant/90 max-w-2xl mt-space-sm">
          The Official History and Academic Journey of Bulacan State University
          - College of Nursing (BulSU-CON)
        </p>
      </div>
    </section>

    <!-- Two-Column Main Content & Sticky Index -->
    <section
      class="max-w-7xl mx-auto w-full px-margin-mobile md:px-margin-tablet lg:px-margin py-space-2xl">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-start">
        <!-- Left Sub-Navigation Rail (Sticky TOC) -->
        <aside class="lg:col-span-3 sticky top-28 z-20">
          <div
            class="bg-surface-container-lowest p-space-lg rounded-2xl shadow-sm border border-surface-variant/40">
            <div
              class="flex items-center justify-between pb-space-sm mb-space-sm border-b border-surface-variant/40">
              <span
                class="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant">
                Contents
              </span>
              <span class="material-symbols-outlined text-outline text-[18px]"
                >format_list_bulleted</span
              >
            </div>

            <nav
              class="flex flex-row lg:flex-col gap-space-xs overflow-x-auto lg:overflow-visible pb-space-xs lg:pb-0">
              <button
                v-for="item in tocItems"
                :key="item.id"
                type="button"
                @click="scrollToSection(item.id)"
                class="group flex items-center justify-between px-space-md py-space-sm rounded-full font-label-md text-label-md transition-all cursor-pointer shrink-0 lg:shrink"
                :class="
                  activeSection === item.id
                    ? 'bg-secondary-fixed text-primary shadow-xs'
                    : 'text-on-surface-variant hover:bg-surface-container hover:text-on-surface'
                ">
                <span class="flex items-center gap-space-xs">
                  <span
                    class="w-1.5 h-1.5 rounded-full shrink-0 transition-colors"
                    :class="
                      activeSection === item.id
                        ? 'bg-secondary'
                        : 'bg-outline-variant'
                    "></span>
                  {{ item.label }}
                </span>
                <span
                  class="material-symbols-outlined text-[16px] shrink-0 transition-opacity ml-2"
                  :class="
                    activeSection === item.id
                      ? 'text-secondary opacity-100'
                      : 'opacity-0 group-hover:opacity-100'
                  "
                  >arrow_forward</span
                >
              </button>
            </nav>

            <!-- Quick Contact Quote Box -->
            <div
              class="mt-space-lg pt-space-md bg-surface-container-low rounded-xl p-space-md hidden lg:block border border-surface-variant/40">
              <span class="material-symbols-outlined text-secondary text-[24px]"
                >history_edu</span
              >
              <p
                class="font-headline-sm text-lg text-primary mt-space-xs italic font-serif">
                "We heal through science; we elevate through presence."
              </p>
              <p
                class="font-caption text-caption text-on-surface-variant mt-space-xs font-semibold">
                BulSU College of Nursing Tradition
              </p>
            </div>
          </div>
        </aside>

        <!-- Right Main Content Canvas -->
        <div class="lg:col-span-9 flex flex-col gap-space-2xl">
          <!-- Section 1: History -->
          <article
            id="history"
            class="bg-surface-container-lowest p-space-lg md:p-space-xl rounded-DEFAULT shadow-sm scroll-mt-28">
            <div
              class="flex flex-col md:flex-row md:items-center justify-between gap-space-sm mb-space-lg">
              <div>
                <h2
                  class="font-headline-lg text-headline-lg text-primary tracking-tight">
                  History of the College of Nursing
                </h2>
              </div>
              <span
                class="inline-flex items-center gap-space-xs px-space-md py-space-xs rounded-full bg-surface-container text-on-surface-variant font-label-sm text-label-sm self-start">
                <span
                  class="material-symbols-outlined text-[16px] text-secondary"
                  >verified</span
                >
                Chartered December 2003 • B.O.R. Res. No. 65
              </span>
            </div>

            <!-- Featured Archival Photo & Text Split -->
            <div
              class="grid grid-cols-1 md:grid-cols-12 gap-space-lg mb-space-lg items-center">
              <div
                class="md:col-span-5 relative group overflow-hidden rounded-DEFAULT shadow-sm bg-surface-container">
                <img
                  class="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-105"
                  src="/images/history/bulsu-college-of-nursing.jpg"
                  alt="BulSU College of Nursing Pioneering Cohort" />
                <div
                  class="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent flex flex-col justify-end p-space-md text-surface pointer-events-none">
                  <span
                    class="font-label-sm text-label-sm text-tertiary-fixed-dim">
                    Pioneering Cohort • SY 2004–2005
                  </span>
                  <p class="font-caption text-caption text-surface-variant">
                    Initial cohort of nearly 200 student nurses across 4
                    sections.
                  </p>
                </div>
              </div>

              <div class="md:col-span-7 flex flex-col gap-space-sm">
                <p
                  class="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  Nag-aalok ang pamantasan ng apat na taong kurso sa Bachelor of
                  Science in Nursing. Opisyal na itinatag ang Bulacan State
                  University - College of Nursing (BulSU-CON) noong Disyembre
                  2003 sa pamamagitan ng
                  <strong class="text-primary font-semibold">
                    Board of Regents (B.O.R.) Resolution No. 65, s. 2003</strong
                  >, bilang tugon sa lumalaking pangangailangan para sa mga
                  de-kalidad at kompetitibong nars sa lokal at internasyonal na
                  komunidad.
                </p>
                <p
                  class="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  Pormal itong binuksan sa unang semester ng Taong Panuruan
                  2004-2005 sa ilalim ng College of Arts and Sciences (CAS) sa
                  pamumuno ni Dr. Norma C. Morala, na may halos 200 mag-aaral na
                  nahahati sa apat na seksyon.
                </p>
                <div class="flex items-center gap-space-md pt-space-xs">
                  <div class="flex flex-col">
                    <span
                      class="font-headline-md text-headline-md text-secondary"
                      >~200</span
                    >
                    <span
                      class="font-caption text-caption text-on-surface-variant uppercase">
                      Pioneering Students (2004)
                    </span>
                  </div>
                  <div class="h-8 w-px bg-surface-variant"></div>
                  <div class="flex flex-col">
                    <span
                      class="font-headline-md text-headline-md text-secondary"
                      >Level I</span
                    >
                    <span
                      class="font-caption text-caption text-on-surface-variant uppercase">
                      AACCUP Accredited
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <p
              class="font-body-md text-body-md text-on-surface-variant leading-relaxed mb-space-md">
              Noong Pebrero 15, 2005, sa bisa ng
              <strong class="text-primary font-semibold"
                >Resolution No. 4, s. 2005</strong
              >, nahati ang CAS sa tatlong instituto at isang kolehiyo—kabilang
              ang
              <strong class="text-primary font-semibold"
                >College of Nursing</strong
              >
              bilang isang ganap at malayang kolehiyo. Nadoble ang bilang ng mga
              nag-enroll sa sumunod na taon, kaya't lumaki sa walong seksyon ang
              unang taon. Pinangunahan ito ng kauna-unahang dekano na si
              <strong class="text-primary font-semibold"
                >Ms. Adelaida G. Borbe, RN, MSN</strong
              >
              (2005–2010), na sinundan kalaunan ni
              <strong class="text-primary font-semibold"
                >Dr. Loida O. Crespo, MSN, PhD</strong
              >
              at ng Associate Dean na si
              <strong class="text-primary font-semibold"
                >Ms. Jane Marie Sumodlayon, RN, MAN</strong
              >. Sa kasalukuyan, patuloy na pinatitibay ng kolehiyo ang
              kahusayan sa edukasyon, pananaliksik, at pangangalagang
              pangkalusugan sa tulong ng mga mahuhusay na guro.
            </p>
            <p
              class="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              Bilang patunay ng dedikasyon sa de-kalidad na edukasyon, pumasa
              ang kolehiyo sa AACCUP Level I accreditation noong Disyembre 6,
              2011. Upang matulungan din ang mga estudyanteng kapus-palad sa
              pinansyal na aspekto, naglunsad ang CON ng mga kursong TESDA
              (Massage Therapy, Health Care Services, at Caregiving) simula
              noong Hunyo 2014, na accredited noong 2015. Naging tulay ito upang
              mas mapalawak ang oportunidad sa mga nagnanais maging bahagi ng
              larangan ng kalusugan.
            </p>
          </article>

          <!-- Section 2: Vision & Mission Split Bento -->
          <div
            id="mission-vision"
            class="grid grid-cols-1 md:grid-cols-2 gap-gutter scroll-mt-28">
            <!-- Vision Card -->
            <article
              class="bg-surface-container-lowest p-space-lg rounded-DEFAULT shadow-sm flex flex-col justify-between">
              <div>
                <div class="flex items-start justify-between mb-space-sm">
                  <h3
                    class="font-headline-md text-headline-md text-primary mb-space-sm uppercase tracking-tight">
                    Vision
                  </h3>
                  <span
                    class="w-8 h-8 rounded-full bg-secondary-fixed flex items-center justify-center text-primary">
                    <span class="material-symbols-outlined text-[18px]"
                      >visibility</span
                    >
                  </span>
                </div>

                <div
                  class="p-space-md rounded-DEFAULT bg-surface-container-low mb-space-md border-b-2 border-b-secondary">
                  <p
                    class="font-body-md text-body-md text-on-surface leading-relaxed italic">
                    "The College of Nursing envisions to be the center of
                    excellence in nursing education where student's talents and
                    skills are horned to the fullest potentials in a culture
                    that promotes highest academic standards."
                  </p>
                </div>
              </div>
              <div
                class="flex items-center justify-between text-secondary font-label-sm text-label-sm pt-space-xs">
                <span>BulSU-CON Institutional Vision</span>
                <span class="material-symbols-outlined text-[16px]"
                  >verified</span
                >
              </div>
            </article>

            <!-- Mission Card -->
            <article
              class="bg-surface-container-lowest p-space-lg rounded-DEFAULT shadow-sm flex flex-col justify-between">
              <div>
                <div class="flex items-center justify-between mb-space-sm">
                  <h3
                    class="font-headline-md text-headline-md text-primary mb-space-sm uppercase tracking-tight">
                    Mission
                  </h3>
                  <span
                    class="w-8 h-8 rounded-full bg-secondary-fixed flex items-center justify-center text-primary">
                    <span class="material-symbols-outlined text-[18px]"
                      >flag</span
                    >
                  </span>
                </div>

                <div
                  class="p-space-md rounded-DEFAULT bg-surface-container-low mb-space-md border-b-2 border-b-secondary">
                  <p
                    class="font-body-md text-body-md text-on-surface leading-relaxed italic">
                    "The College of Nursing shall provide holistic instruction
                    and training in nursing discipline reinforced with desirable
                    work habits and competencies capable of responding to the
                    needs of the local and the demands of the global standard of
                    health care."
                  </p>
                </div>
              </div>
              <div
                class="flex items-center justify-between text-secondary font-label-sm text-label-sm pt-space-xs">
                <span>BulSU-CON Institutional Mission</span>
                <span class="material-symbols-outlined text-[16px]"
                  >flag_circle</span
                >
              </div>
            </article>
          </div>

          <!-- Section 3: General Objectives & 11 KARs -->
          <article
            id="general-objectives"
            class="bg-surface-container-lowest p-space-lg md:p-space-xl rounded-DEFAULT shadow-sm scroll-mt-28">
            <div class="flex items-center justify-between mb-space-lg">
              <div>
                <h3
                  class="font-headline-md text-headline-md text-primary tracking-tight uppercase">
                  General Objectives
                </h3>
              </div>
              <span class="material-symbols-outlined text-secondary text-[28px]"
                >checklist</span
              >
            </div>

            <div
              class="bg-surface-container-low p-space-md rounded-DEFAULT mb-space-xl">
              <p
                class="font-body-md text-body-md text-on-surface-variant leading-relaxed mb-space-xs">
                To produces graduates who shall uphold Filipino values in
                providing holistic nursing care in any setting. To discover and
                develop optimum potentials and capabilities for professional
                competence.
              </p>
              <p
                class="font-body-md text-body-md text-primary font-semibold leading-relaxed">
                To produce nursing graduates capable in demonstrating
                proficiency in all the Key Areas of Responsibilities (KAR);
              </p>
            </div>

            <div>
              <div
                class="inline-flex items-center gap-space-xxs text-secondary mb-space-md">
                <span class="material-symbols-outlined text-[18px]">stars</span>
                <span
                  class="font-label-sm text-label-sm uppercase tracking-wider font-semibold">
                  11 Key Areas of Responsibilities (KAR)
                </span>
              </div>

              <div
                class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-sm">
                <div
                  v-for="(item, index) in karList"
                  :key="item.number"
                  class="bg-surface-container-low p-space-md rounded-DEFAULT flex items-start gap-space-sm hover:shadow-sm transition-shadow"
                  :class="{
                    'md:col-span-2 lg:col-span-1': index === karList.length - 1,
                  }">
                  <span
                    class="w-8 h-8 rounded-full bg-secondary-fixed text-primary font-bold text-label-sm flex items-center justify-center shrink-0">
                    {{ item.number }}
                  </span>
                  <div>
                    <h4
                      class="font-title-sm text-title-sm text-primary mb-space-xxs">
                      {{ item.title }}
                    </h4>
                    <p
                      class="font-body-sm text-body-sm text-on-surface-variant">
                      {{ item.description }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- Key Milestones Section: Horizontal Road-Map -->
    <section class="w-full bg-surface-container-low py-space-3xl mt-space-xl">
      <div
        class="max-w-7xl mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin">
        <!-- Section Header -->
        <div
          class="flex flex-col md:flex-row md:items-end justify-between gap-space-md mb-space-2xl">
          <div>
            <div
              class="inline-flex items-center gap-space-xxs text-secondary mb-space-xxs">
              <span class="material-symbols-outlined text-[18px]"
                >timeline</span
              >
              <span
                class="font-label-sm text-label-sm uppercase tracking-wider font-bold">
                Chronicle of Excellence
              </span>
            </div>
            <h2
              class="font-headline-lg text-[28px] md:text-[34px] font-bold text-primary tracking-tight font-serif italic">
              Key Milestones
            </h2>
          </div>
          <p class="font-body-sm text-body-sm text-on-surface-variant max-w-md">
            A definitive timeline charting the institutional evolution of
            Bulacan State University - College of Nursing (BulSU-CON).
          </p>
        </div>

        <!-- Horizontal Timeline Container -->
        <div class="relative w-full">
          <!-- Connecting Track Line (Desktop Horizontal) -->
          <div
            class="hidden lg:block absolute top-[26px] left-8 right-8 h-1 bg-secondary-fixed rounded-full z-0">
            <div
              class="h-full bg-secondary w-full rounded-full opacity-60"></div>
          </div>

          <!-- Milestone Cards Grid -->
          <div
            class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-gutter relative z-10">
            <div
              v-for="milestone in milestones"
              :key="milestone.year"
              class="flex flex-col group">
              <div class="flex items-center gap-space-sm mb-space-md">
                <div
                  class="w-14 h-14 rounded-full flex items-center justify-center shadow-md group-hover:scale-110 transition-transform shrink-0 font-bold"
                  :class="milestone.badgeClass">
                  {{ milestone.year }}
                </div>
                <span
                  class="font-label-sm text-label-sm text-secondary font-semibold lg:hidden">
                  {{ milestone.mobileLabel }}
                </span>
              </div>
              <div
                class="bg-surface-container-lowest p-space-md rounded-2xl shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between h-full"
                :class="
                  milestone.highlighted
                    ? 'border-2 border-secondary'
                    : 'border border-surface-variant/40'
                ">
                <div>
                  <span
                    class="font-label-sm text-label-sm uppercase tracking-wider text-secondary block mb-space-xxs font-bold">
                    {{ milestone.eyebrow }}
                  </span>
                  <h3
                    class="font-title-sm text-title-sm text-primary mb-space-xs font-semibold">
                    {{ milestone.title }}
                  </h3>
                  <p
                    class="font-body-sm text-[13px] text-on-surface-variant leading-relaxed">
                    {{ milestone.description }}
                  </p>
                </div>
                <div
                  class="mt-space-md pt-space-xs flex items-center gap-space-xxs text-secondary font-caption text-[11px] font-bold">
                  <span class="material-symbols-outlined text-[14px]">{{
                    milestone.icon
                  }}</span>
                  <span>{{ milestone.footer }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

// --- 1. Sticky Table of Contents Navigation ---
const activeSection = ref("history");

const tocItems = [
  { id: "history", label: "History" },
  { id: "mission-vision", label: "Mission & Vision" },
  { id: "general-objectives", label: "General Objectives" },
];

function scrollToSection(id) {
  activeSection.value = id;
  const targetElem = document.getElementById(id);
  if (targetElem) {
    window.scrollTo({
      top: targetElem.offsetTop - 110,
      behavior: "smooth",
    });
  }
}

function handleScrollSpy() {
  const scrollPosition = window.scrollY + 180;
  for (const item of tocItems) {
    const el = document.getElementById(item.id);
    if (el && scrollPosition >= el.offsetTop) {
      activeSection.value = item.id;
    }
  }
}

onMounted(() => {
  window.addEventListener("scroll", handleScrollSpy, { passive: true });
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScrollSpy);
});

// --- 2. 11 Key Areas of Responsibilities (KAR) Data ---
const karList = [
  {
    number: "01",
    title: "Safety and quality nursing care",
    description:
      "Core clinical standard ensuring patient-centered safety and evidence-based practice.",
  },
  {
    number: "02",
    title: "Management of resources and environment",
    description:
      "Efficient stewardship of healthcare equipment, clinical supplies, and therapeutic space.",
  },
  {
    number: "03",
    title: "Health education",
    description:
      "Promoting health literacy and empowering individuals and communities.",
  },
  {
    number: "04",
    title: "Legal Responsibility",
    description:
      "Strict adherence to statutory obligations and nursing jurisdictional policies.",
  },
  {
    number: "05",
    title: "Ethico-moral responsibility",
    description:
      "Integrity, bioethics, and respect for human dignity and patient autonomy.",
  },
  {
    number: "06",
    title: "Personal and professional development",
    description:
      "Continuous lifelong education, self-improvement, and collegiate mentorship.",
  },
  {
    number: "07",
    title: "Quality improvement",
    description:
      "Constant assessment of outcomes and systematic enhancement of healthcare delivery.",
  },
  {
    number: "08",
    title: "Research",
    description:
      "Inquiry and utilization of evidence-based nursing science for clinical innovations.",
  },
  {
    number: "09",
    title: "Record management",
    description:
      "Precise, confidential, and comprehensive health information systems documentation.",
  },
  {
    number: "10",
    title: "Communication",
    description:
      "Effective therapeutic communication with patients, families, and healthcare teams.",
  },
  {
    number: "11",
    title: "Collaboration and Teamwork",
    description:
      "Multidisciplinary engagement to deliver unified, synchronized healthcare solutions.",
  },
];

// --- 3. Key Institutional Milestones Data ---
const milestones = [
  {
    year: "2003",
    mobileLabel: "Foundation",
    badgeClass: "bg-primary text-surface font-title-sm text-title-sm",
    eyebrow: "Ang Pagsisimula",
    title: "Karta ng Pundasyon",
    description:
      "Itinatag noong Disyembre 2003 sa ilalim ng B.O.R Resolution No. 65, s. 2003 upang tugunan ang lumalaking pangangailangan para sa mga kompetitibong nars sa lokal at pandaigdigang saklaw.",
    icon: "account_balance",
    footer: "B.O.R. Res. No. 65, s. 2003",
    highlighted: false,
  },
  {
    year: "2004",
    mobileLabel: "Unang Pagsisimula",
    badgeClass: "bg-secondary text-on-secondary font-title-sm text-title-sm",
    eyebrow: "Unang Pagsisimula",
    title: "Panahon ng CAS & Unang 200",
    description:
      "Pormal na iniaalok noong 1st semester SY 2004–2005 sa ilalim ng B.O.R. Res. No. 17, s. 2004 sa ilalim ng Dekano ng CAS na si Dr. Norma C. Morala na may humigit-kumulang 200 mag-aaral sa 4 na seksyon.",
    icon: "school",
    footer: "College of Arts & Sciences",
    highlighted: false,
  },
  {
    year: "2005",
    mobileLabel: "Sariling Pamamahala",
    badgeClass: "bg-primary-container text-surface font-title-sm text-title-sm",
    eyebrow: "Malayang Kolehiyo",
    title: "Sariling Pamamahala",
    description:
      "Itinatag ng B.O.R. Res. No. 4, s. 2005 ang CON bilang isang hiwalay na kolehiyo na may Unang Dekano na si Ms. Adelaida G. Borbe; nadoble ang bilang ng mga nag-enrol sa 8 seksyon.",
    icon: "domain",
    footer: "Dean Adelaida G. Borbe",
    highlighted: false,
  },
  {
    year: "2011",
    mobileLabel: "Akreditasyon",
    badgeClass:
      "bg-secondary-container text-on-secondary-container font-title-sm text-title-sm",
    eyebrow: "Pagkilala",
    title: "AACCUP Level I",
    description:
      "Nakamit ang AACCUP Level I Accreditation noong Disyembre 6, 2011, na nagtatag ng mga pamantayan ng kalidad sa akademiko sa ilalim ng Dekano na si Ms. Loida O. Crespo.",
    icon: "verified",
    footer: "AACCUP Accreditation",
    highlighted: false,
  },
  {
    year: "2014-15",
    mobileLabel: "Kaugnay na Kurso",
    badgeClass:
      "bg-secondary text-on-secondary font-label-md text-[13px] leading-tight px-1 text-center",
    eyebrow: "Pagpapalawak",
    title: "TESDA & Tracks",
    description:
      "Inilunsad ang mga sunud-sunod na kursong NC sa Caregiving, Health Care Services, at Massage Therapy (nagsimulang gumana noong 2014, na-accredit ng TESDA noong Hunyo 2015).",
    icon: "medical_services",
    footer: "TESDA Accredited",
    highlighted: false,
  },
  {
    year: "2026",
    mobileLabel: "Level IV Status",
    badgeClass:
      "bg-primary text-surface font-title-sm text-title-sm ring-4 ring-secondary-fixed",
    eyebrow: "Akreditasyon",
    title: "Level IV Status",
    description:
      "Naabot ng BulSU College ng Nursing ang Level IV Re-accredited Status mula sa AACCUP noong Mayo 2026 (bisa hanggang 2031)—sumasalamin sa mataas na husay.",
    icon: "workspace_premium",
    footer: "AACCUP Level IV (2026–2031)",
    highlighted: true,
  },
];
</script>
