import moment from "moment";
import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import ChevronDownIcon from "../Icons/ChevronDownIcon";
import ChevronUpIcon from "../Icons/ChevronUpIcon";
import ClockIcon from "../Icons/ClockIcon";

const RecentPrescriptionCard = ({
  date,
  name,
  illness,
  medication,
  rating,
}: any) => {
  const [isVisible, setIsVisible] = useState(false);

  const showMore = () => {
    setIsVisible(!isVisible);
  };
  return (
    <View className="bg-white pt-2 px-[10px] pb-[10px] rounded-xl border border-[#FFFFFF21]">
      <View className="flex-row items-center gap-1 justify-start">
        <ClockIcon w={14} />
        <Text className="text-[#5E5E5E] font-regularSFDisplay text-xs leading-[20px]">
          {moment(date).format("MMMM DD,YYYY")} - {moment(date).format("LT")}
        </Text>
      </View>
      <View className="flex-row flex-wrap justify-between items-start gap-2 mt-2">
        <View className="gap-1">
          <View className="flex-row flex-wrap items-center">
            <View>
              <Text className="font-boldSFDisplay text-xs leading-[20px]">
                {name} :{" "}
              </Text>
            </View>
            <View className="flex-row">
              {illness.map((condition: string, index: number) => {
                return (
                  <Text
                    key={index}
                    className="font-regularSFDisplay text-xs leading-[20px]"
                  >
                    {condition}
                    {index < illness.length - 1 && ", "}
                  </Text>
                );
              })}
            </View>
          </View>
          <View className="flex-row flex-wrap gap-1">
            {medication.map((drug: any, index: number) => {
              return (
                <View key={index} className="flex-row">
                  <Text className="font-boldSFDisplay text-xs leading-[20px]">
                    {drug.drug_name} {drug.dosage_value}
                    {drug.dosage_unit}
                    {index < medication.length - 1 && !isVisible && ", "}
                  </Text>
                  {isVisible && (
                    <Text className="font-regularSFDisplay text-xs leading-[20px]">
                      , {drug.frequency_value}
                      {drug.frequency_unit}, {drug.duration_value}{" "}
                      {drug.duration_unit}
                    </Text>
                  )}
                </View>
              );
            })}
          </View>
        </View>
        {/* <View>
          {rating === "safe" ? (
            <View className="bg-[#4CBB5E14] border border-[#4CBB5E] w-[56px] rounded-[14px] items-center py-[2px]">
              <Text className="text-[#4CBB5E] text-[10px] text-nowrap font-mediumSFDisplay leading-[20px]">
                ✅ Safe
              </Text>
            </View>
          ) : rating === "unsafe" ? (
            <View className="bg-[#BB4C4C14] border border-[#BB4C4C] rounded-[14px] items-center py-[2px] w-[61px]">
              <Text className="text-[#BB4C4C] text-[10px] text-nowrap font-mediumSFDisplay leading-[20px]">
                ❌ Unsafe
              </Text>
            </View>
          ) : (
            <View className="bg-[#F0C33414] border border-[#F0C334] rounded-[14px] items-center py-[2px] w-[61px]">
              <Text className="text-[#F0C334] text-[10px] text-nowrap font-mediumSFDisplay leading-[20px]">
                ⚠️Caution
              </Text>
            </View>
          )}
        </View> */}
      </View>
      <View className="mt-1">
        <TouchableOpacity onPress={showMore}>
          <View className="flex-row items-center gap-2">
            <Text className="text-xs font-regularSFDisplay text-[#003916]">
              View more
            </Text>
            {isVisible ? (
              <ChevronUpIcon w={6} h={3} color="#003916" />
            ) : (
              <ChevronDownIcon w={6} h={3} color="#003916" />
            )}
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default RecentPrescriptionCard;
