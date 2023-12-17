import CardProduct from "@/components/CardProduct";
import ModalProduct from "@/components/ModalProduct";
import { useAuth } from "@/hooks/useAuth";
import { IBrand } from "@/interface/brand.interfaces";
import {
  Box,
  Button,
  Flex,
  Grid,
  HStack,
  Input,
  InputGroup,
  InputLeftElement,
  Select,
  useDisclosure,
} from "@chakra-ui/react";
import { CiSearch } from "react-icons/ci";
import { IoIosAddCircle } from "react-icons/io";
import { useHomeAction } from "../Home/Home.action";

const Products: React.FC = (): JSX.Element => {
  const { user } = useAuth();
  const { onClose, onOpen, isOpen } = useDisclosure();
  const { dataBrands } = useHomeAction();

  return (
    <Box mx={{ base: 4, md: 10 }} pb={{ base: 20, md: 6 }}>
      <HStack justify="space-between">
        <HStack w="full">
          <InputGroup>
            <InputLeftElement>
              <CiSearch size={24} />
            </InputLeftElement>
            <Input variant="fill" placeholder="search for items" />
          </InputGroup>
          <Select variant="fill" w="fit-content">
            {dataBrands?.data.data.map((e: IBrand, idx: number) => (
              <option key={idx}>{e.brand_name}</option>
            ))}
          </Select>
          <Button bg="primary" color="white">
            Search
          </Button>
        </HStack>

        {user?.isAdmin && (
          <Button
            color="white"
            bg="primary"
            rightIcon={<IoIosAddCircle size={24} color="white" />}
            onClick={onOpen}
          >
            Add Product
          </Button>
        )}
      </HStack>

      <Grid mt={8} gap={1} templateColumns="repeat(auto-fill, minmax(250px, 1fr))">
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
      </Grid>

      {isOpen && (
        <ModalProduct isOpen={isOpen} onClose={onClose} title="Add Product" />
      )}
    </Box>
  );
};

export default Products;
