export const profile = {
  name: "Bibek Jaiswal",
  title: "Laravel Developer",
  positioning: "Product-minded Engineer · UI/UX-conscious Builder",
  eyebrow: "LARAVEL DEVELOPER · PRODUCT-MINDED ENGINEER",
  heroHeadline: "I build products that work well — and feel even better.",
  heroSupporting:
    "I’m a Laravel developer focused on building and improving real-world SaaS products, combining backend engineering, frontend development, UI/UX thinking and product understanding.",
  heroCtaPrimary: { label: "View My Work", href: "#work" },
  heroCtaSecondary: { label: "Let's Connect", href: "#contact" },
  socials: {
    github: "https://github.com/bibek-jaiswal045",
    linkedin: "https://www.linkedin.com/in/bibek-jaiswal-463289271",
  },
};

export const heroVisualSteps = [
  "Idea",
  "Product",
  "Backend",
  "Integrations",
  "Interface",
  "User",
];

export const about = {
  heading: "More than just the code.",
  paragraphs: [
    "I enjoy building software, but I’m equally interested in understanding the product behind it.",
    "My work sits at the intersection of backend engineering, frontend development and product experience. I like understanding why a feature exists, how users interact with it, and what can be improved once it is actually in their hands.",
    "Whether I'm working on a booking flow, payment integration, dashboard or a small UI interaction, I try to leave the product better than I found it.",
    "Over time, my role in projects has grown from implementing features to thinking about the product, working with designers, refining user experiences and helping other engineers build better solutions.",
  ],
  principles: [
    {
      title: "Understand",
      body: "Understand the problem before solving the implementation.",
    },
    {
      title: "Build",
      body: "Create reliable, maintainable software.",
    },
    {
      title: "Refine",
      body: "Improve the interface, interaction and usability.",
    },
    {
      title: "Improve",
      body: "Look beyond the immediate requirement and make the overall product better.",
    },
  ],
};

export const experience = {
  company: "Codewing Solutions",
  role: "Laravel Developer",
  note: "Bibek is currently working at Codewing Solutions. (Employment dates not listed.)",
  description:
    "Working on real-world SaaS products across backend development, frontend development, integrations, payment systems, analytics, UI/UX and product improvements.",
};

export const projects = [
  {
    id: "tripcart",
    index: "01",
    name: "Tripcart",
    category: "SaaS · Travel Technology · Booking Platform",
    summary:
      "Building and improving a tour-operator SaaS platform across backend, frontend, payments, analytics and product UX.",
    tags: ["Laravel", "PHP", "MySQL", "Vue", "Livewire", "Alpine.js", "Payments", "GA4", "GTM"],
    cardCta: { label: "View Case Study", href: "#tripcart" },
    visitCta: { label: "Visit Tripcart", href: "https://tripcart.com/" },
    priority: 1,
  },
  {
    id: "coachpodium",
    index: "02",
    name: "CoachPodium",
    category: "SaaS · Coaching Technology",
    summary:
      "Contributing across frontend, backend and integrations, building and improving features on a coaching platform.",
    tags: ["Laravel", "PHP", "Vue", "Integrations", "SaaS"],
    cardCta: { label: "View Case Study", href: "#coachpodium" },
    visitCta: { label: "Visit CoachPodium", href: "https://coachpodium.com/" },
    priority: 2,
  },
  {
    id: "creativelaya",
    index: "03",
    name: "Creativelaya",
    category: "Creative Agency · Technical Leadership",
    summary:
      "Led the development team for a production website, collaborating with designers, mentoring fresher frontend engineers and driving technical refinements.",
    tags: [
      "Technical Leadership",
      "Frontend",
      "UI/UX",
      "Mentoring",
      "Team Collaboration",
      "Web Development",
    ],
    cardCta: { label: "View Case Study", href: "#creativelaya" },
    visitCta: { label: "Visit Creativelaya", href: "https://creativelaya.com.np/" },
    priority: 3,
  },
  {
    id: "toastmasters",
    index: "04",
    name: "Founders Toastmasters Club",
    category: "Community · Leadership · Independent Build",
    summary:
      "Designed and built the club's website while serving as Vice President Public Relations.",
    tags: ["UI/UX", "Web Development", "Leadership", "Community"],
    cardCta: { label: "View Case Study", href: "#toastmasters" },
    visitCta: { label: "Visit Website", href: "https://founderstoastmasters.com/" },
    priority: 4,
  },
];

