import { Avatar, Box, Button, HStack, Stack, Text } from "@chakra-ui/react";
import { LuShoppingBag } from "react-icons/lu";
import { FaUsers } from "react-icons/fa";
import { BsCart3 } from "react-icons/bs";
import { SiBrandfolder } from "react-icons/si";

interface IProps{
    setState: (I:string)=> void
    selected: string
}
const Sidebar: React.FC<IProps> = ({setState,selected}): JSX.Element => {
  return (
    <Box p={6} display="flex" justifyContent="center">
      <Stack w="full">
        <HStack>
          <Avatar src="logo-profile.png" />
          <Text>THM Store</Text>
        </HStack>
        <Button bg="primary" color="white">
          Dashboard
        </Button>

        <Stack color="gray" mt={10}>
        <Button
            variant="unstyled"
            display="flex"
            justifyContent="left"
            gap={4}
            leftIcon={<BsCart3 size={24} />}
            onClick={()=> setState("orders")}
            bg={selected === "orders" ? "#ebebeb" : "transparent"}
            px={3}
          >
            Orders
          </Button>
          <Button
            variant="unstyled"
            display="flex"
            justifyContent="left"
            gap={4}
            leftIcon={<LuShoppingBag size={24} />}
            onClick={()=> setState("products")}
            bg={selected === "products" ? "#ebebeb" : "transparent"}
            px={3}
          >
            Products
          </Button>
          <Button
            variant="unstyled"
            display="flex"
            justifyContent="left"
            gap={4}
            leftIcon={<SiBrandfolder size={24} />}
            onClick={()=> setState("brands")}
            bg={selected === "brands" ? "#ebebeb" : "transparent"}
            px={3}
          >
            Brands
          </Button>
          <Button
          px={3}
            variant="unstyled"
            display="flex"
            justifyContent="left"
            gap={4}
            leftIcon={<FaUsers size={24} />}
            onClick={()=> setState("users")}
            bg={selected === "users" ? "#ebebeb" : "transparent"}
          >
            Users
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Sidebar;
