import { IconType } from "react-icons";
import { FaUniversity } from "react-icons/fa";
import { IoBusiness } from "react-icons/io5";

export interface ResumeContent {
  name: string;
  duration: string;
  techStack: string[];
  image: string;
  title: string;
}

export interface ResumeSection {
  name: string;
  icon: IconType;
  resumeContent: ResumeContent[];
}

export const careers: ResumeContent[] = [
  {
    name: "Solid Communication",
    image: "/images/techStack/solidcom.ico",
    duration: "2020 - Present",
    techStack: [
      "JavaScript",
      "Java",
      "Mybatis",
      "Spring",
      "html",
      "css",
      "bootstrap",
    ],
    title: "Web Engineer",
  },
  {
    name: "AIST:産業技術総合研究所",
    image: "/images/techStack/AIST.png",
    duration: "2019 - 2020",
    techStack: [
      "Python",
      "Keras",
      "Tensorflow",
      "pandas",
      "Data analysis",
      "Deep learning",
    ],
    title: "Research Asistant",
  },
];

export const education: ResumeContent[] = [
  {
    name: "University of Tsukuba",
    image: "/images/techStack/tsukuba.png",
    duration: "2017 - 2020",
    techStack: [
      "Python",
      "Keras",
      "pandas",
      "Tensorflow",
      "Data analysis",
      "Deep learning",
    ],
    title: "Master's degree in Tectonophysics",
  },
  {
    name: "Huaqiao University",
    image: "/images/techStack/huaqiao.png",
    duration: "2013 - 2017",
    techStack: ["C", "MATLAB"],
    title: "Bachelor's degree in Structual Engineering",
  },
];

export const resume: ResumeSection[] = [
  {
    name: "Career",
    icon: IoBusiness,
    resumeContent: careers,
  },
  {
    name: "Education",
    icon: FaUniversity,
    resumeContent: education,
  },
];
