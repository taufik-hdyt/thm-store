import Layout from "@/components/Layout";
import DetailProduct from "@/containers/Products/DetailProduct";
import { Text } from "@chakra-ui/react";
import { NextPage, NextPageContext } from "next";
import nookies from "nookies"

const DetailProductPage: NextPage = (): JSX.Element => {
  return (
    <Layout isNavMobile headTitle="Detail Product">
      <DetailProduct />
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
      title: "Detail Product"
    }
  }
}

export default DetailProductPage;