export const tripcart = {
  website: "https://tripcart.com/",
  category: "SaaS · Travel Technology · Booking Platform",
  role: "Laravel Developer",
  involvement: "From the beginning / ongoing professional work",
  productBlurb:
    "Tripcart is a SaaS platform built for tour operators and travel businesses.",
  contribution: {
    backend: [
      "Laravel",
      "Business logic",
      "Booking workflows",
      "Pricing logic",
      "Validation",
      "APIs",
      "Database-driven functionality",
    ],
    frontend: [
      "Vue",
      "Livewire",
      "Alpine.js",
      "Interactive interfaces",
      "Checkout experience",
      "Admin interfaces",
      "UI improvements",
    ],
  },
  paymentGateways: [
    "Himalayan Bank Limited",
    "Global IME Bank",
    "Midtrans",
    "Xendit",
    "Revolut",
    "Getnet — Chile",
    "Razorpay",
  ],
  analytics: {
    technologies: ["Google Analytics 4", "Google Tag Manager", "DataLayer", "Ecommerce tracking"],
    events: ["view_item", "begin_checkout", "purchase"],
    problem:
      "A multi-tenant SaaS platform needs to track customer behavior across many agency websites while ensuring each agency's analytics data reaches the correct property.",
  },
  paymentsHeadline: "One product. Many payment ecosystems.",
  paymentsBlurb:
    "Working with payment integrations means dealing with different APIs, authentication mechanisms, payment states, currencies, capture/refund behavior and provider-specific requirements.",
  uxHeadline: "Engineering is only half the job.",
  uxBlurb:
    "A feature isn't finished just because the backend works. I care about how it behaves from the user's perspective — how clearly information is presented, how validation behaves, how edge cases are handled and whether the overall flow makes sense.",
  uxAreas: [
    "Checkout UX",
    "Form behavior",
    "Validation",
    "Pricing presentation",
    "Admin interfaces",
    "Navigation",
    "User feedback",
    "Responsive behavior",
    "Edge cases",
    "Payment flows",
  ],
  caseStudy: {
    product:
      "Tripcart is a SaaS platform that lets tour operators and travel businesses build websites, manage tours and itineraries, and accept bookings.",
    problemSpace:
      "Building a SaaS product for travel businesses means handling complex booking logic, pricing, availability, capacity and payments — across many different agencies and markets.",
    flow: [
      "Customer",
      "Website",
      "Tour discovery",
      "Booking",
      "Checkout",
      "Payment",
      "Confirmation",
      "Agency dashboard",
      "Analytics",
    ],
    myContribution: "Backend + frontend + integrations + product improvements.",
    challenges:
      "Payments, multi-tenant analytics, pricing, booking flows, emails, validation and production edge cases.",
    productThinking: "How functionality and UX work together.",
    outcome:
      "Tripcart publicly reports that 100+ travel agencies use the platform. (Reported by Tripcart — not a personal claim.)",
  },
  outcomeStat: {
    value: "100+ travel agencies",
    note: "Publicly reported by Tripcart.",
  },
};

export const coachpodium = {
  website: "https://coachpodium.com/",
  category: "SaaS · Coaching · Assessments · Lead Generation",
  role: "Laravel Developer",
  involvement: "Joined in a later phase and built features across the product",
  blurb:
    "CoachPodium is a SaaS platform for coaches focused on interactive assessments, lead generation and tools that help coaches engage with their audience.",
  publicFunctionality: [
    "Interactive assessments",
    "Lead capture",
    "Assessment customization",
    "Coach profiles",
    "Email integrations",
    "Embeddable assessments",
    "Client management",
    "Payment-related functionality",
  ],
  contribution:
    "Joined in a later phase and contributed across frontend and backend development, building features, integrations and user-facing experiences.",
  areas: {
    backend: "Laravel / PHP",
    frontend: "Vue / Livewire / Alpine.js where applicable",
    integrations: "Third-party services and APIs",
    product: "Feature development + UI/UX refinement",
  },
  caseStudy: {
    product:
      "CoachPodium helps coaches run interactive assessments that capture leads and turn audience engagement into client relationships.",
    role: "Joined in a later phase and built features across frontend, backend and integrations.",
    flow: ["Assessment", "User", "Lead", "Coach", "Follow-up", "Conversion"],
    productThinking:
      "Making assessments simple and engaging for end users while still useful for coaches.",
    learned:
      "Early product decisions shape everything afterward — clarity for the user and flexibility for the coach matter from day one.",
  },
};

