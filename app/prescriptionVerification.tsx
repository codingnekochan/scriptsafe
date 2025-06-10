import PrescriptionVerificationScreen from "@/screens/Presecription/PrescriptionVerification/PrescriptionVerificationScreen";
import { usePrescriptionStore } from "@/states/prescription";
import { router } from "expo-router";
import React, { useState } from "react";

const PrescriptionVerification = () => {
  const [modalOpen, setModalOpen] = useState(false);
//   const setClickPrescription = usePrescriptionStore(
//     (state: any) => state.setPrescriptionState
//   );
  const verificationResult = usePrescriptionStore(
    (state: any) => state.verificationResult
  );
  const formatResponse = (text: string): string => {
		return text
			.split(".")
			.map((sentence) => sentence.trim())
			.filter((sentence) => sentence.length > 0)
			.map((sentence) => sentence + ".")
			.join("\n");
	};
  const handleDispense = () => {
    // setClickPrescription(true);
    router.replace("/(tabs)/(prescriptions)");
  };
  const dataProps = {
    modalOpen,
    setModalOpen,
    verificationResult,
    handleDispense,
    formatResponse
  };

  return <PrescriptionVerificationScreen {...dataProps} />;
};

export default PrescriptionVerification;
