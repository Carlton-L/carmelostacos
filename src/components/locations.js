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
        <Heading
          as="h2"
          sx={{
            color: "background",
            lineHeight: "80%",
            my: 6,
            textAlign: "center",
            fontSize: "h2",
            width: ["min-content", "max-content"],
          }}
        >
          Visit Us
        </Heading>
      </Ornament>
      <Flex
        sx={{
          flexDirection: ["column", null, null, "row"],
          justifyContent: ["center", null, null, "space-between"],
          width: ["20em", "26.75em", null, "54.75em"],
          mx: "auto",
          flexWrap: "wrap",
        }}
      >
        {data.edges.map((location, index) => (
          <Flex
            sx={{
              flexDirection: "column",
              alignItems: "center",
              my: 4,
              bg: "secondary",
              borderStyle: "solid",
              borderColor: "text",
              borderWidth: "5px",
              borderRadius: "24px",
              pt: 4,
            }}
            key={index}
          >
            <Heading as="h3" sx={{ fontSize: ["h6", "h5"] }}>
              {location.node.locationname}
            </Heading>
            <Text sx={{ fontSize: ["paragraph", "h6"] }}>
              {location.node.address}
            </Text>
            <Text sx={{ fontSize: ["paragraph", "h6"] }}>
              {location.node.hours}
            </Text>
            <div
              sx={{
                position: "relative",
                textAlign: "right",
                height: ["320px", "420px"],
                width: ["320px", "420px"],
              }}
            >
              <div>
                <iframe
                  sx={{
                    width: ["300px", "400px"],
                    height: ["300px", "400px"],
                    mx: "10px",
                    my: "10px",
                  }}
                  // width="320"
                  // height="320"
                  id="gmap_canvas"
                  src={`https://maps.google.com/maps?q=${encodeURI(
                    location.node.address
                  )}&t=&z=13&ie=UTF8&iwloc=&output=embed`}
                  scrolling="no"
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </Flex>
        ))}
      </Flex>
    </section>
  );
};

export default Locations;
