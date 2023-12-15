"use client";
import CardBrand from "@/components/CardBrand";
import CardProduct from "@/components/CardProduct";
import ImageSlider from "@/components/ImageSlider";
import { useAuth } from "@/hooks/useAuth";
import { IBrand } from "@/interface/brand.interfaces";
import { Box, Flex, Text } from "@chakra-ui/react";
import { useHomeAction } from "./Home.action";

const Home: React.FC = (): JSX.Element => {
  const { user } = useAuth();
  const { dataBrands, isLoading, refetch } = useHomeAction();
  console.log(dataBrands?.data.data);

  return (
    <Box pb={{ base: 20, md: 6 }}>
      <Box px={{ base: 4, md: 10 }}>
        <ImageSlider />
      </Box>

      {/* <Grid gap="4" templateColumns="repeat(auto-fill, minmax(200px, 1fr))">
        </Grid> */}

      <Box>
        <Text
          bg="primary"
          color="white"
          fontWeight="bold"
          px="3"
          w="fit-content"
          ml={{ base: 4, md: 10 }}
          my={6}
          fontSize="lg"
        >
          Products New
        </Text>
        <Flex p={1} mx={{ base: 4, md: 10 }} overflowX="auto" gap={4}>
          {Array.from({ length: 20 }, (_, index) => (
            <Box key={index}>
              <CardProduct />
            </Box>
          ))}
        </Flex>
      </Box>

      <Box mt={8}>
        <Text
          bg="primary"
          color="white"
          fontWeight="bold"
          px="3"
          w="fit-content"
          ml={{ base: 4, md: 10 }}
          my={6}
          fontSize="lg"
        >
          Brands
        </Text>
        <Flex p={1} mx={{ base: 4, md: 10 }} overflowX="auto" gap={4}>
          {dataBrands?.data.data.map((e: IBrand, idx: number) => (
            <Box key={idx}>
              <CardBrand
                imageBrand={e.logo_brand}
                nameBrand={e.brand_name}
              />
            </Box>
          ))}
        </Flex>
      </Box>
    </Box>
  );
};
export default Home;
