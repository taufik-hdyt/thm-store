import {
    Button,
    Drawer,
    DrawerBody,
    DrawerCloseButton,
    DrawerContent,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    HStack,
    IconButton,
    Image,
    Stack,
    Text,
  } from "@chakra-ui/react";
  import CartItem from "../CartItem";
import WichlistItem from "../Wichlist";
  
  interface IProps {
    isOpen: boolean;
    onClose: () => void;
  }
  const DrawerWichlist: React.FC<IProps> = ({ isOpen, onClose }): JSX.Element => {
    return (
      <Drawer size="sm" isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent pt="20">
          <DrawerCloseButton />
          <DrawerHeader>Wichlist</DrawerHeader>
  
          <DrawerBody  maxH="100vh">
            <Stack>
             <WichlistItem />
             <WichlistItem />
             <WichlistItem />
             <WichlistItem />
             <WichlistItem />
             <WichlistItem />
             <WichlistItem />
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    );
  };
  
  export default DrawerWichlist;
  