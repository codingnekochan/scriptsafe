import React from 'react'
import { Text, TextInput, View } from 'react-native'

const CustomTextInput = (
    {
        name = 'Patient',
        value,
        onChangeText,
        placeholder = 'Enter name',
        keyboardType,
        error,
    }: any) => {
    return (
        <View className='mb-6'>
            <Text className='text-sm font-mediumSFDisplay'>{name}</Text>
            <View className='border border-[#D0D5DD] bg-[#F6F6F6] rounded-md mt-1'>
                <TextInput
                    value={value}
                    onChangeText={onChangeText}
                    placeholder={placeholder}
                    className='p-4 h-14 bg-inherit placeholder:font-regularSFDisplay placeholder:text-sm'
                    placeholderTextColor={"#98A2B3"}
                    keyboardType={keyboardType}
                />
            </View>
            {error && <Text className="mt-2 text-red-500 text-xs">{error}</Text>}
        </View>
    )
}

export default CustomTextInput