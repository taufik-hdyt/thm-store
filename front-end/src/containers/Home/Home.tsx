"use client";
import CardBrand from "@/components/CardBrand";
import CardProduct from "@/components/CardProduct";
import ImageSlider from "@/components/ImageSlider";
import {
  AbsoluteCenter,
  Box,
  Button,
  Divider,
  Flex,
  HStack,
  IconButton,
  Text,
} from "@chakra-ui/react";
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
  IoIosArrowRoundForward,
} from "react-icons/io";
import { useProductAction } from "../Products/Product.action";
import { useHomeAction } from "./Home.action";
import { IBrand } from "@/interface/brand.interfaces";
import { Loading } from "@/components/LoadingAnimation/loadingAnimation";

const Home: React.FC = (): JSX.Element => {
  const { dataBrands, loadingBrands } = useHomeAction();

  return (
    <Box>
      <Box>
        <ImageSlider />
        <Text
          bg="primary"
          color="white"
          fontWeight="bold"
          px="10"
          w="fit-content"
          fontSize="xl"
          py="2"
          roundedRight="full"
        >
          Product New
        </Text>
        <Box mt={4} bg="primary" rounded="lg">
          <Flex p={3} overflowX="auto" gap={4}>
            <Box w="200px">
              <CardProduct />
            </Box>
          </Flex>
        </Box>

        <Box mt={4} bg="white">
          <HStack justify="space-between">
            <Text
              bg="primary"
              color="white"
              fontWeight="bold"
              px="10"
              w="fit-content"
              fontSize="xl"
              py="2"
              roundedRight="full"
            >
              All Brand
            </Text>
          </HStack>
          <Flex
            p={4}
            overflowX="auto"
            gap={4}
            align="center"
            justify="space-between"
            mt={4}
            rounded="lg"
            border="1px solid #ebebeb"
          >
            <IconButton
              variant="ghost"
              aria-label="left"
              icon={<IoIosArrowDropleftCircle size={35} />}
            />

            <HStack overflowX="auto" >
              {
                loadingBrands && <Loading />
              }
              {dataBrands?.data?.map((data: IBrand,idx: number) => (
                <Box key={idx} >
                  <CardBrand brand={data} />
                </Box>
              ))}

            </HStack>

            <IconButton
              variant="ghost"
              aria-label="left"
              icon={<IoIosArrowDroprightCircle size={35} />}
            />
          </Flex>
        </Box>
      </Box>
    </Box>
  );
};
export default Home;
