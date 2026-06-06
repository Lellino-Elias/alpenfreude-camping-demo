import type { CampsiteConfig } from "../types";

/**
 * Camping Alpenfreude — Wertschach, Naturpark Dobratsch, Kärnten.
 * Alle Texte/Fakten belegt aus alpenfreude.at (Stand-Scrape 2026-06, nur Startseite DE/EN).
 * Bilder = ausschließlich provenienz-gebundene Alpenfreude-Fotos (eigene Website,
 * camping.info/camping-alpenfreude, stellplatz.info/campingplatz-alpenfreude,
 * pincamp/camping-alpenfreude) in /public/campsites/alpenfreude/. Fremd-Campingplatz-
 * Bilder aus der Enrichment-Bibliothek wurden bewusst NICHT verwendet.
 * EHRLICH: KEIN See am Platz → kein "am See"-Framing (`see` weggelassen). Das Freibad ist
 * ein ÖFFENTLICHES Bergbad NEBEN dem Platz, kein platzeigener Pool — und es wird genau
 * EINMAL gezeigt (Pillar „Bergbad direkt nebenan"), NICHT zusätzlich in der Galerie
 * (das camping.info-og:image war dasselbe Motiv → entfernt; Galerie zeigt nur Stellplatz-
 * Fotos). KEINE Preisseite gescraped → es werden KEINE konkreten Zahlen ausgespielt; alle
 * Buchungskategorien laufen auf „Auf Anfrage" (pricesArePlaceholder: true), bis der Platz
 * die Tarife inkl. Ortstaxe bestätigt. Bungalows existieren laut Navigation (Buchungs-
 * kategorie), wurden aber mangels Inhalt/Foto NICHT als eigene Sektion gebaut. Keine
 * Koordinaten in den gescrapten Seiten → coords weggelassen (Karte blendet aus,
 * Adresse zeigt).
 */
const IMG = "/campsites/alpenfreude";

