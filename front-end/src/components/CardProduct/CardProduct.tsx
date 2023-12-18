import { Box, HStack, Image, Stack, Text } from "@chakra-ui/react";
import { FaCartPlus } from "react-icons/fa6";


interface IProps{
  title?: string
  price?: number
  stock?:number
  image?: string
}
const CardProduct: React.FC<IProps> = ({price,stock,title,image}): JSX.Element => {
  const customStyleTitle: React.CSSProperties = {
    display: "-webkit-box",
    WebkitLineClamp: 1,
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
  };
  return (
    <Box
      p={2}
      // w={{ base: "150px", md: "250px" }}
      // h={{ base: "220px", md: "320px" }}
      border="1px solid #ebebeb"
      rounded="lg"
      bg="white"
      boxSizing="border-box"
    >
      <Image
       w="full"
       h="200px"
        rounded="lg"
        src={image}
        alt={title}
      />
      <Text style={customStyleTitle} mt="2" fontWeight="bold">
        {title}
      </Text>
      <HStack justify="space-between">
        <Stack spacing={0}>
          <Text fontSize={{base: 'xs', md: "md"}} fontWeight="semibold" color="#aeaeae">
            Rp {price}
          </Text>
          <Text fontSize="xs" color="#aeaeae">
            Stock : {stock}
          </Text>
        </Stack>
        <Box cursor="pointer">
          <FaCartPlus  color="#39A7FF" size={24} />
        </Box>
      </HStack>
    </Box>
  );
};

export default CardProduct;
