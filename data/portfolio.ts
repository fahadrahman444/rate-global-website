export interface ProjectCaseStudy {
  id: string;
  title: string;
  category: "Web App" | "SaaS Platform" | "E-Commerce" | "Design System";
  client: string;
  description: string;
  outcome: string;
  metric: string;
  techStack: string[];
  link?: string;
}

export const portfolioProjects: ProjectCaseStudy[] = [
  {
    id: "strata-fintech",
    title: "Strata Global Financial OS",
    category: "SaaS Platform",
    client: "Strata Financial UK",
    description:
      "Engineered a real-time treasury management dashboard with instant multi-currency settlement and sub-100ms analytics querying.",
    outcome: "Reduced transaction reconciliation time from 4 days to real-time.",
    metric: "99.99% Uptime",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL", "WebSockets"],
  },
  {
    id: "aurora-health",
    title: "Aurora Telehealth & Patient Portal",
    category: "Web App",
    client: "Aurora Health Network",
    description:
      "HIPAA-compliant patient booking portal and clinician collaboration workspace with end-to-end encrypted consultations.",
    outcome: "Scaled to 45,000+ monthly active patient consultations with zero downtime.",
    metric: "100/100 Lighthouse",
    techStack: ["React 19", "Next.js", "Tailwind CSS", "Node.js", "WebRTC"],
  },
  {
    id: "nordic-craft",
    title: "Nordic Minimalist E-Commerce",
    category: "E-Commerce",
    client: "Nordic Living Co.",
    description:
      "Headless Shopify storefront with bespoke fluid animations, edge-cached product search, and sub-second checkout loading.",
    outcome: "+48% checkout conversion rate within the first 60 days post-launch.",
    metric: "+48% Conversion",
    techStack: ["Next.js", "Shopify Storefront API", "Tailwind CSS", "Edge Functions"],
  },
  {
    id: "vanguard-design",
    title: "Vanguard Tokenized Design System",
    category: "Design System",
    client: "Vanguard Mobility",
    description:
      "Unified design system and React component library standardizing 8 enterprise digital products across web and mobile web.",
    outcome: "Cut engineering time-to-market for new features by 65%.",
    metric: "65% Faster Dev",
    techStack: ["TypeScript", "Tailwind CSS", "Framer Motion", "Storybook"],
  },
];
