import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Input,
  HStack,
  Avatar,
  Text,
  Stack,
} from "@chakra-ui/react";
import { CiLogout } from "react-icons/ci";

interface IProps {
  isOpen: boolean;
  onClose: () => void;
}
const DrawerSideBar: React.FC<IProps> = ({ isOpen, onClose }): JSX.Element => {
  return (
    <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>Create your account</DrawerHeader>

        <DrawerBody>
          <Input placeholder="Type here..." />
        </DrawerBody>

        <DrawerFooter>
          <Stack  w="full">
            <HStack >
              <Avatar size="lg" />
              <Stack spacing={0}>
                <Text fontWeight="bold">Taufik Hdyt</Text>
                <Text>taufikhdyt@gmail.com</Text>
              </Stack>
            </HStack>
            <HStack mt={4} cursor="pointer">
              <CiLogout size={24} />
              <Text fontWeight="semibold">Logout</Text>
            </HStack>
          </Stack>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default DrawerSideBar;
