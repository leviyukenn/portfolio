import { resume } from "../../contants/resume";
import Section from "../Section/Section";
import SectionDivider from "../Section/SectionDivider";
import SectionSubTitle from "../Section/SectionSubTitle";
import SectionTitle from "../Section/SectionTitle";
import ResumeSection from "./ResumeSection";

interface AboutProps {}

const About = ({}: AboutProps) => {
  return (
    <Section>
      <SectionDivider />
      <SectionTitle>About Me</SectionTitle>
      <h1 className="text-3xl text-gray-200 animate-bounce">
        <span>Hey!</span> 👋
      </h1>
      <SectionSubTitle></SectionSubTitle>
      <div className="mx-auto w-full md:w-[80%] ">
        {
            resume.map((resumeSection,index) => <ResumeSection resumeSection={resumeSection} key={index}/>)
        }
      </div>
    </Section>
  );
};
export default About;
