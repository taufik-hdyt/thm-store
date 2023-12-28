import { useWishlist } from "@/hooks/useWishlist";
import { formatRupiah } from "@/utils/formatRupiah";
import {
  Box,
  Button,
  Grid,
  GridItem,
  HStack,
  IconButton,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Stack,
  Text
} from "@chakra-ui/react";
import { useParams } from "next/navigation";
import { useState } from "react";
import { BsCartPlus } from "react-icons/bs";
import { FaInfoCircle } from "react-icons/fa";
import { GoHeartFill } from "react-icons/go";
import { useDetailProductAction } from "./DetailProduct.action";

const DetailProduct: React.FC = (): JSX.Element => {
  const params = useParams();
  const idParam = Number(params.id);

  const [qty, setQty] = useState(1);
  const [message, setMessage] = useState("");
  const [check, setCheck] = useState<boolean>(false);

  const { dataProduct ,cartMutation,loadingCart} = useDetailProductAction(idParam);

  function handleIncrement() {
    if ((dataProduct ? dataProduct.stock : 0) <= qty) {
      setMessage(`Maximum Order ${dataProduct?.stock}`);
      setCheck(false);
      return;
    }
    setQty(qty + 1);
    setCheck(true);
  }

  function handleDecrement() {
    if (qty <= 1) {
      setMessage("Minimum order 1");
      setCheck(false);
      return;
    }
    setQty(qty - 1);
    setCheck(true);
  }


  const { addWishlist, loadingWishlist } = useWishlist();

  return (
    <Box px={{base: 1,md:10}}>
      <Text>{`Brand > ${dataProduct?.brand?.brand_name} > ${dataProduct?.product_name}`}</Text>
      <Grid
        rounded="md"
        p={{base: 0, md:8}}
        mt={4}
        bg="white"
        gridTemplateColumns={{ base: "1fr", md: "400px 1fr" }}
      >
        <GridItem>  
          <Box pos="relative">
            <Image w="full" alt="product" src={dataProduct?.image} />
            <IconButton
              pos="absolute"
              top={0}
              right={0}
              size="sm"
              variant="unstyled"
              onClick={()=> addWishlist(dataProduct ? dataProduct.product_id : 0)}
              aria-label="wishlist"
              icon={<GoHeartFill color="white" size={24} />}
            />
          </Box>
        </GridItem>
        <GridItem >
          <Stack p={{base: 2, md:6}}>
            <Text fontSize="xl" fontWeight="semibold">
              {dataProduct?.product_name}
            </Text>
            {/* <Text fontSize="lg" fontWeight="bold" color="primary" bg="rgba(0,0,0,.02)" p={4}>Price : Rp 1200.000</Text> */}
            <Stack>
              <Text>Description</Text>
              <Text fontSize="lg" bg="rgba(0,0,0,.02)" p={{base:2,md:4}}>
                {dataProduct?.description}
              </Text>

              <Text color="gray">Stock : {dataProduct?.stock}</Text>
            </Stack>

            <HStack spacing={6}>
              <InputGroup w="100px" size="sm">
                <InputLeftElement
                  roundedLeft="lg"
                  // color="white"
                  // bg="primary"
                  fontSize="xl"
                  fontWeight="semibold"
                  onClick={handleDecrement}
                  cursor="pointer"
                >
                  -
                </InputLeftElement>
                <Input value={qty} textAlign="center" type="number" />
                <InputRightElement
                  roundedRight="lg"
                  // color="white"
                  // bg="primary"
                  fontSize="xl"
                  fontWeight="semibold"
                  onClick={handleIncrement}
                  cursor="pointer"
                >
                  +
                </InputRightElement>
              </InputGroup>

              
                <Text fontWeight="semibold" fontSize="xl">
                  {formatRupiah(dataProduct?.price ? dataProduct.price * 1 : 0)}
                </Text>
              
            </HStack>
            {message !== "" && !check && (
              <Text gap="2" color="red" display="flex" align="center">
                <FaInfoCircle size={24} /> {message}
              </Text>
            )}

            <HStack mt={6}>
              <Button
                bg="secondary"
                color="primary"
                px={{base:4, md:10}}
                rounded="none"
                leftIcon={<BsCartPlus size={24} />}
                borderColor="primary"
                variant="outline"
                onClick={()=> cartMutation({
                  quantity:qty
                })}
                isLoading={loadingCart}
              >
                Add To Cart
              </Button>
              <Button
              px={{base:"4", md:14}}
              rounded="none" bg="primary" color="white">
                Buy Now
              </Button>
            </HStack>
          </Stack>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default DetailProduct;
