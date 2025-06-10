import React from "react";
import Svg, { Path } from "react-native-svg";

const BackIcon = ({ w = 24, color = "#071E3B" }) => {
  return (
    <Svg
      width="24"
      height="25"
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M9.57 6.91895L3.5 12.9889L9.57 19.0589"
        stroke={color}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M20.4999 12.9893H3.66992"
        stroke={color}
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default BackIcon;
