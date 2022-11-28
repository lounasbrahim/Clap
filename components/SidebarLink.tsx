import { ListItem, HStack, Text } from '@chakra-ui/layout'
import NextImage from 'next/image'
import NextLink from 'next/link'

const SidebarLink = ({ svgIcon, itemText }) => {
  return (
    <ListItem mb={35}>
      <NextLink href="/">
        <HStack>
          <NextImage
            alt={itemText}
            src={`/icons/${svgIcon}.svg`}
            width={22}
            height={22}
          ></NextImage>
          <Text>{itemText}</Text>
        </HStack>
      </NextLink>
    </ListItem>
  )
}

export default SidebarLink
