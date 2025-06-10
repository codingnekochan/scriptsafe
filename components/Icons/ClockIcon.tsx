import React from "react";
import Svg, { ClipPath, Defs, G, Path, Rect } from "react-native-svg";

const ClockIcon = ({ w = 14, color = "#5E5E5E", secondaryColor = "white" }) => {
  return (
    <Svg
      width={w}
      height={w}
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <G clipPath="url(#clip0_105_787)">
        <Path
          d="M6.99984 3.50033V7.00033L9.33317 8.16699M12.8332 7.00033C12.8332 10.222 10.2215 12.8337 6.99984 12.8337C3.77818 12.8337 1.1665 10.222 1.1665 7.00033C1.1665 3.77866 3.77818 1.16699 6.99984 1.16699C10.2215 1.16699 12.8332 3.77866 12.8332 7.00033Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_105_787">
          <Rect width={w} height={w} fill={secondaryColor} />
        </ClipPath>
      </Defs>
    </Svg>
  );
};

export default ClockIcon;
