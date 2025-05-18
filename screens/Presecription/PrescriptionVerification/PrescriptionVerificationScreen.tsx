import OutlineButton from '@/components/buttons/OutlineButton'
import PrimaryButton from '@/components/buttons/PrimaryButton'
import Container from '@/components/common/Container'
import PageHeader from '@/components/headers/PageHeader'
import { usePrescriptionStore } from '@/states/prescription'
import { LinearGradient } from 'expo-linear-gradient'
import { router } from 'expo-router'
import React, { useState } from 'react'
import { Text, View } from 'react-native'
import Modal from 'react-native-modal'

const PrescriptionVerificationScreen = () => {
    const [modalOpen, setModalOpen] = useState(true)
    const setClickPrescription = usePrescriptionStore((state: any) => state.setPrescriptionState)

    const handleDispense = () => {
        setClickPrescription(true)
        router.replace('/(prescriptions)')
    }
    return (
        <Container px={'px-0'}>
            <View className='px-6'>
                <PageHeader
                    header={"Verification Results"}
                    backIcon
                    backIconOnPress={() => { router.back() }}
                />
            </View>
            <LinearGradient colors={['#E0EDFF', '#E4EFFF', '#E7F0FF']} style={{ flex: 1 }} start={{ x: 0, y: 0 }} end={{ x: 0, y: 1 }}>
                <View className='px-6'>
                    <View className='mt-8 mb-5 rounded overflow-hidden'>
                        <LinearGradient colors={['#317BFF', '#0646A6']} locations={[0.5, 0.9]} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} >
                            <View className='w-full px-[10px] py-8  flex-row justify-between items-center rounded gap-1'>
                                <View className='w-4/6'>
                                    <Text className='font-boldSFDisplay text-[15px] text-[#FFFFFF]'>
                                        Recommendations :
                                    </Text>
                                    <Text className='font-regularSFDisplay text-[15px] text-[#FFFFFF]'>
                                        Paracetamol is appropriate for treating fever.
                                        Drug X is not first-line treatment for Malaria
                                    </Text>
                                </View>
                                <View
                                    className='w-[60px] bg-white border border-[#4CBB5E] px-[10px] rounded-[14px]'
                                >
                                    <Text className='text-[#4CBB5E] text-[10px] leading-[20px]'>✅ Safe</Text>
                                </View>
                            </View>
                        </LinearGradient>
                    </View>
                    <View className='flex-row flex-wrap justify-between items-center bg-white py-2 px-[10px] gap-3 rounded border border-[#4CBB5E21] mb-4'>
                        <View>
                            <Text className='font-boldSFDisplay text-sm text-[#151515]'>
                                Duration Check
                            </Text>
                            <Text className='font-regularSFDisplay text-sm text-[#151515]'>
                                Prescribed : 10days
                            </Text>
                            <Text className='font-regularSFDisplay text-sm text-[#151515]'>
                                Typical duration for [Indication]: 5-7 days
                            </Text>
                        </View>
                        <View className='border px-[10px] py-[2px] rounded-[14px] bg-[#BB4C4C14] border-[#BB4C4C]'>
                            <Text className='font-regularSFDisplay text-sm text-[#BB4C4C] leading-[20px]'>
                                ❌ Overdose
                            </Text>
                        </View>
                    </View>
                    <View className='flex-row flex-wrap justify-between items-center bg-white py-2 px-[10px] gap-3 rounded border border-[#4CBB5E21] mb-4'>
                        <View>
                            <Text className='font-boldSFDisplay text-sm text-[#151515]'>
                                Dosage Check
                            </Text>
                            <Text className='font-regularSFDisplay text-sm text-[#151515]'>
                                Prescribed dosage: 1,000mg/day</Text>
                            <Text className='font-regularSFDisplay text-sm text-[#151515]'>
                                Recommended range: 750–1,500mg/day for adults
                            </Text>
                        </View>
                        <View className='border px-[10px] py-[2px] rounded-[14px] bg-[#BB4C4C14] border-[#BB4C4C]'>
                            <Text className='font-regularSFDisplay text-sm text-[#BB4C4C] leading-[20px]'>
                                ❌ Overdose
                            </Text>
                        </View>
                    </View>
                    <View className='flex-row flex-wrap justify-between items-center bg-white py-2 px-[10px] gap-3 rounded border border-[#4CBB5E21] mb-4'>
                        <View>
                            <Text className='font-boldSFDisplay text-sm text-[#151515]'>
                                Drug-Drug Interactions
                            </Text>
                            <Text className='font-regularSFDisplay text-sm text-[#151515]'>
                                Interaction pairs: e.g., Amoxicillin + Methotrexate
                            </Text>
                        </View>
                        <View className='border px-[10px] py-[2px] rounded-[14px] bg-[#BB4C4C14] border-[#BB4C4C]'>
                            <Text className='font-regularSFDisplay text-sm text-[#BB4C4C] leading-[20px]'>
                                Increases methotrexate toxicity risk.
                            </Text>
                        </View>
                    </View>
                    <View className='flex-row flex-wrap justify-between items-center bg-white py-2 px-[10px] gap-3 rounded border border-[#4CBB5E21] mb-4'>
                        <View>
                            <Text className='font-boldSFDisplay text-sm text-[#151515]'>
                                Suitability for Disease Condition
                            </Text>
                            <Text className='font-regularSFDisplay text-sm text-[#151515]'>
                                Paracetamol is appropriate for treating fever.
                                Drug X is not first-line treatment for Malaria
                            </Text>
                        </View>
                        <View className='border px-[10px] py-[2px] rounded-[14px] bg-[#BB4C4C14] border-[#BB4C4C]'>
                            <Text className='font-regularSFDisplay text-sm text-[#BB4C4C] leading-[20px]'>
                                Increases methotrexate toxicity risk.
                            </Text>
                        </View>
                    </View>
                    <View className='flex-row flex-wrap justify-between items-center bg-white pt-2 pb-3 px-[10px] gap-3 rounded border border-[#4CBB5E21] mb-6'>
                        <View>
                            <Text className='font-boldSFDisplay text-sm text-[#151515]'>
                                Suitability Based On:
                            </Text>
                            <Text className='font-regularSFDisplay text-sm text-[#151515]'>
                                Paracetamol is appropriate for treating fever.
                                Drug X is not first-line treatment for Malaria
                            </Text>
                        </View>
                        <View className='border px-[10px] py-[2px] rounded-[14px] bg-[#BB4C4C14] border-[#BB4C4C]'>
                            <Text className='font-regularSFDisplay text-sm text-[#BB4C4C] leading-[20px]'>
                                Increases methotrexate toxicity risk.
                            </Text>
                        </View>
                    </View>
                    <View className='flex-row justify-between gap-4 mb-10'>
                        <View className='flex-1'>
                            <PrimaryButton text={'Optimize'} onPress={() => router.push('/(prescriptions)/optimizePrescription')} />
                        </View>
                        <View className='flex-1'>
                            <OutlineButton text={'Dispense'} onPress={() => setModalOpen(true)} />
                        </View>
                    </View>
                </View>
            </LinearGradient>
            <Modal isVisible={modalOpen} onBackdropPress={() => { setModalOpen(false) }}>
                <View className='bg-white px-6 py-10 rounded-3xl'>
                    <View className='justify-center items-center gap-3 mb-7'>
                        <Text className='font-boldSFDisplay text-lg text-[#101828]'>
                            Dispense Drug
                        </Text>
                        <Text className='text-center text-[#667085] text-lg'>
                            Are you sure you want to dispense this prescription?
                        </Text>
                    </View>
                    <View className='gap-4'>
                        <PrimaryButton bg={"#317BFF"} text='Yes, dispense' onPress={handleDispense} />
                        <PrimaryButton bg={"#D9D9D9"} text='Cancel' color={"#5E5E5E"} onPress={() => { setModalOpen(false) }} />
                    </View>
                </View>
            </Modal>
        </Container>
    )
}

export default PrescriptionVerificationScreen