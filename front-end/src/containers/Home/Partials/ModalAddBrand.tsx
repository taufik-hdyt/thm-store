import { useProductAction } from "@/containers/Products/Product.action";
import {
  Button,
  FormControl,
  FormLabel,
  Image,
  Input,
  InputGroup,
  InputLeftAddon,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { useHomeAction } from "../Home.action";

interface IProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
}
const ModalAddBrand: React.FC<IProps> = ({
  isOpen,
  onClose,
  title,
}): JSX.Element => {
  const { handleChooseImage, inputImageRef } = useProductAction();
  const {
    loadingCreateBrand,
    isSuccess,
    formik,
    handleChangeImage,
    handleForm,
    selectedFile,
    setSelectedFile,
    selectedImageFile,
    setSelectedImageFile,
    loadingUploadImage,
  } = useHomeAction();

  function handleCloseModal() {
    setSelectedFile("");
    setSelectedImageFile("");
    onClose();
  }

  useEffect(() => {
    if (isSuccess) {
      onClose();
    }
  }, [isSuccess]);

  return (
    <Modal size="lg" isOpen={isOpen} onClose={handleCloseModal} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{title}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <FormControl mt={4}>
            <FormLabel>Brand Name</FormLabel>
            <Input
              onChange={handleForm}
              name="brand_name"
              placeholder="Input your brand"
            />
          </FormControl>

          {selectedImageFile && (
            <Stack align="center">
              <Image
                my="4"
                h="200px"
                w="200px"
                src={selectedImageFile}
                alt="uploads"
              />
            </Stack>
          )}
          <FormControl mt="4">
            <FormLabel>Brand Logo</FormLabel>
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
                name="image"
              />
            </InputGroup>
          </FormControl>
        </ModalBody>
        <ModalFooter gap="2">
          <Button onClick={handleCloseModal} bg="red" color="white">
            Cancel
          </Button>
          <Button
            isLoading={loadingUploadImage || loadingCreateBrand}
            onClick={() => formik.handleSubmit()}
            bg="primary"
            color="white"
          >
            Add Brand
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ModalAddBrand;
