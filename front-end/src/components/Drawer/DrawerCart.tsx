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
const DrawerCart: React.FC<IProps> = ({ isOpen, onClose }): JSX.Element => {
  return (
    <Drawer size="sm" isOpen={isOpen} placement="right" onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent pt="20">
        <DrawerCloseButton />
        <DrawerHeader>MyCart</DrawerHeader>

        <DrawerBody  maxH="100vh">
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
        <DrawerFooter borderTop="2px solid #ebebeb">
          <Stack align="center" w="full">
            <HStack justify="space-between" w="full">
          <Text>Total</Text>
          <Text>Rp 1.200.000</Text>
            </HStack>
          <Button bg="primary" color="white" w="full">Checkout</Button>
          </Stack>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default DrawerCart;
