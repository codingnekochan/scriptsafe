import OutlineButton from "@/components/buttons/OutlineButton";
import PrimaryButton from "@/components/buttons/PrimaryButton";
import DrugCard from "@/components/card/DrugCard";
import Container from "@/components/common/Container";
import DrugFormItem from "@/components/common/DrugFormItem";
import PageHeader from "@/components/headers/PageHeader";
import PlusIcon from "@/components/Icons/PlusIcon";
import { router } from "expo-router";
import React from "react";
import { ScrollView, Text, View } from "react-native";

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

interface StepTwoScreenProps {
  drugList: DrugForm[];
  drugForm: DrugForm;
  addAnotherDrug: () => void;
  updateDrug: () => void;
  cancelEdit: () => void;
  handleChange: (key: keyof DrugForm, value: any) => void;
  handleNext: () => void;
  loading: boolean;
  errors: any[];
  conditionsList: any[];
  medicationsList: any[];
  deleteDrug: (index: number) => void;
  editDrug: (index: number) => void;
  index: number;
  drugFormState: "add" | "edit";
}

const StepTwoScreen: React.FC<StepTwoScreenProps> = ({
  drugList,
  drugForm,
  addAnotherDrug,
  updateDrug,
  cancelEdit,
  handleChange,
  handleNext,
  loading,
  errors,
  conditionsList,
  medicationsList,
  deleteDrug,
  editDrug,
  index,
  drugFormState,
}) => {
  const isEditMode = drugFormState === "edit";
  const currentError = errors[index] || {};

  return (
    <Container>
      <PageHeader backIcon backIconOnPress={() => router.back()} />
      <Text className="text-center font-regularSFDisplay text-base tracking-wide text-[#474747]">
        Enter prescription information
      </Text>

      <ScrollView className="flex-1 mt-6" showsVerticalScrollIndicator={false}>
        {/* Display added drugs */}
        {drugList.length >= 1 && (
          <View className="mb-6">
            {drugList.map((item, drugIndex) => (
              <View key={`drug-${drugIndex}`} className="mb-4">
                <DrugCard
                  index={drugIndex}
                  drugName={item.drug_name}
                  drugDosageValue={item.dosage_value}
                  drugDosageUnit={item.dosage_unit}
                  drugDurationUnit={item.duration_unit}
                  drugDurationValue={item.duration_value}
                  drugFrequencyUnit={item.frequency_unit}
                  drugFrequencyValue={item.frequency_value}
                  deleteDrug={deleteDrug}
                  editDrug={editDrug}
                  isEditing={isEditMode && index === drugIndex}
                />
              </View>
            ))}
          </View>
        )}
        {/* Drug form */}
        <View className="mb-6">
        <DrugFormItem
            drugForm={drugForm}
            handleChange={handleChange}
            error={currentError}
            medicationsList={medicationsList}
            conditionsList={conditionsList}
          />
        </View>

        {/* Action buttons */}
        <View className="gap-4 mb-6">
          {isEditMode ? (
            <>
              <PrimaryButton
                text="Update Drug"
                onPress={updateDrug}
                disabled={loading}
              />
              <OutlineButton text="Cancel" onPress={cancelEdit} />
            </>
          ) : (
            <OutlineButton
              text="Add Another Drug"
              onPress={addAnotherDrug}
              prefix={<PlusIcon color="#2E90FA" w={14} />}
              disabled={loading}
            />
          )}
        </View>
        {/* Bottom action - Verify Prescription */}
     {  !isEditMode && <View className="pt-4 pb-16">
          <PrimaryButton
            text="Verify Prescription"
            onPress={handleNext}
            loading={loading}
          />
        </View>}
      </ScrollView>
    </Container>
  );
};

export default StepTwoScreen;
