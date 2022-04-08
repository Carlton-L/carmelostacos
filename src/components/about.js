/** @jsx jsx */
import { jsx, Heading } from "theme-ui";
import { Box, Flex, Text } from "theme-ui";
import { StaticImage } from "gatsby-plugin-image";
import "@splidejs/react-splide/css";
import { Splide, SplideSlide } from "@splidejs/react-splide";

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
            <Splide
              aria-label="Articles and Reviews"
              options={{
                breakpoints: {
                  1024: {
                    gap: "24px",
                    trimSpace: true,
                    perPage: 3,
                    perMove: 3,
                  },
                  692: {
                    gap: "48px",
                    trimSpace: false,
                    perPage: 1,
                    perMove: 1,
                  },
                },
                start: 0,
                easing: "ease-in-out",
                fixedWidth: "200px",
                focus: "center",
                pagination: false,
                perPage: 1,
                perMove: 1,
                type: "slide",
                gap: "48px",
                arrows: true,
                drag: "free",
                snap: true,
                trimSpace: false,
              }}
            >
              {/* TODO: Replace this section with programatically generated GatsbyImage components fed by query */}
              <SplideSlide>
                <a
                  href="https://www.cntraveler.com/restaurants/seattle/carmelos-tacos"
                  rel="external"
                  target="blank"
                >
                  <Flex
                    sx={{
                      width: "200px",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <StaticImage
                      src="../images/articles/Conde_Nast_Traveler_logo.png"
                      alt="Condé-Nast Traveler Review"
                    />
                  </Flex>
                </a>
              </SplideSlide>
              <SplideSlide>
                <a
                  href="https://www.theinfatuation.com/seattle/reviews/carmelos-tacos"
                  rel="external"
                  target="blank"
                >
                  <Flex
                    sx={{
                      width: "200px",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <StaticImage
                      src="../images/articles/the-infatuation-logo.png"
                      alt="The Infatuation Seattle Review"
                    />
                  </Flex>
                </a>
              </SplideSlide>
              <SplideSlide>
                <a
                  href="https://www.thestranger.com/food-and-drink/2018/11/21/35924001/capitol-hills-best-new-taco-stand-is-hidden-inside-hillcrest-market"
                  rel="external"
                  target="blank"
                >
                  <Flex
                    sx={{
                      width: "200px",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <StaticImage
                      src="../images/articles/StrangerLogo-transparent.webp"
                      alt="The Stranger Seattle Article"
                    />
                  </Flex>
                </a>
              </SplideSlide>
              <SplideSlide>
                <a
                  href="https://www.seattletimes.com/life/food-drink/hidden-on-capitol-hill-a-mexican-street-food-spot-draws-raves/"
                  rel="external"
                  target="blank"
                >
                  <Flex
                    sx={{
                      width: "200px",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <StaticImage
                      src="../images/articles/seattle-times-logo-square.png"
                      alt="Seattle Times Article"
                    />
                  </Flex>
                </a>
              </SplideSlide>
            </Splide>
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
