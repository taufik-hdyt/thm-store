import Layout from "@/components/Layout";
import Home from "@/containers/Home/Home";
import { NextPage } from "next";

const HomePage: NextPage = (): JSX.Element => {
  return (
    <Layout headTitle="Home">
      <Home />
    </Layout>
  );
};

export default HomePage;
