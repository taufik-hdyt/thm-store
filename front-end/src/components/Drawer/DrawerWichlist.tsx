import {
    Button,
    Drawer,
    DrawerBody,
    DrawerCloseButton,
    DrawerContent,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    HStack,
    IconButton,
    Image,
    Stack,
    Text,
  } from "@chakra-ui/react";
  import CartItem from "../CartItem";
import WichlistItem from "../Wichlist";
import { useAuth } from "@/hooks/useAuth";
import { IWishlist } from "@/interface/customer.interfaces";
  
  interface IProps {
    isOpen: boolean;
    onClose: () => void;
  }
  const DrawerWichlist: React.FC<IProps> = ({ isOpen, onClose }): JSX.Element => {
    const {user} = useAuth()
    return (
      <Drawer size="sm" isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent pt="20">
          <DrawerCloseButton />
          <DrawerHeader>Wichlist</DrawerHeader>
  
          <DrawerBody  maxH="100vh">
            <Stack>
              {
                user?.wishlist.map((data: IWishlist,idx:number)=> (
                  <WichlistItem key={idx} data={data} />
                ))
              }
             
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    );
  };
  
  export default DrawerWichlist;
  