import NavLink from "./NavLink";

interface HeaderProps {}

const Header = ({}: HeaderProps) => {
  return (
    <div className="">
      <NavLink className="bg" href="#projects">
        Projects
      </NavLink>
      {/* <Title></Title>
      <div>
        <li>
          <Link href="#projects">
            <NavLink>Projects</NavLink>
          </Link>
        </li>
        <li>
          <Link href="#tech">
            <NavLink>Technologies</NavLink>
          </Link>
        </li>
        <li>
          <Link href="#projects">
            <NavLink>About</NavLink>
          </Link>
        </li>
      </div> */}
      {/* <SocialDetails></SocialDetails> */}
    </div>
  );
};
export default Header;
