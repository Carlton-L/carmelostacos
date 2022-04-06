import * as React from "react";

import Seo from "../components/seo.js";

import "@fontsource/nanum-pen-script";
import "../css/typography.css";

const MainLayout = ({
  children,
  title = false,
  description = false,
  image = false,
  path = false,
  props,
}) => {
  return (
    <>
      <Seo title={title} description={description} image={image} path={path} />
      {children}
    </>
  );
};

export default MainLayout;
