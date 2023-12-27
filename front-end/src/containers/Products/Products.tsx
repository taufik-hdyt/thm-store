import CardProduct from "@/components/CardProduct";
import { Loading } from "@/components/LoadingAnimation/loadingAnimation";
import { IBrand } from "@/interface/brand.interfaces";
import { IProducts } from "@/interface/product.interface";
import {
  Box,
  Button,
  Center,
  Grid,
  HStack,
  Input,
  InputGroup,
  InputLeftElement,
  Select
} from "@chakra-ui/react";
import { CiSearch } from "react-icons/ci";
import { useHomeAction } from "../Home/Home.action";
import { useProductAction } from "./Product.action";

const Products: React.FC = (): JSX.Element => {
  const { dataBrands } = useHomeAction();
  const { dataProducts, loadingProducts } = useProductAction();

  return (
    <Box mx={{ base: 4, md: 10 }} pb={{ base: 20, md: 6 }}>
      <HStack justify="space-between">
        <HStack w="full">
          <InputGroup>
            <InputLeftElement>
              <CiSearch size={24} />
            </InputLeftElement>
            <Input variant="outline" placeholder="search for items" />
          </InputGroup>
          <Button bg="primary" color="white">
            Search
          </Button>
        </HStack>

      </HStack>

      {loadingProducts && (
          <Center w="full" h="80vh" >
            <Loading />
          </Center>
        )}

      <Grid
        mt={8}
        gap="2"
        // templateColumns="repeat(auto-fill, minmax(250px, 1fr))"
        gridTemplateColumns={{
          base: "1fr 1fr",
          sm: "1fr 1fr 1fr",
          md: "1fr 1fr 1fr 1fr",
          lg: "1fr 1fr 1fr 1fr 1fr 1fr",
        }}
      >
       
        {dataProducts?.data.map((e: IProducts, idx: number) => (
          <Box w="full" key={idx} >
            <CardProduct product={e}
            />
          </Box>
        ))}
      </Grid>
    </Box>
  );
};

export default Products;
