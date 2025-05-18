import React from 'react'
import Svg, { Path } from 'react-native-svg'

const SearchIcon = ({ w = 21, color = '#828282' }) => {
    return (
        <Svg width={w} height={w} viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Path d="M19.5 19.543L15.15 15.193M17.5 9.54297C17.5 13.9612 13.9183 17.543 9.5 17.543C5.08172 17.543 1.5 13.9612 1.5 9.54297C1.5 5.12469 5.08172 1.54297 9.5 1.54297C13.9183 1.54297 17.5 5.12469 17.5 9.54297Z" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </Svg>

    )
}

export default SearchIcon