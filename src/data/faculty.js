// --- TIERS 1 - 3: EXECUTIVE LEADERSHIP ---
const executiveTiers = [
  {
    tier: 1,
    tierLabel: "Office of the Dean",
    icon: "workspace_premium",
    name: "Magdalena D. Soyosa",
    credentials: "MAN, RN",
    role: "College Dean",
    image: "/images/faculty/magdalena-d-soyosa_man_rn-college-dean.jpg",
    tags: ["Chief Academic & Administrative Officer"],
  },
  {
    tier: 2,
    tierLabel: "Office of the Associate Dean",
    icon: "military_tech",
    name: "Allan M. Manaloto",
    credentials: "PhD, RN, LPT",
    role: "Associate Dean",
    image:
      "/images/faculty/allan-m-manaloto_phd_rn_lpt-associate-dean-bulsu-ethics-review-committee-member.jpg",
    tags: ["BulSU Ethics Review Committee Member"],
  },
  {
    tier: 3,
    tierLabel: "Department Leadership",
    icon: "school",
    name: "Rhealeen V. Vicedo",
    credentials: "MAN, RN",
    role: "Program Chair",
    image:
      "/images/faculty/rhealeen-v-vicedo_man_rn-program-chair-bulsu-ethics-committee-member-unang-hakbang-adviser.jpg",
    tags: ["BulSU Ethics Review Committee Member", "Unang Hakbang Adviser"],
  },
];

