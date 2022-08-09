import Link from "next/link";

interface SocialIconProps
  extends React.DetailedHTMLProps<
    React.AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  > {
  href: string;
}
// export const SocialIcons = styled.a`
// transition: 0.3s ease;
// color: white;
// border-radius: 50px;
//   padding: 8px;
// &:hover {
//     background-color: #212d45;
//     transform: scale(1.2);
//     cursor: pointer;
    
//   }
// `
const SocialIcon = ({ href, children, className, ...props }:SocialIconProps) => {
  return (
    <Link href={href}>
      <a
        className={
          "ease-in text-white rounded-full p-1 hover:bg-[#212d45]  hover:scale-125 cursor-pointer flex items-center" +
          (className?" " +
          className:"")
        }
        {...props}
      >
        {children}
      </a>
    </Link>
  );
}
export default SocialIcon