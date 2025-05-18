import React from 'react'
import { ScrollView, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const Container = ({ children, bg = '#FFFFFF' }: any) => {
    return (
        <SafeAreaView style={{ flex: 1,backgroundColor: bg }}>
            <ScrollView contentContainerStyle={{ flex: 1 }} showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>
                <View className='px-6'>
                    {children}
                </View>
            </ScrollView>
        </SafeAreaView >
    )
}

export default Container