/** @jsx jsx */
import { jsx } from "theme-ui";
import { Box, Flex, NavLink, Button } from "theme-ui";
import { StaticImage } from "gatsby-plugin-image";

const Header = () => {
  return (
    <header
      sx={{
        maxWidth: "1887px",
        display: "grid",
      }}
    >
      <StaticImage
        // You can set a maximum height for the image, if you wish.
        // maxHeight: 600,
        sx={{
          gridArea: "1/1",
          maxHeight: "750px",
        }}
        layout="fullWidth"
        // You can optionally force an aspect ratio for the generated image
        // aspectRatio={3 / 1}
        // This is a presentational image, so the alt should be an empty string
        alt=""
        src={"../images/hero.webp"}
        formats={["auto", "webp", "avif"]}
      />
      {/* Any content here will be centered in the component */}
      <div
        // By using the same grid area for both, they are stacked on top of each other
        // This centers the other elements inside the hero component
        sx={{
          gridArea: "1/1",
          position: "relative",
          placeItems: "start center",
          display: "grid",
          mb: 12,
        }}
      >
        <Box sx={{ flex: "1 1 auto" }}>
          <h1
            sx={{
              mb: 9,
              maxWidth: "470px",
              justifyContent: "center",
              alignItems: "center",
              mx: "auto",
            }}
          >
            <StaticImage
              src="../images/Carmelo's-Logo.svg"
              alt="Carmelo's Tacos"
            />
          </h1>
          <Flex sx={{ flexDirection: ["column", null, "row"] }} as="nav">
            <NavLink href="#menu" sx={{ mx: ["auto", null, 4], my: 3 }}>
              <Button>View Menu</Button>
            </NavLink>
            <NavLink href="" sx={{ mx: ["auto", null, 4], my: 3 }}>
              {/* TODO: Create modal for delivery services */}
              <Button>Order Online</Button>
            </NavLink>
          </Flex>
        </Box>
      </div>
    </header>
  );
};

export default Header;
