import { projects } from "../../contants/projects";
import Section from "../Section/Section";
import SectionDivider from "../Section/SectionDivider";
import SectionTitle from "../Section/SectionTitle";
import ProjectCard from "./ProjectCard";

interface ProjectsProps {}

const Projects = ({}: ProjectsProps) => {
  return (
    <Section>
      <SectionDivider></SectionDivider>
      <SectionTitle>Projects</SectionTitle>
      <div className="grid sm:grid-cols-projects gap-8 sm:p-12  justify-items-center auto-rows-max">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project}></ProjectCard>
        ))}
      </div>
    </Section>
  );
};
export default Projects;
