import Head from 'next/head'
import Image from 'next/image'
import { Box, Heading, Text, Flex, Spacer } from '@chakra-ui/layout'

import PlayerLayout from '../components/PlayerLayout'
import DiscoverSection from '../components/DiscoverSection'
import TopSongsSection from '../components/TopSongsSection'
import TopArtistsSection from '../components/TopArtistsSection'

export default function Home({ children }) {
  return (
    <>
      <Head>
        <title>Home - Clap</title>
      </Head>
      <PlayerLayout>
        <Box pb="140px">
          <Flex>
            <Box w="calc(60% - 75px)">
              <DiscoverSection />
            </Box>
            <Spacer />
            <Box w="40%">
              <TopSongsSection />
              <TopArtistsSection />
            </Box>
          </Flex>
        </Box>
      </PlayerLayout>
    </>
  )
}
