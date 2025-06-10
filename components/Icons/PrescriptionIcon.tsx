import React from "react";
import Svg, { Path } from "react-native-svg";

const PrescriptionIcon = ({ w = 25, color = '"#828282"' }) => {
  return (
    <Svg
      width={w}
      height={w}
      viewBox="0 0 23 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M21.5 10.543H17.5L14.5 19.543L8.5 1.54297L5.5 10.543H1.5"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default PrescriptionIcon;
