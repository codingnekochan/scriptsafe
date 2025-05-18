import React from 'react'
import { ScrollView, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const Container = ({ children, bg = '#FFFFFF',secondaryBg ='transparent' ,px='px-6'}: any) => {
    return (
        <SafeAreaView edges={['top','left','right']}  style={{ flexGrow: 1, backgroundColor: bg,}}>
            <ScrollView contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>
                <View className={`${px} flex-1`} style={{backgroundColor :secondaryBg}} >
                    {children}
                </View>
            </ScrollView>
        </SafeAreaView >
    )
}

export default Container