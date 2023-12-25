import {
  Box,
  Button,
  Grid,
  GridItem,
  HStack,
  Heading,
  IconButton,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useParams } from "next/navigation";
import { BsCartPlus } from "react-icons/bs";
import { useDetailProductAction } from "./DetailProduct.action";
import { GoHeartFill } from "react-icons/go";
import { formatRupiah } from "@/utils/formatRupiah";
import { useState } from "react";
import { FaInfoCircle } from "react-icons/fa";
import { useAuth } from "@/hooks/useAuth";
import { useWishlist } from "@/hooks/useWishlist";

const DetailProduct: React.FC = (): JSX.Element => {
  const params = useParams();
  const idParam = Number(params.id);
  const {getProfile} = useAuth()
  const [qty, setQty] = useState(1);
  const [message, setMessage] = useState("");
  const [check, setCheck] = useState<boolean>(false);

  const { dataProduct ,cartMutation,loadingCart} = useDetailProductAction(idParam);
  let messageQtyResponse = "";
  function handleIncrement() {
    if ((dataProduct ? dataProduct.stock : 0) <= qty) {
      setMessage(`Maximum Order ${dataProduct?.stock}`);
      setCheck(false);
      return;
    }
    setQty(qty + 1);
    setCheck(true);
  }

  console.log(messageQtyResponse);

  function handleDecrement() {
    if (qty <= 1) {
      setMessage("Minimum order 1");
      setCheck(false);
      return;
    }
    setQty(qty - 1);
    setCheck(true);
  }

  const handleAddCart = ()=> {
     cartMutation({
      quantity: qty
    })
  }

  const { addWishlist, loadingWishlist } = useWishlist();

  return (
    <Box px={10}>
      <Text>{`Brand > ${dataProduct?.brand?.brand_name} > ${dataProduct?.product_name}`}</Text>
      <Grid
        rounded="md"
        p={8}
        mt={4}
        bg="white"
        gridTemplateColumns={{ base: "1fr", md: "400px 1fr" }}
      >
        <GridItem>
          <Box pos="relative">
            <Image w="full" h="400px" alt="product" src={dataProduct?.image} />
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
        <GridItem>
          <Stack p={6}>
            <Text fontSize="xl" fontWeight="semibold">
              {dataProduct?.product_name}
            </Text>
            {/* <Text fontSize="lg" fontWeight="bold" color="primary" bg="rgba(0,0,0,.02)" p={4}>Price : Rp 1200.000</Text> */}
            <Stack>
              <Text>Description</Text>
              <Text fontSize="lg" bg="rgba(0,0,0,.02)" p={4}>
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

              <HStack spacing={4}>
                <Text>Subtotal</Text>
                <Text fontWeight="semibold" fontSize="xl">
                  {formatRupiah(dataProduct?.price ? dataProduct.price * 1 : 0)}
                </Text>
              </HStack>
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
                px={10}
                rounded="none"
                leftIcon={<BsCartPlus size={24} />}
                borderColor="primary"
                variant="outline"
                onClick={handleAddCart}
                isLoading={loadingCart}
              >
                Add To Cart
              </Button>
              <Button px={14} rounded="none" bg="primary" color="white">
                Checkout
              </Button>
            </HStack>
          </Stack>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default DetailProduct;
