import { TechName } from "../../contants/techStack";
import Section from "../Section/Section";
import SectionDivider from "../Section/SectionDivider";
import SectionTitle from "../Section/SectionTitle";
import TechCard from "./TechCard";

interface TechStackProps {}

const TechStack = ({}: TechStackProps) => {
  const techStack = Object.values(TechName);
  return (
    <Section>
      <SectionDivider></SectionDivider>
      <SectionTitle>Tech Stack</SectionTitle>
      <ul className="mx-auto w-full md:w-[80%] grid grid-cols-1 sm:grid-cols-2 gap-4 grid-flow-dense">
        {techStack.map((techName,index) => (
          <li key={index}>
            <TechCard techName={techName as TechName}></TechCard>
          </li>
        ))}
      </ul>
    </Section>
  );
};
export default TechStack;
