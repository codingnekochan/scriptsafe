import React from "react";
import Svg, { G, Path } from "react-native-svg";

const ChevronUpIcon = ({ w = 12, h = 8, color = "#1E1E1E" }) => {
  return (
    <Svg
      width={w}
      height={h}
      viewBox="0 0 12 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <G transform="rotate(180 6 4)">
        {/* Rotates around the center of viewBox */}
        <Path
          d="M1 1.5L6 6.5L11 1.5"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
    </Svg>
  );
};

export default ChevronUpIcon;
