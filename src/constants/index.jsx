import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  reactjs,
  git,
  docker,
  carrent,
  jobit,
  tripguide,
  infosys,
  tcs,
  aws,
  azure,
  terraform,
  python,
  linux,
  bash,
  ansible,
  kubernetes,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
  {
    id: "resume",
    title: "Resume",
  },
];

const services = [
  {
    title: "Cloud Support",
    icon: web,
  },
  {
    title: "Software Development",
    icon: mobile,
  },
  {
    title: "Security and Vulnerability Compliance",
    icon: backend,
  },
  {
    title: "Site Reliability",
    icon: creator,
  },
];

const technologies = [
  {
    name: "AWS",
    icon: aws,
  },
  {
    name: "Azure",
    icon: azure,
  },
  {
    name: "Terraform",
    icon: terraform,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Linux",
    icon: linux,
  },
  {
    name: "Bash",
    icon: bash,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "Kubernetes",
    icon: kubernetes,
  },
  {
    name: "Ansible",
    icon: ansible,
  },
];

const experiences = [
  {
    title: "Cloud DB Engineer",
    company_name: "Tata Conusultancy Services",
    icon: tcs,
    iconBg: "#383E56",
    date: "Jan 2021 - May 2022",
    points: [
      "Administered and monitored RDS databases, ensuring 99.9% uptime and smooth service delivery.",
      "Designed and maintained AWS cloud database infrastructure with Terraform Cloud, resulting in a 20% improvement in resource provisioning time.",
      "Automated database backup, recovery, and disaster procedures using AWS Lambda, achieving a seamless data recovery.",
      "Conducted AWS Rabbit MQ and Lambda Mapping Templates POC, eliminating the chances of IBM MQ + IBM IIB vendor lock-in by 30%.",
      "Created AWS SCT reports to evaluate RDS-Oracle and RDS-MySQL conversion to RDS-Maria, resulting in a 28% cost reduction for database operations.",
    ],
  },
  {
    title: "Digital Specialist Engineer - Cloud",
    company_name: "Infosys Technologies",
    icon: infosys,
    iconBg: "#E6DEDD",
    date: "May 2022 - Present",
    points: [
      "Designed and managed automated CI/CD pipelines using Banzai pipelines to ensure smooth code deployment, resulting in a 30% reduction in deployment time.",
      "Leveraged Terraform to provision servers and cloud services, improving infrastructure management efficiency.",
      "Orchestrated regular SAST and streamlined Application Onboarding on SonarQube Dashboard, reducing vulnerabilities by 40%.",
      "Automated non-compliance remediation with AWS Lambda and Python/JavaScript, resulting in a more than 90% reduction in common non-compliance incidents.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
