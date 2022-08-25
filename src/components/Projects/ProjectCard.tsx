import Link from "next/link";
import { ProjectType } from "../../contants/projects";
import TechTag from "../TechStack/TechTag";

interface ProjectCardProps {
  project: ProjectType;
}
const ProjectCard = ({
  project: { id, title, image, description, tags, visit, source },
}: ProjectCardProps) => {
  return (
    <div className="rounded-xl sm:w-[400px] w-full shadow-project-card flex flex-col">
        <div>
      <img className="w-full  object-cover overflow-hidden rounded-t-xl" src={image} alt={title}></img></div>
      <div className="flex flex-col items-center">
        <h3 className="font-medium tracking-widest text-sky-200 py-2 text-xl">
          {title}
        </h3>
        <hr className="w-14 h-1 bg-button-back rounded-md border-0"></hr>
      </div>
      <p className="w-full  p-6  text-slate-200 ">{description}</p>
      <ul className="flex px-6 flex-wrap ">
        {tags.map((techName, index) => (
          <li key={index} className="p-1">
            <TechTag techName={techName}></TechTag>
          </li>
        ))}
      </ul>
      <div className="flex justify-around my-4">
        <Link href={visit}>
          <a  className="btn btn-outline btn-sm">
            View App
          </a>
        </Link>
        <Link href={source}>
          <a  className="btn btn-outline btn-sm">
            Source Code
          </a>
        </Link>
      </div>
    </div>
  );
};
export default ProjectCard;
