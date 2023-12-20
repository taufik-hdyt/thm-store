import { Box, Divider } from "@chakra-ui/react";
import Head from "../Head/Head";
import Header from "../Header/Header";
import useScreenSize from "@/utils/screenSize";
import NavbarMobile from "../NavbarMobile/NavbarMobile";
import Footer from "../Footer";

interface IProps {
  children?: React.ReactNode;
  headTitle?: string;
  isNavMobile?: boolean;
}
const Layout: React.FC<IProps> = ({
  children,
  headTitle,
  isNavMobile,
}): JSX.Element => {
  const screenSize = useScreenSize();

  return (
    <Box>
      <Head title={headTitle} />
      <Header />
      <Box px={{ base: 4, md: 20 }} minH="100vh" pt={24} pb={10}>
        {children}
      </Box>
      <Footer />
      {screenSize.width < 768 && isNavMobile && <NavbarMobile />}
    </Box>
  );
};

export default Layout;
