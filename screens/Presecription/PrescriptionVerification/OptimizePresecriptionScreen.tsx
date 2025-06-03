import OutlineButton from "@/components/buttons/OutlineButton";
import PrimaryButton from "@/components/buttons/PrimaryButton";
import DrugCard from "@/components/card/DrugCard";
import Container from "@/components/common/Container";
import PageHeader from "@/components/headers/PageHeader";
import PlusIcon from "@/components/Icons/PlusIcon";
import { router } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

const OptimizePresecriptionScreen = ({ patientDrugList,deleteDrug }:any) => {
  console.log(patientDrugList,'patient drug list')
  return (
    <Container>
      <PageHeader
        backIcon
        backIconOnPress={() => router.back()}
        header={"Optimize Prescription"}
      />
      <View className="flex-1">
        <Text className="text-center font-regularSFDisplay text-base tracking-wide text-[#474747]">
          Enter prescription information
        </Text>
        <View className="mt-5">
          {patientDrugList?.map((item:any, index:number) => {
            return (
              <View className="mb-6" key={index}>
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
            );
          })}
          <View>
            <View className="mt-20 gap-10 mb-20">
              <OutlineButton
                text={"Add another drug"}
                prefix={<PlusIcon color="#2E90FA" w={14} />}
              />
              <PrimaryButton
                text={"Verify Prescription"}
                onPress={() => router.push("/prescriptionVerification")}
              />
            </View>
          </View>
        </View>
      </View>
    </Container>
  );
};

export default OptimizePresecriptionScreen;
