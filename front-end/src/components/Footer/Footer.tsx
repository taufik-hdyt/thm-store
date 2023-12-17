import {
  Avatar,
  Box,
  Divider,
  Grid,
  GridItem,
  HStack,
  Stack,
  Text,
} from "@chakra-ui/react";
import { FaInstagram, FaLinkedin, FaTiktok, FaYoutube } from "react-icons/fa";

const Footer: React.FC = (): JSX.Element => {
  return (
    <Box px={10} pt={10}>
      <Grid gridTemplateColumns="1fr .5fr .5fr .5fr" gap={8}>
        <Stack>
          <Avatar
            src="https://res.cloudinary.com/doushe6hn/image/upload/v1702611440/thm-store/wsgtz2aummbaotpeq0qq.png"
            size="lg"
          />
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
            natus laudantium ullam magnam vitae aspernatur obcaecati porro
            similique dolor
          </Text>
        </Stack>
        <GridItem>
          <Stack>
            <Text fontWeight="semibold">Company</Text>
            <Text>About</Text>
            <Text>Contact</Text>
            <Text>Help</Text>
          </Stack>
        </GridItem>
        <GridItem>
          <Stack>
            <Text fontWeight="semibold">Privacy</Text>
            <Text>Privacy policy</Text>
            <Text>Cookie policy</Text>
            <Text>Usage policy</Text>
          </Stack>
        </GridItem>
        <GridItem>
          <Stack>
            <Text fontWeight="semibold">Follow Us</Text>
            <HStack>
              <FaInstagram size={24} />
              <FaLinkedin size={24} />
              <FaYoutube size={24} />
              <FaTiktok size={24} />
            </HStack>
          </Stack>
        </GridItem>
      </Grid>
      <Divider mt={8} />
      <Text mt={4} color="GrayText" textAlign="center">
        Copyright THMstore 2023. All right reserved
      </Text>
    </Box>
  );
};

export default Footer;
