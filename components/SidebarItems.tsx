import { Box, HStack, List, ListItem, Heading, Text } from '@chakra-ui/layout'
import NextImage from 'next/image'
import NextLink from 'next/link'
import SidebarLink from './SidebarLink'

const SidebarItems = ({ heading, links }) => {
  return (
    <Box mb={57}>
      {heading && (
        <Heading mb={26} fontWeight={700} fontFamily={'Montserrat'}>
          {heading}
        </Heading>
      )}
      <List pl={2}>
        {links.map(link => {
          return <SidebarLink {...link}></SidebarLink>
        })}
      </List>
    </Box>
  )
}

export default SidebarItems
