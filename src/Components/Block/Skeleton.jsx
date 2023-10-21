import React from "react";
import ContentLoader from "react-content-loader";

const Skeleton = () => (
  <ContentLoader
    className="pizza-block"
    speed={2}
    width={280}
    height={460}
    viewBox="0 0 280 460"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb">
    <circle cx="134" cy="129" r="125" />
    <rect x="0" y="272" rx="10" ry="10" width="280" height="25" />
    <rect x="0" y="313" rx="10" ry="10" width="280" height="88" />
    <rect x="0" y="418" rx="10" ry="10" width="96" height="40" />
    <rect x="125" y="416" rx="10" ry="10" width="157" height="40" />
  </ContentLoader>
);

export default Skeleton;