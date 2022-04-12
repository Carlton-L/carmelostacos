/** @jsx jsx */
import { jsx, Heading } from "theme-ui";
import { Box, Flex, Text } from "theme-ui";
import { GatsbyImage } from "gatsby-plugin-image";
import "@splidejs/react-splide/css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import Ornament from "./ornament";
import Instagram from "../images/Instagram-Logo.svg";

const Gallery = ({ data }) => {
  return (
    <section
      sx={{
        maxWidth: "1887px",
        bg: "background",
        pt: "100px",
      }}
    >
      <Ornament variant={2}>
        <Flex sx={{ position: "relative" }}>
          <a
            href="https://www.instagram.com/carmelostacos/"
            rel="noopener"
            target="blank"
            sx={{
              position: "absolute",
              width: "100%",
              height: "100%",
              zIndex: 1000,
            }}
          />
          <Heading
            as={"h3"}
            sx={{
              mx: 6,
              // Width is 110% to account for differences in font size between browsers
              maxWidth: "auto",
              textAlign: "center",
              fontSize: ["h6", "h5"],
              my: "auto",
            }}
          >
            Follow us on <br /> Instagram!
          </Heading>
          <Instagram
            sx={{
              // NOTE: Width and height must be set explicitly for Safari, otherwise it is set to 150px arbitrarily
              width: ["64px", "85px"],
              height: ["64px", "85px"],
              mr: "24px",
            }}
          />
        </Flex>
      </Ornament>
      <Box sx={{ mt: 5 }}>
        <Splide
          aria-label="Photo Gallery"
          options={{
            type: "loop",
            arrows: false,
            trimSpace: true,
            fixedWidth: "375px",
            easing: "ease-in-out",
            gap: "0px",
            pagination: false,
            perPage: 5,
            start: 1,
            focus: "center",
          }}
        >
          {data.images.map((element, index) => {
            return (
              <SplideSlide key={index}>
                <GatsbyImage
                  image={element.asset.gatsbyImageData}
                  alt={element.caption}
                />
              </SplideSlide>
            );
          })}
        </Splide>
      </Box>
    </section>
  );
};

export default Gallery;
