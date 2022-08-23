import Link from "next/link";

interface SocialIconProps
  extends React.DetailedHTMLProps<
    React.AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  > {
  href: string;
}

const SocialIcon = ({ href, children, className, ...props }:SocialIconProps) => {
  return (
    <Link href={href}>
      <a
      target="_blank"
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