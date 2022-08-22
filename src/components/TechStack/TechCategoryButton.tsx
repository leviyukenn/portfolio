import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import { techCategoryMap, TechnologyCategoryName } from "../../contants/techStack";


interface TechCategoryButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>{
    techCategoryName:TechnologyCategoryName,
    isActive:boolean

}

const TechCategoryButton = ({techCategoryName,isActive,...props}:TechCategoryButtonProps) => {
    const techCategory = techCategoryMap.get(techCategoryName) 
    if (!techCategory)return null;
    const TechCategoryIcon = techCategory.icon;

    return (
        <button aria-selected={isActive}  className='btn btn-sm gap-2 rounded-full normal-case aria-selected:btn-active aria-selected:bg-gray-100 aria-selected:text-black'  {...props}>
            <TechCategoryIcon/>
            {techCategoryName}
        </button>
    );
}
export default TechCategoryButton