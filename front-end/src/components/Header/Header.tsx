import {
  Avatar,
  Box,
  Button,
  Center,
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

import useScrolledSize from "@/utils/scrolledSize";
import { useRouter } from "next/router";
import { destroyCookie } from "nookies";
import { CiSearch } from "react-icons/ci";
import { IoIosHeartEmpty } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { useAuth } from "@/hooks/useAuth";

interface IProps {
  onOpenCart?: () => void;
  openWichlist?: () => void;
}

const Header: React.FC<IProps> = ({
  onOpenCart,
  openWichlist,
}): JSX.Element => {
  const { token, user } = useAuth();

  const router = useRouter();
  function handleLogout() {
    destroyCookie(null, "token");
    router.push("/login");
  }

  const scrolled = useScrolledSize();

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
          <Image
            w="60px"
            src="https://res.cloudinary.com/doushe6hn/image/upload/v1702611440/thm-store/wsgtz2aummbaotpeq0qq.png"
            alt="logo"
          />
          <Text fontWeight="semibold">THM Store</Text>
        </Flex>
      </Link>
      1
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

        <Box pos="relative">
          <IconButton
            variant="ghost"
            aria-label="cart"
            icon={<IoCartOutline size={35} />}
            onClick={onOpenCart}
          />
          <Center
            bg="primary"
            w="20px"
            h="20px"
            rounded="full"
            pos="absolute"
            top="-2"
            right={-2}
          >
            <Text fontSize="x-small" fontWeight="semibold" color="white">
              {user?.cart.length}
            </Text>
          </Center>
        </Box>

        <IconButton
          variant="ghost"
          aria-label="wichlist"
          icon={<IoIosHeartEmpty size={35} />}
          onClick={openWichlist}
        />

        <Stack direction="row" h="60px" p={4}>
          <Divider orientation="vertical" />
        </Stack>
        {token ? (
          <Avatar size="sm" src={user?.profile_picture} />
        ) : (
          <>
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
          </>
        )}
      </HStack>
    </HStack>
  );
};

export default Header;
