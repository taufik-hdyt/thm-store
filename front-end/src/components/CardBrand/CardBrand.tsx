import { IBrand } from "@/interface/brand.interfaces";
import { Box, Center, Image } from "@chakra-ui/react";

interface IProps {
  brand?: IBrand;
}
const CardBrand: React.FC<IProps> = ({ brand }): JSX.Element => {
  return (
    <Box p={2} w="120px" h="120px" border="1px solid #ebebeb" rounded="lg">
      <Center h="full">
        <Image
          bgSize="cover"
          w="80px"
          rounded="lg"
          // src={brand?.logo_brand}
          // alt={brand?.brand_name}
          src="https://static.vecteezy.com/system/resources/previews/020/975/589/original/yamaha-logo-yamaha-icon-transparent-free-png.png"
          alt="brand"
        />
      </Center>
    </Box>
  );
};

export default CardBrand;
