import { Image, HStack, Button, Text, Container } from "@chakra-ui/react";
import TextLink from "../TextLink/TextLink";
import { FaShoppingCart, FaUser } from "react-icons/fa";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaHeart } from "react-icons/fa";

const Header: React.FC = (): JSX.Element => {
  return (
    <Container maxW="container.xl">
      <HStack justify="space-between">
        <Image w="60px" src="logo-profile.png" alt="logo" />

        <Button
          variant="unstyled"
          p={0}
          display={{ base: "block", md: "none" }}
        >
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
    </Container>
  );
};

export default Header;
