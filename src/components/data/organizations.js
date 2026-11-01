// src/data/organizations.js
export const organizations = [
  // 1. Local Student Council
  {
    slug: "local-student-council",
    name: "Local Student Council",
    subtitle: "CON LSC • Student Body",
    badge: "Governance Council",
    badgeClass: "bg-primary text-on-primary",
    heroEyebrowIcon: "account_balance",
    heroEyebrowText: "Governance Council • College of Nursing",
    logo: "/images/con-org-logo/local-student-council.jpg",
    facebookUrl: "https://www.facebook.com/BulSUCONLSC",
    shortDescription:
      "Ang opisyal na pamunuan ng mga mag-aaral o student government ng BulSU College of Nursing na nangunguna sa pagtataguyod ng kapakanan, mga karapatan, at mga programa para sa buong komunidad ng mga nursing student.",
    aboutBadgeIcon: "account_balance",
    aboutBadgeText: "Student Rights & Welfare",
    aboutTitle: "About the Local Student Council",
    aboutDescription:
      "As the highest student governing body in the College of Nursing, the Local Student Council (LSC) is the vanguard of student rights, academic welfare, and collegiate empowerment. They bridge the student body and the administration, ensuring that the needs of every Isko-Nars are met with action, transparency, and principled leadership.",
    sections: [
      {
        eyebrowIcon: "stars",
        eyebrow: "Pamunuang Tagapagpaganap",
        title: "Executive Leadership",
        groups: [
          {
            gridClass:
              "grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8 max-w-3xl mx-auto",
            members: [
              {
                name: "Jetlyn Rose Castor",
                role: "Gobernador",
                subtext: "CON LSC Governor",
                subtextIcon: "workspace_premium",
                tag: "Head of Council",
                tagIcon: "shield_person",
                variant: "head",
                centered: true,
                image:
                  "/images/con-org-members/local-student-council/gobernador-jetlyn-rose-castor.jpg",
              },
              {
                name: "Jilliane Brace DC. Salandanan",
                role: "Bise Gobernador",
                subtext: "CON LSC Vice Governor",
                subtextIcon: "assistant",
                tag: "Executive Directorate",
                tagIcon: "military_tech",
                variant: "vice",
                centered: true,
                image:
                  "/images/con-org-members/local-student-council/bise-gobernador-jilliane-brace-dc-salandanan.jpg",
              },
            ],
          },
        ],
      },
      {
        eyebrowIcon: "group_work",
        eyebrow: "Council Representatives",
        title: "Board Members (Mga Bokal)",
        groups: [
          {
            gridClass:
              "grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8 max-w-3xl mx-auto",
            members: [
              {
                name: "Eula Nesha M. Mendoza",
                role: "Bokal",
                tag: "Legislative",
                centered: true,
                image:
                  "/images/con-org-members/local-student-council/bokal-eula-nesha-m-mendoza.jpg",
              },
              {
                name: "Von Richie R. Cadabona",
                role: "Bokal",
                tag: "Legislative",
                centered: true,
                image:
                  "/images/con-org-members/local-student-council/bokal-von-richie-r-cadabona.jpg",
              },
            ],
          },
        ],
      },
    ],
  },

  // 2. Knightingale Society
  {
    slug: "knightingale-society",
    name: "Knightingale Society",
    subtitle: "Cadence Chapter",
    badge: "Leadership Society",
    badgeClass: "bg-tertiary-fixed text-on-tertiary-fixed",
    heroEyebrowIcon: "workspace_premium",
    heroEyebrowText: "Leadership Society • College of Nursing",
    logo: "/images/con-org-logo/knightingale-society.png",
    facebookUrl: "https://www.facebook.com/ks.bulsucon",
    shortDescription:
      "Isang organisasyong pang-akademiko o panlipunan na ipinangalan kay Florence Nightingale, na nakatutok sa pagtataguyod ng kahusayan sa nursing at pagkakaisa.",
    aboutBadgeIcon: "military_tech",
    aboutBadgeText: "Service & Leadership",
    aboutTitle: "About the Knightingale Society",
    aboutDescription:
      "Named in honor of Florence Nightingale, the Knightingale Society champions nursing leadership, clinical camaraderie, and community outreach across the Bulacan State University College of Nursing.",
    sections: [], // Paste your knightingale-society.html sections here if needed!
  },

  // 3. CORTEX
  {
    slug: "cortex",
    name: "CORTEX",
    subtitle: "CON Academic Society • Est. 2026",
    badge: "Academic Society",
    badgeClass: "bg-secondary-fixed text-on-secondary-fixed",
    heroEyebrowIcon: "psychology",
    heroEyebrowText: "Academic Society • Est. 2026",
    logo: "/images/con-org-logo/cortex-the-con-academic-society.jpg",
    facebookUrl: "https://www.facebook.com/profile.php?id=61591587331259",
    shortDescription:
      "Isang organisasyong pang-akademiko na naglalayong patalasin ang talino at pagbutihin ang performans ng mga nursing student sa kanilang pag-aaral.",
    aboutBadgeIcon: "school",
    aboutBadgeText: "Academic Excellence",
    aboutTitle: "About CORTEX",
    aboutDescription:
      "CORTEX serves as the premier academic guild of the BulSU College of Nursing, dedicated to peer tutorials, board exam readiness, and scholarly excellence among student nurses.",
    sections: [], // Paste your cortex.html sections here if needed!
  },

  // 4. The Nurses' Notes
  {
    slug: "the-nurses-notes",
    name: "The Nurses' Notes",
    subtitle: "CON Journalism Guild • Est. 2007",
    badge: "Official Publication",
    badgeClass: "bg-primary text-on-primary",
    heroEyebrowIcon: "newspaper",
    heroEyebrowText: "Official Publication • Est. 2007",
    logo: "/images/con-org-logo/the-nurses-notes.jpg",
    facebookUrl: "https://www.facebook.com/TheNursesNotesPublication",
    shortDescription:
      "Ang opisyal na pahayagan ng mga mag-aaral sa BulSU College of Nursing na nagbibigay-impormasyon sa pamamagitan ng campus journalism at malikhaing pagsusulat.",
    aboutBadgeIcon: "menu_book",
    aboutBadgeText: "Campus Journalism & Truth",
    aboutTitle: "About The Nurses' Notes",
    aboutDescription:
      "Established in 2007, The Nurses' Notes serves as the official student publication of the Bulacan State University College of Nursing. Through fearless campus journalism, creative literature, and visual storytelling, the publication amplifies the voices, struggles, and triumphs of the Isko-Nars community.",
    sections: [
      {
        eyebrowIcon: "school",
        eyebrow: "Editorial Mentorship & Guidance",
        title: "Advisers & Alumni Consultant",
        groups: [
          {
            gridClass:
              "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto",
            members: [
              {
                name: "Josefina Reyes, RN, MAN",
                role: "Faculty Adviser",
                subtext: "BulSU College of Nursing Faculty",
                subtextIcon: "clinical_notes",
                tag: "Faculty Mentorship",
                tagIcon: "school",
                variant: "adviser",
                image:
                  "/images/con-org-members/knightingale-society/knightingale-society-reyes-josefina-c-faculty-adviser.jpg",
              },
              {
                name: "Charmaine Dale Robles, RN, MAN",
                role: "Faculty Adviser",
                subtext: "BulSU College of Nursing Faculty",
                subtextIcon: "clinical_notes",
                tag: "Faculty Mentorship",
                tagIcon: "school",
                variant: "adviser",
                image:
                  "/images/con-org-members/nurses-notes/robles-rn-manc-charmaine-dale-b-adviser-adviser.jpg",
              },
              {
                name: "Kurt Sebastian Arcilla",
                role: "Alumni Consultant",
                subtext: "The Nurses' Notes Alumni",
                subtextIcon: "history_edu",
                tag: "Alumni Advisory",
                tagIcon: "verified",
                variant: "adviser",
                image:
                  "/images/con-org-members/nurses-notes/arcilla-kurt-sebastian-alumni-adviser-adviser.jpg",
              },
            ],
          },
        ],
      },
      {
        eyebrowIcon: "stars",
        eyebrow: "Executive Editorial Leadership",
        title: "Executive Editorial Board",
        groups: [
          {
            gridClass:
              "grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8 max-w-3xl mx-auto",
            members: [
              {
                name: "Jhilyne Domingo",
                role: "Editor-in-Chief",
                subtext: "Executive Board",
                subtextIcon: "workspace_premium",
                tag: "Head of Publication",
                tagIcon: "shield_person",
                variant: "head",
                image:
                  "/images/con-org-members/nurses-notes/domingo-jhilyne-v-editor-in-chief-executive-board.jpg",
              },
              {
                name: "Carl Adrian Macatangay",
                role: "Associate Editor",
                subtext: "Executive Board",
                subtextIcon: "assistant",
                tag: "Editorial Directorate",
                tagIcon: "military_tech",
                variant: "vice",
                image:
                  "/images/con-org-members/nurses-notes/macatangay-carl-adrian-o-associate-editor-executive-board.jpg",
              },
            ],
          },
          {
            gridClass:
              "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto",
            members: [
              {
                name: "Alexandra Mae De Jesus",
                role: "Managing Editor for Publicity",
                tag: "Publicity",
                image:
                  "/images/con-org-members/nurses-notes/de-jesus-alexandra-mae-d-t-managing-editor-for-publicity-executive-board.jpg",
              },
              {
                name: "Ma. Nicole Dela Cruz",
                role: "Managing Editor for Publication / Head of Layout Artists",
                tag: "Publication & Layout",
                image:
                  "/images/con-org-members/nurses-notes/dela-cruz-ma-nicole-m-managingg-editor-for-administration-head-layout-artist-executive-board.jpg",
              },
              {
                name: "Jeanette Carla Ventura",
                role: "Managing Editor for Finance / Feature and Science Editor",
                tag: "Finance & Features",
                image:
                  "/images/con-org-members/nurses-notes/ventura-jeanette-carla-j-managing-editor-for-finance-feature-science-editor-executive-board.jpg",
              },
            ],
          },
        ],
      },
      {
        eyebrowIcon: "edit_note",
        eyebrow: "Journalism & Literary Desk",
        title: "Writing Department & Section Editors",
        groups: [
          {
            gridClass:
              "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6",
            members: [
              {
                name: "Ma. Kristina Manuzon",
                role: "News Editor",
                tag: "News",
                image:
                  "/images/con-org-members/nurses-notes/manuzon-ma-kristina-d-news-editor-writing-department.jpg",
              },
              {
                name: "Kathleen Mae Nierva",
                role: "Opinion Editor",
                tag: "Opinion",
                image:
                  "/images/con-org-members/nurses-notes/nierva-kathleen-mae-d-l-opinion-editor-writing-department.jpg",
              },
              {
                name: "Franzine Rivera",
                role: "Head Copyreader",
                tag: "Copyreading",
                image:
                  "/images/con-org-members/nurses-notes/rivvera-franzine-i-head-copyreader-writing-department.jpg",
              },
              {
                name: "Arriana Geli",
                role: "Literary Editor",
                tag: "Literary",
                image:
                  "/images/con-org-members/nurses-notes/geli-arriana-a-literary-editor-writing-department.jpg",
              },
              {
                name: "Kristine Anne De Belen",
                role: "Sports Editor",
                tag: "Sports",
                image:
                  "/images/con-org-members/nurses-notes/de-belen-kristine-anne-l-sports-editor-writing-department.jpg",
              },
            ],
          },
        ],
      },
      {
        eyebrowIcon: "photo_camera",
        eyebrow: "Visuals, Broadcast & Production",
        title: "Multimedia & Broadcast Department",
        groups: [
          {
            gridClass:
              "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6",
            members: [
              {
                name: "Jannah Carmela Ambala",
                role: "Art Director",
                tag: "Art & Design",
                image:
                  "/images/con-org-members/nurses-notes/ambala-jannah-carmela-p-art-director-multimedia-department.jpg",
              },
              {
                name: "Estelle Marithe Gervacio",
                role: "Head Broadcaster",
                tag: "Broadcasting",
                image:
                  "/images/con-org-members/nurses-notes/gervacio-estelle-marithe-shienlee-p-head-broadcaster-multimedia-department.jpg",
              },
              {
                name: "Andrea Marie Faustino",
                role: "Associate Broadcaster",
                tag: "Broadcasting",
                image:
                  "/images/con-org-members/nurses-notes/faustino-andrea-marie-t-associate-head-broadcaster-multimedia-department.jpg",
              },
              {
                name: "Princess Ruby Aniceto",
                role: "Head Photojournalist",
                tag: "Photojournalism",
                image:
                  "/images/con-org-members/nurses-notes/aniceto-princess-ruby-p-photojournalism-coordinator-multimedia-department.jpg",
              },
              {
                name: "Joanna Rose Iglesias",
                role: "Video Production Head",
                tag: "Video Production",
                image:
                  "/images/con-org-members/nurses-notes/iglesias-joanna-rose-b-video-production-head-multimedia-department.jpg",
              },
            ],
          },
        ],
      },
    ],
  },

  // 5. CON Red Cross Youth Council
  {
    slug: "red-cross-youth-council",
    name: "CON Red Cross Youth Council",
    subtitle: "CON RCYC • Philippine Red Cross",
    badge: "Humanitarian Council",
    badgeClass: "bg-tertiary-fixed text-on-tertiary-fixed",
    heroEyebrowIcon: "medical_services",
    heroEyebrowText: "Humanitarian Council • Philippine Red Cross",
    logo: "/images/con-org-logo/red-cross-youth-council.jpg",
    facebookUrl: "https://www.facebook.com/profile.php?id=61559999584745",
    shortDescription:
      "Ang opisyal na sangay ng Red Cross Youth sa kolehiyo na nagtataguyod ng bolunterismo, kaligtasan sa kalusugan, at gawaing makatao.",
    aboutBadgeIcon: "volunteer_activism",
    aboutBadgeText: "Humanitarian Service",
    aboutTitle: "About CON Red Cross Youth Council",
    aboutDescription:
      "Guided by the principle 'Dum Vivimus, Servimus', the CON Red Cross Youth Council spearheads campus first-aid readiness, blood donation drives, and disaster response training.",
    sections: [], // Paste your red-cross-youth-council.html sections here if needed!
  },

  // 6. Pacemaker All-Stars
  {
    slug: "pacemaker-all-stars",
    name: "Pacemaker All-Stars",
    subtitle: "PMAS Dance Troupe • Est. 2008",
    badge: "Culture & Performing Arts",
    badgeClass: "bg-secondary-fixed text-on-secondary-fixed",
    heroEyebrowIcon: "directions_run",
    heroEyebrowText: "Culture & Performing Arts • College of Nursing",
    logo: "/images/con-org-logo/pacemaker-all-stars.jpg",
    facebookUrl: "https://www.facebook.com/PMASCON",
    shortDescription:
      "Isang natatanging organisasyon o grupo sa kolehiyo na karaniwang nagtataguyod ng sining, talento, o pangkalahatang pag-unlad ng mga estudyante.",
    aboutBadgeIcon: "palette",
    aboutBadgeText: "Creativity & Passion",
    aboutTitle: "About Pacemaker All-Stars",
    aboutDescription:
      "Serving as the official dance troupe and performing arts guild of the BulSU College of Nursing since 2008, the Pacemaker All-Stars blend rhythm, passion, and school spirit. Through cultural presentations, competitions, and collegiate assemblies, they continuously elevate the creative identity of the Isko-Nars community.",
    sections: [
      {
        eyebrowIcon: "school",
        eyebrow: "Faculty Mentorship & Guidance",
        title: "Advisers & Alumni Consultant",
        groups: [
          {
            gridClass:
              "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto",
            members: [
              {
                name: "Charmaine Dale B. Robles, MAN, RN",
                role: "Faculty Adviser",
                subtext: "BulSU College of Nursing Faculty",
                subtextIcon: "clinical_notes",
                tag: "Faculty Mentorship",
                tagIcon: "school",
                variant: "adviser",
                image:
                  "/images/con-org-members/pacemaker-all-stars/pacemaker-all-star-robles-charmaine-dale-b-man-rn-adviser.jpg",
              },
              {
                name: "Rhenelee C. Viray, MAN, RN",
                role: "Faculty Adviser",
                subtext: "BulSU College of Nursing Faculty",
                subtextIcon: "clinical_notes",
                tag: "Faculty Mentorship",
                tagIcon: "school",
                variant: "adviser",
                image:
                  "/images/con-org-members/pacemaker-all-stars/pacemaker-all-star-viray-rhenelee-c-man-rn-adviser.jpg",
              },
              {
                name: "Crishanae P. Fermalino",
                role: "Alumni Adviser",
                subtext: "PMAS Alumni",
                subtextIcon: "history_edu",
                tag: "Alumni Advisory",
                tagIcon: "verified",
                variant: "adviser",
                image:
                  "/images/con-org-members/pacemaker-all-stars/pacemaker-all-star-fermalino-crishanae-p-alumni-adviser.jpg",
              },
            ],
          },
        ],
      },
      {
        eyebrowIcon: "stars",
        eyebrow: "Council Governance",
        title: "Executive Board",
        groups: [
          {
            gridClass:
              "grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8 max-w-3xl mx-auto",
            members: [
              {
                name: "Kate Anne B. Santos",
                role: "Chairperson",
                subtext: "PMAS Executive Chair",
                subtextIcon: "workspace_premium",
                tag: "Head of Society",
                tagIcon: "shield_person",
                variant: "head",
                image:
                  "/images/con-org-members/pacemaker-all-stars/pacemaker-all-star-santos-kate-anne-b-chairperson.jpg",
              },
              {
                name: "Anna Rudah Sofia P. Babano",
                role: "Vice Chairperson",
                subtext: "PMAS Vice Chair",
                subtextIcon: "assistant",
                tag: "Executive Directorate",
                tagIcon: "military_tech",
                variant: "vice",
                image:
                  "/images/con-org-members/pacemaker-all-stars/pacemaker-all-star-babano-anna-rudah-sofia-p-vice-chairperson.jpg",
              },
            ],
          },
          {
            gridClass:
              "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto",
            members: [
              {
                name: "Xymon B. Concepcion",
                role: "Secretary",
                tag: "Secretariat",
                image:
                  "/images/con-org-members/pacemaker-all-stars/pacemaker-all-star-conception-xymon-b-secretary.jpg",
              },
              {
                name: "Camille Anne R. Mabini",
                role: "Treasurer",
                tag: "Finance",
                image:
                  "/images/con-org-members/pacemaker-all-stars/pacemaker-all-star-mabini-camille-anne-r-treasurer.jpg",
              },
              {
                name: "Dianne G. Lontoc",
                role: "Auditor",
                tag: "Audit",
                image:
                  "/images/con-org-members/pacemaker-all-stars/pacemaker-all-star-lontoc-dianne-g-auditor.jpg",
              },
            ],
          },
        ],
      },
      {
        eyebrowIcon: "palette",
        eyebrow: "Visuals & Promotion",
        title: "Socials and Creatives",
        groups: [
          {
            gridClass:
              "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto",
            members: [
              {
                name: "Jhoy Kay N. Fajardo",
                role: "Social Media Admin",
                tag: "Public Relations",
                image:
                  "/images/con-org-members/pacemaker-all-stars/pacemaker-all-star-fajardo-jhoy-kay-n-social-media-admin.jpg",
              },
              {
                name: "Ansel Christian M. Santos",
                role: "Director for Creatives",
                tag: "Creative Direction",
                image:
                  "/images/con-org-members/pacemaker-all-stars/pacemaker-all-star-santos-ansel-christian-m-director-for-creatives.jpg",
              },
              {
                name: "Jersey Ann R. Mabilin",
                role: "Asst. Director for Creatives",
                tag: "Creative Direction",
                image:
                  "/images/con-org-members/pacemaker-all-stars/pacemaker-all-star-mabilin-jersey-ann-r-assistant-director-for-creatives.jpg",
              },
            ],
          },
        ],
      },
      {
        eyebrowIcon: "groups",
        eyebrow: "Batch Representation",
        title: "Level Representatives",
        groups: [
          {
            gridClass:
              "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto",
            members: [
              {
                name: "Lance Anderson L. Janer",
                role: "Level II Representative",
                tag: "BSN Level 2",
                image:
                  "/images/con-org-members/pacemaker-all-stars/pacemaker-all-star-janer-lance-anderson-l-level-2-representative.jpg",
              },
              {
                name: "Sophia Claudia E. Mesias",
                role: "Level III Representative",
                tag: "BSN Level 3",
                image:
                  "/images/con-org-members/pacemaker-all-stars/pacemaker-all-star-mesias-sophia-claudia-e-level-3-representative.jpg",
              },
              {
                name: "Jodie Angel Lou D. Estrella",
                role: "Level IV Representative",
                tag: "BSN Level 4",
                image:
                  "/images/con-org-members/pacemaker-all-stars/pacemaker-all-star-estrella-jodie-angel-lou-d-level-4-representative.jpg",
              },
            ],
          },
        ],
      },
    ],
  },

  // 7. LUNGS
  {
    slug: "lungs",
    name: "LUNGS",
    subtitle: "Lydians United Nursing Giocoso Singers",
    badge: "Musical & Choral Guild",
    badgeClass: "bg-tertiary-fixed text-on-tertiary-fixed",
    heroEyebrowIcon: "music_note",
    heroEyebrowText: "Musical & Choral Guild • College of Nursing",
    logo: "/images/con-org-logo/lungs-lydians-united-nursing-giocoso-singers.png",
    facebookUrl: "https://www.facebook.com/bulsuconlungs",
    shortDescription:
      "Ang opisyal na chorale o grupong pang-musika ng BulSU College of Nursing na nagtatampok sa talento sa pag-awit ng mga nursing student.",
    aboutBadgeIcon: "library_music",
    aboutBadgeText: "Choral Excellence & Advocacy",
    aboutTitle: "About Lydians United Nursing Giocoso Singers",
    aboutDescription:
      "Bilang opisyal na chorale ng Kolehiyo ng Narsing, pinagsasama ng LUNGS ang dedikasyon sa klinikal na kahusayan at ang sining ng musika. Sa bawat pagtatanghal—mula sa Capping and Pinning Ceremonies, Nightingale Lantern Rites, hanggang sa mga pampublikong outreach sa komunidad—ang kanilang tinig ay nagbibigay-buhay at inspirasyon sa buong komunidad ng BulSUan.",
    sections: [
      {
        eyebrowIcon: "school",
        eyebrow: "Faculty Mentorship & Guidance",
        title: "Organization Advisers",
        groups: [
          {
            gridClass:
              "grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8 max-w-3xl mx-auto",
            members: [
              {
                name: "Estelle Rose M. Lerma, RN, MAN",
                role: "Organization Adviser",
                subtext: "BulSU College of Nursing Faculty",
                subtextIcon: "clinical_notes",
                tag: "Faculty Mentorship",
                tagIcon: "school",
                variant: "adviser",
                image:
                  "/images/con-org-members/lungs/estelle-rose-m-lerma-rn-man-adviser-officer.jpg",
              },
              {
                name: "Jane Marie M. Sumodlayon, RN, MAN",
                role: "Organization Adviser",
                subtext: "BulSU College of Nursing Faculty",
                subtextIcon: "clinical_notes",
                tag: "Faculty Mentorship",
                tagIcon: "school",
                variant: "adviser",
                image:
                  "/images/con-org-members/lungs/jane-marie-m-sumodlayon-rn-man-adviser-officer.jpg",
              },
            ],
          },
        ],
      },
      {
        eyebrowIcon: "stars",
        eyebrow: "Executive Officers",
        title: "Council Leadership",
        groups: [
          {
            gridClass:
              "grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8 max-w-3xl mx-auto",
            members: [
              {
                name: "Renzel S. Coronel",
                role: "Chairperson",
                subtext: "LUNGS Executive Chair",
                subtextIcon: "workspace_premium",
                tag: "Head of Council",
                tagIcon: "shield_person",
                variant: "head",
                image:
                  "/images/con-org-members/lungs/renzel-s-coronel-chairperson-officer.jpg",
              },
              {
                name: "Denisse Gwen R. Concepcion",
                role: "Vice Chairperson",
                subtext: "LUNGS Vice Chair",
                subtextIcon: "assistant",
                tag: "Council Directorate",
                tagIcon: "military_tech",
                variant: "vice",
                image:
                  "/images/con-org-members/lungs/denisse-gwen-r-conception-vice-chairperson-officer.jpg",
              },
            ],
          },
        ],
      },
      {
        eyebrowIcon: "badge",
        eyebrow: "General Council & Department Heads",
        title: "Executive Committee & Officers",
        groups: [
          {
            gridClass:
              "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6",
            members: [
              {
                name: "Maria Mina Britney F. Mina",
                role: "Band Head",
                tag: "Performance",
                image:
                  "/images/con-org-members/lungs/maria-mina-britney-f-mina-band-head-officer.jpg",
              },
              {
                name: "Moira Liane A. Rañeses",
                role: "Secretary",
                tag: "Secretariat",
                image:
                  "/images/con-org-members/lungs/moira-liane-a-ra-eses-secretary-officer.jpg",
              },
              {
                name: "Kim Allen V. Agulto",
                role: "Treasurer",
                tag: "Finance",
                image:
                  "/images/con-org-members/lungs/kim-allen-v-agulto-treasure-officer.jpg",
              },
              {
                name: "Lourine O. Cruz",
                role: "Auditor",
                tag: "Audit & Compliance",
                image:
                  "/images/con-org-members/lungs/lourine-o-cruz-auditor-officer.jpg",
              },
              {
                name: "Ysabelle Regine Lois G. Carlos",
                role: "Custodian",
                tag: "Logistics & Assets",
                image:
                  "/images/con-org-members/lungs/ysabelle-regine-lois-g-carlos-custodian-officer.jpg",
              },
              {
                name: "Marylei Jashley L. Alvarez",
                role: "Social Media Manager",
                tag: "Public Relations",
                image:
                  "/images/con-org-members/lungs/marylei-jashley-l-alvarez-social-media-manager.jpg",
              },
              {
                name: "Axl John Christian F. Andrade",
                role: "Director for Creatives",
                tag: "Creative Direction",
                image:
                  "/images/con-org-members/lungs/axl-john-christian-f-andrade-director-for-creatives-officer.jpg",
              },
            ],
          },
        ],
      },
    ],
  },

  // 8. Unang Hakbang
  {
    slug: "unang-hakbang",
    name: "Unang Hakbang",
    subtitle: "CON Community Extension • Est. 2020",
    badge: "Community Outreach",
    badgeClass: "bg-primary text-on-primary",
    heroEyebrowIcon: "volunteer_activism",
    heroEyebrowText: "Community Outreach • Est. 2020",
    logo: "/images/con-org-logo/unang-hakbang.jpg",
    facebookUrl: "https://www.facebook.com/profile.php?id=61552913007532",
    shortDescription:
      "Isang organisasyon o inisyatiba na gumagabay at sumusuporta sa mga bagong freshman habang sinisimulan nila ang kanilang paglalakbay sa kolehiyo.",
    aboutBadgeIcon: "diversity_1",
    aboutBadgeText: "Community Extension & Mentorship",
    aboutTitle: "About Unang Hakbang",
    aboutDescription:
      "Established in 2020, Unang Hakbang empowers BulSU nursing students to extend compassionate community outreach and freshman mentorship across Bulacan.",
    sections: [], // Paste your unang-hakbang.html sections here if needed!
  },
];
