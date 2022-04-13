/** @jsx jsx */
import { jsx, Box, Button, Flex, Heading, Text } from "theme-ui";
import Ornament from "./ornament";

const Locations = ({ data }) => {
  return (
    <section
      sx={{
        maxWidth: "1887px",
        bg: "primary",
        pt: 12,
        pb: 12,
      }}
    >
      <Ornament variant={3}>
        <Heading as="h2" mx={5} color="background">
          Visit Us
        </Heading>
      </Ornament>
    </section>
  );
};

export default Locations;
