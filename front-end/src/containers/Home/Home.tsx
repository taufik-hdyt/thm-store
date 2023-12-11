"use client";
import ImageSlider from "@/components/ImageSlider";
import { Container } from "@chakra-ui/react";

const Home: React.FC = (): JSX.Element => {
  return (
    <>
      <Container maxW="container.xl">
        <ImageSlider />
      </Container>
    </>
  );
};
export default Home;
