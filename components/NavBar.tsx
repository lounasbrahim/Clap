import { Box, HStack, Flex, Spacer } from '@chakra-ui/layout'
import NextImage from 'next/image'
import { Input } from '@chakra-ui/react'

const NavBar = () => {
  return (
    <Flex mr="30px">
      <Box>
        <HStack>
          <NextImage
            alt="next page"
            src="/icons/prevPage.svg"
            width={40}
            height={40}
          />
          <NextImage
            alt="next page"
            src="/icons/nextPage.svg"
            width={40}
            height={40}
          />
        </HStack>
      </Box>
      <Spacer />
      <Box>
        <HStack>
          <NextImage
            alt="search"
            src="/icons/search.svg"
            width={35}
            height={35}
          />
          <Input placeholder="Search music" border="none" />
          <NextImage
            alt="account"
            src="/icons/account.svg"
            width={35}
            height={35}
          />
        </HStack>
      </Box>
    </Flex>
  )
}

export default NavBar
