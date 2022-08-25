import Link from "next/link";
import React from "react";
import { TechName, techStackMap } from "../../contants/techStack";

interface TechTagProps
  extends React.DetailedHTMLProps<
    React.AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  > {
  techName: TechName;
}

const TechTag = ({ techName, ...props }: TechTagProps) => {
  const technology = techStackMap.get(techName);
  if (!technology) return null;
  const TechIcon = technology.icon;

  return (
    <div className="tooltip" data-tip={technology.name}>
      <Link href={technology.url}>
        <a className="btn btn-circle btn-sm" target="_blank" {...props}>
          <TechIcon size="1rem" />
        </a>
      </Link>
    </div>
  );
};
export default TechTag;
