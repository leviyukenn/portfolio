import type { NextPage } from "next";
import Hero from "../src/components/Hero/Hero";
import Layout from "../src/components/Layout/Layout";

const Home: NextPage = () => {
  return (
    <Layout>
      <Hero></Hero>
    </Layout>
  );
};

export default Home;
