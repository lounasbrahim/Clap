import { Box, Text, HStack, Flex, Spacer } from "@chakra-ui/layout";
import NextImage from "next/image";

const PlaylistItem = () => {
  return (
    <Flex
      bg="rgba(0,0,0,0.07)"
      padding={3}
      rounded="2xl"
      backdropFilter="auto"
      backdropBlur="2px"
      w="100%"
      mb="7px"
      align="center"
      justify="center"
      pr="19px"
    >
      <Box>
        <HStack>
          <Box w="100%" rounded="full" overflow="hidden" zIndex={1}>
            <Box zIndex={0}>
              <NextImage
                alt="song name"
                src="/images/akon.jpeg"
                width={60}
                height={60}
              />
            </Box>
          </Box>
          <Box>
            <Text fontWeight="bold" fontSize="15px">
              Lonely
            </Text>
            <Text fontSize="13px">Akon</Text>
          </Box>
        </HStack>
      </Box>
      <Spacer />
      <Box>
        <HStack>
          <Box width={30} height={30}>
            <NextImage
              alt="like song button"
              src="/icons/playSm.svg"
              width={30}
              height={30}
            />
          </Box>
        </HStack>
      </Box>
    </Flex>
  );
};

export default PlaylistItem;
