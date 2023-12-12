import { HStack, Link, Stack, Text, Image } from "@chakra-ui/react";
import React, { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { FaRegCircleUser } from "react-icons/fa6";
import {
  IoHomeOutline,
  IoCartOutline,
  IoCart,
  IoHomeSharp,
} from "react-icons/io5";
import { MdLibraryMusic ,MdMusicNote } from "react-icons/md";

const NavbarMobile: React.FC = (): JSX.Element => {
  const [selected, setSelected] = useState("home");

  return (
    <HStack pos="fixed" bottom={0} p={1} roundedTop="xl" bg="primary" w="full" >
      <HStack justify="space-between" w="full" rounded="lg" p="2">
        <Link href="/">
          <Stack onClick={() => setSelected("home")} align="center" spacing={1}>
            {selected === "home" ? (
              <IoHomeSharp size={24} color="white" />
            ) : (
              <IoHomeOutline size={24} color="white" />
            )}
            <Text fontSize="xs" color="white  " fontWeight="semibold">
              Home
            </Text>
          </Stack>
        </Link>
        <Link href="/brands">
          <Stack
            onClick={() => setSelected("brands")}
            align="center"
            spacing={1}
          >
            {selected === "brands" ? (
              <MdLibraryMusic size={24} color="white" />
            ) : (
              <MdMusicNote size={24} color="white" />
            )}
            <Text fontSize="xs" color="white  " fontWeight="semibold">
              Brands
            </Text>
          </Stack>
        </Link>
        <Link href="/cart">
          <Stack onClick={() => setSelected("cart")} align="center" spacing={1}>
            {selected === "cart" ? (
              <IoCart size={24} color="white" />
            ) : (
              <IoCartOutline size={24} color="white" />
            )}
            
            <Text fontSize="xs" color="white  " fontWeight="semibold">
              Cart
            </Text>
          </Stack>
        </Link>
        <Link href="/profile">
          <Stack
            onClick={() => setSelected("profile")}
            align="center"
            spacing={1}
          >
            {selected === "profile" ? (
              <FaUserCircle size={24} color="white" />
            ) : (
              <FaRegCircleUser size={24} color="white" />
            )}
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
