import OutlineButton from "@/components/buttons/OutlineButton";
import PrimaryButton from "@/components/buttons/PrimaryButton";
import Container from "@/components/common/Container";
import PageHeader from "@/components/headers/PageHeader";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import React, { useEffect, useState } from "react";
import { ActivityIndicator, Text, View } from "react-native";
import Modal from "react-native-modal";

const PrescriptionVerificationScreen = ({
	modalOpen,
	setModalOpen,
	verificationResult,
	handleDispense,
}: any) => {
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		const timeout = setTimeout(() => {
			setLoading(false);
			console.log("verificationResult", verificationResult);
		}, 3000);
		return () => clearTimeout(timeout);
	}, [verificationResult]);
	return (
		<Container px={"px-0"}>
			<View className="px-6">
				<PageHeader
					header={"Verification Results"}
					backIcon
					backIconOnPress={() => {
						router.back();
					}}
				/>
			</View>
			<LinearGradient
				colors={["#E0EDFF", "#E4EFFF", "#E7F0FF"]}
				style={{ flex: 1 }}
				start={{ x: 0, y: 0 }}
				end={{ x: 0, y: 1 }}
			>
				<View className="px-6 flex-1">
					<View className="flex-1">
						{(!verificationResult || loading) && (
							<View className="flex-1 justify-center items-center">
								<ActivityIndicator size={"large"} color={"#00000014"} />
							</View>
						)}
						{verificationResult && loading === false && (
							<View className="flex-1 mt-8">
								<View className="mt-8 mb-5 rounded overflow-hidden">
									<LinearGradient
										colors={["#317BFF", "#0646A6"]}
										locations={[0.5, 0.9]}
										start={{ x: 0, y: 0 }}
										end={{ x: 1, y: 1 }}
									>
										<View className="w-full px-[10px] py-8  flex-row justify-between items-center rounded gap-1">
											<View className="flex-1">
												<Text className="font-boldSFDisplay text-[15px] text-[#FFFFFF]">
													Recommendations :
												</Text>
												<Text className="font-regularSFDisplay text-[15px] text-[#FFFFFF]">
													{verificationResult.recommendations.messages
														.slice(0, 2)
														.map((message: string, i: number) => message)
														.join(" ")}
												</Text>
											</View>
										</View>
									</LinearGradient>
								</View>
								{verificationResult.duration_check.length > 0 &&
									verificationResult.duration_check.map((result, index) => {
										return (
											<View
												key={index}
												className="flex-row flex-wrap justify-between items-center bg-white py-2 px-[10px] rounded border border-[#4CBB5E21] mb-4"
											>
												<View className="w-4/6 flex-grow">
													<Text className="font-boldSFDisplay text-sm text-[#151515]">
														Duration Check
													</Text>

													<Text className="font-regularSFDisplay text-sm text-[#151515]">
														Prescribed : {result.prescribed_duration}
													</Text>
													<Text className="font-regularSFDisplay text-sm text-[#151515]">
														Typical duration : {result.typical_duration_range}
													</Text>
												</View>
												{result.status === "Overdose" ? (
													<View className="border px-[10px] py-[2px] rounded-[14px] bg-[#BB4C4C14] border-[#BB4C4C]">
														<Text className="font-regularSFDisplay text-sm text-[#BB4C4C] leading-[20px]">
															❌ Overdose
														</Text>
													</View>
												) : (
													<View className="bg-white border border-[#4CBB5E] px-[10px] rounded-[14px]">
														<Text className="text-[#4CBB5E] text-[10px] leading-[20px]">
															✅ Safe
														</Text>
													</View>
												)}
											</View>
										);
									})}
								{verificationResult.dosage_check.length > 0 &&
									verificationResult.dosage_check.map((result, index) => {
										return (
											<View
												key={index}
												className="flex-row flex-wrap justify-between items-center bg-white py-2 px-[10px] rounded border border-[#4CBB5E21] mb-4"
											>
												<View className="w-4/6 flex-grow">
													<Text className="font-boldSFDisplay text-sm text-[#151515]">
														Dosage Check
													</Text>
													<Text className="font-regularSFDisplay text-sm text-[#151515]">
														Prescribed dosage: {result.prescribed_dosage}
													</Text>
													<Text className="font-regularSFDisplay text-sm text-[#151515]">
														Recommended range: {result.recommended_range}
													</Text>
												</View>
												{result.status === "Overdose" ||
												result.status === "Contraindicated" ? (
													<View className="border px-[10px] py-[2px] rounded-[14px] bg-[#BB4C4C14] border-[#BB4C4C]">
														<Text className="font-regularSFDisplay text-sm text-[#BB4C4C] leading-[20px]">
															❌ {result.status}
														</Text>
													</View>
												) : (
													<View className="bg-white border border-[#4CBB5E] px-[10px] rounded-[14px]">
														<Text className="text-[#4CBB5E] text-[10px] leading-[20px]">
															✅ {result.status}
														</Text>
													</View>
												)}
											</View>
										);
									})}
								{verificationResult.drug_drug_interactions?.length > 0 &&
									verificationResult.drug_drug_interactions.map(
										(result, index) => {
											return (
												<View
													key={index}
													className="flex-row flex-wrap justify-between items-center bg-white py-2 px-[10px] rounded border border-[#4CBB5E21] mb-4 "
												>
													<View className="w-4/6">
														<Text className="font-boldSFDisplay text-sm text-[#151515]">
															Drug-Drug Interactions
														</Text>
														<Text className="font-regularSFDisplay text-sm text-[#151515]">
															Interaction pairs: {result.interaction_pairs}
														</Text>
														<Text className="font-regularSFDisplay text-sm text-[#151515]">
															Severity : {result.severity}
														</Text>
													</View>
												</View>
											);
										}
									)}
								{verificationResult.suitability_for_disease_condition.length >
									0 &&
									verificationResult.suitability_for_disease_condition.map(
										(result, index) => {
											return (
												<View
													key={index}
													className="flex-row flex-wrap justify-between items-center bg-white py-2 px-[10px] rounded border border-[#4CBB5E21] mb-4"
												>
													<View className="w-4/6 flex-grow">
														<Text className="font-boldSFDisplay text-sm text-[#151515]">
															Suitability for Disease Condition
														</Text>
														<Text className="font-regularSFDisplay text-sm text-[#151515]">
															Description : {result.message}
														</Text>
													</View>
													<View className="border px-[10px] py-[2px] rounded-[14px] bg-[#BB4C4C14] border-[#BB4C4C]">
														<Text className="font-regularSFDisplay text-sm text-[#BB4C4C] leading-[20px]">
															{result.status}
														</Text>
													</View>
												</View>
											);
										}
									)}
								<View className="flex-row flex-wrap justify-between items-center bg-white pt-2 pb-3 px-[10px] rounded border border-[#4CBB5E21] mb-6">
									<View className="w-4/6 flex-grow">
										<Text className="font-boldSFDisplay text-sm text-[#151515]">
											Suitability Based On:{" Age"}
										</Text>
										<Text className="font-regularSFDisplay text-sm text-[#151515]">
											Description :{" "}
											{
												verificationResult.suitability_based_on_patient_profile
													.age.message
											}
										</Text>
									</View>
									{verificationResult.suitability_based_on_patient_profile.age
										.status === "Overdose" ||
									verificationResult.suitability_based_on_patient_profile.age
										.status === "Contraindicated" ? (
										<View className="border px-[10px] py-[2px] rounded-[14px] bg-[#BB4C4C14] border-[#BB4C4C]">
											<Text className="font-regularSFDisplay text-sm text-[#BB4C4C] leading-[20px]">
												❌{" "}
												{
													verificationResult
														.suitability_based_on_patient_profile.age.status
												}
											</Text>
										</View>
									) : (
										<View className="bg-white border border-[#4CBB5E] px-[10px] rounded-[14px]">
											<Text className="text-[#4CBB5E] text-[10px] leading-[20px]">
												✅{" "}
												{
													verificationResult
														.suitability_based_on_patient_profile.age.status
												}
											</Text>
										</View>
									)}
								</View>
								<View className="flex-row flex-wrap justify-between items-center bg-white pt-2 pb-3 px-[10px] rounded border border-[#4CBB5E21] mb-6">
									<View className="w-4/6 flex-grow">
										<Text className="font-boldSFDisplay text-sm text-[#151515]">
											Suitability Based On:{"Weight "}
										</Text>
										<Text className="font-regularSFDisplay text-sm text-[#151515]">
											Description :{" "}
											{
												verificationResult.suitability_based_on_patient_profile
													.weight.message
											}
										</Text>
									</View>
									{verificationResult.suitability_based_on_patient_profile
										.weight.status === "Overdose" ||
									verificationResult.suitability_based_on_patient_profile.weight
										.status === "Contraindicated" ? (
										<View className="border px-[10px] py-[2px] rounded-[14px] bg-[#BB4C4C14] border-[#BB4C4C]">
											<Text className="font-regularSFDisplay text-sm text-[#BB4C4C] leading-[20px]">
												❌{" "}
												{
													verificationResult
														.suitability_based_on_patient_profile.weight.status
												}
											</Text>
										</View>
									) : (
										<View className="bg-white border border-[#4CBB5E] px-[10px] rounded-[14px]">
											<Text className="text-[#4CBB5E] text-[10px] leading-[20px]">
												✅{" "}
												{
													verificationResult
														.suitability_based_on_patient_profile.weight.status
												}
											</Text>
										</View>
									)}
								</View>
								<View className="flex-row flex-wrap justify-between items-center bg-white pt-2 pb-3 px-[10px] rounded border border-[#4CBB5E21] mb-6">
									<View className="w-4/6 flex-grow">
										<Text className="font-boldSFDisplay text-sm text-[#151515]">
											Suitability Based On:{"Gender "}
										</Text>
										<Text className="font-regularSFDisplay text-sm text-[#151515]">
											Description :{" "}
											{
												verificationResult.suitability_based_on_patient_profile
													.gender.message
											}
										</Text>
									</View>
									{verificationResult.suitability_based_on_patient_profile
										.gender.status === "Overdose" ||
									verificationResult.suitability_based_on_patient_profile.gender
										.status === "Contraindicated" ? (
										<View className="border px-[10px] py-[2px] rounded-[14px] bg-[#BB4C4C14] border-[#BB4C4C]">
											<Text className="font-regularSFDisplay text-sm text-[#BB4C4C] leading-[20px]">
												❌{" "}
												{
													verificationResult
														.suitability_based_on_patient_profile.gender.status
												}
											</Text>
										</View>
									) : (
										<View className="bg-white border border-[#4CBB5E] px-[10px] rounded-[14px]">
											<Text className="text-[#4CBB5E] text-[10px] leading-[20px]">
												✅{" "}
												{
													verificationResult
														.suitability_based_on_patient_profile.gender.status
												}
											</Text>
										</View>
									)}
								</View>
								<View className="flex-row flex-wrap justify-between items-center bg-white pt-2 pb-3 px-[10px] rounded border border-[#4CBB5E21] mb-6">
									<View className="w-4/6 flex-grow">
										<Text className="font-boldSFDisplay text-sm text-[#151515]">
											Suitability Based On:{" Pregnancy Status"}
										</Text>
										<Text className="font-regularSFDisplay text-sm text-[#151515]">
											Description :{" "}
											{
												verificationResult.suitability_based_on_patient_profile
													.pregnancy_status.message
											}
										</Text>
									</View>
									{verificationResult.suitability_based_on_patient_profile
										.pregnancy_status.status === "Overdose" ||
									verificationResult.suitability_based_on_patient_profile
										.pregnancy_status.status === "Contraindicated" ? (
										<View className="border px-[10px] py-[2px] rounded-[14px] bg-[#BB4C4C14] border-[#BB4C4C]">
											<Text className="font-regularSFDisplay text-sm text-[#BB4C4C] leading-[20px]">
												❌{" "}
												{
													verificationResult
														.suitability_based_on_patient_profile
														.pregnancy_status.status
												}
											</Text>
										</View>
									) : (
										<View className="bg-white border border-[#4CBB5E] px-[10px] rounded-[14px]">
											<Text className="text-[#4CBB5E] text-[10px] leading-[20px]">
												✅{" "}
												{
													verificationResult
														.suitability_based_on_patient_profile
														.pregnancy_status.status
												}
											</Text>
										</View>
									)}
								</View>
								<View className="flex-row flex-wrap justify-between items-center bg-white pt-2 pb-3 px-[10px] rounded border border-[#4CBB5E21] mb-6">
									<View className="w-4/6 flex-grow">
										<Text className="font-boldSFDisplay text-sm text-[#151515]">
											Suitability Based On: {"Lifestyle"}
										</Text>
										<Text className="font-regularSFDisplay text-sm text-[#151515]">
											Description :{" "}
											{
												verificationResult.suitability_based_on_patient_profile
													.lifestyle.message
											}
										</Text>
									</View>
									{verificationResult.suitability_based_on_patient_profile
										.lifestyle.status === "Overdose" ||
									verificationResult.suitability_based_on_patient_profile
										.lifestyle.status === "Contraindicated" ? (
										<View className="border px-[10px] py-[2px] rounded-[14px] bg-[#BB4C4C14] border-[#BB4C4C]">
											<Text className="font-regularSFDisplay text-sm text-[#BB4C4C] leading-[20px]">
												❌{" "}
												{
													verificationResult
														.suitability_based_on_patient_profile.lifestyle
														.status
												}
											</Text>
										</View>
									) : (
										<View className="bg-white border border-[#4CBB5E] px-[10px] rounded-[14px]">
											<Text className="text-[#4CBB5E] text-[10px] leading-[20px]">
												✅{" "}
												{
													verificationResult
														.suitability_based_on_patient_profile.lifestyle
														.status
												}
											</Text>
										</View>
									)}
								</View>
								{verificationResult.suitability_based_on_patient_profile
									.comorbidities.length > 0 && (
									<View className="  bg-white pt-2 pb-3 px-[10px] rounded border border-[#4CBB5E21] mb-6">
										<View className="w-4/6 flex-grow">
											<Text className="font-boldSFDisplay text-sm text-[#151515]">
												Suitability Based On: {"Comorbidities"}
											</Text>
										</View>
										{verificationResult.suitability_based_on_patient_profile.comorbidities.map(
											(result: any, index: number) => {
												return (
													<View
														key={index}
														className="flex-row flex-wrap justify-between items-center "
													>
														<View className="w-4/6 flex-grow mb-2">
															<Text className="font-regularSFDisplay text-sm text-[#151515]">
																Comorbidity name : {result.comorbidity_name}
															</Text>
															<Text className="font-regularSFDisplay text-sm text-[#151515]">
																Description : {result.message}
															</Text>
														</View>
														{result.status === "Overdose" ||
														result.status === "Contraindicated" ? (
															<View className="border px-[10px] py-[2px] rounded-[14px] bg-[#BB4C4C14] border-[#BB4C4C]">
																<Text className="font-regularSFDisplay text-sm text-[#BB4C4C] leading-[20px]">
																	❌ {result.status}
																</Text>
															</View>
														) : (
															<View className="bg-white border border-[#4CBB5E] px-[10px] rounded-[14px]">
																<Text className="text-[#4CBB5E] text-[10px] leading-[20px] font-regularSFDisplay">
																	✅ {result.status}
																</Text>
															</View>
														)}
													</View>
												);
											}
										)}
									</View>
								)}
							</View>
						)}
					</View>
					{loading === false && (
						<View className="flex-row justify-between gap-4 mb-10">
							<View className="flex-1">
								<PrimaryButton
									text={"Optimize"}
									onPress={() => router.push("/optimizePrescription")}
								/>
							</View>
							<View className="flex-1">
								<OutlineButton
									text={"Dispense"}
									onPress={() => setModalOpen(true)}
								/>
							</View>
						</View>
					)}
				</View>
			</LinearGradient>
			<Modal
				isVisible={modalOpen}
				onBackdropPress={() => {
					setModalOpen(false);
				}}
			>
				<View className="bg-white px-6 py-10 rounded-3xl">
					<View className="justify-center items-center gap-3 mb-7">
						<Text className="font-boldSFDisplay text-lg text-[#101828]">
							Dispense Drug
						</Text>
						<Text className="text-center text-[#667085] text-lg">
							Are you sure you want to dispense this prescription?
						</Text>
					</View>
					<View className="gap-4">
						<PrimaryButton
							bg={"#317BFF"}
							text="Yes, dispense"
							onPress={handleDispense}
						/>
						<PrimaryButton
							bg={"#D9D9D9"}
							text="Cancel"
							color={"#5E5E5E"}
							onPress={() => {
								setModalOpen(false);
							}}
						/>
					</View>
				</View>
			</Modal>
		</Container>
	);
};

export default PrescriptionVerificationScreen;
