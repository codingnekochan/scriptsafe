import { pregnancyOptions } from '@/constants/contentProps'
import StepOneScreen from '@/screens/Presecription/PrescriptionVerification/StepOneScreen'
import { getConditions, getLifestyle } from '@/services/api'
import { usePrescriptionStore } from '@/states/prescription'
import { useQueries } from '@tanstack/react-query'
import { router } from 'expo-router'
import React, { useEffect, useReducer, useState } from 'react'


const initalState: object = {
  // name: null,
  age: null,
  weight: null,
  gender: null,
  is_pregnant: null,
  lifestyles: [],
  conditions: []
}

function reducer(state: any, action: any) {
  switch (action.type) {
    case 'payload':
      return { ...state, [action.field]: action.value }
  }
}
const StepOne = () => {
  const [state, dispatch] = useReducer(reducer, initalState)
  const [lifestyle, setLifestyle] = useState([])
  const [combordities, setCombordities] = useState([])
  const [error, setError] = useState({})
  const setPatientBioData = usePrescriptionStore((state: any) => state.setPatientBioData)

  const handleChange = (field: string, value: any) => {
    dispatch({
      type: 'payload',
      field: field,
      value: value,
    })
    setError({})
  }
  const fetchPatientData = useQueries({
    queries: [
      {
        queryKey: ['condition'],
        queryFn: getConditions,
      },
      {
        queryKey: ['lifestyle'],
        queryFn: getLifestyle,
      }
    ],

  })
  const validateForm = () => {
    const fieldErrors: any = {};

    if (!state.age) {
      fieldErrors.age = 'Age is required';
    }
    if (!state.weight) {
      fieldErrors.weight = 'Weight is required';
    }
    if (!state.gender) {
      fieldErrors.gender = 'Gender is required';
    }
    if (state.gender === 'female' && !state.is_pregnant) {
      fieldErrors.is_pregnant = 'Pregnancy status is required';
    }

    setError(fieldErrors);

    // Return true if no errors, false if there are errors
    return Object.keys(fieldErrors).length === 0;
  };



  const handleNext = () => {
    const isValid = validateForm()
    console.log(isValid)
    if (isValid) {
      setPatientBioData(state)
      router.push('/stepTwo')
    }
  }
  const dataProps = {
    state,
    handleChange,
    pregnancyOptions,
    lifestyle,
    combordities,
    handleNext,
    error
  }
  useEffect(() => {
    if (fetchPatientData[0].isSuccess && fetchPatientData[1].isSuccess) {
      setCombordities(fetchPatientData[0]?.data?.data?.data)
      setLifestyle(fetchPatientData[1]?.data?.data?.data)
    }
    console.log(state)
    console.log(error)
  }, [fetchPatientData])
  return (
    <StepOneScreen {...dataProps} />
  )
}

export default StepOne