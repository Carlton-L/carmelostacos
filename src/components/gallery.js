/** @jsx jsx */
import { jsx, Heading } from "theme-ui";
import { Box, Flex, Text } from "theme-ui";
import { GatsbyImage } from "gatsby-plugin-image";
import "@splidejs/react-splide/css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import Ornament from "./ornament";
import Instagram from "../images/Instagram-Logo.svg";

const Gallery = () => {
  return (
    <section
      sx={{
        maxWidth: "1887px",
        bg: "background",
        pt: "100px",
      }}
    >
      <Ornament variant={2}>
        <a
          href="https://www.instagram.com/carmelostacos/"
          rel="noopener"
          target="blank"
        >
          <Flex>
            <Heading
              as={"h3"}
              sx={{
                m: 6,
                // Width is 110% to account for differences in font size between browsers
                maxWidth: "auto",
                textAlign: "center",
                fontSize: ["h6", "h5"],
              }}
            >
              {/* TODO: Replace title with Sanity.io query */}
              Follow us on <br /> Instagram
            </Heading>
            <Instagram
              sx={{ width: ["64px", "85px"], my: "auto", mr: "24px" }}
            />
          </Flex>
        </a>
      </Ornament>
    </section>
  );
};

export default Gallery;
