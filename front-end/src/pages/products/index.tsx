import Layout from "@/components/Layout";
import Products from "@/containers/Products";
import { NextPage } from "next";

const ProductPage: NextPage = (): JSX.Element => {
  return (
    <Layout isNavMobile headTitle="Products">
      <Products />
    </Layout>
  );
};

export default ProductPage;
