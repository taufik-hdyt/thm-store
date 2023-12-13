import Layout from "@/components/Layout";
import Profile from "@/containers/Profile";
import { NextPage } from "next";

const ProfilePage: NextPage = (): JSX.Element => {
  return (
    <Layout isNavMobile headTitle="Home">
      <Profile />
    </Layout>
  );
};

export default ProfilePage;
