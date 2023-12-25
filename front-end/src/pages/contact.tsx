import Layout from "@/components/Layout";
import Contact from "@/containers/Contact";
import { NextPage, NextPageContext } from "next";
import nookies from 'nookies';

const ContactPage: NextPage = (): JSX.Element => {
  return (
    <Layout isNavMobile headTitle="Contact">
      <Contact />
    </Layout>
  );
};


export async function getServerSideProps(context:NextPageContext){
  const cookies = nookies.get(context)
  if(!cookies.token){
    return {
      redirect: {
        destination: "/login"
      }
    }
  }

  return {
    props: {
      title: "Contact"
    }
  }
}


export default ContactPage;
