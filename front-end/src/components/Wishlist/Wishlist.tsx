import { Divider, HStack, IconButton, Image, Stack, Text } from "@chakra-ui/react";
import { TiMinus, TiPlus } from "react-icons/ti";
import { RiDeleteBin6Line } from "react-icons/ri";
import { IWishlist } from "@/interface/customer.interfaces";
import { formatRupiah } from "@/utils/formatRupiah";

interface IProps{
  data?: IWishlist
}
const WichlistItem: React.FC<IProps> = ({data}): JSX.Element => {
  const customStyleTitle: React.CSSProperties = {
    display: "-webkit-box",
    WebkitLineClamp: 1,
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
  };

  return (
    <HStack border="1px solid #ebebeb" justify="space-between" rounded="lg">

      <HStack>
      <Image
        w="80px"
        h="80px"
        src="https://mandalikamusic.com/cdn/shop/products/DTS-02samping_1024x1024.jpg?v=1644046849"
        alt="products"
      />
      <Stack>
        <Text style={customStyleTitle}>
          {data?.product.product_name}
        </Text>
        <HStack justify="space-between" pr={4}>
          <Text fontWeight="semibold">{formatRupiah(data ? data.product.price: 0)}</Text>
        </HStack>

      </Stack>
      </HStack>
        <Stack direction="row" h="100px" p={4} align='center'>
          <Divider orientation="vertical" />
          <RiDeleteBin6Line size={30} color="red"  />
        </Stack>
    </HStack>
  );
};

export default WichlistItem;
