export const projects = [
  {
    id: 1,
    name: "HopStop",
    description: "Centralized bus dismissal system deployed across 25 school buildings serving a full district daily. Built solo from architecture through production.",
    stack: [
      {
        name: "Go",
        type: 'Language'
      },
      {
        name: "React",
        type: 'Framework'
      },
      {
        name: "TailwindCSS",
        type: 'Framework'
      },
      {
        name: "SQLite",
        type: "Data"
      }
    ],
    link: null,
    status: "Production"
  },
  {
    id: 2,
    name: "WithIn",
    description: "Local-only personal self-monitoring app for Android. No data leaves the device. No ads, no cloud, no gamification.",
    stack: [
      {
        name: "React Native",
        type: "Framework"
      },
      {
        name: "SQLite",
        type: "Data"
      }
    ],
    link: null,
    status: "In Development"
  },
  {
    id: 3,
    name: "Meridian",
    description: "Modular web-based IT administration platform replacing RDP access and legacy command-line tooling. SAML-secured with structured logging, CRON scheduling, and SFTP modules.",
    stack: [
      {
        name: "Go",
        type: "Language"
      },
      {
        name: "JavaScript",
        type: "Language"
      },
      {
        name: "React",
        type: "Framework"
      },
      {
        name: "TailwindCSS",
        type: "Framework"
      },
      {
        name: "MS SQL",
        type: "Data"
      },
      {
        name: "SQLite",
        type: "Data"
      }
    ],
    link: null,
    status: "In Development"
  },
  {
    id: 4,
    name: "ELDisc",
    description: "Open source Discord bot connecting to Extra Life fundraising profiles, reporting donations and campaign status directly in Discord. Containerizable for self-hosting.",
    stack: [
      {
        name: "Go",
        type:"Language"
      }
    ],
    link: "https://github.com/rdephillip/eldisc",
    status: "Maintained"
  }
]