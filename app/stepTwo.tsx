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
import React, { useCallback, useEffect, useMemo, useState } from "react";
import Toast from "react-native-toast-message";

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

const StepTwo = () => {
  const [index, setIndex] = useState(0);
  const [errors, setErrors] = useState<any[]>([]);
  const initialState: DrugForm = useMemo(
    () => ({
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
    }),
    []
  );

  const [drugForm, setDrugForm] = useState<DrugForm>(initialState);
  const [drugList, setDrugList] = useState<DrugForm[]>([]);

  // Zustand store hooks
  const patientBioData = usePrescriptionStore(
    (state: any) => state.patientBioData
  );
  const drugFormState = usePrescriptionStore(
    (state: any) => state.drugFormState
  );
  const setDrugFormState = usePrescriptionStore(
    (state: any) => state.setDrugFormState
  );
  const medicationsList = usePrescriptionStore(
    (state: any) => state.medicationsList
  );
  const setMedicationsList = usePrescriptionStore(
    (state: any) => state.setMedicationsList
  );
  const conditionsList = usePrescriptionStore(
    (state: any) => state.conditionsList
  );

  const setConditionsList = usePrescriptionStore(
    (state: any) => state.setConditionsList
  );
  const setVerificationResult = usePrescriptionStore(
    (state: any) => state.setVerificationResult
  );
  const setPatientDrugList = usePrescriptionStore(
    (state: any) => state.setPatientDrugList
  );

  // Initialize form state
  useEffect(() => {
    setDrugFormState("add");
  }, [setDrugFormState]);

  // Fetch conditions and medications
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

  // Set fetched data when available
  useEffect(() => {
    if (fetchData[0].isSuccess && fetchData[1].isSuccess) {
      setConditionsList(fetchData[0]?.data?.data?.data);
      setMedicationsList(fetchData[1]?.data?.data?.data);
    }
  }, [fetchData]);

  // Verification mutation
  const verify = useMutation({
    mutationFn: (data: any) => verifyPrescription(data),
    onSuccess: (data: any) => {
      setVerificationResult(data?.verification_results);
      setDrugFormState(null);
      router.push("/prescriptionVerification");
    },
    onError(error: any) {
      console.log(error.response.data);
      Toast.show({
        type: "error",
        text1: "Verification failed",
        text2: "Please try again",
      });
    },
  });

  // Add another drug to the list
  const addAnotherDrug = useCallback(() => {
    if (!validateCurrentDrug()) {
      Toast.show({
        type: "error",
        text1: "Validation failed",
        text2: "Please fill in all required fields for the current drug",
      });
      return;
    }

    const newDrug: DrugForm = {
      ...drugForm,
      id: drugList.length,
    };

    setDrugList((prev) => [...prev, newDrug]);
    setDrugForm({ ...initialState, id: drugList.length + 1 });
    setIndex(drugList.length + 1);
    setErrors((prev) => [...prev, {}]); // Add empty error object for new drug
  }, [drugForm, drugList, initialState]);

  // Validate current drug form
  const validateCurrentDrug = useCallback((): boolean => {
    const fieldErrors: any = {};

    if (!drugForm.dosage_value || drugForm.dosage_value <= 0)
      fieldErrors.dosage = "Dosage is required and must be greater than 0";
    if (!drugForm.frequency_value || drugForm.frequency_value <= 0)
      fieldErrors.frequency =
        "Frequency is required and must be greater than 0";
    if (!drugForm.duration_value || drugForm.duration_value <= 0)
      fieldErrors.duration = "Duration is required and must be greater than 0";
    if (!drugForm.dosage_unit)
      fieldErrors.dosageUnit = "Dosage unit is required";
    if (!drugForm.frequency_unit)
      fieldErrors.frequencyUnit = "Frequency unit is required";
    if (!drugForm.duration_unit)
      fieldErrors.durationUnit = "Duration unit is required";
    if (!drugForm.drug_id) fieldErrors.drug = "Drug is required";
    if (!drugForm.condition_id) fieldErrors.condition = "Condition is required";

    // Update errors for current drug
    const newErrors = [...errors];
    newErrors[index] = fieldErrors;
    setErrors(newErrors);

    return Object.keys(fieldErrors).length === 0;
  }, [drugForm, errors, index]);

  // Validate all drugs in the list
  const validateAllDrugs = useCallback((): boolean => {
    if (drugList.length === 0) {
      Toast.show({
        type: "error",
        text1: "No drugs added",
        text2: "Please add at least one drug",
      });
      return false;
    }

    const newErrors = drugList.map((drug) => {
      const fieldErrors: any = {};

      if (!drug.dosage_value || drug.dosage_value <= 0)
        fieldErrors.dosage = "Dosage is required and must be greater than 0";
      if (!drug.frequency_value || drug.frequency_value <= 0)
        fieldErrors.frequency =
          "Frequency is required and must be greater than 0";
      if (!drug.duration_value || drug.duration_value <= 0)
        fieldErrors.duration =
          "Duration is required and must be greater than 0";
      if (!drug.dosage_unit) fieldErrors.dosageUnit = "Dosage unit is required";
      if (!drug.frequency_unit)
        fieldErrors.frequencyUnit = "Frequency unit is required";
      if (!drug.duration_unit)
        fieldErrors.durationUnit = "Duration unit is required";
      if (!drug.drug_id) fieldErrors.drug = "Drug is required";
      if (!drug.condition_id) fieldErrors.condition = "Condition is required";

      return fieldErrors;
    });

    setErrors(newErrors);

    // Check if all drugs have no errors
    const isValid = newErrors.every(
      (drugErrors) => Object.keys(drugErrors).length === 0
    );

    return isValid;
  }, [drugList]);

  // Handle form field changes
  const handleChange = useCallback(
    (key: keyof DrugForm, value: any) => {
      // Clear errors for the current field
      const newErrors = [...errors];
      if (newErrors[index]) {
        delete newErrors[index][key];
        setErrors(newErrors);
      }

      // Update drug form
      setDrugForm((prev) => ({ ...prev, [key]: value }));
    },
    [errors, index]
  );

  // Handle form submission
  const handleNext = useCallback(() => {
    let finalDrugList;
    if (drugList.length === 0) {
      if (!validateCurrentDrug()) {
        Toast.show({
          type: "error",
          text1: "Validation failed",
          text2: "Please fill in all required fields",
        });
        return;
      } else {
        finalDrugList = [drugForm].map((drug) => ({
          condition_id: drug.condition_id,
          drug_id: drug.drug_id,
          dosage_value: drug.dosage_value,
          dosage_unit: drug.dosage_unit,
          frequency_value: drug.frequency_value,
          frequency_unit: drug.frequency_unit,
          duration_value: drug.duration_value,
          duration_unit: drug.duration_unit,
        }));
        setPatientDrugList([drugForm]);
      }
    } else if (drugForm.condition_id !== null || drugForm.drug_id !== null) {
      if (!validateAllDrugs() && !validateCurrentDrug()) {
        Toast.show({
          type: "error",
          text1: "Validation failed",
          text2: "Please fill in all required fields",
        });
        return;
      } else {
        finalDrugList = [...drugList, drugForm].map((drug) => ({
          condition_id: drug.condition_id,
          drug_id: drug.drug_id,
          dosage_value: drug.dosage_value,
          dosage_unit: drug.dosage_unit,
          frequency_value: drug.frequency_value,
          frequency_unit: drug.frequency_unit,
          duration_value: drug.duration_value,
          duration_unit: drug.duration_unit,
        }));
      }
      setPatientDrugList([...drugList, drugForm]);
    } else {
      finalDrugList = [...drugList].map((drug) => ({
        condition_id: drug.condition_id,
        drug_id: drug.drug_id,
        dosage_value: drug.dosage_value,
        dosage_unit: drug.dosage_unit,
        frequency_value: drug.frequency_value,
        frequency_unit: drug.frequency_unit,
        duration_value: drug.duration_value,
        duration_unit: drug.duration_unit,
      }));
      setPatientDrugList([...drugList]);
    }

    savePrescription();
    const payload = {
      ...patientBioData,
      drugs: finalDrugList,
    };
    console.log(payload, "=======pAY");
    verify.mutate(payload);
  }, [drugList, patientBioData, verify, setPatientDrugList, validateAllDrugs]);

  // Save prescription to database
  const savePrescription = async () => {
    console.log("drug List =====", drugList);
    let conditions;
    let medications;
    try {
      if (drugList.length > 0) {
        conditions = drugList
          .map((drug) => drug.condition_name)
          .filter(Boolean);
        medications = drugList.map((drug) => ({
          drug_name: drug.drug_name,
          dosage_value: drug.dosage_value,
          dosage_unit: drug.dosage_unit,
          duration_unit: drug.duration_unit,
          duration_value: drug.duration_value,
          frequency_unit: drug.frequency_unit,
          frequency_value: drug.frequency_value,
        }));
      } else {
        conditions = [drugForm]
          .map((drug) => drug.condition_name)
          .filter(Boolean);
        medications = [drugForm].map((drug) => ({
          drug_name: drug.drug_name,
          dosage_value: drug.dosage_value,
          dosage_unit: drug.dosage_unit,
          duration_unit: drug.duration_unit,
          duration_value: drug.duration_value,
          frequency_unit: drug.frequency_unit,
          frequency_value: drug.frequency_value,
        }));
      }
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

  // Delete a drug from the list
  const deleteDrug = useCallback(
    (drugIndex: number) => {
      const newList = drugList.filter((_, i) => i !== drugIndex);
      const newErrors = errors.filter((_, i) => i !== drugIndex);

      setDrugList(newList);
      setErrors(newErrors);

      // Reset index if needed
      if (index >= newList.length && newList.length > 0) {
        setIndex(newList.length - 1);
      } else if (newList.length === 0) {
        setIndex(0);
        setDrugForm(initialState);
      }
    },
    [drugList, errors, index, initialState]
  );

  // Edit a drug
  const editDrug = useCallback(
    (drugIndex: number) => {
      setDrugFormState("edit");
      setIndex(drugIndex);
      setDrugForm(drugList[drugIndex]);
    },
    [drugList, setDrugFormState]
  );

  // Update drug in list (for edit mode)
  const updateDrug = useCallback(() => {
    if (!validateCurrentDrug()) {
      return;
    }
    const updatedList = [...drugList];
    updatedList[index] = { ...drugForm };
    setDrugList(updatedList);
    setDrugFormState("add");
    setDrugForm({ ...initialState, id: drugList.length });
  }, [
    drugForm,
    drugList,
    index,
    initialState,
    setDrugFormState,
    validateCurrentDrug,
  ]);
  // Props for the screen component
  const dataProps = {
    addAnotherDrug,
    updateDrug,
    handleChange,
    drugList,
    drugForm,
    handleNext,
    loading: verify.isPending,
    errors,
    conditionsList,
    medicationsList,
    deleteDrug,
    editDrug,
    index,
    drugFormState,
  };

  return <StepTwoScreen {...dataProps} />;
};

export default StepTwo;
