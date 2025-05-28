import { drugDuration, drugFreqency } from '@/constants/contentProps'
import React from 'react'
import { View } from 'react-native'
import CustomSelectInput from '../Inputs/SelectInput'
import CustomTextInput from '../Inputs/TextInput'

const DrugFormItem = ({ index, handleChange ,error,medicationsList } :any) => {
    return (
        <View className='flex-1'>
            <View>
                <CustomSelectInput name='Drug Name' placeholder='Enter' options={medicationsList} onSelect={(val :any) => handleChange(index, 'id', val.id)} />
                <CustomTextInput name='Dosage' placeholder='Enter' onChangeText={(val :string) => handleChange(index, 'dosage', val)} error={error.dosage} keyboardType='numeric' />
                <CustomSelectInput name='Frequency' options={drugFreqency} onSelect={(val: any) => handleChange(index, 'frequency', val.name)} error={error.frequency} />
                <CustomSelectInput name='Duration' options={drugDuration} onSelect={(val: any) => handleChange(index, 'duration', val.id)} error={error.duration} />
            </View>
        </View>
    )
}

export default DrugFormItem