// Single source of truth for site copy + nav. Pages and components import
// from here — no inline strings duplicated across the codebase.

export const SITE = {
  name: "Hovik Tamazyan",
  role: "Product Leader",
  pretitle: "Product Leadership",
  tagline: "Senior leadership. Clear decisions. Real results.",
  lead:
    "I lead cross-functional teams to solve complex problems and build products that drive meaningful impact and sustainable growth.",
  essence: "Precision in strategy. Excellence in execution.",
  positioning:
    "Product leader who turns complex challenges into clear strategies and scalable products.",
  mission:
    "Help organizations build products that deliver real value through strategy, people, and execution.",
  email: "tamazyan.hovik@gmail.com",
  location: "Yerevan, Armenia",
} as const;

export const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "Expertise", href: "/expertise" },
  { label: "Credentials", href: "/certifications" },
  { label: "Contact", href: "/contact" },
] as const;

// Booking link — single constant, easy to swap when Hovik picks a scheduler.
export const BOOKING_URL = "/contact#book";

// LinkedIn placeholder — swap when the real URL is available. Empty string
// hides the link in the footer.
export const LINKEDIN_URL = "";

// Operating principles — verbatim from the Executive Precision brand kit.
export const VALUES = [
  {
    name: "Executive",
    body: "High standards. Strategic thinking. Leading with clarity.",
    icon: "target",
  },
  {
    name: "Precise",
    body: "Data-informed decisions. Focus on what matters most.",
    icon: "compass",
  },
  {
    name: "Focused",
    body: "Deep work. Clear priorities. Eliminate noise.",
    icon: "spark",
  },
  {
    name: "Reliable",
    body: "Trust through action. Consistent and accountable.",
    icon: "shield",
  },
  {
    name: "Results-Driven",
    body: "Outcomes over outputs. Impact that scales.",
    icon: "trend",
  },
] as const;

export const PROCESS_STEPS = [
  { label: "Discover", body: "Listen, research, frame the real problem." },
  { label: "Align", body: "Strategy, scope, roadmap — one shared view." },
  { label: "Build", body: "Ship in slices. Test fast. Iterate with users." },
  { label: "Scale", body: "Measure impact, harden the system, expand." },
] as const;

// Headline numbers used in the home stats ticker AND the outcomes ledger.
// `value` is the numeric target the counter animates to. `prefix` and
// `suffix` are concatenated around it (e.g. `+`, `%`). `label` and
// `caption` describe the metric.
export const METRICS = [
  {
    label: "Years leading",
    prefix: "",
    value: 7,
    suffix: "+",
    caption: "Across product, growth, and platform teams.",
  },
  {
    label: "Partners served",
    prefix: "",
    value: 100,
    suffix: "+",
    caption: "Multi-module platforms and integrated launches.",
  },
  {
    label: "Conversion lift",
    prefix: "+",
    value: 17,
    suffix: "%",
    caption: "From research-led iterations on critical flows.",
  },
  {
    label: "Satisfaction lift",
    prefix: "+",
    value: 15,
    suffix: "%",
    caption: "Driven by continuous discovery and customer dev.",
  },
] as const;

