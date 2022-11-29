import NextImage from 'next/image'
import { Box, HStack, VStack, Text, Heading, List } from '@chakra-ui/layout'

import SidebarItems from '../components/SidebarItems'
import BrandLogo from '../components/BrandLogo'
import {
  libraryLinks,
  exploreLinks,
  playlistLinks
} from '../utils/SideBarItemsObj'

const SideBar = () => {
  return (
    <Box
      width={250}
      pl={51}
      pt={51}
      overflow="auto"
      height={'100vh'}
      sx={{
        '&::-webkit-scrollbar, &::-moz-scrollbar': {
          width: '10px',
          borderRadius: '8px',
          backgroundColor: `rgba(0, 0, 0, 0.0)`
        },
        '&::-webkit-scrollbar-thumb, &::-moz-scrollbar': {
          backgroundColor: `rgba(0, 0, 0, 0.05)`
        }
      }}
    >
      <BrandLogo />
      <SidebarItems {...libraryLinks} />
      <SidebarItems {...exploreLinks} />
      <Box mb={57}>
        <SidebarItems {...playlistLinks} />
      </Box>
    </Box>
  )
}

export default SideBar
