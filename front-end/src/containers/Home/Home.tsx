"use client";
import CardProduct from "@/components/CardProduct";
import ImageSlider from "@/components/ImageSlider";
import { useAuth } from "@/hooks/useAuth";
import { Container, Grid } from "@chakra-ui/react";

const Home: React.FC = (): JSX.Element => {
  const {user} = useAuth()
  console.log(user);
  
  return (
    <>
      <Container maxW="container.xl">
        <ImageSlider />

        <Grid templateColumns="repeat(auto-fill, minmax(200px, 1fr))">
          <CardProduct />
        </Grid>
      </Container>
    </>
  );
};
export default Home;
