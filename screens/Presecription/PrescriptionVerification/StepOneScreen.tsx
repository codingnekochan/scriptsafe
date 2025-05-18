import PrimaryButton from '@/components/buttons/PrimaryButton'
import Container from '@/components/common/Container'
import PageHeader from '@/components/headers/PageHeader'
import RadioInput from '@/components/Inputs/RadioInput'
import CustomSelectInput from '@/components/Inputs/SelectInput'
import CustomTextInput from '@/components/Inputs/TextInput'
import { router } from 'expo-router'
import React from 'react'
import { Text, View } from 'react-native'

const StepOneScreen = () => {
    const pregnancyOptions = [
        {
            id: 1,
            label: 'Pregnant',
            value: 'pregnant'
        },
        {
            id: 2,
            label: 'Not Pregnant',
            value: 'not_pregnant'
        }
    ]
    const comorboditiesOption = [
        {
            id: 1,
            label: 'Yes',
            value: 'yes'
        },
        {
            id: 2,
            label: 'No',
            value: 'no'
        }
    ]

    const handleClick = () => {
        router.push('/(prescriptions)/stepTwo')
    }
    return (
        <Container>
            <PageHeader backIcon backIconOnPress={() => router.back()} />
            <View className='flex-1'>
                <Text className='text-center font-regularSFDisplay text-base tracking-wide text-[#474747]'>
                    Enter patient information to begin verification
                </Text>
                <View className='mt-6'>
                    <CustomTextInput name={"Patient's Name"} placeholder={"Enter Name"} />
                    <CustomTextInput name={"Patient's Age"} placeholder={"Enter Age"} keyboardType={'numeric'} />
                    <CustomTextInput name={"Patient's Weight"} placeholder={"kg"} keyboardType={'numeric'} />
                    <CustomSelectInput name={"Patient's Gender"} />
                    <RadioInput name={"Pregnancy Status"} options={pregnancyOptions} onSelect={() => { }} />
                    <CustomSelectInput name={"Lifestyle"} />
                    <CustomSelectInput name={"Comorbidities"} />
                    <RadioInput name={"Is the patient on medication for any of the listed comorbidities?"} options={comorboditiesOption} />
                    <CustomSelectInput name={"Allergies"} />
                </View>
                <View className='mt-[10px] mb-6'>
                    <PrimaryButton onPress={handleClick} />
                </View>
            </View>
        </Container>
    )
}

export default StepOneScreen