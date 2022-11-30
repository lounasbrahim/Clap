import { Box, Text, HStack, Flex, Spacer } from '@chakra-ui/layout'
import NextImage from 'next/image'
import ArtistsItem from './ArtistsItem'

const Player = () => {
  return (
    <Flex
      justify="center"
      align="center"
      pos="fixed"
      bottom={0}
      w="100%"
      bg="rgba(26,9,9, 60%)"
      backdropFilter="auto"
      backdropInvert="10%"
      backdropBlur="12px"
      borderRadius="20px 20px 0px 0px"
      height="140px"
      zIndex="1"
      paddingX="60px"
    >
      <Box>
        <HStack>
          <ArtistsItem />
          <Box pl="15px">
            <Text fontWeight="bold" fontSize="15px">
              Lonely
            </Text>
            <Text fontSize="13px">Akon</Text>
          </Box>
        </HStack>
      </Box>
      <Spacer />
      <Box>
        <NextImage
          alt={'play'}
          width={40}
          height={40}
          src="/icons/pauseSong.svg"
        />
      </Box>
      <Spacer />
      <Box>
        <NextImage
          alt={'sound'}
          width={30}
          height={30}
          src="/icons/sound.svg"
        />
      </Box>
    </Flex>
  )
}

export default Player
