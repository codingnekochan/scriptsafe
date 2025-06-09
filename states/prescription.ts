import { create } from "zustand";
export const usePrescriptionStore = create((set) => ({
  prescriptionState: false,
  patientBioData: {},
  patientMedications: [],
  verificationResult: null,
  patientDrugList: null,
  drugFormState: null,
  conditionsList: [],
  medicationsList: [],
  setPrescriptionState: (data: any) => set(() => ({ prescriptionState: data })),
  setPatientBioData: (data: any) => set(() => ({ patientBioData: data })),
  setPatientMedications: (data: any) =>
    set(() => ({ patientMedications: data })),
  setVerificationResult: (data: any) =>
    set(() => ({ verificationResult: data })),
  setPatientDrugList: (data: any) => set(() => ({ patientDrugList: data })),
  setDrugFormState: (data: any) => set(() => ({ drugFormState: data })),
  setConditionsList: (data: any) => set(() => ({ conditionsList: data })),
  setMedicationsList: (data: any) => set(() => ({ medicationsList: data })),
}));
