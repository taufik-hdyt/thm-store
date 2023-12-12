import {
  Text,
  Box,
  Image,
  Grid,
  Stack,
  Input,
  Button,
  GridItem,
  FormControl,
  FormErrorMessage,
} from "@chakra-ui/react";
import Link from "next/link";

import { useRegisterAction } from "./Register.action";

const Register: React.FC = (): JSX.Element => {
  const { formik, handleForm, loadingCreateCustomer } = useRegisterAction();

  return (
    <Box>
      <Grid
        gridTemplateColumns={{ base: "1fr", md: "1fr 1fr" }}
        rowGap={{ base: "6", md: "" }}
        mt={8}
      >
        <GridItem display={{base: "none", md: "block"}}>
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
              Create an account
            </Text>
            <Text>Enter your details below</Text>
            <form onSubmit={formik.handleSubmit}>
              <Stack spacing={4} mt={8} >
                <FormControl isInvalid={formik.errors.fullname ? true : false}>
                  <Input
                    onChange={handleForm}
                    variant="flushed"
                    type="text"
                    placeholder="Name"
                    name="fullname"
                  />
                  <FormErrorMessage>{formik.errors.fullname}</FormErrorMessage>
                </FormControl>
                <FormControl isInvalid={formik.errors.email ? true : false}>
                  <Input
                    onChange={handleForm}
                    variant="flushed"
                    type="email"
                    placeholder="Email"
                    name="email"
                  />
                  <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
                </FormControl>
                <FormControl isInvalid={formik.errors.password ? true : false}>
                  <Input
                    variant="flushed"
                    type="password"
                    placeholder="Password"
                    name="password"
                    onChange={handleForm}
                  />
                  <FormErrorMessage>{formik.errors.password}</FormErrorMessage>
                </FormControl>
              </Stack>

              <Button
                w="full"
                type="submit"
                color="white"
                mt={6}
                size="lg"
                rounded="sm"
                bg="#39A7FF"
                colorScheme="blue"
                isLoading={loadingCreateCustomer}
              >
                Create Account
              </Button>
            </form>

            <Text display="flex" gap={2}>
              Already have account?{" "}
              <Link href="/login">
                <Text fontWeight="semibold" color="primary">
                  Login
                </Text>
              </Link>
            </Text>
          </Stack>
        </Stack>
      </Grid>
    </Box>
  );
};

export default Register;
