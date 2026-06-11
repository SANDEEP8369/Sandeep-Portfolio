// ── Personal Info ──────────────────────────────────────────
export const personal = {
  name: "Sandeep Verma",
  role: "Java Full Stack Developer",
  tagline: "Backend Specialist · GST & FinTech Domain",
  summary:
    "Motivated and detail-oriented Java Full Stack Developer with 3+ years of hands-on experience building enterprise-grade FinTech and GST compliance applications at TAX-O-Smart LLP. Skilled in Core Java, Spring Boot, Hibernate, Spring JPA, and Microservices architecture with proven exposure to GSP integrations, Government API connectivity, and RabbitMQ-based messaging systems.",
  email: "vermasandeep0910@email.com",
  phone: "+91 8369621306",
  linkedin: "https://linkedin.com/in/sandeep-verma-922850240",
  location: "Mumbai, India",
  whatsApp: "https://wa.me/918652483029",
  github: "https://github.com/SANDEEP8369"
};

// ── Stats ──────────────────────────────────────────────────
export const stats = [
  { value: "3+", label: "Years Experience" },
  { value: "5", label: "Key Projects" },
  { value: "20+", label: "Interviews Conducted" },
  { value: "60%", label: "Processing Time Saved" },
  { value: "70%", label: "Integration Effort Cut" },
];

// ── Experience ─────────────────────────────────────────────
export const experience = [
  {
    id: 1,
    role: "Java Developer",
    company: "TAX-O-Smart LLP",
    location: "Mumbai, India",
    period: "Jun 2023 – Present",
    type: "Full-Time",
    color: "#00D4AA",
    bullets: [
      "Developed and maintained multiple microservices for a GST compliance platform serving thousands of businesses, handling GST return filing, reconciliation, and refund workflows.",
      "Integrated GST Suvidha Provider (GSP) APIs for real-time GSTN data fetch, GSTR downloads via Captcha and official API channels, enabling automated return filing for clients.",
      "Built and deployed the e-Invoice and e-Way Bill generation module by integrating with the Government's IRP portal APIs, reducing manual errors and processing time by ~60%.",
      "Developed a RabbitMQ-based messaging bridge to integrate a legacy Desktop application with the web platform, enabling real-time data sync without downtime or data loss.",
      "Integrated TDS server with the Government's TRACES 2.0 API, automating TDS certificate generation, 26AS reconciliation, and challan verification workflows.",
      "Designed and implemented 4–5 bank data mapper utilities to convert raw bank transaction formats into the application's normalized output format, supporting multi-bank onboarding.",
      "Built RESTful APIs using Spring Boot and Spring Data JPA, with MySQL, PostgreSQL, and Oracle as backend databases, following clean code and layered architecture principles.",
      "Conducted 20+ technical interviews for Java Developer hiring, evaluating candidates on Core Java, Spring Boot, and problem-solving skills with a strong selection success rate.",
    ],
  },
];

