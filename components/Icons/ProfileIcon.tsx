import React from "react";
import Svg, { Path } from "react-native-svg";

const ProfileIcon = ({ w = 22, color = "#828282" }) => {
  return (
    <Svg
      width={w}
      height={w}
      viewBox="0 0 22 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M4.3163 18.9814C4.92462 17.5482 6.34492 16.543 8 16.543H14C15.6551 16.543 17.0754 17.5482 17.6837 18.9814M15 9.04297C15 11.2521 13.2091 13.043 11 13.043C8.79086 13.043 7 11.2521 7 9.04297C7 6.83383 8.79086 5.04297 11 5.04297C13.2091 5.04297 15 6.83383 15 9.04297ZM21 11.543C21 17.0658 16.5228 21.543 11 21.543C5.47715 21.543 1 17.0658 1 11.543C1 6.02012 5.47715 1.54297 11 1.54297C16.5228 1.54297 21 6.02012 21 11.543Z"
        stroke={color}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};

export default ProfileIcon;
