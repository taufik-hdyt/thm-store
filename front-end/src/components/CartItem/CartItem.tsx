
import { HStack, IconButton, Image, Stack, Text } from "@chakra-ui/react";
import { useState } from "react";
import { TiMinus, TiPlus } from "react-icons/ti";


const CartItem: React.FC = ():JSX.Element => {

 
 
 
    const [count, setCount] = useState(1);
    const incrementCount = () => {
      setCount(count + 1);
    };
  
    const decrementCount = () => {
      setCount(count - 1);
    };
  
    const customStyleTitle: React.CSSProperties = {
        display: "-webkit-box",
        WebkitLineClamp: 1,
        WebkitBoxOrient: "vertical",
        overflow: "hidden",
      };
    


    return (
        <HStack border="1px solid #ebebeb" rounded="lg">
        <Image
          w="80px"
          h="80px"
          src="https://mandalikamusic.com/cdn/shop/products/DTS-02samping_1024x1024.jpg?v=1644046849"
          alt="products"
        />
        <Stack>
          <Text style={customStyleTitle}>
            Gitar Cowboy Harga murah dan harga terjangkau
          </Text>
          <HStack justify="space-between" pr={4}>
            <Text fontWeight="semibold">Rp 1.200.000</Text>
            <HStack bg="#ebebeb" w="fit-content">
              <IconButton
                bg="primary"
                color="white"
                size="sm"
                aria-label="icon"
                icon={<TiMinus size={24} />}
                isDisabled={count <= 1}
                onClick={decrementCount}
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
                onClick={incrementCount}
                
              />
            </HStack>
          </HStack>
        </Stack>
      </HStack>
    )
}

export default CartItem