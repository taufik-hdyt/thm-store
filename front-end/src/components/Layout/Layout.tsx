import { Box } from "@chakra-ui/react";
import Head from "../Head/Head";
import Header from "../Header/Header";
import useScreenSize from "@/utils/screenSize";
import NavbarMobile from "../NavbarMobile/NavbarMobile";

interface IProps {
  children?: React.ReactNode;
  headTitle?: string;
  isNavMobile?: boolean
}
const Layout: React.FC<IProps> = ({ children, headTitle,isNavMobile }): JSX.Element => {
  const screenSize = useScreenSize();


  return (
    <Box>
      <Head title={headTitle} />

      <Box borderBottom="2px solid #d9d5d5" mb={3}>
        <Header />
      </Box>

      {children}

      {/* <Footer /> */}

      {screenSize.width < 768 && isNavMobile &&  <NavbarMobile />}
    </Box>
  );
};

export default Layout;
