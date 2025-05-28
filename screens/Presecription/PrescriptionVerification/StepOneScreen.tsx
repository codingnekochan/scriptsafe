import PrimaryButton from '@/components/buttons/PrimaryButton'
import Container from '@/components/common/Container'
import PageHeader from '@/components/headers/PageHeader'
import RadioInput from '@/components/Inputs/RadioInput'
import CustomSelectInput from '@/components/Inputs/SelectInput'
import CustomTextInput from '@/components/Inputs/TextInput'
import { genderOptions } from '@/constants/contentProps'
import { router } from 'expo-router'
import React from 'react'
import { Text, View } from 'react-native'

const StepOneScreen = ({ pregnancyOptions, handleChange, state, comorbiditiesList,
    lifestyle, handleNext, error }: any) => {

    return (
        <Container>
            <PageHeader backIcon backIconOnPress={() => router.back()} />
            <View className='flex-1'>
                <Text className='text-center font-regularSFDisplay text-base tracking-wide text-[#474747]'>
                    Enter patient information to begin verification
                </Text>
                <View className='mt-6'>
                    <CustomTextInput name={"Patient's Name"} placeholder={"Enter Name"} value={state.name} onChangeText={(val: any) => handleChange('name', val)} />
                    <CustomTextInput name={"Patient's Age"} placeholder={"Enter Age"} value={state.age} keyboardType={'numeric'} onChangeText={(val: any) => handleChange('age', val)} error={error.age} />
                    <CustomTextInput name={"Patient's Weight"} placeholder={"kg"} value={state.weight} keyboardType={'numeric'} onChangeText={(val: any) => handleChange('weight', val)} error={error.weight} />
                    <CustomSelectInput name={"Patient's Gender"} options={genderOptions} onSelect={(val: any) => handleChange('gender', val.name)} error={error.gender} />
                    {
                        state.gender === 'Female' &&
                        <RadioInput name={"Pregnancy Status"} options={pregnancyOptions} onSelect={(val: any) => { handleChange('is_pregnant', val) }} selectedValue={state.is_pregnant} error={error.is_pregnant} />
                    }
                    <CustomSelectInput name={"Lifestyle"} options={lifestyle} onSelect={(val: any) => { handleChange('lifestyles', [val.id]) }} />
                    <CustomSelectInput name={"Comorbidities"} options={comorbiditiesList} onSelect={(val: any) => { handleChange('comorbidities', [val.id]) }} />
                    {/* <RadioInput name={"Is the patient on medication for any of the listed comorbidities?"} options={comorbiditiesOption} disabled={true} />
                    <CustomSelectInput name={"Allergies"} options = {[{id:1,name:'No allergied added yet'}]} disabled={true} /> */}
                </View>
                <View className='mt-[10px] mb-6'>
                    <PrimaryButton onPress={handleNext} />
                </View>
            </View>
        </Container>
    )
}

export default StepOneScreen