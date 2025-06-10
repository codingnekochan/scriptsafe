import { pregnancyOptions } from "@/constants/contentProps";
import StepOneScreen from "@/screens/Presecription/PrescriptionVerification/StepOneScreen";
import { getAgeCategory, getConditions, getLifestyle, getMedications } from "@/services/api";
import { usePrescriptionStore } from "@/states/prescription";
import { useQueries } from "@tanstack/react-query";
import { router } from "expo-router";
import React, { useEffect, useReducer, useState } from "react";

const initalState: object = {
	patient_name: null,
	patient_age_category_id: null,
	patient_weight: null,
	weight_unit: null,
	patient_gender: null,
	pregnancy_status: null,
	lifestyle_category_id: null,
	comorbidity_ids: [],
	on_medication_for_comorbidities: null,
	medications_for_comorbidities: [],
	allergy_ids: [],
};

function reducer(state: any, action: any) {
	switch (action.type) {
		case "payload":
			return { ...state, [action.field]: action.value };
	}
}
const StepOne = () => {
	const [state, dispatch] = useReducer(reducer, initalState);
	const [lifestyle, setLifestyle] = useState([]);
	const [comorbiditiesList, setcomorbiditiesList] = useState([]);
	const [ageCategory, setAgeCategory] = useState([]);
	const [comorbiditiesMedicationList,setComorbiditiesMedicationList]= useState([])
	const [error, setError] = useState({});
	const setPatientBioData = usePrescriptionStore(
		(state: any) => state.setPatientBioData
	);

	const handleChange = (field: string, value: any) => {
		dispatch({
			type: "payload",
			field: field,
			value: value,
		});
		setError({});
	};
	const fetchPatientData = useQueries({
		queries: [
			{
				queryKey: ["comorbiditiesList"],
				queryFn: getConditions,
			},
			{
				queryKey: ["lifestyle"],
				queryFn: getLifestyle,
			},
			{
				queryKey: ["ageCategory"],
				queryFn: getAgeCategory,
			},
			{
				queryKey : ['comorbiditiesMedication'],
				queryFn : getMedications,
			}
		],
	});
	const validateForm = () => {
		const fieldErrors: any = {};

		if (!state.patient_age_category_id) {
			fieldErrors.age = "Age is required";
		}
		if (!state.patient_weight) {
			fieldErrors.weight = "Weight is required";
		}
		if (!state.patient_gender) {
			fieldErrors.gender = "Gender is required";
		}
		if (state.patient_gender === "female" && !state.is_pregnant) {
			fieldErrors.is_pregnant = "Pregnancy status is required";
		}

		setError(fieldErrors);

		// Return true if no errors, false if there are errors
		return Object.keys(fieldErrors).length === 0;
	};

	const handleNext = () => {
		const isValid = validateForm();
		if (isValid) {
			setPatientBioData(state);
			router.push("/stepTwo");
		}
	};
	const dataProps = {
		state,
		handleChange,
		pregnancyOptions,
		lifestyle,
		comorbiditiesList,
		ageCategory,
		handleNext,
		error,
		comorbiditiesMedicationList
	};
	useEffect(() => {
		if (
			fetchPatientData[0]?.isSuccess &&
			fetchPatientData[1]?.isSuccess &&
			fetchPatientData[2]?.isSuccess && 
			fetchPatientData[3]?.isSuccess
		) {
			setcomorbiditiesList(fetchPatientData[0]?.data?.data?.data);
			setLifestyle(fetchPatientData[1]?.data?.data?.data);
			const ageData = fetchPatientData[2]?.data?.data?.data.map(
				(item: any) => ({
					id: item.id,
					label: `${item.min_age} - ${item.max_age} ${item.age_unit}`,
				})
			);
			setAgeCategory(ageData);
			setComorbiditiesMedicationList(fetchPatientData[3]?.data?.data?.data)
		}
		if (
			fetchPatientData[0]?.isError ||
			fetchPatientData[1]?.isError ||
			fetchPatientData[2]?.isError
		) {
			console.log(fetchPatientData[0].error,'is error');
			console.log(fetchPatientData[1].error);
			console.log(fetchPatientData[2].error);
			console.log(fetchPatientData[3].error);
		}
	}, [
		fetchPatientData[0]?.status,
		fetchPatientData[1]?.status,
		fetchPatientData[2]?.status,
		fetchPatientData[3]?.status
	]);

	return <StepOneScreen {...dataProps} />;
};

export default StepOne;
