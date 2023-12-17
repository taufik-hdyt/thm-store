import { useProductAction } from "@/containers/Products/Product.action";
import { useUploadImage } from "@/hooks/useUploadImage";
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
  Text
} from "@chakra-ui/react";
import { useHomeAction } from "../Home.action";
import { useFormik } from "formik";
import { useEffect } from "react";

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
  const {addBrand,loadingCreateBrand,isSuccess}= useHomeAction()

  const {
    handleChangeImage,
    selectedImageFile,
    setSelectedFile,
    setSelectedImageFile,
    selectedFile,
    uploadImage,
    loadingUploadImage,
  } = useUploadImage({
    onError: (err)=> {
      console.log(err);
    },
    onSuccess: (res)=>{
      addBrand({
        brand_name: formik.values.brand_name,
        brand_logos: res.url
      })
      
      
    }
  });

  const formik = useFormik({
    initialValues: {
      brand_name: ""
    },
    onSubmit: ()=> {
      uploadImage()
    }
  })

  const handleForm = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { target } = event;
    formik.setFieldValue(target.name, target.value);
  };



  function handleCloseModal() {
    setSelectedFile("");
    setSelectedImageFile("");
    onClose();
  }

  useEffect(()=> {
    if(isSuccess){
      onClose()
    }
  },[isSuccess])

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
            onClick={()=>formik.handleSubmit()}
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
