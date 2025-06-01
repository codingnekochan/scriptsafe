import {
	dosageUnit,
	durationUnit,
	frequencyUnit,
} from "@/constants/contentProps";
import React from "react";
import { View } from "react-native";
import CustomSelectInput from "../Inputs/SelectInput";
import CustomTextInput from "../Inputs/TextInput";

const DrugFormItem = ({
	index,
	handleChange,
	error,
	medicationsList,
	conditionsList,
}: any) => {
	return (
		<View className="flex-1">
			<View>
				<CustomSelectInput
					name="What is the diagnosis or condition being treated?"
					options={conditionsList}
					onSelect={(val: any) =>
						handleChange(index, "condition_id", val.id)
					}
					error={error.condition}
				/>

				<CustomSelectInput
					name="Drug Name"
					placeholder="Enter"
					options={medicationsList}
					onSelect={(val: any) => handleChange(index, "drug_id", val.id)}
					error={error.drug}
				/>
				<View className="flex-row justify-between items-center gap-3">
					<View className="w-1/2">
						<CustomTextInput
							name="Dosage"
							placeholder="0"
							onChangeText={(val: string) =>
								handleChange(index, "dosage_value", val)
							}
							error={error.dosage}
							keyboardType="numeric"
						/>
					</View>
					<View className={`w-1/2 ${error.frequency ? "mb-6" : ""}`}>
						<CustomSelectInput
							name="Dosage Unit"
							options={dosageUnit}
							placeholder="mcg"
							onSelect={(val: any) =>
								handleChange(index, "dosage_unit", val.value)
							}
							error={error.dosageUnit}
						/>
					</View>
				</View>
				<View className="flex-row justify-between items-center gap-3">
					<View className="w-1/2">
						<CustomTextInput
							name="Frequency"
							placeholder="0"
							onChangeText={(val: string) =>
								handleChange(index, "frequency_value", val)
							}
							error={error.frequency}
							keyboardType="numeric"
						/>
					</View>
					<View className={`w-1/2 ${error.frequency ? "mb-6" : ""}`}>
						<CustomSelectInput
							name="Frequency Unit"
							placeholder="x daily"
							options={frequencyUnit}
							onSelect={(val: any) =>
								handleChange(index, "frequency_unit", val.value)
							}
							disabled={error.frequencyUnit}
						/>
					</View>
				</View>
				<View className="flex-row justify-between items-center gap-3">
					<View className="w-1/2">
						<CustomTextInput
							name="Duration"
							placeholder="0"
							onChangeText={(val: string) =>
								handleChange(index, "duration_value", val)
							}
							error={error.duration}
							keyboardType="numeric"
						/>
					</View>
					<View className={`w-1/2 ${error.duration ? "mb-6" : ""}`}>
						<CustomSelectInput
							name="Duration Unit"
							placeholder="Days"
							options={durationUnit}
							onSelect={(val: any) =>
								handleChange(index, "duration_unit", val.value)
							}
							error={error.durationUnit}
						/>
					</View>
				</View>
			</View>
		</View>
	);
};

export default DrugFormItem;
