/** @jsx jsx */
import { jsx, Heading } from "theme-ui";
import { Box, Flex, Text } from "theme-ui";
import { GatsbyImage } from "gatsby-plugin-image";
import "@splidejs/react-splide/css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import Ornament from "./ornament";
import Instagram from "../images/Instagram-Logo.svg";
import BorderImage from "../images/svg/border-small-1.svg";

const Border = () => {
  return (
    <div
      sx={{
        height: "30px",
        width: "100vw",
        mx: "auto",
        position: "absolute",
        left: "50%",
        zIndex: "1000",
      }}
    >
      <BorderImage
        sx={{
          height: "100%",
          width: "1887px",
          position: "absolute",
          left: "-943px",
          top: "-50%",
        }}
      />
    </div>
  );
};

const Gallery = ({ data }) => {
  return (
    <section
      sx={{
        maxWidth: "1887px",
        bg: "background",
        pt: ["70px", "80px", "100px"],
        pb: 5,
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
        <Border />
        <Splide
          aria-label="Photo Gallery"
          options={{
            breakpoints: {
              1875: {
                perPage: 5,
              },
              1500: {
                perPage: 4,
              },
              1125: {
                perPage: 3,
              },
              750: {
                perPage: 2,
              },
            },
            fixedWidth: "375px",
            gap: "0px",
            focus: "center",
            pagination: false,
            perPage: 7,
            trimSpace: "move",
            // type: "fade",
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
        <Border />
      </Box>
    </section>
  );
};

export default Gallery;
