import type { CampsiteConfig } from "../types";

/**
 * Camping Alpenfreude — Wertschach / St. Georgen, Naturpark Dobratsch, Kärnten.
 * Alle Texte/Fakten belegt aus der gescrapten Startseite (DE+EN) von
 * alpenfreude.at / campingalpenfreude.at (Stand-Scrape 2026-06).
 * Bilder = ausschließlich eigene, provenienz-gebundene Alpenfreude-Fotos
 * (camping.info / pincamp-Eintrag dieses Platzes) in /public/campsites/alpenfreude/.
 * Fremd-Campingplatz-Bilder aus dem Enrichment wurden NICHT verwendet.
 *
 * EHRLICH:
 *  - KEIN See am Platz → `see` weggelassen. Das "Bergbad" ist ein ÖFFENTLICHES
 *    Freibad NEBEN dem Platz (so auch geframt). Die Gail (Paddeln) liegt ~4 km entfernt.
 *  - Auf der erfassten Quelle (Startseite) stehen KEINE Preise → Platzhalter-
 *    Richtpreise (pricesArePlaceholder:true) mit offenem Hinweis; bitte bestätigen.
 *  - Keine eigenen Fotos von Bungalows/Kinderbereich/Aktivitäten → diese Sektionen
 *    ehrlich weggelassen (Galerie blendet sich mangels 4 Fotos aus).
 *  - Keine Logo-Datei vorhanden → `logo` weggelassen (Wortmarke).
 *  - Keine expliziten Koordinaten in der Quelle → `coords` weggelassen.
 */
const IMG = "/campsites/alpenfreude";

