import OptimizePresecriptionScreen from "@/screens/Presecription/PrescriptionVerification/OptimizePresecriptionScreen";
import { usePrescriptionStore } from "@/states/prescription";
import React from "react";

const OptimizePresecription = () => {
  const patientDrugList = usePrescriptionStore(
    (state: any) => state.patientDrugList
  );
  const setPatientDrugList = usePrescriptionStore(
    (state: any) => state.setPatientDrugList
  );
  const deleteDrug = (i: any) => {
    const newList = patientDrugList.filter((drug, index) => index !== i);
    setPatientDrugList(newList);
  };
  const dataProps = {
    patientDrugList,
    deleteDrug
  };
  return <OptimizePresecriptionScreen {...dataProps} />;
};

export default OptimizePresecription;
