<!-- src/views/TraditionsView.vue -->
<template>
  <div class="flex flex-col w-full">
    <!-- Top Section Banner -->
    <section
      class="relative w-full overflow-hidden py-space-2xl md:py-space-3xl px-margin-mobile md:px-margin-tablet lg:px-margin text-white"
      style="
        background: radial-gradient(
          circle at 50% 20%,
          rgb(30, 58, 106) 0%,
          rgb(18, 40, 75) 60%,
          rgb(13, 27, 51) 100%
        );
      ">
      <div
        class="absolute -right-16 -top-20 w-96 h-96 rounded-full bg-secondary-container/10 blur-3xl pointer-events-none"></div>
      <div
        class="absolute -left-20 -bottom-24 w-80 h-80 rounded-full bg-secondary-fixed-dim/10 blur-3xl pointer-events-none"></div>
      <div
        class="max-w-4xl mx-auto relative z-10 flex flex-col items-center text-center">
        <div
          class="w-14 h-14 rounded-full bg-surface-container-lowest/10 flex items-center justify-center text-tertiary-fixed-dim shadow-md mb-space-md ring-1 ring-white/15 backdrop-blur-sm">
          <span class="material-symbols-outlined text-[28px]"
            >military_tech</span
          >
        </div>
        <div
          class="flex items-center gap-space-xs text-tertiary-fixed-dim mb-space-xs">
          <span class="material-symbols-outlined text-[16px]">verified</span>
          <span class="font-label-sm text-label-sm uppercase tracking-wider">
            Heritage &amp; Continuity
          </span>
        </div>
        <h1
          class="font-headline-lg text-headline-lg md:text-[40px] text-on-primary tracking-tight font-serif">
          Traditions &amp; Culture
        </h1>
        <p
          class="font-body-md text-body-md text-surface-variant/90 max-w-2xl mt-space-sm">
          Honoring collegiate ceremonies, compassionate legacies, and the lived
          spirit of the nursing cohort.
        </p>
        <div
          class="mt-space-lg flex items-center gap-space-md bg-white/10 backdrop-blur-sm py-space-xs px-space-md rounded-full shadow-sm ring-1 ring-white/15">
          <div class="flex items-center gap-space-xs text-tertiary-fixed-dim">
            <span class="material-symbols-outlined text-[18px]"
              >calendar_month</span
            >
            <span class="font-label-sm text-label-sm text-white">
              Academic Year 2026–2027
            </span>
          </div>
        </div>
      </div>
    </section>

    <!-- Two-Column Primary Section Layout (All 10 Articles) -->
    <section
      class="max-w-7xl mx-auto w-full px-margin-mobile md:px-margin-tablet lg:px-margin py-space-2xl flex flex-col gap-space-3xl">
      <article
        v-for="(item, index) in traditions"
        :key="index"
        class="bg-surface-container-lowest p-space-lg md:p-space-xl rounded-lg shadow-sm border border-secondary-fixed/30 flex flex-col gap-space-lg">
        <!-- Headline (+ Optional Eyebrow for TANGLAW) -->
        <div class="flex flex-col gap-space-xxs">
          <span
            v-if="item.eyebrow"
            class="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-bold">
            {{ item.eyebrow }}
          </span>
          <h2
            class="font-headline-lg text-[28px] md:text-[34px] italic text-primary font-serif tracking-tight">
            {{ item.title }}
          </h2>
        </div>

        <!-- Two-Column Image & Main Narrative -->
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-start">
          <!-- Left Column: Dynamic Image Layout + Links & Date -->
          <div class="lg:col-span-5 flex flex-col gap-space-xs">
            <!-- Single Image -->
            <div
              v-if="item.images.length === 1"
              class="overflow-hidden rounded-lg shadow-md bg-surface-container">
              <img
                loading="lazy"
                :src="item.images[0]"
                :alt="item.alt || item.title"
                class="w-full h-auto object-cover" />
            </div>

            <!-- Multi-Image Grid (Supports 1-col vertical stack or 2-col collage) -->
            <div
              v-else
              class="overflow-hidden rounded-lg shadow-md bg-surface-container grid gap-1"
              :class="item.gridCols === 1 ? 'grid-cols-1' : 'grid-cols-2'">
              <img
                v-for="(imgSrc, imgIdx) in item.images"
                :key="imgIdx"
                loading="lazy"
                :src="imgSrc"
                :alt="item.alt || item.title"
                class="w-full h-full object-cover"
                :class="item.squareGrid ? 'aspect-square' : 'aspect-auto'" />
            </div>

            <!-- Source Links, Date & Optional Reference Meta -->
            <div class="mt-space-xs flex flex-col gap-space-xxs text-body-sm">
              <a
                v-for="(link, linkIdx) in item.links"
                :key="linkIdx"
                :href="link"
                target="_blank"
                rel="noopener noreferrer"
                class="text-secondary hover:underline break-all font-body-sm text-[13px]">
                {{ link }}
              </a>
              <span
                class="text-on-surface-variant font-label-sm text-label-sm italic">
                {{ item.dateLabel }}
              </span>
              <span
                v-if="item.referenceLabel"
                class="text-on-surface-variant font-caption text-caption">
                {{ item.referenceLabel }}
              </span>
            </div>
          </div>

          <!-- Right Column: Lead Paragraphs -->
          <div
            class="lg:col-span-7 flex flex-col gap-space-md text-on-surface font-body-md leading-relaxed">
            <p v-for="(paragraph, pIdx) in item.leadParagraphs" :key="pIdx">
              {{ paragraph }}
            </p>
          </div>
        </div>

        <!-- Bottom Full-Width Closing Paragraph(s) -->
        <div
          v-if="item.footerParagraphs && item.footerParagraphs.length"
          class="pt-space-sm border-t border-surface-variant/40 flex flex-col gap-space-md">
          <p
            v-for="(fPara, fIdx) in item.footerParagraphs"
            :key="fIdx"
            class="text-on-surface font-body-md leading-relaxed"
            :class="{ italic: item.italicFooter }">
            {{ fPara }}
          </p>
        </div>
      </article>
    </section>
  </div>
