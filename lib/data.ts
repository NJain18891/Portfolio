import { ProjectSpec, CalendarSlot } from '@/types';

export const PROJECTS_DATA: ProjectSpec[] = [
  {
    title: "Vanguard Astro",
    imagePath: "/vanguard.png",
    description:
      "Futuristic aerospace landing page inspired by telemetry dashboards and sci-fi UI systems.",
    techStack: [
      "Next.js",
      "TypeScript",
      "Tailwind",
      "Framer Motion"
    ],
    websiteUrl: "https://vanguard-eight-gray.vercel.app/"
  },
  {
    title: "APEX AGGREGATES",
    imagePath: "/apex.png",
    description:
      "Modern data analytics platform designed to visualize high-volume information streams with clarity, speed, and scalability.",
    techStack: [
      "Next.js",
      "TypeScript",
      "Tailwind",
      "PostgreSQL"
    ],
    websiteUrl: "https://apex-beta-green.vercel.app/"
  },
  {
    title: "ZORA MARKETPLACE",
    imagePath: "/zora.png",
    description:
      "Contemporary marketplace interface built around intuitive user flows and dynamic financial dashboards.",
    techStack: [
      "React",
      "Ethers.js",
      "D3.js",
      "Framer Motion"
    ],
    websiteUrl: "https://zoramarketplace.vercel.app/"
  },
  {
    title: "ORIA WELLNESS",
    imagePath: "/oria.png",
    description:
      "Elegant wellness platform focused on creating calming digital experiences through thoughtful layouts and refined interactions.",
    techStack: [
      "Next.js",
      "Framer Motion",
      "Web Audio API",
      "Tailwind CSS"
    ],
    websiteUrl: "https://oria-blond-six.vercel.app/"
  }
];

export const JUNI_CALENDAR_SLOTS: CalendarSlot[] = [
  { date: 15, available: true },
  { date: 16, available: true },
  { date: 17, available: true },
  { date: 18, available: true },
  { date: 19, available: false },
  { date: 20, available: false },
  { date: 21, available: false },
  { date: 22, available: true },
  { date: 23, available: true },
  { date: 24, available: true },
  { date: 25, available: true },
  { date: 26, available: false },
  { date: 27, available: false },
  { date: 28, available: false }
];
