import { Text, TouchableOpacity, View } from 'react-native'

const OutlineButton = ({ bg = '#2E90FA14', color = '#2E90FA', fontSize=14, onPress, prefix, className = 'py-4 border-[#2E90FA]', text = 'Next' }:any) => {
    return (
        <View>
            <TouchableOpacity onPress={onPress}>
                <View
                    style={{ backgroundColor: bg }}
                    className={`${className} border flex-row justify-center items-center rounded-xl gap-[10px]`}>
                    {
                        prefix && <View>
                            {prefix}
                        </View>
                    }
                    <Text style={{ color: color, fontSize: fontSize }} className={`font-boldSFDisplay`}>{text}</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default OutlineButton