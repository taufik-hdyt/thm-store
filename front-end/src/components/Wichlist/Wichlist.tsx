import { Divider, HStack, IconButton, Image, Stack, Text } from "@chakra-ui/react";
import { TiMinus, TiPlus } from "react-icons/ti";
import { RiDeleteBin6Line } from "react-icons/ri";

const WichlistItem: React.FC = (): JSX.Element => {
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

      <HStack>
      <Stack>
        <Text style={customStyleTitle}>
          Gitar Cowboy Harga murah dan harga terjangkau
        </Text>
        <HStack justify="space-between" pr={4}>
          <Text fontWeight="semibold">Rp 1.200.000</Text>
        </HStack>

      </Stack>
        <Stack direction="row" h="100px" p={4} align='center'>
          <Divider orientation="vertical" />
          <RiDeleteBin6Line size={30} color="red"  />
        </Stack>
      </HStack>
    </HStack>
  );
};

export default WichlistItem;
