import { Box, Card, Center, Image, Text } from "@chakra-ui/react";

interface IProps {
  imageBrand?: string;
  nameBrand?: string;
}
const CardBrand: React.FC<IProps> = ({
  imageBrand,
  nameBrand,
}): JSX.Element => {
  return (
    <Box p={2} w="150px" h="150px" border="1px solid #ebebeb" rounded="lg">
      <Center h="full">
      <Image
        rounded="lg"
        src={imageBrand}
        alt={nameBrand}
      />
      </Center>
    </Box>
  );
};

export default CardBrand;
