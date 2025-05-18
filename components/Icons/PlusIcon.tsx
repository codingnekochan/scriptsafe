import React from 'react'
import Svg, { Path } from "react-native-svg"

const PlusIcon = ({ w = 10, color = "#FFFFFF" }) => {
    return (
        <Svg width={w} height={w} viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Path fillRule="evenodd" clipRule="evenodd" d="M5 0C5.55228 0 6 0.447715 6 1V4H9C9.55229 4 10 4.44772 10 5C10 5.55228 9.55229 6 9 6H6V9C6 9.55229 5.55228 10 5 10C4.44772 10 4 9.55229 4 9V6H1C0.447715 6 0 5.55228 0 5C0 4.44772 0.447715 4 1 4H4V1C4 0.447715 4.44772 0 5 0Z" fill={color} />
        </Svg>

    )
}

export default PlusIcon