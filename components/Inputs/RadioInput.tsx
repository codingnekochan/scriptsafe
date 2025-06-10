import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

const RadioInput = ({
  options,
  onSelect,
  selectedValue,
  error,
  disabled,
  name = "radio",
}: any) => {
  return (
    <View className="mb-6">
      <View>
        <Text
          className={`text-sm font-mediumSFDisplay ${
            disabled ? "text-[#98A2B3]" : "text-black"
          }`}
        >
          {name}
        </Text>
      </View>
      <View className="py-4 border-b-[0.5px] border-[#97979761] mt-1 flex-row gap-4">
        {options.map((item: any, index: any) => {
          return (
            <View key={index} className="flex-row items-center gap-2">
              <TouchableOpacity
                onPress={() => onSelect(item.value)}
                disabled={disabled}
              >
                <View
                  className={`h-5 w-5 items-center justify-center rounded-full ${
                    selectedValue === item.value
                      ? "bg-[#317BFF]"
                      : "bg-[#E4E4E4]"
                  }`}
                >
                  <View className="h-[10px] w-[10px] rounded-full bg-[#E4E4E4]" />
                </View>
              </TouchableOpacity>
              <View>
                <Text className="text-sm font-regularSFDisplay">
                  {item.label}
                </Text>
              </View>
            </View>
          );
        })}
      </View>
      {error && <Text className="mt-2 text-red-500 text-xs">{error}</Text>}
    </View>
  );
};

export default RadioInput;
