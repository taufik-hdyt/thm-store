import { Box, Image, Text } from "@chakra-ui/react";

const CardProduct: React.FC = (): JSX.Element => {
  return (
    <Box p={2} w={{base: "150px" , md: "250px"}} h={{base: "240px" , md: "320px"}} border="1px solid #ebebeb" rounded="lg">
      <Image
      bgSize="cover"
      rounded="lg"
        src="https://nyari.id/cdn/shop/products/2_a9c128de-1dc6-4a1c-a024-33a4d457f851_480x480.jpg?v=1593506407"
        alt="produc"
      />
      <Text mt="2"fontWeight="bold">Gitar Akustik Yamaha</Text>
      <Text fontWeight="semibold" color="#aeaeae">Rp 1200.000</Text>
    </Box>
  );
};

export default CardProduct;
