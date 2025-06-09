import AddButton from "@/components/buttons/AddButton";
import RecentPrescriptionCard from "@/components/card/RecentPrescriptionCard";
import Container from "@/components/common/Container";
import MainPageHeader from "@/components/headers/MainPageHeader";
import { recentPrescriptions } from "@/constants/contentProps";
import { img_prescription_empty } from "@/constants/images";
import { usePrescriptionStore } from "@/states/prescription";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import React from "react";
import { Image, Text, View } from "react-native";

const PrescriptionOverviewScreen = () => {
	const clickPrescription = usePrescriptionStore(
		(state: any) => state.prescriptionState
	);

	const handleClick = () => {
		router.push("/stepOne");
	};
	return (
		<>
			{!clickPrescription && (
				<LinearGradient
					colors={["#ECE7F6", "#EBE8F8", "#E4EFFF", "#FAF1E2"]}
					style={{ flex: 1 }}
					start={{ x: 1, y: 0 }}
					end={{ x: 0, y: 1 }}
				>
					<Container bg="transparent">
						<MainPageHeader />
						<View className="flex-1 justify-center items-center">
							<View className="bg-white border border-[#E8F3FF] rounded-xl py-6 px-7  justify-center items-center">
								<Image source={img_prescription_empty} className="w-20 h-20" />
								<View className="mt-6 gap-3">
									<Text className="text-center text-[#101828] font-semiBoldSFDisplay text-base">
										No Prescription Yet
									</Text>
									<Text className="text-center font-regularSFDisplay text-base text-[#667085]">
										All prescriptions would appear here once they are updated
									</Text>
								</View>
								<View className="mt-5">
									<AddButton onPress={handleClick} />
								</View>
							</View>
						</View>
					</Container>
				</LinearGradient>
			)}
			{clickPrescription && (
				<Container bg={"white"} px="px-0">
					<LinearGradient
						colors={["#E0EDFF", "#E4EFFF", "#E7F0FF"]}
						style={{ flex: 1 }}
						start={{ x: 0, y: 0 }}
						end={{ x: 0, y: 1 }}
					>
						<View className="flex-1 px-6">
							<MainPageHeader />
							<View>
								<Text className="font-mediumSFDisplay text-base">
									Verify your prescription in less than a minute
								</Text>
								<View className="mt-[10px]">
									<AddButton text="Check Prescriptions" onPress={handleClick} />
								</View>
							</View>
							<View className="mt-5">
								<Text className="font-boldSFDisplay text-base leading-[32px]">
									Recent Prescriptions
								</Text>
								<View className="gap-5 mt-4">
									{recentPrescriptions.map((prescription, index) => {
										return (
											<RecentPrescriptionCard
												key={index}
												name={prescription.patient_name}
												illness={prescription.patient_illness}
												medication={prescription.patient_medication}
												date={prescription.created_at}
												rating={prescription.rating}
											/>
										);
									})}
								</View>
							</View>
						</View>
					</LinearGradient>
				</Container>
			)}
		</>
	);
};

export default PrescriptionOverviewScreen;