export const creativelaya = {
  website: "https://creativelaya.com.np/",
  category: "Creative Agency · Web Development · Technical Leadership",
  subtitle: "Leading engineers. Collaborating with designers. Shipping a real product.",
  role: "Lead Engineer",
  shortDescription:
    "Led the development team for Creativelaya's production website, working closely with the design team on UI/UX decisions while mentoring and guiding fresher frontend engineers and contributing technical refinements throughout the project.",
  myRole: {
    title: "Lead Engineer",
    intro: "Led the development team throughout the project.",
    responsibilities: [
      "Leading the development team",
      "Guiding fresher frontend engineers",
      "Reviewing and improving implementation",
      "Providing technical direction",
      "Collaborating with the design team",
      "Discussing UI/UX changes",
      "Translating designs into functional interfaces",
      "Identifying technical refinements",
      "Maintaining implementation quality",
      "Helping the team resolve technical issues",
      "Contributing hands-on engineering work",
    ],
    distinction: "He led the engineers while remaining hands-on technically.",
  },
  story: {
    narrative:
      "Creativelaya gave me an opportunity to take responsibility beyond my own code. I led the development team, worked directly with the design team on UI/UX changes, guided fresher frontend engineers and remained involved in the technical implementation and refinement of the project.",
  },
  collaboration: {
    heading: "Where design meets engineering",
    blurb:
      "Building a creative agency's website required more than translating static designs into code. I worked closely with the design team to discuss UI/UX changes, understand the intent behind designs and determine how those ideas should be implemented effectively.",
    flow: [
      "Design Team",
      "UI/UX discussion",
      "Engineering Decisions",
      "Frontend implementation",
      "Refinement",
      "Production",
    ],
  },
  leading: {
    heading: "My first real experience leading engineers",
    blurb:
      "One of the biggest learning experiences from Creativelaya was leading fresher frontend engineers through a real production project.",
    highlights: [
      "Breaking work into manageable tasks",
      "Explaining implementation approaches",
      "Helping engineers understand requirements",
      "Reviewing implementation",
      "Identifying technical issues",
      "Suggesting improvements",
      "Helping engineers make better frontend decisions",
      "Maintaining consistency across the project",
      "Balancing delivery with code quality",
    ],
    note: "Technical leadership, not formal people management.",
  },
  refinement: {
    heading: "Lead from the front",
    blurb:
      "Leading the team didn't mean stepping away from the code. I remained hands-on, identifying technical refinements, improving implementation decisions and helping ensure the final product matched both the design intent and engineering standards.",
    visual: ["Lead", "Review", "Refine", "Implement", "Mentor"],
  },
  delivery: {
    blurb:
      "The project gave me experience leading development on software that would actually be used by a real organization — where design decisions, technical decisions and delivery quality all mattered.",
    note: "A live production website for a creative agency.",
  },
  lessons: [
    {
      index: "01",
      title: "Leadership is clarity",
      body: "Leading engineers often means making the problem clearer rather than simply giving instructions.",
    },
    {
      index: "02",
      title: "Good implementation starts with communication",
      body: "Working with designers taught me that understanding the intent behind a UI is just as important as implementing the pixels.",
    },
    {
      index: "03",
      title: "Mentoring is part of engineering",
      body: "Helping fresher engineers understand why something should be built a certain way can be more valuable than simply fixing their code.",
    },
    {
      index: "04",
      title: "Ownership changes how you build",
      body: "When you're responsible for the team's output, you start thinking about consistency, maintainability and delivery at a much broader level.",
    },
  ],
  progression: {
    heading: "Career progression",
    flow: ["Developer", "Hands-on Product Engineer", "Technical Lead", "Product-minded Engineer"],
    note: "Creativelaya represents the transition toward technical leadership. Not a formal company-wide promotion.",
  },
  visitCta: { label: "Visit Creativelaya ↗", href: "https://creativelaya.com.np/" },
};

export const toastmasters = {
  website: "https://founderstoastmasters.com/",
  category: "Community · Leadership · Independent Build",
  label: "Designed & Built Independently",
  narrative:
    "As Vice President Public Relations of Founders Toastmasters Club, I identified the opportunity to strengthen the club's digital presence and built the website myself.",
  communicates: [
    "Club identity",
    "Meetings",
    "Leadership development",
    "Public speaking",
    "Events",
    "Community",
    "Guest experience",
    "Club history",
    "Photos",
    "Contact information",
  ],
  context:
    "The site describes Founders Toastmasters as a Kathmandu-based club established in 2019 and shows 200+ meetings completed. These are club statistics, not personal achievements.",
  whyHeadline: "A leadership role that became a product.",
  whyBlurb:
    "As VPPR, I wasn't only responsible for communications. I saw a practical problem: the club needed a stronger digital presence to make it easier for people to discover the club, understand what we do and take the next step toward joining a meeting. So I built the website.",
  steps: [
    { title: "Identify", body: "Digital presence opportunity" },
    { title: "Design", body: "Information architecture + UI/UX" },
    { title: "Build", body: "Frontend + backend where applicable" },
    { title: "Launch", body: "Production website" },
    { title: "Improve", body: "Continue refining the experience" },
  ],
  emphasizes: [
    "Independent ownership",
    "UI/UX",
    "Development",
    "Content structure",
    "Product thinking",
    "Leadership",
    "Community impact",
  ],
};

