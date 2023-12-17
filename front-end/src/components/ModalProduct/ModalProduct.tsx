import { useHomeAction } from "@/containers/Home/Home.action";
import { useProductAction } from "@/containers/Products/Product.action";
import { useUploadImage } from "@/hooks/useUploadImage";
import { IBrand } from "@/interface/brand.interfaces";
import {
  Button,
  FormControl,
  FormLabel,
  Grid,
  Image,
  Input,
  InputGroup,
  InputLeftAddon,
  InputLeftElement,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Select,
  Stack,
  Text,
  Textarea,
} from "@chakra-ui/react";

interface IProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
}
const ModalProduct: React.FC<IProps> = ({
  isOpen,
  onClose,
  title,
}): JSX.Element => {
  const { handleChooseImage, inputImageRef } = useProductAction();
  const { dataBrands } = useHomeAction();

  const {
    handleChangeImage,
    selectedImageFile,
    setSelectedFile,
    setSelectedImageFile,
    selectedFile
  } = useUploadImage({});

  function handleCloseModal() {
    setSelectedFile("");
    setSelectedImageFile("");
    onClose();
  }

  return (
    <Modal size="2xl" isOpen={isOpen} onClose={handleCloseModal} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{title}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Grid gridTemplateColumns="1fr 1fr" gap={2}>
            <FormControl>
              <FormLabel>Product Name</FormLabel>
              <Input placeholder="input your product" />
            </FormControl>
            <FormControl>
              <FormLabel>Price</FormLabel>
              <InputGroup>
                <InputLeftElement roundedLeft="lg" bg="secondary">
                  <Text fontWeight="semibold">Rp</Text>
                </InputLeftElement>
                <Input type="number" placeholder="Price" />
              </InputGroup>
            </FormControl>
            <FormControl>
              <FormLabel>Stock</FormLabel>
              <Input  type="number" placeholder="Stock" />
            </FormControl>
            <FormControl>
              <FormLabel>Brand</FormLabel>
              <Select>
                {dataBrands?.data.data.map((e: IBrand, idx: number) => (
                  <option key={idx}>{e.brand_name}</option>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <FormControl mt={4}>
            <FormLabel>Description</FormLabel>
            <Textarea rows={5} resize="none" placeholder="add product description" />
          </FormControl>

          {selectedImageFile && (
            <Stack align="center">
              <Image my="4" h="300px" src={selectedImageFile} alt="uploads" />
            </Stack>
          )}
          <FormControl mt="4">
            <FormLabel>Product Image</FormLabel>
            <InputGroup onClick={handleChooseImage} cursor="pointer">
              <InputLeftAddon>
                <Text roundedLeft="xl" bg="secondary">
                {selectedImageFile ? "Change" : "Choose"}
                </Text>
              </InputLeftAddon>
              <Input readOnly placeholder={selectedFile.name} />
              <Input
                onChange={handleChangeImage}
                ref={inputImageRef}
                display="none"
                type="file"
              />
            </InputGroup>
          </FormControl>
        </ModalBody>
        <ModalFooter gap="2">
          <Button onClick={onClose} bg="red" color="white">
            Cancel
          </Button>
          <Button bg="primary" color="white">
            Add Product
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ModalProduct;
