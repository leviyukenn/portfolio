import Link from "next/link";
import React from "react";

interface NavLinkProps
  extends React.DetailedHTMLProps<
    React.AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  > {
  href: string;
}

const NavLink = ({ href, children, className, ...props }: NavLinkProps) => {
  return (
    <Link href={href}>
      <a
        className={
          "text-3xl text-zinc-50/75 hover:text-zinc-50/100 cursor-pointer p2" +
          " " +
          className
        }
        {...props}
      >
        {children}
      </a>
    </Link>
  );
};
export default NavLink;
