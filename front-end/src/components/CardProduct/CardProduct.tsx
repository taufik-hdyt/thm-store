import { IProducts } from "@/interface/product.interface";
import { Box, HStack, Image, Stack, Text } from "@chakra-ui/react";
import Link from "next/link";
import { FaCartPlus } from "react-icons/fa6";

interface IProps {
  product?: IProducts;
}
const CardProduct: React.FC<IProps> = ({ product }): JSX.Element => {
  const customStyleTitle: React.CSSProperties = {
    display: "-webkit-box",
    WebkitLineClamp: 1,
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
  };
  return (
    <Link href={`detail-product/1`}>
      <Box
        p={2}
        border="1px solid #ebebeb"
        rounded="lg"
        bg="white"
        boxSizing="border-box"
      >
        <Image
          w="full"
          h="170px"
          rounded="lg"
          src="https://mandalikamusic.com/cdn/shop/products/DTS-02samping_1024x1024.jpg?v=1644046849"
          alt="gitar"
        />
        <Text style={customStyleTitle} mt="2" fontWeight="medium">
          Gitar Cowboy
        </Text>
        <HStack justify="space-between">
          <Text
            fontSize={{ base: "xs", md: "md" }}
            fontWeight="medium"
            color="primary"
          >
            Rp 1.200.000
          </Text>

          <Box cursor="pointer">
            <FaCartPlus color="#39A7FF" size={24} />
          </Box>
        </HStack>
      </Box>
    </Link>
  );
};

export default CardProduct;
