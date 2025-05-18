import { create } from 'zustand'
export const usePrescriptionStore = create((set) => ({
    prescriptionState: false,
    setPrescriptionState : (data:any)=> set(()=>({prescriptionState : data}))
}))