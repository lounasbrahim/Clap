import { Box, List, Heading } from "@chakra-ui/layout";
import SidebarLink from "./SidebarLink";

const SidebarItems = ({ heading, links }) => {
  return (
    <Box mb={57}>
      {heading && (
        <Heading mb={26} fontWeight={700} fontFamily="Montserrat">
          {heading}
        </Heading>
      )}
      <List pl={2}>
        {links.map((link) => {
          return <SidebarLink key={Date.now()} {...link} />;
        })}
      </List>
    </Box>
  );
};

export default SidebarItems;
