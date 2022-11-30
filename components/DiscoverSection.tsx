import { SimpleGrid, Box, Heading, Text } from '@chakra-ui/layout'
import SongCard from '../components/SongCard'

const SongsGrid = () => {
  return (
    <Box>
      <Box mb="25px">
        <Heading>
          <Text>Discover</Text>
        </Heading>
      </Box>
      <SimpleGrid zIndex={0} columns={4} spacing="12px">
        <SongCard />
        <SongCard />
        <SongCard />
        <SongCard />
        <SongCard />
        <SongCard />
        <SongCard />
        <SongCard />
        <SongCard />
      </SimpleGrid>
    </Box>
  )
}

export default SongsGrid
