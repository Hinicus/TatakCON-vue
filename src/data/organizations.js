// src/data/organizations.js
export const organizations = [
  // 1. Local Student Council
  {
    slug: "local-student-council",
    theme: "primary",
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
    theme: "secondary",
    name: "Knightingale Society",
    subtitle: "Cadence Chapter • BulSU College of Nursing",
    badge: "Leadership Society",
    badgeClass: "bg-tertiary-fixed text-on-tertiary-fixed",
    heroEyebrowIcon: "workspace_premium",
    heroEyebrowText: "Leadership Society • College of Nursing",
    logo: "/images/con-org-logo/knightingale-society.png",
    facebookUrl: "https://www.facebook.com/ks.bulsucon",
    shortDescription:
      "Isang organisasyong pang-akademiko o panlipunan na ipinangalan kay Florence Nightingale, na nakatutok sa pagtataguyod ng kahusayan sa nursing at pagkakaisa.",
    aboutBadgeIcon: "volunteer_activism",
    aboutBadgeText: "Nursing Leadership & Service",
    aboutTitle: "About The Knightingale Society",
    aboutDescription:
      "Inspired by the pioneering legacy of Florence Nightingale, the Knightingale Society (Cadence Chapter) unites student leaders of the BulSU College of Nursing in advancing academic excellence, community health extension, and compassionate clinical stewardship across the university and beyond.",
    sections: [
      {
        eyebrowIcon: "school",
        eyebrow: "Faculty Mentorship & Guidance",
        title: "Faculty Advisers",
        groups: [
          {
            gridClass:
              "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto",
            members: [
              {
                name: "David S. Bote",
                role: "Faculty Adviser",
                subtext: "BulSU College of Nursing Faculty",
                subtextIcon: "clinical_notes",
                tag: "Faculty Mentorship",
                tagIcon: "school",
                variant: "adviser",
                image:
                  "/images/con-org-members/knightingale-society/knightingale-society-bote-david-s-faculty-adviser.png",
              },
              {
                name: "Josefina C. Reyes",
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
                name: "Rhenelee C. Viray",
                role: "Faculty Adviser",
                subtext: "BulSU College of Nursing Faculty",
                subtextIcon: "clinical_notes",
                tag: "Faculty Mentorship",
                tagIcon: "school",
                variant: "adviser",
                image:
                  "/images/con-org-members/knightingale-society/knightingale-society-viray-rhenelee-c-faculty-adviser.jpg",
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
                  "/images/con-org-members/knightingale-society/knightingale-society-charmaine-dale-robles-rn-man-faculty-adviser.jpg",
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
                name: "Ashley Faith R. Salonga",
                role: "Chairperson",
                subtext: "Executive Board",
                subtextIcon: "workspace_premium",
                tag: "Head of Society",
                tagIcon: "shield_person",
                variant: "head",
                image:
                  "/images/con-org-members/knightingale-society/knightingale-society-salonga-ashley-faith-r-chairperson-executive.jpg",
              },
              {
                name: "Dorayne Nariss L. Fernandez",
                role: "Vice-Chairperson",
                subtext: "Executive Board",
                subtextIcon: "assistant",
                tag: "Executive Directorate",
                tagIcon: "military_tech",
                variant: "vice",
                image:
                  "/images/con-org-members/knightingale-society/knightingale-society-fernandez-dorayne-nariss-l-vice-chairperson-executive.jpg",
              },
            ],
          },
          {
            gridClass:
              "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6",
            members: [
              {
                name: "Benedict Timothy Emil R. Basco",
                role: "Executive Secretary",
                tag: "Secretariat",
                image:
                  "/images/con-org-members/knightingale-society/knightingale-society-basco-benedict-timothy-emil-r-executive-secretary.png",
              },
              {
                name: "Shechaniah Yvonne R. Uaje",
                role: "Assistant Secretary",
                tag: "Secretariat",
                image:
                  "/images/con-org-members/knightingale-society/knightingale-society-uaje-shechaniah-yvonne-b-assistant-secretary.jpg",
              },
              {
                name: "Sai Ena Quelle R. Robles",
                role: "Treasurer",
                tag: "Finance",
                image:
                  "/images/con-org-members/knightingale-society/knightingale-society-robles-sai-ena-quelle-r-treasurer.jpg",
              },
              {
                name: "Bianca Yzavelle D.G. Tragico",
                role: "Auditor",
                tag: "Audit",
                image:
                  "/images/con-org-members/knightingale-society/knightingale-society-tragico-bianca-yzavelle-d-g-auditor.jpg",
              },
              {
                name: "Precious Angel L. Bote",
                role: "Student Relations Officer",
                tag: "Relations",
                image:
                  "/images/con-org-members/knightingale-society/knightingale-society-bote-precious-angel-l-student-relations-officer.png",
              },
            ],
          },
        ],
      },
      {
        eyebrowIcon: "account_tree",
        eyebrow: "Departmental Leadership",
        title: "Board of Directors",
        groups: [
          {
            gridClass:
              "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6",
            members: [
              {
                name: "Rocelle Kai M. Rioflorido",
                role: "Director for Budget and Finance",
                tag: "Budget & Finance",
                image:
                  "/images/con-org-members/knightingale-society/knightingale-society-rioflorido-rocelle-kai-m-director-for-budget-and-finance.jpg",
              },
              {
                name: "Camielle Anne R. Mabini",
                role: "Director for Business and Management",
                tag: "Business & Management",
                image:
                  "/images/con-org-members/knightingale-society/knightingale-society-mabini-camielle-anne-r-director-for-business-and-management.jpg",
              },
              {
                name: "Kurt Lance D.O. Guinto",
                role: "Director for Research and Extension Services",
                tag: "Research & Extension",
                image:
                  "/images/con-org-members/knightingale-society/knightingale-society-guinto-kurt-lance-d-o-director-for-research-and-extension-services.png",
              },
              {
                name: "Nimoweh N. Carlos",
                role: "Director for Internal Affairs",
                tag: "Internal Affairs",
                image:
                  "/images/con-org-members/knightingale-society/knightingale-society-carlos-nimoweh-n-director-for-internal-affairs.png",
              },
              {
                name: "Jhilyeh V. Domingo",
                role: "Director for External Affairs",
                tag: "External Affairs",
                image:
                  "/images/con-org-members/knightingale-society/knightingale-society-domingo-jhilyne-v-director-for-external-affairs.png",
              },
              {
                name: "Jet Marty T. Concepcion",
                role: "Director for Discipline and Ethics",
                tag: "Discipline & Ethics",
                image:
                  "/images/con-org-members/knightingale-society/knightingale-society-conception-jet-marty-t-director-for-discipline-and-ethics.png",
              },
              {
                name: "Justine Kate S. Guballa",
                role: "Director for Custodian",
                tag: "Custodian",
                image:
                  "/images/con-org-members/knightingale-society/knightingale-society-guballa-justine-kate-s-director-for-custodian.png",
              },
              {
                name: "Abimael S. Parojinog",
                role: "Director for Creatives",
                tag: "Creatives",
                image:
                  "/images/con-org-members/knightingale-society/knightingale-society-parojinog-abimael-s-director-for-creatives.jpg",
              },
            ],
          },
        ],
      },
      {
        eyebrowIcon: "badge",
        eyebrow: "Executive Operations",
        title: "Associate Directors",
        groups: [
          {
            gridClass:
              "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6",
            members: [
              {
                name: "Jannah Carmela P. Ambala",
                role: "Associate Director for Budget and Finance",
                tag: "Budget & Finance",
                image:
                  "/images/con-org-members/knightingale-society/knightingale-society-ambala-jannah-carmela-p-associate-director-for-budget-and-finance.png",
              },
              {
                name: "Janelle C. Barcuma",
                role: "Associate Director for Business and Management",
                tag: "Business & Management",
                image:
                  "/images/con-org-members/knightingale-society/knightingale-society-barcuma-janelle-c-associate-director-for-business-and-management.png",
              },
              {
                name: "Jan Coleen G. Baula",
                role: "Associate Director for Research and Extension Services",
                tag: "Research & Extension",
                image:
                  "/images/con-org-members/knightingale-society/knightingale-society-baula-jan-coleen-g-associate-director-for-research-and-extension-services.png",
              },
              {
                name: "Joaquin Reynaldo C. Suson",
                role: "Associate Director for Internal Affairs",
                tag: "Internal Affairs",
                image:
                  "/images/con-org-members/knightingale-society/knightingale-society-suson-joaquin-reynaldo-c-associate-director-for-internal-affairs.jpg",
              },
              {
                name: "Faith Nicole C. Jimenez",
                role: "Associate Director for External Affairs",
                tag: "External Affairs",
                image:
                  "/images/con-org-members/knightingale-society/knightingale-society-jimenez-faith-nicole-c-associate-director-for-external-affairs.jpg",
              },
              {
                name: "Jho Ezekiel C. Vislenio",
                role: "Associate Director for Discipline and Ethics",
                tag: "Discipline & Ethics",
                image:
                  "/images/con-org-members/knightingale-society/knightingale-society-vislenio-jho-ezekiel-c-associate-director-for-discipline-and-ethics.jpg",
              },
              {
                name: "Dianne G. Lonctoc",
                role: "Associate Director for Custodian",
                tag: "Custodian",
                image:
                  "/images/con-org-members/knightingale-society/knightingale-society-lonctoc-dianne-g-associate-director-for-custodian.jpg",
              },
              {
                name: "Sufia Monique O. Young",
                role: "Associate Director for Creatives",
                tag: "Creatives",
                image:
                  "/images/con-org-members/knightingale-society/knightingale-society-young-sufia-monique-o-associate-director-for-creatives.jpg",
              },
            ],
          },
        ],
      },
      {
        eyebrowIcon: "group_work",
        eyebrow: "Committee Operations",
        title: "Assistant Directors",
        groups: [
          {
            gridClass:
              "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6",
            members: [
              {
                name: "Jewel Lhara C. Nepomuceno",
                role: "Assistant Director for Budget and Finance",
                tag: "Budget & Finance",
                image:
                  "/images/con-org-members/knightingale-society/knightingale-society-nepomuceno-jewel-lhara-c-assistant-director-for-budget-and-finance.jpg",
              },
              {
                name: "Jan Vincent A. Baybay",
                role: "Assistant Director for Business and Management",
                tag: "Business & Management",
                image:
                  "/images/con-org-members/knightingale-society/knightingale-society-baybay-jan-vincent-a-assistant-director-for-business-and-management.png",
              },
              {
                name: "Razel Mae F. Isip",
                role: "Assistant Director for Research and Extension Services",
                tag: "Research & Extension",
                image:
                  "/images/con-org-members/knightingale-society/knightingale-society-isip-razel-mae-f-assistant-director-for-reseach-and-extension-services.png",
              },
              {
                name: "Jozel T. Jarillo",
                role: "Assistant Director for Internal Affairs",
                tag: "Internal Affairs",
                image:
                  "/images/con-org-members/knightingale-society/knightingale-society-jarillo-jozel-t-assistant-director-for-internal-affairs.png",
              },
              {
                name: "Angelo Vernel T. Debalucos",
                role: "Assistant Director for External Affairs",
                tag: "External Affairs",
                image:
                  "/images/con-org-members/knightingale-society/knightingale-society-debalucos-angelo-vernel-t-assistant-director-for-external-affairs.png",
              },
              {
                name: "Joanna Micaela A. Tubig",
                role: "Assistant Director for Discipline and Ethics",
                tag: "Discipline & Ethics",
                image:
                  "/images/con-org-members/knightingale-society/knightingale-society-tubig-joanna-micaela-a-assistant-director-for-discipline-and-ethics.jpg",
              },
              {
                name: "Clarabelle F. De Guzman",
                role: "Assistant Director for Custodian",
                tag: "Custodian",
                image:
                  "/images/con-org-members/knightingale-society/knightingale-society-de-guzman-clarabelle-f-assistant-director-for-custodian.png",
              },
              {
                name: "Samantha Felice Pascual",
                role: "Assistant Director for Creatives",
                tag: "Creatives",
                image:
                  "/images/con-org-members/knightingale-society/knightingale-society-pascual-samantha-felice-assistant-director-for-creatives.jpg",
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
              "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto",
            members: [
              {
                name: "Aicelle Rana F. Coronel",
                role: "Level 2 Representative",
                tag: "BSN Level 2",
                image:
                  "/images/con-org-members/knightingale-society/knightingale-society-coronel-aicelle-rana-f-level-2-representative.png",
              },
              {
                name: "Virgi Kriel Felise D. Rivera",
                role: "Level 3 Representative",
                tag: "BSN Level 3",
                image:
                  "/images/con-org-members/knightingale-society/knightingale-society-rivera-virgi-kriel-d-level-3-representative.jpg",
              },
              {
                name: "Edrien John E. Valderama",
                role: "Level 4 Representative",
                tag: "BSN Level 4",
                image:
                  "/images/con-org-members/knightingale-society/knightingale-society-valderama-edrien-john-e-level-4-representative.jpg",
              },
            ],
          },
        ],
      },
    ],
  },

  // 3. CORTEX
  {
    slug: "cortex",
    theme: "cortex",
    name: "CORTEX",
    subtitle: "CON Academic Society • Est. 2026",
    badge: "Academic Society",
    badgeClass: "bg-secondary-fixed text-on-secondary-fixed",
    heroEyebrowIcon: "school",
    heroEyebrowText: "Academic Society • College of Nursing",
    logo: "/images/con-org-logo/cortex-the-con-academic-society.jpg",
    facebookUrl: "https://www.facebook.com/profile.php?id=61591587331259",
    shortDescription:
      "Isang organisasyong pang-akademiko na naglalayong patalasin ang talino at pagbutihin ang performans ng mga nursing student sa kanilang pag-aaral.",
    aboutBadgeIcon: "lightbulb",
    aboutBadgeText: "Academic Society & Excellence",
    aboutTitle: "About CORTEX",
    aboutDescription:
      "Serving as the official academic society of the College of Nursing, CORTEX aims to foster scholastic excellence, peer mentorship, and clinical innovation. Isang organisasyong pang-akademiko na naglalayong patalasin ang talino at pagbutihin ang performans ng mga nursing student sa kanilang pag-aaral.",
    sections: [
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
                name: "Patricia Louise Muga",
                role: "Chairperson",
                subtext: "CORTEX Executive Chair",
                subtextIcon: "workspace_premium",
                tag: "Head of Society",
                tagIcon: "shield_person",
                variant: "head",
                image:
                  "/images/con-org-members/cortex/muga-patricia-louise-chairperson-officer.jpg",
              },
              {
                name: "Kaizer Ventura",
                role: "Vice Chairperson",
                subtext: "CORTEX Vice Chair",
                subtextIcon: "assistant",
                tag: "Executive Directorate",
                tagIcon: "military_tech",
                variant: "vice",
                image:
                  "/images/con-org-members/cortex/ventura-kaizer-vice-chairperson-officer.jpg",
              },
            ],
          },
          {
            gridClass:
              "grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 max-w-7xl mx-auto",
            members: [
              {
                name: "Angelica Nicole Garcia",
                role: "Executive Secretary",
                tag: "Secretariat",
                image:
                  "/images/con-org-members/cortex/garcia-angelica-nicole-executive-secretary-officer.jpg",
              },
              {
                name: "Ysabelle Regine Lois Carlos",
                role: "Assistant Secretary",
                tag: "Secretariat",
                image:
                  "/images/con-org-members/cortex/carlos-ysabelle-regine-lois-assistant-secretary-officer.jpg",
              },
              {
                name: "Abigail Santos",
                role: "Treasurer",
                tag: "Finance",
                image:
                  "/images/con-org-members/cortex/santos-abigail-treasurer-officer.jpg",
              },
              {
                name: "Hillary Bon",
                role: "Auditor",
                tag: "Audit",
                image:
                  "/images/con-org-members/cortex/bon-hillary-auditor-officer.jpg",
              },
              {
                name: "Francheska Denise Galman",
                role: "Student Relations Officer",
                tag: "Relations",
                cardClass: "sm:col-span-2 lg:col-span-1",
                image:
                  "/images/con-org-members/cortex/galman-francheska-denise-student-relations-officer-officer.jpg",
              },
            ],
          },
        ],
      },
      {
        eyebrowIcon: "account_tree",
        eyebrow: "Departmental Leadership",
        title: "Committee Directors",
        groups: [
          {
            gridClass: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6",
            members: [
              {
                name: "Marie Claire Magaling",
                role: "Budget and Finance Director",
                tag: "Finance",
                image:
                  "/images/con-org-members/cortex/magaling-marie-claire-budget-and-finance-committee-director-officer.jpg",
              },
              {
                name: "John Strauss Juntilla",
                role: "Peer Mentoring Director",
                tag: "Mentorship",
                image:
                  "/images/con-org-members/cortex/juntilla-john-strauss-peer-mentoring-committee-director-officer.jpg",
              },
              {
                name: "Vanessa Manuel",
                role: "Academic Excellence Director",
                tag: "Academics",
                image:
                  "/images/con-org-members/cortex/manuel-vanessa-academic-excellence-and-competition-committee-director-officer.jpg",
              },
              {
                name: "Daphnie Cruz",
                role: "Education & Materials Director",
                tag: "Education",
                image:
                  "/images/con-org-members/cortex/cruz-daphnie-edicatiom-and-material-committee-director-officer.jpg",
              },
              {
                name: "Ma. Nicole Dela Cruz",
                role: "Graphics and Design Director",
                tag: "Graphics",
                image:
                  "/images/con-org-members/cortex/dela-cruz-ma-nicole-graphics-and-design-committee-director-officer.jpg",
              },
              {
                name: "Ron Jullienne Martin",
                role: "Research & Development Director",
                tag: "Research",
                image:
                  "/images/con-org-members/cortex/martin-ron-jullienne-research-and-development-committee-director-officer.jpg",
              },
              {
                name: "Rhed John Ramirez",
                role: "External Relations Director",
                tag: "External Affairs",
                image:
                  "/images/con-org-members/cortex/ramirez-rhed-john-external-relations-and-partnership-committee-director-officer.jpg",
              },
              {
                name: "Ma. Deneese De Vera",
                role: "Technical & Working Director",
                tag: "Technical",
                image:
                  "/images/con-org-members/cortex/de-vera-ma-deneese-technical-and-working-committee-director-officer.jpg",
              },
            ],
          },
        ],
      },
      {
        eyebrowIcon: "group_work",
        eyebrow: "Committee Operations",
        title: "Associate Directors",
        groups: [
          {
            gridClass: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6",
            members: [
              {
                name: "Daphne Ysabelle Castro",
                role: "Associate Director for Budget",
                tag: "Finance",
                image:
                  "/images/con-org-members/cortex/castro-daphne-ysabelle-budget-and-finance-committee-associate-director-officer.jpg",
              },
              {
                name: "Kurt Lance Guinto",
                role: "Associate Director for Peer Mentoring",
                tag: "Mentorship",
                image:
                  "/images/con-org-members/cortex/guinto-kurt-lance-peer-mentoring-committee-associate-director-officer.jpg",
              },
              {
                name: "Kirsten Faith Pascual",
                role: "Associate Director for Academics",
                tag: "Academics",
                image:
                  "/images/con-org-members/cortex/pascual-kirsten-faith-academic-excellence-and-competition-committee-associate-director-officer.jpg",
              },
              {
                name: "Mikhaella Rae Mendoza",
                role: "Associate Director for Education",
                tag: "Education",
                image:
                  "/images/con-org-members/cortex/mendoza-mikhaella-rae-education-and-material-committee-associate-director-officer.jpg",
              },
              {
                name: "Astrid Jamiah Melecio",
                role: "Associate Director for Graphics",
                tag: "Graphics",
                image:
                  "/images/con-org-members/cortex/melecio-astrid-jamiah-graphics-and-design-committee-associate-director-officer.jpg",
              },
              {
                name: "Mariel De Leon",
                role: "Associate Director for Research",
                tag: "Research",
                image:
                  "/images/con-org-members/cortex/de-leon-mariel-research-and-development-committee-associate-director-officer.jpg",
              },
              {
                name: "Dorayne Nariss Fernandez",
                role: "Associate Dir. for External Relations",
                tag: "External Affairs",
                image:
                  "/images/con-org-members/cortex/fernandez-dorayne-nariss-external-relations-and-partnership-committee-associate-director-officer.jpg",
              },
              {
                name: "Mary Vhenn Samonte",
                role: "Associate Director for Technical",
                tag: "Technical",
                image:
                  "/images/con-org-members/cortex/samonte-mary-vhenn-technical-working-committee-associate-director-officer.jpg",
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
              "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto",
            members: [
              {
                name: "Lance Anderson Janer",
                role: "Level 2 Representative",
                tag: "BSN Level 2",
                image:
                  "/images/con-org-members/cortex/janer-lance-anderson-level-2-representative-officer.jpg",
              },
              {
                name: "Alesandra Maven San Diego",
                role: "Level 3 Representative",
                tag: "BSN Level 3",
                image:
                  "/images/con-org-members/cortex/san-diego-alesandra-maven-level-3-representative-officer.jpg",
              },
              {
                name: "Angelo Louie Litimco",
                role: "Level 4 Representative",
                tag: "BSN Level 4",
                image:
                  "/images/con-org-members/cortex/litimco-angelo-louie-level-4-representative-officer.jpg",
              },
            ],
          },
        ],
      },
    ],
  },

  // 4. The Nurses' Notes
  {
    slug: "the-nurses-notes",
    theme: "secondary",
    name: "The Nurses' Notes",
    subtitle: "CON Journalism Guild • BulSU College of Nursing",
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
    theme: "error",
    name: "CON Red Cross Youth Council",
    subtitle: "CON RCYC • Philippine Red Cross",
    badge: "Humanitarian Council",
    badgeClass: "bg-tertiary-fixed text-on-tertiary-fixed",
    heroEyebrowIcon: "health_and_safety",
    heroEyebrowText: "Humanitarian Council • College of Nursing",
    logo: "/images/con-org-logo/red-cross-youth-council.jpg",
    facebookUrl: "https://www.facebook.com/profile.php?id=61559999584745",
    shortDescription:
      "Ang opisyal na sangay ng Red Cross Youth sa kolehiyo na nagtataguyod ng bolunterismo, kaligtasan sa kalusugan, at gawaing makatao.",
    aboutBadgeIcon: "health_and_safety",
    aboutBadgeText: "Service & Compassion",
    aboutTitle: "About CON Red Cross Youth Council",
    aboutDescription:
      "Serving as the official chapter of the Philippine Red Cross Youth within the College of Nursing, the CON RCYC embodies the universal humanitarian principles of the Red Cross. They lead disaster readiness, health and safety advocacy, and community outreach, ensuring that Isko-Nars are prepared to respond whenever compassion calls.",
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
                name: "Mr. David Bote, RN, MAN",
                role: "Faculty Adviser",
                subtext: "BulSU College of Nursing Faculty",
                subtextIcon: "clinical_notes",
                tag: "Faculty Mentorship",
                tagIcon: "school",
                variant: "adviser",
                image:
                  "/images/con-org-members/red-cross-youth/mr-david-bote-rn-man-adviser-adviser.jpg",
              },
              {
                name: "Ms. Jessica Villano, RN, MAN",
                role: "Faculty Adviser",
                subtext: "BulSU College of Nursing Faculty",
                subtextIcon: "clinical_notes",
                tag: "Faculty Mentorship",
                tagIcon: "school",
                variant: "adviser",
                image:
                  "/images/con-org-members/red-cross-youth/ms-jessica-villano-rn-man-adviser-adviser.jpg",
              },
              {
                name: "Mr. Joenie Novem Elocendo",
                role: "Alumni Adviser",
                subtext: "RCYC Alumni",
                subtextIcon: "history_edu",
                tag: "Alumni Advisory",
                tagIcon: "verified",
                variant: "adviser",
                image:
                  "/images/con-org-members/red-cross-youth/mr-joenie-novem-elocendo-alumni-adviser-adviser.jpg",
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
            gridClass: "grid-cols-1 sm:grid-cols-3 gap-6 max-w-6xl mx-auto",
            members: [
              {
                name: "Hannah Elizabeth Rivera",
                role: "President",
                tag: "Head of Council",
                tagIcon: "shield_person",
                variant: "head",
                centered: true,
                cardClass: "sm:col-span-3 lg:col-span-1 lg:col-start-2",
                image:
                  "/images/con-org-members/red-cross-youth/rivera-hanna-elizabeth-president-offier.jpg",
              },
              {
                name: "Princess Ruby Aniceto",
                role: "VP for Internal Affairs",
                tag: "Internal Affairs",
                tagIcon: "military_tech",
                variant: "vice",
                centered: true,
                cardClass: "lg:col-start-1 lg:row-start-2",
                image:
                  "/images/con-org-members/red-cross-youth/anicento-princess-ruby-vice-presidentt-for-interrnal-affairs-officer.jpg",
              },
              {
                name: "Kirsten Faith Pascual",
                role: "VP for External Affairs",
                tag: "External Affairs",
                tagIcon: "military_tech",
                variant: "vice",
                centered: true,
                cardClass: "lg:col-start-3 lg:row-start-2",
                image:
                  "/images/con-org-members/red-cross-youth/pascual-kirsten-faith-vice-president-for-external-affairs-officer.jpg",
              },
            ],
          },
          {
            gridClass:
              "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto",
            members: [
              {
                name: "Ma. Judea Immaculate Reyes",
                role: "Secretary",
                tag: "Secretariat",
                image:
                  "/images/con-org-members/red-cross-youth/reyes-ma-judea-immaculate-secretary-officer.jpg",
              },
              {
                name: "Alejandra Maxine Garcia",
                role: "Assistant Secretary",
                tag: "Secretariat",
                image:
                  "/images/con-org-members/red-cross-youth/garcia-alejandra-maxine-assistant-secretary-officer.jpg",
              },
              {
                name: "Arriana Geli",
                role: "Treasurer",
                tag: "Finance",
                image:
                  "/images/con-org-members/red-cross-youth/geli-arriana-treasurer-officer.jpg",
              },
              {
                name: "Jody Mikaela Inigo",
                role: "Assistant Treasurer",
                tag: "Finance",
                image:
                  "/images/con-org-members/red-cross-youth/inigo-jody-mikaela-assistant-treasurer-officer.jpg",
              },
              {
                name: "Vanessa Manuel",
                role: "Auditor",
                tag: "Audit",
                image:
                  "/images/con-org-members/red-cross-youth/manuel-vanessa-auditor-officer.jpg",
              },
              {
                name: "Jhilyne Domingo",
                role: "Public Relations Officer",
                tag: "Public Relations",
                image:
                  "/images/con-org-members/red-cross-youth/domingo-jhilyne-public-relations-officer-officer.jpg",
              },
            ],
          },
        ],
      },
      {
        eyebrowIcon: "group_work",
        eyebrow: "Council Committees",
        title: "Chairpersons & Co-Chairpersons",
        groups: [
          {
            gridClass:
              "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6",
            members: [
              {
                name: "Sophia Noreen Nuguid",
                role: "Membership & Recruitment Chair",
                tag: "Recruitment",
                image:
                  "/images/con-org-members/red-cross-youth/nuguid-sophia-noreen-membership-and-recruitment-chairperson-offiicer.jpg",
              },
              {
                name: "Sylvia Aubrey Maclang",
                role: "Membership & Recruitment Co-Chair",
                tag: "Recruitment",
                image:
                  "/images/con-org-members/red-cross-youth/maclang-sylvia-aubrey-membership-and-recruitment-co-chairperson-officer.jpg",
              },
              {
                name: "Rhed John Ramirez",
                role: "Communication & Advocacy Chair",
                tag: "Advocacy",
                image:
                  "/images/con-org-members/red-cross-youth/ramirez-rhed-john-communication-and-advocacy-chairperson-officer.jpg",
              },
              {
                name: "Margaux Sherica Gagui",
                role: "Communication & Advocacy Co-Chair",
                tag: "Advocacy",
                image:
                  "/images/con-org-members/red-cross-youth/gagui-margaux-sherica-communication-and-advocacy-co-chairperson-officer.jpg",
              },
              {
                name: "Krista Suzanne Bermudez",
                role: "Council Management & Dev Chair",
                tag: "Management",
                image:
                  "/images/con-org-members/red-cross-youth/bermudez-krista-suzanne-counsil-management-and-development-chairperson.jpg",
              },
              {
                name: "Chelsea Bautista",
                role: "Council Management & Dev Co-Chair",
                tag: "Management",
                image:
                  "/images/con-org-members/red-cross-youth/bautista-chelsea-counsil-management-and-development-co-chairperson-officer.jpg",
              },
              {
                name: "Mark Patrick Flores",
                role: "Resource Generation Chairperson",
                tag: "Resources",
                image:
                  "/images/con-org-members/red-cross-youth/flores-mark-patrick-resource-generation-chairperson-officer.jpg",
              },
              {
                name: "Alesandra Maven San Diego",
                role: "Resource Generation Co-Chair",
                tag: "Resources",
                image:
                  "/images/con-org-members/red-cross-youth/san-diego-alesandra-maven-resource-generation-co-chairperson-officer.jpg",
              },
              {
                name: "Fatima Grace Robles",
                role: "Learning & Innovation Chair",
                tag: "Innovation",
                image:
                  "/images/con-org-members/red-cross-youth/robles-fatima-grace-learning-and-innovation-chairperson-officer.jpg",
              },
              {
                name: "Denise Yesha Castro",
                role: "Learning & Innovation Co-Chair",
                tag: "Innovation",
                image:
                  "/images/con-org-members/red-cross-youth/castro-denise-yesha-learning-and-innovation-co-chairperson-officer.jpg",
              },
              {
                name: "Precious Angel Bote",
                role: "Awards & Recognition Chair",
                tag: "Awards",
                image:
                  "/images/con-org-members/red-cross-youth/bote-precious-angel-awards-and-recognition-chairperson-officer.jpg",
              },
              {
                name: "Angelo Vernel Debalucos",
                role: "Awards & Recognition Co-Chair",
                tag: "Awards",
                image:
                  "/images/con-org-members/red-cross-youth/debalucos-angelo-vernel-awards-and-recognition-co-chairperson-officer.jpg",
              },
              {
                name: "Ma. Nicole Dela Cruz",
                role: "Design & Media Chairperson",
                tag: "Design & Media",
                image:
                  "/images/con-org-members/red-cross-youth/dela-cruz-ma-nicole-design-and-media-chairperson-officer.jpg",
              },
              {
                name: "Paulianne Rosei Bautista",
                role: "Design & Media Co-Chair",
                tag: "Design & Media",
                image:
                  "/images/con-org-members/red-cross-youth/bautista-paulianne-rosei-design-and-media-co-chairperson-officer.jpg",
              },
              {
                name: "Kim Allen Agulto",
                role: "Documentation Officer",
                tag: "Documentation",
                image:
                  "/images/con-org-members/red-cross-youth/agulto-kim-allen-documentation-officer-officer.jpg",
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
              "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto",
            members: [
              {
                name: "Lance Anderson Janer",
                role: "Level 2 Representative",
                tag: "BSN Level 2",
                image:
                  "/images/con-org-members/red-cross-youth/janer-lance-anderson-level-2-representative-officer.jpg",
              },
              {
                name: "Simon Andrei Tee",
                role: "Level 3 Representative",
                tag: "BSN Level 3",
                image:
                  "/images/con-org-members/red-cross-youth/tee-simon-andrei-level-3-representative-officer.jpg",
              },
              {
                name: "Nimoweh Carlos",
                role: "Level 4 Representative",
                tag: "BSN Level 4",
                image:
                  "/images/con-org-members/red-cross-youth/carlos-nimoweh-level-4-representative-officeer.jpg",
              },
            ],
          },
        ],
      },
    ],
  },

  // 6. Pacemaker All-Stars
  {
    slug: "pacemaker-all-stars",
    theme: "secondary",
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
    theme: "secondary",
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
      "Bilang opisyal na chorale ng Kolehiyo ng Narsing, pinagsasama ng LUNGS ang dedikasyon sa klinikal na kahusayan at ang sining ng musika. Sa bawat pagtatanghal—mula sa Capping and Pinning Ceremonies, Nightingale Lantern Rites, hanggang sa mga pampublikong outreach sa komunidad—ang kanilang tinig ay nagbibay-buhay at inspirasyon sa buong komunidad ng BulSUan.",
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
    theme: "primary",
    name: "Unang Hakbang",
    subtitle: "CON Community Extension • Est. 2020",
    badge: "Community Outreach",
    badgeClass: "bg-primary text-on-primary",
    heroEyebrowIcon: "volunteer_activism",
    heroEyebrowText: "Community Outreach • College of Nursing",
    logo: "/images/con-org-logo/unang-hakbang.jpg",
    facebookUrl: "https://www.facebook.com/profile.php?id=61552913007532",
    shortDescription:
      "Isang organisasyon o inisyatiba na gumagabay at sumusuporta sa mga bagong freshman habang sinisimulan nila ang kanilang paglalakbay sa kolehiyo.",
    aboutBadgeIcon: "volunteer_activism",
    aboutBadgeText: "Freshman Mentorship & Growth",
    aboutTitle: "About Unang Hakbang",
    aboutDescription:
      "Established in 2020, Unang Hakbang acts as the primary support system and guiding light for incoming freshmen within the BulSU College of Nursing. Through mentorship, orientation programs, and community building, they ensure that every Isko-Nars begins their collegiate journey equipped with confidence, camaraderie, and a sense of belonging.",
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
                name: "Rhealeen V. Vicedo",
                role: "Faculty Adviser",
                subtext: "BulSU College of Nursing Faculty",
                subtextIcon: "clinical_notes",
                tag: "Faculty Mentorship",
                tagIcon: "school",
                variant: "adviser",
                image:
                  "/images/con-org-members/unang-hakbang/unang-hakbang-ma-am-rhealeen-v-vicedo-adviser.jpg",
              },
              {
                name: "Jane Marie M. Sumodlayon",
                role: "Faculty Adviser",
                subtext: "BulSU College of Nursing Faculty",
                subtextIcon: "clinical_notes",
                tag: "Faculty Mentorship",
                tagIcon: "school",
                variant: "adviser",
                image:
                  "/images/con-org-members/unang-hakbang/unang-hakbang-ma-am-jane-marie-m-sumodlayon-adviser.jpg",
              },
              {
                name: "Ramil H. Hernandez",
                role: "Alumni Adviser",
                subtext: "Unang Hakbang Alumni",
                subtextIcon: "history_edu",
                tag: "Alumni Advisory",
                tagIcon: "verified",
                variant: "adviser",
                image:
                  "/images/con-org-members/unang-hakbang/unang-hakbang-ramil-h-hernandez-adviser.jpg",
              },
            ],
          },
        ],
      },
      {
        eyebrowIcon: "stars",
        eyebrow: "Council Governance",
        title: "Executive Boards",
        groups: [
          {
            gridClass:
              "grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8 max-w-3xl mx-auto",
            members: [
              {
                name: "Estelle Marithe Sheinlee P. Gervacio",
                role: "Chairperson",
                subtext: "Executive Board",
                subtextIcon: "workspace_premium",
                tag: "Head of Society",
                tagIcon: "shield_person",
                variant: "head",
                image:
                  "/images/con-org-members/unang-hakbang/unang-hakbang-estelle-marithe-sheinlee-p-gervacio-chairperson-executive-committe.jpg",
              },
              {
                name: "Krista Suzanne C. Bermudez",
                role: "Vice Chairperson",
                subtext: "Executive Board",
                subtextIcon: "assistant",
                tag: "Executive Directorate",
                tagIcon: "military_tech",
                variant: "vice",
                image:
                  "/images/con-org-members/unang-hakbang/unang-hakbang-krista-suzanne-c-bermudez-vice-chairperson-executive-committe.jpg",
              },
            ],
          },
          {
            gridClass:
              "grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto",
            members: [
              {
                name: "Ansel Christian M. Santos",
                role: "Secretary General",
                tag: "Secretariat",
                image:
                  "/images/con-org-members/unang-hakbang/unang-hakbang-ansel-christian-m-santos-secretary-general-executive-committe.jpg",
              },
              {
                name: "Riema B. Dela Rosa",
                role: "Deputy Secretary",
                tag: "Secretariat",
                image:
                  "/images/con-org-members/unang-hakbang/unang-hakbang-riema-b-dela-rosa-deputy-secretary-executive-committe.jpg",
              },
              {
                name: "Yumi Rey T. Santos",
                role: "Treasurer",
                tag: "Finance",
                image:
                  "/images/con-org-members/unang-hakbang/unang-hakbang-yumi-rey-t-santos-treasurer-executive-committe.jpg",
              },
              {
                name: "Nimoweh N. Carlos",
                role: "Auditor",
                tag: "Audit",
                image:
                  "/images/con-org-members/unang-hakbang/unang-hakbang-nimoweh-n-carlos-auditor-executive-committe.jpg",
              },
            ],
          },
        ],
      },
      {
        eyebrowIcon: "account_tree",
        eyebrow: "Departmental Leadership",
        title: "Standing Committee: Directors",
        groups: [
          {
            gridClass:
              "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6",
            members: [
              {
                name: "Michaela E. Santos",
                role: "Director for Creatives and Research",
                tag: "Creatives & Research",
                image:
                  "/images/con-org-members/unang-hakbang/unang-hakbang-michaela-e-santos-director-for-creative-research-standing-committe.jpg",
              },
              {
                name: "Margaux Sherica C. Gagui",
                role: "Director for Budget and Finance",
                tag: "Budget & Finance",
                image:
                  "/images/con-org-members/unang-hakbang/unang-hakbang-margaux-sherica-c-gagui-director-for-budget-finance-standing-committe.jpg",
              },
              {
                name: "Sylvia Aubrey DR. Maclang",
                role: "Director for Graphics and Design",
                tag: "Graphics & Design",
                image:
                  "/images/con-org-members/unang-hakbang/unang-hakbang-sylvia-aubrey-dr-maclang-director-for-graphics-design-standing-committe.jpg",
              },
              {
                name: "Alliyah Nicole N. San Agustin",
                role: "Director for Internal Affairs",
                tag: "Internal Affairs",
                image:
                  "/images/con-org-members/unang-hakbang/unang-hakbang-alliyah-nicole-n-san-agustin-director-for-internal-affairs-standing-committe.jpg",
              },
              {
                name: "Kizziarah Collete M. Nicolas",
                role: "Director for External Affairs",
                tag: "External Affairs",
                image:
                  "/images/con-org-members/unang-hakbang/unang-hakbang-kizziarah-collete-m-nicolas-director-for-external-affairs-standing-committe.jpg",
              },
              {
                name: "Kim Allen V. Agulto",
                role: "Director for Multimedia",
                tag: "Multimedia",
                image:
                  "/images/con-org-members/unang-hakbang/unang-hakbang-kim-allen-v-agulto-director-for-multimedia-standing-committe.jpg",
              },
              {
                name: "Janah Crissel F. Dela Cruz",
                role: "Director for Logistics",
                tag: "Logistics",
                image:
                  "/images/con-org-members/unang-hakbang/unang-hakbang-janah-crissel-f-dela-cruz-director-for-logistics-standing-committe.jpg",
              },
              {
                name: "Jannah Carmela P. Ambala",
                role: "Director for Technical",
                tag: "Technical",
                image:
                  "/images/con-org-members/unang-hakbang/unang-hakbang-jannah-carmela-p-ambala-director-for-technical-standing-committe.jpg",
              },
            ],
          },
        ],
      },
      {
        eyebrowIcon: "group_work",
        eyebrow: "Committee Operations",
        title: "Standing Committee: Deputies",
        groups: [
          {
            gridClass:
              "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6",
            members: [
              {
                name: "Aicelle Rana F. Coronel",
                role: "Deputy for Creatives and Research",
                tag: "Creatives & Research",
                image:
                  "/images/con-org-members/unang-hakbang/unang-hakbang-aicelle-rana-f-coronel-deputy-for-creatives-research-standing-committe.jpg",
              },
              {
                name: "Kaizer B. Ventura",
                role: "Deputy for Budget and Finance",
                tag: "Budget & Finance",
                image:
                  "/images/con-org-members/unang-hakbang/unang-hakbang-kaizer-b-ventura-deputy-for-budget-finance-standing-committe.jpg",
              },
              {
                name: "Mark Andrei V. Libao",
                role: "Deputy for Graphics and Design",
                tag: "Graphics & Design",
                image:
                  "/images/con-org-members/unang-hakbang/unang-hakbang-mark-andrei-v-libao-deputy-for-graphic-design-standing-committe.jpg",
              },
              {
                name: "Yelenah N. Carlos",
                role: "Deputy for Internal Affairs",
                tag: "Internal Affairs",
                image:
                  "/images/con-org-members/unang-hakbang/unang-hakbang-yelenah-n-carlos-deputy-for-internal-affairs-standing-committe.jpg",
              },
              {
                name: "Celine Kate S. Gatdula",
                role: "Deputy for External Affairs",
                tag: "External Affairs",
                image:
                  "/images/con-org-members/unang-hakbang/unang-hakbang-ceiline-kate-s-gatdula-deputy-for-external-affairs-standing-committe.jpg",
              },
              {
                name: "Arriana A. Geli",
                role: "Deputy for Multimedia",
                tag: "Multimedia",
                image:
                  "/images/con-org-members/unang-hakbang/unang-hakbang-arriana-a-geli-deputy-for-multimedia-standing-committe.jpg",
              },
              {
                name: "Jan Coleen G. Baula",
                role: "Deputy for Logistics",
                tag: "Logistics",
                image:
                  "/images/con-org-members/unang-hakbang/unang-hakbang-jan-coleen-g-baula-deputy-for-logistics-standing-committe.jpg",
              },
              {
                name: "Janelle C. Barcuma",
                role: "Deputy for Technical",
                tag: "Technical",
                image:
                  "/images/con-org-members/unang-hakbang/unang-hakbang-janelle-c-barcuma-deputy-for-technical-standing-committe.jpg",
              },
            ],
          },
        ],
      },
    ],
  },
];
