import { IconType } from "react-icons";
import { FaDev } from "react-icons/fa";
import { GoBrowser, GoServer } from "react-icons/go";
import { GrGolang, GrReactjs } from "react-icons/gr";

import {
  SiAmazonaws,
  SiAntdesign,
  SiCss3,
  SiDocker,
  SiEclipseide,
  SiGit,
  SiGithubactions,
  SiGoland,
  SiGraphql,
  SiHtml5,
  SiIntellijidea,
  SiJava,
  SiJavascript,
  SiLinux,
  SiMaterialui,
  SiMysql,
  SiNestjs,
  SiNginx,
  SiNodedotjs,
  SiPostgresql,
  SiPython,
  SiRedux,
  SiSubversion,
  SiTailwindcss,
  SiTypescript,
  SiVim,
  SiVisualstudiocode,
} from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";

export interface Technology {
  name: TechName;
  icon: IconType;
  url: string;
  image: string;
  backgroundColor: string;
  description: string;
}

export interface TechnologyCategory {
  name: TechnologyCategoryName;
  icon: IconType;
  technologies: TechName[];
}

export enum TechnologyCategoryName {
  ALL = "All",
  FRONTEND = "Frontend",
  BACKEND = "Backend",
  PROGRAMING_LANGUAGE = "Programming Language",
  EDITOR = "Editor/IDE",
  DEVOPS = "Devops",
}

export const createTechnology = (
  name: TechName,
  icon: IconType,
  url: string,
  image: string,
  backgroundColor: string,
  description: string
): Technology => {
  return {
    name,
    icon,
    url,
    image,
    backgroundColor,
    description,
  };
};

export const createTechnologyCategory = (
  name: TechnologyCategoryName,
  icon: IconType,
  technologies: TechName[]
): TechnologyCategory => {
  return {
    name,
    icon,
    technologies,
  };
};

export enum TechName {
  REACT = "React",
  NESTJS = "NestJS",
  NEXTJS = "Next.js",
  JAVASCRIPT = "JavaScript",
  TYPESCRIPT = "TypeScript",
  HTML5 = "Html5",
  CSS = "Css",
  MATERIALUI = "MaterialUI",
  TAILWINDCSS = "tailwindcss",
  ANTDESIGN = "Ant Design",
  REDUX = "Redux",
  GRAPHQL = "Graphql",
  NODEJS = "Node.js",
  GOLANG = "Golang",
  JAVA = "Java",
  MYSQL = "MySQL",
  POSTGRESQL = "PostgreSQL",
  GIT = "Git",
  AWS = "Amazon Web Services",
  DOCKER = "Docker",
  NGINX = "Nginx",
  SVN = "Subversion",
  LINUX = "Linux",
  PYTHON = "Python",
  GITHUB_ACTIONS = "Github Actions",
  VIM = "Vim",
  VSCODE = "Visual Studio Code",
  ECLIPSE = "Eclipse",
  INTELLIJ_IDEA = "IntelliJ IDEA",
  GOLAND = "Goland",
}

