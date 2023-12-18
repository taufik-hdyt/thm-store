import {
  Button,
  Flex,
  HStack,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";
import TextLink from "../TextLink/TextLink";

import { useAuth } from "@/hooks/useAuth";
import { FaRegCircleUser,FaUser } from "react-icons/fa6";
import { IoIosHeartEmpty } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { RiLogoutCircleFill } from "react-icons/ri";
import { useRouter } from "next/router";
import { destroyCookie } from "nookies";


const Header: React.FC = (): JSX.Element => {
  const { token } = useAuth();
  const router = useRouter()
  function handleLogout(){
    destroyCookie(null, "token")
    router.push("/login")
  }


  return (
    <HStack justify="space-between" px={{ base: 2, md: 10 }} py={2}>
      <Link href="/">
        <Flex align="center">
          <Image w="60px" src="https://i.imgur.com/Vgx5X7G.png" alt="logo" />
          <Text fontWeight="semibold">THM Store</Text>
        </Flex>
      </Link>

      {/* <Button variant="unstyled" p={0} display={{ base: "block", lg: "none" }}>
        <IoIosHeartEmpty size={25} />
      </Button> */}
      <HStack spacing={10} display={{ base: "none", lg: "flex" }}>
        <Link href="/">Home</Link>
        <Link href="/products">Products</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/about">About</Link>
        {/* {!token && <Link href="/register">Register</Link>} */}

        {/* <InputGroup>
          <InputRightElement>
            <CiSearch size={24} />
          </InputRightElement>
          <Input placeholder="search for items" />
        </InputGroup> */}

        {
          token &&
        <HStack spacing={4}>
          {/* <TextLink link="/">
            <IoIosHeartEmpty size={24} />
          </TextLink> */}
          <TextLink link="/">
            <IoCartOutline size={24} />
          </TextLink>
          <Menu>
            <MenuButton>
              <FaRegCircleUser size={24} />
            </MenuButton>

            <MenuList>

              <MenuItem  icon={<FaUser />}>
                <Link href='/profile'>Profile</Link>
              </MenuItem>
              <MenuItem onClick={handleLogout} icon={<RiLogoutCircleFill />}>Logout</MenuItem>
            </MenuList>
          </Menu>
        </HStack>
        }
      </HStack>
    </HStack>
  );
};

export default Header;
