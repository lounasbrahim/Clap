import { SimpleGrid } from '@chakra-ui/layout'
import SongCard from '../components/SongCard'

const SongsGrid = () => {
  return (
    <SimpleGrid zIndex={0} columns={3} spacing="12px">
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
  )
}

export default SongsGrid
