import React from "react";

// PACKAGE
import { Helmet } from "react-helmet";

// Used on every screen/page for meta-details
const Metatag = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keyword" content={keywords} />
    </Helmet>
  );
};

Metatag.defaultProps = {
  title: "Welcome to GameStreet",
  description:
    "Shop GameStreet, one of the largest gaming retailers in the Middle East and a one-stop destination for all gaming needs.",
  keywords:
    "gaming, playstation, xbox, nintendo, ps4, ps5, Xbox Series X, Xbox Series S, Xbox One, video game, games",
};

export default Metatag;
