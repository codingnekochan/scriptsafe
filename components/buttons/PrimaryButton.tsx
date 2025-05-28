import { ActivityIndicator, Text, TouchableOpacity, View } from 'react-native'

const PrimaryButton = (
    {
        bg = '#2E90FA',
        color = '#FFFFFF',
        fontSize = 14,
        onPress,
        fontFamily = 'font-boldSFDisplay',
        prefix,
        className = 'py-4 gap-[10px]',
        text = 'Next',
        borderWidth,
        borderColor,
        loading
    }: any) => {
    return (
        <View>
            <TouchableOpacity onPress={onPress}>
                {
                    loading ?
                        <View style={{ backgroundColor: bg, borderWidth: borderWidth, borderColor: borderColor }} className={`${className} flex-row justify-center items-center rounded-xl`}>
                            <ActivityIndicator size={'small'} color={'#FFF'} />
                        </View>
                        :
                        <View style={{ backgroundColor: bg, borderWidth: borderWidth, borderColor: borderColor }} className={`${className} flex-row justify-center items-center rounded-xl`}>
                            {
                                prefix && <View>
                                    {prefix}
                                </View>
                            }
                            <Text style={{ color: color, fontSize: fontSize }} className={fontFamily}>{text}</Text>
                        </View>
                }
            </TouchableOpacity>
        </View>
    )
}

export default PrimaryButton