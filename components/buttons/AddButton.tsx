import React from 'react'
import { View } from 'react-native'
import PlusIcon from '../Icons/PlusIcon'
import PrimaryButton from './PrimaryButton'

const AddButton = ({ text = 'Start Prescription Verification', className = 'px-8 py-4 gap-[10px]', onPress = () => { },loading=false}) => {
    return (
        <PrimaryButton text={text} className={className} onPress={onPress} loading={loading}
            prefix={
                <View
                    className='w-[18px] h-[18px] items-center justify-center rounded-md bg-[#FFFFFF80]'
                >
                    <PlusIcon />
                </View>
            }
        />
    )
}

export default AddButton