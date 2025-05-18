import React from 'react'
import { Text, View } from 'react-native'
import PrimaryButton from '../buttons/PrimaryButton'

const GetScriptSafeCard = ({ text, subtext, icon, id }: { text: string, subtext: string, icon: any, id: any }) => {
    return (
        <View className='flex-row gap-4 py-4 px-3 border border-[#E8E8E8] rounded-2xl bg-white'>
            <View
                className={
                    `w-12 h-12 justify-center items-center rounded-full
                     ${id === 'register' ? 'bg-[#D7F1FF]' : id === 'inventory' ? 'bg-[#FFFED7]' : 'bg-[#F8D7FF]'}`}
            >
                {icon}
            </View>
            <View className='flex-1 flex-start'>
                <View className='gap-2'>
                    <Text className='font-boldSFDisplay text-sm text-[#333333]'>{text}</Text>
                    <Text className='text-[#5C5C5C] font-mediumSFDisplay text-xs'>{subtext}</Text>
                    <View className='mt-[2px] w-[110px]'>
                        <PrimaryButton
                            text={'Get started'}
                            className='py-4'
                            fontFamily={'font-mediumSFDisplay'}
                            fontSize={12}
                            bg={'#317BFF'}
                            borderWidth={1}
                            borderColor={'#2E90FA'}
                        />
                    </View>
                </View>
            </View>
        </View>
    )
}

export default GetScriptSafeCard