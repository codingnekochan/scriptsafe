import StepTwoScreen from "@/screens/Presecription/PrescriptionVerification/StepTwoScreen";
import {
	getConditions,
	getMedications,
	verifyPrescription,
} from "@/services/api";
import { usePrescriptionStore } from "@/states/prescription";
import { useMutation, useQueries } from "@tanstack/react-query";
import { router } from "expo-router";
import React, { useEffect, useState } from "react";
import Toast from "react-native-toast-message";

const StepTwo = () => {
	const initalState = {
		id: 1,
		condition_id: null, //condition_id
		drug_id: null, //medication_id
		dosage_value: 0,
		dosage_unit: null, //'mcg', 'mg', 'g', 'ml'
		frequency_value: 0,
		frequency_unit: null, //'x daily', 'x weekly', 'x monthly', 'x yearly', 'hours', 'times/day', 'times/week'
		duration_value: 0,
		duration_unit: null, //'Days', 'Weeks', 'Months', 'Year
	};
	const patientBioData = usePrescriptionStore(
		(state: any) => state.patientBioData
	);
	// const setPatientBioData = usePrescriptionStore(
	// 	(state: any) => state.setPatientBioData
	// );
	const setVerificationResult = usePrescriptionStore(
		(state: any) => state.setVerificationResult
	);
	const [errors, setError] = useState({});
	// const [conditionError, setConditionError] = useState<string>(null);
	const [conditionsList, setConditionsList] = useState([]);
	const [medicationsList, setMedicationList] = useState([]);
	const [drugList, setDrugList] = useState([initalState]);
	const addAnotherDrug = () => {
		setDrugList([...drugList, { ...initalState, id: drugList.length + 1 }]);
	};
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
	const verify = useMutation({
		mutationFn: (data: any) => verifyPrescription(data),
		onSuccess: (data: any) => {
			setVerificationResult(data?.verification_results);
			router.push("/prescriptionVerification");
		},
		onError(error) {
			console.log(error.response);
			Toast.show({
				type: "error",
				text1: "Verification failed",
				text2: "Please try again",
			});
		},
	});

	const validateForm = () => {
		const newErrors = drugList.map((drug) => {
			const fieldErrors: any = {};
			if (!drug.dosage_value) fieldErrors.dosage = "Dosage is required";
			if (!drug.frequency_value)
				fieldErrors.frequency = "Frequency is required";
			if (!drug.duration_value) fieldErrors.duration = "Duration is required";
			if (!drug.dosage_unit) fieldErrors.dosageUnit = "Dosage unit is required";
			if (!drug.frequency_unit)
				fieldErrors.frequencyUnit = "Frequency unit is required";
			if (!drug.duration_unit)
				fieldErrors.durationUnit = "Duration unit is required";
			if (!drug.drug_id) fieldErrors.drug = "Drug is required";
			if (!drug.condition_id) fieldErrors.condition = "Condition is required";
			return fieldErrors;
		});
		setError(newErrors);

		// Check if all drugs have no errors
		const isValid = newErrors.every(
			(drugErrors) => Object.keys(drugErrors).length === 0
		);
		return isValid;
	};

	const handleChange = (index: number, key: any, value: any) => {
		setError({});
		// setConditionError(null);
		const updatedList = [...drugList];
		updatedList[index][key] = value;
		setDrugList(updatedList);
	};
	const handleNext = () => {
		if (validateForm()) {
			const payload = {
				...patientBioData,
				drugs: drugList,
			};
			console.log("payload", payload);
			verify.mutate(payload);
		} else {
			Toast.show({
				type: "error",
				text1: "Validation failed",
				text2: "Please fill in all required fields",
			});
		}
	};
	// const setCondition = (value: any) => {
	// 	setConditionError(null);
	// 	setPatientBioData({ ...patientBioData, ["condition_id"]: value });
	// };
	const dataProps = {
		addAnotherDrug,
		handleChange,
		drugList,
		handleNext,
		loading: verify.isPending,
		errors,
		// conditionError,
		// setCondition,
		conditionsList,
		medicationsList,
	};
	useEffect(() => {
		if (fetchData[0].isSuccess && fetchData[1].isSuccess) {
			setConditionsList(fetchData[0]?.data?.data?.data);
			setMedicationList(fetchData[1]?.data?.data?.data);
		}
	}, [fetchData]);

	return <StepTwoScreen {...dataProps} />;
};

export default StepTwo;
