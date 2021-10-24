import React from "react";

const OpenGraphTags: React.FC = () => {
  return (
    <React.Fragment>
      <meta
        property="og:url"
        content="https://bazar-react.vercel.app/landing"
      />
      {/* thumbnail And title for social media */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Vay online" />
      <meta
        property="og:description"
        content="React Next.js ecommerce template. Build SEO friendly Super store, Grocery delivery app and Multivendor store"
      />
      <meta property="og:image" content="/assets/loyalty/preview.png" />
    </React.Fragment>
  );
};

export default OpenGraphTags;