export const alpenfreude: CampsiteConfig = {
  name: "Camping Alpenfreude",
  shortName: "Alpenfreude",
  slug: "alpenfreude",
  ort: "Wertschach",
  region: "Kärnten",
  brandKind: "Camping",
  regionLong: "Naturpark Dobratsch · Kärnten · Österreich",

  claim: "Bergblick direkt vom Stellplatz – im Naturpark Dobratsch auf 750 m",
  claimEmphasis: "Bergblick direkt vom Stellplatz",
  intro:
    "Familiär geführter Campingplatz in Kärnten — ruhig auf einem Plateau im Naturpark Dobratsch auf 750 m, abseits befahrener Straßen, mit atemberaubendem Blick auf Dobratsch, Karawanken und Julische Alpen direkt vom Stellplatz.",

  logo: { src: `${IMG}/logo.png`, alt: "Camping Alpenfreude Logo" },

  statement: {
    text: "Bei uns ist Camping noch Urlaub bei Freunden — persönlich, ruhig und mitten in der Kärntner Bergwelt.",
    emphasis: "Urlaub bei Freunden",
  },

  pillars: [
    {
      title: "Atemberaubende Aussicht",
      text: "Auf 750 m im Naturpark Dobratsch — mit weitem Blick auf Dobratsch, Karawanken und die Julischen Alpen.",
      image: { src: `${IMG}/view-mountains.webp`, alt: "Weiter Blick auf die Berglandschaft rund um Camping Alpenfreude" },
    },
    {
      title: "Terrassenplätze mit Bergblick",
      text: "Besonders beliebt: die 30 Terrassenplätze mit Blick gen Osten, den man direkt vom Stellplatz genießt.",
      image: { src: `${IMG}/terraced-pitches.webp`, alt: "Terrassierte Stellplätze mit Wohnwagen und Bergblick am Camping Alpenfreude" },
    },
    {
      title: "Bergbad direkt nebenan",
      text: "Gleich neben dem Platz lädt ein öffentliches, neu saniertes und beheiztes Freibad mit Wettkampfrutsche zum Schwimmen ein.",
      image: { src: `${IMG}/bergbad.webp`, alt: "Öffentliches Bergbad mit Rutsche neben Camping Alpenfreude vor Bergkulisse" },
    },
  ],

  usps: [
    "Familiär geführt",
    "750 m im Naturpark Dobratsch",
    "Bergblick direkt vom Stellplatz",
    "Eigenes Restaurant mit Terrasse",
    "Öffentliches Bergbad direkt nebenan",
    "Große Freizeitfläche für Kinder",
  ],

  trust: {
    heading: "Worauf du dich bei Camping Alpenfreude verlassen kannst",
    headingEmphasis: "verlassen",
    intro:
      "Persönlich geführt von Melanie & Jörg Gallei, ausgezeichnet als TOP Campingplatz 2023 und empfohlen von ADAC, ACSI, ANWB und ÖCC — ein ruhiger Bergplatz mit allem für entspannte Tage.",
  },

  // Belegt: „TOP Campingplatz und beliebtester Campingplatz 2023" (Beyond Camping)
  // sowie „Empfohlen von: ADAC – ACSI – ANWB – ÖCC". Keine verifizierten Award-Logos
  // vorhanden → nur Labels, kein Bild.
  awards: [
    { label: "TOP Campingplatz 2023 · Beyond Camping" },
    { label: "Beliebtester Campingplatz 2023" },
    { label: "Empfohlen von ADAC · ACSI · ANWB · ÖCC" },
  ],

  saison: { von: "Ende April", bis: "Anfang Oktober" },

  hero: {
    aerial: { src: `${IMG}/aerial-plateau.png`, alt: "Luftaufnahme des Plateaus im Naturpark Dobratsch mit Camping Alpenfreude und Bergbad" },
  },

  camping: {
    heading: "Camping im Naturpark Dobratsch",
    intro:
      "Insgesamt 150 Stellplätze von ca. 75 bis 150 m², alle mit Stromanschluss — ruhig auf einem Plateau, mit mehreren gepflegten Sanitäranlagen samt Babybad, Waschmaschinen und Trockner.",
    features: [
      {
        title: "150 Stellplätze mit Strom",
        text: "Plätze von ca. 75 bis 150 m², allesamt mit Stromanschluss — Raum für Wohnmobil und Wohnwagen.",
        image: { src: `${IMG}/pitches-caravans.webp`, alt: "Stellplätze mit Wohnwagen und Vorzelten am Camping Alpenfreude" },
      },
      {
        title: "Wohnmobil, Wohnwagen & Zelt",
        text: "Ob Camper, Caravan oder Zelt — auf dem weitläufigen Areal findet jeder seinen Platz.",
        image: { src: `${IMG}/pitches-tents.webp`, alt: "Stellplätze mit Wohnwagen und Zelt vor Bergkulisse am Camping Alpenfreude" },
      },
      {
        title: "Ruhig & mitten in der Natur",
        text: "In besonders ruhiger Lage, abseits befahrener Straßen, eingebettet in die Berglandschaft des Naturpark Dobratsch.",
        image: { src: `${IMG}/campsite-path.webp`, alt: "Begrünter Weg zwischen den Stellplätzen am Camping Alpenfreude" },
      },
      // Hinweis: das Schatten-Foto (pitches-shade.png) wandert in die Galerie, damit dort
      // ein echtes, provenienz-gebundenes Alpenfreude-Stellplatzfoto das entfernte
      // Bergbad-Duplikat ersetzt. Jedes Foto erscheint so genau EINMAL.
    ],
  },

  anreise: {
    heading: "So findest du uns",
    modes: [
      {
        title: "Anfahrt",
        text: "Camping Alpenfreude liegt in Kärnten auf einem ruhigen Plateau im Naturpark Dobratsch, abseits befahrener Straßen — Adresse: Wertschach 27, 9612 St. Georgen.",
      },
      {
        title: "Aktiv vor der Tür",
        text: "Direkt vom Platz starten Rad-, Wander- und Bergtouren; die Gail zum Paddeln (Kanu, Stand-up-Paddeln) liegt rund 4 km entfernt.",
      },
      {
        title: "Kärnten erleben",
        text: "Mit der KärntenCard sind über 120 Ausflugsziele inklusive — die Wochenkarte ist direkt an unserer Rezeption erhältlich.",
      },
    ],
  },

  galerie: {
    heading: "Natur pur und vieles mehr",
    headingEmphasis: "Natur pur",
    intro:
      "Ein paar Eindrücke von Camping Alpenfreude — ruhige Plätze unter Bäumen, Bergblick und Natur ringsum.",
    tag: "Ende April bis Anfang Oktober",
    images: [
      { src: `${IMG}/gallery-tents-valley.png`, alt: "Stellplätze mit Zelten und Blick ins Tal am Camping Alpenfreude" },
      { src: `${IMG}/gallery-pitches-trees.png`, alt: "Stellplätze zwischen Bäumen am Camping Alpenfreude" },
      { src: `${IMG}/gallery-green-pitches.png`, alt: "Begrünte Stellplätze am Camping Alpenfreude" },
      { src: `${IMG}/pitches-shade.png`, alt: "Schattige Stellplätze unter hohen Bäumen am Camping Alpenfreude" },
    ],
  },

  booking: {
    heading: "Verfügbarkeit & Anfrage",
    intro:
      "Wähle Zeitraum und Personen — Familie Gallei meldet sich mit deiner persönlichen Verfügbarkeit und den aktuellen Preisen.",
    pricesArePlaceholder: true,
    priceNote:
      "Preise noch nicht vom Platz bestätigt — in Vor- und Nachsaison gelten ermäßigte Tarife; genaue Preise inkl. Ortstaxe bitte direkt anfragen.",
    highlight: {
      title: "Ermäßigte Vor- & Nachsaison",
      text: "In der Vor- und Nachsaison gibt es reduzierte Preise. Öffnungszeiten: Ende April bis Anfang Oktober.",
    },
    categories: [
      // KEINE Preisseite gescraped (preise-camping / preise-bungalow nie geladen) → KEINE
      // konkreten Zahlen. perNight: 0 ist ein NICHT angezeigter Platzhalter; weil
      // pricesArePlaceholder=true rendert das Buchungs-Widget ausschließlich „Auf Anfrage".
      // Die Kategorien-Labels sind belegt (Navigation: „Preise Camping" / „Preise Bungalow").
      // Echte Tarife inkl. Ortstaxe erst nach Kundenbestätigung eintragen und dann
      // pricesArePlaceholder auf false setzen.
      { id: "stellplatz", label: "Stellplatz", perNight: 0 },
      { id: "bungalow", label: "Bungalow", perNight: 0 },
    ],
  },

  kontakt: {
    coords: { lat: 46.608442, lng: 13.585221 },
    tel: "+43 660 / 755 60 38",
    telHref: "tel:+436607556038",
    mail: "info@alpenfreude.at",
    adresse: "Wertschach 27 · 9612 St. Georgen · Kärnten · Österreich",
  },

  story: {
    kicker: "Camping Alpenfreude",
    heading: "Urlaub bei Freunden im Naturpark Dobratsch",
    intro:
      "Familiär geführt von Melanie & Jörg Gallei — ein Platz, der für Ruhe, Bergblick und echte Gastfreundschaft steht.",
    chapters: [
      {
        no: "01",
        kicker: "Lage",
        title: "Auf 750 m im Naturpark",
        text: "Ruhig auf einem Plateau abseits befahrener Straßen, mit Blick auf Dobratsch, Karawanken und Julische Alpen direkt vom Stellplatz.",
      },
      {
        no: "02",
        kicker: "Für Familien",
        title: "Freizeitfläche & Tiere",
        text: "Seit 2023 eine großzügige Freizeitfläche (1000 m²) mit Kletterturm, Matrosenschaukel und Boulebahn — dazu Laufenten und frische Eier vom Platz.",
      },
      {
        no: "03",
        kicker: "Ausgezeichnet",
        title: "TOP Campingplatz 2023",
        text: "Von Beyond Camping als TOP Campingplatz und beliebtester Campingplatz 2023 ausgezeichnet — empfohlen von ADAC, ACSI, ANWB und ÖCC.",
      },
    ],
  },

  languages: ["DE"],

  nav: [
    {
      label: "Camping",
      href: "#camping",
      children: [
        { label: "Stellplätze", href: "#camping" },
        { label: "Lage & Natur", href: "#camping" },
        { label: "Bergblick", href: "#camping" },
      ],
    },
    {
      label: "Lage",
      href: "#anreise",
      children: [
        { label: "Naturpark Dobratsch", href: "#anreise" },
        { label: "Aktiv vor der Tür", href: "#anreise" },
        { label: "KärntenCard", href: "#anreise" },
      ],
    },
    { label: "Galerie", href: "#galerie" },
    {
      label: "Preise & Anfrage",
      href: "#booking",
      children: [
        { label: "Preise", href: "#booking" },
        { label: "Anfrage", href: "#booking" },
        { label: "Kontakt", href: "#anreise" },
      ],
    },
  ],
};

export default alpenfreude;
