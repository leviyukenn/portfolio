import Link from "next/link";
import React from "react";
import { DiCssdeck } from "react-icons/di";

interface TitleProps {}

const Title = ({}: TitleProps) => {
  return (
    <div>
      <Link href="/">
        <a
          style={{
            display: "flex",
            alignItems: "center",
            color: "white",
            marginBottom: "10px",
          }}
        >
          <DiCssdeck size="3rem"></DiCssdeck>
          <span>Portfolio</span>
        </a>
      </Link>
    </div>
  );
};
export default Title;
