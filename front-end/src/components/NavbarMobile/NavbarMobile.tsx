import { HStack, Link, Stack, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { FaRegCircleUser } from "react-icons/fa6";
import {
  IoHomeOutline,
  IoCartOutline,
  IoCart,
  IoHomeSharp,
} from "react-icons/io5";
import { MdLibraryMusic, MdMusicNote } from "react-icons/md";

const NavbarMobile: React.FC = (): JSX.Element => {

  return (
    <HStack pos="fixed" bottom={0} p={1} roundedTop="xl" bg="primary" w="full">
      <HStack justify="space-between" w="full" rounded="lg" p="2">
        <Link href="/">
          <Stack align="center" spacing={1}>
            <IoHomeSharp size={24} color="white" />

            <Text fontSize="xs" color="white  " fontWeight="semibold">
              Home
            </Text>
          </Stack>
        </Link>
        <Link href="/brands">
          <Stack align="center" spacing={1}>
            <MdLibraryMusic size={24} color="white" />

            <Text fontSize="xs" color="white  " fontWeight="semibold">
              Products
            </Text>
          </Stack>
        </Link>
        <Link href="/cart">
          <Stack align="center" spacing={1}>
            <IoCartOutline size={24} color="white" />

            <Text fontSize="xs" color="white  " fontWeight="semibold">
              Cart
            </Text>
          </Stack>
        </Link>
        <Link href="/profile">
          <Stack align="center" spacing={1}>
            <FaUserCircle size={24} color="white" />

            <Text fontSize="xs" color="white  " fontWeight="semibold">
              Profile
            </Text>
          </Stack>
        </Link>
      </HStack>
    </HStack>
  );
};

export default NavbarMobile;
