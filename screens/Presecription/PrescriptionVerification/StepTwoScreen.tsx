import OutlineButton from '@/components/buttons/OutlineButton'
import PrimaryButton from '@/components/buttons/PrimaryButton'
import Container from '@/components/common/Container'
import DrugFormItem from '@/components/common/DrugFormItem'
import PageHeader from '@/components/headers/PageHeader'
import PlusIcon from '@/components/Icons/PlusIcon'
import { router } from 'expo-router'
import React from 'react'
import { Text, View } from 'react-native'

const StepTwoScreen = ({ drugList, addAnotherDrug, handleChange ,handleNext,loading,errors}: any) => {
    return (
        <Container>
            <PageHeader backIcon backIconOnPress={() => router.back()} />
            <Text className='text-center font-regularSFDisplay text-base tracking-wide text-[#474747]'>
                Enter prescription information
            </Text>
            {
                drugList.map((_: object, index: number) => {
                    console.log(errors[index])
                    return (
                        <DrugFormItem
                            key={index}
                            index={index}
                            handleChange={handleChange}
                            error={errors[index]|| {}}
                        />
                    )
                })
            }
            <View className='flex-1'>
                <View className='mt-20 gap-10 mb-10'>
                    <OutlineButton text={"Add another drug"} onPress={addAnotherDrug} prefix={<PlusIcon color='#2E90FA' w={14} />} />
                    <PrimaryButton
                        text={"Verify Prescription"}
                        onPress={handleNext}
                        loading={loading}
                    />
                </View>
            </View>
        </Container>
    )
}

export default StepTwoScreen