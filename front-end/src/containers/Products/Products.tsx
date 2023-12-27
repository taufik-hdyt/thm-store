import CardProduct from "@/components/CardProduct";
import { Loading } from "@/components/LoadingAnimation/loadingAnimation";
import { IBrand } from "@/interface/brand.interfaces";
import { IProducts } from "@/interface/product.interface";
import {
  Avatar,
  Box,
  Button,
  Center,
  Grid,
  HStack,
  Input,
  InputGroup,
  InputLeftElement,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Select,
} from "@chakra-ui/react";
import { CiSearch } from "react-icons/ci";
import { useHomeAction } from "../Home/Home.action";
import { useProductAction } from "./Product.action";
import Empty from "@/components/Empty";
import { FaFilter } from "react-icons/fa6";

const Products: React.FC = (): JSX.Element => {
  const { dataBrands } = useHomeAction();
  const { dataProducts, loadingProducts, handleSearch, setSearchQuery,searchResult } =
    useProductAction();

  return (
    <Box mx={{ base: 4, md: 10 }} pb={{ base: 20, md: 6 }}>
      <HStack justify="space-between">
        <HStack w="full">
          <InputGroup>
            <InputLeftElement>
              <CiSearch size={24} />
            </InputLeftElement>
            <Input
              onKeyUp={(e) => {
                if (e.key === "Enter") {
                  handleSearch();
                }
              }}
              onChange={(e) => setSearchQuery(e.target.value)}
              variant="outline"
              placeholder="search for items"
            />
          </InputGroup>
          <Menu>
            <MenuButton>
              <Button borderColor="primary" variant="outline" rightIcon={<FaFilter size={20} color="#39A7FF"  />} color="primary">Filter Brand</Button>
            </MenuButton>
            <MenuList>
              {dataBrands?.data.map((data:IBrand,idx:number)=> (
              <MenuItem icon={<Avatar size="sm" src={data.logo_brand} />} key={idx}>{data.brand_name}</MenuItem>
              ))}
            </MenuList>
          </Menu>
          <Button
            isLoading={loadingProducts}
            onClick={handleSearch}
            bg="primary"
            color="white"
          >
            Search
          </Button>
        </HStack>
      </HStack>

      {loadingProducts && (
        <Center w="full" h="80vh">
          <Loading />
        </Center>
      )}

      {!dataProducts && (
        <Center w="full" h="80vh">
          <Box w="300px">
            <Empty
              image="https://cdn2.vectorstock.com/i/1000x1000/30/21/data-search-not-found-concept-vector-36073021.jpg"
              description="Product Not Found !!!"
            />
          </Box>
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
          lg: "repeat(5,1fr)",
        }}
      >
        {dataProducts?.data.map((e: IProducts, idx: number) => (
          <Box w="full" h="255px" key={idx}>
            <CardProduct product={e} />
          </Box>
        ))}
      </Grid>
    </Box>
  );
};

export default Products;