// --- TIER 4: COORDINATORS & OFFICERS (GROUPED BY FUNCTION) ---
const coordinatorGroups = [
  {
    eyebrow: "Curriculum & Clinical Placement",
    title: "Academic and Clinical",
    icon: "clinical_notes",
    gridClass: "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6",
    members: [
      {
        name: "Josefina C. Reyes",
        credentials: "MAN, RN",
        role: "Level 2 Coordinator",
        badge: "BSN Level 2",
        image:
          "/images/faculty/josefina-c-reyes_man_rn-level-2-coordinator-knightingale-society-adviser-nurses-notes-adviser.jpg",
        tags: ["Knightingale Society & Nurses' Notes Adviser"],
      },
      {
        name: "Abigail C. Ramos",
        credentials: "MAN, RN",
        role: "Level 3 Coordinator",
        badge: "BSN Level 3",
        image:
          "/images/faculty/abigail-c-ramos_man_rn-level-3-coordinator-asset-management-officer.jpg",
        tags: ["Asset Management Officer"],
      },
      {
        name: "Ramon D. Laderas Jr.",
        credentials: "MAN, RN",
        role: "Level 4 Coordinator",
        badge: "BSN Level 4",
        image:
          "/images/faculty/ramon-d-laderas-jr_man_rn-level-4-coordinator-local-student-council-adviser.jpg",
        tags: ["Local Student Council Adviser"],
      },
      {
        name: "Catherine R. Atud",
        credentials: "MAN, RN",
        role: "Licensure (NLE) Coordinator",
        badge: "PNLE Readiness",
        image:
          "/images/faculty/catherine-r-atud_man_rn-licensure-nle-coordinator.jpg",
        tags: [],
      },
      {
        name: "Joseph Alvin C. Paulino",
        credentials: "MAN, RN",
        role: "Student Internship Program Coordinator",
        badge: "Clinical Internship",
        image:
          "/images/faculty/joseph-alvin-c-paulino_man_rn-student-internship-program-coordinator-sports-coordinator.jpg",
        tags: ["Sports Coordinator"],
      },
    ],
  },
  {
    eyebrow: "Inquiry, Community Service & Safety",
    title: "Research, Extension and Outreach",
    icon: "biotech",
    gridClass: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6",
    members: [
      {
        name: "Fritzie Dela Cruz",
        credentials: "MAN, RN",
        role: "Research Coordinator",
        badge: "Nursing Research",
        image:
          "/images/faculty/fritzie-dela-cruz_man_rn-research-coordinator-bulsu-ethics-review-committee-member.jpg",
        tags: ["BulSU Ethics Review Committee Member"],
      },
      {
        name: "Rowena P. Santos",
        credentials: "MAN, RN",
        role: "Extension Coordinator",
        badge: "Community Extension",
        image:
          "/images/faculty/rowena-p-santos_man_rn-extension-coordinator.jpg",
        tags: [],
      },
      {
        name: "Jon Erik Censon",
        credentials: "RN",
        role: "Disaster Risk Reduction Management Coordinator",
        badge: "DRRM",
        image:
          "/images/faculty/jon-erik-censon_rn-disaster-risk-reduction-management-coordinator.jpg",
        tags: [],
      },
      {
        name: "Marlyn M. Cabungcal",
        credentials: "MAN, RN",
        role: "Local GADC Coordinator",
        badge: "Gender & Development",
        image:
          "/images/faculty/marlyn-m-cabungcal_man_rn-local-gadc-coordinator.jpg",
        tags: [],
      },
    ],
  },
  {
    eyebrow: "Student Welfare, Career & Athletics",
    title: "Student and Alumni Services",
    icon: "diversity_3",
    gridClass: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6",
    members: [
      {
        name: "Florabel T. Sera-Josef",
        credentials: "MAN, RN",
        role: "Retention Coordinator",
        badge: "Student Retention",
        image:
          "/images/faculty/florabel-t-sera-josef_man_rn-retention-coordinator.jpg",
        tags: [],
      },
      {
        name: "John Paule E. Mendoza",
        credentials: "PhD, RN",
        role: "Alumni Coordinator",
        badge: "Alumni Relations",
        image:
          "/images/faculty/john-paule-e-mendoza_phd_rn-alumni-coordinator.jpg",
        tags: [],
      },
      {
        name: "Russell John B. Catalig",
        credentials: "MAN, RN",
        role: "Director, Placement and PESO",
        badge: "Placement & PESO",
        image:
          "/images/faculty/russell-john-b-catalig_man_rn-director-placement-and-public-employment-service-office-peso.jpg",
        tags: [],
      },
      {
        name: "Joseph Alvin C. Paulino",
        credentials: "MAN, RN",
        role: "Sports Coordinator",
        badge: "Collegiate Sports",
        image:
          "/images/faculty/joseph-alvin-c-paulino_man_rn-student-internship-program-coordinator-sports-coordinator.jpg",
        tags: ["Student Internship Program Coordinator"],
      },
    ],
  },
  {
    eyebrow: "Media & Institutional Training",
    title: "Communications and Capacity Development",
    icon: "campaign",
    gridClass: "grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8 max-w-3xl mx-auto",
    members: [
      {
        name: "Rhenelee C. Viray",
        credentials: "MAN, RN",
        role: "Local Multimedia Communication Officer",
        badge: "Multimedia & Comms",
        image:
          "/images/faculty/rhenelee-c-viray_man_rn-local-multimedia-communication-officer-knightingale-society-adviser-pacemaker-all-stars-adviser.jpg",
        tags: ["Knightingale Society & PMAS Adviser"],
      },
      {
        name: "David D.S. Bote",
        credentials: "MAN, RN",
        role: "Head, Capacity Development (ESO)",
        badge: "Capacity Dev (ESO)",
        isHead: true,
        image:
          "/images/faculty/david-d-s-bote_man_rn-head-capacity-development-ESO-red-cross-youth-council-adviser-knightingale-society-adviser.jpg",
        tags: ["RCYC & Knightingale Society Adviser"],
      },
    ],
  },
  {
    eyebrow: "Research Bioethics & Governance",
    title: "BulSU Ethics Review Committee",
    icon: "gavel",
    gridClass: "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6",
    members: [
      {
        name: "Alex S. Borromeo",
        credentials: "MAN, RN",
        role: "Head, BulSU Ethics Review Committee",
        badge: "Committee Head",
        isHead: true,
        image:
          "/images/faculty/alex-s-borromeo_man_rn-head-bulsu-ethics-and-review-committee.jpg",
        tags: [],
      },
      {
        name: "Allan M. Manaloto",
        credentials: "PhD, RN, LPT",
        role: "Ethics Review Committee Member",
        badge: "Committee Member",
        image:
          "/images/faculty/allan-m-manaloto_phd_rn_lpt-associate-dean-bulsu-ethics-review-committee-member.jpg",
        tags: ["Associate Dean"],
      },
      {
        name: "Fritzie Dela Cruz",
        credentials: "MAN, RN",
        role: "Ethics Review Committee Member",
        badge: "Committee Member",
        image:
          "/images/faculty/fritzie-dela-cruz_man_rn-research-coordinator-bulsu-ethics-review-committee-member.jpg",
        tags: ["Research Coordinator"],
      },
      {
        name: "Rhealeen V. Vicedo",
        credentials: "MAN, RN",
        role: "Ethics Review Committee Member",
        badge: "Committee Member",
        image:
          "/images/faculty/rhealeen-v-vicedo_man_rn-program-chair-bulsu-ethics-committee-member-unang-hakbang-adviser.jpg",
        tags: ["Program Chair"],
      },
      {
        name: "Jocelyn M. Medina",
        credentials: "PhDN, PhD, RN",
        role: "Ethics Review Committee Member",
        badge: "Committee Member",
        image:
          "/images/faculty/jocelyn_m_medina_phdn_phd_rn-bulsu-ethics-review-committee-member.jpg",
        tags: [],
      },
    ],
  },
];

