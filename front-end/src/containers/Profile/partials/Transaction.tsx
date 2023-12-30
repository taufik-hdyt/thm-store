import { useAuth } from "@/hooks/useAuth";
import { ITransaction } from "@/interface/transaction.interfaces";
import { formatRupiah } from "@/utils/formatRupiah";

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
import moment from 'moment'

const Transaction: React.FC = (): JSX.Element => {
  const customStyleTitle: React.CSSProperties = {
    display: "-webkit-box",
    WebkitLineClamp: 1,
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
  };

  const {user} = useAuth()

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
      

      <Stack mt={6} spacing={4}>
      {
        user?.transactions.map((data:ITransaction,idx:number)=> {
          const waktuMoment = moment(data.transaction_date, "HH:mm:ss.SSSSSSZ");
          const transactionDate = waktuMoment.format("YYYY-MM-DD");
          return (
            <Card key={idx} p={4}>
            <HStack spacing={4}>
              <MdOutlineShoppingBag size={24} />
              <Text fontSize="xs">{transactionDate}</Text>
              <Text
                fontSize="sm"
                px="3"
                border="1px solid green"
                rounded="xl"
                color="green"
                fontWeight="semibold"
              >
                {data.status_payment}
              </Text>
              <Text fontSize="sm">{data.no_transaction}</Text>
            </HStack>
  
            <HStack mt="2">
              <Image
                w="100px"
                h="100px"
                src={data.product.image}
                alt={data.product.product_name}
              />
              <Stack spacing={0} w="full">
                <Text fontWeight="semibold" style={customStyleTitle}>
                  {data.product.product_name}
                </Text>
                <HStack justify="space-between" >
                <Text fontSize="xs">Qty {data.quantity} x {formatRupiah(data.product.price)}</Text>
                <Stack spacing={0}>
                  <Box display={{base: "none", md: "block"}}>
                <Text  fontWeight="semibold">Total</Text>  
                <Text fontWeight="semibold">{formatRupiah(data.subtotal)}</Text>
                  </Box>
                </Stack>
                </HStack>
                <Box display={{base: "block", md: "none"}}>
                <Text  fontWeight="semibold">Total</Text>  
                <Text fontWeight="semibold">{formatRupiah(data.subtotal)}</Text>
                  </Box>
              </Stack>
            </HStack>
          </Card>
          )
        })
      }
      </Stack>
    </Box>
  );
};

export default Transaction;
