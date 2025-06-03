import { create } from "zustand";
export const usePrescriptionStore = create((set) => ({
  prescriptionState: false,
  patientBioData: {},
  patientMedications: [],
  verificationResult: null,
  patientDrugList: null,
  setPrescriptionState: (data: any) => set(() => ({ prescriptionState: data })),
  setPatientBioData: (data: any) => set(() => ({ patientBioData: data })),
  setPatientMedications: (data: any) =>
    set(() => ({ patientMedications: data })),
  setVerificationResult: (data: any) =>
    set(() => ({ verificationResult: data })),
  setPatientDrugList: (data: any) => set(() => ({ patientDrugList: data })),
}));
