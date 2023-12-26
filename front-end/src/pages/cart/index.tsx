import Layout from "@/components/Layout";
import Cart from "@/containers/Cart";
import { NextPage, NextPageContext } from "next";
import nookies from "nookies"

const CartPage: NextPage = (): JSX.Element => {
  return (
    <Layout isNavMobile headTitle="Cart">
      <Cart />
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
      title: "Cart"
    }
  }
}

export default CartPage;
