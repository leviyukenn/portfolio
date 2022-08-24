import type { NextPage } from "next";
import About from "../src/components/About/About";
import Hero from "../src/components/Hero/Hero";
import Layout from "../src/components/Layout/Layout";
import Projects from "../src/components/Projects/Projects";
import Qualification from "../src/components/Qualification/Qualification";
import TechStack from "../src/components/TechStack/TechStack";

const Home: NextPage = () => {
  return (
    <Layout>
      <Hero></Hero>
      <Projects></Projects>
      <TechStack></TechStack>
      <About></About>
      <Qualification></Qualification>
    </Layout>
  );
};

export default Home;
