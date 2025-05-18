import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { NotificationIcon } from '../Icons/NotificationIcons'

const MainPageHeader = () => {
    return (
        <View className='flex-row justify-between items-center my-6'>
            <View>
                <Text className='text-2xl leading-[24px] font-mediumSFDisplay text-[#11142D]'>Hello, Pharm👋🏾 </Text>
            </View>
            <TouchableOpacity>
                <View className='p-2  w-8 h-8 rounded-full justify-center items-center bg-white'>
                    <NotificationIcon w={15}/>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default MainPageHeader