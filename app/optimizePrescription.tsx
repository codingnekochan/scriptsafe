import OptimizePresecriptionScreen from "@/screens/Presecription/PrescriptionVerification/OptimizePresecriptionScreen";
import { verifyPrescription } from "@/services/api";
import { recentDB } from "@/services/db";
import { usePrescriptionStore } from "@/states/prescription";
import { useMutation } from "@tanstack/react-query";
import { router } from "expo-router";
import React, { useCallback, useEffect, useState } from "react";
import Toast from "react-native-toast-message";

const initialState = {
  id: 0,
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

const OptimizePresecription = () => {
  const [drugForm, setDrugForm] = useState(initialState);
  const [isVisible, setIsVisible] = useState(false);
  const [error, setError] = useState({});
  const patientBioData = usePrescriptionStore(
    (state: any) => state.patientBioData
  );
  const patientDrugList = usePrescriptionStore(
    (state: any) => state.patientDrugList
  );
  const setPatientDrugList = usePrescriptionStore(
    (state: any) => state.setPatientDrugList
  );
  const setVerificationResult = usePrescriptionStore(
    (state: any) => state.setVerificationResult
  );

  const medicationsList = usePrescriptionStore(
    (state: any) => state.medicationsList
  );
  const conditionsList = usePrescriptionStore(
    (state: any) => state.conditionsList
  );
  const drugFormState = usePrescriptionStore(
    (state: any) => state.drugFormState
  );
  const setDrugFormState = usePrescriptionStore(
    (state: any) => state.setDrugFormState
  );
  const savePrescription = async () => {
    try {
      const conditions = patientDrugList
        .map((drug) => drug.condition_name)
        .filter(Boolean);
      const medications = patientDrugList.map((drug) => ({
        drug_name: drug.drug_name,
        dosage_value: drug.dosage_value,
        dosage_unit: drug.dosage_unit,
        duration_unit: drug.duration_unit,
        duration_value: drug.duration_value,
        frequency_unit: drug.frequency_unit,
        frequency_value: drug.frequency_value,
      }));

      const data = {
        name: patientBioData.patient_name,
        conditions,
        medications,
      };

      console.log(data, "data to be saved to db");
      const res = await recentDB.addPatient(data);
      return res;
    } catch (error) {
      console.error("Error saving prescription:", error);
      Toast.show({
        type: "error",
        text1: "Save failed",
        text2: "Could not save prescription",
      });
    }
  };
  // Verification mutation
  const verify = useMutation({
    mutationFn: (data: any) => verifyPrescription(data),
    onSuccess: (data: any) => {
      setVerificationResult(data?.verification_results);
      savePrescription();
      router.push("/prescriptionVerification");
    },
    onError(error: any) {
      console.log(error.response);
      Toast.show({
        type: "error",
        text1: "Verification failed",
        text2: "Please try again",
      });
    },
  });
  const deleteDrug = (i: any) => {
    const newList = patientDrugList.filter((drug, index) => index !== i);
    setPatientDrugList(newList);
  };
  const editDrug = (i: any) => {
    router.push({
      pathname: "/editDrug",
      params: {
        drugIndex: i.toString(),
        drugData: JSON.stringify(patientDrugList[i]),
      },
    });
  };
  const validateDrugForm = useCallback(() => {
    const newErrors: any = {};

    if (!drugForm.drug_name) {
      newErrors.drug_name = "Drug name is required";
    }
    if (!drugForm.condition_name) {
      newErrors.condition_name = "Condition is required";
    }
    if (!drugForm.dosage_value) {
      newErrors.dosage_value = "Dosage value must be greater than 0";
    }
    if (!drugForm.dosage_unit) {
      newErrors.dosage_unit = "Dosage unit is required (e.g., mg, ml, tablets)";
    }

    if (!drugForm.frequency_value) {
      newErrors.frequency_value = "Frequency value must be greater than 0";
    }

    if (!drugForm.frequency_unit) {
      newErrors.frequency_unit =
        "Frequency unit is required (e.g., times per day, daily)";
    }
    if (!drugForm.duration_value) {
      newErrors.duration_value = "Duration value must be greater than 0";
    }
    if (!drugForm.duration_unit) {
      newErrors.duration_unit =
        "Duration unit is required (e.g., days, weeks, months)";
    }

    setError(newErrors);
    return Object.keys(newErrors).length === 0;
  }, [drugForm]);

  const verifyDrug = () => {
    let finalDrugList;
    if (drugForm.condition_id !== null || drugForm.drug_id !== null) {
      if (!validateDrugForm()) {
        Toast.show({
          type: "error",
          text1: "Validation Error",
          text2: "Please fix the form errors before verifying",
        });
        return;
      }
      finalDrugList = [...patientDrugList, drugForm].map((drug) => ({
        condition_id: drug.condition_id,
        drug_id: drug.drug_id,
        dosage_value: drug.dosage_value,
        dosage_unit: drug.dosage_unit,
        frequency_value: drug.frequency_value,
        frequency_unit: drug.frequency_unit,
        duration_value: drug.duration_value,
        duration_unit: drug.duration_unit,
      }));
      setPatientDrugList([...patientDrugList, drugForm]);
    } else {
      finalDrugList = [...patientDrugList].map((drug) => ({
        condition_id: drug.condition_id,
        drug_id: drug.drug_id,
        dosage_value: drug.dosage_value,
        dosage_unit: drug.dosage_unit,
        frequency_value: drug.frequency_value,
        frequency_unit: drug.frequency_unit,
        duration_value: drug.duration_value,
        duration_unit: drug.duration_unit,
      }));
      setPatientDrugList([...patientDrugList]);
    }

    const payLoad = {
      ...patientBioData,
      drugs: finalDrugList,
    };
    console.log("payLoad=====", payLoad);
    console.log("patient drug list =====", patientDrugList);
    verify.mutate(payLoad);
  };
  const addNewDrug = () => {
    if (!isVisible) {
      setIsVisible(true);
    } else {
      if (!validateDrugForm()) {
        Toast.show({
          type: "error",
          text1: "Validation Error",
          text2: "Please fix the form errors before verifying",
        });
        return;
      }
      setDrugFormState("add");
      const newDrug = {
        ...drugForm,
        id: patientDrugList.length,
      };
      const newList = [...patientDrugList, newDrug];
      setPatientDrugList(newList);
      setDrugForm({ ...initialState, id: patientDrugList.length + 1 });
    }
  };
  const handleChange = useCallback((key: any, value: any) => {
    // Update drug form
    setDrugForm((prev) => ({ ...prev, [key]: value }));
  }, []);
  useEffect(() => {
    setDrugFormState(null);
  }, []);
  const dataProps = {
    patientDrugList,
    deleteDrug,
    editDrug,
    verifyDrug,
    addNewDrug,
    drugForm,
    drugFormState,
    medicationsList,
    conditionsList,
    error,
    handleChange,
    loading: verify.isPending,
    isVisible,
  };
  return <OptimizePresecriptionScreen {...dataProps} />;
};

export default OptimizePresecription;
