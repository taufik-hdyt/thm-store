import {
  Image,
  HStack,
  Button,
  Flex,
  Text,
  InputGroup,
  Input,
  InputRightElement,
} from "@chakra-ui/react";
import TextLink from "../TextLink/TextLink";
import Link from "next/link";

import { FaUserCircle } from "react-icons/fa";
import { FaRegCircleUser } from "react-icons/fa6";
import {
  IoHomeOutline,
  IoCartOutline,
  IoCart,
  IoHomeSharp,
} from "react-icons/io5";
import { IoIosHeartEmpty, IoMdHeartEmpty } from "react-icons/io";
import { CiSearch } from "react-icons/ci";

const Header: React.FC = (): JSX.Element => {
  return (
    <HStack  justify="space-between" px={{ base: 0, md: 20 }}>
      <Link href="/">
        <Flex align="center">
          <Image w="60px" src="logo-profile.png" alt="logo" />
          <Text fontWeight="semibold">THM Store</Text>
        </Flex>
      </Link>

      <Button variant="unstyled" p={0} display={{ base: "block", md: "none" }}>
        <IoIosHeartEmpty size={25} />
      </Button>
      <HStack  spacing={10} display={{ base: "none", md: "flex" }}>
        <Link href="/">Home</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/about">About</Link>
        <Link href="/register">Register</Link>

        <InputGroup>
          <InputRightElement>
            <CiSearch size={24} />
          </InputRightElement>
          <Input
            placeholder="search for items"
          />
        </InputGroup>

        <HStack spacing={4}>
          <TextLink link="/">
            <IoIosHeartEmpty  size={24} />
          </TextLink>
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
