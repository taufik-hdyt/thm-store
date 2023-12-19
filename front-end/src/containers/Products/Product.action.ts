import { useAuth } from "@/hooks/useAuth";
import { useUploadImage } from "@/hooks/useUploadImage";
import { ICreateProduct } from "@/interface/product.interface";
import { API } from "@/libs/API";
import { useToast } from "@chakra-ui/react";
import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useFormik } from "formik";

export const useProductAction = () => {
  const { token } = useAuth();
  const toast = useToast();

  const {
    data: dataProducts,
    isLoading: loadingProducts,
    refetch,
  } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const response = await API.get("/products", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      return response.data;
    },
  });

  const {
    mutate: createProduct,
    isPending: loadingCreateProduct,
    isSuccess,
  } = useMutation({
    mutationFn: async (body: ICreateProduct) => {
      const response = await API.post("/product", body, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    },
    onSuccess: (res) => {
      toast({
        title: res.message,
      });
      setSelectedFile("");
      setSelectedImageFile("");
      formik.resetForm();
      refetch();
    },
    onError: (err) => {
      if (axios.isAxiosError(err)) {
        toast({
          title: err.response?.data.message,
          position: "top",
          status: "error",
        });
      }
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
    onSuccess: (res) => {
      createProduct({
        name: formik.values.name,
        brand_id: formik.values.brand_id,
        description: formik.values.description,
        price: formik.values.price,
        stock: formik.values.stock,
        image: res.url,
      });
    },
    onError: (err) => {
      console.log(err);
    },
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      brand_id: 0,
      stock: 0,
      price: 0,
      description: "",
      image: "",
    },
    onSubmit: () => {
      uploadImage();
    },
  });

  // handleform
  const handleForm = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { target } = event;
    formik.setFieldValue(target.name, target.value);
  };

  return {
    dataProducts,
    loadingProducts,
    handleChangeImage,
    selectedImageFile,
    setSelectedFile,
    setSelectedImageFile,
    selectedFile,
    handleForm,
    formik,
    loadingCreateProduct,
    loadingUploadImage,
    isSuccess,
  };
};