export const alpenfreude: CampsiteConfig = {
  name: "Camping Alpenfreude",
  shortName: "Alpenfreude",
  slug: "alpenfreude",
  ort: "Wertschach",
  region: "Kärnten",
  brandKind: "Camping & Bungalows",
  regionLong: "Naturpark Dobratsch · Kärnten · Österreich",

  claim: "Dein Familiencamping mit Bergblick im Naturpark Dobratsch",
  claimEmphasis: "mit Bergblick",
  intro:
    "Familiär geführtes Camping auf einem ruhigen Plateau auf 750 m im Kärntner Naturpark Dobratsch — mit atemberaubender Aussicht auf Dobratsch, Karawanken und Julische Alpen, direkt vom Stellplatz.",

  statement: {
    text: "Bei uns ist Urlaub noch Natur pur — ruhig, familiär und mit Bergen, so weit das Auge reicht.",
    emphasis: "noch Natur pur",
  },

  pillars: [
    {
      title: "Schattige Plätze unter alten Bäumen",
      text: "Großzügige Wohnmobil- und Wohnwagenstellplätze bis zu 150 m², alle mit Strom — viele davon angenehm schattig unter alten Bäumen auf dem ruhigen Plateau im Naturpark Dobratsch.",
      image: { src: `${IMG}/pitches-shade.png`, alt: "Schattige Wohnmobil- und Wohnwagenstellplätze unter großen Bäumen am Camping Alpenfreude im Naturpark Dobratsch" },
    },
    {
      title: "Ruhig & naturnah",
      text: "Familiär geführt im Naturpark Dobratsch auf 750 m, abseits befahrener Straßen — Natur pur auf einem ruhigen Plateau.",
      image: { src: `${IMG}/terrace-panorama.png`, alt: "Terrassenplätze mit weitem Blick ins Tal und auf die Berge am Camping Alpenfreude" },
    },
    {
      title: "Öffentliches Bergbad nebenan",
      text: "Direkt neben dem Platz lädt ein öffentliches, beheiztes Freibad mit Doppelwettkampfrutsche und großer Liegefläche zum Baden ein.",
      image: { src: `${IMG}/bergbad.webp`, alt: "Öffentliches Bergbad neben Camping Alpenfreude mit Rutsche, Liegewiese und Dobratsch im Hintergrund" },
    },
  ],

  usps: [
    "Familiär geführt",
    "TOP Campingplatz 2023",
    "Stellplätze mit Bergblick",
    "Eigenes Restaurant mit Terrasse",
    "Öffentliches Bergbad nebenan",
    "Stromanschluss an allen Plätzen",
  ],

  trust: {
    heading: "Worauf du dich bei Alpenfreude verlassen kannst",
    headingEmphasis: "verlassen",
    intro:
      "Familiär geführt von Melanie & Jörg Gallei, ausgezeichnet als TOP Campingplatz 2023 und empfohlen von ADAC, ACSI, ANWB und ÖCC — ruhige Höhenlage im Naturpark Dobratsch, eigenes Restaurant und ein öffentliches Bergbad gleich nebenan.",
  },

  // Auszeichnung/Empfehlungen sind belegt (Beyond Camping „TOP Campingplatz 2023“;
  // empfohlen von ADAC/ACSI/ANWB/ÖCC), aber es liegen KEINE Logo-Bilder vor →
  // ehrlich leer (die Anerkennung steht in den USP-Pills und im Vertrauenstext).
  awards: [],

  saison: { von: "Ende April", bis: "Anfang Oktober" },

  hero: {
    aerial: { src: `${IMG}/aerial-plateau.png`, alt: "Luftaufnahme des Plateaus mit Camping Alpenfreude im Naturpark Dobratsch, umgeben von Wald und Bergen" },
  },

  camping: {
    heading: "Camping mitten in der Natur",
    intro:
      "150 Stellplätze von ca. 75 bis 150 m², alle mit Stromanschluss, auf einem ruhigen Plateau im Naturpark Dobratsch. Mehrere gepflegte Sanitäranlagen mit Babybad, Waschmaschinen, Trockner und Spülgelegenheiten gehören selbstverständlich dazu.",
    features: [
      {
        title: "Großzügige Stellplätze im Grünen",
        text: "Insgesamt 150 Stellplätze von ca. 75 bis 150 m² auf einem ruhigen Plateau — viel Raum im Grünen, alle mit Stromanschluss.",
        image: { src: `${IMG}/pitches-green.png`, alt: "Großzügige, grüne Stellplätze mit Bergblick am Camping Alpenfreude" },
      },
      {
        title: "Naturnahe Plätze",
        text: "Schöne Stellplätze, umgeben von Bäumen und Wiesen, mit Blick auf Dobratsch, Karawanken und die Julischen Alpen.",
        image: { src: `${IMG}/pitches-trees.png`, alt: "Naturnahe Wohnwagen- und Zeltplätze zwischen Bäumen am Camping Alpenfreude" },
      },
    ],
  },

  anreise: {
    heading: "Lage & Anreise",
    modes: [
      {
        title: "Im Naturpark Dobratsch",
        text: "Auf 750 m in ruhiger Lage abseits befahrener Straßen, auf einem Plateau mit Blick auf Dobratsch, Karawanken und Julische Alpen.",
      },
      {
        title: "Aktiv rund um den Platz",
        text: "Direkt vom Campingplatz starten Rad-, Wander- und Bergtouren; an der Gail (ca. 4 km) warten Kanu und Stand-up-Paddeln.",
      },
      {
        title: "Kärnten Card an der Rezeption",
        text: "Die Kärnten-Card-Wochenkarte gibt es direkt bei uns — über 120 der beliebtesten Ausflugsziele in Kärnten inklusive.",
      },
    ],
  },

  // Keine 4 eigenen Galeriefotos vorhanden → Galerie blendet sich aus (Komponente
  // zeigt erst ab 4 Bildern). Felder dennoch ehrlich gesetzt.
  galerie: {
    heading: "Eindrücke vom Platz",
    headingEmphasis: "Platz",
    intro:
      "Ein paar Eindrücke von Camping Alpenfreude im Naturpark Dobratsch.",
    tag: "Ende April bis Anfang Oktober",
    images: [],
  },

  booking: {
    heading: "Verfügbarkeit & Anfrage",
    intro:
      "Sag uns Zeitraum, Platz und Personenzahl — Familie Gallei meldet sich mit deiner persönlichen Verfügbarkeit.",
    pricesArePlaceholder: true,
    priceNote:
      "Richtpreise – auf der erfassten Website (Startseite) sind keine Preise veröffentlicht; diese Werte sind realistische Platzhalter und noch mit dem Platz zu bestätigen. In der Vor- und Nachsaison gelten ermäßigte Preise.",
    highlight: {
      title: "Kärnten Card an der Rezeption",
      text: "Die KärntenCard-Wochenkarte ist direkt an unserer Rezeption erhältlich — über 120 Ausflugsziele in Kärnten inklusive.",
    },
    categories: [
      // PLATZHALTER-Richtpreise (keine Preise auf der gescrapten Quelle) — bitte bestätigen.
      { id: "stellplatz", label: "Stellplatz", perNight: 32, perExtraGuest: 9 },
      { id: "terrassenplatz", label: "Terrassenplatz", perNight: 38, perExtraGuest: 9 },
      { id: "bungalow", label: "Bungalow", perNight: 95 },
    ],
  },

  kontakt: {
    tel: "+43 660 755 60 38",
    telHref: "tel:+436607556038",
    mail: "info@alpenfreude.at",
    adresse: "Wertschach 27 · 9612 St. Georgen · Kärnten · Österreich",
  },

  languages: ["DE", "EN"],

  nav: [
    {
      label: "Camping",
      href: "#camping",
      children: [
        { label: "Stellplätze", href: "#camping" },
        { label: "Terrassenplätze", href: "#camping" },
        { label: "Ausstattung", href: "#camping" },
      ],
    },
    {
      label: "Lage",
      href: "#anreise",
      children: [
        { label: "Naturpark Dobratsch", href: "#anreise" },
        { label: "Aktiv & Gail", href: "#anreise" },
        { label: "Kärnten Card", href: "#anreise" },
      ],
    },
    {
      label: "Preise & Anfrage",
      href: "#booking",
      children: [
        { label: "Preise", href: "#booking" },
        { label: "Saison", href: "#booking" },
        { label: "Kontakt", href: "#anreise" },
      ],
    },
  ],
};

export default alpenfreude;
