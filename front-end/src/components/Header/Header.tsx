import {
  Button,
  Divider,
  Flex,
  HStack,
  IconButton,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";

import { useAuth } from "@/hooks/useAuth";
import { useRouter } from "next/router";
import { destroyCookie } from "nookies";
import { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { IoIosHeartEmpty } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";

const Header: React.FC = (): JSX.Element => {
  const { token } = useAuth();
  const router = useRouter();
  function handleLogout() {
    destroyCookie(null, "token");
    router.push("/login");
  }

  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <HStack
      justify="space-between"
      px={{ base: 2, md: 10 }}
      py={2}
      pos="fixed"
      top="0"
      zIndex={9999}
      bg="white"
      w="full"
      boxShadow={scrolled ? "lg" : "none"}
    >
      <Link href="/">
        <Flex align="center">
          <Image w="60px" src="https://i.imgur.com/Vgx5X7G.png" alt="logo" />
          <Text fontWeight="semibold">THM Store</Text>
        </Flex>
      </Link>

      <HStack>
        <InputGroup w="fit-content">
          <InputRightElement>
            <CiSearch size={24} />
          </InputRightElement>
          <Input placeholder="Search for items" />
        </InputGroup>

        <Stack direction="row" h="60px" p={4}>
          <Divider orientation="vertical" />
        </Stack>

        <IconButton
          variant="ghost"
          aria-label="cart"
          icon={<IoCartOutline size={24} />}
        />
        <IconButton
          variant="ghost"
          aria-label="cart"
          icon={<IoIosHeartEmpty size={24} />}
        />

        <Stack direction="row" h="60px" p={4}>
          <Divider orientation="vertical" />
        </Stack>
        <Button
          variant="outline"
          color="primary"
          border="1px solid #39A7FF"
          as={Link}
          href="/login"
        >
          Sign in
        </Button>
        <Button bg="primary" color="white" as={Link} href="/register">
          Sign Up
        </Button>
      </HStack>
    </HStack>
  );
};

export default Header;
