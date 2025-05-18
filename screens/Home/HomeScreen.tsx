import AddButton from '@/components/buttons/AddButton';
import GetScriptSafeCard from '@/components/card/GetScriptSafeCard';
import Container from '@/components/common/Container';
import MainPageHeader from '@/components/headers/MainPageHeader';
import { homeContent } from '@/constants/contentProps';
import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';
import React from 'react';
import { Text, View } from 'react-native';

const HomeScreen = () => {
    // const [selected, setSelected] = useState({})
    // const options: object[] = [{ id: 'val', label: 'val', value: 'val' }, { id: 'val2', label: 'val2', value: 'val2' }]
    // useEffect(() => {
    //     console.log(selected)
    // }, [selected])

    const handleClick = () => {
        router.push('/(prescriptions)/stepOne');
    }
    return (
        <LinearGradient colors={['#E0EDFF', '#E4EFFF', '#E7F0FF']} style={{ flex: 1 }} start={{ x: 0, y: 0 }} end={{ x: 0, y: 1 }} >
            <Container bg='transparent'>
                <MainPageHeader />
                <View className='flex-1'>
                    <View className='bg-white pt-5 pb-7 rounded-xl px-6 border-[#E8F3FF] border'>
                        <Text className='font-mediumSFDisplay text-base text-[#333333] text-center'>
                            Verify your prescription in less than a minute
                        </Text>
                        <View className='mt-6 '>
                            <AddButton onPress={handleClick} />
                        </View>
                    </View>
                    <View className='mt-9 mb-9'>
                        <Text className='font-boldSFDisplay text-base text-[#3333333] leading-[32px]'>
                            Get more from ScriptSafe
                        </Text>
                        <View className='mt-5 gap-6'>
                            {
                                homeContent.map((content, index) => {
                                    const Icon = content.icon;
                                    return <GetScriptSafeCard
                                        key={index}
                                        id={content.id}
                                        text={content.text}
                                        subtext={content.subtext}
                                        icon={<Icon />}
                                    />

                                })
                            }
                        </View>
                    </View>

                </View>
            </Container>
        </LinearGradient>
    )
}

export default HomeScreen