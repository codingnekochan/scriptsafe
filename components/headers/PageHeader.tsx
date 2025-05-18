import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import BackIcon from '../Icons/BackIcon'

const PageHeader = ({ backIcon, backIconOnPress, header = 'Prescription Verification' }: any) => {
    return (
        <View className='flex-row justify-center items-center pt-4 pb-3'>
            {backIcon &&
                <TouchableOpacity onPress={backIconOnPress}>
                    <BackIcon />
                </TouchableOpacity>
            }
            <View className='self-center flex-1 items-center'>
                <Text className=' text-[#0C0D10] text-xl font-boldSFDisplay'>{header}</Text>
            </View>
            <View className='w-6' />
        </View>
    )
}

export default PageHeader