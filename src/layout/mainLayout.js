/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import * as React from "react";
import { Global, css } from "@emotion/react";
import OGImage from "../images/OGImage.png";

import Seo from "../components/seo.js";

import "@fontsource/nanum-pen-script";
import "../css/typography.css";

const MainLayout = ({
  children,
  title = false,
  description = false,
  image = OGImage,
  path = false,
  props,
}) => {
  return (
    // Wrapper div to fix overflow issue on mobile
    <div css={{ overflowX: "hidden", position: "relative" }}>
      <div
        css={{
          maxWidth: "1887px",
          marginRight: "auto",
          marginLeft: "auto",
        }}
      >
        <Global
          styles={css`
            body {
              background-color: #3c3734;
            }
          `}
        />
        {/* TODO: Create SEO component */}
        <Seo
          title={title}
          description={description}
          image={image}
          path={path}
        />
        {children}
      </div>
    </div>
  );
};

export default MainLayout;
