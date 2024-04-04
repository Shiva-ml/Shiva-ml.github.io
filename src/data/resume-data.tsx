import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Shiva Subramanyam",
  initials: "SS",
  location: "Bangalore, Karnataka, India",
  locationLink: "https://maps.app.goo.gl/wymJsdvmqLG65qLZA",
  about:
    "IAM Engineer , Programmer , Researcher",
  summary:
    "Hey there! I'm into IAM, coding, and AI/ML research. Right now, I'm working at TCS, focusing on developing & implementing PAM & secrets management solutions. I also whip up AI/ML models for cybersecurity when the need arises.",
  avatarUrl: "https://avatars.githubusercontent.com/u/107316558?s=400&u=624d2330d324c22f0e28756d952273c121ae87ee&v=4",
  personalWebsiteUrl: "https://jarocki.me",
  contact: {
    email: "shiva.nsubramanyam@gmail.com",
    tel: "+91-9108505979",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/Shiva-ml",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "linkedin.com/in/shiva-n-s/",
        icon: LinkedInIcon,
      },
    ],
  },
  education: [
    {
      school: "KLE Technological University",
      degree: "Bachelor's Degree in Mechanical engineering (concentration: Nature inspired design, Coding, Mathematics)",
      start: "2016",
      end: "2020",
      badges: ["Bionic Design","metaheuristcs","optimization","Python","Matlab","Java","petrubation theory","solid mechanics","suroggate optimization","lattice structures"]
    },
  ],
  work: [
    {
      company: "Infokalash IT Services",
      link: "https://www.infokalash.com/",
      badges: ["python","AI/ML","Research","agile methodology","Scrum"],
      title: "ML Engineer",
      logo: ClevertechLogo,
      start: "Jun 2022",
      end: "April 2023",
      description:
        "Led R&D for building data de-duplication MVP's in MDM product. Worked spanned in 4 areas: 1)leading agile ceremonies and creating user stories using Scrum/Kanban in Jira/ClickUp. 2) implementing NLP based fuzzy similarity & supervised ML algorithmsfor data deduplication. 3) Developing python packages for automating day2day data preprocessing tasks. 4) Designing a solid curriculum and training a team of 5 to solve MDM data science problems.",
    },
    {
      company: "Center for innovation and Product development",
      link: "",
      badges: ["Software dev for design","Software testing", "Optimization"," Mathematics"],
      title: "Consultant - Research",
      logo: ParabolLogo,
      start: "Dec 2020",
      end: "May 2022",
      description:
        "At CIPD, a MSME business incubator, I developed software dev tools and methods to support nature-inspired designs for hardcore product startups. I did 3 things end to end. 1)  A skeletal extraction tool and method to mimic bone's natural structure for aerospace design.  2) A GUI to extract design parameters from 2D structure images and visualize properties' responses to parameter changes. 3) Showcased 'e' as a good metric to pick the best lattice structure from 1000’s for microstructure design.",
    },
  ],
  skills: [
    "Cyberark",
    "Hashicorp vault",
    "Beyond trust",
    "Python",
    "Powershell",
    "Java",
    "MySql",
    "AI/ML MVP's"
  ],
  projects: [
    {
      title: "NLP Code Base",
      techStack: [
        "NLP",
        "Spacy",
        "NLTK"
        "word2vec",
        "BeautifulSoup",
        "WordCloud",
        "Sci-kit learn"
        
      ],
      description: "A NLP Code base pertaining to primiliminary analysis techniques on raw data, cleaning,feature extraction,pos tagging,dependency parsing, rule based matching and basic models base line checking.",
      logo: ConsultlyLogo,
      link: {
        label: "NLP Code Base",
        href: "https://colab.research.google.com/drive/1rZKOVUxK7OrDGn8XLfJi0P_pVkmcEGjk?usp=sharing",
      },
    },
  ],
} as const;
