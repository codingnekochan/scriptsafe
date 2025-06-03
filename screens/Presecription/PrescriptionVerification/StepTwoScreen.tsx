import OutlineButton from "@/components/buttons/OutlineButton";
import PrimaryButton from "@/components/buttons/PrimaryButton";
import DrugCard from "@/components/card/DrugCard";
import Container from "@/components/common/Container";
import DrugFormItem from "@/components/common/DrugFormItem";
import PageHeader from "@/components/headers/PageHeader";
import PlusIcon from "@/components/Icons/PlusIcon";
import { router } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

const StepTwoScreen = ({
  drugList,
  addAnotherDrug,
  handleChange,
  handleNext,
  conditionError,
  loading,
  errors,
  conditionsList,
  medicationsList,
  setCondition,
  deleteDrug,
}: any) => {
  return (
    <Container>
      <PageHeader backIcon backIconOnPress={() => router.back()} />
      <Text className="text-center font-regularSFDisplay text-base tracking-wide text-[#474747]">
        Enter prescription information
      </Text>
      <View className="mt-6 flex-1">
        {drugList.map((item: any, index: number) => {
          return (
            <View key={index} className="gap-5  flex-1">
              {index < drugList.length - 1 ? (
                <View className="mb-6">
                  <DrugCard
                    index={index}
                    drugName={item.drug_name}
                    drugDosageValue={item.dosage_value}
                    drugDosageUnit={item.dosage_unit}
                    drugDurationUnit={item.duration_unit}
                    drugDurationValue={item.duration_value}
                    drugFrequencyUnit={item.frequency_unit}
                    drugFrequencyValue={item.frequency_value}
                    deleteDrug={deleteDrug}
                  />
                </View>
              ) : (
                <View className="flex-1">
                  <DrugFormItem
                    index={index}
                    handleChange={handleChange}
                    error={errors[index] || {}}
                    medicationsList={medicationsList}
                    conditionsList={conditionsList}
                  />
                </View>
              )}
            </View>
          );
        })}
      </View>
      <View className="flex-1">
        <View className="mt-20 gap-10 mb-10">
          <OutlineButton
            text={"Add another drug"}
            onPress={addAnotherDrug}
            prefix={<PlusIcon color="#2E90FA" w={14} />}
          />
          <PrimaryButton
            text={"Verify Prescription"}
            onPress={handleNext}
            loading={loading}
          />
        </View>
      </View>
    </Container>
  );
};

export default StepTwoScreen;
