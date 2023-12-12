import { Image, HStack, Button, Flex, Text } from "@chakra-ui/react";
import TextLink from "../TextLink/TextLink";
import { FaShoppingCart, FaUser } from "react-icons/fa";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaHeart } from "react-icons/fa";

interface IProps {
  onOpenSideBar: () => void;
}
const Header: React.FC<IProps> = ({onOpenSideBar}): JSX.Element => {
  return (
    <HStack justify="space-between" px={{ base: 0, md: 10 }}>
      <Link href="/">
        <Flex align="center">
          <Image w="60px" src="logo-profile.png" alt="logo" />
          <Text fontWeight="semibold">THM Store</Text>
        </Flex>
      </Link>

      <Button onClick={onOpenSideBar} variant="unstyled" p={0} display={{ base: "block", md: "none" }}>
        <GiHamburgerMenu size={25} />
      </Button>
      <HStack spacing={8} display={{ base: "none", md: "flex" }}>
        <Link href="/">Home</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/about">About</Link>
        <Link href="/register">Sign Up</Link>

        <HStack spacing={4}>
          <TextLink link="/">
            <FaHeart size={24} />
          </TextLink>
          <TextLink link="/">
            <FaShoppingCart size={24} />
          </TextLink>
          <TextLink link="/">
            <FaUser size={24} />
          </TextLink>
        </HStack>
      </HStack>
    </HStack>
  );
};

export default Header;
