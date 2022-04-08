/** @jsx jsx */
import { jsx, Heading } from "theme-ui";
import { Box, Flex, Text } from "theme-ui";
import { StaticImage } from "gatsby-plugin-image";
import "@splidejs/react-splide/css";

import Articles from "./articles";

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
          flexDirection: ["column", null, null, "row"],
          margin: "0 auto",
        }}
      >
        <Box sx={{ textAlign: "left", mb: 5 }}>
          <Heading
            as={"h2"}
            sx={{
              lineHeight: "80%",
              mb: 6,
              mt: [6, null, null, 9],
              // Width is 110% to account for differences in font size between browsers
              width: ["100%", null, null, "110%"],
              textAlign: ["center", null, null, "left"],
            }}
          >
            {/* TODO: Replace title with Sanity.io query */}
            About Us
          </Heading>
          <Text
            sx={{
              fontSize: "h6",
              fontFamily: "heading",
              textAlign: "left",
            }}
          >
            {/* TODO: Replace copy with Sanity.io query */}
            We’re a FAMILY OWNed AND OPERATED MEXICO CITY STREET STYLE TAQUERIA
            OFFERING BURRITOS, QUESADILLAS, MULITAS, and TACOS ON FREShLY HOME
            MADE TORTILLAS.
          </Text>
          <br />
          <Box
            sx={{
              textAlign: "center",
              mx: "auto",
              mt: [6, null, null, 8],
            }}
          >
            <Text sx={{ fontSize: "h6" }}>
              See what people are saying about Carmelo&apos;s!
            </Text>
          </Box>
          <Box
            sx={{
              width: ["296px", null, "648px", "296px"],
              mx: "auto",
            }}
          >
            <Articles />
          </Box>
        </Box>
        <Box sx={{ textAlign: "center", flexShrink: "0" }}>
          <StaticImage
            src="../images/Carmelo-Gaspar.png"
            alt="Photo of owner Carmelo Gaspar"
            sx={{
              maxWidth: "512px",
              marginLeft: [null, null, null, "-48px"],
            }}
          />
        </Box>
      </Flex>
    </section>
  );
};

export default About;
