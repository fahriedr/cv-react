import {
  ClevertechLogo,
  ConsultlyLogo,
  JojoMobileLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Fahrie D. Ramadhan",
  initials: "FDR",
  location: "Jakarta, Indonesia, CET",
  locationLink: "https://www.google.com/maps/place/Jakarta",
  about:
    "Passionate software developer to build efficient website, APIs and scalable architectures.",
  summary: (
    <>
      Passionate backend developer with experience in Node.js, PHP, Larvel and databases. I also have experience with Frontend framework like React and Vue. I build efficient APIs and scalable architectures.
    </>
  ),
  // avatarUrl: "https://avatars.githubusercontent.com/u/1017620?v=4",
  personalWebsiteUrl: "https://jarocki.me",
  contact: {
    email: "hello@fahriedev.com",
    // tel: "+48530213401",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/fahriedr",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/fahrie-dr/",
        icon: LinkedInIcon,
      }
    ],
  },
  education: [
    {
      school: "Universitas Pamulang",
      degree: "Bachelor's Degree in Computer Science",
      start: "2015",
      end: "2019",
    },
  ],
  work: [
    {
      company: "PT Ajita Indonesia",
      link: "https://www.ajita.co.id/",
      badges: ["Full Time"],
      title: "Software Develover",
      logo: ConsultlyLogo,
      start: "2022",
      end: null,
      description: (
        <>
          Rebuilding the application for the wifi management system, Retinad. And Migrating Enervon Web Page from CI to Laravel and Nuxt.
          <ul className="list-inside list-disc">
            <li>
              Architecting migration for Retinad from CI to Laravel 10.
            </li>
            <li>
              Established release process enabling faster deployments and
              reliable rollbacks
            </li>
            <li>
              Added unit testing to make easier the further development process.
            </li>
          </ul>
        </>
      ),
    },
    {
      company: "PT Karya Digital Bersama",
      link: "https://www.buatinwebsite.com/",
      badges: ["Full Time"],
      title: "Full Stack Developer",
      logo: ParabolLogo,
      start: "2020",
      end: "2022",
      description: (
        <>
          Senior developer and squad leader for an enterprise agile meeting
          platform.
          <ul className="list-inside list-disc">
            <li>
              Built design system with Tailwind CSS, improving development speed
              and time to market
            </li>
            <li>
              Implemented engineering practices: PR automation, code review
              guidelines, and workflows
            </li>
            <li>
              Open source contributions to Relay DevTools and React i18n tooling
            </li>
          </ul>
        </>
      ),
    },
    {
      company: "PT Sigma Solusi Service",
      // link: "https://clevertech.biz",
      badges: ["Full Time"],
      title: "Network Engineer",
      start: "2019",
      end: "2020",
      description: (
        <>
          Successfully transitioned from mobile to full-stack development while
          leading distributed teams.
          <ul className="list-inside list-disc">
            <li>
              Led frontend team at Evercast, building real-time platform
              supporting 30+ users per room with HD streaming and collaboration
              tools
            </li>
            <li>
              Developed offline-first Android app for DKMS, improving donor
              registration process
            </li>
            <li>
              Led development teams across multiple successful client projects
            </li>
          </ul>
        </>
      ),
    }
  ],
  skills: [
    "React/Next.js",
    "Vue/Nuxt",
    "TypeScript",
    "Tailwind CSS",
    "WebSockets",
    "Node.js",
    "GraphQL",
    "PHP/Laravel",
    "SQL",
    "Docker"
  ],
  projects: [
    // {
    //   title: "Monito",
    //   techStack: ["TypeScript", "Next.js", "Browser Extension", "PostgreSQL"],
    //   description:
    //     "Browser extension for debugging web applications. Includes taking screenshots, screen recording, E2E tests generation and generating bug reports",
    //   logo: MonitoLogo,
    //   link: {
    //     label: "monito.dev",
    //     href: "https://monito.dev/",
    //   },
    // },
    // {
    //   title: "Consultly",
    //   techStack: [
    //     "TypeScript",
    //     "Next.js",
    //     "Vite",
    //     "GraphQL",
    //     "WebRTC",
    //     "Tailwind CSS",
    //     "PostgreSQL",
    //     "Redis",
    //   ],
    //   description:
    //     "Platform for online consultations with real-time video meetings and scheduling",
    //   logo: ConsultlyLogo,
    //   link: {
    //     label: "consultly.com",
    //     href: "https://consultly.com/",
    //   },
    // },
    // {
    //   title: "Minimalist CV",
    //   techStack: ["TypeScript", "Next.js", "Tailwind CSS"],
    //   description:
    //     "An open source minimalist, print friendly CV template with a focus on readability and clean design. >9k stars on GitHub",
    //   logo: MonitoLogo,
    //   link: {
    //     label: "Minimalist CV",
    //     href: "https://github.com/BartoszJarocki/cv",
    //   },
    // },
  ],
} as const;
