import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import DeleteIcon from "../Icons/DeleteIcon";
import EditIcon from "../Icons/EditIcon";

interface DrugCardProps {
  drugName: string | null;
  drugDosageValue: number;
  drugFrequencyValue: number;
  drugDurationValue: number;
  drugDosageUnit: string | null;
  drugDurationUnit: string | null;
  drugFrequencyUnit: string | null;
  deleteDrug: (index: number) => void;
  editDrug: (index: number) => void;
  index: number;
  isEditing?: boolean;
}

const DrugCard: React.FC<DrugCardProps> = ({
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
  isEditing = false,
}) => {
  const handleEdit = () => {
    editDrug(index);
  };

  const handleDelete = () => {
    deleteDrug(index);
  };

  return (
    <View
      className={`flex-row border rounded justify-between items-start px-[10px] py-2 ${
        isEditing
          ? "border-[#2E90FA] bg-[#F0F9FF]"
          : "border-[#42090921] bg-white"
      }`}
    >
      <View className="gap-2 flex-1 mr-2">
        <Text className="text-[#151515] text-xs font-boldSFDisplay">
          Drug Name: {drugName || "Not selected"}
        </Text>
        <Text className="font-regularSFDisplay text-xs text-[#151515]">
          Dosage:{" "}
          {drugDosageValue > 0
            ? `${drugDosageValue} ${drugDosageUnit || ""}`
            : "Not set"}
        </Text>
        <Text className="font-regularSFDisplay text-xs text-[#151515]">
          Frequency:{" "}
          {drugFrequencyValue > 0
            ? `${drugFrequencyValue} ${drugFrequencyUnit || ""}`
            : "Not set"}
        </Text>
        <Text className="font-regularSFDisplay text-xs text-[#151515]">
          Duration:{" "}
          {drugDurationValue > 0
            ? `${drugDurationValue} ${drugDurationUnit || ""}`
            : "Not set"}
        </Text>
      </View>
      <View className="flex-row gap-2 items-center">
        <TouchableOpacity
          onPress={handleDelete}
          className="p-1"
          accessibilityLabel={`Delete drug ${drugName || "unnamed"}`}
          accessibilityRole="button"
        >
          <DeleteIcon w={20} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={handleEdit}
          className="p-1"
          accessibilityLabel={`Edit drug ${drugName || "unnamed"}`}
          accessibilityRole="button"
        >
          <EditIcon w={18} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default DrugCard;
