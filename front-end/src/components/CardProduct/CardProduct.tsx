import { Box, HStack, Image, Stack, Text } from "@chakra-ui/react";
import Link from "next/link";
import { FaCartPlus } from "react-icons/fa6";


interface IProps{
  title?: string
  price?: number
  stock?:number
  image?: string
  id?:number
}
const CardProduct: React.FC<IProps> = ({price,stock,title,image,id}): JSX.Element => {
  const customStyleTitle: React.CSSProperties = {
    display: "-webkit-box",
    WebkitLineClamp: 1,
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
  };
  return (
    <Link href={`detail-product/${id}`}>
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
      <Text  style={customStyleTitle} mt="2" fontWeight="medium">
        {title}
      </Text>
      <HStack justify="space-between" >
        
          <Text fontSize={{base: 'xs', md: "md"}} fontWeight="medium" color="primary">
            Rp {price}
          </Text>

          <Text fontSize="xs" color="gray">
            10 Sold
          </Text>
{/*         
        <Box cursor="pointer">
          <FaCartPlus  color="black" size={24} />
        </Box> */}
      </HStack>
    </Box>
    </Link>
  );
};

export default CardProduct;
