import Layout from "@/components/Layout/Layout";
import Register from "@/containers/Register";
import { NextPage } from "next";

const RegisterPage: NextPage = (): JSX.Element => {
  return (
    <Layout headTitle="Register">
      <Register />
    </Layout>
  );
};

export default RegisterPage;
