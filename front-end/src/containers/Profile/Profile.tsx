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
import { RiLockPasswordFill } from "react-icons/ri";

const Profile: React.FC = (): JSX.Element => {
  const { user } = useAuth();
  console.log(user);
  return (
    <Box px={{base: 6, md: 20}} >
      <Grid gridTemplateColumns={{base: "1fr" ,md: "300px 1fr"}} h="100vh" mt={10}>
        <GridItem display={{base: "none", md: "block"}}>
          <Flex gap={1} justify="start">
            <Text color="gray">Home /</Text>
            <Text color="black" fontWeight="semibold">
              MyAccount
            </Text>
          </Flex>
        </GridItem>

        <GridItem>
          <Flex gap={1} justify="end">
            <Text>Welcome</Text>
            <Text color="primary" fontWeight="semibold">
              {user?.fullname}
            </Text>
          </Flex>
          <Card p={4} mt={10}>
            <Text fontWeight="semibold" color="primary">
              Edit Your Profile
            </Text>
            <Box display="flex" justifyContent="center">
              <Avatar src={user?.profile_picture} size="xl" />
            </Box>

            <Stack mt={10}>
              <Grid gridTemplateColumns="1fr 1fr" gap={6}>
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

              <Button color="primary" variant="unstyled" w="fit-content" rightIcon={<RiLockPasswordFill />}>Change Password</Button>
              <Button>Update</Button>
            </Stack>
          </Card>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default Profile;
