import { Stack } from 'expo-router'
import React from 'react'

const ProfileLayout = () => {
    return (
        <Stack>
            <Stack.Screen name='index' options={{ title: 'My Profile', headerShown: false }} />
        </Stack>
    )
}

export default ProfileLayout