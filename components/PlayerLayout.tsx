import { Box } from '@chakra-ui/layout'
import SideBar from './SideBar'
import Player from './Player'

const PlayerLayout = ({ children }) => {
  return (
    <Box backgroundColor={'rgba(200,200,200,0.1)'} height={'100vh'}>
      <SideBar w="252px" pos="absolute"></SideBar>
      <Box pos="absolute" ml="285px" height="calc(100% - 80px)" top="100">
        {children}
      </Box>
      <Player></Player>
    </Box>
  )
}

export default PlayerLayout
