import Head from 'next/head'
import Image from 'next/image'
import { Box, Heading, Text } from '@chakra-ui/layout'

import PlayerLayout from '../components/PlayerLayout'
import SongsGrid from '../components/SongsGrid'

export default function Home({ children }) {
  return (
    <>
      <Head>
        <title>Clap - App</title>
      </Head>
      <PlayerLayout>
        <Box pb="140px">
          <Box mb="25px">
            <Heading>
              <Text>Discover</Text>
            </Heading>
          </Box>
          <SongsGrid />
        </Box>
      </PlayerLayout>
    </>
  )
}
