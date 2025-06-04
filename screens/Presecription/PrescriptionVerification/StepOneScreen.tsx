import PrimaryButton from "@/components/buttons/PrimaryButton";
import Container from "@/components/common/Container";
import PageHeader from "@/components/headers/PageHeader";
import CustomMultiSelectInput from "@/components/Inputs/MultiSelectInput";
import RadioInput from "@/components/Inputs/RadioInput";
import CustomSelectInput from "@/components/Inputs/SelectInput";
import CustomTextInput from "@/components/Inputs/TextInput";
import {
  comorbiditiesOption,
  genderOptions,
  weightUnit,
} from "@/constants/contentProps";
import { router } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

const StepOneScreen = ({
  pregnancyOptions,
  handleChange,
  state,
  comorbiditiesList,
  lifestyle,
  handleNext,
  ageCategory,
  error,
}: any) => {
  return (
    <Container>
      <PageHeader backIcon backIconOnPress={() => router.back()} />
      <View className="flex-1">
        <Text className="text-center font-regularSFDisplay text-base tracking-wide text-[#474747]">
          Enter patient information to begin verification
        </Text>
        <View className="mt-6">
          <CustomTextInput
            name={"Patient's Name"}
            placeholder={"Enter Name"}
            value={state.name}
            onChangeText={(val: any) => handleChange("patient_name", val)}
          />
          <CustomSelectInput
            name={"Patient's Age"}
            options={ageCategory}
            onSelect={(val: any) =>
              handleChange("patient_age_category_id", val.id)
            }
            value={state.patient_age_category_id}
            error={error.age}
          />
          <View className="flex-row justify-between items-center gap-3">
            <View className="w-1/2">
              <CustomTextInput
                name={"Patient's Weight"}
                placeholder={"kg"}
                value={state.weight}
                keyboardType={"numeric"}
                onChangeText={(val: any) => handleChange("patient_weight", val)}
                error={error.weight}
              />
            </View>
            <View className={`w-1/2 ${error.weight ? "mb-6" : ""}`}>
              <CustomSelectInput
                name={"Weight Unit"}
                options={weightUnit}
                onSelect={(val: any) => handleChange("weight_unit", val.value)}
                value={state.weight_unit}
              />
            </View>
          </View>
          <CustomSelectInput
            name={"Patient's Gender"}
            options={genderOptions}
            onSelect={(val: any) => handleChange("patient_gender", val.name)}
			value = {state.patient_gender}
            error={error.gender}
          />
          {state.patient_gender === "Female" && (
            <RadioInput
              name={"Pregnancy Status"}
              options={pregnancyOptions}
              onSelect={(val: any) => {
                handleChange("pregnancy_status", val);
              }}
              selectedValue={state.pregnancy_status}
              error={error.is_pregnant}
            />
          )}
          <CustomSelectInput
            name={"Lifestyle"}
            options={lifestyle}
            onSelect={(val: any) => {
              handleChange("lifestyle_category_id", val.id);
            }}
            value={state.lifestyle_category_id}
          />
          <CustomSelectInput
            name={"Comorbidities"}
            options={comorbiditiesList}
            onSelect={(val: any) => {
              handleChange("comorbidity_ids", [val.id]);
            }}
            value={state.comorbidity_ids}
          />
          <RadioInput
            name={
              "Is the patient on medication for any of the listed comorbidities?"
            }
            options={comorbiditiesOption}
            onSelect={(val: any) => {
              handleChange("on_medication_for_comorbidities", val);
            }}
            selectedValue={state.on_medication_for_comorbidities}
            error={error.on_medication_for_comorbidities}
          />
          {state.on_medication_for_comorbidities && (
            <CustomMultiSelectInput
              name={"Medication for Comorbidities"}
              options={[
                {
                  id: 1,
                  name: "Metformin",
                  dosage: "500mg",
                },
                {
                  id: 2,
                  name: "Amlodipine",
                  dosage: "5mg",
                },
              ]}
              onSelected={(val: any) => {
                handleChange("medications_for_comorbidities", val);
              }}
            />
          )}
          <CustomSelectInput
            name={"Allergies"}
            options={[{ id: 1, name: "No allergied added yet" }]}
            disabled={true}
          />
        </View>
        <View className="mt-[10px] mb-16">
          <PrimaryButton onPress={handleNext} />
        </View>
      </View>
    </Container>
  );
};

export default StepOneScreen;
