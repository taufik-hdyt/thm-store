import {
  Box,
  Button,
  Card,
  HStack,
  Stack,
  Text,
  Image,
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
      <HStack spacing={6}>
        <Button variant="unstyled">Status</Button>
        <Button color="primary" borderColor="primary" variant="outline">
          All
        </Button>
        <Button variant="outline">Success</Button>
        <Button variant="outline">Failed</Button>
        <Button variant="outline">Pending</Button>
      </HStack>

      <Stack mt={6}>
        <Card p={4}>
          <HStack spacing={4}>
            <MdOutlineShoppingBag size={24} />
            <Text fontSize="sm">10 Sep 2022</Text>
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
            <Text fontSize="sm">INV/20220910/MPL/2644063125</Text>
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
              <Text fontWeight="semibold">Total</Text>  
              <Text fontWeight="semibold">Rp 1.200.000</Text>
              </Stack>
              </HStack>
            </Stack>
          </HStack>
        </Card>
      </Stack>
    </Box>
  );
};

export default Transaction;
