
import Link from 'next/link';
import React from 'react';
import { TechName, techStackMap } from '../../contants/techStack';

interface TechCardProps 
  extends React.DetailedHTMLProps<
    React.AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  > {
  techName: TechName;

}

const TechCard = ({techName,...props}:TechCardProps) => {
    const technology = techStackMap.get(techName);
    if (!technology) return null;


    return (
        <Link href={technology.url}>
            <a target="_blank" >
                <div className='flex p-4 rounded-xl border bg-gray-800 border-gray-700 items-center'>
                    <div className='rounded-lg p-1 relative w-8 h-8 flex items-center'>
                        <div className={"absolute opacity-25 top-0 left-0 w-full h-full rounded-lg"} style={{backgroundColor:technology.backgroundColor}}></div>
                        <img src={technology.image} className="w-full "></img>
                    </div>
                    <div className='ml-4'>
                        <p className='font-bold '>{technology.name}</p>
                        <p className='text-xs'>{technology.description}</p>
                    </div>

                </div>
            </a>
        </Link>
    );
}
export default TechCard