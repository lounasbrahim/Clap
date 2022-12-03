import { Box, Text } from "@chakra-ui/react";
import NextImage from "next/image";

const SoundCard = () => {
  return (
    <Box
      width="200px"
      height="200px"
      pos="relative"
      rounded="lg"
      boxShadow={2}
      mb="12px"
    >
      <Box w="100%" pos="absolute">
        <Box
          w="100%"
          //   bgGradient="linear(to-r, green.200, pink.500)"
          rounded="lg"
          overflow="hidden"
          background="linear(to-tr, black, red.900)"
          backdropFilter="auto"
          backdropBlur="blur(42px)"
          zIndex={1}
        >
          <Box zIndex={0}>
            <NextImage
              width={200}
              height={200}
              object-fit="cover"
              alt="card"
              src="/images/akon.jpeg"
            />
          </Box>
        </Box>

        <Box pos="absolute" top="0" right="0">
          <NextImage width={80} height={80} alt="card" src="/icons/like.svg" />
        </Box>

        <Box w="100%" pos="absolute" bottom="2" left="2">
          <Text>Lonely</Text>
          <Text>Akon</Text>
        </Box>
      </Box>
    </Box>
  );
};

export default SoundCard;
