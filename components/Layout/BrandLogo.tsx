import { Box, HStack, Text } from "@chakra-ui/layout";
import NextImage from "next/image";

import logo from "../public/logo.svg";

const BrandLogo = () => {
  return (
    <Box mb={57}>
      <HStack>
        <NextImage alt="logo" src={logo} width={50} height={50} />
        <Text mr={0} fontWeight={500} fontSize="21px" lineHeight="26px">
          Clap
        </Text>
      </HStack>
    </Box>
  );
};

export default BrandLogo;
