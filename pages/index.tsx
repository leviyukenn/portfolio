import type { NextPage } from "next";
import Header from "../src/components/Header/Header";

const Home: NextPage = () => {
  return (
    <div className="p-10">
      <Header></Header>
    </div>
  );
};

export default Home;
