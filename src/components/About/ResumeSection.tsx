import { ResumeSection } from "../../contants/resume";
import ResumeCard from "./ResumeCard";

interface ResumeProps {
  resumeSection: ResumeSection;
}

const Resume = ({resumeSection}: ResumeProps) => {
  const ResumeSectionIcon = resumeSection.icon;
  return (
    <div className="mt-4">
      <h2 className="flex items-center gap-2">
        <span className="font-bold border-b-2 text-lg">{resumeSection.name}</span>
        <ResumeSectionIcon />
      </h2>
      <ul>
        {resumeSection.resumeContent.map((resumeContent, index) => (
          <li key={index} className="mt-4">
            <ResumeCard resume={resumeContent} />
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Resume;
