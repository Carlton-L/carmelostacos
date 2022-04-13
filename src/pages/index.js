import * as React from "react";
import { graphql } from "gatsby";

import Layout from "../layout/mainLayout";
import Header from "../components/header";
import Divider from "../components/divider";
import About from "../components/about";
import Gallery from "../components/gallery";
import Menu from "../components/menu";
import Locations from "../components/locations";

import "@fontsource/nanum-pen-script";
import "../css/typography.css";

// markup
const IndexPage = ({ data }) => {
  return (
    <>
      <Layout
        style={{
          width: "100vw",
          overflow: "hidden",
          position: "relative",
          maxWidth: "1887px",
        }}
      >
        <Header />
        <Divider variant={1} />
        <main>
          <About data={data.sanityAbout} />
          <Divider variant={2} />
          <Gallery data={data.sanityGallery} />
          <Menu data={data.allSanityMenu} />
          <Divider variant={4} />
          <Locations data={data.allSanityLocation} />
          <Divider variant="end" />
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
            <span role="img" aria-label="Sunglasses smiley emoji">
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
    allSanityMenu(sort: { fields: orderRank }) {
      edges {
        node {
          name
          menulist {
            itemdescription
            itemname
            itemnote
            itemprice
            subitemlist {
              subitemname
              subitemprice
            }
          }
        }
      }
    }
    allSanityLocation {
      edges {
        node {
          address
          hours
          locationname
        }
      }
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
