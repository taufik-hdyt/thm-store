"use client";
import CardBrand from "@/components/CardBrand";
import CardProduct from "@/components/CardProduct";
import ImageSlider from "@/components/ImageSlider";
import { useAuth } from "@/hooks/useAuth";
import { IBrand } from "@/interface/brand.interfaces";
import { IProducts } from "@/interface/product.interface";
import {
  Box,
  Button,
  Center,
  Flex,
  HStack,
  Spinner,
  Text,
} from "@chakra-ui/react";
import { IoIosAddCircle } from "react-icons/io";
import { useProductAction } from "../Products/Product.action";
import { useHomeAction } from "./Home.action";
import { ModalAddBrand } from "./Partials";
import Lottie from "lottie-react";
import loadingAnimation from "../../../public/loading.json";

const Home: React.FC = (): JSX.Element => {
  const { user } = useAuth();
  const { dataBrands, isOpen, onClose, onOpen, loadingBrands } =
    useHomeAction();
  const { dataProducts, loadingProducts } = useProductAction();

  return (
    <Box pb={{ base: 20, md: 6 }}>
      <Box px={{ base: 4, md: 10 }}>
        <ImageSlider />
      </Box>

      {/* <Grid gap="4" templateColumns="repeat(auto-fill, minmax(200px, 1fr))">
        </Grid> */}

      <Box p={3} bg="white" rounded="lg" mx={{ base: 4, md: 10 }}>
        <Text
          bg="primary"
          color="white"
          fontWeight="bold"
          px="3"
          w="fit-content"
          fontSize="lg"
          py="1"
        >
          Products New
        </Text>

        <Flex mt={4} p={1} overflowX="auto" gap={4}>
          {loadingBrands && (
            <Center w="full">
              <Lottie
                animationData={loadingAnimation}
                autoPlay={true}
                loop={true}
                style={{ width: 100 }}
              />
            </Center>
          )}

          {dataProducts?.data.map((e: IProducts, idx: number) => (
            <Box key={idx}>
              <Box w="230px">
                <CardProduct
                  image={e.image}
                  price={e.price}
                  stock={e.stock}
                  title={e.product_name}
                  id={e.product_id}
                />
              </Box>
            </Box>
          ))}
        </Flex>
      </Box>

      <Box mt={4} p={3} bg="white" rounded="lg" mx={{ base: 4, md: 10 }}>
        <HStack justify="space-between">
          <Text
            bg="primary"
            color="white"
            fontWeight="bold"
            px="3"
            w="fit-content"
            fontSize="lg"
            py="1"
          >
            Brands
          </Text>
          {user?.isAdmin && (
            <Button
              size="sm"
              color="white"
              bg="primary"
              rightIcon={<IoIosAddCircle size={24} color="white" />}
              onClick={onOpen}
              rounded="none"
            >
              Add Brand
            </Button>
          )}
        </HStack>
        <Flex mt={4} p={1} overflowX="auto" gap={4}>
        {loadingBrands && (
            <Center w="full">
              <Lottie
                animationData={loadingAnimation}
                autoPlay={true}
                loop={true}
                style={{ width: 100 }}
              />
            </Center>
          )}
          {dataBrands?.data.data.map((e: IBrand, idx: number) => (
            <Box key={idx}>
              <CardBrand
                id={e.brand_id}
                imageBrand={e.logo_brand}
                nameBrand={e.brand_name}
              />
            </Box>
          ))}
        </Flex>
      </Box>

      <ModalAddBrand title="Add Brand" isOpen={isOpen} onClose={onClose} />
    </Box>
  );
};
export default Home;
