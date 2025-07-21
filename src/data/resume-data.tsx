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
      Passionate backend developer with experience in Node.js, PHP, Laravel, and Golang. I also have experience with Frontend framework like React and Vue. I build efficient APIs and scalable architectures.
    </>
  ),
  avatarUrl: "",
  personalWebsiteUrl: "https://cv.fahriedev.com/",
  contact: {
    email: "fahriramadhan234@gmail.com",
    tel: "",
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
          Rebuilding and maintaining the application for the wifi management system, Retinad. And Migrating Enervon Web Page from CI to Laravel and Nuxt.
          <ul className="list-inside list-disc">
            <li>
              Architecting migration for Retinad from CI to Laravel.
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
      start: "2020",
      end: "2022",
      description: (
        <>
          <ul className="list-inside list-disc">
            <li>
              Creating a catalog application for resellers using Next.js.
            </li>
            <li>
              Creating API for website and mobile appplication with Laravel.
            </li>
            <li>
              Mantaining and adding feature to CMS application for admin using Laravel and Vue.
            </li>
          </ul>
        </>
      ),
    },
    {
      company: "PT Sigma Solusi Service",
      link: "",
      badges: ["Full Time"],
      title: "Network Engineer",
      start: "2019",
      end: "2020",
      description: (
        <>
          <ul className="list-inside list-disc">
            <li>
              Troubleshoot and fix internet problem that occur to customers.
            </li>
            <li>
              Collaborated with the Network Operation Center (NOC) team to detect and resolve network issues efficiently.
            </li>
            <li>
              Conducted network performance analysis and capacity testing to ensure optimal service quality.
            </li>
            <li>
              Provided technical support for corporate clients regarding Biznet’s network services.
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
    "Node.js",
    "GraphQL",
    "PHP/Laravel",
    "Golang",
    "SQL",
    "Docker"
  ],
  projects: [
    {
      title: "Enervon-C",
      techStack: ["Laravel, Nuxt"],
      description:
        "I developed the official Enervon-C website to deliver a seamless, high-performance experience that supports the brand's mission: helping Indonesians stay energized and healthy.",
      logo: MonitoLogo,
      link: {
        label: "enervon-c",
        href: "https://www.enervon.co.id/",
      },
    },
    {
      title: "Earthrun",
      techStack: ["Laravel, Nuxt"],
      description:
        "EarthRun is an annual “Mandatalam Earth Run” event—a 5K/10K race in Bandung aimed at promoting environmental awareness and community wellness Participants support tree planting and run through eco-friendly routes designed around Green Race principles.",
      logo: MonitoLogo,
      link: {
        label: "earthrun",
        href: "https://www.earthrun.id/",
      },
    },
    {
      title: "Lite-Chat",
      techStack: ["Golang", "React.js", "MongoDB"],
      description:
        "A Whatsapp web app clone. Build using Golang, ReactJS, Tailwind, Docker and MongoDB",
      logo: MonitoLogo,
      link: {
        label: "lite-chat",
        href: "https://lite-chat.fahriedev.web.id",
      },
    },
    {
      title: "Akademinur",
      techStack: ["PHP", "CI 3", "MySql"],
      description:
        "Adding some feature and fixing some bug in a website for a learning murottal.",
      logo: MonitoLogo,
      link: {
        label: "akademinur",
        href: "https://akademinur.com/",
      },
    },
  ],
} as const;
