import { Box, Image, Text } from "@chakra-ui/react";

const CardProduct: React.FC = (): JSX.Element => {
  return (
    <Box bg="red"p={2}> 
      <Image
      rounded="lg"
        src="https://nyari.id/cdn/shop/products/2_a9c128de-1dc6-4a1c-a024-33a4d457f851_480x480.jpg?v=1593506407"
        alt="produc"
      />
      <Text mt="2"fontWeight="bold">Gitar Akustik Yamaha</Text>
    </Box>
  );
};

export default CardProduct;
