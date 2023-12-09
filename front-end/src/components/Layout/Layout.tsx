import { Box, Container } from "@chakra-ui/react";
import Head from "../Head/Head";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

interface IProps {
  children?: React.ReactNode;
  headTitle?: string;
}
const Layout: React.FC<IProps> = ({ children, headTitle }): JSX.Element => {
  return (
    <Box>
      <Head title={headTitle} />

      <Box borderBottom="2px solid #d9d5d5" mb={3}>
        <Header />
      </Box>

      {children}

      {/* <Footer /> */}
    </Box>
  );
};

export default Layout;
