import { Box } from "@chakra-ui/layout";

import NextImage from "next/image";

const ArtistsItem = () => {
  return (
    <Box pr="10px" width={100} height={100}>
      <Box w="100%" rounded="full" overflow="hidden" zIndex={1}>
        <Box zIndex={0}>
          <NextImage
            alt="song name"
            src="/images/akon.jpeg"
            width={100}
            height={100}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default ArtistsItem;
