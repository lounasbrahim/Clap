import NextImage from 'next/image'
import { Box, HStack, VStack, Text, Heading, List } from '@chakra-ui/layout'

import logo from '../public/logo.svg'
import SidebarLink from '../components/SidebarLink'

const SideBar = () => {
  return (
    <Box width={250} pl={51} pt={51}>
      <Box mb={57}>
        <HStack>
          <NextImage alt="logo" src={logo} width={44} height={44}></NextImage>
          <Text mr={0} fontWeight={500} fontSize={'21px'} lineHeight={'26px'}>
            Clap
          </Text>
        </HStack>
      </Box>
      <Box mb={57}>
        <Heading mb={26} fontWeight={700} fontFamily={'Montserrat'}>
          Explore
        </Heading>
        <List pl={2}>
          <SidebarLink svgIcon="fire" itemText="Trending" />
          <SidebarLink svgIcon="heart" itemText="Most Liked" />
          <SidebarLink svgIcon="globe" itemText="Around You" />
        </List>
      </Box>
      <Box mb={57}>
        <Heading mb={26} fontWeight={700} fontFamily={'Montserrat'}>
          Library
        </Heading>
        <List pl={2}>
          <SidebarLink svgIcon="playlist" itemText="PlayList" />
          <SidebarLink svgIcon="song" itemText="Songs" />
          <SidebarLink svgIcon="artist" itemText="Artists" />
        </List>
      </Box>
      <Box mb={57}>
        <List>
          <SidebarLink svgIcon="addPlaylist" itemText="Add Playlist" />
        </List>
      </Box>
    </Box>
  )
}

export default SideBar
