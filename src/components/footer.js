/** @jsx jsx */
import * as React from "react";
import { jsx, Box, Button, Flex, Heading, Link, Text } from "theme-ui";

const Footer = ({ data }) => {
  const linkStyles = {
    textDecoration: "none",
    color: "background",
    fontSize: ["h5", "h4"],
    cursor: "pointer",
    mx: [5, 8, null, 3],
    "&:hover": {
      color: "highlight",
    },
    zIndex: "2000",
    textTransform: "lowercase",
  };
  return (
    <footer
      sx={{
        minHeight: "200px",
        bg: "text",
        pt: [5, null, null, 10],
        pb: 8,
      }}
    >
      <Flex
        sx={{
          flexDirection: ["column", null, null, "row"],
          justifyContent: "center",
          mx: "auto",
          width: ["20em", "26.75em", null, "auto"],
        }}
      >
        <Link
          sx={{
            ...linkStyles,
          }}
          href={`mailto:${data.email}`}
        >
          {data.email}
        </Link>
        <Text
          sx={{
            color: "background",
            fontSize: ["h5", "h4"],
            display: ["none", null, null, "flex"],
          }}
        >
          |
        </Text>
        <Text sx={{ ...linkStyles }}>{data.phone}</Text>
        {data.socials.map((social) => (
          <>
            <Text
              sx={{
                color: "background",
                fontSize: ["h5", "h4"],
                display: ["none", null, null, "flex"],
              }}
            >
              |
            </Text>
            <Link sx={{ ...linkStyles }} href={social.url}>
              {social.name}
            </Link>
          </>
        ))}
      </Flex>
    </footer>
  );
};

export default Footer;
