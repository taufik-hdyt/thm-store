import { Box, Container, useDisclosure } from "@chakra-ui/react";
import Head from "../Head/Head";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import DrawerSideBar from "../Drawer";

interface IProps {
  children?: React.ReactNode;
  headTitle?: string;
}
const Layout: React.FC<IProps> = ({ children, headTitle }): JSX.Element => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  return (
    <Box>
      <Head title={headTitle} />

      <Box borderBottom="2px solid #d9d5d5" mb={3}>
        <Header onOpenSideBar={onOpen} />
      </Box>

      {children}

      {/* <Footer /> */}

      <DrawerSideBar isOpen={isOpen} onClose={onClose} />
    </Box>
  );
};

export default Layout;
