import Head from 'next/head'
import Image from 'next/image'
import { SimpleGrid } from '@chakra-ui/layout'

import PlayerLayout from '../components/PlayerLayout'
import SongCard from '../components/SongCard'

export default function Home({ children }) {
  return (
    <>
      <Head>
        <title>Clap - App</title>
      </Head>
      <PlayerLayout>
        <SimpleGrid zIndex={0} columns={3} spacing="12px" pb="140px">
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
      </PlayerLayout>
    </>
  )
}
