/* eslint-disable react/prop-types */
/** @jsx jsx */
// eslint-disable-next-line no-unused-vars
import * as React from "react";
import { jsx } from "theme-ui";
import Border1 from "../images/svg/border-1.svg";
import Border2 from "../images/svg/border-2.svg";
import Border3 from "../images/svg/border-3.svg";
import Border4 from "../images/svg/border-4.svg";
import Border5 from "../images/svg/border-5.svg";
import BorderEnd from "../images/svg/border-end.svg";

const Divider = ({ variant }) => {
  const styles = {
    height: "100%",
    width: "1887px",
    position: "absolute",
    left: "-943px",
    top: "-50%",
  };

  // TODO: Better name for this component
  const Component = () => {
    switch (variant) {
      case 1:
        return <Border1 sx={styles} />;
      case 2:
        return <Border2 sx={styles} />;
      case 3:
        return <Border3 sx={styles} />;
      case 4:
        return <Border4 sx={styles} />;
      case 5:
        return <Border5 sx={styles} />;
      case "end":
        return <BorderEnd sx={styles} />;
      default:
        return <Border1 sx={styles} />;
    }
  };

  return (
    <>
      <hr sx={{ border: "none", margin: "0" }} />
      <div
        sx={{
          height: "200px",
          width: "100vw",
          mx: "auto",
          position: "absolute",
          left: "50%",
          zIndex: "1000",
        }}
      >
        {Component()}
      </div>
    </>
  );
};

export default Divider;
