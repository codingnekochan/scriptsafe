import EditDrugScreen from "@/screens/Presecription/PrescriptionVerification/EditDrugScreen";
import { usePrescriptionStore } from "@/states/prescription";
import { router, useLocalSearchParams } from "expo-router";
import React, { useCallback, useEffect, useState } from "react";

const EditDrug = () => {
  const params = useLocalSearchParams();
  const [error, setError] = useState({});
  const drugIndex = params.drugIndex
    ? parseInt(params.drugIndex as string)
    : -1;
  const patientDrugList = usePrescriptionStore(
    (state: any) => state.patientDrugList
  );
  const currentDrug = patientDrugList[drugIndex];
  const [drugForm, setDrugForm] = useState([]);
  const setPatientDrugList = usePrescriptionStore(
    (state: any) => state.setPatientDrugList
  );
  const medicationsList = usePrescriptionStore(
    (state: any) => state.medicationsList
  );
  const conditionsList = usePrescriptionStore(
    (state: any) => state.conditionsList
  );
  useEffect(() => {
    setDrugForm({
      drug_name: currentDrug.drug_name || null,
      condition_name: currentDrug.condition_name || null,
      dosage_value: currentDrug.dosage_value || 0,
      dosage_unit: currentDrug.dosage_unit || null,
      frequency_value: currentDrug.frequency_value || 0,
      frequency_unit: currentDrug.frequency_unit || null,
      duration_value: currentDrug.duration_value || 0,
      duration_unit: currentDrug.duration_unit || null,
    });
  }, [currentDrug]);
  const saveChanges = () => {
    const list = [...patientDrugList];
    list[drugIndex] = drugForm;
    setPatientDrugList(list);
    router.back()
  };
  const deleteDrug = () => {};
  const editDrug = () => {};
  const handleChange = useCallback((key: any, value: any) => {
    // Update drug form
    setDrugForm((prev) => ({ ...prev, [key]: value }));
  }, []);
  const dataProps = {
    saveChanges,
    currentDrug,
    deleteDrug,
    editDrug,
    medicationsList,
    conditionsList,
    error,
    handleChange,
    drugForm,
  };
  return <EditDrugScreen {...dataProps} />;
};

export default EditDrug;
