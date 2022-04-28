import * as React from "react";
import Helmet from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

const Seo = (props) => {
  const data = useStaticQuery(graphql`
    query GetSiteMetadata {
      site {
        siteMetadata {
          description
          image
          siteUrl
          title
        }
      }
    }
  `);

  const defaults = data?.site?.siteMetadata;

  const title = props.title || defaults.title;
  const description = props.description || defaults.description;
  const image = new URL(
    props.image ||
      "/carlton-dev/image/upload/v1634593368/Shuffle-for-Spotify/ShuffleForSpotify-og-01_rpa89w.jpg",
    defaults.image,
    defaults.siteUrl
  );
  const url = new URL(props.path || "/shuffleforspotify/", defaults.siteUrl);

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      {image && <meta name="image" content={image} />}

      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {image && <meta property="og:image" content={image} />}

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {image && <meta name="twitter:image" content={image} />}
      <meta itemScope itemType="http://schema.org/Restaurant">
        <meta itemProp="name" content="Carmelo's Tacos" />
        <meta itemProp="acceptsReservations" content={false} />
        <meta itemProp="image" content="https://i.imgur.com/GQjw7Ry.png" />
        {/* TODO: Link to menu url */}
        <meta itemProp="hasMenu" content="menu url" />
        <meta itemProp="servesCuisine" content="Mexican" />
        <meta
          itemProp="starRating"
          itemScope
          itemType="https://schema.org/Rating"
        >
          <meta itemProp="author" content="Tripadvisor" />
          <meta itemProp="ratingValue" content="4" />
          <meta
            itemProp="ratingExplanation"
            content="Homemade masa tacos with just a few flavors. The al pastor is amazing as are the asadas (The others are good too)."
          />
          <meta
            itemProp="url"
            content="https://www.tripadvisor.com/Restaurant_Review-g60878-d18281126-Reviews-Carmelos_Tacos-Seattle_Washington.html"
          />
        </meta>
        <meta itemProp="currenciesAccepted" content="USD" />
        <meta itemProp="paymentAccepted" content="Cash, Credit Card" />
        <meta itemProp="priceRange" content="$" />
        <meta itemProp="founder" content="Carmelo Gaspar" />
        <meta itemProp="url" content="https://carmelostacos.com" />
      </meta>
      <meta name="format-detection" content="telephone=no"></meta>
    </Helmet>
  );
};

export default Seo;

{
  /*  */
}
