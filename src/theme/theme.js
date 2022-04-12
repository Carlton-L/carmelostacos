// Theme Specification: https://theme-ui.com/theme-spec/
// NOTE: gatsby-config.js does not support ES6 modules, so you should use module.exports
module.exports = {
  colors: {
    text: "#3C3734",
    background: "#F9F6F2",
    primary: "#ED3E3E",
    secondary: "#FBD74A",
    accent: "#F05B5B",
    highlight: "#7CC142",
    muted: "#EBD8BC",
    // red: "ED3E3E",
    // green: "7CC142",
    // blue: "4FBBC4",
    // yellow: "FBD74A",
    // champagne: "EBD8BC",
    // black: "3C3734",
    // white: "F9F6F2",
  },
  space: [0, 2, 4, 8, 12, 16, 24, 32, 40, 48, 64, 80, 96, 160],
  // NOTE: All media queries are be min-width (mobile-first) to take advantage of em scaling
  breakpoints: ["26.75em", "43.25em", "64em", "100em"],
  radii: [0, 10, 32],
  fontSizes: {
    button: "2.827rem",
    h1: "5.653rem",
    h2: "5.653rem",
    h3: "2.827rem",
    h4: "2.827rem",
    h5: "1.999rem",
    h6: "1.414rem",
    paragraph: "1rem",
    huge: "11.301rem",
  },
  fonts: {
    body: "Nanum Pen Script, Brush Script MT",
    heading: "Bumper Sticker, Verdana",
    monospace: "Courier New, monospace",
  },
  borderWidths: [0, 3, 5],
  shadows: {
    button: "4px 4px #F05B5B",
    card: "4px 4px #8ECB5D",
  },
  text: {
    default: {
      color: "text",
      fontFamily: "body",
      fontSize: "paragraph",
    },
    heading: {
      color: "text",
      fontFamily: "heading",
      fontSize: "h2",
    },
  },
  buttons: {
    primary: {
      color: "text",
      bg: "secondary",
      px: [2, 4],
      py: 2,
      border: "button",
      borderRadius: 1,
      borderWidth: 1,
      borderColor: "primary",
      borderStyle: "solid",
      fontSize: "button",
      fontFamily: "heading",
      boxShadow: "button",
      textDecoration: "none",
      cursor: "pointer",
      transition: ".2s ease",
      transitionProperty: "color, background-color",
      "&:hover": {
        bg: "primary",
        color: "background",
      },
    },
    // NOTE: Variant styles can be referenced/reused
    secondary: {
      variant: "buttons.primary",
      bg: "muted",
    },
  },
  cards: {
    primary: {},
  },
  styles: {
    root: {
      fontFamily: "body",
      fontSize: "paragraph",
    },
    h1: {
      fontFamily: "heading",
      fontSize: "h1",
    },
    h2: {
      fontFamily: "heading",
      fontSize: "h2",
    },
    h3: {
      fontFamily: "heading",
      fontSize: "h3",
    },
    h4: {
      fontFamily: "body",
      fontSize: "h4",
    },
    h5: {
      fontFamily: "heading",
      fontSize: "h5",
    },
    h6: {
      fontFamily: "body",
      fontSize: "h6",
    },
  },
};
