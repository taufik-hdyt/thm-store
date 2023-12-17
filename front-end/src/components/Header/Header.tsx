import {
  Button,
  Flex,
  HStack,
  Image,
  Text
} from "@chakra-ui/react";
import Link from "next/link";
import TextLink from "../TextLink/TextLink";

import { useAuth } from "@/hooks/useAuth";
import { FaRegCircleUser } from "react-icons/fa6";
import { IoIosHeartEmpty } from "react-icons/io";
import {
  IoCartOutline
} from "react-icons/io5";

const Header: React.FC = (): JSX.Element => {
  const { token } = useAuth();
  return (
    <HStack justify="space-between" px={{ base: 0, md: 10 }}>
      <Link href="/">
        <Flex align="center">
          <Image w="60px" src="https://i.imgur.com/Vgx5X7G.png" alt="logo" />
          <Text fontWeight="semibold">THM Store</Text>
        </Flex>
      </Link>

      <Button variant="unstyled" p={0} display={{ base: "block", lg: "none" }}>
        <IoIosHeartEmpty size={25} />
      </Button>
      <HStack spacing={10} display={{ base: "none", lg: "flex" }}>
        <Link href="/">Home</Link>
        <Link href="/products">Products</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/about">About</Link>
        {!token && <Link href="/register">Register</Link>}

        {/* <InputGroup>
          <InputRightElement>
            <CiSearch size={24} />
          </InputRightElement>
          <Input placeholder="search for items" />
        </InputGroup> */}

        <HStack spacing={4}>
          {/* <TextLink link="/">
            <IoIosHeartEmpty size={24} />
          </TextLink> */}
          <TextLink link="/">
            <IoCartOutline size={24} />
          </TextLink>
          <TextLink link="/profile">
            <FaRegCircleUser size={24} />
          </TextLink>
        </HStack>
      </HStack>
    </HStack>
  );
};

export default Header;
