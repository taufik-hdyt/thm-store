import {
  Box,
  Button,
  Card,
  HStack,
  Stack,
  Text,
  Image,
  Flex,
} from "@chakra-ui/react";
import { MdOutlineShoppingBag } from "react-icons/md";

const Transaction: React.FC = (): JSX.Element => {
  const customStyleTitle: React.CSSProperties = {
    display: "-webkit-box",
    WebkitLineClamp: 1,
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
  };

  return (
    <Box>
      
      <HStack>
        <Button size="sm" variant="unstyled">Status</Button>
        <Button size="sm" color="primary" borderColor="primary" variant="outline">
          All
        </Button>
        <Button size="sm" variant="outline">Success</Button>
        <Button size="sm" variant="outline">Failed</Button>
        <Button size="sm" variant="outline">Pending</Button>
        
      </HStack>
      

      <Stack mt={6}>
        <Card p={4}>
          <HStack spacing={4}>
            <MdOutlineShoppingBag size={24} />
            <Text fontSize="xs">10 Sep 2022</Text>
            <Text
              fontSize="sm"
              px="3"
              border="1px solid green"
              rounded="xl"
              color="green"
              fontWeight="semibold"
            >
              Done
            </Text>
            <Text fontSize="sm">INV/20220910</Text>
          </HStack>

          <HStack mt="2">
            <Image
              w="100px"
              h="100px"
              src="https://id.yamaha.com/id/files/Image-Index_F-FX_1080x1080_3b098c9164d20654e054d375fd2ccba4.jpg?impolicy=resize&imwid=396&imhei=396"
              alt="name"
            />
            <Stack spacing={0} w="full">
              <Text fontWeight="semibold" style={customStyleTitle}>
                Gitar Yamaha G-139 Original 
              </Text>
              <HStack justify="space-between" >
              <Text fontSize="xs">Qty 1 x Rp 1.200.000</Text>
              <Stack spacing={0}>
                <Box display={{base: "none", md: "block"}}>
              <Text  fontWeight="semibold">Total</Text>  
              <Text fontWeight="semibold">Rp 1.200.000</Text>
                </Box>
              </Stack>
              </HStack>
              <Box display={{base: "block", md: "none"}}>
              <Text  fontWeight="semibold">Total</Text>  
              <Text fontWeight="semibold">Rp 1.200.000</Text>
                </Box>
            </Stack>
          </HStack>
        </Card>
      </Stack>
    </Box>
  );
};

export default Transaction;
