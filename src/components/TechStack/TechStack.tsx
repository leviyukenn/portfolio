import { useState } from "react";
import {
    techCategoryMap,
    TechName,
    TechnologyCategoryName
} from "../../contants/techStack";
import Section from "../Section/Section";
import SectionDivider from "../Section/SectionDivider";
import SectionSubTitle from "../Section/SectionSubTitle";
import SectionTitle from "../Section/SectionTitle";
import TechCard from "./TechCard";
import TechCategorySelection from "./TechCategorySelection";

interface TechStackProps {}

const TechStack = ({}: TechStackProps) => {
  const [techCategory, setTechCategory] = useState<TechnologyCategoryName>(
    TechnologyCategoryName.ALL
  );
  const techCategoryInfo = techCategoryMap.get(techCategory);
  if (!techCategoryInfo) return null;

  const techStack = Object.values(techCategoryInfo.technologies);

  return (
    <Section>
      <SectionDivider></SectionDivider>
      <SectionTitle>Tech Stack</SectionTitle>
      <SectionSubTitle>
      Here's a list of my favorite tools and technologies.
      </SectionSubTitle>
      <div className="mx-auto w-full md:w-[80%]">
        <TechCategorySelection
          techCategory={techCategory}
          setTechCategory={setTechCategory}
        />
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 grid-flow-dense">
          {techStack.map((techName, index) => (
            <li key={index} >
              <TechCard techName={techName as TechName}></TechCard>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
};
export default TechStack;