// Used on Home (numbered monographs) and Expertise (full body).
export const EXPERTISE = [
  {
    slug: "product-strategy",
    number: "01",
    kicker: "Strategy",
    icon: "target",
    title: "Product Strategy & Development",
    pitch:
      "Vision translated into market-ready products that move the business.",
    body: "I lead cross-functional teams through the complete product lifecycle — from discovery to scale. Multi-module platforms, mobile launches, complex feature rollouts. The work combines OKR-driven roadmaps with disciplined agile execution, so every sprint delivers measurable value. Platforms shipped to 100+ partners on time and on quality.",
    anchors: [
      { label: "Partners served", value: "100+" },
      { label: "Roadmap discipline", value: "OKR" },
    ],
    tags: ["OKRs", "Roadmaps", "Agile", "Multi-module platforms"],
  },
  {
    slug: "market-intelligence",
    number: "02",
    kicker: "Intelligence",
    icon: "chart",
    title: "Market Intelligence & Positioning",
    pitch:
      "Market dynamics decoded into strategic advantage you can act on.",
    body: "I don't just track competitors — I decode market dynamics. Through deep analysis and customer development, I've driven 15% improvements in user satisfaction and surfaced untapped opportunities that led to successful market expansions. Hard data plus qualitative insight, applied to the questions that decide outcomes: what do users really want, where are the gaps, how do we win.",
    anchors: [
      { label: "Satisfaction lift", value: "+15%" },
      { label: "Method", value: "Mixed" },
    ],
    tags: ["Customer Dev", "Competitive Analysis", "Market Sizing"],
  },
  {
    slug: "launch-excellence",
    number: "03",
    kicker: "Launch",
    icon: "compass",
    title: "Launch Excellence",
    pitch:
      "Go-to-market orchestration that lands with adoption and momentum.",
    body: "Great products need great launches. I own the entire go-to-market process — engineering, marketing, compliance, and partners — and ensure flawless execution. Mobile apps, platform features, new markets. The launches I lead don't just ship: they land with impact, drive adoption, and create momentum from day one.",
    anchors: [
      { label: "GTM scope", value: "End-to-end" },
      { label: "Format", value: "Mobile · Web · New markets" },
    ],
    tags: ["GTM", "Cross-functional", "Mobile", "New markets"],
  },
  {
    slug: "user-centric-design",
    number: "04",
    kicker: "Experience",
    icon: "spark",
    title: "User-Centric Design",
    pitch:
      "Research-led product experiences that convert and retain.",
    body: "Every decision starts with the user. Through workshops, interviews, and continuous testing, I've delivered a 17% lift in conversions and a 15% jump in satisfaction scores. I work hand-in-hand with design teams to validate assumptions early, iterate fast, and ship features that solve real problems. No guesswork — data-driven experiences that deliver.",
    anchors: [
      { label: "Conversion lift", value: "+17%" },
      { label: "Cadence", value: "Continuous" },
    ],
    tags: ["Research", "Workshops", "Conversion Optimization"],
  },
] as const;

export const CERTIFICATIONS = [
  {
    year: "2024",
    title: "PSPO II — Professional Scrum Product Owner",
    issuer: "Scrum.org",
    body: "Advanced Scrum mastery: empirical product management, value maximization, and leading in complex environments.",
  },
  {
    year: "2024",
    title: "AI in Product Management",
    issuer: "EPAM University",
    body: "Leveraging AI for smarter decisions, automation, and data-driven product development.",
  },
  {
    year: "2023",
    title: "PSPO I — Professional Scrum Product Owner",
    issuer: "Scrum.org",
    body: "Core Scrum framework expertise: backlog management, stakeholder collaboration, and value delivery.",
  },
  {
    year: "2022",
    title: "Product Management",
    issuer: "EPAM University",
    body: "End-to-end product leadership: roadmaps, prioritization, customer development, and team execution.",
  },
  {
    year: "2020 — 2021",
    title: "Product Management",
    issuer: "Armenian Code Academy",
    body: "Foundation training in product lifecycle, user research, metrics, and agile delivery.",
  },
  {
    year: "2019",
    title: "Agile Project Management",
    issuer: "IAB International Academy of Business",
    body: "Certified in Scrum and Kanban: iterative development, team collaboration, and adaptive planning.",
  },
] as const;

export const CONTACT_TOPICS = [
  {
    title: "Product strategy & roadmaps",
    body: "Where the company is going, what gets built next, and how the team commits.",
  },
  {
    title: "Go-to-market planning",
    body: "Launch sequencing, stakeholder alignment, channel strategy, and measurement.",
  },
  {
    title: "Team leadership & agile coaching",
    body: "Operating model, ceremonies that earn their time, accountability without theater.",
  },
  {
    title: "Technical debt & architecture",
    body: "Trade-offs, prioritization frameworks, decisions that compound rather than corrode.",
  },
  {
    title: "User research & UX optimization",
    body: "Research operations, conversion programs, continuous discovery rhythms.",
  },
] as const;
