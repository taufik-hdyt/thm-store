import { Box, HStack, Image, Stack, Text } from "@chakra-ui/react";
import { FaCartPlus } from "react-icons/fa6";

const CardProduct: React.FC = (): JSX.Element => {
  const customStyleTitle: React.CSSProperties = {
    display: "-webkit-box",
    WebkitLineClamp: 1,
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
  };
  return (
    <Box
      p={2}
      w={{ base: "150px", md: "250px" }}
      h={{ base: "240px", md: "320px" }}
      border="1px solid #ebebeb"
      rounded="lg"
      bg="white"
      boxSizing="border-box"
    >
      <Image
        bgSize="cover"
        rounded="lg"
        src="https://nyari.id/cdn/shop/products/2_a9c128de-1dc6-4a1c-a024-33a4d457f851_480x480.jpg?v=1593506407"
        alt="produc"
      />
      <Text style={customStyleTitle} mt="2" fontWeight="bold">
        Gitar Akustik Yamaha
      </Text>
      <HStack justify="space-between">
        <Stack spacing={0}>
          <Text fontWeight="semibold" color="#aeaeae">
            Rp 1200.000
          </Text>
          <Text fontSize="xs" color="#aeaeae">
            Stock : 100
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
