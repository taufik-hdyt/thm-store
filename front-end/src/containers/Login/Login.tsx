import {
  Text,
  Box,
  Image,
  Grid,
  Stack,
  Input,
  HStack,
  Button,
  GridItem,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import React, { useState } from "react";

const Login: React.FC = (): JSX.Element => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  return (
    <Box>
      <Grid
        gridTemplateColumns={{ base: "1fr", md: "1fr 1fr" }}
        rowGap={{ base: "6", md: "" }}
        mt={8}
      >
        <GridItem>
          <Image
            roundedRight="xl"
            h="80vh"
            w="full"
            bgSize="cover"
            src="home.jpg"
            alt="image"
          />
        </GridItem>
        <Stack justify="center" align="center">
          <Stack w="400px">
            <Text fontSize="3xl" fontWeight="600">
              Log in
            </Text>
            <Text>Enter your details below</Text>

            <Box mt={8}>
              <Input variant="flushed" placeholder="Email" />

              <InputGroup mt={4}>
                <Input
                  type={showPassword ? "text" :"password"}
                  variant="flushed"
                  placeholder="Password"
                />
                <InputRightElement
                  onClick={() => setShowPassword(!showPassword)}
                  cursor="pointer"
                >
                  {showPassword ? (
                    <FaEyeSlash color="gray.300" />
                  ) : (
                    <FaEye color="gray.300" />
                  )}
                </InputRightElement>
              </InputGroup>
            </Box>

            <HStack mt={8} justify="space-between">
              <Button size="lg" colorScheme="red">
                Login
              </Button>
              <Button fontWeight="400" color="red" variant="unstyled">
                Forgot Password ?
              </Button>
            </HStack>
          </Stack>
        </Stack>
      </Grid>
    </Box>
  );
};

export default Login;
