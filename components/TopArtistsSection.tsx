import { Box, Heading, Text, HStack } from '@chakra-ui/layout'
import NextImage from 'next/image'

import ArtistsItem from './ArtistsItem'

const TopArtistsSection = () => {
  return (
    <Box>
      <Box mb="25px" pt="30px">
        <Heading>
          <Text>Top Artists</Text>
        </Heading>
      </Box>
      <Box w="100%" pr="37px">
        <HStack>
          <ArtistsItem />
          <ArtistsItem />
          <ArtistsItem />
          <ArtistsItem />
          <ArtistsItem />
          <ArtistsItem />
        </HStack>
      </Box>
    </Box>
  )
}

export default TopArtistsSection
