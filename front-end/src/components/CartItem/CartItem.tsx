import { ICart } from "@/interface/customer.interfaces";
import { formatRupiah } from "@/utils/formatRupiah";
import { Box, HStack, IconButton, Image, Stack, Text } from "@chakra-ui/react";
import { useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { TiMinus, TiPlus } from "react-icons/ti";

interface IProps {
  data?: ICart;
}
const CartItem: React.FC<IProps> = ({ data }): JSX.Element => {
  

  const customStyleTitle: React.CSSProperties = {
    display: "-webkit-box",
    WebkitLineClamp: 1,
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
  };

  const [count, setCount] = useState(1);
  
  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };
  

  return (
    <HStack p={2} border="1px solid #ebebeb" rounded="lg">
      <Image
        minW="80px"
        h="80px"
        src={data?.product.image}
        alt={data?.product.product_name}
      />
      <Box w="full">
        <Text style={customStyleTitle}>{data?.product.product_name}</Text>
        <HStack justify="space-between" pr={4}>
          <Text fontWeight="semibold">{formatRupiah(data?.product.price)}</Text>
          <HStack bg="#ebebeb" w="fit-content">
            <IconButton
              bg="primary"
              color="white"
              size="sm"
              aria-label="icon"
              icon={<TiMinus size={24} />}
              isDisabled={count <= 1}
              onClick={decrement}
            />
            <Text w="20px" fontWeight="semibold" textAlign="center">
              {count}
            </Text>
            <IconButton
              rounded="sm"
              bg="primary"
              color="white"
              size="sm"
              aria-label="icon"
              icon={<TiPlus size={24} />}
              onClick={increment}
            />
          </HStack>
          <RiDeleteBin6Line size={24} color="red" />
        </HStack>
      </Box>
    </HStack>
  );
};

export default CartItem;
