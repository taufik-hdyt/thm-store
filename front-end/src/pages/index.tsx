import Layout from "@/components/Layout";
import Home from "@/containers/Home/Home";
import { NextPage, NextPageContext } from "next";
import nookies from 'nookies'

const HomePage: NextPage = (): JSX.Element => {
  return (
    <Layout isNavMobile headTitle="Home">
      <Home />
    </Layout>
  );
};


// export async function getServerSideProps(context:NextPageContext){
//   const cookies = nookies.get(context)
//   if(!cookies.token){
//     return {
//       redirect: {
//         destination: "/login"
//       }
//     }
//   }

//   return {
//     props: {
//       title: "login"
//     }
//   }
// }


export default HomePage;
