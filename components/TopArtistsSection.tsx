import { Box, Heading, Text, HStack } from "@chakra-ui/layout";

import ArtistsItem from "./ArtistsItem";

const TopArtistsSection = () => {
  return (
    <Box>
      <Box mb="25px" pt="30px">
        <Heading>
          <Text>Top Artists</Text>
        </Heading>
      </Box>
      <Box w="100%" pr="37px">
        <HStack w="100%" overflowX="hidden">
          <Box>
            <ArtistsItem />
          </Box>
          <Box>
            <ArtistsItem />
          </Box>
          <Box>
            <ArtistsItem />
          </Box>
          <Box>
            <ArtistsItem />
          </Box>
          <Box>
            <ArtistsItem />
          </Box>
          <Box>
            <ArtistsItem />
          </Box>
        </HStack>
      </Box>
    </Box>
  );
};

export default TopArtistsSection;
