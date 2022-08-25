import { TechName } from "./techStack";

export interface ProjectType {
  title: string;
  description: string;
  image: string;
  tags: TechName[];
  source: string;
  visit: string;
  id: number;
}

export const projects: ProjectType[] = [
  {
    title: "Imreddit",
    description:
      "A reddit-like discussion website. Registered users submit content to the site such as links, text posts, image posts, which are then voted up or down by other members. ",
    image: "/images/imreddit.png",
    tags: [
      TechName.REACT,
      TechName.NEXTJS,
      TechName.GRAPHQL,
      TechName.NESTJS,
      TechName.NODEJS,
      TechName.TYPESCRIPT,
      TechName.REDUX,
      TechName.MATERIALUI,
      TechName.POSTGRESQL,
      TechName.AWS,
      TechName.DOCKER,
      TechName.GITHUB_ACTIONS,
      TechName.NGINX,
    ],
    source: "https://github.com/leviyukenn/imreddit-client",
    visit: "https://client.imreddit-apis.link/",
    id: 0,
  },
  {
    title: "Portfolio",
    description: "A mobile-first, responsive website to show off my skills.",
    image: "/images/portfolio.png",
    tags: [
      TechName.REACT,
      TechName.NEXTJS,
      TechName.TAILWINDCSS,
      TechName.TYPESCRIPT,
    ],
    source: "https://github.com/leviyukenn/portfolio",
    visit: "#hero",
    id: 1,
  },
];