export const techStackMap = new Map<TechName, Technology>([
  [
    TechName.REACT,
    createTechnology(
      TechName.REACT,
      GrReactjs,
      "https://reactjs.org/",
      "/images/techStack/React.png",
      "rgb(132,220,236)",
      "JavaScript library"
    ),
  ],
  [
    TechName.NESTJS,
    createTechnology(
      TechName.NESTJS,
      SiNestjs,
      "https://docs.nestjs.com/",
      "/images/techStack/NestJS.svg",
      "#DD2C50",
      "Node.js framework."
    ),
  ],
  [
    TechName.NEXTJS,
    createTechnology(
      TechName.NEXTJS,
      TbBrandNextjs,
      "https://nextjs.org/",
      "/images/techStack/NextJs.svg",
      "#fff",
      "React freamwork."
    ),
  ],
  [
    TechName.JAVASCRIPT,
    createTechnology(
      TechName.JAVASCRIPT,
      SiJavascript,
      "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
      "/images/techStack/javascript.png",
      "#EFD847",
      "Programming language"
    ),
  ],
  [
    TechName.TYPESCRIPT,
    createTechnology(
      TechName.TYPESCRIPT,
      SiTypescript,
      "https://www.typescriptlang.org/",
      "/images/techStack/typescript.png",
      "#3279C3",
      "JavaScript with syntax for types"
    ),
  ],
  [
    TechName.HTML5,
    createTechnology(
      TechName.HTML5,
      SiHtml5,
      "https://developer.mozilla.org/en-US/docs/Glossary/HTML5",
      "/images/techStack/html.png",
      "#E2502D",
      "Web layouts"
    ),
  ],
  [
    TechName.CSS,
    createTechnology(
      TechName.CSS,
      SiCss3,
      "https://developer.mozilla.org/en-US/docs/Web/CSS",
      "/images/techStack/css.png",
      "#224CDE",
      "Web design"
    ),
  ],
  [
    TechName.MATERIALUI,
    createTechnology(
      TechName.MATERIALUI,
      SiMaterialui,
      "https://mui.com/",
      "/images/techStack/materialUI.png",
      "#117FF9",
      "Web design"
    ),
  ],
  [
    TechName.TAILWINDCSS,
    createTechnology(
      TechName.TAILWINDCSS,
      SiTailwindcss,
      "https://tailwindcss.com/",
      "/images/techStack/tailwindCss.png",
      "#42BCF4",
      "Web design"
    ),
  ],
  [
    TechName.ANTDESIGN,
    createTechnology(
      TechName.ANTDESIGN,
      SiAntdesign,
      "https://ant.design/",
      "/images/techStack/antdesign.png",
      "#146CF8",
      "Web design"
    ),
  ],
  [
    TechName.REDUX,
    createTechnology(
      TechName.REDUX,
      SiRedux,
      "https://redux.js.org/",
      "/images/techStack/redux.png",
      "#754AB6",
      "Web development"
    ),
  ],
  [
    TechName.GRAPHQL,
    createTechnology(
      TechName.GRAPHQL,
      SiGraphql,
      "https://graphql.org/",
      "/images/techStack/graphql.png",
      "#E23CA8",
      "Web development"
    ),
  ],
  [
    TechName.NODEJS,
    createTechnology(
      TechName.NODEJS,
      SiNodedotjs,
      "https://nodejs.org/en/",
      "/images/techStack/nodejs.png",
      "#77AA6A",
      "JavaScript runtime"
    ),
  ],
  [
    TechName.GOLANG,
    createTechnology(
      TechName.GOLANG,
      GrGolang,
      "https://go.dev/",
      "/images/techStack/golang.svg",
      "#7ED3FA",
      "Programming language"
    ),
  ],
  [
    TechName.JAVA,
    createTechnology(
      TechName.JAVA,
      SiJava,
      "https://www.java.com/en/",
      "/images/techStack/java.png",
      "#FFF",
      "Programming language"
    ),
  ],
  [
    TechName.MYSQL,
    createTechnology(
      TechName.MYSQL,
      SiMysql,
      "https://www.mysql.com/",
      "/images/techStack/mysql.png",
      "#11758D",
      "Database"
    ),
  ],
  [
    TechName.POSTGRESQL,
    createTechnology(
      TechName.POSTGRESQL,
      SiPostgresql,
      "https://www.postgresql.org/",
      "/images/techStack/postgresql.png",
      "#326790",
      "Database"
    ),
  ],
  [
    TechName.GIT,
    createTechnology(
      TechName.GIT,
      SiGit,
      "https://git-scm.com/",
      "/images/techStack/git.png",
      "#ED543C",
      "Version control"
    ),
  ],
  [
    TechName.AWS,
    createTechnology(
      TechName.AWS,
      SiAmazonaws,
      "https://aws.amazon.com/?nc2=h_lg",
      "/images/techStack/aws.png",
      "#1E2B3B",
      "Infrastructure"
    ),
  ],
  [
    TechName.DOCKER,
    createTechnology(
      TechName.DOCKER,
      SiDocker,
      "https://www.docker.com/",
      "/images/techStack/docker.webp",
      "#2D97E8",
      "Devops"
    ),
  ],
  [
    TechName.NGINX,
    createTechnology(
      TechName.NGINX,
      SiNginx,
      "https://www.nginx.com/",
      "/images/techStack/nginx.png",
      "#1A9544",
      "Devops"
    ),
  ],
  [
    TechName.SVN,
    createTechnology(
      TechName.SVN,
      SiSubversion,
      "https://subversion.apache.org/",
      "/images/techStack/svn.png",
      "#819CC6",
      "Version control"
    ),
  ],
  [
    TechName.LINUX,
    createTechnology(
      TechName.LINUX,
      SiLinux,
      "https://www.linux.org/",
      "/images/techStack/linux.png",
      "#fff",
      "Operating system"
    ),
  ],
  [
    TechName.PYTHON,
    createTechnology(
      TechName.PYTHON,
      SiPython,
      "https://www.python.org/",
      "/images/techStack/python.png",
      "#fff",
      "Programming language"
    ),
  ],
  [
    TechName.GITHUB_ACTIONS,
    createTechnology(
      TechName.GITHUB_ACTIONS,
      SiGithubactions,
      "https://github.com/features/actions",
      "/images/techStack/githubActions.png",
      "#2888F9",
      "Devops"
    ),
  ],
  [
    TechName.VIM,
    createTechnology(
      TechName.VIM,
      SiVim,
      "https://www.vim.org/",
      "/images/techStack/vim.png",
      "#CCCCCC",
      "Editor"
    ),
  ],
  [
    TechName.VSCODE,
    createTechnology(
      TechName.VSCODE,
      SiVisualstudiocode,
      "https://code.visualstudio.com/",
      "/images/techStack/vscode.png",
      "#40A9EE",
      "Editor"
    ),
  ],
  [
    TechName.ECLIPSE,
    createTechnology(
      TechName.ECLIPSE,
      SiEclipseide,
      "https://www.eclipse.org/",
      "/images/techStack/eclipse.png",
      "#2C2252",
      "IDE"
    ),
  ],
  [
    TechName.INTELLIJ_IDEA,
    createTechnology(
      TechName.INTELLIJ_IDEA,
      SiIntellijidea,
      "https://www.jetbrains.com/idea/",
      "/images/techStack/idea.png",
      "#fff",
      "IDE"
    ),
  ],
  [
    TechName.GOLAND,
    createTechnology(
      TechName.GOLAND,
      SiGoland,
      "https://www.jetbrains.com/go/",
      "/images/techStack/goland.png",
      "#fff",
      "IDE"
    ),
  ],
]);

