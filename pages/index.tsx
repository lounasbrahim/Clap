import Head from "next/head";
import { Box, Flex, Spacer } from "@chakra-ui/layout";

import PlayerLayout from "../components/Layout";
import DiscoverSection from "../components/DiscoverSection";
import TopSongsSection from "../components/TopSongsSection";
import TopArtistsSection from "../components/TopArtistsSection";

const Home = () => {
  return (
    <>
      <Head>
        <title>Home - Clap</title>
      </Head>
      <PlayerLayout>
        <Box pb="140px" zIndex={1}>
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
  );
};

export default Home;