// --- TIER 5: STUDENT ORGANIZATION ADVISERS ---
const adviserOrgs = [
  {
    organization: "LUNGS (Lydians United Nursing Giocoso Singers)",
    slug: "lungs",
    category: "Musical & Choral Guild",
    logo: "/images/con-org-logo/lungs-lydians-united-nursing-giocoso-singers.png",
    advisers: [
      {
        name: "Estelle Rose M. Lerma",
        credentials: "MAN, RN",
        image: "/images/faculty/estelle-rose-m-lerma_man_rn-lungs-adviser.jpg",
      },
      {
        name: "Jane Marie M. Sumodlayon",
        credentials: "MAN, RN",
        image:
          "/images/faculty/jane-marie-m-sumodlayon_man_rn-lungs-adviser-unang-hakbang-adviser.jpg",
      },
    ],
  },
  {
    organization: "Unang Hakbang",
    slug: "unang-hakbang",
    category: "Community Outreach",
    logo: "/images/con-org-logo/unang-hakbang.jpg",
    advisers: [
      {
        name: "Jane Marie M. Sumodlayon",
        credentials: "MAN, RN",
        image:
          "/images/faculty/jane-marie-m-sumodlayon_man_rn-lungs-adviser-unang-hakbang-adviser.jpg",
      },
      {
        name: "Rhealeen V. Vicedo",
        credentials: "MAN, RN",
        image:
          "/images/faculty/rhealeen-v-vicedo_man_rn-program-chair-bulsu-ethics-committee-member-unang-hakbang-adviser.jpg",
      },
    ],
  },
  {
    organization: "Red Cross Youth Council",
    slug: "red-cross-youth-council",
    category: "Humanitarian Council",
    logo: "/images/con-org-logo/red-cross-youth-council.jpg",
    advisers: [
      {
        name: "David D.S. Bote",
        credentials: "MAN, RN",
        image:
          "/images/faculty/david-d-s-bote_man_rn-head-capacity-development-ESO-red-cross-youth-council-adviser-knightingale-society-adviser.jpg",
      },
      {
        name: "Jessica C. Villano",
        credentials: "MAN, RN",
        image:
          "/images/faculty/jessica-c-villano_man_rn-red-cross-youth-council-adviser.jpg",
      },
    ],
  },
  {
    organization: "Knightingale Society",
    slug: "knightingale-society",
    category: "Leadership Society",
    logo: "/images/con-org-logo/knightingale-society.png",
    advisers: [
      {
        name: "David D.S. Bote",
        credentials: "MAN, RN",
        image:
          "/images/faculty/david-d-s-bote_man_rn-head-capacity-development-ESO-red-cross-youth-council-adviser-knightingale-society-adviser.jpg",
      },
      {
        name: "Josefina C. Reyes",
        credentials: "MAN, RN",
        image:
          "/images/faculty/josefina-c-reyes_man_rn-level-2-coordinator-knightingale-society-adviser-nurses-notes-adviser.jpg",
      },
      {
        name: "Rhenelee C. Viray",
        credentials: "MAN, RN",
        image:
          "/images/faculty/rhenelee-c-viray_man_rn-local-multimedia-communication-officer-knightingale-society-adviser-pacemaker-all-stars-adviser.jpg",
      },
    ],
  },
  {
    organization: "The Nurses' Notes",
    slug: "the-nurses-notes",
    category: "Official Publication",
    logo: "/images/con-org-logo/the-nurses-notes.jpg",
    advisers: [
      {
        name: "Charmaine Dale B. Robles",
        credentials: "RN",
        image:
          "/images/faculty/charmaine-dale-b-robles_rn-pacemaker-all-stars-adviser-nurses-notes-adviser.jpg",
      },
      {
        name: "Josefina C. Reyes",
        credentials: "MAN, RN",
        image:
          "/images/faculty/josefina-c-reyes_man_rn-level-2-coordinator-knightingale-society-adviser-nurses-notes-adviser.jpg",
      },
    ],
  },
  {
    organization: "Pacemaker All-Stars",
    slug: "pacemaker-all-stars",
    category: "Culture & Performing Arts",
    logo: "/images/con-org-logo/pacemaker-all-stars.jpg",
    advisers: [
      {
        name: "Charmaine Dale B. Robles",
        credentials: "RN",
        image:
          "/images/faculty/charmaine-dale-b-robles_rn-pacemaker-all-stars-adviser-nurses-notes-adviser.jpg",
      },
      {
        name: "Rhenelee C. Viray",
        credentials: "MAN, RN",
        image:
          "/images/faculty/rhenelee-c-viray_man_rn-local-multimedia-communication-officer-knightingale-society-adviser-pacemaker-all-stars-adviser.jpg",
      },
    ],
  },
  {
    organization: "Local Student Council",
    slug: "local-student-council",
    category: "Governance Council",
    logo: "/images/con-org-logo/local-student-council.jpg",
    advisers: [
      {
        name: "Ma. Jezreel Fernandez",
        credentials: "RN",
        image:
          "/images/faculty/ma-jezreel-fernandez_rn-local-student-council-adviser.jpg",
      },
      {
        name: "Ramon D. Laderas Jr.",
        credentials: "MAN, RN",
        image:
          "/images/faculty/ramon-d-laderas-jr_man_rn-level-4-coordinator-local-student-council-adviser.jpg",
      },
    ],
  },
];

export { executiveTiers, coordinatorGroups, adviserOrgs };
