import * as React from "react";
import { graphql } from "gatsby";

import Layout from "../layout/mainLayout";
import Header from "../components/header";
import Divider from "../components/divider";
import About from "../components/about";
import Gallery from "../components/gallery";

import "@fontsource/nanum-pen-script";
import "../css/typography.css";

// markup
const IndexPage = ({ data }) => {
  return (
    <>
      <Layout
        style={{ width: "100vw", overflow: "hidden", position: "relative" }}
      >
        <Header />
        <Divider variant={1} />
        <main>
          <About data={data.sanityAbout} />
          <Divider variant={2} />
          <Gallery data={data.sanityGallery} />
          <title>Home Page</title>
          <h1>
            Congratulations
            <br />
            <span>— you just made a Gatsby site! </span>
            <span role="img" aria-label="Party popper emojis">
              🎉🎉🎉
            </span>
          </h1>
          <p>
            Edit <code>src/pages/index.js</code> to see this page update in
            real-time.{" "}
            <span id="menu" role="img" aria-label="Sunglasses smiley emoji">
              😎
            </span>
          </p>
        </main>
      </Layout>
    </>
  );
};

const pageQuery = graphql`
  query MyQuery {
    sanityGallery {
      images {
        caption
        asset {
          gatsbyImageData(layout: FIXED, aspectRatio: 1, width: 375)
          url
        }
      }
    }
    sanityAbout {
      abouttitle
      aboutcopy
    }
  }
`;

export { pageQuery };

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
