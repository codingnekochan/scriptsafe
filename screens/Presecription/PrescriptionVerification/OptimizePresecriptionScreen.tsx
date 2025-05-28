import OutlineButton from '@/components/buttons/OutlineButton'
import PrimaryButton from '@/components/buttons/PrimaryButton'
import Container from '@/components/common/Container'
import PageHeader from '@/components/headers/PageHeader'
import EditIcon from '@/components/Icons/EditIcon'
import PlusIcon from '@/components/Icons/PlusIcon'
import CustomSelectInput from '@/components/Inputs/SelectInput'
import CustomTextInput from '@/components/Inputs/TextInput'
import { router } from 'expo-router'
import React from 'react'
import { Text, View } from 'react-native'

const OptimizePresecriptionScreen = () => {
    return (
        <Container>
            <PageHeader backIcon backIconOnPress={() => router.back()}
                header={'Optimize Prescription'} />
            <View className='flex-1'>
                <Text className='text-center font-regularSFDisplay text-base tracking-wide text-[#474747]'>
                    Enter prescription information
                </Text>
                <View className='mt-5'>
                    <View className=' flex-row border rounded border-[#42090921] bg-white justify-between items-start px-[10px] py-2'>
                        <View className='gap-2'>
                            <Text className='text-[#151515] text-xs font-boldSFDisplay'>
                                Drug Name:
                            </Text>
                            <Text className='font-regularSFDisplay text-xs text-[#151515]'>
                                Dosage:
                            </Text>
                            <Text className='font-regularSFDisplay text-xs text-[#151515]'>
                                Frequency:
                            </Text>
                            <Text className='font-regularSFDisplay text-xs text-[#151515]'>
                                Duration:
                            </Text>
                        </View>
                        <View>
                            <EditIcon />
                        </View>
                    </View>
                    <View className='mt-[26px]'>
                        <CustomTextInput name={"Drug Name"} placeholder="Enter" />
                        <CustomSelectInput name={"Dosage"} />
                        <CustomSelectInput name={"Frequency"} />
                        <CustomSelectInput name={"Duration"} />
                    </View>
                    <View>
                        <View className='mt-20 gap-10 mb-20'>
                            <OutlineButton text={"Add another drug"} prefix={<PlusIcon color='#2E90FA' w={14} />} />
                            <PrimaryButton
                                text={"Verify Prescription"}
                                onPress={() => router.push('/prescriptionVerification')}
                            />
                        </View>
                    </View>
                </View>
            </View>
        </Container>
    )
}

export default OptimizePresecriptionScreen