// ── Projects ───────────────────────────────────────────────
export const projects = [
  {
    id: 1,
    title: "GST Compliance Application",
    stack: ["Java", "Spring Boot", "Microservices", "Spring JPA", "MySQL", "GSP API", "RabbitMQ"],
    color: "#00D4AA",
    accent: "#00ffca",
    icon: "📊",
    description:
      "Comprehensive GST compliance platform covering all return filings, reconciliation, refund processing, and GST services — each function deployed as an independent microservice.",
    points: [
      "All return filings (GSTR-1, 2A, 2B, 3B, 9, 9C), reconciliation, and refund processing as independent microservices.",
      "GSTR download via CAPTCHA-based browser automation and official GSP/GSTN API routes with fallback options for all user tiers.",
      "GSP integration to fetch taxpayer data, validate GSTINs, and submit returns with full audit trail logging.",
    ],
    impact: "Thousands of businesses served",
  },
  {
    id: 2,
    title: "e-Invoice & e-Way Bill Generation",
    stack: ["Java", "Spring Boot", "REST APIs", "IRP API", "Oracle DB"],
    color: "#FF6B6B",
    accent: "#ff9a9a",
    icon: "⚡",
    description:
      "e-Invoice and e-Way Bill generation module integrated with India's Invoice Registration Portal (IRP), reducing manual processing from 15 minutes to under 30 seconds.",
    points: [
      "e-Invoice generation module integrating with IRP for automated IRN generation and QR code embedding on invoices.",
      "Bulk e-Way Bill creation, amendment, and cancellation via NIC API — turnaround reduced from 15 min to under 30 seconds.",
    ],
    impact: "~60% reduction in processing time",
  },
  {
    id: 3,
    title: "Desktop-to-Web Integration via RabbitMQ",
    stack: ["Java", "Spring Boot", "RabbitMQ", "REST APIs", "MySQL"],
    color: "#A78BFA",
    accent: "#c4b5fd",
    icon: "🔗",
    description:
      "Message-queue-based integration layer bridging a legacy Windows Desktop application with the modern web platform, enabling real-time bidirectional data exchange.",
    points: [
      "RabbitMQ integration layer connecting Windows Desktop app with modern web platform — real-time bidirectional data exchange.",
      "Zero data loss guaranteed with durable queue configuration and dead-letter queue handling for all failed messages.",
      "Eliminated data silos between legacy and modern systems with no downtime during migration.",
    ],
    impact: "Zero data loss, zero downtime",
  },
  {
    id: 4,
    title: "TDS Server – TRACES 2.0 Integration",
    stack: ["Java", "Spring Boot", "TRACES 2.0 REST API", "PostgreSQL"],
    color: "#F59E0B",
    accent: "#fbbf24",
    icon: "🏛️",
    description:
      "Government's TRACES 2.0 API integration automating TDS certificate downloads, 26AS reconciliation, and challan verification workflows.",
    points: [
      "Automated TDS certificate (Form 16/16A) downloads, 26AS reconciliation, and challan status verification for end users.",
      "Token-based authentication and rate-limit handling ensuring compliance with Government API usage policies and SLA guarantees.",
    ],
    impact: "Full TRACES 2.0 SLA compliance",
  },
  {
    id: 5,
    title: "Bank Data Mapper Utilities",
    stack: ["Java", "Spring Boot", "MySQL", "Custom Mapper Framework"],
    color: "#06B6D4",
    accent: "#22d3ee",
    icon: "🏦",
    description:
      "Reusable data mapper modules transforming bank-specific transaction formats (CSV, JSON, XML) into a unified internal schema for financial reconciliation.",
    points: [
      "4–5 reusable mapper modules converting CSV, JSON, XML bank formats into a unified internal schema for financial reconciliation.",
      "Parameterized mappings allowing new bank format onboarding with minimal code changes.",
      "~70% reduction in integration effort for each new bank partner added to the platform.",
    ],
    impact: "~70% faster bank onboarding",
  },
];

// ── Skills ─────────────────────────────────────────────────
export const skills = [
  {
    category: "Languages & Core",
    color: "#00D4AA",
    icon: "☕",
    items: ["Core Java", "Advanced Java", "Collections", "Multithreading", "Streams", "JDBC"],
  },
  {
    category: "Frameworks",
    color: "#A78BFA",
    icon: "🌱",
    items: ["Spring Boot", "Spring MVC", "Spring Data JPA", "Hibernate ORM", "Spring Security"],
  },
  {
    category: "Frontend",
    color: "#60A5FA",
    icon: "⚛️",
    items: ["React.js (Vite)", "HTML5", "CSS3", "JavaScript"],
  },
  {
    category: "Databases",
    color: "#F59E0B",
    icon: "🗄️",
    items: ["MySQL", "PostgreSQL", "Oracle DB", "Redis", "Stored Procedures", "Indexing"],
  },
  {
    category: "Messaging & APIs",
    color: "#FF6B6B",
    icon: "🐇",
    items: ["RabbitMQ", "Kafka", "RESTful APIs", "GSP API Integration", "TRACES 2.0", "GSTN APIs"],
  },
  {
    category: "Tools & DevOps",
    color: "#34D399",
    icon: "🛠️",
    items: ["Git", "GitHub", "Postman", "Docker (Basic)", "Maven", "IntelliJ IDEA", "Eclipse"],
  },
  {
    category: "Architecture",
    color: "#F472B6",
    icon: "🏗️",
    items: ["Microservices", "MVC Pattern", "REST API Design", "Agile/Scrum", "Clean Code"],
  },
  {
    category: "Caching",
    color: "#06B6D4",
    icon: "⚡",
    items: ["Redis"],
  },
];

// ── Education ──────────────────────────────────────────────
export const education = [
  {
    degree: "B.Sc. Information Technology",
    institution: "DTSS College of Commerce and Science",
    university: "University of Mumbai",
    color: "#A78BFA",
  },
];

// ── Certifications ─────────────────────────────────────────
export const certifications = [
  {
    title: "Java Full Stack Developer Certification",
    issuer: "Anudip Foundation",
    description:
      "Industry-recognized program covering Core Java, Advanced Java, Spring Boot, and Frontend technologies.",
    color: "#F59E0B",
  },
];
