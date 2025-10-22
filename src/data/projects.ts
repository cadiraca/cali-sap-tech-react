import type { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "globant-agentic",
    title: "Globant Agentic",
    subtitle: "AI Marketplace for SAP Enterprise",
    description: "Discover, try, and buy trusted AI solutions from a curated ecosystem of partners to accelerate your business transformation. Your central hub for enterprise-ready AI, built on a foundation of trust and innovation.",
    status: "active",
    category: "ai-marketplace",
    features: [
      "Curated & Trusted AI Solutions",
      "Seamless SAP Integration",
      "Enterprise-Ready Security",
      "Expert-Vetted Quality",
      "Drive Measurable Business Value"
    ],
    technologies: ["AI/ML", "SAP Integration", "Enterprise Security", "Cloud Platform"],
    links: {
      website: "https://my-agent-ui.cfapps.us10-001.hana.ondemand.com/",
      demo: "https://my-agent-ui.cfapps.us10-001.hana.ondemand.com/"
    },
    team: ["Yamit Huertas", "Carlos Diego Ramírez", "Alejandro Paniego", "Juan Abbate"]
  },
  {
    id: "iflowdo",
    title: "iFlowDo",
    subtitle: "GenAI Agent for SAP Cloud Integration",
    description: "Your intelligent companion that accelerates development workflow for SAP Cloud Integration. Get instant help, analyze errors visually, and tap into SAP best practices, right from your browser.",
    status: "active",
    category: "development-tool",
    features: [
      "Interactive Chat Interface",
      "Visual AI Analysis",
      "SAP Best Practices on Demand",
      "Developer & Architect Modes",
      "Error Screenshot Analysis",
      "Groovy Script Generation"
    ],
    technologies: ["GenAI", "Chrome Extension", "SAP CPI", "JavaScript", "Browser APIs"],
    links: {
      website: "https://cpi_google_extension.cfapps.us10-001.hana.ondemand.com/",
      demo: "https://cpi_google_extension.cfapps.us10-001.hana.ondemand.com/",
      earlyAccess: "https://docs.google.com/forms/d/e/1FAIpQLSdNCCiHzFqwvrMWDyd0jXQRAUlua5hlQ0s6VGusZqicXLXUQw/viewform?usp=header"
    },
    team: ["Alejandro Paniego","Andres Gonzalez","Carlos Diego Ramírez"]
  },
  {
    id: "gabap-copilot",
    title: "G>ABAP Copilot",
    subtitle: "AI Assistant for Eclipse ADT",
    description: "Your intelligent partner for writing better ABAP code, faster. Codename: ABAPTars. An Eclipse plugin that brings AI-powered assistance directly to your ABAP development environment.",
    status: "alpha",
    category: "development-tool",
    features: [
      "Explain ABAP Code",
      "Configurable AI Providers",
      "Themed UI (Light/Dark)",
      "Markdown Rendering",
      "Ephemeral Conversations",
      "Eclipse ADT Integration"
    ],
    technologies: ["Eclipse Plugin", "ABAP", "AI/ML", "Java", "SAP AI Core", "Globant GEAI"],
    links: {
      website: "https://abaptars.cfapps.us10-001.hana.ondemand.com/",
      documentation: "https://github.com/XU-GLO306-SE/eclipse-plugin-abap-copilot/blob/main/README.md",
      earlyAccess: "https://docs.google.com/forms/d/e/1FAIpQLSeJ0kM8qAD5DhKwW6dfpHPYJDWHO9y6qq8t54UOQG60xXSrkg/viewform?usp=dialog"
    },
    team: ["Alejandro Paniego", "Carlos Alexander Gonzalez", "Carlos Diego Ramírez"]
  }
];
