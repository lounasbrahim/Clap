import { Box } from '@chakra-ui/layout'
import SideBar from './SideBar'
import Player from './Player'

const PlayerLayout = ({ children }) => {
  return (
    <Box backgroundColor={'rgba(200,200,200,0.1)'} height={'100vh'}>
      <SideBar></SideBar>
      {children}
      <Player></Player>
    </Box>
  )
}

export default PlayerLayout
