import React from 'react'
import { Text, View } from 'react-native'
import EditIcon from '../Icons/EditIcon'

const DrugCard = ({drugName,drugDosage, drugFrequency,drugDuration}:any) => {
  return (
    <View className=' flex-row border rounded border-[#42090921] bg-white justify-between items-start px-[10px] py-2'>
                        <View className='gap-2'>
                            <Text className='text-[#151515] text-xs font-boldSFDisplay'>
                                Drug Name: {drugName}
                            </Text>
                            <Text className='font-regularSFDisplay text-xs text-[#151515]'>
                                Dosage: {drugDosage}
                            </Text>
                            <Text className='font-regularSFDisplay text-xs text-[#151515]'>
                                Frequency: {drugFrequency}
                            </Text>
                            <Text className='font-regularSFDisplay text-xs text-[#151515]'>
                                Duration: {drugDuration}
                            </Text>
                        </View>
                        <View>
                            <EditIcon />
                        </View>
                    </View>
  )
}

export default DrugCard