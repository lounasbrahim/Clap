import { Box, Heading, Text } from "@chakra-ui/layout";

import PlaylistItem from "./PlaylistItem";

const TopSongsSection = () => {
  return (
    <Box>
      <Box mb="25px">
        <Heading>
          <Text>Top Songs</Text>
        </Heading>
      </Box>
      <Box w="100%" pr="37px">
        <PlaylistItem />
        <PlaylistItem />
        <PlaylistItem />
        <PlaylistItem />
        <PlaylistItem />
      </Box>
    </Box>
  );
};

export default TopSongsSection;
