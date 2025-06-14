import React from "react";
import Svg, { ClipPath, Defs, G, Path, Rect } from "react-native-svg";

const EditIcon = ({ w = 18, color = "#333333", secondaryColor = "white" }) => {
  return (
    <Svg
      width={w}
      height={w}
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <G clipPath="url(#clip0_106_1503)">
        <Path
          d="M13.5 7.50023L10.5 4.50023M1.875 16.1252L4.41328 15.8432C4.72339 15.8087 4.87845 15.7915 5.02338 15.7446C5.15197 15.703 5.27434 15.6442 5.38717 15.5698C5.51434 15.4859 5.62466 15.3756 5.84529 15.1549L15.75 5.25023C16.5784 4.4218 16.5784 3.07865 15.75 2.25023C14.9216 1.4218 13.5784 1.4218 12.75 2.25023L2.8453 12.1549C2.62466 12.3756 2.51434 12.4859 2.43048 12.6131C2.35607 12.7259 2.29726 12.8483 2.25564 12.9768C2.20872 13.1218 2.19149 13.2768 2.15703 13.587L1.875 16.1252Z"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_106_1503">
          <Rect width={w} height={w} fill={secondaryColor} />
        </ClipPath>
      </Defs>
    </Svg>
  );
};

export default EditIcon;
