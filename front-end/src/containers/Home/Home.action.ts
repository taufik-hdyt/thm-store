import { useAuth } from "@/hooks/useAuth";
import { useUploadImage } from "@/hooks/useUploadImage";
import { ICreateBrand } from "@/interface/brand.interfaces";
import { API } from "@/libs/API";
import { useDisclosure, useToast } from "@chakra-ui/react";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useFormik } from "formik";

export const useHomeAction = () => {
  const { token } = useAuth();
  const toast = useToast();
  const { isOpen, onClose, onOpen } = useDisclosure();

  // DATA  BRANDS
  const {
    data: dataBrands,
    isLoading: loadingBrands,
    refetch: refetchBrands,
  } = useQuery({
    queryKey: ["brands"],
    queryFn: async () => {
      const response = await API.get("/brands", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response;
    },
  });


  const {
    mutate: addBrand,
    isPending: loadingCreateBrand,
    isSuccess,
  } = useMutation({
    mutationFn: async (body: ICreateBrand) => {
      const response = await API.post("/brand", body, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    },
    onSuccess: (res) => {
      toast({
        title: res.message,
        position: "top",
        status: "success",
      });
      setSelectedFile("")
      setSelectedImageFile("")
      formik.setFieldValue("brand_name", "")
      refetchBrands();
    },
    onError: (err) => {
      console.log(err);
    },
  });

  const {
    handleChangeImage,
    selectedImageFile,
    setSelectedFile,
    setSelectedImageFile,
    selectedFile,
    uploadImage,
    loadingUploadImage,
  } = useUploadImage({
    onError: (err) => {
      console.log(err);
    },
    onSuccess: (res) => {
      addBrand({
        brand_name: formik.values.brand_name,
        brand_logos: res.url,
      });
    },
  });

  const formik = useFormik({
    initialValues: {
      brand_name: "",
    },
    onSubmit: () => {
      uploadImage();
    },
  });

  const handleForm = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { target } = event;
    formik.setFieldValue(target.name, target.value);
  };

  return {
    dataBrands,
    loadingBrands,
    refetchBrands,
    loadingCreateBrand,
    isOpen,
    onClose,
    onOpen,
    isSuccess,
    setSelectedFile,
    setSelectedImageFile,
    handleForm,
    selectedFile,
    selectedImageFile,
    handleChangeImage,
    loadingUploadImage,
    formik
  };
};
