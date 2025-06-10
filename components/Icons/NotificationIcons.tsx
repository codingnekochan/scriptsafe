import React from "react";
import Svg, { Path } from "react-native-svg";

function NotificationIcon({ w = 16, color = "#000000" }) {
  return (
    <Svg
      width={w}
      height={w}
      viewBox="0 0 16 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M6.01571 15.75C6.54456 16.2168 7.23924 16.5 8.00008 16.5C8.76091 16.5 9.45559 16.2168 9.98444 15.75M12.5001 6C12.5001 4.80653 12.026 3.66193 11.1821 2.81802C10.3381 1.97411 9.19355 1.5 8.00008 1.5C6.8066 1.5 5.66201 1.97411 4.81809 2.81802C3.97418 3.66193 3.50007 4.80653 3.50007 6C3.50007 8.31764 2.91543 9.90447 2.26232 10.9541C1.71142 11.8394 1.43597 12.2821 1.44607 12.4056C1.45725 12.5423 1.48622 12.5944 1.59641 12.6762C1.69592 12.75 2.14452 12.75 3.04172 12.75H12.9584C13.8556 12.75 14.3042 12.75 14.4037 12.6762C14.5139 12.5944 14.5429 12.5423 14.5541 12.4056C14.5642 12.2821 14.2887 11.8394 13.7378 10.9541C13.0847 9.90447 12.5001 8.31764 12.5001 6Z"
        stroke={color}
        stroke-width="1.3"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
}
function NotificationIconVariant({ w = 24, color = "#8904A6" }) {
  return (
    <Svg
      width={w}
      height={w}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M12 6.44043V9.77043"
        stroke={color}
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
      />
      <Path
        d="M12.0199 2C8.3399 2 5.3599 4.98 5.3599 8.66V10.76C5.3599 11.44 5.0799 12.46 4.7299 13.04L3.4599 15.16C2.6799 16.47 3.2199 17.93 4.6599 18.41C9.4399 20 14.6099 20 19.3899 18.41C20.7399 17.96 21.3199 16.38 20.5899 15.16L19.3199 13.04C18.9699 12.46 18.6899 11.43 18.6899 10.76V8.66C18.6799 5 15.6799 2 12.0199 2Z"
        stroke={color}
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
      />
      <Path
        d="M15.3299 18.8203C15.3299 20.6503 13.8299 22.1503 11.9999 22.1503C11.0899 22.1503 10.2499 21.7703 9.64992 21.1703C9.04992 20.5703 8.66992 19.7303 8.66992 18.8203"
        stroke={color}
        stroke-width="1.5"
        stroke-miterlimit="10"
      />
    </Svg>
  );
}

export { NotificationIcon, NotificationIconVariant };
