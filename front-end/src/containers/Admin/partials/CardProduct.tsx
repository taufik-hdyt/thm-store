import { useAuth } from "@/hooks/useAuth";
import { IProducts } from "@/interface/product.interface";
import { API } from "@/libs/API";
import { formatRupiah } from "@/utils/formatRupiah";
import { Box, HStack, Image, Stack, Text } from "@chakra-ui/react";
import { useMutation } from "@tanstack/react-query";
import { HiOutlinePencilAlt } from "react-icons/hi";
import { RiDeleteBin6Fill } from "react-icons/ri";

interface IProps {
  product?: IProducts;
}
const CardProductAdmin: React.FC<IProps> = ({ product }): JSX.Element => {
  const customStyleTitle: React.CSSProperties = {
    display: "-webkit-box",
    WebkitLineClamp: 1,
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
  };
  const {token} = useAuth()

  const { mutate: deleteProduct, isPending } = useMutation({
    mutationFn: async (id: number) => {
      const response = await API.delete(`brand/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },

      });

      return response.data;
    },
    onSuccess: ()=> {
      
    }
  });


  return (
    <Box p={2} h="full" border="1px solid #ebebeb" rounded="lg" bg="white">
      <Image
        w="full"
        h="170px"
        rounded="lg"
        src={product?.image}
        alt={product?.product_name}
      />

      <Text style={customStyleTitle} mt="2" fontWeight="medium">
        {product?.product_name}
      </Text>

      <Stack spacing={0}>
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

        <HStack justify="space-between">
          <Text color="gray" fontSize="xs">
            stock: {product?.stock}
          </Text>

          <HStack>
            <HiOutlinePencilAlt cursor="pointer" color="primary" />
            <RiDeleteBin6Fill cursor="pointer" color="red" />
          </HStack>
        </HStack>
      </Stack>
    </Box>
  );
};

export default CardProductAdmin;
