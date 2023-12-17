import { useHomeAction } from "@/containers/Home/Home.action";
import { useAuth } from "@/hooks/useAuth";
import { API } from "@/libs/API";
import {
  Box,
  Card,
  Center,
  Flex,
  IconButton,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Spinner,
  Text,
  useToast,
} from "@chakra-ui/react";
import { useMutation } from "@tanstack/react-query";
import { CiMenuKebab } from "react-icons/ci";
import { FaPencilAlt } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";

interface IProps {
  imageBrand?: string;
  nameBrand?: string;
  id: number;
}
const CardBrand: React.FC<IProps> = ({
  imageBrand,
  nameBrand,
  id,
}): JSX.Element => {
  const toast = useToast();
  const { user, token } = useAuth();
  const { refetchBrands } = useHomeAction();

  const { mutate: deleteBrand, isPending } = useMutation({
    mutationFn: async (id: number) => {
      const response = await API.delete(`brand/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(response);

      return response;
    },
    onSuccess: (res) => {
      toast({
        title: res.data.message,
        status: "success",
        position: "top",
      });
      refetchBrands();
    },
  });

  return (
    <Box p={2} w="150px" h="150px" border="1px solid #ebebeb" rounded="lg">
      {isPending ? (
        <Center h="full">
          <Spinner size="xl" />
        </Center>
      ) : (
        <>
          {user?.isAdmin && (
            <Menu placement="top-start" size="sm">
              <MenuButton>
                <IconButton
                  icon={<CiMenuKebab />}
                  aria-label="menu"
                  size="xs"
                />
              </MenuButton>
              <MenuList>
                <MenuItem fontSize="sm" icon={<FaPencilAlt />}>
                  Update
                </MenuItem>
                <MenuItem
                  onClick={() => deleteBrand(id)}
                  fontSize="sm"
                  icon={<RiDeleteBin6Line />}
                >
                  Delete
                </MenuItem>
              </MenuList>
            </Menu>
          )}
          <Center h="full">
            <Image
              bgSize="cover"
              w="80px"
              rounded="lg"
              src={imageBrand}
              alt={nameBrand}
            />
          </Center>
        </>
      )}
    </Box>
  );
};

export default CardBrand;