</template>

<script setup>
const traditions = [
  // 1. CONlympics 2025
  {
    title:
      "CONlympics 2025: Husay at Bilis ng Isko-Nars, Ipinamalas sa Hamon ng Klinikal na Pagsasanay",
    alt: "CONlympics 2025",
    images: ["/images/traditions-culture/conlympics-2025.jpg"],
    links: ["https://www.facebook.com/share/1DUJZhzkeR/?mibextid=wwXIfr"],
    dateLabel: "December 03, 2025",
    leadParagraphs: [
      'Noong Disyembre 3, 2025, ginanap ang "CONlympics: The Nursing Skills Showdown" sa Pimentel Hall Grounds na nilahukan ng mga nursing students mula sa iba\'t ibang antas.',
      "Sa pamamagitan ng paligsahang ito, ipinamalas ng mga estudyante ang kanilang angking kahusayan, bilis, at klinikal na kaalaman sa pag-ikot sa iba't ibang skill-based stations tulad ng Sterile Gloving, CPR (Cardiopulmonary Resuscitation), Operating Room Instruments Identification at Bandaging. Hindi lamang ito naging venue para sa kompetisyon, kundi isang magandang pagkakataon din upang maipakita ang kanilang teamwork, precision, at kahandaan bilang mga hinaharap na propesyonal sa larangan ng kalusugan habang nag-eenjoy sa masayang kapaligiran ng kolehiyo.",
      "Bukod sa paghahasa ng mga natutunang skills sa classroom lectures, naging daan din ang event na ito upang magkapit-bisig ang bawat antas ng CON at maipagdiwang ang pagkakaisa at camaraderie sa loob ng departamento.",
    ],
    footerParagraphs: [
      "Bawat pagsubok na kanilang kinaharap sa mga istasyon ay nagpayabong sa kanilang kumpiyansa sa sarili at nagpatunay na ang mga estudyante ng BulSU CON ay hindi lamang mahusay sa teorya at akademya, kundi litaw na litaw rin ang galing at kahandaan sa aktwal na pagreresponde at pagbibigay ng de-kalidad na pangangalaga sa mga pasyente.",
    ],
  },

  // 2. Hakbang Patungong Lisensya (PNLE Seminar)
  {
    title:
      "Hakbang Patungong Lisensya: Graduating Nurses ng BulSU, Sumailalim sa Komprehensibong PNLE Seminar",
    alt: "PNLE Seminar",
    images: ["/images/traditions-culture/pnle-2026.jpg"],
    links: ["https://www.facebook.com/share/19pdQMiZj3/?mibextid=wwXIfr"],
    dateLabel: "PNLE Seminar March 11, 2026",
    leadParagraphs: [
      "Noong Marso 11, 2026, matagumpay na isinagawa ang PNLE Preparation Seminar para sa lahat ng mga ika-apat na taong estudyante sa nursing ng Bulacan State University mula sa Main Campus at San Rafael Campus.",
      "Ginanap ang mahalagang aktibidad na ito sa 7th Floor Amphitheater ng BulSU e-Library upang magbigay na komprehensibong patnubay, oryentasyon, at sapat na paghahanda para sa nalalapit na Philippine Nursing Licensure Examination (PNLE).",
      "Layunin ng nasabing programa na patatagin ang kaalaman, linangin ang mastery sa mga klinikal na paksa, at magbigay ng inspirasyon sa mga graduating students upang buong tiwala nilang maiuwi ang pangarap na lisensya at opisyal na maging ganap na Registered Nurses ng bansa.",
    ],
    footerParagraphs: [
      "Sa tulong ng mga inimbitahang tagapagsalita at mentor, nagkaroon ang mga estudyante ng mas malalim na pag-unawa sa mga test-taking strategies, board exam review pointers, at mental readiness na napakahalaga sa kanilang pagharap sa pagsusulit.",
    ],
  },

  // 3. Para sa Masa
  {
    title:
      "Para sa Masa: Mahigit 150 Pamilya sa Lansangan, Inabutan ng Malasakit at Alagang Handog Pack",
    alt: "Para sa Masa Alagang Handog Pack",
    images: [
      "/images/traditions-culture/para-sa-masa-1.jpg",
      "/images/traditions-culture/para-sa-masa-2.jpg",
      "/images/traditions-culture/para-sa-masa-3.jpg",
      "/images/traditions-culture/para-sa-masa-4.jpg",
    ],
    gridCols: 2,
    squareGrid: true,
    links: ["https://www.facebook.com/share/1UuEYnvbtr/?mibextid=wwXIfr"],
    dateLabel: "Collaboration with Knightingale Society 2025",
    leadParagraphs: [
      'Noong ika-14 ng Disyembre 2025, katuwang ng PARA SA MASA team ang iba\'t ibang organisasyon mula sa loob at labas ng pamantasan—kabilang ang Akbayan Youth Hagonoy, BulSU Legal Management Society, AEYSI BulSU, BulSU CON - Red Cross Youth Council, Unang Hakbang, Knightingale Society, Pacemaker All-Stars, Association of Early Childhood Education Students (AECES), Kapisanan ng mga Mag-aaral sa Araling Panlipunan, MAPEH Major Society, Lifelong Innovators for Nursing Growth and Patient Care, BulSU SG Socio-Cultural Affairs Committee, BulSU CON Local Student Council, BulSU CICT Local Student Council, BulSU Meneses Campus Local Student Council, BSN 4-A, BSLM 3-C, at BulSU NSRC National Service Reserve Corps—upang isakatuparan ang paghahatid ng "Para sa Masa Alagang Handog Pack."',
    ],
    footerParagraphs: [
      "Sa pamamagitan ng pagtutulungang ito, nakapaghatid ng tulong sa humigit-kumulang 150 pamilyang naninirahan sa lansangan sa Malolos Bayan, Malolos Crossing, BulSU Convention, at sa kahabaan ng MacArthur Highway.",
      "Ang inisyatibang ito ay hindi lamang naglalayong mag-abot ng tulong materyal, kundi naglalayong maghatid ng kalinga, mapagaan ang pang-araw-araw na pasanin, at pakinggan ang mga boses at kwento ng ating mga kababayan.",
    ],
  },

  // 4. UGNAYAN 2026
  {
    title:
      "UGNAYAN 2026: Narsing Bilang Tulay ng Pag-Asa at Pagkalinga sa Tahanan Mapagkalinga",
    alt: "Ugnayan 2026 Collage",
    images: [
      "/images/traditions-culture/ugnayan-2026-1.jpg",
      "/images/traditions-culture/ugnayan-2026-2.jpg",
      "/images/traditions-culture/ugnayan-2026-3.jpg",
      "/images/traditions-culture/ugnayan-2026-4.jpg",
    ],
    gridCols: 2,
    squareGrid: false,
    links: ["https://www.facebook.com/share/1YDZU8SFqX/?mibextid=wwXIfr"],
    dateLabel: "Collaboration Event with Knightingale Society 2026",
    leadParagraphs: [
      "Noong ika-31 ng Marso 2026, matagumpay na isinagawa ng Bulacan State University - College of Nursing (BulSU CON) ang kanilang outreach program na naglalayong maghatid ng tulong, ligaya, at pagkalinga sa mga kabataang nanunuluyan sa mga institusyon.",
      'Sa temang "UGNAYAN: Ang Narsing Bilang Tulay ng Puso at Komunidad," nag-abot ang programa ng mga pangunahing pangangailangan tulad ng pagkain, laruan, at hygiene kits sa mga kabataan ng Tahanan Mapagkalinga ni Madre Rita, Inc. sa Guiguinto, Bulacan. Ang inisyatibang ito, na nagsimula noong nakaraang taon, ay patuloy na naglilingkod upang maghatid ng pag-asa at malasakit.',
    ],
    footerParagraphs: [
      "Maliban sa pamunuan ng BulSU CON, nakiisa rin ang iba't ibang organisasyon ng kolehiyo kabilang ang Knightingale Society (KS), Unang Hakbang (UH), CON Red Cross Youth Council (CON RCYC), Lydians United Nursing Giocoso Singers (LUNGS), Pacemaker All-stars (PMAS), CON Local Student Council (CON LSC), at ang opisyal na publikasyon na The Nurses' Notes (NN) upang maisakatuparan ang nasabing kaganapan.",
    ],
    italicFooter: true,
  },

  // 5. CON Fair
  {
    title:
      "CON Fair: Dalawang Taon ng Makulay na Pagkakaisa, Talento, at Diwa ng Pagiging Nars",
    alt: "CON Fair 2023 & 2024",
    images: [
      "/images/traditions-culture/confair-2023.jpg",
      "/images/traditions-culture/confair-2024.jpg",
    ],
    gridCols: 1,
    squareGrid: false,
    links: [
      "https://www.facebook.com/share/p/1HrPY8E8Z1/",
      "https://www.facebook.com/share/p/14wqVsfEvrP/",
    ],
    dateLabel: "Knightingale Society - BulSU College of Nursing (2023 & 2024)",
    leadParagraphs: [
      'Noong ika-13 hanggang ika-15 ng Disyembre 2023, ginanap ang "CON FAIR 2023: Nursing in the Limelight of Carnival Bliss." Sa temang karnabal, binuksan ang pagdiriwang sa pamamagitan ng makulay na Color Fun Parade. Sa loob ng tatlong araw, naging sentro ng kasiyahan at galing ang Kolehiyo ng Narsing sa pamamagitan ng CON Bazaar, Zumba with the Dean, Ginoo at Binibining CON, Nurses\' Got Talent, Bench Cheering, Laro ng Lahi, Xtreme Beach Volleyball, Eco-Chic Recycled Costume Competition, at Quiz Bee.',
      'Sinundan ito noong ika-10 ng Disyembre 2024 ng "CON FAIR 2024: The Ultimate Festival of Knowledge and Fun" sa Pimentel Hall Grounds. Nagtagisan ng husay at diwa ng kapatiran ang anim na koponan: Verdant Celestial Seraphs, Red Fighting Pating, Yellow Fiery Phoenix, Purple Fearless Panthers, Deadly Pink Puffers, at Blue Ferocious Hydras.',
    ],
    footerParagraphs: [
      "Sa magkasunod na taong ito, napatunayan ng CON Fair na ang bawat pagdiriwang ay hindi lamang paraan ng pagsasaya, kundi patunay ng matibay na pagkakaisa, talento, at dedikasyon ng bawat mag-aaral ng narsing sa BulSU.",
    ],
  },

  // 6. Dum Vivimus, Servimus (RCYC Salubong 2026)
  {
    title:
      "Dum Vivimus, Servimus: Red Cross Youth Council, Tiniyak ang Kaligtasan ng mga Bagong Bulsuan",
    alt: "Salubong 2026 First Aid Booths",
    images: ["/images/traditions-culture/dum-vivimus-servimus.jpg"],
    links: ["https://www.facebook.com/share/p/1JjGsm19kw/"],
    dateLabel: "BulSU CON - Red Cross Youth Council (RCYC) 2026",
    leadParagraphs: [
      "Sa pagdiriwang ng Salubong 2026, tiniyak ng BulSU CON - Red Cross Youth Council (RCYC) ang kaligtasan at kaayusan sa anim na malalaking pagtitipon para sa mga bagong mag-aaral—mula sa Unang Paglalakbay, Banda Rito Banda Roon, KaFEDBahay, at ALAB TINIG, hanggang sa COE Paglalayag at Circus ng Dreams. Nagtalaga ang mga mag-aaral-boluntaryo ng first aid station upang magbigay ng serbisyong pangunang lunas, tumugon sa mga medikal na pangangailangan, magbantay sa pangkalahatang kaligtasan, at umalalay sa maayos na daloy ng bawat kaganapan. Sa likod ng bawat entablado at programa ay ang kanilang dedikasyon na maging handang tumugon sa sinumang nangangailangan.",
    ],
    footerParagraphs: [
      'Alinsunod sa diwa ng Red Cross Youth na "Dum Vivimus, Servimus" (Habang Nabubuhay, Tayo ay Naglilingkod), naging daan ang aktibidad upang maipakita ang malasakit at kahandaang maglingkod nang walang hinihintay na kapalit para sa ligtas at makabuluhang pagtanggap sa mga bagong Bulsuan.',
    ],
  },

  // 7. Yakap ni BulSUan
  {
    title:
      "Yakap ni BulSUan: Pagmamahal at Malasakit, Inialay sa mga Nakatatanda ng Emmaus House",
    alt: "Yakap ni BulSUan kay Lolo't Lola",
    images: [
      "/images/traditions-culture/yakap-2026-1.jpg",
      "/images/traditions-culture/yakap-2026-2.jpg",
    ],
    gridCols: 2,
    squareGrid: true,
    links: [
      "https://www.facebook.com/cssplsc.bulsusg/posts/pfbid02cSrsQeadvxRac3QzVQjPfKSMbZyxqwoPxq6vjrGu3dAUAqeiVSKLvj2LkRy3NUpQl",
    ],
    dateLabel: "BulSU CON Local Student Council (BulSU CON LSC) 2026",
    leadParagraphs: [
      'Noong ika-15 ng Agosto 2026, matagumpay na isinagawa ang "Yakap ni BulSUan kay Lolo\'t Lola," isang outreach project ng BulSU CON Local Student Council na ginanap sa Emmaus House of Apostolate. Naglaan ang mga mag-aaral ng oras upang makipag-ugnayan, makipagkwentuhan, at magbahagi ng kalinga sa mga nakatatanda. Bukod sa pamamahagi ng masustansyang pagkain, naghandog din sila ng mga pampasiglang bilang at tapat na pakikinig upang maiparamdam sa ating mga lolo at lola na sila ay minamahal, pinapahalagahan, at hindi nag-iisa. Patunay ang gawaing ito na ang tunay na diwa ng serbisyong narsing ay higit pa sa klinikal na pangangalaga—ito ay pagpapadama ng malasakit at paggalang na walang pinipiling edad at hangganan.',
    ],
    footerParagraphs: [
      "Yakap ni BulSUan: Pagmamahal at Malasakit, Inialay sa mga Nakatatanda ng Emmaus House.",
    ],
  },

  // 8. Kaagapay sa Kalusugan
  {
    title:
      "Kaagapay sa Kalusugan: Knightingale Society at BKP, Nagsanay sa Tamang Paggamit ng Kagamitang Medikal",
    alt: "Medical Equipment Seminar-Workshop",
    images: [
      "/images/traditions-culture/knight-in-gale-kaagapay-sa-kalusugan-1.jpg",
      "/images/traditions-culture/knight-in-gale-kaagapay-sa-kalusugan-2.jpg",
    ],
    gridCols: 1,
    squareGrid: false,
    links: ["https://www.facebook.com/share/1GD2J38dNg/?mibextid=wwXlfr"],
    dateLabel:
      "Collaboration with Knightingale Society 2025 | Agosto 31 at Setyembre 7, 2025 (Ipinost noong Setyembre 8, 2025)",
    referenceLabel:
      "Reference / Organisasyon: The Knightingale Society, College of Nursing Extension Office, at Bantay Kalusugan Pampamayanan (BKP)",
    leadParagraphs: [
      "Ibinahagi ng The Knightingale Society sa kanilang Weekend Edition noong ika-8 ng Setyembre 2025 ang naging pakikiisa ng samahan sa Medical Equipment Seminar-Workshop, katuwang ang BulSU College of Nursing Extension Office at Bantay Kalusugan Pampamayanan (BKP), na ginanap sa Brgy. Gaya-gaya, Lungsod ng San Jose del Monte, Bulacan noong ika-31 ng Agosto at ika-7 ng Setyembre 2025.",
      "Sa loob ng dalawang araw, nagdaos sila ng pagsasanay ukol sa kaalamang medikal at kahandaan sa komunidad, na sinundan ng hands-on demonstration sa wastong paggamit ng mga kagamitang pangkalusugan.",
    ],
    footerParagraphs: [
      "Sa pamamagitan ng gawaing ito, naipamalas ng mga mag-aaral ang kanilang kasanayan at aktwal na naituro sa mga miyembro ng BKP ang mga pangunahing pamamaraan ng pangangalaga. Nagtapos ang aktibidad sa isang maikling salu-salo at kumustahan bilang pasasalamat sa mainit na pagtanggap ng komunidad.",
    ],
  },

  // 9. SUHAY
  {
    title:
      "SUHAY: Pagbubukas ng Ligtas na Espasyo at Karamay Para sa Mental Health ng mga Isko-Nars",
    alt: "SUHAY: Sa Hirap, May Kaagapay",
    images: ["/images/traditions-culture/suhay-2026-1.jpg"],
    links: ["https://www.facebook.com/share/19UCMqC6Yw/?mibextid=wwXlfr"],
    dateLabel: "BulSU CON LSC | Setyembre 24, 2026",
    referenceLabel:
      "Reference / Organisasyon: BulSU CON Local Student Council (LSC) & BulSU A-PFAM",
    leadParagraphs: [
      'Noong ika-24 ng Setyembre 2026, inilunsad ang "SUHAY: Sa Hirap, May Kaagapay," isang proyekto ng BulSU CON Local Student Council kaugnay ng paggunita sa Suicide Prevention Month. Naglaan ang inisyatiba ng ligtas na espasyo para sa pahinga, kwentuhan, at pakikipagkapwa para sa mga estudyante ng narsing.',
      "Namahagi ang grupo ng meryenda at naghanda ng mga interactive booth tulad ng Message and Letter Writing Activity, kung saan malayang naipapahayag ng bawat isa ang kanilang saloobin at nakapagbabahagi ng mga salita ng pampalakas-loob para sa kapwa mag-aaral.",
    ],
    footerParagraphs: [
      'Katuwang ang BulSU Association of Peer Facilitators and Advocates of Mental Health (BulSU A-PFAM), naging tagumpay ang proyekto sa pagpapaalala sa bawat Isko-Nars na laging may karamay sa gitna ng pagod at mga hamon ng pag-aaral sa pamamagitan ng simpleng pagtatanong: "IskoNars, Kumusta ka?"',
    ],
  },

  // 10. TANGLAW
  {
    eyebrow:
      "CONnecting Hearts: Going Beyond Campus (Tema: TANGLAW: Ang Narsing Bilang Banaag ng Komunidad)",
    title:
      "TANGLAW: Narsing Bilang Tanglaw ng Komunidad sa Willing Hearts Orphanage",
    alt: "TANGLAW: Narsing Bilang Banaag ng Komunidad",
    images: [
      "/images/traditions-culture/tanglaw-2025-1.jpg",
      "/images/traditions-culture/tanglaw-2025-2.jpg",
    ],
    gridCols: 1,
    squareGrid: false,
    links: ["https://www.facebook.com/share/19TekkfUzy/?mibextid=wwXlfr"],
    dateLabel:
      "Collaboration of All Available Organizations 2025 | Abril 12, 2025",
    referenceLabel:
      "Reference / Photo Credit: Kurt Arcilla, The Nurses' Notes (NN)",
    leadParagraphs: [
      'Noong ika-12 ng Abril 2025, isinagawa ang "CONnecting Hearts: Going Beyond Campus" na may temang "TANGLAW: Ang Narsing Bilang Banaag ng Komunidad" sa Willing Hearts Orphanage Inc., Lalakhan, Santa Maria, Bulacan. Layunin ng proyektong ito na magpaabot ng tulong medikal at mga pangunahing kagamitan para sa bahay-ampunan. Namahagi ang pangkat ng mga relief goods tulad ng pagkain, tinapay, at mga bitamina at gamot na kinakailangan ng mga bata.',
    ],
    footerParagraphs: [
      "Ang programa ay naisakatuparan sa pamumuno ng Knightingale Society (KS), katuwang ang Red Cross Youth Council (BulSU-CON RCYC), Unang Hakbang (UH), The Nurses' Notes (NN), Pacemaker All-stars (PMAS), at Lydians United Nursing Giocoso Singers (LUNGS), sa pakikipagtulungan ng CON Research and Extension Office.",
    ],
  },
];
</script>
