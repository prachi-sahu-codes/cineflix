import React from "react";
import { ColorRing } from "react-loader-spinner";

const Loader = () => {
  return (
    <>
      <ColorRing
        visible={true}
        height="20"
        width="20"
        ariaLabel="color-ring-loading"
        wrapperStyle={{}}
        wrapperClass="color-ring-wrapper"
        colors={["#ffd62c", "#ffd62c", "#ffd62c", "#ffd62c", "#ffd62c"]}
      />
    </>
  );
};

export default Loader;
