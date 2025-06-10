import PrimaryButton from "@/components/buttons/PrimaryButton";
import DrugCard from "@/components/card/DrugCard";
import Container from "@/components/common/Container";
import DrugFormItem from "@/components/common/DrugFormItem";
import PageHeader from "@/components/headers/PageHeader";
import { router } from "expo-router";
import React from "react";
import { View } from "react-native";

const EditDrugScreen = ({
  saveChanges,
  currentDrug,
  deleteDrug,
  editDrug,
  medicationsList,
  conditionsList,
  error,
  handleChange,
  drugForm,
}: any) => {
  console.log(drugForm);
  return (
    <Container>
      <PageHeader
        backIcon
        backIconOnPress={() => router.back()}
        header={"Edit Prescription"}
      />
      <View className="flex-1">
        <View className="my-6">
          <DrugCard
            index={currentDrug.id}
            drugName={currentDrug.drug_name}
            drugDosageValue={currentDrug.dosage_value}
            drugDosageUnit={currentDrug.dosage_unit}
            drugDurationUnit={currentDrug.duration_unit}
            drugDurationValue={currentDrug.duration_value}
            drugFrequencyUnit={currentDrug.frequency_unit}
            drugFrequencyValue={currentDrug.frequency_value}
            deleteDrug={deleteDrug}
            editDrug={editDrug}
          />
        </View>
        <View className="flex-1">
          <DrugFormItem
            drugForm={drugForm}
            handleChange={handleChange}
            error={error}
            medicationsList={medicationsList}
            conditionsList={conditionsList}
          />
        </View>
        <View>
          <View className="mt-[10px] mb-16">
            <PrimaryButton text={"Save changes"} onPress={saveChanges} />
          </View>
        </View>
      </View>
    </Container>
  );
};

export default EditDrugScreen;
