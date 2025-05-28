import StepTwoScreen from '@/screens/Presecription/PrescriptionVerification/StepTwoScreen'
import { getConditions, getMedications, verifyPrescription } from '@/services/api'
import { usePrescriptionStore } from '@/states/prescription'
import { useMutation, useQueries } from '@tanstack/react-query'
import { router } from 'expo-router'
import React, { useEffect, useState } from 'react'
import Toast from 'react-native-toast-message'


const StepTwo = () => {
    const initalState = {
        id: 1,
        dosage: '',
        frequency: '',
        duration: null,
    }
    const patientBioData = usePrescriptionStore((state: any) => state.patientBioData)
    const setPatientBioData = usePrescriptionStore((state: any) => state.setPatientBioData)
    const setVerificationResult = usePrescriptionStore((state: any) => state.setVerificationResult)
    const [errors, setError] = useState({})
    const [conditionError, setConditionError] = useState<string>(null)
    const [conditionsList, setConditionsList] = useState([])
    const [medicationsList, setMedicationList] = useState([])
    const [drugList, setDrugList] = useState([initalState])
    const addAnotherDrug = () => {
        setDrugList([...drugList, { ...initalState, id: drugList.length + 1 }])
    }
    const fetchData = useQueries({
        queries: [
            {
                queryKey: ['conditions'],
                queryFn: getConditions,
            },
            {
                queryKey: ['medications'],
                queryFn: getMedications,
            }
        ],

    })
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
                text2: 'Please try again',
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
        })
        setError(newErrors);

        // Check if all drugs have no errors
        const isValid = newErrors.every((drugErrors) => Object.keys(drugErrors).length === 0);
        return isValid;
    };
    const validateConditions = () => {
        if (!patientBioData.conditions || patientBioData.conditions.length === 0 ) {
            setConditionError('Condition is required');
            return false;
        } else {
            return true
        }
      
    }
    const handleChange = (index: number, key: any, value: any) => {
        setError({})
        setConditionError(null)
        const updatedList = [...drugList]
        updatedList[index][key] = value
        setDrugList(updatedList)
    }
    const handleNext = () => {
        if (validateForm() && validateConditions()) {
            verify.mutate({
                patient: patientBioData,
                drugs: drugList,
            })
        }
    }
    const setCondition = (value:any) => {
        setPatientBioData({ ...patientBioData, ['conditions']: [value] })
    }
    const dataProps = {
        addAnotherDrug,
        handleChange,
        drugList,
        handleNext,
        loading: verify.isPending,
        errors,
        conditionError,
        setCondition,
        conditionsList,
        medicationsList,

    }
    useEffect(() => {
        if (fetchData[0].isSuccess && fetchData[1].isSuccess) {
            setConditionsList(fetchData[0]?.data?.data?.data)
            setMedicationList(fetchData[1]?.data?.data?.data)
        }
    }, [fetchData])

    return (
        <StepTwoScreen {...dataProps} />
    )
}

export default StepTwo