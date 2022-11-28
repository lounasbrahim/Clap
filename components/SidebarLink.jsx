import { ListItem ,  HStack, Text} from "@chakra-ui/layout";
import NextImage from 'next/image'
import Link  from "next/link";

const SidebarLink = ({svgIcon , itemText}) => {
    return ( 
    <ListItem mb={35}>
        <Link href="/">
        <HStack>
          <NextImage
            alt={itemText}
            src={`/icons/${svgIcon}.svg`}
            width={22}
            height={22}
          ></NextImage>
          <Text>{itemText}</Text>
        </HStack>
        </Link>
      </ListItem> );
}
 
export default SidebarLink;

