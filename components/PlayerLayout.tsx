import { Box, Container } from '@chakra-ui/layout'
import SideBar from './SideBar'
import Player from './Player'

const PlayerLayout = ({ children }) => {
  return (
    <Box>
      <Box zIndex={0}>
        <Box pos="absolute" width="100%">
          <SideBar />
        </Box>
        <Box minH={'100%'} ml="285px" pt="100" pl="30">
          {children}
        </Box>
      </Box>
      <Player />
    </Box>
  )
}

export default PlayerLayout
