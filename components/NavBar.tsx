import { Box, HStack } from '@chakra-ui/layout'
import NextImage from 'next/image'

const NavBar = () => {
  return (
    <Box>
      <HStack>
        <NextImage
          alt="next page"
          src="/icons/prevPage.svg"
          width={50}
          height={50}
        />
        <NextImage
          alt="next page"
          src="/icons/nextPage.svg"
          width={50}
          height={50}
        />
      </HStack>
    </Box>
  )
}

export default NavBar
