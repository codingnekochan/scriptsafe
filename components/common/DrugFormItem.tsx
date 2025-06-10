import {
  dosageUnit,
  durationUnit,
  frequencyUnit,
} from "@/constants/contentProps";
import React from "react";
import { View } from "react-native";
import CustomSelectInput from "../Inputs/SelectInput";
import CustomTextInput from "../Inputs/TextInput";

interface DrugForm {
  id: number;
  condition_id: string | null;
  condition_name: string | null;
  drug_id: string | null;
  drug_name: string | null;
  dosage_value: number;
  dosage_unit: string | null;
  frequency_value: number;
  frequency_unit: string | null;
  duration_value: number;
  duration_unit: string | null;
}

interface DrugFormItemProps {
  drugForm: DrugForm;
  handleChange: (key: keyof DrugForm, value: any) => void;
  error: Record<string, string>;
  medicationsList: any[];
  conditionsList: any[];
}

const DrugFormItem: React.FC<DrugFormItemProps> = ({
  drugForm,
  handleChange,
  error,
  medicationsList,
  conditionsList,
}) => {
  // Helper function to find selected option for select inputs
  const findSelectedOption = (
    list: any[],
    value: any,
    field: "id" | "value"
  ) => {
    if (!value) return null;
    return list.find((item) => item[field] === value) || null;
  };

  // Helper function to convert numeric string input
  const handleNumericChange = (field: keyof DrugForm, value: string) => {
    const numericValue = value === "" ? 0 : parseFloat(value) || 0;
    handleChange(field, numericValue);
  };

  return (
    <View className="flex-1">
      <View>
        <CustomSelectInput
          name="What is the diagnosis or condition being treated?"
          options={conditionsList}
          value={findSelectedOption(
            conditionsList,
            drugForm.condition_id,
            "id"
          )}
          onSelect={(val: any) => {
            handleChange("condition_id", val.id);
            handleChange("condition_name", val.name || val.label || val.value);
          }}
          error={error.condition}
        />

        <CustomSelectInput
          name="Drug Name"
          placeholder="Enter"
          options={medicationsList}
          value={findSelectedOption(medicationsList, drugForm.drug_id, "id")}
          onSelect={(val: any) => {
            handleChange("drug_id", val.id);
            handleChange("drug_name", val.label || val.name || val.value);
          }}
          error={error.drug}
        />

        <View className="flex-row justify-between items-center gap-3">
          <View className="w-1/2">
            <CustomTextInput
              name="Dosage"
              placeholder="0"
              value={
                drugForm.dosage_value > 0
                  ? drugForm.dosage_value.toString()
                  : ""
              }
              onChangeText={(val: string) =>
                handleNumericChange("dosage_value", val)
              }
              error={error.dosage}
              keyboardType="numeric"
            />
          </View>
          <View className={`w-1/2 ${error.dosageUnit ? "mb-6" : ""}`}>
            <CustomSelectInput
              name="Dosage Unit"
              options={dosageUnit}
              placeholder="mcg"
              value={findSelectedOption(
                dosageUnit,
                drugForm.dosage_unit,
                "value"
              )}
              onSelect={(val: any) => handleChange("dosage_unit", val.value)}
              error={error.dosageUnit}
            />
          </View>
        </View>

        <View className="flex-row justify-between items-center gap-3">
          <View className="w-1/2">
            <CustomTextInput
              name="Frequency"
              placeholder="0"
              value={
                drugForm.frequency_value > 0
                  ? drugForm.frequency_value.toString()
                  : ""
              }
              onChangeText={(val: string) =>
                handleNumericChange("frequency_value", val)
              }
              error={error.frequency}
              keyboardType="numeric"
            />
          </View>
          <View className={`w-1/2 ${error.frequencyUnit ? "mb-6" : ""}`}>
            <CustomSelectInput
              name="Frequency Unit"
              placeholder="x daily"
              options={frequencyUnit}
              value={findSelectedOption(
                frequencyUnit,
                drugForm.frequency_unit,
                "value"
              )}
              onSelect={(val: any) => handleChange("frequency_unit", val.value)}
              error={error.frequencyUnit}
            />
          </View>
        </View>

        <View className="flex-row justify-between items-center gap-3">
          <View className="w-1/2">
            <CustomTextInput
              name="Duration"
              placeholder="0"
              value={
                drugForm.duration_value > 0
                  ? drugForm.duration_value.toString()
                  : ""
              }
              onChangeText={(val: string) =>
                handleNumericChange("duration_value", val)
              }
              error={error.duration}
              keyboardType="numeric"
            />
          </View>
          <View className={`w-1/2 ${error.durationUnit ? "mb-6" : ""}`}>
            <CustomSelectInput
              name="Duration Unit"
              placeholder="Days"
              options={durationUnit}
              value={findSelectedOption(
                durationUnit,
                drugForm.duration_unit,
                "value"
              )}
              onSelect={(val: any) => handleChange("duration_unit", val.value)}
              error={error.durationUnit}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default DrugFormItem;
