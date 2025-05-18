import { Stack } from 'expo-router'
import React from 'react'

const PrescriptionsLayout = () => {
    return (
        <Stack>
            <Stack.Screen name='index' options={{ title: 'Prescriptions', headerShown: false }} />
            <Stack.Screen name='stepOne' options={{ title: 'Prescription Verification', headerShown: false }} />
            <Stack.Screen name='stepTwo' options={{ title: 'Prescription Verification', headerShown: false }} />
            <Stack.Screen name='optimizePrescription' options={{ title: 'Prescription Verification', headerShown: false }} />
            <Stack.Screen name='prescriptionVerification' options={{ title: 'Prescription Verification', headerShown: false }} />

        </Stack>
    )
}

export default PrescriptionsLayout