/** @jsx jsx */
import { jsx } from "theme-ui";
import { Flex } from "theme-ui";
import { StaticImage } from "gatsby-plugin-image";
import { Splide, SplideSlide } from "@splidejs/react-splide";

const Articles = () => {
  return (
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
  );
};

export default Articles;
