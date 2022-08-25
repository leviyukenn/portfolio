import Link from "next/link";
import { myEmail } from "../../contants/email";
import Section from "../Section/Section";

interface FooterProps {}

const Footer = ({}: FooterProps) => {
  return (
    <Section>
      <div className="border-t-2 border-gray-500 py-8">
        <div className="flex flex-col max-w-[220px] w-full ">
          <div className="text-xs uppercase text-white/40 mb-4 font-semibold">
            E-MAIL
          </div>
          <Link href={`mailto:${myEmail}`}>
            <a className="stat-value text-white/75 relative left-0 text-xs transition-all duration-300 ease-out hover:left-2 hover:text-white ">
              {myEmail}
            </a>
          </Link>
        </div>
      </div>
      <p className="text-white/50 min-w-[280px] tracking-wide text-center">© Copyright 2022 | Junyu Yu</p>
    </Section>
  );
};
export default Footer;
