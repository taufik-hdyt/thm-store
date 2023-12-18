import {
  Box,
  Button,
  Grid,
  GridItem,
  HStack,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useParams } from "next/navigation";
import { BsCartPlus } from "react-icons/bs";
import { useDetailProductAction } from "./DetailProduct.action";

const DetailProduct: React.FC = (): JSX.Element => {
  const params = useParams();
  const idParam = Number(params.id);

  const { dataProduct } = useDetailProductAction(idParam);
  

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
          <Image w="full" h="400px" alt="product" src={dataProduct?.image} />
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

            <HStack mt={10}>
              <Button
                bg="secondary"
                color="primary"
                px={10}
                rounded="none"
                leftIcon={<BsCartPlus size={24} />}
                borderColor="primary"
                variant="outline"
              >
                Cart
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
