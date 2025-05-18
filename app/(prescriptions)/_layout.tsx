import { Stack } from 'expo-router'
import React from 'react'
import { Text, View } from 'react-native'

const PrescriptionsLayout = () => {
    return (
        <Stack>
            <Stack.Screen name='index' options={{ title: 'Prescriptions', headerShown: false }} />
       </Stack>
    )
}

export default PrescriptionsLayout