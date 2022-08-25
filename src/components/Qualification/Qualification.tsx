import Section from "../Section/Section";
import SectionDivider from "../Section/SectionDivider";
import SectionTitle from "../Section/SectionTitle";

interface QualificationProps {}

const Qualification = ({}: QualificationProps) => {
  return (
    <Section>
      <SectionDivider />
      <SectionTitle>Qualification</SectionTitle>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 my-5">
        <div className="stat bg-gray-700 rounded-xl">
          <div className="stat-title">TOEIC</div>
          <div className="stat-value text-xl">885 / 990</div>
          <div className="stat-desc text-xs whitespace-normal">Test of English for International Communication</div>
        </div>
        <div className="stat bg-gray-700 rounded-xl">
          <div className="stat-title">JLPT N1</div>
          <div className="stat-value text-xl">180 / 180</div>
          <div className="stat-desc text-xs whitespace-normal">The Japanese-Language Proficiency Test</div>
        </div>
        <div className="stat bg-gray-700 rounded-xl">
          <div className="stat-title">TOFEL</div>
          <div className="stat-value text-xl">80 / 120</div>
          <div className="stat-desc text-xs whitespace-normal">Test of English as a Foreign Language</div>
        </div>
        <div className="stat bg-gray-700 rounded-xl">
          <div className="stat-title">Scholarship</div>
          <div className="stat-value text-xl">2019 - 2020</div>
          <div className="stat-desc text-xs whitespace-normal">Rotary Yoneyama Scholarship</div>
        </div>
      </div>
    </Section>
  );
};
export default Qualification;
