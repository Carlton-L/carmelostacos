/** @jsx jsx */
import { jsx, Heading } from "theme-ui";
import { Box, Flex, Text, NavLink, Button } from "theme-ui";
import { StaticImage } from "gatsby-plugin-image";

const About = () => {
  return (
    <section
      sx={{
        maxWidth: "1887px",
        bg: "secondary",
      }}
    >
      <Flex
        sx={{
          maxWidth: ["18.75em", "26em", "42em", "55em"],
          pt: "100px",
          flexDirection: "column",
          margin: "0 auto",
        }}
      >
        <Box sx={{ textAlign: "left" }}>
          <Heading
            as={"h2"}
            sx={{
              lineHeight: "80%",
              mb: 6,
              width: "100%",
              textAlign: ["center", null, null, "left"],
            }}
          >
            {/* TODO: Replace title with Sanity.io query */}
            About Us
          </Heading>
          <Text
            sx={{ fontSize: "h6", fontFamily: "heading", textAlign: "left" }}
          >
            {/* TODO: Replace copy with Sanity.io query */}
            We’re a FAMILY OWNed AND OPERATED MEXICO CITY STREET STYLE TAQUERIA
            OFFERING BURRITOS, QUESADILLAS, MULITAS, and TACOS ON FREShLY HOME
            MADE TORTILLAS.
          </Text>
        </Box>
      </Flex>
    </section>
  );
};

export default About;
