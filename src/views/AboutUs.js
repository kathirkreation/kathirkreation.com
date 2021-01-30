import React from "react";
// import sections
import FeaturesSplit from "../components/sections/FeaturesSplit";
import FluidAnimation from "react-fluid-animation";

const AboutUs = () => {
  return (
    <>
      <FluidAnimation
        config={{
          textureDownsample: 1,
          densityDissipation: 0.995,
          velocityDissipation: 0.99,
          pressureDissipation: 0.9,
          pressureIterations: 25,
          curl: 30,
          splatRadius: 0.015,
        }}
        style={{ height: "450px", width: "80vw" }}
      />
      <FeaturesSplit
        invertMobile
        topDivider
        imageFill
        className="illustration-section-02"
      />
    </>
  );
};

export default AboutUs;
