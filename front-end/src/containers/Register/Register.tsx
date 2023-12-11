import {
  Text,
  Box,
  Image,
  Grid,
  Stack,
  Input,
  Button,
  GridItem,
} from "@chakra-ui/react";
import Link from "next/link";

const Register: React.FC = (): JSX.Element => {
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
              Create an account
            </Text>
            <Text>Enter your details below</Text>

            <Stack spacing={4} mt={8}>
              <Input variant="flushed" type="text" placeholder="Name" />
              <Input variant="flushed" type="email" placeholder="Email" />
              <Input variant="flushed" type="password" placeholder="Password" />
            </Stack>

            <Button color="white" mt={6} size="lg" rounded="sm" bg="#39A7FF">
              Create Account
            </Button>

            <Text display="flex" gap={2}>
              Already have account? <Link href="/login"><Text fontWeight="semibold" color="primary">Login</Text></Link>
            </Text>
          </Stack>
        </Stack>
      </Grid>
    </Box>
  );
};

export default Register;
