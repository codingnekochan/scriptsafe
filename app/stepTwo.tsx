import StepTwoScreen from "@/screens/Presecription/PrescriptionVerification/StepTwoScreen";
import {
  getConditions,
  getMedications,
  verifyPrescription,
} from "@/services/api";
import { recentDB } from "@/services/db";
import { usePrescriptionStore } from "@/states/prescription";
import { useMutation, useQueries } from "@tanstack/react-query";
import { router } from "expo-router";
import React, { useEffect, useState } from "react";
import Toast from "react-native-toast-message";

const StepTwo = () => {
  const initalState = {
    id: 1,
    condition_id: null, 
    condition_name: null,
    drug_id: null, 
    drug_name: null,
    dosage_value: 0,
    dosage_unit: null,
    frequency_value: 0,
    frequency_unit: null,
    duration_value: 0,
    duration_unit: null,
  };
  const patientBioData = usePrescriptionStore(
    (state: any) => state.patientBioData
  );
  // const setPatientBioData = usePrescriptionStore(
  // 	(state: any) => state.setPatientBioData
  // );
  const setVerificationResult = usePrescriptionStore(
    (state: any) => state.setVerificationResult
  );
  const setPatientDrugList = usePrescriptionStore(
    (state: any) => state.setPatientDrugList
  );
  const [errors, setError] = useState({});
  // const [conditionError, setConditionError] = useState<string>(null);
  const [conditionsList, setConditionsList] = useState([]);
  const [medicationsList, setMedicationList] = useState([]);
  const [drugList, setDrugList] = useState([initalState]);
  const addAnotherDrug = () => {
    setDrugList([...drugList, { ...initalState, id: drugList.length + 1 }]);
  };
  const fetchData = useQueries({
    queries: [
      {
        queryKey: ["conditions"],
        queryFn: getConditions,
      },
      {
        queryKey: ["medications"],
        queryFn: getMedications,
      },
    ],
  });
  const verify = useMutation({
    mutationFn: (data: any) => verifyPrescription(data),
    onSuccess: (data: any) => {
      setVerificationResult(data?.verification_results);
      savePrescription();
      router.push("/prescriptionVerification");
    },
    onError(error) {
      console.log(error.response);
      Toast.show({
        type: "error",
        text1: "Verification failed",
        text2: "Please try again",
      });
    },
  });

  const validateForm = () => {
    const newErrors = drugList.map((drug) => {
      const fieldErrors: any = {};
      if (!drug.dosage_value) fieldErrors.dosage = "Dosage is required";
      if (!drug.frequency_value)
        fieldErrors.frequency = "Frequency is required";
      if (!drug.duration_value) fieldErrors.duration = "Duration is required";
      if (!drug.dosage_unit) fieldErrors.dosageUnit = "Dosage unit is required";
      if (!drug.frequency_unit)
        fieldErrors.frequencyUnit = "Frequency unit is required";
      if (!drug.duration_unit)
        fieldErrors.durationUnit = "Duration unit is required";
      if (!drug.drug_id) fieldErrors.drug = "Drug is required";
      if (!drug.condition_id) fieldErrors.condition = "Condition is required";
      return fieldErrors;
    });
    setError(newErrors);

    // Check if all drugs have no errors
    const isValid = newErrors.every(
      (drugErrors) => Object.keys(drugErrors).length === 0
    );
    return isValid;
  };

  const handleChange = (index: number, key: any, value: any) => {
    setError({});
    // setConditionError(null);
    const updatedList = [...drugList];
    updatedList[index][key] = value;
    setDrugList(updatedList);
  };
  const handleNext = () => {
    const finalDrugList = drugList.map((drugs) => {
      return {
        condition_id: drugs.condition_id,
        drug_id: drugs.drug_id,
        dosage_value: drugs.dosage_value,
        dosage_unit: drugs.dosage_unit,
        frequency_value: drugs.frequency_value,
        frequency_unit: drugs.frequency_unit,
        duration_value: drugs.duration_value,
        duration_unit: drugs.duration_unit,
      };
    });
    if (validateForm()) {
      const payload = {
        ...patientBioData,
        drugs: finalDrugList,
      };
      verify.mutate(payload);
	  setPatientDrugList(finalDrugList)
    } else {
      Toast.show({
        type: "error",
        text1: "Validation failed",
        text2: "Please fill in all required fields",
      });
    }
  };
  const savePrescription = async () => {
    const conditions = drugList.map((drug) => {
      return drug.condition_name;
    });
    const medications = drugList.map((drug) => {
      return {
        drug_name: drug.drug_name,
        dosage_value: drug.dosage_value,
        dosage_unit: drug.dosage_unit,
        duration_unit: drug.duration_unit,
        duration_value: drug.duration_value,
        frequency_unit: drug.frequency_unit,
        frequency_value: drug.frequency_value,
      };
    });
    const data = {
      name: patientBioData.patient_name,
      conditions,
      medications,
    };
    console.log(data, "data to be saved to db");
    const res = await recentDB.addPatient(data);
    return res;
  };
  // const setCondition = (value: any) => {
  // 	setConditionError(null);
  // 	setPatientBioData({ ...patientBioData, ["condition_id"]: value });
  // };
  const deleteDrug = (i: any) => {
    const newList = drugList.filter((drug, index) => index !== i);
    setDrugList(newList);
  };
  const dataProps = {
    addAnotherDrug,
    handleChange,
    drugList,
    handleNext,
    loading: verify.isPending,
    errors,
    conditionsList,
    medicationsList,
    deleteDrug,
  };
  useEffect(() => {
    if (fetchData[0].isSuccess && fetchData[1].isSuccess) {
      setConditionsList(fetchData[0]?.data?.data?.data);
      setMedicationList(fetchData[1]?.data?.data?.data);
    }
  }, [fetchData]);

  return <StepTwoScreen {...dataProps} />;
};

export default StepTwo;
