import Layout from "@/components/Layout";
import { Box, Card, Container, HStack, Image, Stack, Text } from "@chakra-ui/react";

const Cart: React.FC = (): JSX.Element => {
  return (
    <Layout>
      <Container maxW="container.lg">
        <Card p={10}>
        <Text>My Cart</Text>
            <HStack mt={6} border="1px solid #ebebeb" p={2} spacing={4}>
                <Image boxSize="100px" src="https://res.cloudinary.com/doushe6hn/image/upload/v1698805927/xodgqp10i6nf0ormtinn.jpg" alt="image" />
                <Stack>
                    <Text>Gitar Yamaha G-130</Text>
                    <Text>Gitar Yamaha G-130</Text>
                </Stack>
            </HStack>
        </Card>
      </Container>
    </Layout>
  );
};

export default Cart;
