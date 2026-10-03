export const testimonials = [
  {
    text: "Endlich ein Service, der Hotels so bewertet, wie Gäste sie wirklich erleben.",
    author: "Hotelberaterin, Berlin",
  },
  {
    text: "Die Detailtiefe des Reports hat uns geholfen, echte Schwachstellen zu finden.",
    author: "GM, Boutique Hotel Mitte",
  },
  {
    text: "Schnell, diskret und absolut professionell – genau was wir gesucht haben.",
    author: "Travel Agency, München",
  },
];

export const heroStats = [
  { val: "130+", label: "Datenpunkte" },
  { val: "24h", label: "Vorlauf genügt" },
  { val: "48h", label: "Report-Lieferung" },
  { val: "6", label: "Bewertungskategorien" },
];

export const audiences = [
  "Boutique Hotels",
  "Luxury Resorts",
  "Travel Agencies",
  "Corporate Travel",
  "Event Planner",
];

export const processSteps = [
  { num: "01", title: "Anfrage", desc: "Buchbar bis 24h vorher. Wählen Sie Ihr Paket und den Zeitraum." },
  { num: "02", title: "Mystery Visit", desc: "Anonymer Check-in. Systematische Bewertung aller Touchpoints." },
  { num: "03", title: "Analyse", desc: "130+ Datenpunkte werden ausgewertet und benchmarked." },
  { num: "04", title: "Report", desc: "Detaillierter Velvet Report mit Score, Fotos und Empfehlungen." },
];

export const packages = [
  {
    name: "Quick Check",
    price: "890",
    desc: "Mystery Visit mit Kernbewertung",
    features: ["1 Übernachtung", "6 Kategorien bewertet", "20+ Fotos", "Report in 48h"],
    highlight: false,
  },
  {
    name: "Deep Dive",
    price: "1.690",
    desc: "Umfassender 2-Nächte-Test",
    features: ["2 Übernachtungen", "Detailanalyse + Video", "Interaktiver Report", "30-Min Debrief-Call"],
    highlight: true,
  },
  {
    name: "Full Audit",
    price: "2.890",
    desc: "Strategische Qualitätsanalyse",
    features: ["2–3 Übernachtungen", "Wettbewerber-Benchmark", "Management-Präsentation", "Follow-up nach 3 Mon."],
    highlight: false,
  },
];

export const criteria = [
  { name: "Ankunft & Empfang", weight: 15 },
  { name: "Zimmer & Suite", weight: 25 },
  { name: "Service & Personal", weight: 25 },
  { name: "Gastronomie", weight: 15 },
  { name: "Wellness & Extras", weight: 10 },
  { name: "Digitales Erlebnis", weight: 10 },
];

export const scoreTiers = [
  { label: "Standard", range: "0–59", opacity: 0.35 },
  { label: "Excellent", range: "60–79", opacity: 0.55 },
  { label: "Exceptional", range: "80–94", opacity: 0.75 },
  { label: "Velvet Class", range: "95–100", opacity: 1 },
];

export const faqs = [
  {
    q: "Wie kurzfristig kann ich buchen?",
    a: "Bis zu 24 Stunden vorher. Für spezielle Termine empfehlen wir eine Woche Vorlauf.",
  },
  {
    q: "Merkt das Hotel, dass es getestet wird?",
    a: "Nein. Unsere Tester checken als reguläre Gäste ein. Vollständige Anonymität ist garantiert.",
  },
  {
    q: "Für wen ist Velvet Check?",
    a: "Für Hotels, die ihre Qualität prüfen wollen, Agenturen, die verlässliche Empfehlungen brauchen, und Unternehmen, die das beste Hotel für Events suchen.",
  },
  {
    q: "Was ist der Velvet Score?",
    a: "Ein gewichteter Gesamtscore von 0–100, basierend auf 130+ Datenpunkten in 6 Kategorien. Vergleichbar über alle Hotels.",
  },
  {
    q: "Was kostet ein Velvet Check?",
    a: "Ab 890 € für einen Quick Check (1 Nacht). Alle Kosten inklusive Übernachtung, Verpflegung und Report.",
  },
];

// --- Über uns ---

export const values = [
  {
    title: "Unabhängigkeit",
    desc: "Wir sind keinem Hotel, keiner Kette und keiner Plattform verpflichtet. Unser Urteil ist nicht käuflich – nur buchbar.",
  },
  {
    title: "Diskretion",
    desc: "Unsere Tester checken als ganz normale Gäste ein. Ergebnisse gehören ausschließlich unseren Auftraggebern.",
  },
  {
    title: "Standardisierung",
    desc: "130+ Datenpunkte in 6 gewichteten Kategorien. Jeder Check folgt derselben Methodik – deshalb sind Scores vergleichbar.",
  },
  {
    title: "Konstruktive Ergebnisse",
    desc: "Wir liefern keine Kritik um der Kritik willen, sondern konkrete Empfehlungen, die Ihr Team sofort umsetzen kann.",
  },
];

// TODO(Fabian): Gründer-Bio prüfen/ergänzen; für ein Foto `photo: "/team/fabian.jpg"` setzen und Datei nach public/team/ legen.
export const team = [
  {
    name: "Fabian Matthies",
    role: "Gründer",
    location: "Berlin",
    bio: "Fabian hat Velvet Check gegründet, weil zwischen Sternebewertung und echtem Gasterlebnis oft eine Lücke klafft. Er verantwortet Methodik, Qualität und jede Kundenbeziehung persönlich.",
    photo: null,
  },
];
