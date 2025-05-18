import OutlineButton from '@/components/buttons/OutlineButton'
import PrimaryButton from '@/components/buttons/PrimaryButton'
import Container from '@/components/common/Container'
import PageHeader from '@/components/headers/PageHeader'
import PlusIcon from '@/components/Icons/PlusIcon'
import CustomSelectInput from '@/components/Inputs/SelectInput'
import CustomTextInput from '@/components/Inputs/TextInput'
import { router } from 'expo-router'
import React from 'react'
import { Text, View } from 'react-native'

const StepTwoScreen = () => {
    return (
        <Container>
            <PageHeader backIcon backIconOnPress={() => router.back()} />
            <View className='flex-1'>
                <Text className='text-center font-regularSFDisplay text-base tracking-wide text-[#474747]'>
                    Enter prescription information
                </Text>
                <View className='mt-6'>
                    <CustomTextInput name='What is the diagnosis or condition being treated?' placeholder='Enter' />
                    <CustomTextInput name='Drug Name' placeholder='Enter' />
                    <CustomTextInput name='Dosage' placeholder='Enter' />
                    <CustomSelectInput name='Frequency' />
                    <CustomSelectInput name='Duration' />
                </View>
                <View className='mt-20 gap-10 mb-20'>
                    <OutlineButton text={"Add another drug"} prefix={<PlusIcon color='#2E90FA' w={14} />} />
                    <PrimaryButton
                        text={"Verify Prescription"}
                        onPress={() => router.push('/(prescriptions)/prescriptionVerification')}
                    />
                </View>
            </View>

        </Container>
    )
}

export default StepTwoScreen