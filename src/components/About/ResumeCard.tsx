import { ResumeContent } from "../../contants/resume";

interface ResumeCardProps {
  resume: ResumeContent;
}

const ResumeCard = ({ resume }: ResumeCardProps) => {
  return (
    <div className="group flex justify-between p-4 rounded-xl border bg-gray-800 border-gray-700 items-center hover:translate-y-[-5px] ease-in-out transition-transform duration-500">
      <div className="flex">
        <div className=" avatar shrink-0">
          <div className="w-[96px] h-[96px] rounded-full bg-gray-100">
            <img src={resume.image}></img>
          </div>
        </div>
        <div className="ml-4">
          <p className="font-bold group-hover:text-blue-300 transition-colors duration-500 ease-out">
            {resume.name}
          </p>
          <p className="text-xs mt-2">{resume.title}</p>
          <ul className="flex gap-1 mt-4 flex-wrap">
            {resume.techStack.map((tech, index) => (
              <li
                key={index}
                className="bg-gray-100/20 rounded-md text-gray-200 text-xs px-2"
              >
                {tech}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <p className="hidden sm:block text-xs min-w-[20%]">{resume.duration}</p>
    </div>
  );
};
export default ResumeCard;
