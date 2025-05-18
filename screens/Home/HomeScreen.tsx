import Container from '@/components/common/Container'
import CustomSelectInput from '@/components/Inputs/SelectInput'
import CustomTextInput from '@/components/Inputs/TextInput'
import React from 'react'
import { Text, View } from 'react-native'

const HomeScreen = () => {
    return (
        <Container>
            <View>
                <Text>HomeScreen</Text>
                <CustomTextInput />
                <CustomSelectInput/>
            </View>
        </Container>
    )
}

export default HomeScreen