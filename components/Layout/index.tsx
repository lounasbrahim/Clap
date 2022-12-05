import { Box } from "@chakra-ui/layout";

import SideBar from "./SideBar";
import Player from "./Player";
import NavBar from "./NavBar";

const PlayerLayout = ({ children }) => {
  return (
    <Box>
      <Box zIndex={0}>
        <Box pos="absolute" width="100%">
          <SideBar />
        </Box>
        <Box pt="39px" ml="285px" pl="30px">
          <Box mb="35px">
            <NavBar />
          </Box>
          <Box minH="100%">{children}</Box>
        </Box>
      </Box>
      <Player />
    </Box>
  );
};

export default PlayerLayout;
