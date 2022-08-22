import { Dispatch, SetStateAction, useCallback } from "react";
import { TechnologyCategoryName } from "../../contants/techStack";
import TechCategoryButton from "./TechCategoryButton";

interface TechCategorySelectionProps {
    techCategory:TechnologyCategoryName;
    setTechCategory:Dispatch<SetStateAction<TechnologyCategoryName>>;
}

const TechCategorySelection = ({techCategory,setTechCategory}: TechCategorySelectionProps) => {
  const techCategories = Object.values(TechnologyCategoryName);
  const onClick = useCallback((techCategoryName:TechnologyCategoryName)=>()=>setTechCategory(techCategoryName),[setTechCategory])

  return (
    <ul className="flex justify-center flex-wrap gap-2 my-4">
      {techCategories.map((techCategoryName, index) => (
        <li>
          <TechCategoryButton techCategoryName={techCategoryName} key={index} isActive={techCategory === techCategoryName}   onClick={onClick(techCategoryName)}/>
        </li>
      ))}
    </ul>
  );
};
export default TechCategorySelection;
