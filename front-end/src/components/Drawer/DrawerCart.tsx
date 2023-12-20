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

interface IProps {
  isOpen: boolean;
  onClose: () => void;
}
const DrawerSideBar: React.FC<IProps> = ({ isOpen, onClose }): JSX.Element => {
  return (
    <Drawer size="md" isOpen={isOpen} placement="right" onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent pt="20">
        <DrawerCloseButton />
        <DrawerHeader>MyCart</DrawerHeader>

        <DrawerBody bg="red" maxH="100vh">
          <Stack>
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />
          </Stack>
        </DrawerBody>
        <DrawerFooter>
          <Stack >
          <Button>Checkout</Button>
          </Stack>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default DrawerSideBar;
