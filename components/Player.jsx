import {Box,Text} from "@chakra-ui/layout" 

const Player = () => {
    return ( <Box 
    pos="fixed"
    bottom={0}  
    w="100%"
    bg='rgba(45,34,34,0.95)'
    backdropFilter='auto'
    backdropInvert='10%'
    backdropBlur='12px'
    borderRadius="20px 20px 0px 0px"
    height="140px"
    zIndex="1">
        <Text>hello</Text>

    </Box>)
}
 
export default Player