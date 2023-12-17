import Layout from "@/components/Layout";
import DetailProduct from "@/containers/Products/DetailProduct";
import { Text } from "@chakra-ui/react";
import { NextPage } from "next";

const DetailProductPage: NextPage = (): JSX.Element => {
  return (
    <Layout isNavMobile headTitle="Detail Product">
      <DetailProduct />
    </Layout>
  );
};

export default DetailProductPage;
