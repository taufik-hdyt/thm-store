import { useWishlist } from "@/hooks/useWishlist";
import { IProducts } from "@/interface/product.interface";
import { formatRupiah } from "@/utils/formatRupiah";
import { Box, HStack, IconButton, Image, Stack, Text } from "@chakra-ui/react";
import Link from "next/link";
import { FaRegHeart } from "react-icons/fa6";
import { GoHeartFill } from "react-icons/go";

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

  const { addWishlist, loadingWishlist } = useWishlist();


  return (
    
      <Box
        p={2}
        border="1px solid #ebebeb"
        rounded="lg"
        bg="white"
        boxSizing="border-box"
      >
        <Box pos="relative">
          <Image
            w="full"
            h="170px"
            rounded="lg"
            src={product?.image}
            alt={product?.product_name}
          />
          <IconButton
            pos="absolute"
            top={0}
            right={0}
            size="sm"
            variant="unstyled"
            aria-label="wishlist"
            onClick={()=> addWishlist(product ? product.product_id: 0)}
            icon={<FaRegHeart color="red" size={24} />}
          />
        </Box>
        <Link href={`detail-product/${product?.product_id}`}>
        <Text style={customStyleTitle} mt="2" fontWeight="medium">
          {product?.product_name}
        </Text>
        </Link>
        <HStack justify="space-between">
          <Text
            fontSize={{ base: "xs", md: "md" }}
            fontWeight="medium"
            color="primary"
          >
            {formatRupiah(product?.price)}
          </Text>

          {/* <Box cursor="pointer">
            <FaCartPlus color="#39A7FF" size={24} />
          </Box> */}
          <Text color="gray" fontSize="xs">
            stock: {product?.stock}
          </Text>
        </HStack>
      </Box>
    
  );
};

export default CardProduct;
