"use client";
import ImageSlider from "@/components/ImageSlider";
import { useAuth } from "@/hooks/useAuth";
import { Container } from "@chakra-ui/react";

const Home: React.FC = (): JSX.Element => {
  const {user} = useAuth()
  console.log(user);
  
  return (
    <>
      <Container maxW="container.xl">
        <ImageSlider />
      </Container>
    </>
  );
};
export default Home;
