import { useAuth } from "@/hooks/useAuth";
import {
  Box,
  Text,
  Grid,
  GridItem,
  Card,
  Flex,
  Stack,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Avatar,
  Button,
} from "@chakra-ui/react";
import { IoCartOutline } from "react-icons/io5";
import { RiLockPasswordFill } from "react-icons/ri";

const Profile: React.FC = (): JSX.Element => {
  const { user } = useAuth();
  console.log(user);
  return (
    <Box px={{ base: 6, md: 20 }}>

      <Grid
        gridTemplateColumns="1fr"
        h="100vh"
        gap={6}
      >
        <GridItem>
          <Flex gap={1} justify="end">
            <Text>Welcome</Text>
            <Text color="primary" fontWeight="semibold">
              {user?.fullname}
            </Text>
          </Flex>
          <Card px={4} py={6} mt={10}>
            <Text fontWeight="semibold" color="primary">
              Edit Your Profile
            </Text>
            <Box mt={8} display="flex" justifyContent="center">
              <Avatar src={user?.profile_picture} size="xl" />
            </Box>

            <Stack mt={10}>
              <Grid gridTemplateColumns="1fr 1fr" gap={{base: 2,md:6}}>
                <FormControl>
                  <FormLabel>Fullname</FormLabel>
                  <Input value={user?.fullname} placeholder="fullname" />
                </FormControl>
                <FormControl>
                  <FormLabel>Email</FormLabel>
                  <Input value={user?.email} placeholder="Email" />
                </FormControl>
              </Grid>
              <FormControl>
                <FormLabel>Address</FormLabel>
                <Textarea value={user?.address} resize="none" />
              </FormControl>

              <Button
                color="primary"
                variant="unstyled"
                w="fit-content"
                rightIcon={<RiLockPasswordFill />}
              >
                Change Password
              </Button>
              <Box display="flex" justifyContent='end'>
                <Button w="fit-content" bg="primary" color="white">
                  Update
                </Button>
              </Box>
            </Stack>
          </Card>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default Profile;
