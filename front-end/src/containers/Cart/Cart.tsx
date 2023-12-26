import { useAuth } from "@/hooks/useAuth";
import { useCart } from "@/hooks/useCart";
import { ICart } from "@/interface/customer.interfaces";
import { formatRupiah } from "@/utils/formatRupiah";
import {
  Box,
  Button,
  Card,
  Grid,
  HStack,
  IconButton,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { TiMinus, TiPlus } from "react-icons/ti";
import CartItem from "./partials/CartItem";

const Cart: React.FC = (): JSX.Element => {
  const { user, getProfile } = useAuth();
 

  const [totalPrice, setTotalPrice] = useState(0);

  const totalQuantity = user?.cart.reduce(
    (total, currentItem) => total + currentItem.quantity,
    0
  );

  const calculateTotalPrice = () => {
    let total = 0;
    user?.cart.forEach((item: ICart) => {
      total += item.product.price * item.quantity;
    });
    setTotalPrice(total);

    getProfile();
  };

  useEffect(() => {
    calculateTotalPrice();
  }, [user]);

  

  return (
    <>
      <Text
        pb={3}
        borderBottom="2px solid #ebebeb"
        fontSize="xl"
        fontWeight="semibold"
      >
        Cart
      </Text>
      <Grid gridTemplateColumns={{base: "1fr", md:"1fr auto"}} gap={6}>
        <Box h={{base: "fit-content", md: "100vh"}} overflowY="auto">
          <Stack mt={6}>
            {user?.cart.map((data: ICart, idx: number) => (
              <CartItem key={idx} data={data} />
            ))}
          </Stack>
        </Box>

        {/* =============================== shopping sumary ========================= */}

        <Card mt={6} p={3} h="fit-content">
          <Text fontWeight="semibold">Shopping summary</Text>

          <HStack
            justify="space-between"
            borderBottom="2px solid #ebebeb"
            pb="3"
          >
            <Text fontSize="sm" fontWeight="semibold" color="gray" mt={3}>
              Total Price ({totalQuantity} items)
            </Text>
            <Text fontSize="sm" fontWeight="semibold" color="gray" mt={3}>
              {formatRupiah(totalPrice)}
            </Text>
          </HStack>

          {/* <HStack justify="space-between">
      <Text  fontWeight="semibold" mt={3} >Total Price</Text>
      <Text  fontWeight="semibold" mt={3} >Rp 225.000</Text>
      </HStack> */}

          <Button bg="primary" color="white" mt={4}>
            Buy
          </Button>
        </Card>
      </Grid>
    </>
  );
};

export default Cart;
