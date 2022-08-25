import Link from "next/link";
import {
  AiFillGithub
} from "react-icons/ai";
import { DiCssdeck } from "react-icons/di";
import socialUrls from "../../contants/socialUrls";
import NavLink from "./NavLink";
import SocialIcon from "./SocialIcon";

interface HeaderProps {}

const Header = ({}: HeaderProps) => {

  const linkArr = [["Projects","#projects"],["Tech Stack","#tech"],["About","#about"]]
  return (
    <div className="grid grid-cols-[repeat(5,minmax(min-content,1fr))] auto-rows-[60px] gap-2 items-center grid-flow-dense  px-2 pt-3 pb-2">
      <div className="col-span-2 sm:col-span-1">
        <Link href="/">
        <a className="flex items-center">
          <DiCssdeck size="2rem"></DiCssdeck>
          <span>Portfolio</span></a></Link>
      </div>
      <ul className="sm:col-span-2 col-span-full flex justify-center ">
        {
          linkArr.map((value,index) => <li key={value[0] + index}><NavLink href={value[1]} > {value[0]}</NavLink></li>)
        }
      </ul>
      <div className="justify-self-center col-start-5"> 
        <SocialIcon href={socialUrls.github} data-testid="github"><AiFillGithub size="2rem"></AiFillGithub></SocialIcon>
      </div>
    </div>
  );
};
export default Header;