export const leadership = {
  heading: "Leadership beyond code.",
  progression: [
    { role: "SAA", note: "Operational foundation" },
    { role: "VPPR", note: "Communication + digital presence" },
    { role: "VPE", note: "Education + member development" },
  ],
  current: "Vice President Education",
  previous: ["Vice President Public Relations", "Sergeant at Arms"],
  blurb:
    "My involvement with Toastmasters has evolved from supporting club operations to leading communications and now helping coordinate education and member development.",
  connection:
    "The VPPR role also gave me the opportunity to combine communication, leadership and engineering by designing and building the club's website.",
  skills: [
    "Leadership",
    "Public speaking",
    "Communication",
    "Meeting facilitation",
    "Member development",
    "Coordination",
    "Public relations",
    "Community building",
  ],
};

export const stack = {
  core: ["PHP", "Laravel", "MySQL"],
  frontend: ["Vue.js", "Livewire", "Alpine.js"],
  infrastructure: [
    { name: "Git", note: "" },
    { name: "Linux", note: "" },
    { name: "Nginx", note: "" },
    { name: "Cloudflare", note: "Currently learning and expanding knowledge in this area." },
  ],
  integrations: [
    "Himalayan Bank Limited",
    "Global IME Bank",
    "Midtrans",
    "Xendit",
    "Revolut",
    "Getnet — Chile",
    "Razorpay",
  ],
  contextual: [
    {
      title: "Laravel",
      tag: "Core",
      body: "Used across SaaS products, business logic, APIs, booking systems and integrations.",
    },
    {
      title: "Vue / Livewire / Alpine.js",
      tag: "Frontend",
      body: "Used to build interactive product interfaces and improve user experience.",
    },
    {
      title: "Payment Integrations",
      tag: "Integrations",
      body: "Experience across regional and international payment providers.",
    },
  ],
};

export const philosophy = {
  heading: "How I build",
  principles: [
    {
      index: "01",
      title: "Understand before implementing",
      body: "A ticket describes what needs to change. Understanding the product explains why.",
    },
    {
      index: "02",
      title: "Functionality is only the beginning",
      body: "A feature should work reliably, but it should also make sense to the person using it.",
    },
    {
      index: "03",
      title: "Details matter",
      body: "Validation, edge cases, feedback states and small interactions often determine whether software feels polished.",
    },
    {
      index: "04",
      title: "Leave the product better",
      body: "Every piece of work is an opportunity to improve something — functionality, usability, maintainability or clarity.",
    },
  ],
  productMindsetHeading: "I think beyond the ticket.",
  traditional: ["Requirement", "Code", "Done"],
  bibek: ["Requirement", "Understand", "Build", "Test", "Experience", "Refine", "Improve"],
  beyondHeading: "Build · Improve · Lead",
  pillars: [
    {
      title: "Engineering",
      body: "Building reliable systems and solving technical problems.",
    },
    {
      title: "Product & UX",
      body: "Understanding the user experience and improving the product beyond the immediate requirement.",
    },
    {
      title: "Leadership",
      body: "Collaborating with designers, mentoring engineers and taking responsibility for the quality of the overall outcome.",
    },
  ],
};

export const github = {
  heading: "Explore what I build.",
  url: "https://github.com/bibek-jaiswal045",
  cta: "GitHub ↗",
  note: "Public repositories only. Company and private project work is not shown here.",
};

export const linkedin = {
  url: "https://www.linkedin.com/in/bibek-jaiswal-463289271",
  cta: "Connect on LinkedIn ↗",
};

export const contact = {
  heading: "Let's build something better.",
  copy:
    "Have a product problem, a technical challenge, or simply want to talk about software? I'd be happy to connect.",
  buttons: {
    linkedin: "LinkedIn",
    github: "GitHub",
    email: "Email",
  },
};

export const nav = {
  brand: "Bibek Jaiswal",
  links: [
    { label: "Work", href: "#work" },
    { label: "About", href: "#about" },
    { label: "Leadership", href: "#leadership" },
    { label: "Stack", href: "#stack" },
    { label: "Contact", href: "#contact" },
  ],
  cta: { label: "Let's Connect", href: "#contact" },
};

export const seo = {
  title: "Bibek Jaiswal — Laravel Developer & Product-minded Engineer",
  description:
    "Portfolio of Bibek Jaiswal, a Laravel developer building SaaS products with a focus on engineering, UI/UX, integrations and product improvement.",
  canonical: "https://bibekjaiswal.com/",
  ogImage: "/og.png",
};
