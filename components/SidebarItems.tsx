import { Box, HStack, List, ListItem, Heading, Text } from '@chakra-ui/layout'
import NextImage from 'next/image'
import NextLink from 'next/link'

const SidebarItems = ({ ...props }) => {
  return (
    <Box mb={57}>
      {props.heading && (
        <Heading mb={26} fontWeight={700} fontFamily={'Montserrat'}>
          {props.heading}
        </Heading>
      )}
      <List pl={2}>
        {props.links.map(link => {
          return (
            <ListItem key={Date.now()} mb={35}>
              <NextLink href="/">
                <HStack>
                  <NextImage
                    alt={link.text}
                    src={`/icons/${link.svgIcon}.svg`}
                    width={22}
                    height={22}
                  ></NextImage>
                  <Text>{link.text}</Text>
                </HStack>
              </NextLink>
            </ListItem>
          )
        })}
      </List>
    </Box>
  )
}

export default SidebarItems
