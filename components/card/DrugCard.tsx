import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import DeleteIcon from "../Icons/DeleteIcon";
import EditIcon from "../Icons/EditIcon";

const DrugCard = ({
  drugName,
  drugDosageValue,
  drugFrequencyValue,
  drugDurationValue,
  drugDosageUnit,
  drugDurationUnit,
  drugFrequencyUnit,
  deleteDrug,
  editDrug,
  index,
}: any) => {
  return (
    <View className=" flex-row border rounded border-[#42090921] bg-white justify-between items-start px-[10px] py-2">
      <View className="gap-2">
        <Text className="text-[#151515] text-xs font-boldSFDisplay">
          Drug Name: {drugName}
        </Text>
        <Text className="font-regularSFDisplay text-xs text-[#151515]">
          Dosage: {drugDosageValue} {drugDosageUnit}
        </Text>
        <Text className="font-regularSFDisplay text-xs text-[#151515]">
          Frequency: {drugFrequencyValue} {drugFrequencyUnit}
        </Text>
        <Text className="font-regularSFDisplay text-xs text-[#151515]">
          Duration: {drugDurationValue} {drugDurationUnit}
        </Text>
      </View>
      <View className="flex-row gap-2 items-center">
        <TouchableOpacity onPress={() => deleteDrug(index)}>
          <DeleteIcon w={20} />
        </TouchableOpacity>
        <TouchableOpacity onPress={editDrug}>
          <EditIcon w={18} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default DrugCard;
