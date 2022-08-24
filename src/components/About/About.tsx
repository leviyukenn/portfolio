import { resume } from "../../contants/resume";
import Section from "../Section/Section";
import SectionDivider from "../Section/SectionDivider";
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
      <p className="text-gray-300  w-full sm:w-[60%] ">
        Thanks to visit my portfolio.
        <br/>
        My name is 余 君宇(Junyu Yu) or you can call me ヨクンウ in Japanese.
        <br/>
        I'm a web engineer and now work in Tokyo. It's my pleasure to have an opportunity to work with you😄.
      </p>
      <div className="mx-auto w-full md:w-[80%] ">
        {
            resume.map((resumeSection,index) => <ResumeSection resumeSection={resumeSection} key={index}/>)
        }
      </div>
    </Section>
  );
};
export default About;
