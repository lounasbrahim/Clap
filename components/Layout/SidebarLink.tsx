import { HStack, ListItem, Text } from "@chakra-ui/layout";
import NextImage from "next/image";
import NextLink from "next/link";

const SidebarLink = ({ text, svgIcon, route }) => {
  return (
    <ListItem mb={35}>
      <NextLink href={route} passHref>
        <HStack>
          <NextImage
            alt={text}
            src={`/icons/${svgIcon}.svg`}
            width={22}
            height={22}
          />
          <Text>{text}</Text>
        </HStack>
      </NextLink>
    </ListItem>
  );
};

export default SidebarLink;
