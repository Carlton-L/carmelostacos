/** @jsx jsx */
import { jsx } from "theme-ui";
// eslint-disable-next-line no-unused-vars
import * as React from "react";
import Ornament1 from "../images/svg/ornament-1.svg";
import Ornament2 from "../images/svg/ornament-2.svg";
import Ornament3 from "../images/svg/ornament-3.svg";
import Ornament4 from "../images/svg/ornament-4.svg";
import Ornament5 from "../images/svg/ornament-5.svg";

// TODO: Better name for this component
const Component = ({ variant, side }) => {
  const styles = {
    minHeight: "85px",
    width: "1830px",
    position: "absolute",
  };
  const orientation = side === "left" ? { right: "0" } : { left: "0" };
  switch (variant) {
    case 1:
      return <Ornament1 sx={{ ...orientation, ...styles }} />;
    case 2:
      return <Ornament2 sx={{ ...orientation, ...styles }} />;
    case 3:
      return <Ornament3 sx={{ ...orientation, ...styles }} />;
    case 4:
      return <Ornament4 sx={{ ...orientation, ...styles }} />;
    case 5:
      return <Ornament5 sx={{ ...orientation, ...styles }} />;
    default:
      return <Ornament1 sx={{ ...orientation, ...styles }} />;
  }
};

const Ornament = ({ variant, children }) => {
  return (
    <span
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        overflowX: "hidden",
      }}
    >
      <div
        sx={{
          position: "relative",
          height: "85px",
          width: "0px",
        }}
      >
        <Component variant={variant} side="left" />
      </div>
      {children}
      <div
        sx={{
          position: "relative",
          height: "85px",
          width: "0px",
        }}
      >
        <Component variant={variant} side="right" />
      </div>
    </span>
  );
};

export default Ornament;