export const techCategoryMap = new Map<
  TechnologyCategoryName,
  TechnologyCategory
>([
  [
    TechnologyCategoryName.ALL,
    createTechnologyCategory(
      TechnologyCategoryName.ALL,
      GoBrowser,
      Object.values(TechName)
    ),
  ],
  [
    TechnologyCategoryName.FRONTEND,
    createTechnologyCategory(TechnologyCategoryName.FRONTEND, GoBrowser, [
      TechName.HTML5,
      TechName.CSS,
      TechName.ANTDESIGN,
      TechName.MATERIALUI,
      TechName.NEXTJS,
      TechName.TAILWINDCSS,
      TechName.REDUX,
      TechName.REACT,
      TechName.GRAPHQL,
    ]),
  ],
  [
    TechnologyCategoryName.BACKEND,
    createTechnologyCategory(TechnologyCategoryName.BACKEND, GoServer, [
      TechName.GRAPHQL,
      TechName.POSTGRESQL,
      TechName.MYSQL,
      TechName.NESTJS,
      TechName.NODEJS,
    ]),
  ],
  [
    TechnologyCategoryName.PROGRAMING_LANGUAGE,
    createTechnologyCategory(
      TechnologyCategoryName.PROGRAMING_LANGUAGE,
      SiJavascript,
      [
        TechName.JAVASCRIPT,
        TechName.JAVA,
        TechName.GOLANG,
        TechName.PYTHON,
        TechName.TYPESCRIPT,
      ]
    ),
  ],
  [
    TechnologyCategoryName.DEVOPS,
    createTechnologyCategory(TechnologyCategoryName.DEVOPS, FaDev, [
      TechName.AWS,
      TechName.DOCKER,
      TechName.NGINX,
      TechName.GITHUB_ACTIONS,
      TechName.GIT,
      TechName.SVN,
      TechName.LINUX,
    ]),
  ],
  [
    TechnologyCategoryName.EDITOR,
    createTechnologyCategory(
      TechnologyCategoryName.EDITOR,
      SiVisualstudiocode,
      [
        TechName.VIM,
        TechName.VSCODE,
        TechName.ECLIPSE,
        TechName.INTELLIJ_IDEA,
        TechName.GOLAND,
      ]
    ),
  ],
]);
