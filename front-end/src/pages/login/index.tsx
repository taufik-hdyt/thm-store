import Layout from "@/components/Layout/Layout";
import Login from "@/containers/Login";
import { NextPage } from "next";

const LoginPage: NextPage = (): JSX.Element => {
  return (
    <Layout headTitle="Login">
      <Login />
    </Layout>
  );
};

export default LoginPage;
