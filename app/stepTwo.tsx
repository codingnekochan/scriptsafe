import StepTwoScreen from '@/screens/Presecription/PrescriptionVerification/StepTwoScreen'
import { verifyPrescription } from '@/services/api'
import { usePrescriptionStore } from '@/states/prescription'
import { useMutation } from '@tanstack/react-query'
import { router } from 'expo-router'
import React, { useState } from 'react'
import Toast from 'react-native-toast-message'


const StepTwo = () => {
    const initalState = {
        id: 1,
        dosage: '',
        frequency: '',
        duration: null,
    }
    const patientBioData = usePrescriptionStore((state: any) => state.patientBioData)
    // const setPatientMedications = usePrescriptionStore((state: any) => state.setPatientMedications)
    const setVerificationResult = usePrescriptionStore((state: any) => state.setVerificationResult)
    const [errors, setError] = useState({})

    const [drugList, setDrugList] = useState([initalState])
    const addAnotherDrug = () => {
        setDrugList([...drugList, { ...initalState, id: drugList.length + 1 }])
    }
    const verify = useMutation({
        mutationFn: (data: any) => verifyPrescription(data),
        onSuccess: (data: any) => {
            setVerificationResult(data?.data)
            router.push('/prescriptionVerification')
        },
        onError(error) {
            console.log(error)
            Toast.show({
                type: 'error',
                text1: 'Verification failed',
                text2 : 'Please try again',
            })
        },
    })

    const validateForm = () => {
        const newErrors = drugList.map((drug) => {
            const fieldErrors: any = {};
            if (!drug.dosage) fieldErrors.dosage = 'Dosage is required';
            if (!drug.frequency) fieldErrors.frequency = 'Frequency is required';
            if (!drug.duration) fieldErrors.duration = 'Duration is required';
            return fieldErrors;
        });

        setError(newErrors);

        // Check if all drugs have no errors
        const isValid = newErrors.every((drugErrors) => Object.keys(drugErrors).length === 0);
        return isValid;
    };
    const handleChange = (index: number, key: any, value: any) => {
        setError({})
        const updatedList = [...drugList]
        updatedList[index][key] = value
        setDrugList(updatedList)
    }
    const handleNext = () => {
        if (validateForm()) {
            verify.mutate({
                patient: patientBioData,
                drugs: drugList,
            })
        }
    }
    const dataProps = {
        addAnotherDrug,
        handleChange,
        drugList,
        handleNext,
        loading: verify.isPending,
        errors,
    }

    return (
        <StepTwoScreen {...dataProps} />
    )
}

export default StepTwo