import Layout from "@/components/Layout";
import Products from "@/containers/Products";
import { NextPage, NextPageContext } from "next";
import nookies from 'nookies'

const ProductPage: NextPage = (): JSX.Element => {
  return (
    <Layout isNavMobile headTitle="Products">
      <Products />
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
      title: "Products"
    }
  }
}

export default ProductPage;
