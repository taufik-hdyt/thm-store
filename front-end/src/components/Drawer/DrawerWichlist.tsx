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
import { useAuth } from "@/hooks/useAuth";
import { IWishlist } from "@/interface/customer.interfaces";
import WishlistItem from "../Wishlist";
  
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
                  <WishlistItem key={idx} data={data} />
                ))
              }
             
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    );
  };
  
  export default DrawerWichlist;
  