/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import * as React from "react";
import { Global, css, CacheProvider } from "@emotion/react";

// import Seo from "../components/seo.js";

import "@fontsource/nanum-pen-script";
import "../css/typography.css";

const MainLayout = ({
  children,
  title = false,
  description = false,
  // eslint-disable-next-line react/prop-types
  image = false,
  path = false,
  props,
}) => {
  return (
    // CacheProvider is necessary to keep Emotion from duplicating styles.css in the html head
    <CacheProvider>
      <>
        <Global
          styles={css`
            body {
              overflow-x: hidden;
            }
          `}
        />
        {/* TODO: Create SEO component */}
        {/* <Seo
          title={title}
          description={description}
          image={image}
          path={path}
        /> */}
        {children}
      </>
    </CacheProvider>
  );
};

export default MainLayout;
