// Single source of truth for site copy + nav. Pages and components import
// from here — no inline strings duplicated across the codebase.

export const SITE = {
  name: "Hovik Tamazyan",
  role: "Human-Centered Product Leader",
  tagline:
    "Empathy. Collaboration. Meaningful products. I lead cross-functional teams to turn complex problems into products that create real value for people and businesses.",
  email: "tamazyan.hovik@gmail.com",
  location: "Yerevan, Armenia",
} as const;

export const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "Expertise", href: "/expertise" },
  { label: "Certifications", href: "/certifications" },
  { label: "Contact", href: "/contact" },
] as const;

// Booking link — single constant, easy to swap when Hovik picks a scheduler.
// Leave as `/contact#book` until a real Cal.com / Calendly URL exists.
export const BOOKING_URL = "/contact#book";

// LinkedIn placeholder — swap when the real URL is available. Empty string
// hides the link in the footer.
export const LINKEDIN_URL = "";

export const VALUES = [
  {
    name: "Human",
    body: "People first. Empathy drives everything we build.",
    icon: "users",
  },
  {
    name: "Collaborative",
    body: "Stronger together. Great products are built by aligned teams.",
    icon: "handshake",
  },
  {
    name: "Approachable",
    body: "Open communication. No ego. Always learning.",
    icon: "compass",
  },
  {
    name: "Trustworthy",
    body: "Own outcomes. Do the right thing. Be reliable.",
    icon: "shield",
  },
  {
    name: "Impactful",
    body: "Create meaningful value that moves people and businesses forward.",
    icon: "trend",
  },
] as const;

export const PROCESS_STEPS = [
  { label: "Discover", body: "Listen, research, frame the real problem." },
  { label: "Align", body: "Strategy, scope, roadmap — everyone on the same page." },
  { label: "Build", body: "Ship in slices. Test fast. Iterate with users." },
  { label: "Scale", body: "Measure impact, harden the system, expand." },
] as const;

export const STATS = [
  {
    figure: "100+",
    label: "Partners served",
    detail: "Across multi-module platforms and integrated launches.",
  },
  {
    figure: "+17%",
    label: "Conversion lift",
    detail: "From research-led UX iterations on key flows.",
  },
  {
    figure: "+15%",
    label: "User satisfaction",
    detail: "Driven by continuous discovery and customer development.",
  },
] as const;

// Used on Home (short pitches) and Expertise (full body).
export const EXPERTISE = [
  {
    slug: "product-strategy",
    icon: "rocket",
    title: "Product Strategy & Development",
    pitch:
      "Transforming vision into market-ready products that drive measurable business impact.",
    body: "I lead cross-functional teams through the complete product lifecycle — from discovery to scale. Whether it's building multi-module platforms, launching mobile apps, or orchestrating complex feature rollouts, I bring clarity to chaos. My approach combines OKR-driven roadmaps with agile execution, ensuring every sprint delivers real value. I've shipped platforms serving 100+ partners and consistently hit ambitious launch timelines without sacrificing quality.",
    tags: ["OKRs", "Roadmaps", "Agile", "Multi-module platforms"],
  },
  {
    slug: "market-intelligence",
    icon: "chart",
    title: "Market Intelligence & Positioning",
    pitch:
      "Turning market insights into strategic advantages that keep you ahead.",
    body: "I don't just track competitors — I decode market dynamics. Through deep analysis and customer development, I've driven 15% improvements in user satisfaction and identified untapped opportunities that led to successful market expansions. I combine hard data with qualitative insights to answer the questions that matter: What do users really want? Where are the gaps? How do we win?",
    tags: ["Customer Dev", "Competitive Analysis", "Market Sizing"],
  },
  {
    slug: "launch-excellence",
    icon: "target",
    title: "Launch Excellence",
    pitch:
      "From zero to market: orchestrating launches that make an impact.",
    body: "Great products need great launches. I own the entire go-to-market process — coordinating engineering, marketing, compliance, and partners to ensure flawless execution. Mobile apps, platform features, new markets — I've done it all. My launches don't just ship; they land with impact, driving adoption and creating momentum from day one.",
    tags: ["GTM", "Cross-functional", "Mobile", "New Markets"],
  },
  {
    slug: "user-centric-design",
    icon: "spark",
    title: "User-Centric Design",
    pitch:
      "Building experiences users love through research, testing, and iteration.",
    body: "Every decision starts with the user. Through workshops, interviews, and continuous testing, I've achieved a 17% lift in conversions and 15% jump in satisfaction scores. I work hand-in-hand with design teams to validate assumptions early, iterate fast, and ship features that solve real problems. No guesswork — just data-driven experiences that deliver.",
    tags: ["Research", "Workshops", "Conversion Optimization"],
  },
] as const;

export const CERTIFICATIONS = [
  {
    year: "2024",
    title: "PSPO II – Professional Scrum Product Owner",
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
    title: "PSPO I – Professional Scrum Product Owner",
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
    year: "2020–2021",
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
  "Product strategy & roadmaps",
  "Go-to-market planning",
  "Team leadership & agile coaching",
  "Technical debt & architecture",
  "User research & UX optimization",
] as const;
