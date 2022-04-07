import * as React from "react";
import { Button } from "theme-ui";

import Header from "../components/header";
import Divider from "../components/divider";
import About from "../components/about";

import "@fontsource/nanum-pen-script";
import "../css/typography.css";

// markup
const IndexPage = () => {
  return (
    <>
      <Header />
      <Divider variant={1} />
      <main>
        <About />
        <Divider variant={2} />
        <title>Home Page</title>
        <h1>
          Congratulations
          <br />
          <span>— you just made a Gatsby site! </span>
          <span role="img" aria-label="Party popper emojis">
            🎉🎉🎉
          </span>
        </h1>
        <Button>View Menu</Button>
        <Button variant="secondary">Order Online</Button>
        <p>
          Edit <code>src/pages/index.js</code> to see this page update in
          real-time.{" "}
          <span id="menu" role="img" aria-label="Sunglasses smiley emoji">
            😎
          </span>
        </p>
      </main>
    </>
  );
};

export default IndexPage;

/*
Seo
Header
Main (
  Section (
    Heading

  )
  Divider

)
Footer


*/
