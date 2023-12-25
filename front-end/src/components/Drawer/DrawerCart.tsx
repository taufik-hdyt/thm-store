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
  Stack,
  Text,
} from "@chakra-ui/react";
import CartItem from "../CartItem";
import { useAuth } from "@/hooks/useAuth";
import { ICart } from "@/interface/customer.interfaces";
import { formatRupiah } from "@/utils/formatRupiah";
import { useEffect, useState } from "react";

interface IProps {
  isOpen: boolean;
  onClose: () => void;
}
const DrawerCart: React.FC<IProps> = ({ isOpen, onClose }): JSX.Element => {
  const { user,getProfile } = useAuth();

  const [totalPrice, setTotalPrice] = useState(0);

  const calculateTotalPrice = () => {
    let total = 0;
    user?.cart.forEach((item: ICart) => {
      total += item.product.price * item.quantity;
    });
    setTotalPrice(total);
    getProfile()
  };

  useEffect(() => {
    calculateTotalPrice();
  }, []);

  

  return (
    <Drawer size="sm" isOpen={isOpen} placement="right" onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent pt="20">
        <DrawerCloseButton />
        <DrawerHeader>MyCart</DrawerHeader>

        <DrawerBody maxH="100vh">
          <Stack>
            {user?.cart.map((data: ICart, idx: number) => (
              <CartItem key={idx} data={data} />
            ))}
          </Stack>
        </DrawerBody>
        <DrawerFooter borderTop="2px solid #ebebeb">
          <Stack align="center" w="full">
            <HStack justify="space-between" w="full">
              <Text fontWeight="bold">Total</Text>
              <Text fontWeight="semibold">{formatRupiah(totalPrice)}</Text>
            </HStack>
            <Button bg="primary" color="white" w="full">
              Checkout
            </Button>
          </Stack>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default DrawerCart;
