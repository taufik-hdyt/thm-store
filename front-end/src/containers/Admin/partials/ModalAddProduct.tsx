import { useHomeAction } from "@/containers/Home/Home.action";
import { IBrand } from "@/interface/brand.interfaces";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  FormLabel,
  FormControl,
  Input,
  Grid,
  Select,
  Textarea,
  InputGroup,
  InputLeftAddon,
} from "@chakra-ui/react";

interface IProps {
  isOpen: boolean;
  onClose: () => void;
}
const ModalAddProduct: React.FC<IProps> = ({
  isOpen,
  onClose,
}): JSX.Element => {
  const { dataBrands } = useHomeAction();
  return (
    <Modal isCentered size="xl" isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Add Product</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Grid gap={3} gridTemplateColumns="1fr 1fr ">
            <FormControl>
              <FormLabel>Product Name</FormLabel>
              <Input name="name" placeholder="Product name" />
            </FormControl>
            <FormControl>
              <FormLabel>Price</FormLabel>
              <Input type="number" placeholder="Price" />
            </FormControl>
            <FormControl>
              <FormLabel>Stock</FormLabel>
              <Input name="stock" type="number" placeholder="Stock" />
            </FormControl>
            <FormControl>
              <FormLabel>Brand</FormLabel>
              <Select>
                {dataBrands?.data.map((data: IBrand, idx: number) => (
                  <option key={idx} value={data.brand_id}>
                    {data.brand_name}
                  </option>
                ))}
              </Select>
            </FormControl>
          </Grid>

          <FormControl>
            <FormLabel>Description</FormLabel>
            <Textarea
              name="description"
              rows={5}
              resize="none"
              placeholder="Description"
            />
          </FormControl>

          <InputGroup mt={3}>
            <InputLeftAddon>Choose</InputLeftAddon>
            <Input type="text" readOnly placeholder="" />
          </InputGroup>
        </ModalBody>

        <ModalFooter>
          <Button
            color="primary"
            borderColor="primary"
            variant="outline"
            mr={3}
            onClick={onClose}
          >
            Close
          </Button>
          <Button bg="primary" color="white">
            Add Product
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ModalAddProduct;
